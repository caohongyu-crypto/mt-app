import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from '../layout/default'
import Blank from '../layout/blank'
import goodList from '../../page/goodsList'
import Index from '../../page/index'
import ChangeCity from '../../page/changeCity'
import Login from '../../page/login';
import Register from '../../page/register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Default',
    component: Default,
    redirect:'/index',
    children:[
      {
        path:'s/:name',
        name:'goods',
        component:goodList
      },
      {
        path:'index',
        name:'index',
        component: Index
      },
      {
        path:'changeCity',
        name:'changeCity',
        component:ChangeCity
      }
    ]
  },
  {
    path:'/blank',
    name:'blank',
    component:() => import('../layout/blank'),
    children:[
      {
        path:'login',
        name:'login',
        component:Login
      },
      {
        path:'register',
        name:'register',
        component:Register
      }
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
