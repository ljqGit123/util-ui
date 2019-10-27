<template>
  <div style="text-align: center">
    <chart style="width: 800px; height: 600px" ref="chart" :options="orgOptions" :auto-resize="true"></chart>
  </div>
</template>

<script>
    export default {
        name: "pie",
      data () {
        return {
          orgOptions: {},
        }
      },
      mounted() {
        this.orgOptions = {
          title: {
            text: 'ECharts 饼图'
          },
          series: {
            type: 'pie',
            data: [
              {name: 'A', value: 1212},
              {name: 'B', value: 2323},
              {name: 'C', value: 1919}
            ]
          }
        };
      }
    }
</script>

<style scoped>

</style>
