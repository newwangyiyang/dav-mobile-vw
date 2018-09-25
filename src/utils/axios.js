import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 4000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'https://www.xinsiluchaye.com/WechatMallTest/rest/';
//POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
//code状态码200判断
axios.interceptors.response.use((res) => {
  if (res.status !== 200) {
    //跑出该错误，会被src/index.js中dva({onError() {}})捕获，统一来处理，请求异常
    throw new Error('请求错误');

    // return Promise.reject(res);
  }
  return res.data;
}, (error) => {
  return Promise.reject(error);
});

export default axios;