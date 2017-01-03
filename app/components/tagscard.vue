<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 16px;">标签列表</span>
    </div>
    <div v-for="o in 4" class="text item">
      {{'标签 ' + o }}
    </div>
  </el-card>
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
.text {
  font-size: 14px;
}

.item {
  padding: 6px 0;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}

.box-card {

}
</style>
