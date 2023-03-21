// @ts-ignore
import axios from 'axios';
import { settings } from '~/config';
// 创建axios实例
const requester = axios.create({
  //设置基础路径
  baseURL: settings.baseUrl,
  // 请求超时时间
  timeout: 1 * 60 * 1000,
  headers: {
    get: {
      'Content-Type': 'application/json',
    },
    post: {
      'Content-Type': 'application/json',
    },
  },
});

// http request 拦截器
requester.interceptors.request.use(
  (config) => {
    // 发送请求前的处理
    // 这里可以处理 token
    return config;
  },
  (err) => {
    // 请求错误的处理
    return Promise.reject(err);
  },
);

// http response 拦截器
requester.interceptors.response.use(
  //处理响应数据
  (response) => {
    // //判断请求是否正常
    // if (response.data.code !== 200) {
    //     //出现错误,错误处理,提示错误信息
    //     return Promise.reject(response.data)
    // } else {
    //     //成功返回数据
    //     return response.data
    // }
    return response.data;
  },
  // 抛出错误
  (error) => {
    return Promise.reject(error.response);
  },
);

// 允许外界修改default的部分内容
export function updateHeadersCommon(val: any) {
  axios.defaults.headers.common = val;
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url: string, params: any) {
  return new Promise((resolve, reject) => {
    requester
      .get(url, { params: params })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url: string, params: any) {
  return new Promise((resolve, reject) => {
    requester
      .post(url, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

export default requester;
