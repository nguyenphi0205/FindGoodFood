import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import NotFound  from './views/404.vue'
import EatOut from './views/EatOut/ReviewList.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    { path: "*", component: NotFound },
    {
      path: '/eat-out/:product',
      name: 'eat-out',
      component: EatOut,
      
    },
  ],
  mode: "history"
})
