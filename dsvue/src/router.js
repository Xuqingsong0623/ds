import Vue from 'vue'
import Router from 'vue-router'
import Footer from './components/Footer.vue'
import index from './components/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [ 
    { path:'/Footer',component:Footer},
    { path:'/Index',component:index},
    {
      path: '/login_reg',
      component: Login_Reg
    },
  ]
})
