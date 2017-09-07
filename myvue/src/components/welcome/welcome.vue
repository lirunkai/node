<template lang="pug" scoped>
  div.page
    el-row(:gutter="20")
      el-col.text(:span="24")
        p.title {{showText}}
        el-form.margin_top(ref="form", :model="form", :rules='rules',label-width="80px")
          el-form-item(label="用户名", prop="name")
            el-input.input(v-model="form.name")
          el-form-item(label="密码", prop="password")
            el-input.input(v-model="form.password")
          el-form-item
            el-button(type="primary", @click="onSubmit('form')") 注册
            el-button(@click="resetForm('form')") 登录
</template>

<script>
  import Rx from 'rxjs'
  export default {
    name: 'login',
    data(){
      return {
        showText: '',
        form: {
          name: '',
          password: ''
        },
        texts: [
            "我如果爱你",
            "绝不会像攀岩的灵巧话",
            "借你的高枝炫耀自己",
            "登录去吧"
        ],
        n: 0,
        rules: {
          name: [
            {required: true, message: "请输入名称", trigger: "blur"}
          ],
          password: [
            {required: true, message: "请输入密码", trigger: "blur"},
            {min: 3, max: 10, message: "密码不得小于3位", trigger: 'blur'}
          ]
        }
      }
    },
    mounted(){
      this.isDone(0);
    },
    methods: {
      isDone(n){
        let x = 0;
        let timer = setInterval(() => {
          console.log(x);
          if(x == this.texts[n].length){
             clearInterval(timer);
             this.showText = '';
             this.n += 1;
          } else {
            this.toText(this.texts[n][x])
            x+=1;
          }
        }, 300)
      },
      toText(text){
        this.showText += text;
      },
      onSubmit (form) {
        this.$refs[form].validate((valid) => {
          if(valid){
            this.register();
          } else {
            return false;
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].validate((valid) => {
          if(valid){
            this.login();
          } else {
            return false;
          }
        })
      },
      register () {
        this.$http.post('/api/users/create', {
          username: this.form.name,
          password: this.form.password
        })
          .then( r => {
            this.$message(r.data.msg)
          })
      },
      login(){
        this.$http.post('/api/users/login', {
          username: this.form.name,
          password: this.form.password
        })
          .then( r => {
            this.message(r.data.msg)
          })
      }
    },
    watch: {
      n(){
        if(this.n == this.texts.length){
          this.showText = this.texts[this.n-1]
          return false;
        } else {
          this.isDone(this.n);
        }
      }
    }
  }
</script>

<style lang="less">
  .page{
    min-height: 1000px;
    padding: 20px;
  }
  .input{
    width: 400px;
  }
  .text{
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
      min-height: 31px;
      font-size: 22px;
    }
    p{
      font-size: 20px;
    }
  }
  .margin_top{
    margin-top: 40px;
  }
</style>
