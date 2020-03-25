import requests
from bs4 import BeautifulSoup
import json
import os
import sys

## python파일의 위치
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

print('학교공지사항크롤러 시작')

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

print('학교공지사항크롤러 끝')
print('완료')
