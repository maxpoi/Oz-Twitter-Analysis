import couchdb
import json
from couchdb_config import Config
from sentiment_analysis import calculate_sentiment_scores

data_base1 = [["scenario1_afl", "AFL_twitter_data.json"], ["scenario2_food", "food_twitter_data.json"],
              ["scenario3_5g", "5G_twitter_data.json"], ["scenario4_vaccine", "vaccine_twitter_data.json"]]

data_base2 = [["scenario1_afl", "AFL_from_bigTwitter.json"], ["scenario3_5g", "5G_from_bigTwitter.json"], 
              ["scenario4_vaccine", "vaccine_from_bigTwitter.json"]]

data_base3 = [["twitter_raw_data", "data_from_bigTwitter.json"]]

def main():
    server = couchdb.Server(Config.COUCHDB_SERVER)
    for db_name, json_file in data_base1:
        print(db_name, json_file)
        if (not server.__contains__(db_name)):
            db = server.create(db_name)
        db = server[db_name]
        if (db_name == "scenario1_afl" or db_name == "scenario2_food"):
            data = json.load(open(json_file, 'r', encoding='UTF-8'))
            for d in data:
                db.save(d)
        else:
            result_list = calculate_sentiment_scores(json_file)
            for result in result_list:
                db.save(result)
    
    for db_name, json_file in data_base2:
        print(db_name, json_file)
        if (not server.__contains__(db_name)):
            db = server.create(db_name)
        db = server[db_name]
        if (db_name == "scenario1_afl" or db_name == "scenario2_food"):
            data = json.load(open(json_file, 'r', encoding='UTF-8'))
            for d in data:
                db.save(d)
        else:
            result_list = calculate_sentiment_scores(json_file)
            for result in result_list:
                db.save(result)

    for db_name, json_file in data_base3:
        print(db_name, json_file)
        if (not server.__contains__(db_name)):
            db = server.create(db_name)
        db = server[db_name]
        data = json.load(open(json_file, 'r', encoding='UTF-8'))
        for d in data:
            db.save(d)
    
if __name__ == '__main__':
    main()
