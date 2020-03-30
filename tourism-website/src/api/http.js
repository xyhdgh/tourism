import axios from 'axios'
import qs from 'qs'

/* 根据环境变量来区分接口的默认地址 */
switch (process.env.NODE_ENV) {
  case "production":
    axios.defaults.baseURL = "http://api.xyh.cn";
    break;
  case "test":
    axios.defaults.baseURL = "http://localhost:8000";
    break;
  default:
    axios.defaults.baseURL = "http://localhost:3000"
}
/* 设置超时时间 */
axios.defaults.timeout = 10000;
/* 设置跨域是否允许携带凭证 */
axios.defaults.withCredentials = true;
/* 设置请求传递数据的格式 看服务器要求什么格式 */
axios.defaults.headers['Content-type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = data => qs.stringify(data);
/* 设置请求拦截器 TOEKN校验 */
axios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  token && (config.headers.Authorization = token);
  return config
}, error => {
  return Promise.reject(error)
})

/* 设置响应拦截器 */
axios.interceptors.response.use(res => {
  return res.data
}, error => {
  /* 除了2开头的状态码 都走error */
  let {
    res
  } = error
  if (res) {
    /* 服务器有返回结果 */
    switch(res.status) {
      case 401: // 当前请求需要用户验证（一般是未登录 权限）
        // 可以跳路由 
        break;
      case 403: // 服务器理解请求 但拒绝执行它（一般是token过期）

        break;
      case 404: // 找不到页面
        // 
        break;
    }
  } else {
    /* 服务器无返回结果 */
    /* 断网 */
    if(!window.navigator.onLine) {
      /* 断网处理：可以跳转到断网页面 */
      return;
    }
    return Promise.reject(error);
  }
})

export default axios;