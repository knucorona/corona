
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
      max: 1200,
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
