<template>
  <!-- 特别注意：要写一个路由出口，代表者路由指向的页面可以在主页面的哪个位置显示 -->
  <div>
    <el-container>
      <el-aside width="auto">
        <common-aside />
      </el-aside>
      <el-container>
        <el-header>
          <common-header />
        </el-header>
        <!-- tag区域 -->
        <common-tag></common-tag>
        <el-main>
          <!-- 子路由的出口 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import CommonAside from "../components/CommonAside";
import CommonHeader from "@/components/CommonHeader.vue";
import CommonTag from "@/components/CommonTag.vue";
export default {
  data() {
    return {};
  },
  components: {
    CommonAside,
    CommonHeader,
    CommonTag
  },
};
</script>
<style scoped>
.el-header {
  padding: 0;
}
</style>
