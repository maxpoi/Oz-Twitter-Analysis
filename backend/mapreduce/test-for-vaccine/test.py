import sys, json

from os.path import dirname, abspath
parent_dir = dirname(dirname(abspath(__file__)))

sys.path.append(parent_dir)

from utils.sentiment_analysis import calculate_sentiment_scores
from utils.utils import find_root_folder

root_dir = find_root_folder()
data_vaccine = root_dir + "/Twitter-API-Interfaces/vaccine/vaccine_twitter_data.json"

if __name__=='__main__':
    filename = 'vaccine_sentiment_data.json'

    file_handle=open(filename,mode='w')

    lists = calculate_sentiment_scores(data_vaccine)

    json.dump(lists, file_handle)