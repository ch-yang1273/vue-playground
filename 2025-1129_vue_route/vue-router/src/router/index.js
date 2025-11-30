import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/LoginView.vue";
import PizzaView from "../views/PizzaView.vue";
import DontLeaveView from "../views/DontLeaveView.vue";

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
    component: PizzaView,
    beforeEnter: async (to, from, next) => {
      if (!user.isAuthenticated) {
        next({name: 'home'});
      } else {
        next();
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/leave',
    name: 'leave',
    component: DontLeaveView
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 베이스 URL을 자동으로 매핑
  routes
})

const user = {
  isAuthenticated: false,
}

router.afterEach((to, from, next) => {
  document.title = to.name;
  if (to.name === 'login') {
    user.isAuthenticated = true;
  }
})