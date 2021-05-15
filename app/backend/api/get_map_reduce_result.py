import json, requests, sys

from os.path import dirname, abspath
parent_dir = dirname(dirname(abspath(__file__)))
sys.path.append(parent_dir)

from couchdb_config import Config

get_view_command = "http://{user}:{password}@{host}:{port}/{database}/_design/{design_doc}/_view/{view_name}?group_level={group_level}"

# set get_view command param
def get_view(db_name, view_name, design_doc, group_level):
    return json.loads(requests.get(
        get_view_command.format(user=Config.USER,
                                password=Config.PASSWORD,
                                host=Config.HOST, port=Config.PORT,
                                database=db_name,
                                design_doc=design_doc,
                                view_name=view_name,
                                group_level=group_level)
    ).content.decode("UTF-8"))


# get result data
def get_afl():
    return json.dumps(get_view('scenario1_afl', "afl", "design_afl", 1)["rows"])

def get_food():
    return json.dumps(get_view('scenario2_food', "food", "design_food", 2)["rows"])

def get_5g():
    return json.dumps(get_view('scenario3_5g', "5g", "design_5g", 2)["rows"])

def get_vaccine():
    return json.dumps(get_view('scenario4_vaccine', "vaccine", "design_vaccine", 2)["rows"])

def main():
    print("afl:", get_afl())
    print("food:", get_food())
    print("5g:", get_5g())
    print("vaccine:", get_vaccine())

# if __name__ == '__main__':
#     main()