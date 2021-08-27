import axios from 'axios'
import {baseUrl} from '@/config/index.js'


import {Toast} from "vant"

// 设置axios的基地址【面试题】
// 每次diaoy个接口时都要写上完整的地址，每个接口的地址前面部分是相同的，on
// 接口地址有相同的部分，我们要把相同的部分提取出设置一下，后面调用接口就不需要写相同的部分
const service = axios.create({
  baseURL: baseUrl, // url = base api url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
})

// axios.defaults.baseURL="相同的地址"
service.defaults.baseURL=baseUrl

// 添加请求拦截器----（设置请求头，传递token）
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    Toast.loading({
      duration:5000,
      forbidClick: true
    })
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器---处理共性的错误统一做处理
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    Toast.clear()
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });



//   导出
export default service;