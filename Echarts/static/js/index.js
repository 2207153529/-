
var barlist = infomation.barlist;
var myChart = echarts.init(document.querySelector(".bar1 .chart"));
var titlename = ["现有确诊", "无症状病例", "现有疑似病例","现有重症"];
var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448"];
option = {
  //图标位置
  grid: {
    top: "10%",
    left: "22%",
    bottom: "10%"
  },
  xAxis: {
    show: false
  },
  yAxis: [
    {
      show: true,
      data: titlename,
      inverse: true,
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#fff",

        rich: {
          lg: {
            backgroundColor: "#339911",
            color: "#fff",
            borderRadius: 15,
            // padding: 5,
            align: "center",
            width: 15,
            height: 15
          }
        }
      }
    },
    {
      show: true,
      inverse: true,
      data: barlist,
      axisLabel: {
        textStyle: {
          fontSize: 12,
          color: "#fff"
        }
      }
    }
  ],
  series: [
    {
      name: "条",
      type: "bar",
      yAxisIndex: 0,
      data: barlist,
      barCategoryGap: 50,
      barWidth: 10,
      itemStyle: {
        normal: {
          barBorderRadius: 20,
          color: function(params) {
            var num = myColor.length;
            return myColor[params.dataIndex % num];
          }
        }
      },
    },
    {
      name: "框",
      type: "bar",
      yAxisIndex: 1,
      barCategoryGap: 50,
      data: [5000, 5000, 5000, 5000],
      barWidth: 15,
      itemStyle: {
        normal: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    }
  ]
};


myChart.setOption(option);
window.addEventListener("resize", function() {
    myChart.resize();
  });


function getIndex(arr, begin, end) {
    var new_arr = [];
    for (i=begin; i<end; i++) {
        new_arr.push(arr[i]);
    }
    return new_arr
}

var myChart = echarts.init(document.querySelector(".line0 .chart"));
var yearDate = [
{
    year: '2020',
    data: [getIndex(infomation.ljqzr, 0, 12), getIndex(infomation.ljzyr, 0, 12)]
},
    {
    year: '2021',
    data: [getIndex(infomation.ljqzr, 13, infomation.ljqzr.length), getIndex(infomation.ljqzr, 13, infomation.ljzyr.length)]
    }
];
var option = {
color: ["#00f2f1", "#ed3f35"],
tooltip: {
    trigger: "axis"
},
legend: {
    right: "10%",
    textStyle: {
    color: "#4c9bfd"
    }
},
grid: {
    top: "20%",
    left: "3%",
    right: "4%",
    bottom: "3%",
    show: true,
    borderColor: "#012f4a",
    containLabel: true
},

xAxis: {
    type: "category",
    boundaryGap: false,
    data: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
    ],
    axisTick: {
    show: false
    },
    axisLabel: {
    color: "rgba(255,255,255,.7)"
    },
    axisLine: {
    show: false
    }
},
yAxis: {
    type: "value",
    axisTick: {
    show: false
    },
    axisLabel: {
    color: "rgba(255,255,255,.7)"
    },
    splitLine: {
    lineStyle: {
        color: "#012f4a"
    }
    }
},
series: [
    {
    name: "累计确诊",
    type: "line",
    stack: "总量",
    smooth: true,
    data: yearDate[0].data[0]
    },
    {
    name: "累计治愈",
    type: "line",
    stack: "总量",
    smooth: true,
    data: yearDate[0].data[1]
    }
]
};
myChart.setOption(option);
window.addEventListener("resize", function() {
myChart.resize();
});
// 定义点击切换效果
$("#line-h2").on("click", "a", function() {
    console.log($(this).index());
    var obj = yearDate[$(this).index()];
    console.log(obj)
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    myChart.setOption(option);
});
console.log(getIndex(infomation.ljqzr, 13, infomation.ljzyr.length));
$(".no-hd ul li:eq(0)").html(infomation.xzqz);
$(".no-hd ul li:eq(1)").html(infomation.ljqz);

// 左上方图表
var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "2020-01-10",
          "2020-02-01",
          "2020-03-01",
          "2020-04-01",
          "2020-05-01",
          "2020-06-01",
          "2020-07-01",
          "2020-08-01",
          "2020-09-01",
          "2020-10-01",
          "2020-11-01",
          "2020-12-01",
          "2021-01-01",
          "2021-02-01",
          "2021-03-01",
          "2021-04-01",
          "2021-05-01",
          "2021-06-01",
          "2021-07-01",
          "2021-08-01",
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "当日确诊人数",
        type: "bar",
        barWidth: "35%",
        data: infomation.drqz,
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };
myChart.setOption(option);
window.addEventListener("resize", function() {
  myChart.resize();
})


//   左边中间折线图图表
// 左下方饼图

var myChart = echarts.init(document.querySelector(".pie .chart"));
var prodata = []
for (i=0; i<=10; i++) {
    prodata.push({
        value: infomation.pro_sure[i],
        name: infomation.pro[i]
    });
}
var option = {
    tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)",
    position: function(p) {
        return [p[0] + 10, p[1] - 10];
    }
    },
    legend: {
        type: 'scroll',
        top: "90%",
        itemWidth: 10,
        itemHeight: 10,
        data: infomation.pro,
        textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
    }
    },
    series: [
    {
        name: "各省分布",
        // 设定展示图表为饼图
        type: "pie",
        center: ["50%", "42%"],
        radius: ["40%", "60%"],
        color: [
        "#065aab",
        "#066eab",
        "#0682ab",
        "#0696ab",
        "#06a0ab",
        "#06b4ab",
        "#06c8ab",
        "#06dcab",
        "#06f0ab"
        ],
        label: { show: false },
        labelLine: { show: false },
        // 将处理过后的数据放入配置项中
        data: prodata
    }
    ]
};
myChart.setOption(option);
window.addEventListener("resize", function() {
    myChart.resize();
});


// 右下方饼图

var myChart = echarts.init(document.querySelector(".pie1 .chart"));
var option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: prodata,
            label: {
                fontSize: "5px"
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);
window.addEventListener("resize", function() {
    myChart.resize();
});


// 右侧中间图
var myChart = echarts.init(document.querySelector(".line1 .chart"));
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#dddc6b"
            }
          }
        },
        legend: {
          top: "0%",
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
          }
        },
        grid: {
          left: "10",
          top: "30",
          right: "10",
          bottom: "10",
          containLabel: true
        },

        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12
              }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)"
              }
            },

            data: [
              "一月",
              "二月",
              "三月",
              "四月",
              "五月",
              "六月",
              "七月",
              "八月",
              "九月",
              "十一月",
              "十二月",
            ]
          },
          {
            axisPointer: { show: false },
            axisLine: { show: false },
            position: "bottom",
            offset: 20
          }
        ],

        yAxis: [
          {
            type: "value",
            axisTick: { show: false },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12
              }
            },

            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          }
        ],
        series: [
          {
            name: "累计确诊",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: "#0184d5",
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(1, 132, 213, 0.4)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(1, 132, 213, 0.1)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
              }
            },
            itemStyle: {
              normal: {
                color: "#0184d5",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
              }
            },
            data: yearDate[0].data[0]
          },
          {
            name: "累计治愈",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: "#00d887",
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0, 216, 135, 0.4)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(0, 216, 135, 0.1)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
              }
            },
            itemStyle: {
              normal: {
                color: "#00d887",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
              }
            },
            data: yearDate[0].data[1]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });

