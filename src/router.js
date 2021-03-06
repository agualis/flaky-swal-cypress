import Vue from 'vue'
import Router from 'vue-router'
import Popup from './views/Popup'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Popup
    }
  ]
})
