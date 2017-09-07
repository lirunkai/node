import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/welcome/welcome'
import {User} from '@/service/user'

Vue.use(Router)

let routes = [
  {path: '/', component: Hello, name: '首页'},
  {path: '/login', component: Login, name: '登录'}
]

export const router =  new Router({routes});

router.beforeEach((to, from, next) => {
  if(to.path == '/login'){
    return next()
  }
  if(User.getUser()){
    next()
  } else {
    next('/login')
  }
})
