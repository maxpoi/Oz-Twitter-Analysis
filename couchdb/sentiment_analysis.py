# @author, Jiacheng Ye, 904973

import nltk

# try:
#     nltk.download([
#         "stopwords",
#         "vader_lexicon",
#         "averaged_perceptron_tagger",
#         "punkt"
#     ])
# except:
#     pass

import re
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.sentiment.vader import SentimentIntensityAnalyzer as SIA

import json


PROJECT_FOLDER = "COMP90024-Assignment-2"
POSITIVE = 1
NEGATIVE = -1
NETURAL = 0


'''
SentimentIntensityAnalyzer is a package from NLTK
It is a simplied clssifier for analysising sentiment scores 
with short texts, especially social texts like tweets.
'''
def calculate_sentiment_scores(doc_path):
    '''
    input: an absolute path of the doc, doc must in json format.
    output: a list of dictionaries. Each dictionary is excatly the same as the input;
            except with 1 extra field: sentiment_score, range from -1~1
    '''
    file = open(doc_path, "r")
    doc = json.load(file)

    sia = SIA()

    ret = []
    for tweet in doc:
        shallow_copy = tweet.copy()

        # remove user names; non-alphabetic chars; and hyper links
        tweet = ' '.join(re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(http://\S+)|(https://\S+)", " ", tweet['text']).split())
        tweet = tweet.lower()

        shallow_copy['sentiment_score'] = get_sentiment_tag(sia.polarity_scores(tweet))
        ret.append(shallow_copy)
    
    return ret


def get_sentiment_tag(score_dict):
    if score_dict['compound'] > 0.05:
        return POSITIVE
    elif score_dict['compound'] < -0.05:
        return NEGATIVE
    else:
        return NETURAL