# Search Twitters in 6 States:
# VIC, SA

# Use tweept library, link: https://github.com/tweepy/tweepy
# APIs reference: https://docs.tweepy.org/en/latest/api.html#api-reference
# https://developer.twitter.com/en/docs/twitter-api/v1/tweets/search/api-reference/get-search-tweets

import tweepy, couchdb, json, sys, itertools

from os.path import dirname, abspath
parent_dir = dirname(dirname(abspath(__file__)))
sys.path.append(parent_dir)
grandparent_dir = dirname(dirname(dirname(abspath(__file__))))
sys.path.append(grandparent_dir)
grandgrandparent_dir = dirname(dirname(dirname(dirname(abspath(__file__)))))
sys.path.append(grandgrandparent_dir)

from twitter_api_config import twitter_api
from couchdb_config import Config

# Define the geo restriction for states
state_geo = {'VIC': '-37.471310,144.785156,270km', 'SA': '-30.000233,136.209152,560km'}

# Search all twitters with keyword in a certain State
def count_keyword_in_different_states(keyword, state, api, db):

    count = 0
    # Define max_id in order to achieve getting non-repetitive data
    max_id = 0
    prev_id = 0

    # Because of twitter API limits the maximum number of returns to 100 at a time, 
    # so use max_id field restricts the content returned to be different each time.
    for i in itertools.count():
        # For the first time, there is no max_id field, so call api.search() without max_id
        if (i == 0):
            search_results = api.search(q = keyword, geocode = state_geo[state], count = 100)
        # After the first time, through max_id to return non duplicate query results
        else:
            search_results = api.search(q = keyword, geocode = state_geo[state], max_id = max_id, count = 100)

        # If the query result is empty, the loop ends
        if (len(search_results) == 0):
            return count

        # Update max_id --- max_id is '_id' filed of the last query result
        max_id = search_results[-1]._json['id'] - 1

        # process Tweet content
        for tweet in search_results:
            # If the id of this result is the same as that of the previous one, 
            # it can be proved that all tweets have been found, then just return
            if (tweet._json['id'] == prev_id):
                print(state, count)
                return count

            # tweet is an object, and the relevant information of Twitter is in tweet._json
            # To detect whether a message contains a 'text' key. 
            # Not all objects returned by twitter are messages. The difference is whether a message object contains a 'text' key
            if 'text' in tweet._json:
                count += 1
                # Conduct the dictionary for result
                dict_search = {'id': tweet._json['id_str'], 'created': tweet._json['created_at'], 'text': tweet._json['text'], 'state': state}
                # Save the result dictionary to CouchDB
                db.save(dict_search)
                # Update prev_id
                prev_id = tweet._json['id']

    return count

def main():
    # Get Twitter API handle
    api = twitter_api()

    # The keyword we would like to search
    search_keyword = ''

    # Define the name of CouchDB Database
    COUCHDB_DATABASE = "twitter_raw_data"
    # Get the server handle
    server = couchdb.Server(Config.COUCHDB_SERVER)
    # If the Database is not existent, create it
    if (not server.__contains__(COUCHDB_DATABASE)):
        db = server.create(COUCHDB_DATABASE)
    # Get the Database handle
    db = server[COUCHDB_DATABASE]

    count = 0
    
    for state in state_geo:
        count += count_keyword_in_different_states(search_keyword, state, api, db)
    
    print ('Total Count:', count)
     
if __name__ == '__main__':
    main()