import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Camelost from "../views/Camelost.vue"
import Renchanged from "../views/Renchanged.vue"
import Futerror from "../views/Futerror.vue"
import AboutMe from "../views/About-Me.vue"
import BadSearch from "../views/Bad-Search.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/camelost',
    name: "Camelost",
    component: Camelost
  },
  {
    path: '/renchanged',
    name: "Renchanged",
    component: Renchanged
  },
  {
    path: '/futerror',
    name: "Futerror",
    component: Futerror
  },
  {
    path: '/about-me',
    name: "About Me",
    component: AboutMe
  },
  {
    path: '/bad-search',
    name: "Bad Search",
    component: BadSearch,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
