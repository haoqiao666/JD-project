<template>
  <div class="con-bg">
    <el-container>
      <el-header>
        <div class="home-top" ref="hometopcon">
          <home-top @func="getMsgFormSon"></home-top>
        </div>
      </el-header>
      <el-main class="el-main">
        <el-row :gutter="20">
          <el-col :span="8"><div class="grid-content bg-purple">
            <home-left :ecDataL="ecDataL"></home-left>
          </div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">
            <home-mid :ecDataM="ecDataM"></home-mid>
          </div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">
            <home-right :ecDataR="ecDataR"></home-right>
          </div></el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HomeTop from './parts/hometop'
import HomeLeft from './parts/mainleft'
import HomeMid from './parts/mainmid'
import HomeRight from './parts/mainright'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    HomeTop,
    HomeLeft,
    HomeMid,
    HomeRight
  },
  data () {
    return {
      clientHeight: '',
      topHeight: '',
      ecDataL: '',
      ecDataM: '',
      ecDataR: ''
    }
  },
  mounted () {
    this.clientHeight = `${document.documentElement.clientHeight}`
    document.querySelector('.con-bg').style.height = this.clientHeight + 'px'
    this.mainHeight = this.clientHeight - this.topHeight
    document.querySelector('.el-main').style.height = this.mainHeight + 'px'
    this.getHomeInfo()
    var defaultHeight = this.mainHeight
    this.$store.dispatch('defautHeight', defaultHeight)
   /* this.$store.commit('defautHeight',defaultHeight)*/
  },
  methods: {
    getMsgFormSon (data) {
      this.topHeight = data
    },
    getHomeInfo () {
      axios.get('/api/home.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.res && res.data) {
        this.ecDataL = res.data.ecData0
        console.log(this.ecDataL)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/overall.styl'
  .con-bg
    background-color: $HomeConBg
    color: $HomeColor
    .home-top
      height: 56px
      line-hight: 56px
    .el-main
       border: 1px solid red
       overflow: hidden
</style>
