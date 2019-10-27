<template>
    <div style="text-align: center">
      <chart style="width: 800px; height: 600px" ref="chart1" :options="orgOptions" :auto-resize="true"></chart>
      <chart ref="chart2" :options="orgOptions1" :auto-resize="true"></chart>
      <chart ref="chart3" :options="orgOptions2" :auto-resize="true"></chart>
    </div>
</template>

<script>
    export default {
      name: "echarts",
      data () {
        return {
          orgOptions: {},
          orgOptions1: {},
          orgOptions2: {},
        }
      },
      mounted() {
        this.orgOptions = {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }]
        };
        this.orgOptions1 = {series: {
            type: 'pie',
            data: [
              {name: 'A', value: 1212},
              {name: 'B', value: 2323},
              {name: 'C', value: 1919}
            ]
          }};
        this.orgOptions2 = {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data:['销量']
          },
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        };
      }
    }
</script>

<style scoped>

</style>
