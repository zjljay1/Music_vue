<script setup lang="ts">
// import { userApi } from "@/axios/path/user";
import { ref } from "vue";
import { api } from "@/axios/index";
import { message } from "@/utils/antd";
const userInfo = ref();
const token = ref();
const sjo = async () => {
  console.log(1);
  const [e, r] = await api.test();
  if (!e && r) userInfo.value = r.data;
  console.log(userInfo.value);
};
const data = { name: "Jay", password: "123" };
const sjos = async () => {
  console.log(2);
  const [e, r] = await api.testpo(data);
  if (!e && r) userInfo.value = r.data;
  console.log(userInfo.value);
};

const login = async () => {
  console.log(3);
  const [e, r] = await api.testposs("Jay", "123");
  if (!e && r) userInfo.value = r.data;
  console.log(userInfo.value.token);
  token.value = userInfo.value.token;
  console.log(token.value);
};

//登录
// const login = () => {};
</script>

<template>
  <button @click="sjo">点击发送get请求</button>
  <button @click="sjos">点击发送post请求带body参数</button>
  <button @click="login">点击发送post请求url参数</button>
  <form action="" method="post">
    <input type="file" />
    <input type="submit" />
  </form>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
