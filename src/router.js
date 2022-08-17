import { createRouter, createWebHistory } from "vue-router"

import HomePage from "./pages/HomePage.vue"
import WorkPage from "./pages/WorkPage.vue"

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/work",
    component: WorkPage,
  },
]

const Router = createRouter({
  routes: routes,
  history: createWebHistory(),
})

export default Router
