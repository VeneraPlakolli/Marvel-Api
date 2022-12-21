import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: 'singlecharacter/:id',
    name: 'singlecharacter',
    component: () => import('../components/SingleCharacter.vue')
  },
  {
    path: '/comics',
    name: 'comicsmovies',
    component: () => import('../components/ComicsMovies.vue')
  },
  {
    path: 'modalwindow/:id',
    name: 'modalwindow',
    component: () => import('../components/ModalWindow.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router