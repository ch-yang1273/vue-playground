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
  {
    path: '/pizza',
    name: 'pizza',
    component: HomeView
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 베이스 URL을 자동으로 매핑
  routes
})

const user = {
  isAuthenticated: false,
}

router.beforeEach((to, from, next) => {
  if (to.name === 'pizza' && !user.isAuthenticated) {
    console.log('Not authenticated. Go to home');
    next({name: 'home'});
  } else {
    next();
  }
})