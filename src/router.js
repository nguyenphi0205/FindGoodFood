import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import NotFound  from './views/404.vue'
import EatOut from './views/EatOut/ReviewList.vue'
import FoodGuide from './views/EatOut/foodGuide'
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
      beforeEnter: (to, from, next) => {
        var eatOutList =['restaurants','cafes','bars']
        if (eatOutList.indexOf(to.params.product) >=0) {
          next();
        } else {
          next('*');
        }
      }
    },
    {
      path: '/good-food-guides',
      name: 'Good Food',
      component: FoodGuide,
    },
  ],
  mode: "history"
})
