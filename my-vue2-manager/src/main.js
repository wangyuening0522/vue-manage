import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App";
// import{tag} from "element-ui"
import store from "./store";
import router from "./router";
import "./api/mock";
import Cookie from "js-cookie";
import AppOne from './AppOne.vue'
Vue.config.productionTip = false;
Vue.use(ElementUI);
// Vue.use(tag);
//添加全局前置导航守卫
router.beforeEach((to, from, next) => {
  console.log("to", to);//path:/login
  console.log("from", from);//path:/
  //判断token是否存在
  const token = Cookie.get("token");
  //token不存在并且不是在登陆页面,注意此时to是当前页面(login)(本身login页面)
  if (!token && to.name !== "login") {
    next({ name: "login" });
  }
  //token存在，用户存在，跳转首页(不能反复登录)
  else if (token && to.name === "login") {
    next({ name: "home" });
  } else {
    next();
  }
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
