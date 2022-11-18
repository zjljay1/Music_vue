<template>
  <!-- <div>我是登录页面</div> -->
  <div class="container">
    <div class="form-box" ref="from_box">
      <!-- 注册 -->
      <div class="register-box hidden" ref="register_box">
        <h1>register</h1>
        <input type="text" placeholder="用户名" v-model="data.account" />
        <input type="email" placeholder="邮箱" />
        <input type="password" placeholder="密码" />
        <input type="password" placeholder="确认密码" />
        <button>注册</button>
      </div>
      <!-- 登录 -->
      <div class="login-box" ref="login_box">
        <h1>login</h1>
        <input type="text" placeholder="用户名" v-model="data.account" />
        <input type="password" placeholder="密码" />
        <button>登录</button>
      </div>
    </div>
    <div class="con-box left">
      <h2>欢迎来到<span>木头人音乐盒</span></h2>
      <p>注册领取您的私人<span>特权</span>吧</p>
      <div class="img">
        <img src="http://www.lvyestudy.com/img/dance.gif" alt="" />
      </div>
      <p>已有账号</p>
      <button id="login" @click="toLogin">去登录</button>
    </div>
    <div class="con-box right">
      <h2>欢迎来到<span>木头人音乐盒</span></h2>
      <p>快登陆来听<span>music</span>吧</p>

      <div class="img">
        <img src="http://www.lvyestudy.com/img/dance.gif" alt="" />
      </div>
      <p>没有账号？</p>
      <button id="register" @click="toRegister">去注册</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, reactive } from "vue";
const instance = getCurrentInstance()!;
const data = reactive({
  account: "123",
});
function toLogin(): void {
  (instance.refs.from_box as HTMLElement).style.transform = `translateX(0%)`;
  (instance.refs.register_box as HTMLElement).classList.add("hidden");
  (instance.refs.login_box as HTMLElement).classList.remove("hidden");
  console.log(instance);
  console.log(data);
}
const toRegister = () => {
  (instance.refs.from_box as HTMLElement).style.transform = `translateX(80%)`;
  (instance.refs.login_box as HTMLElement).classList.add("hidden");
  (instance.refs.register_box as HTMLElement).classList.remove("hidden");
  console.log(instance);
  console.log(data);
};
</script>

<style lang="scss">
body {
  /* 100%窗口高度 */
  height: 100vh;
  /* 弹性布局 水平+垂直居中 */
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  /* 渐变背景 */
  background: linear-gradient(200deg, #f3e7e9, #e3eeff);
}
.container {
  background-color: #fff;
  width: 650px;
  height: 415px;
  border-radius: 5px;
  /* 阴影 */
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  /* 相对定位 */
  position: relative;
  .form-box {
    /* 绝对定位 */
    position: absolute;
    top: -10%;
    left: 5%;
    background-color: #d3b7d8;
    width: 320px;
    height: 500px;
    border-radius: 5px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    /* 动画过渡 加速后减速 */
    transition: 0.5s ease-in-out;
    .register-box,
    .login-box {
      /* 弹性布局 垂直排列 */
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      h1 {
        text-align: center;
        margin-bottom: 25px;
        /* 大写 */
        text-transform: uppercase;
        color: #fff;
        /* 字间距 */
        letter-spacing: 5px;
      }
      input {
        background-color: transparent;
        width: 70%;
        color: #fff;
        border: none;
        /* 下边框样式 */
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
        padding: 10px 0;
        text-indent: 10px;
        margin: 8px 0;
        font-size: 14px;
        letter-spacing: 2px;
      }
      input::placeholder {
        color: #fff;
      }
      input:focus {
        color: #a262ad;
        outline: none;
        border-bottom: 1px solid #a262ad80;
        transition: 0.5s;
      }
      input:focus::placeholder {
        opacity: 0;
      }
    }
    .hidden {
      display: none;
      transition: 0.5s;
    }
    button {
      width: 70%;
      margin-top: 35px;
      background-color: #f6f6f6;
      outline: none;
      border-radius: 8px;
      padding: 13px;
      color: #a262ad;
      letter-spacing: 2px;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background-color: #a262ad;
      color: #f6f6f6;
      transition: background-color 0.5s ease;
    }
  }
  .con-box {
    width: 50%;
    /* 弹性布局 垂直排列 居中 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* 绝对定位 居中 */
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &.left {
      left: -2%;
    }
    &.right {
      right: -2%;
    }
    h2 {
      color: #8e9aaf;
      font-size: 25px;
      font-weight: bold;
      letter-spacing: 3px;
      text-align: center;
      margin-bottom: 4px;
    }
    p {
      font-size: 12px;
      letter-spacing: 2px;
      color: #8e9aaf;
      text-align: center;
    }
    span {
      color: #d3b7d8;
    }
    img {
      width: 150px;
      height: 150px;
      opacity: 0.9;
      margin: 40px 0;
    }
    button {
      margin-top: 3%;
      background-color: #fff;
      color: #a262ad;
      border: 1px solid #d3b7d8;
      padding: 6px 10px;
      border-radius: 5px;
      letter-spacing: 1px;
      outline: none;
      cursor: pointer;
    }
    button:hover {
      background-color: #d3b7d8;
      color: #fff;
    }
    .img {
      position: relative;
      overflow: hidden;
      &:before {
        content: "";
        position: absolute;
        z-index: 999;
        top: 0;
        left: -150px;
        width: 100px;
        height: 100%;
        transform: skewX(-30deg);
        background-image: linear-gradient(
          270deg,
          hsla(0, 0%, 100%, 0),
          hsla(0, 0%, 100%, 0.5) 50%,
          hsla(0, 0%, 100%, 0)
        );
      }
      &:hover::before {
        left: 240px;
        transition: all 0.3s ease-in;
      }
    }
  }
}
</style>
