from flask import Flask, render_template, jsonify
from flask_restful import Api, Resource
import couchdb
from flask_cors import CORS
from flask import make_response
import json
from views import *


app = Flask(__name__)
# app.config.from_object(Config)
CORS(app)
api = Api(app)


# server = couchdb.Server(Config.COUCHDB_SERVER)
# server.delete(Config.COUCHDB_DATABASE)
# db = server.create(Config.COUCHDB_DATABASE)
# db = server[Config.COUCHDB_DATABASE]


# data = json.load(open("AFL_twitter_data.json", 'r', encoding='UTF-8'))
# for d in data:
#     db.save(d)


# used to set design_doc
# requests.put(
#   set_design_doc.format(user=Config.USER,
#                         password=Config.PASSWORD,
#                         host=Config.HOST,
#                         port=Config.PORT,
#                         database=Config.COUCHDB_DATABASE,
#                         design_doc=design_doc),
#   headers={"Content-Type": "application/json"},
#   data=json.dumps(design)
# )


@app.route("/")
def home_page():
    return render_template("scenario1.html", title="CCC-Team35 Home Page", contents="Welcome to Home page !")


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)


# AFL (Restful design)
class Scenario1(Resource):
    # return json
    # if want to return the content frontend needs, process reply
    def get(self):
        contents = get_afl()
        reply = jsonify(contents["rows"])
        return reply


# define the route of Scenario1
api.add_resource(Scenario1, '/scenario1_afl', endpoint='scenario1_afl')
