import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const routes = [
 
  {
    path: "/home",
    component: () => import('@/views/home'),
    redirect:"/Index",
    children:[
     {
      path: "/Index",
      name:"/Index",
      component: () => import('@/views/Index/Index.vue'),
     },
     {
      path: "/ShowTeachers",
      name:"/ShowTeachers",
      component: () => import('@/views/ShowTeachers/ShowTeachers.vue'),
     },
     {
      path: "/News",
      name:"/News",
      component: () => import('@/views/News/News.vue'),
     },
     {
      path: "/BookList",
      name:"/BookList",
      component: () => import('@/views/BookList/BookList.vue'),
     },
     {
      path: "/Person",
      name:"/Person",
      component: () => import('@/views/Person/Person.vue'),
     },
     {
      path: "/mys",
      name:"/mys",
      component: () => import('@/views/Person/mys.vue'),
     },
    ]
  },
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


]

const router = new VueRouter({
  mode: "history",

  routes,
});

export default router;