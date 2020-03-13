document.write("<script type='text/javascript' src='국내현황.js'><"+"/script>");  

var 업데이트시간 = "03.13 (10:00)";

var 어제사망자 = 67

var 어제완치자 = 333


var 경북대현황 = [
    27, //확진자
    0, //사망자
    1, //완치자
    3,//확진자 차이(00시 대비)
    0,//사망자 차이(00시 대비)
    0,//완치자 차이(00시 대비)
];
    

var 전일대비차이 = [
국내현황[3]-어제사망자,//사망자 차이(전날 00시 대비)
국내현황[2]-어제완치자,//완치자 차이(전날 00시 대비)
];


// 일일확진자 차트
var chart0 = new Highcharts.Chart('container', {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: ' '
    },
    xAxis: [{
      categories: ['2.23', '2.24', '2.25', '2.26', '2.27', '2.28',
        '2.29', '3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.7', '3.8',
        '3.9', '3.10',
        '3.11',
        '3.12',
        '3.13',
        ],
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        format: '{value}',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      },
      max: 8000,
      title: {
        text: '전체 확진자 수',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    }, { // Secondary yAxis
      max: 40,
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
      data: [0, 2, 2, 3, 4, 7, 7, 8, 8, 11, 14, 16, 16, 16, 16, 16, 19, 24,
      27, // 3월 12일
      27, // 3월 13일
      ],
    }, {
      name: '전체 확진자 수',
      type: 'spline',
      data: [602, 833, 977, 1261, 1766, 2337, 3150, 4212, 4812, 5328, 5766, 6284, 6767, 7134, 7382, 7513, 7755,
      7869,
      7979, //3월 12일
      7979, //3월 13일
      ],
    }]
  });


// 일일확진자 증가 차트
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
      categories: ['2.24', '2.25', '2.26', '2.27', '2.28', '2.29',
        '3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.7',
        '3.8','3.9','3.10',
        '3.11',
        '3.12',
        '3.13',
    ],
      crosshair: true
    }],
    plotOptions: {
      column: {
        depth: 25
      }
    },
    series: [{
      name: '확진자 증가수',
      data: [231, 144, 284, 505, 571, 813,
        1062, 600, 516, 438,
        518, //3월 5일
        483, //3월 6일
        367, //3월 7일
        248, //3월 8일
        131, //3월 9일
        242, //3월 10일
        114, //3월 12일
        110, //3월 13일
      ],
    },]
  });





