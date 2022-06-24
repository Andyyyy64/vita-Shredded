import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Male from "../pages/male.vue"
import Female from "../pages/female.vue"
import Home from "../App.vue"



const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/male', name: 'male', component: Male },
  { path: '/female', name: 'female', component: Female },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;