<template lang="pug" scoped>
  div#app
    el-row
      router-view
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
    }
  }
}
</script>

<style lang="less">
  @import "./assets/styles/global";
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
