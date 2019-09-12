<template>
  <div class="tree-bg">
    <el-tree
      :data="data"
      :props="defaultProps"
      accordion
      @node-click="handleNodeClick">
    </el-tree>
  </div>
</template>

<script>
export default {
  name: 'tree',
  data () {
    return {
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    }
  },
  mounted () {
    document.querySelector('.tree-bg').style.height = this.$store.state.topHeight + 'px'
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/overall.styl'
  .tree-bg
    background-color: $HomeConBg
    top: 60px
    left: 0
    bottom: 0
    .el-tree
      background-color: $HomeConBg
      color: $HomeColor
</style>
<style lang="stylus">
  @import '../../../assets/styles/overall.styl'
  .el-tree-node__content:hover,
  .el-tree-node:focus>.el-tree-node__content{
    background-color: $HomeConBg!important
  }
</style>
