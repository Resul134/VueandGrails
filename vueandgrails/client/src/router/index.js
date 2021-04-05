import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import Garage from '@/components/Garage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Garage',
      component: Garage 
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
