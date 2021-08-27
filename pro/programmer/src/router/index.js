import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const routes = [
  //注册页面
  {
    path: '/',
    component: () => import('@/views/index'),
  },
  //设置密码
  {
    path: '/set',
    component: () => import('@/views/set'),
  },
  {
    path: "/home",
    component: () => import('@/views/home'),
    children:[
     {
      path: "/Index",
      component: () => import('@/views/Index/Index.vue'),
     },
     {
      path: "/ShowTeachers",
      component: () => import('@/views/ShowTeachers/ShowTeachers.vue'),
     },
     {
      path: "/News",
      component: () => import('@/views/News/News.vue'),
     },
     {
      path: "/BookList",
      component: () => import('@/views/BookList/BookList.vue'),
     },
     {
      path: "/Person",
      component: () => import('@/views/Person/Person.vue'),
     }
    ]
  }


]

const router = new VueRouter({
  mode: "history",

  routes,
});

export default router;