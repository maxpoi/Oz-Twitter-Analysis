# 搜索 keyword = '$keyword' 的推文并统计个数
# 搜索 5 个城市: Melbourne, Sydney, Canberra, Adelaide, Brisbane

# 使用 tweept 库, link: https://github.com/tweepy/tweepy
# APIs reference: https://docs.tweepy.org/en/latest/api.html#api-reference
# https://developer.twitter.com/en/docs/twitter-api/v1/tweets/search/api-reference/get-search-tweets

import tweepy
import json
from twitter_api_config import twitter_api

# Define the geo restriction for cities
city_geo = {'Melbourne': '-37.813611,144.963056,60km', 'Sydney': '-33.865143,151.209900,63km',
            'Canberra': '-35.282001,149.128998,16km', 'Adelaide': '-34.928497,138.600739,32km', 
            'Brisbane': '-27.469770,153.025131,71km', 'Perth': '-31.950527,115.860458,45km'}

# 查询出现在某个 city 中的所有 带有 keyword 的推文数量
# return 统计得到的数字
def count_keyword_in_different_cities(keyword, city, max_num, api):
    result_list = []

    count = 0
    # 定义 max_id 以实现不断查询
    max_id = 0
    prev_id = 0

    # 因为 Twitter_api 限制每次最多返回100条，所以使用 max_id 字段限制每次返回的内容不同。
    for i in range(0, int(max_num/100)):
        # 第一次执行，没有 max_id 字段，调用无 max_id 的 api.search
        if (i == 0):
            search_results = api.search(q = keyword, geocode = city_geo[city], count = 100)
        # 后续执行，有 max_id 字段，通过 max_id 使其返回不重复的查询结果
        else:
            search_results = api.search(q = keyword, geocode = city_geo[city], max_id = max_id, count = 100)

        # 如果查询结果为空，则结束循环
        if (len(search_results) == 0):
            print(city, count)
            return result_list

        # Update max_id --- max_id 是最后一条查询结果的 _id
        max_id = search_results[-1]._json['id'] - 1

        # 处理 tweet 内容
        for tweet in search_results:
            # 如果这条的 id 和 上一条一样，证明已经找到了所有 tweets, return 即可
            if (tweet._json['id'] == prev_id):
                # dict_result = {'keyword': keyword, 'city': city, 'results':result_list}
                print(city, count)
                return result_list

            # tweet 还是一个对象,推特的相关信息在 tweer._json 里
            #这里是检测消息是否含有'text'键,并不是所有 TWitter 返回的所有对象都是消息(有些可能是用来删除消息或者其他内容的动作--这个没有确认),区别就是消息对象中是否含有'text'键
            if 'text' in tweet._json:
                if ('RT' not in tweet._json['text']):
                    count += 1
                    dict_search = {'id': tweet._json['id_str'], 'created': tweet._json['created_at'], 'text': tweet._json['text'], 'city': city}
                    result_list.append(dict_search)
                # print(result_list)
                # file_handle.write('{\"id\":' + str(tweet._json['id_str']) + ',' + '\"created\":' + str(tweet._json['created_at']) + ',' + '\"text\":' + str(tweet._json['text']) + '},')
                prev_id = tweet._json['id']

    print(city, count)
    return result_list

def main():
    # 得到 Twitter API 句柄
    api = twitter_api()

    # The keyword we would like to search
    search_keyword = 'vaccine'

    # 定义最大查询 twitter 数量
    twitter_max_num = 100000

    # 想要查询的城市
    result_list = []

    filename = 'vaccine_twitter_data.json'

    file_handle=open(filename,mode='w')

    for city in city_geo:
        result_list.extend(count_keyword_in_different_cities(search_keyword, city, twitter_max_num, api))
     
    json.dump(result_list, file_handle)

if __name__ == '__main__':
    main()