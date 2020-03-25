import requests
from bs4 import BeautifulSoup
import json
import os
import sys

## python파일의 위치
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

print('지역별현황크롤러 시작')

req = requests.get('http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=13&ncvContSeq=&contSeq=&board_id=&gubun=')
req.encoding= None
html = req.content
soup = BeautifulSoup(html, 'html.parser')
my_titles = soup.select(
    '.maplist > div'
    )

지역별확진자 = []
datas = my_titles[0:]

for data in datas:
    지역이름 = data.find_all('h4', class_='cityname')[0].text
    확진자수 = int(data.find_all('span', class_='num')[0].text[:-1].replace(',', ''))

    지역별확진자.append(확진자수)

with open("지역별현황.js", "w", encoding='UTF-8-sig') as json_file:
    json.dump(지역별확진자[1:], json_file, ensure_ascii=False, indent=4)

dataA = ''
with open("지역별현황.js", "r", encoding='UTF-8-sig') as f:
    while True:
        line = f.readline()
        if not line: break
        dataA += line
dataA = 'var 전국지역확진자 = ' + dataA + ';'

with open("지역별현황.js", "w", encoding='UTF-8-sig') as f_write:
    f_write.write(dataA)

print('지역별현황크롤러 끝')

############################################################################
print('')
print('국내현황크롤러 시작')

req = requests.get('http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=13&ncvContSeq=&contSeq=&board_id=&gubun=')
req.encoding= None
html = req.content
soup = BeautifulSoup(html, 'html.parser')
my_data = soup.select(
    'table >tbody>tr'
    )

#print(my_data[0])

국내현황 = []
datas = my_data[0:]

전일대비증감 = int(datas[0].find_all('td', class_='number')[0].text.replace(',',''))
확진자수 = int(datas[0].find_all('td', class_='number')[1].text.replace(',',''))
완치자수 = int(datas[0].find_all('td', class_='number')[2].text.replace(',',''))
사망자수 = int(datas[0].find_all('td', class_='number')[3].text.replace(',',''))
국내현황.append(전일대비증감)
국내현황.append(확진자수)
국내현황.append(완치자수)
국내현황.append(사망자수)

with open("국내현황.js", "w", encoding='UTF-8-sig') as json_file:
    json.dump(국내현황[0:], json_file, ensure_ascii=False, indent=4)

dataA = ''
with open("국내현황.js", "r", encoding='UTF-8-sig') as f:
    while True:
        line = f.readline()
        if not line: break
        dataA += line
dataA = 'var 국내현황 = ' + dataA + ';'

with open("국내현황.js", "w", encoding='UTF-8-sig') as f_write:
    f_write.write(dataA)

print('국내현황크롤러 끝')

############################################################################
print('')
print('검사자크롤러 시작')

req = requests.get('http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun=')
req.encoding= None
html = req.content
soup = BeautifulSoup(html, 'html.parser')
my_data = soup.select(
    'table >tbody >tr'
    )

#print(my_data[1])


검사자현황 = []
datas = my_data[1]

결과음성 = int(datas.find_all('td')[4].text.replace(',',''))
검사중 = int(datas.find_all('td')[6].text.replace(',',''))

검사자현황.append(결과음성)
검사자현황.append(검사중)


with open("검사자현황.js", "w", encoding='UTF-8-sig') as json_file:
    json.dump(검사자현황[0:], json_file, ensure_ascii=False, indent=4)

dataA = ''
with open("검사자현황.js", "r", encoding='UTF-8-sig') as f:
    while True:
        line = f.readline()
        if not line: break
        dataA += line
dataA = 'var 검사자현황 = ' + dataA + ';'

with open("검사자현황.js", "w", encoding='UTF-8-sig') as f_write:
    f_write.write(dataA)

print('검사자크롤러 끝')

############################################################################

print('')
print('세계현황크롤러 시작')

req = requests.get('https://www.worldometers.info/coronavirus/#countries')
req.encoding= None
html = req.content
soup = BeautifulSoup(html, 'html.parser')
my_titles = soup.select(
    '#maincounter-wrap > div'
    )
updates = soup.select('.content-inner > div')    

세계현황 = []
datas = my_titles[0:]

세계확진자수 = int(datas[0].find_all('span')[0].text.replace(',',''))
세계사망자수 = int(datas[1].find_all('span')[0].text.replace(',',''))
세계완치자수 = int(datas[2].find_all('span')[0].text.replace(',',''))
업데이트날짜 = updates[1].string

세계현황.append(세계확진자수)
세계현황.append(세계사망자수)
세계현황.append(세계완치자수)
세계현황.append(업데이트날짜)

with open("세계현황.js", "w", encoding='UTF-8-sig') as json_file:
    json.dump(세계현황[0:], json_file, ensure_ascii=False, indent=4)

dataA = ''
with open("세계현황.js", "r", encoding='UTF-8-sig') as f:
    while True:
        line = f.readline()
        if not line: break
        dataA += line
dataA = 'var 세계현황 = ' + dataA + ';'

with open("세계현황.js", "w", encoding='UTF-8-sig') as f_write:
    f_write.write(dataA)

print('세계현황 끝')

############################################################################
print('')
print('세계순위현황크롤러 시작')

html = requests.get("https://www.worldometers.info/coronavirus/").text
soup = BeautifulSoup(html, 'html.parser')
datas = soup.select('#main_table_countries_today > tbody > tr')

dictonary = [{
    "eng": "China", 
    "kor": "중국",
  }, {
    "eng": "Italy", 
    "kor": "이탈리아",
  },{
    "eng": "Spain", 
    "kor": "스페인",
  },{
    "eng": "Iran", 
    "kor": "이란",
  },{
    "eng": "Germany", 
    "kor": "독일",
  },{
    "eng": "China", 
    "kor": "중국",
  },{
    "eng": "USA", 
    "kor": "미국",
  },{
    "eng": "France", 
    "kor": "프랑스",
  },{
    "eng": "S. Korea", 
    "kor": "한국",
  },{
    "eng": "Switzerland", 
    "kor": "스위스",
  },{
    "eng": "UK", 
    "kor": "영국",
  },{
    "eng": "Netherlands", 
    "kor": "네덜란드",
  },{
    "eng": "Austria", 
    "kor": "오스트리아",
  },{
    "eng": "Belgium", 
    "kor": "벨기에",
  },{
    "eng": "Norway", 
    "kor": "노르웨이",
  },{
    "eng": "Sweden", 
    "kor": "스웨덴",
  },
]

세계확진자 = []

for d in datas[0:10]:
    한글국가명 = ''
    해당국가명 = d.find_all('td')[0].text
    해당국가확진자 = d.find_all('td')[1].text
    해당국가사망자 = d.find_all('td')[3].text
    해당국가완치자 = d.find_all('td')[5].text

    for val in dictonary:
        if val['eng'] == 해당국가명.strip():
            한글국가명 = val['kor']

    세계확진자.append({
        'Name' : 한글국가명,
        '확진자수' : int(0 if 해당국가확진자.strip().replace(',', '') == "" else 해당국가확진자.strip().replace(',', '')),
        '사망자수' : int(0 if 해당국가사망자.strip().replace(',', '') == "" else 해당국가사망자.strip().replace(',', '')),
        '완치자수' : int(0 if 해당국가완치자.strip().replace(',', '') == "" else 해당국가완치자.strip().replace(',', '')),
    })

with open("세계순위현황.js", "w", encoding='UTF-8-sig') as json_file:
    json.dump(세계확진자, json_file, ensure_ascii=False, indent=4)

data = ''
with open("세계순위현황.js", "r", encoding='UTF-8-sig') as f:
    while True:
        line = f.readline()
        if not line: break
        data += line
data = 'var 세계확진자 = ' + data + ';'

with open("세계순위현황.js", "w", encoding='UTF-8-sig') as f_write:
    f_write.write(data)


print('세계순위현황크롤러 끝')
print('완료')

############################################################################
