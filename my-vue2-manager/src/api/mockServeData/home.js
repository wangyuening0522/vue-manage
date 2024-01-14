import Mock from "mockjs";
//图标数据
let List = [];s
export default {
  getStaticsticalData: () => {
    //mock.Random.float 产生随机数100到8000之间，保留小数 最新奥0位 最大0位
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          苹果: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
          魅族: Mock.Random.float(100, 8000, 0, 0),
          三星: Mock.Random.float(100, 8000, 0, 0),
          小米: Mock.Random.float(100, 8000, 0, 0),
        })
      );
    }
    return {
      code: 200,
      orderData: {
        date: [
          "20191001",
          "20191002",
          "20191003",
          "20191004",
          "20191005",
          "20191006",
          "20191007",
        ],
        "data": [
          {
            苹果: "@integer(1000, 5000)",
            小米: "@integer(1000, 5000)",
            华为: "@integer(1000, 5000)",
            oppo: "@integer(1000, 5000)",
            vivo: "@integer(1000, 5000)",
            一加: "@integer(1000, 5000)",
          },
        ],
      },
      videoData: [
        {
          name: "小米",
          value: 2999,
        },
        {
          name: "苹果",
          value: 5999,
        },
        {
          name: "vivo",
          value: 1500,
        },
        {
          name: "oppo",
          value: 1999,
        },
        {
          name: "魅族",
          value: 2200,
        },
        {
          name: "三星",
          value: 4500,
        },
      ],
      userData: [
        {
          date: "周一",
          new: 5,
          active: 200,
        },
        {
          date: "周二",
          new: 10,
          active: 500,
        },
        {
          date: "周三",
          new: 12,
          active: 550,
        },
        {
          date: "周四",
          new: 60,
          active: 800,
        },
        {
          date: "周五",
          new: 65,
          active: 550,
        },
      ],
      message: "成功了",
    };
  },
};
