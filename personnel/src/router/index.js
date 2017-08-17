import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '@/components/PageTransition'
import Index from '@/pages/Index'
import Mine from '@/pages/Mine'
import Fb from '@/pages/Fb'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageTransition',
      component: PageTransition,
      children: [{
        // 该路由为父路由的默认路由
        path: '',
        name: 'Index',
        component: Index
      }, {
        path: '/mine',
        name: 'Mine',
        component: Mine
      }, {
        path: '/fb',
        name: 'Fb',
        component: Fb
      }]
    }
  ]
})
