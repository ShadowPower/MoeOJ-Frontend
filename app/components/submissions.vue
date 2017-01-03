<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="sid" label="#" width="70"></el-table-column>
    <el-table-column prop="user" label="用户" width="120"></el-table-column>
    <el-table-column prop="title" label="题目"></el-table-column>
    <el-table-column prop="time" label="提交时间"  width="180"></el-table-column>
    <el-table-column prop="language" label="语言" width="80"></el-table-column>
    <el-table-column prop="duration" label="运行时间" width="100"></el-table-column>
    <el-table-column prop="result" label="结果"  width="180"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        sid: '1',
        user: '夜光',
        title: 'Hello World!',
        time: '2017年1月3日 12:34',
        language: 'C++',
        duration: '8888ms',
        result: 'Accepted!'
      },
      {
        sid: '2',
        user: '夜光',
        title: 'Hello World!',
        time: '2017年1月3日 12:34',
        language: 'C++',
        duration: '8888ms',
        result: 'Accepted!'
      },
      {
        sid: '3',
        user: '夜光',
        title: 'Hello World!',
        time: '2017年1月3日 12:34',
        language: 'C++',
        duration: '8888ms',
        result: 'Accepted!'
      },
      {
        sid: '4',
        user: '夜光',
        title: 'Hello World!',
        time: '2017年1月3日 12:34',
        language: 'C++',
        duration: '8888ms',
        result: 'Accepted!'
      },
      {
        sid: '5',
        user: '夜光',
        title: 'Hello World!',
        time: '2017年1月3日 12:34',
        language: 'C++',
        duration: '8888ms',
        result: 'Accepted!'
      },
      {
        sid: '6',
        user: '夜光',
        title: 'Hello World!',
        time: '2017年1月3日 12:34',
        language: 'C++',
        duration: '8888ms',
        result: 'Accepted!'
      },
      {
        sid: '7',
        user: '夜光',
        title: 'Hello World!',
        time: '2017年1月3日 12:34',
        language: 'C++',
        duration: '8888ms',
        result: 'Accepted!'
      },
      {
        sid: '8',
        user: '夜光',
        title: 'Hello World!',
        time: '2017年1月3日 12:34',
        language: 'C++',
        duration: '8888ms',
        result: 'Accepted!'
      }]
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
