import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// import wcSwiper from 'wc-swiper'
// import 'wc-swiper/style.css'
// Vue.use(wcSwiper);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
