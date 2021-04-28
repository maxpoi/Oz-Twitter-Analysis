# 一个通过 keyword 获取 twitter 数据的 qucik test

# 使用 tweept 库, link: https://github.com/tweepy/tweepy
# APIs reference: https://docs.tweepy.org/en/latest/api.html#api-reference
# https://developer.twitter.com/en/docs/twitter-api/v1/tweets/search/api-reference/get-search-tweets

import tweepy
import json

'''
consumer_key = "$API key"
consumer_secret = "$API Secret Key"
access_token = "$Access Token"
access_token_secret = "$Access Token Secret"
'''
consumer_key = "vyAkQ5TdpMI8NQlEltLODPNvF"
consumer_secret = "Eh2lHd7FLcZBvRUGlT9RaOyqK0v3j2wrQ0VMHchH0VVH3fggCZ"
access_token = "1292037174641082368-Qgc4ZVJeCI94062N1JgZTyoO9ZueLb"
access_token_secret = "y49DejHYECENWHG2BxZaDu4ah1ntLBXFrkyOlv3M5wjl4"

# 获取 auth 对象
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

# 可以通过以下语句设置代理，如果连 VPN 则不需要
# api = tweepy.API(auth,proxy='127.0.0.1:1080')

# 获取 api 句柄
api = tweepy.API(auth)

# The keyword we would like to search
search_keyword = 'hi'
# The geo restriction if we need
geo='20.593700,78.962900,100km'

# 搜索 twitter 内容 (q = 关键字 , geocode = " latitude,longitude,radius ", count = 返回的数据量 PS:推特一次最多返回100条)
search_results = api.search(q = search_keyword, geocode = geo ,count = 100)

#对对象进行迭代
for tweet in search_results:
    print('1')
    # tweet 还是一个对象,推特的相关信息在 tweer._json 里
    #这里是检测消息是否含有'text'键,并不是所有 TWitter 返回的所有对象都是消息(有些可能是用来删除消息或者其他内容的动作--这个没有确认),区别就是消息对象中是否含有'text'键
    if 'text' in tweet._json:
        print(tweet._json['text'])
        #这里是把内容给打印出来了,如果需要保存到文件需要用json库的dumps函数转换为字符串形式后写入到文件中
        #例如 :output_file.write(json.dumps(tweet._json))