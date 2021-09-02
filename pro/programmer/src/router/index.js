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
      component: () => import('@/views/Person/mys.vue'),
     },
     {
      path: "/mys",
      name:"/mys",
      component: () => import('@/views/Person/Person.vue'),
     },
    ]
  },
  //咨询详情
  {
    path: "/inforDetail",
    name:"/inforDetail",
    component: () => import('@/views/News/inforDetail.vue'),
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
  {
    path: '/details',
    component: () => import('@/views/ShowTeachers/details.vue'),
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
  //签到页面
  {
    path: '/sign',
    component: () => import('@/views/Person/sign.vue'),
  },
  //更多页面
  {
    path: '/more',
    component: () => import('@/views/Person/more.vue'),
  },
  //兑换页面
  {
    path: '/store',
    component: () => import('@/views/Person/store.vue'),
  },
  //兑换记录页面
  {
    path: '/record',
    component: () => import('@/views/record.vue'),
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