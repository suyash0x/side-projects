import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import LayoutComponent from '@/layout/LayoutComponent.vue'
import DashboardView from '@/views/DashboardView.vue'
import ProjectView from '@/views/ProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/',
      component: LayoutComponent,
      children: [
        {
          path: '',
          component: DashboardView,
        },
        {
          path: 'project',
          component: ProjectView,
        },
      ],
    },
  ],
})

export default router
