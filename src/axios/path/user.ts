import { Get, Post } from "../server";

export interface FcResponse<T> {
  errno: string;
  errmsg: string;
  data: T;
  code: string;
  message: string;
}

export type ApiResponse<T> = Promise<[any, FcResponse<T> | undefined]>;

export function getUserInfo<T = { name: string }>(id: string): ApiResponse<T> {
  return Get<T>("/user/info", { id });
}

export function test<T>(): ApiResponse<T> {
  return Get<T>("user/test");
}

export function testpo<T>(data: any): ApiResponse<T> {
  console.log(data);
  return Post<T>("user/login", {}, data);
}

export function testposs<T>(name: string, password: string): ApiResponse<T> {
  return Post<T>(`user/login?name=${name}&&password=${password}`, {});
}
export function login<T>(data: any): ApiResponse<T> {
  console.log(data);
  return Post<T>("user/login", data, {});
}
export function register<T>(data: any): ApiResponse<T> {
  console.log(data);
  return Post<T>("user/register", data, {});
}
export const userApi = {
  getUserInfo,
  test,
  testpo,
  testposs,
  login,
  register,
};
