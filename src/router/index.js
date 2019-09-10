import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Main from '@/components/main/main'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
