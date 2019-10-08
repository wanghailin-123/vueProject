import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import Win from 'electron-vue-windows'
import './style/styleYY.scss'
import './style/styleZJ.scss'
import store from './store'
import Echarts from 'echarts'

import ElementUI from 'element-ui'
//引入对应的样式
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
//初始化插件，要传入实例化的路由
Win.init(router,{
  freeWindowNum: 2, // 初始空闲窗口数量（选填：默认为1）
  // port: 9080 // 端口号（选填：默认9080）
})
Vue.prototype.$Win =Win
Vue.prototype.$Echarts =Echarts


if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
