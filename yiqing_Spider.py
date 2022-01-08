# -*- coding: utf-8 -*-
# @Time    : 2021/8/4 1:44
# @Author  : 陈玉辉
# @File    : yiqing_Spider.py
import requests
import json
import pymysql
from selenium import webdriver
"""
爬取疫情相关数据用于制作可视化
数据需求
    1. 现在全国各省的确诊人数
    2. 从疫情爆发到现在每月的确诊人数跟治愈人数
    3. 现在确诊人数，无症状人数，疑似病例，重症人数
"""
connt = pymysql.connect(user='root',
                        password='cyh0110',
                        host='127.0.0.1',
                        port=3306,
                        database='yiqing')
cur = connt.cursor()
driver = webdriver.Chrome()
def get_his_date():
    url = 'https://ncovdata.market.alicloudapi.com/ncov/cityDiseaseInfoWithTrend'
    AppCode = '2f648fa4106340ffb32c96a98f23ba92'
    headers = {
        'Authorization': 'APPCODE {}'.format(AppCode)
    }
    response = requests.get(url, headers=headers)
    json_str = json.loads(response.content)
    day_list = json_str['trend']
    index = []
    for today in day_list:
        day = today['day']
        if day in ['1.10', '2.01', '3.01', '4.01', '5.01', '6.01', '7.01', '8.01', '9.01', '10.01', '11.01', '12.01']:
            dex = day_list.index(today)
            index.append(day_list[dex])
    for month in index:
        # 获取时间
        date = month['fullDay']
        # 获取累计确诊人数
        sure = month['sure_cnt']
        # 获取累计治愈人数
        cure = month['cure_cnt']
        print(date, sure, cure)
    #     sql = f"INSERT INTO his_data VALUES({date}, {sure}, {cure})"
    #     cur.execute(sql)
    #     connt.commit()
    # cur.close()
    # connt.close()


def get_now_date():
    driver.get('https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_aladin_banner')
    # 现有确诊人数
    xyqz = driver.find_element_by_xpath('//*[@id="ptab-0"]/div[1]/div[2]/div[1]/div[2]').text.replace(',', '')
    # 无症状人数
    wzz = driver.find_element_by_xpath('//*[@id="ptab-0"]/div[1]/div[2]/div[2]/div[2]').text.replace(',', '')
    # 现有疑似
    xyys = driver.find_element_by_xpath('//*[@id="ptab-0"]/div[1]/div[2]/div[3]/div[2]').text.replace(',', '')
    # 现有重症
    xyzz = driver.find_element_by_xpath('//*[@id="ptab-0"]/div[1]/div[2]/div[4]/div[2]').text.replace(',', '')
    # 累计确诊
    ljqz = driver.find_element_by_xpath('//*[@id="ptab-0"]/div[1]/div[3]/div[1]/div[2]').text.replace(',', '')
    # 累计治愈
    ljzy = driver.find_element_by_xpath('//*[@id="ptab-0"]/div[1]/div[3]/div[3]/div[2]').text.replace(',', '')
    # print(int(xyqz), int(wzz), int(xyys), int(xyzz), int(ljqz), int(ljzy))
    sql = f"INSERT INTO now_data VALUES({int(xyqz)}, {int(wzz)}, {int(xyys)}, {int(xyzz)}, {int(ljqz)}, {int(ljzy)})"
    cur.execute(sql)
    connt.commit()
    # 展开全部
    driver.find_element_by_xpath('//*[@id="nationTable"]/div/span').click()
    tbody = driver.find_elements_by_xpath('//*[@id="nationTable"]/table/tbody//tr')
    # print(len(tbody))
    for tr in tbody:
        pro = tr.find_element_by_xpath('./td[1]/div/span[2]').text
        sure = tr.find_element_by_xpath('./td[3]').text
        # print(type(pro), type(int(sure)))
        sql = f"INSERT INTO pro_data VALUES('{pro}',{int(sure)})"
        cur.execute(sql)
        connt.commit()
    cur.close()
    connt.close()

# get_now_date()
get_his_date()
