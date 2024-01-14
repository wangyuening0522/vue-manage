<template>
  <div>
  
    <ul>
      <li v-for="user in userList" :key="user.id">
        <p>{{ user.name }}</p>
        <p>{{ user.username }}</p>
        <p>{{ user.mobile }}</p>
      </li>
    </ul> -->
    <!-- 编辑和添加页面定义 -->
    <template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
  </div>
</template>

<script>
// import Vue from "vue";
import axios from "axios"
export default {
  data() {
    return {
      userList: [],
      activeName: 'second'
    };
  },

  methods: {  handleClick(tab, event) {
        console.log(tab, event);
      }},
 /*  created(){
    axios.post('http://127.0.0.1:4523/m1/2818599-0-default/dev-api/cs/papi/userApp/v1/page', {
    pageNo: 1,
    pageSize: 10
  })
  .then(response => {
    console.log(response);
    this.userList = response.data.data.records;
    console.log(this.userList);
  })
  .catch(error => {
    console.log(error);
  });
  } */
};
</script>

<style></style>
