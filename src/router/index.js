import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Home from '@/components/Home'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/cc',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    
    {
      path: '/Test',
      name: 'Test',
      component: Test
    }
  ]
})
