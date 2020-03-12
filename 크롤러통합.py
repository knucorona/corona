import requests
from bs4 import BeautifulSoup
import json
import os
import sys

## python파일의 위치
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

print('지역별현황크롤러.py 시작')

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

print('지역별현황크롤러.py 끝')

print('')
print('국내현황크롤러.py 시작')

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

print('국내현황크롤러.py 끝')

print('')
print('검사자크롤러.py 시작')

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

결과음성 = int(datas.find_all('td')[5].text.replace(',',''))
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

print('검사자크롤러.py 끝')
print('완료')