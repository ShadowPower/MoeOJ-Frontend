<template>
  <div id="app">
    <navbar ref="nav"></navbar>
    <template v-if="page == 2">
      <questions></questions>
    </template>
    <template v-if="page == 3">
    </template>
    <template v-if="page == 4">
    </template>
    <template v-if="page == 5">
    </template>
    <template v-if="page == 6">
    </template>
    <template v-if="page == 7">
    </template>
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

</style>
