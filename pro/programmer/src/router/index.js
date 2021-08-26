import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    component: () => import('@/views/index'),
 
  },
  {
    path: '/set',
    component: () => import('@/views/set'),
 
  },
 
 
]

const router = new VueRouter({
  mode: "history",
 
  routes,
});

export default router;