import Cookie from "js-cookie";

export default {
  state: {
    isCollapse: false, //控制菜单的展开还是收起
    tabsList: [
      {
        path: "/user",
        name: "user",
        label: "用户管理",
        icon: "user",
        url: "UserManage/UserManage",
      },
    ], //面包屑的数据
    menu: [],
  },
  mutations: {
    //修改菜单展开收起的方法
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
    //更新面包屑,val是点击的item信息,要求不是首页且不存在，用两个if实现
    selectMenu(state, val) {
      // console.log("val", val);
      //判断添加的数据是否为首页
      if (val !== "home") {
        //判断存在,就返回index，findIndex接受一个函数，item是tabslist中已经存在的项，返回一个ture或者false
        const index = state.tabsList.findIndex(
          (item) => item.name === val.name
        );
        //如果不存在，index返回-1
        if (index === -1) {
          state.tabsList.push(val);
        }
      }
    },
    //删除指定的tag数据
    closeTag(state, item) {
      console.log(item, "item");
      const index = state.tabsList.findIndex((val) => val.name === item.name);
      //splice(开始删除位置，删除个数)
      state.tabsList.splice(index, 1);
    },
    //设置menu数据
    setMenu(state, val) {
      state.menu = val;
      // console.log("走了seteMENU");
      Cookie.set("menu", JSON.stringify(val));
    },
    //动态注册路由,防止用户通过url方法访问到user页面
    addMenu(state, router) {
      //容错判断
      if (!Cookie.get("menu")) {
        console.log("容错判断");
        return;
      }
      //数据更新
      const menu = JSON.parse(Cookie.get("menu"));
      console.log("走了addMENU");
      state.menu = menu;
      //组装处理动态路由数据
      const menuArr = [];
      menu.forEach((item) => {
        //判断menu有无子菜单
        if (item.children) {
          item.children.map((item) => {
            item.component = () => import(`../view/${item.url}`);
            return item;
          });
          menuArr.push(...item.children);
        } else {
          item.component = () => import(`../view/${item.url}`);
          menuArr.push(item);
        }
      });
      console.log("menuArr", menuArr);
      menuArr.forEach((item) => {
        router.addRoute("Main", item);
      });
    },
  },
};
