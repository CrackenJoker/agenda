import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Concluida',
    name: 'concluida',
    component: () => import('../views/TarefaFeita.vue')
  },
  {
    path:'/Pendente',
    name:'pendente',
    component:()=>import('../views/TarefaPendente.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
