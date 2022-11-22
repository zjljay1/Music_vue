<script setup lang="ts">
import { useCssModule, ref, reactive, computed } from "vue";
type TUser = {
  name: string;
  age: number;
};
interface IUser {
  name: string;
  age: number;
}
const msg1 = ref<any>(null);
const msg2 = ref(""); //类型推导
const Tuser1 = ref<TUser>({ name: "123", age: 18 });
const Iuser1 = ref<IUser>({ name: "123", age: 18 });
const user2 = reactive({} as TUser);
const Iuser2 = reactive({} as IUser);
const obj = reactive({});
const Tuser3 = reactive<TUser>({ name: "123", age: 18 });
const Tuser4 = reactive({ name: "123", age: 18 } as TUser);
const Iuser3 = reactive<IUser>({ name: "123", age: 18 });
const Iuser4 = reactive({ name: "123", age: 18 } as IUser);
const msg3 = computed(() => msg1.value);
const user5 = computed<TUser>(() => {
  return { name: "tang", age: 18 };
});
// 不传递参数，获取<style module>代码块编译后的css类对象

const style = useCssModule();

console.log(style.success); // 获取到的是success类名经过 hash 计算后的类名

// 传递参数content，获取<style module="content">代码块编译后的css类对象

const contentStyle = useCssModule("content");
class User {
  fullName: string;
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + " " + lastName;
  }
}
const u = new User("陈", "宿建德江");
console.log(u.fullName);
</script>

<template>
  <div class="success">普通style red</div>

  <div :class="$style.success">默认CssModule pink</div>
  <div :class="content.success">123</div>
  <div :class="style.success">默认CssModule pink</div>

  <div :class="contentStyle.success">具名CssModule blue</div>

  <div :class="content.success">具名CssModule blue</div>
</template>

<!-- 普通style -->

<style>
.success {
  color: red;
}
</style>

<!-- 无值的css module -->

<style module lang="scss">
.success {
  color: pink;
}
</style>

<!-- 具名的css module -->

<style module="content" lang="scss">
.success {
  color: blue;
}
</style>
