import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recetas from '../views/Recetas.vue'
import Receta from '../views/Receta.vue'
import Preparaciones from '../views/Preparaciones.vue'
import Preparacion from '../views/Preparacion.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recetas',
    name: 'Recetas',

    component: () => import(/* webpackChunkName: "about" */ '../views/Recetas.vue')
  },
  {
    path: '/receta',
    name: 'Receta',

    component: () => import(/* webpackChunkName: "about" */ '../views/Receta.vue')
  },
  {
    path: '/preparaciones',
    name: 'Preparaciones',

    component: () => import(/* webpackChunkName: "about" */ '../views/Preparaciones.vue')
  },
  {
    path: '/preparacion',
    name: 'Preparacion',

    component: () => import(/* webpackChunkName: "about" */ '../views/Preparacion.vue')
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Nosotros.vue')
  }
  ,
  {
    path: '/inicio',
    name: 'Inicio',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
