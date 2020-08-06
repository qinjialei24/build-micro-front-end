<template>
  <div
    id="qiankun-base-app">
    <div
      class="qiankun-base">
      <div
        class="left">
        <el-menu
          :router="true">

          <el-menu-item
            index="/">
            home
          </el-menu-item>

          <el-menu-item
            index="/about">
            about
          </el-menu-item>

          <el-menu-item
            index="/vue">
            vue应用
          </el-menu-item>

          <el-menu-item
            index="/react">
            react应用
          </el-menu-item>
        </el-menu>
      </div>

      <div
        class="right">
        <router-view>
        </router-view>

        <div
          class="child-app"
          v-show='renderChildApp'>

          <div
            id="vue">
          </div>

          <div
            id="react">
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      renderChildApp: false,
      xxx: true,
    };
  },
  methods: {
    isRenderChildApp(url) {
      this.renderChildApp = url.startsWith("/vue") || url.startsWith("/react");
      console.log("this.renderChildApp: ", this.renderChildApp);
    },
  },
  computed: {},
  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.isRenderChildApp(val.path);
      },
      // 深度观察监听
      deep: true,
    },
  },
};
</script>

<style>
.qiankun-base {
  display: flex;
}
</style>
