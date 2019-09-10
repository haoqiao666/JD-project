<template>
  <div class="con">
    <div class="form-con">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name" placeholder="默认用户名admin"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="默认密码123456"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
/*import axios from 'axios'*/
export default {
  name: 'login',
  data () {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      }
      callback()
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      }
      callback()
    }
    return {
      ruleForm: {
        name: '',
        pass: ''
      },
      rules: {
        name: [
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
          { message: '请输入活动名称', trigger: 'blur' },
          {validator: validateName, trigger: 'blur'}
        ],
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
         /* this.sendMessage()*/
          this.openSuccess()
          setTimeout(() => {
            this.$router.push({path:'/main'});
          },3000)
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    openSuccess () {
      this.$message({
        message: '登录成功',
        type: 'success',
        center: true,
        duration: 2000
      })
    },
    openError () {
      this.$message({
        showClose: true,
        message: '登录失败',
        type: 'error',
        center: true
      })
    },
   /* sendMessage () {
      axios.get('?name=' + this.name +'?pass' + this.pass)
    }*/
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/overall.styl'
 .con
   width: 100%
   padding-top:50px
   .form-con
     margin: 0 auto
     width: 500px
     padding: 50px 15px
     background-color: $formBgColor
     .ruleForm
       width: 100%
</style>
