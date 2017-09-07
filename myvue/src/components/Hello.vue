<template scope lang="pug">
  el-row
    el-col(:span="24")
      el-menu(:default-active="activedIndex",  mode="horizontal")
        el-menu-item(index="1") 我的后台管理
        el-submenu(index="2")
          template(slot="title") 用户等级
          el-menu-item(index="2-1") 超级用户
          el-menu-item(index="2-2") 大牛
          el-menu-item(index="2-3") 小虾米
        el-menu-item(index="3") 文章
    el-col
      router-view
  //<div class="hello">
  //  <input type="text" v-model="username">
  //  <input type="text" v-model="password">
  //  <button @click="register">注册</button>
  //  <button @click="login">登录</button>
  //  <p>message</p>
  //  <p>{{msg}}</p>
  //</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      activedIndex: '1'
    }
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}


a {
  color: #42b983;
}
</style>
