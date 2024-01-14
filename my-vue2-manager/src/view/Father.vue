<template>
  <!-- 一个模板只能有一个div -->
  <div>
    <el-container>
      <el-aside width="200px">
        <common-aside />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <h1>我是主路由</h1>
          <!-- 子路由的出口要写在父路由的模板中哦 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import CommonAside from "@/components/CommonAside.vue";
export default {
  data() {
    return {};
  },
  components: {
    CommonAside,
  },
};
</script>
