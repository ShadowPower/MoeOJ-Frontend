<template>
  <div id="app">
    <navbar ref="nav"></navbar>
    <div class="pages">
      <template v-if="page == 2">
        <el-row :gutter="20">
          <el-col :span="18"><questions></questions></el-col>
          <el-col :span="6"><tagscard></tagscard></el-col>
        </el-row>
      </template>
      <template v-if="page == 3">
        <submissions></submissions>
      </template>
      <template v-if="page == 4">
        <p>比赛页面</p>
      </template>
      <template v-if="page == 5">
        <p>小组页面</p>
      </template>
      <template v-if="page == 6">
        <p>排名页面</p>
      </template>
      <template v-if="page == 7">
        <p>帮助页面</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: 2
    }
  },
  methods: {
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}

.pages{
  margin-top: 16px;
}

#app {
  max-width: 1120px;
  margin:0 auto;
}
</style>
