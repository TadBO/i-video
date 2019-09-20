/*global Vue*/
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Video from '@/components/Video';

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Video',
      component: Video
    }
  ]
})
