import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    props: (route) => ({
      aboutId: route.query.id || ""
    })
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 베이스 URL을 자동으로 매핑
  routes
})