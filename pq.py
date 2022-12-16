from lxml import etree
import requests
import random
import json
headers = [
    {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1)'' AppleWebKit/537.36 (KHTML, like Gecko) ''Chrome/86.0.4240.111 Safari/537.36'},
    {
        'User-Agent': "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 2.0.50727; Media Center PC 6.0)"},
    {
        'User-Agent': "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 1.0.3705; .NET CLR 1.1.4322)"},
    {
        'User-Agent': "Mozilla/4.0 (compatible; MSIE 7.0b; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.50727; InfoPath.2; .NET CLR 3.0.04506.30)"},
    {
        'User-Agent': "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3) Arora/0.3 (Change: 287 c9dfb30)"},
    {'User-Agent': "Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.6"},
    {'User-Agent': "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.2pre) Gecko/20070215 K-Ninja/2.1.1"},
    {'User-Agent': "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9) Gecko/20080705 Firefox/3.0 Kapiko/3.0"},
    {'User-Agent': "Mozilla/5.0 (X11; Linux i686; U;) Gecko/20070322 Kazehakase/0.4.5"}]


def get_songmid(url):
    '''
    获取歌曲id和名称，歌手
    :param url:
    :return:
    '''
    response = requests.get(url=url, headers=random.choice(headers), timeout=5).text
    page_html = etree.HTML(response)
    author = page_html.xpath('/html/body/div[2]/div[1]/div/div[1]/h1[2]/@title')[0]
    a_list = page_html.xpath('/html/body/div[2]/div[2]/div[1]/div[2]/ul[2]/li/div/div[3]/span/a')
    for a in a_list:
        songmid = a.xpath('./@href')[0][22:-5]
        name = a.xpath('./@title')[0]
        get_vkey(songmid, name,author)


def get_vkey(songmid, name,author):
    '''
    获取vkey
    :param songmind:
    :param name:
    :return:
    '''
    data = {"req": {"module": "CDN.SrfCdnDispatchServer", "method": "GetCdnDispatch",
                    "param": {"guid": "5831199011", "calltype": 0, "userip": ""}},
            "req_0": {"module": "vkey.GetVkeyServer", "method": "CgiGetVkey",
                      "param": {"guid": "5831199011", "songmid": [songmid], "songtype": [0],
                                "uin": "2325794997", "loginflag": 1, "platform": "20"}},
            "comm": {"uin": 2325794997, "format": "json", "ct": 24, "cv": 0}} 

    url_vkey_get = "https://u.y.qq.com/cgi-bin/musicu.fcg?callback=“”&g_tk=352421221&jsonpCallback=getplaysongvkey7281977218930408&loginUin=1484232187&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data="
    ret = requests.get(url=url_vkey_get+json.dumps(data),headers=random.choice(headers)).json()
    purl = ret['req_0']['data']['midurlinfo'][0]['purl']#可以获取vkey 但是purl里面包含vkey是音乐下载地址
    if purl:
        download_music(purl,name,author)
def download_music(purl,name,author):
    ret = requests.get('http://106.120.158.153/amobile.music.tc.qq.com/'+purl,headers=random.choice(headers)).content
    with open(f'{name}-{author}.mp3','wb') as f:
        f.write(ret)
    print(f'{name}-{author}','下载完成')

if __name__ == '__main__':
    url = 'https://y.qq.com/n/yqq/singer/001Lr98T0yEWAk.html' #按歌手分类的地址
    get_songmid(url)
