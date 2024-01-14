// import { Main } from "element-ui";
import Main from "../view/Main";
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../view/Home";
import User from "../view/User";
import Mall from "../view/Mall";
import PageOne from "../view/PageOne";
import PageTwo from "../view/PageTwo";
import Login from "../view/Login";
Vue.use(VueRouter);
// 1.创建路由组件
//2.定义路由
const routes = [
  //主路由：
  {
    name:'Main',
    path: "/",
    component: Main,
    //redirect: "/home", //当路径是/,重定向,因为后端返回的首页(home)路径是/
   children: [
     /*  {
        //首页
        path: "home",
        name: "home",
        component: Home,
      },
      {
        //用户管理
        path: "user",
        name: "user",

        component: User,
      },
      //商品管理
      {
        path: "mall",
        name: "mall",
        component: Mall,
      },
      {
        path: "page1",
        name: "page1",
        component: PageOne,
      },
      {
        path: "page2",
        name: "page2",
        component: PageTwo,
      }, */
    ], 
  },
  //首页路由:
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];
//3.创建router实例
const router = new VueRouter({
  routes: routes,
});
//4.暴露router实例，挂载在根结点上
export default router;
