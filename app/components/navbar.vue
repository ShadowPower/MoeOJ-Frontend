<template>
  <el-menu theme="dark" default-active="2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">主页</el-menu-item>
    <el-menu-item index="2">题目</el-menu-item>
    <el-menu-item index="3">提交</el-menu-item>
    <el-menu-item index="4">比赛</el-menu-item>
    <el-menu-item index="5">小组</el-menu-item>
    <el-menu-item index="6">排名</el-menu-item>
    <el-menu-item index="7">帮助</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      this.$parent.page = parseInt(key);
      switch (key) {
        case '1':
          window.location.href = window.location.protocol + '//' + window.location.host
          break;
        default:

      }
    }
  }
}
</script>

<style>

</style>
