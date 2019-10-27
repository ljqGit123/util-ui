<template>
  <div style="text-align: center">
    <chart style="width: 800px; height: 600px" ref="chart" :options="orgOptions" :auto-resize="true"></chart>
  </div>
</template>

<script>
    export default {
      name: "category",
      data () {
        return {
          orgOptions: {},
        }
      },
      mounted() {
        this.orgOptions = {
          title: {
            text: 'ECharts 折线图'
          },
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
      }
    }
</script>

<style scoped>

</style>
