import axios from "axios";

import {
  handleChangeRequestHeader,
  handleConfigureAuth,
  handleAuthError,
  handleGeneralError,
  handleNetworkError,
} from "./tools";

type Fn = (data: FcResponse<any>) => unknown;
const urls = "http://localhost:8080/";

interface IAnyObj {
  [index: string]: unknown;
}

interface FcResponse<T> {
  errno: string;
  errmsg: string;
  data: T;
}

// const urls = "http://localhost:8080";

axios.interceptors.request.use((config) => {
  config = handleChangeRequestHeader(config);
  config = handleConfigureAuth(config);
  return config;
});

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    if (response.status !== 200) return Promise.reject(response.data);
    handleAuthError(response.data.errno);
    handleGeneralError(response.data.errno, response.data.errmsg);
    return response;
  },
  (err) => {
    // console.log(err);
    handleNetworkError(err.response.status);
    Promise.reject(err.response);
  },
);

export const Get = <T>(
  url: string,
  params: IAnyObj = {},
  clearFn?: Fn,
): Promise<[any, FcResponse<T> | undefined]> =>
  new Promise((resolve) => {
    axios
      .get(urls + url, { params })
      .then((result) => {
        let res: FcResponse<T>;
        if (clearFn !== undefined) {
          res = clearFn(result.data) as unknown as FcResponse<T>;
        } else {
          res = result.data as FcResponse<T>;
        }
        resolve([null, res as FcResponse<T>]);
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });

export const Post = <T>(
  url: string,
  data: IAnyObj,
  params: IAnyObj = {},
): Promise<[any, FcResponse<T> | undefined]> => {
  return new Promise((resolve) => {
    axios
      .post(urls + url, data, { params })
      .then((result) => {
        resolve([null, result.data as FcResponse<T>]);
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });
};
