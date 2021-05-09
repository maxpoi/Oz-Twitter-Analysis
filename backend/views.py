import json
from config import Config
import requests

# if want to add new view, add it in "views" with view_name
design = {
    "_id": "_design/design",
    "views": {
        # "afl": {
        #     "map": "function (doc) {\n  emit(doc.city, doc.id);\n}",
        #     "reduce": "_count"
        # },
        "vaccine":{
            "map": "function(doc) { emit([doc.city, doc.sentiment_score], doc.id) }",
            "reduce": "_count"
        }
    },
    "language": "javascript"
}

design_doc = "design"
# the curl command to operate couchDB: 1. create design_doc 2. get data produced with spec view 3. query
set_design_doc = "http://{user}:{password}@{host}:{port}/{database}/_design/{design_doc}"

get_view_command = "http://{user}:{password}@{host}:{port}/{database}/_design/{design_doc}/_view/{view_name}?group_level={group_level}"

queries = "http://{user}:{password}@{host}:{port}/{database}/_find"


# set get_view command param
def get_view(db_name, view_name, group_level):
    return json.loads(requests.get(
        get_view_command.format(user=Config.USER,
                                password=Config.PASSWORD,
                                host=Config.HOST, port=Config.PORT,
                                database=db_name,
                                design_doc=design_doc,
                                view_name=view_name,
                                group_level=group_level)
    ).content.decode("UTF-8"))


# get processed data
def get_afl():
    return get_view(Config.COUCHDB_DATABASE, "afl", group_level=1)
