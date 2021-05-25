# @team 35
# @author Jiacheng Ye   904973      Shanghai, China
# @author Shiyi Xu      780801      Melbourne, Australia
# @author Yuyao Ma      1111182     Yinchuan, China
# @author Yujing Guan   1011792     Fuzhou, China
# @author Zexin Yu      10328021    Dalian, China

import json, requests, sys

from os.path import dirname, abspath
parent_dir = dirname(dirname(abspath(__file__)))
sys.path.append(parent_dir)

from couchdb_config import Config

def main():
    # if want to add new view, add it in "views" with view_name
    design_afl = {
        "_id": "_design/design",
        "views": {
            "afl": {
                "map": "function (doc) {\n  emit(doc.city, doc.id);\n}",
                "reduce": "_count"
            }
        },
        "language": "javascript"
    }

    design_food = {
        "_id": "_design/design",
        "views": {
            "food": {
                "map": "function (doc) {\n  emit([doc.city, doc.food], doc.id);\n}",
                "reduce": "_count"
            }
        },
        "language": "javascript"
    }

    design_5g = {
        "_id": "_design/design",
        "views": {
            "5g": {
                "map": "function (doc) {\n  emit([doc.city, doc.sentiment_score], doc.id);\n}",
                "reduce": "_count"
            }
        },
        "language": "javascript"
    }

    design_vaccine = {
        "_id": "_design/design",
        "views": {
            "vaccine": {
                "map": "function (doc) {\n  emit([doc.city, doc.sentiment_score], doc.id);\n}",
                "reduce": "_count"
            }
        },
        "language": "javascript"
    }

    # the curl command to operate couchDB: 1. create design_doc 2. get data produced with spec view 3. query
    set_design_doc_afl = "http://{user}:{password}@{host}:{port}/scenario1_afl/_design/design_afl"
    set_design_doc_food = "http://{user}:{password}@{host}:{port}/scenario2_food/_design/design_food"
    set_design_doc_5g = "http://{user}:{password}@{host}:{port}/scenario3_5g/_design/design_5g"
    set_design_doc_vaccine = "http://{user}:{password}@{host}:{port}/scenario4_vaccine/_design/design_vaccine"

    # queries = "http://{user}:{password}@{host}:{port}/{database}/_find"

    # used to set design_doc
    requests.put(
        set_design_doc_afl.format(user=Config.USER,
                                password=Config.PASSWORD,
                                host=Config.HOST,
                                port=Config.PORT,
                                ),
        headers={"Content-Type": "application/json"},
        data=json.dumps(design_afl)
    )

    requests.put(
    set_design_doc_food.format(user=Config.USER,
                            password=Config.PASSWORD,
                            host=Config.HOST,
                            port=Config.PORT,
                            ),
    headers={"Content-Type": "application/json"},
    data=json.dumps(design_food)
    )

    requests.put(
    set_design_doc_5g.format(user=Config.USER,
                            password=Config.PASSWORD,
                            host=Config.HOST,
                            port=Config.PORT,
                            ),
    headers={"Content-Type": "application/json"},
    data=json.dumps(design_5g)
    )

    requests.put(
    set_design_doc_vaccine.format(user=Config.USER,
                            password=Config.PASSWORD,
                            host=Config.HOST,
                            port=Config.PORT,
                            ),
    headers={"Content-Type": "application/json"},
    data=json.dumps(design_vaccine)
    )

if __name__ == '__main__':
    main()

