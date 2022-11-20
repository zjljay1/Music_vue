import { Get, Post } from "../server";

export interface FcResponse<T> {
  errno: string;
  errmsg: string;
  data: T;
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
  return Post<T>("user/logins", {}, data);
}

export function testposs<T>(name: string, password: string): ApiResponse<T> {
  return Post<T>(`user/login?name=${name}&&password=${password}`, {});
}

export const userApi = {
  getUserInfo,
  test,
  testpo,
  testposs,
};
