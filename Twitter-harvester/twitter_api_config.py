'''
    Configure Twitter API arguments
'''

import tweepy

def twitter_api():
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

    # 获取 api 句柄, 当达到速率限制时等待 (15分钟内最多900次查询)
    api = tweepy.API(auth, wait_on_rate_limit=True)

    return api