<template>
  <el-container>
    <el-header class="el-header">
      <data-top></data-top>
    </el-header>
    <el-container class="except-top">
      <el-aside width="200px">
        <tree></tree>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import DataTop from './pages/dataTop'
import Tree from './pages/tree'
export default {
  name: 'frame',
  components: {
    DataTop,
    Tree
  }

}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/overall.styl'
 .el-header
   background-color: $HomeConBg
   color: $HomeColor
   line-height: $HomeTop
 .except-top
   left:0
   bottom:0
</style>
