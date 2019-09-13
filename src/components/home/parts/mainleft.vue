<template>
    <div class="main-left">
      <div id='ecConT'></div>
      <div id='ecConM'></div>
      <div id='ecConB'></div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'left',
  data () {
    return {
      leftTop: '',
      leftMid: '',
      leftBottom: ''
    }
  },
  mounted () {
    this.getHomeInfo()
    document.querySelector('.main-left').style.height = (this.$store.state.mainHeight - 40) + 'px'
  },
  methods: {
    getHomeInfo () {
      var myChartTOption = {
        tooltip: {},
        xAxis: {
          data: []
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: []
        }]
      }
      var myChartT = this.$echarts.init(document.getElementById('ecConT'))
      myChartT.showLoading({
        text: '数据获取中...',
        color: '#0c213d',
        textColor: '#2dcddf',
        maskColor: 'rgba(0, 0, 0, 0.2)',
        zlevel: 0
      })
      axios.get('/api/home.json')
        .then(res => {
          let resD = res.data
          if (resD.res && resD.data) {
            this.leftTop = resD.data.ecDataT
            myChartT.hideLoading()
            myChartTOption.xAxis.data = this.leftTop.obj
            myChartTOption.series[0].data = this.leftTop.num
            window.onresize = function () {
              myChartT.resize()
            }
            myChartT.setOption(myChartTOption)
          }
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .main-left
    width: 100%
    height: 100%
    border:1px solid red
    #ecConT,#ecConM,#ecConB
      height: 200px
      width: 100%

</style>
