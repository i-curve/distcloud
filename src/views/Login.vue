<template>
  <div class="login">
    <div class="login-logo clearfix">
      <div class="logo">
        <img src="~@/assets/img/login/logo.svg" alt="">
      </div>
      <h1>登录</h1>
    </div>
    <div class="text">
      <input type="text" placeholder="username" class="inp-text" v-model="username"><br>
      <img src="~@/assets/img/login/name.svg" alt="" id="username">
      <input type="password" placeholder="password" class="inp-text" v-model="password" @keyup.enter="clickBtnLogin"/><br>
      <img src="~@/assets/img/login/password.svg" alt="" id="password">
      <button class="inp-text" @click="clickBtnLogin"><span>登录</span></button>
      <router-link to="/register"><button class="inp-text"><span>注册</span></button></router-link>
    </div>
  </div>
  
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue"
import { PostLogin } from '@/server'
export default defineComponent({
  name: "AppLogin",
  setup () {
    const username = ref(""),
      password = ref("")

    const clickBtnLogin = () => {
      var _username = username.value,
        _password = password.value
      PostLogin({username: _username,password: _password})
    }
    return {
      username,
      password,
      clickBtnLogin
    }
  }
})
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-top: 24rem;
  background: url("~@/assets/img/login/login.svg");
  background-size: 100%;
  text-align: center;
  .login-logo {
    width: 150px;
    margin: 0 auto 30px;
    img {
      float: left;
      height: 48px;
      width: 48px;
      vertical-align: middle;
    }
    h1 {
      float: right;
      margin-bottom: 0;
      font-weight: normal;
      line-height: 48px;
    }
  }
  .text {
    position: relative;
    width: 40rem;
    margin: 0 auto;
    .inp-text {
      width: 40rem;
      height: 4rem;
      margin-bottom: 2.4rem;
      border-radius: .3rem;
    }
    input {
      border: .1rem solid #40A9FF;
      font-size: 1.6rem;
      text-indent: 3rem;
    }
    input:focus {
      border: .1rem solid #40A9FF;
      box-shadow: 0 0 .1rem .1rem #40A9FF;
      outline: none;
    }
    #username {
      position: absolute;
      top: 1rem;
      left: .5rem;
      width: 2rem;
    }
    #password {
      position: absolute;
      top: 7rem;
      left: .1rem;
      width: 3rem;
    }
    button {
      border: none;
      background-color: #1890ff;
      color: #fff;
      span {
        font-size: 1.6rem;
      }
    }
    button:hover {
      background-color: #40A9FF;
    }
    button:focus {
      outline: none;
    }
    button:active {
      border: .2rem solid rgba(0,0,0,.045);
      border-bottom: .3rem solid transparent;
      box-shadow: 0 0 .1rem;
    }
  }
}
</style>