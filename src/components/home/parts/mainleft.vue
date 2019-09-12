<template>
    <div id='ecCon'></div>
</template>

<script>
export default {
  name: 'left',
  props: {
    ecDataL: Object
  },
  mounted () {
    this.$nextTick(() => {
      this.ecCon()
    })
  },
  methods: {
    ecCon () {
      var myChart = this.$echarts.init(document.getElementById('ecCon'))
      myChart.setOption({
        tooltip: {},
        xAxis: {
          data: this.ecDataL.obj
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: this.ecDataL.num
        }]
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  #ecCon
    width: 100%
    height: 300px

</style>
