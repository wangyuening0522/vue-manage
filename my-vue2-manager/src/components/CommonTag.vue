<template>
  <div class="tabs">
    <el-tag
      v-for="(item, index) in tags"
      :key="item.label"
      :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      @click="changeMenu(item)"
      @close="handleClose(item, index)"
      size="small"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  mounted() {
    console.log();
  },
  methods: {
    ...mapMutations(["closeTag"]),
    //点击tag跳转的功能
    changeMenu(item) {
      console.log(item);
      this.$router.push({ name: item.name });
    },
    //点击tag删除的功能
    handleClose(item, index) {
      //删除点击item   ，如原有3，删后变2
      this.closeTag(item);
      //this.tags.length-1与index对应
      const length = this.tags.length; //拿到2
      //删除store中tablist中的数据,所以要调用mutation中的方法
      /* 方法1：辅助函数 方法2：thi.$store.commit(mutation方法) */
      //删除之后的跳转逻辑,如果此时路由和点击删除的路由一致，则不需要跳转
      if (item.name !== this.$route.name) {
        return;
      }
      //表示的是删除的最后一项
      if (index === length) {
        this.$route.push({
          name: this.tags[index - 1].name,
        });
      } else {
        this.$route.push({
          name: this.tags[index].name,
        });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-left: 15px;
    cursor: pointer;
  }
}
</style>
