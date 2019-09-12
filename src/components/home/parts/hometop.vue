<template>
  <div class="main-top-con" ref="hometopcon" >
      <router-link to="/frame">
        公司标题名称
      </router-link>
  </div>
</template>
<script>
export default {
  name: 'hometop',
  data () {
    return {
      topHeight: ''
    }
  },
  mounted () {
    this.topHeight = this.$refs.hometopcon.offsetHeight
    this.$emit('func', this.topHeight)
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/overall.styl'
  .main-top-con {
    height: $HomeTop
    line-height: $HomeTop
    text-align: center
    font-size:24px
    font-weight: bolder
    color: $HomeColor
  }
</style>
