import json, requests, sys

from os.path import dirname, abspath
parent_dir = dirname(dirname(abspath(__file__)))
sys.path.append(parent_dir)

from couchdb_config import Config

get_command = "http://{user}:{password}@{host}:{port}/{database}/{id}"

# set get_view command param
def get_db(db_name, id):
    return json.loads(requests.get(
        get_command.format(user=Config.USER,
                                password=Config.PASSWORD,
                                host=Config.HOST, port=Config.PORT,
                                database=db_name,
                                id = id)
    ).content.decode("UTF-8"))


# get result data
def get_age_distribution_for_citys():
    return json.dumps(get_db('aurin', '2101d093263ee4cff47bd8cbb8c98912')['age_distribution'])

def get_age_distribution_for_states():
    return json.dumps(get_db('aurin', 'dcf3db56baea45d93fd033ca7424db5b')['age_distribution'])

def get_incomes_for_citys():
    return json.dumps(get_db('aurin', '2101d093263ee4cff47bd8cbb8edd2c2')['incomes'])

def get_incomes_for_states():
    return json.dumps(get_db('aurin', '6717d242b5c572b6bd66ac82c650b912')['income'])

def get_level_of_education_for_citys():
    return json.dumps(get_db('aurin', '5307ab42bfd07ebceea1ed6bc22cd2d2')['level_of_education'])

def get_level_of_education_for_states():
    return json.dumps(get_db('aurin', '6717d242b5c572b6bd66ac82c6d87f9e')['level_of_education'])

def main():
    print(get_level_of_education_for_citys())

# if __name__ == '__main__':
#     main()