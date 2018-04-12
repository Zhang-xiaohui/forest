import axios from 'axios';
import qs from 'qs';

let util = {};

/*
	axios配置
 */

// const ajaxUrl = env === 'development'
//     ? 'http://127.0.0.1:8888'
//     : env === 'production'
//     ? 'https://www.url.com'
//     : 'https://debug.url.com';

util.ajax = axios.create({
    // baseURL: ajaxUrl,
    timeout: 30000
});

//POST传参序列化(添加请求拦截器)
util.ajax.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    if(config.method  === 'post' || config.method  === 'put'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
     alert("错误的传参", 'fail');
    return Promise.reject(error);
});
//返回状态判断(添加响应拦截器)
util.ajax.interceptors.response.use((res) =>{
    //对响应数据做些事
    if(!res.data.success){
        // _.toast(res.data.msg);
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    // alert("网络异常", 'fail');
    return Promise.reject(error);
});

export default util;