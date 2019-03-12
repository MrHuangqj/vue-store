import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Cart from '@/components/cart/cart'
import Category from '@/components/category/category'
import User from '@/components/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/user',
      component: User
    }
  ]
})
