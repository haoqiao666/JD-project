// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import ElementUI from 'element-ui'
import './assets/styles/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
var echarts = require('echarts')
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(ElementUI, {size: 'small', zIndex: 3000})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
