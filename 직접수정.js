document.write("<script type='text/javascript' src='국내현황.js'><"+"/script>");  

///////////////////////직접수정 시작/////////////////////////////////

//(직접수정 1)
var 업데이트시간 = "03.30 (10:00)";

//(직접수정 2)
var 경북대현황 = [
  36, //확진자
  0, //사망자
  3, //완치자
  0, //확진자 차이(전일 00시 대비)
  0, //사망자 차이(전일 00시 대비)
  0, //완치자 차이(전일 00시 대비)
];

//(직접수정 3) 날짜 추가
var dayXaxis = ['2.23', '2.24', '2.25', '2.26', '2.27', '2.28',
'2.29', '3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.7', '3.8',
'3.9', '3.10','3.11','3.12','3.13','3.14','3.15','3.16','3.17',
'3.18','3.19','3.20','3.21','3.22','3.23',
'3.24',
'3.25',
'3.26',
'3.27',
'3.28',
'3.29',
'3.30',
'3.31',
'4.1',
'4.2',
'4.3',
]

//(직접수정 4) 날짜 추가
var plusXaxis = ['2.24', '2.25', '2.26', '2.27', '2.28',
'2.29', '3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.7', '3.8',
'3.9', '3.10','3.11','3.12','3.13','3.14','3.15',
'3.16','3.17','3.18','3.19','3.20','3.21','3.22','3.23',
'3.24',
'3.25',
'3.26',
'3.27',
'3.28',
'3.29',
'3.30',
'3.31',
'4.1',
'4.2',
'4.3',

]

//(직접수정 5) 경북대 일일 현황
var SchoolDayData = [0, 2, 2, 3, 4, 7, 7, 8, 8, 11,
  14, 16, 16, 16, 16, 16, 19, 24,
  27, 27, 29, 29, 29, 34, 
  34, 34, 35, 35, 35, 
  35, 35,
  36,
  36, // 3.26 00시
  36, // 3.27 00시
  36, // 3.28
  36, // 3.29
  36, // 3.30
  36, // 3.31
  36,
  36,
  36, // 4.3
]

//(직접수정 6) 일일 전체 확진자
var AllDayData = [602, 833, 977, 1261, 1766, 2337, 3150,
  4212, 4812, 5328, 5766, 6284, 6767, 7134, 7382, 7513, 7755,
  7869,  7979,  8086,  8162, 8236, 8320,  8413,  8565,  8652,
  8799,  8897,  8961,  9037, 9137, 
  9241,
  9332,
  9478, //3.27
  9583, //3.28
  9661, //3.29
  9786, //3.30
  9887, //3.31
  9976,//4.1
  10062,//4.2
  10156//4.3
]

//(직접수정 7) 일일 확진자 증감추이
var plusData = [231, 144, 284, 505, 571, 813,
  1062, 600, 516, 438,
  518, 483,  367, 248, 
  131, 242,  114,
  110, 107,  76, 74, 
  84,  93, 152, 87, 
  147, 98, 64, 76,
  100,
  104,
  91,
  146, //3.27
  105, //3.28
  78,  //3.29
  125, //3.30
  101, //3.31
  89, //4.1
  86, //4.2
  94, //4.3
]


///////////////////////직접수정 끝/////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

var chart0 = new Highcharts.Chart('container', {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: ' '
    },
    xAxis: [{
      categories: dayXaxis,
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        format: '{value}',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      },
      max: 12000,
      title: {
        text: '전체 확진자 수',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    }, { // Secondary yAxis
      max: 80,
      title: {
        text: '경북대 확진자 수',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      labels: {
        format: '{value}',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      opposite: true
    }],
    tooltip: {
      shared: true
    },
    legend: {
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: true
      }
    },
    series: [{
      name: '경북대 확진자 수',
      type: 'spline',
      yAxis: 1,
      data: SchoolDayData,
    }, {
      name: '전체 확진자 수',
      type: 'spline',
      data: AllDayData,
    }]
  });


// (6) 일일확진자 증가 차트
var chart = new Highcharts.Chart('diffDiv', {
    chart: {
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25
      }
    },
    title: {
      text: ''
    },

    yAxis: [{ // Primary yAxis
      max: 1400,
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    }],

    xAxis: [{
      categories: plusXaxis,
      crosshair: true
    }],
    plotOptions: {
      column: {
        depth: 25
      }
    },
    series: [{
      name: '확진자 증가수',
      data: plusData,
    },]
  });
