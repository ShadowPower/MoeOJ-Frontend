<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="qid" label="#" width="70"></el-table-column>
    <el-table-column prop="title" label="题目" width="580"></el-table-column>
    <el-table-column prop="level" label="难度" width="70"></el-table-column>
    <el-table-column prop="pass" label="通过率"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        qid: '1',
        title: 'Hello World!',
        level: '水题',
        pass: '50% (100/200)'
      },
      {
        qid: '2',
        title: 'Hello World!',
        level: '水题',
        pass: '50% (100/200)'
      },
      {
        qid: '3',
        title: 'Hello World!',
        level: '水题',
        pass: '50% (100/200)'
      },
      {
        qid: '10',
        title: 'Hello World!',
        level: '水题',
        pass: '50% (100/200)'
      },
      {
        qid: '2323',
        title: 'Hello World!',
        level: '水题',
        pass: '50% (100/200)'
      }]
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
