import sys

from os.path import dirname, abspath
parent_dir = dirname(dirname(abspath(__file__)))

sys.path.append(parent_dir)

from utils.sentiment_analysis import calculate_sentiment_scores
from utils.utils import find_root_folder

root_dir = find_root_folder()
data_5G = root_dir + "/Twitter-API-Interfaces/5G/5G_twitter_data.json"

if __name__=='__main__':
    lists = calculate_sentiment_scores(data_5G)
    print(lists[:5])