import Vue from 'vue'
import Router from 'vue-router'
import Header from './components/Header.vue'
import HeaderDetail from './components/HeaderDetail.vue'
// import Header1 from './components/Header1.vue'
import Carousel from './components/Carousel.vue'
import App from './App.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: App},
    {path: '/header',component: Header},
    {path: '/headerdetail',component: HeaderDetail},
    // {path: '/header1',component: Header1},
    {path: '/carousel',component: Carousel},
  ]
})
