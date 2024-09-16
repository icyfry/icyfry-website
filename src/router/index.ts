import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MeView from '@/views/MeView.vue'
import AboutView from '@/views/AboutView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true
  },
  {
    path: '/me',
    name: 'resume',
    meta: {
      title: 'Jonathan Le Brun',
    },
    component: MeView,
    props: true
  },
  {
    path: '/links',
    name: 'about',
    component: AboutView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const DEFAULT_TITLE: string = "icyfry.bzh";
router.beforeEach((to) => {
  document.title = (to.meta.title || DEFAULT_TITLE) as string;
});

export default router
