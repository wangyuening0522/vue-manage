import Mock from "mockjs";
import homeApi from "./mockServeData/home";
import user from "./mockServeData/user";
import permission from './mockServeData/permission'
//定义mock请求拦截
Mock.mock(
  "/api/home/getData",
  "get" /* function () {
  //拦截到请求后的处理逻辑
  console.log("拦截");
  //返回的1就是data，因此可以自己捏数据
  return 1;
} */,
  homeApi.getStaticsticalData
);
//用户列表数据
Mock.mock("/api/user/add", user.createUser);
Mock.mock("/api/user/del", user.deleteUser);
Mock.mock("/api/user/edit", user.updateUser);
Mock.mock("/api/user/getUser", user.getUserList);
Mock.mock(/api\/permission\/getMenu/,'post',permission.getMenu);