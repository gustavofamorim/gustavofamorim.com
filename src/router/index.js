import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/features/Home'
import Projects from '@/features/projects'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '*',
      redirect: { name: 'Home' }
    }
  ]
})

router.afterEach((to, from) => {
  /* eslint no-undef: "off" */
  gtag('set', 'page', to.path)
  gtag('send', 'pageview')
})

export default router
