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

<style scoped></style>
