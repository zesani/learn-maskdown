import Vue from 'vue'
import Router from 'vue-router'
import Init from '@/pages/init'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Init',
      component: Init
    }
  ]
})
