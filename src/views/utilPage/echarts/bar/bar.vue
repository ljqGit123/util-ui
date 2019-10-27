<template>
  <div style="text-align: center">
    <chart style="width: 800px; height: 600px" ref="chart" :options="orgOptions" :auto-resize="true"></chart>
  </div>
</template>

<script>
    export default {
      name: "bar",
      data () {
        return {
          orgOptions: {},
        }
      },
      mounted() {
        this.orgOptions = {
          title: {
            text: 'ECharts 条形图'
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
