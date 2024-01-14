import http from "../utils/request";
//请求首页数据
export const getData = () => {
  //返回一个promise对象
  return http.get("/home/getData");
};
export const getUser = (params) => {
  return http.get("/user/getUser", params);
};
export const addUser = (data) => {
  return http.post("/user/add", data);
};
export const delUser = (params) => {
  return http.get("/user/del",params);
};
export const editUser = (data) => {
  return http.post("/api/user/edit", data);
};
//边声明边导出
export const getMenu=(data)=>{
  return http.post('/permission/getMenu',data);
}
