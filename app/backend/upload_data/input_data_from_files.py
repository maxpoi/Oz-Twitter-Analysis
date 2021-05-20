import couchdb, json, sys

from os.path import dirname, abspath
parent_dir = dirname(dirname(abspath(__file__)))
sys.path.append(parent_dir)

from couchdb_config import Config
from utils.sentiment_analysis import calculate_sentiment_scores

data_base1 = [["scenario1_afl", "AFL_twitter_data.json"], ["scenario2_food", "food_twitter_data.json"],
              ["scenario3_5g", "5G_twitter_data.json"], ["scenario4_vaccine", "vaccine_twitter_data.json"]]

data_base2 = [["scenario1_afl", "AFL_from_bigTwitter.json"], ["scenario3_5g", "5G_from_bigTwitter.json"], 
              ["scenario4_vaccine", "vaccine_from_bigTwitter.json"]]

data_base3 = [["twitter_raw_data", "data_from_bigTwitter.json"]]

aurin_root = "AURIN/"
AURIN_datas = ["age_distribution_for_cities.json", "age_distribution_for_states.json", 
               "incomes_for_cities.json", "incomes_for_states.json",
               "level_of_education_for_cities.json", "level_of_education_for_states.json"]

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
    
    db_name = "aurin"
    if (not server.__contains__(db_name)):
        db = server.create(db_name)
    db = server[db_name]
    for json_file in AURIN_datas:
        print(aurin_root + json_file)
        if json_file == "age_distribution_for_cities.json" or json_file == "age_distribution_for_states.json":
            data = json.load(open(aurin_root + json_file, 'r', encoding='UTF-8'))
            doc = dict(_id = data["_id"], _rev = data["_rev"], age_distribution = data["age_distribution"])
            db.save(doc)
        elif json_file == "incomes_for_cities.json" or json_file == "incomes_for_states.json":
            data = json.load(open(aurin_root + json_file, 'r', encoding='UTF-8'))
            doc = dict(_id = data["_id"], _rev = data["_rev"], incomes = data["incomes"])
            db.save(doc)
        elif json_file == "level_of_education_for_cities.json" or json_file == "level_of_education_for_states.json":
            data = json.load(open(aurin_root + json_file, 'r', encoding='UTF-8'))
            doc = dict(_id = data["_id"], _rev = data["_rev"], level_of_education = data["level_of_education"])
            db.save(doc)

if __name__ == '__main__':
    main()
