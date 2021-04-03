import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Hello from '@/views/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
