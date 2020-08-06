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
          id="vue">
        </div>

        <div
          id="react">
        </div>

      </div>

    </div>

  </div>
</template>

<style>
.qiankun-base {
  display: flex;
}
</style>
