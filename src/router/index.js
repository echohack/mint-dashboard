import Vue from 'vue'
import Router from 'vue-router'
import Gitlab from '@/components/Gitlab'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Gitlab',
      component: Gitlab
    }
  ]
})
