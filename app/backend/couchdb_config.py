# @team 35
# @author Jiacheng Ye   904973      Shanghai, China
# @author Shiyi Xu      780801      Melbourne, Australia
# @author Yuyao Ma      1111182     Yinchuan, China
# @author Yujing Guan   1011792     Fuzhou, China
# @author Zexin Yu      10328021    Dalian, China

import os

class Config(object):
    # COUCHDB_SERVER = 'http://admin:admin@127.0.0.1:5984/'
    # USER = 'admin'
    # PASSWORD = 'admin'
    # HOST = '127.0.0.1'
    COUCHDB_SERVER = 'http://admin:admin@172.26.128.169:5984/'
    USER = 'admin'
    PASSWORD = 'admin'
    HOST = '172.26.128.169'
    PORT = '5984'
    # SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
