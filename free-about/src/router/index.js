import Vue from 'vue'
import Router from 'vue-router'
import Course from '@/page/course/Course'
import AboutClass from '@/page/about-class/About-class'
import Purchased from '@/page/purchased/Purchased'
import Mine from '@/page/mine/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Course'
    },
    {
      path: '/Course',
      component: Course
    },
    {
      path: '/About-class',
      component: AboutClass
    },
    {
      path: '/Purchased',
      component: Purchased
    },
    {
      path: '/Mine',
      component: Mine
    }
  ]
})
