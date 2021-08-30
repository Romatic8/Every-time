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
    path: '/login',
    component: () => import('@/views/index'),
  },
  {
    path: '/detail',
    component: () => import('@/views/ShowTeachers/detail.vue'),
  },
  //设置密码
  {
    path: '/set',
    component: () => import('@/views/set.vue'),
  },
  //登录后的设置密码
  {
    path: '/setpwd',
    component: () => import('@/views/Person/setpwd.vue'),
  },
  //设置密码    通过验证码设置
  {
    path: '/setP',
    component: () => import('@/views/Person/setP.vue'),
  },
  //详情页面
  {
    path: '/detailCourse',
    component: () => import('@/views/ShowTeachers/detailCourse.vue'),
  },
  {
    path:"*",
    redirect:"/home",  
  }

]

const router = new VueRouter({
  mode: "history",

  routes,
});

export default router;