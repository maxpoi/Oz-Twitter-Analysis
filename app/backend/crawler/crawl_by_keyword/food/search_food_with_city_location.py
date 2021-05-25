# @team 35
# @author Jiacheng Ye   904973      Shanghai, China
# @author Shiyi Xu      780801      Melbourne, Australia
# @author Yuyao Ma      1111182     Yinchuan, China
# @author Yujing Guan   1011792     Fuzhou, China
# @author Zexin Yu      10328021    Dalian, China

# Search tweets with keyword = '$keyword' and count them
# Search 5 cities: Melbourne, Sydney, Canberra, Adelaide, Brisbane

# Using the tweet library, link: https://github.com/tweepy/tweepy
# APIs reference: https://docs.tweepy.org/en/latest/api.html#api-reference
# https://developer.twitter.com/en/docs/twitter-api/v1/tweets/search/api-reference/get-search-tweets

import tweepy, json, sys

from os.path import dirname, abspath
grandparent_dir = dirname(dirname(dirname(abspath(__file__))))
sys.path.append(grandparent_dir)

from twitter_api_config import twitter_api

# Define the geo restriction for cities
city_geo = {'Melbourne': '-37.813611,144.963056,60km', 'Sydney': '-33.865143,151.209900,63km',
            'Canberra': '-35.282001,149.128998,16km', 'Adelaide': '-34.928497,138.600739,32km', 
            'Brisbane': '-27.469770,153.025131,71km', 'Perth': '-31.950527,115.860458,45km'}

# Query the number of tweets with keywords that appear in a city
# Return statistics
def count_keyword_in_different_cities(keyword, city, max_num, api):

    result_list = []

    if (keyword == '(Chinese food) OR (Dim sum) OR (dumpling) OR (Chow Mein) OR (fried rice) OR (hot pot)'):
        food = 'Chinese food'
    if (keyword == '(American food) OR (hamburger) OR (French fries) OR (KFC) OR (McDonald\'s)'):
        food = 'American food'
    if (keyword == '(Italian food) OR (pasta) OR (pizza) OR (spaghetti)'):
        food = 'Italian food'
    if (keyword == '(Korean food) OR (bibimbap) OR (kimchi)'):
        food = 'Korean food'
    if (keyword == '(Japanese food) OR (sushi) OR (sashimi)'):
        food = 'Japanese food'
    if (keyword == '(French food) OR (baguette) OR (croissant) OR (macaron)'):
        food = 'French food'

    count = 0
    # Define max_id to achieve continuous query
    max_id = 0
    prev_id = 0

    # Because of the Twitter API limits the maximum number of returns to 100 at a time, 
    # so use max_id field restricts the content returned to be different each time.
    for i in range(0, int(max_num/100)):
        # For the first time, there is no max_id field, call api.search() of no max_id
        if (i == 0):
            search_results = api.search(q = keyword, geocode = city_geo[city], count = 100)
        # For the following times, call api.search() with max_id filed to achieve unique searching
        else:
            search_results = api.search(q = keyword, geocode = city_geo[city], max_id = max_id, count = 100)

        # If the query result is empty, the loop ends
        if (len(search_results) == 0):
            print(food, city, count)
            return result_list

        # Update max_id --- max_id is the _id of last query result
        max_id = search_results[-1]._json['id'] - 1

        # Process tweet content
        for tweet in search_results:
            # If the id of this result is the same as that of the previous one, it can be proved that all tweets have been found, and then just return
            if (tweet._json['id'] == prev_id):
                print(food, city, count)
                return result_list

            # tweet is an object, and the relevant information of Twitter is in tweet._json
            # To detect whether a message contains a 'text' key. 
            # Not all objects returned by twitter are messages. The difference is whether a message object contains a 'text' key
            if 'text' in tweet._json:
                count += 1
                dict_search = {'food': food, 'id': tweet._json['id_str'], 'created': tweet._json['created_at'], 'text': tweet._json['text'], 'city': city}
                result_list.append(dict_search)
                prev_id = tweet._json['id']
                
    print(food, city, count)
    return count

def main():
    # Get Twitter API handle
    api = twitter_api()

    # The keyword we would like to search
    twitter_max_num = 100000

    filename = 'food_twitter_data.json'

    file_handle=open(filename,mode='w')

    result_list = []

    # Search 6 food types in total
    food_keyword = ['(Chinese food) OR (Dim sum) OR (dumpling) OR (Chow Mein) OR (fried rice) OR (hot pot)', '(American food) OR (hamburger) OR (French fries) OR (KFC) OR (McDonald\'s)', 
                    '(Italian food) OR (pasta) OR (pizza) OR (spaghetti)', '(Korean food) OR (bibimbap) OR (kimchi)', '(Japanese food) OR (sushi) OR (sashimi)', 
                    '(French food) OR (baguette) OR (croissant) OR (macaron)']
    
    for city in city_geo:
        for food in food_keyword:
            result_list.extend(count_keyword_in_different_cities(food, city, twitter_max_num, api))

    json.dump(result_list, file_handle)

if __name__ == '__main__':
    main()