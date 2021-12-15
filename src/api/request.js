// axios二次封装
import axios from "axios"

import nProgress from "nprogress";
//引入进度条样式，在nprogress目录下的nprogress.css文件中
// 可以自己修改自己喜欢的样式
import "nprogress/nprogress.css"
// start进度条开始 ，done进度条结束

// 利用axios.create创建axios对象，绑定一些默认参数
const requests = axios.create({
  baseURL:"http://39.98.123.211/api",
  timeout: 5000
});

// 请求拦截器
requests.interceptors.request.use((config)=>{
  // config: 配置对象，对象里面有一个属性很重要，headers请求头
  //进度条开始
  nProgress.start();
  return config;
})


// 响应拦截器
requests.interceptors.response.use((res)=>{
  nProgress.done();
  return res.data;
}, (error)=>{
  // 返回一个失败的Promise对象
  return Promise.reject(new Error("failed"));
})

//对外暴露
export default requests;