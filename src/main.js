// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import router from '@/router'
import store from '@/store'
import './focus'

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
