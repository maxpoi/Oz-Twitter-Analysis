import couchdb, json
from config import Config
from views import *

def main():
    # server = couchdb.Server(Config.COUCHDB_SERVER)
    # # server.delete(Config.COUCHDB_DATABASE)
    # db = server.create(Config.COUCHDB_DATABASE)
    # db = server[Config.COUCHDB_DATABASE]
    # data = json.load(open("vaccine_sentiment_data.json", 'r', encoding='UTF-8'))
    # for d in data:
    #     db.save(d)
    
    requests.put(
        set_design_doc.format(user=Config.USER,
                                password=Config.PASSWORD,
                                host=Config.HOST,
                                port=Config.PORT,
                                database=Config.COUCHDB_DATABASE,
                                design_doc=design_doc),
        headers={"Content-Type": "application/json"},
        data=json.dumps(design)
)

if __name__ == '__main__':
    main()