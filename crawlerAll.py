import requests
from bs4 import BeautifulSoup
import json
import os
import sys

## python파일의 위치
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

print('지역별현황크롤러 시작')

try:
 req = requests.get('http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=13&ncvContSeq=&contSeq=&board_id=&gubun=')
 req.encoding= None
 html = req.content
 soup = BeautifulSoup(html, 'html.parser')
 my_titles = soup.select(
    '#content > div > div.data_table.mgt24 >.num > tbody > tr'
    )

 지역별확진자 = []
 datas = my_titles[0:]

 for data in datas:
    지역이름 = data.find_all('th')[0].text
    확진자수 = int(data.find_all('td', class_='number')[1].text.replace(',', ''))

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

except:
  print('일시적인 오류 발생, 해당 크롤링 skip')
print('지역별현황크롤러 끝')

############################################################################
print('')
print('국내현황크롤러 시작')

try:
 req = requests.get('http://ncov.mohw.go.kr')
 req.encoding= None
 html = req.content
 soup = BeautifulSoup(html, 'html.parser')
 datas = soup.select(
    'body>div>div.mainlive_container>div.container>div>div>div>div>ul>li'
    )
 updateDate = soup.select(
    'div.container>div>div>div>h2>a'
    )

 date = updateDate[0].find_all('span',class_='livedate')[0].text.replace("(","")
 date.replace(")","")
 date = date.split(",")[0]


 data = []

 infect = datas[0].find_all('span', class_='num')[0].text.replace(",","")
 diff_infect = datas[0].find_all('span', class_='before')[0].text.replace(" ","")
 diff_infect = diff_infect.replace("+","")
 diff_infect = diff_infect.replace("(","")
 diff_infect = diff_infect.replace(")","")

 cured = datas[1].find_all('span', class_='num')[0].text.replace(",","")
 diff_cured = datas[1].find_all('span', class_='before')[0].text.replace(" ","")
 diff_cured = diff_cured.replace("+","")
 diff_cured = diff_cured.replace("(","")
 diff_cured = diff_cured.replace(")","")

 death = datas[3].find_all('span', class_='num')[0].text.replace(",","")
 diff_death = datas[3].find_all('span', class_='before')[0].text.replace(" ","")
 diff_death = diff_death.replace("+","")
 diff_death = diff_death.replace("(","")
 diff_death = diff_death.replace(")","")

 infect = infect.split('(누적)')[1]
 diff_infect = diff_infect.split('전일대비 ')[0].replace("전일대비","")

 data.append(infect)
 data.append(diff_infect)
 data.append(cured)
 data.append(diff_cured)
 data.append(death)
 data.append(diff_death)
 data.append(date)

 with open("국내현황.js", "w", encoding='UTF-8-sig') as json_file:
    json.dump(data[0:], json_file, ensure_ascii=False, indent=4)

 dataA = ''
 with open("국내현황.js", "r", encoding='UTF-8-sig') as f:
    while True:
        line = f.readline()
        if not line: break
        dataA += line
 dataA = 'var 국내현황 = ' + dataA + ';'

 with open("국내현황.js", "w", encoding='UTF-8-sig') as f_write:
    f_write.write(dataA)

except:
  print('일시적인 오류 발생, 해당 크롤링 skip')
print('국내현황크롤러 끝')
############################################################################
print('')
print('검사자크롤러 시작')

try:
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

except:
  print('일시적인 오류 발생, 해당 크롤링 skip')
print('검사자크롤러 끝')

############################################################################

print('')
print('세계현황크롤러 시작')

try:
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

except:
  print('일시적인 오류 발생, 해당 크롤링 skip')
print('세계현황 끝')

############################################################################
print('')
print('세계순위현황크롤러 시작')

html = requests.get("https://www.worldometers.info/coronavirus/").text
soup = BeautifulSoup(html, 'html.parser')
datas = soup.select('#main_table_countries_today > tbody > tr')
datasYesterDay = soup.select('#main_table_countries_yesterday > tbody > tr')

dictonary = [ {
    "eng": "Italy", 
    "kor": "이탈리아",
  },{
    "eng": "China", 
    "kor": "중국",
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
  },{
    "eng": "Canada", 
    "kor": "캐나다",
  },{
    "eng": "Portugal", 
    "kor": "포르투갈",
  },{
    "eng": "Norway", 
    "kor": "노르웨이",
  },{
    "eng": "Turkey", 
    "kor": "터키",
  },{
    "eng": "Brazil", 
    "kor": "브라질",
  },{
    "eng": "Israel", 
    "kor": "이스라엘",
  },{
    "eng": "Europe", 
    "kor": "유럽",
  },{
    "eng": "Asia", 
    "kor": "아시아",
  },{
    "eng": "North America", 
    "kor": "북미",
  },
]

세계확진자 = []
세계확진자증가수 = []

try:
  for d in datas[0:17]:
    한글국가명 = ''
    해당국가명 = d.find_all('td')[0].text
    해당국가확진자 = d.find_all('td')[1].text
    해당국가확진자증가수 = d.find_all('td')[2].text

    해당국가사망자 = d.find_all('td')[3].text
    해당국가사망자증가수 = d.find_all('td')[4].text

    해당국가완치자 = d.find_all('td')[5].text

    for val in dictonary:
        if val['eng'] == 해당국가명.strip():
            한글국가명 = val['kor']

    if 한글국가명 == '유럽' or 한글국가명 == '아시아' or 한글국가명 == '북미':
      print('x')
    else:
      세계확진자.append({
        'Name' : 한글국가명,
        '확진자수' : int(0 if 해당국가확진자.strip().replace(',', '') == "" else 해당국가확진자.strip().replace(',', '')),
        '사망자수' : int(0 if 해당국가사망자.strip().replace(',', '') == "" else 해당국가사망자.strip().replace(',', '')),
        '완치자수' : int(0 if 해당국가완치자.strip().replace(',', '') == "" else 해당국가완치자.strip().replace(',', '')),
        '확진자증가수' : int(0 if 해당국가확진자증가수.strip().replace(',', '') == "" else 해당국가확진자증가수.strip().replace(',', '')),
        '사망자증가수' : int(0 if 해당국가사망자증가수.strip().replace(',', '') == "" else 해당국가사망자증가수.strip().replace(',', '')),
      })

  for d in datasYesterDay[0:17]:
    한글국가명 = ''
    해당국가명 = d.find_all('td')[0].text
    해당국가확진자 = d.find_all('td')[1].text
    해당국가확진자증가수 = d.find_all('td')[2].text
    해당국가사망자증가수 = d.find_all('td')[4].text

    for val in dictonary:
      if val['eng'] == 해당국가명.strip():
          한글국가명 = val['kor']

    세계확진자증가수.append({
      'Name' : 한글국가명,
      '확진자수' : int(0 if 해당국가확진자.strip().replace(',', '') == "" else 해당국가확진자.strip().replace(',', '')),
      '확진자증가수' : int(0 if 해당국가확진자증가수.strip().replace(',', '') == "" else 해당국가확진자증가수.strip().replace(',', '')),
      '사망자증가수' : int(0 if 해당국가사망자증가수.strip().replace(',', '') == "" else 해당국가사망자증가수.strip().replace(',', '')),
    })

  세계확진자_sort = sorted(세계확진자, key=lambda e: (-e['확진자수']))
  세계확진자증가수_sort = sorted(세계확진자증가수, key=lambda e: (-e['확진자수']))

  with open("세계순위현황.js", "w", encoding='UTF-8-sig') as json_file:
    json.dump(세계확진자_sort, json_file, ensure_ascii=False, indent=4)

  data = ''
  with open("세계순위현황.js", "r", encoding='UTF-8-sig') as f:
    while True:
        line = f.readline()
        if not line: break
        data += line
  data = 'var 세계확진자 = ' + data + ';'

  with open("세계순위현황.js", "w", encoding='UTF-8-sig') as f_write:
    f_write.write(data)

###

  with open("세계확진자증가수현황.js", "w", encoding='UTF-8-sig') as json_file:
    json.dump(세계확진자증가수_sort, json_file, ensure_ascii=False, indent=4)    

  data2 = ''        
  with open("세계확진자증가수현황.js", "r", encoding='UTF-8-sig') as f:
    while True:
        line = f.readline()
        if not line: break
        data2 += line
  data2 = 'var 세계확진자증가수 = ' + data2 + ';'

  with open("세계확진자증가수현황.js", "w", encoding='UTF-8-sig') as f_write:
    f_write.write(data2)

except:
  print('일시적인 오류 발생, 해당 크롤링 skip')

print('세계순위현황크롤러 끝')
############################################################################
print('')
print('맵크롤러 시작')

try:
 req = requests.get('http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=13&ncvContSeq=&contSeq=&board_id=&gubun=')
 req.encoding= None
 html = req.content
 soup = BeautifulSoup(html, 'html.parser')
 datas = soup.select(
    '#main_maplayout > button'
    )

 d = datas[0:]

 맵_지역확진자 = []

 for d in datas:
    지역명 = d.find_all('span', class_='name')[0].text
    확진자 = d.find_all('span', class_='num')[0].text
    차이 = d.find_all('span', class_='before')[0].text

    맵_지역확진자.append({
        '지역명' : 지역명,
        '확진자' : 확진자,
        '차이' : 차이,
    })

 with open("Map_지역별차이현황.js", "w", encoding='UTF-8-sig') as json_file:
    json.dump(맵_지역확진자, json_file, ensure_ascii=False, indent=4)

 data = ''
 with open("Map_지역별차이현황.js", "r", encoding='UTF-8-sig') as f:
    while True:
        line = f.readline()
        if not line: break
        data += line
 data = 'var 맵_지역확진자 = ' + data + ';'

 with open("Map_지역별차이현황.js", "w", encoding='UTF-8-sig') as f_write:
    f_write.write(data)

except:
  print('일시적인 오류 발생, 해당 크롤링 skip')
print('맵크롤러 끝')
############################################################################
print('')
print('뉴스기사크롤러 시작')

try:
 req = requests.get('https://www.yna.co.kr/safe/news')
 req.encoding= None
 html = req.content
 soup = BeautifulSoup(html, 'html.parser')
 datas = soup.select(
    'div.contents > div.content01 > div > ul > li >article > div >h3'
    )

 data = {}

 for title in datas:   
    name = title.find_all('a')[0].text
    url = 'http:'+title.find('a')['href']
    data[name] = url

 with open(os.path.join(BASE_DIR, 'news.json'), 'w+',encoding='utf-8') as json_file:
    json.dump(data, json_file, ensure_ascii = False, indent='\t')

except:
  print('일시적인 오류 발생, 해당 크롤링 skip')
print('뉴스기사크롤러 끝')
############################################################################

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

print('')
print('학교공지사항크롤러 시작')

try:
 req = requests.get('https://knu.ac.kr/wbbs/wbbs/bbs/btin/list.action?bbs_cde=34&menu_idx=224')
 req.encoding= None
 html = req.content
 soup = BeautifulSoup(html, 'html.parser')
 my_titles = soup.select(
    'tbody >tr> td>a'
    )


 data = {}

 for title in my_titles:
    dataB = title.text.replace('\t','')
    dataB = dataB.replace('\n','')
    dataB = dataB.replace('\r','')
    data[dataB] = title.get('href')

 with open(os.path.join(BASE_DIR, 'result.json'), 'w+',encoding='utf-8') as json_file:
    json.dump(data, json_file, ensure_ascii = False, indent='\t')

except:
  print('일시적인 오류 발생, 해당 크롤링 skip')
print('학교공지사항크롤러 끝')
print('완료')
############################################################################