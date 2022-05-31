import axios from 'axios';

export function request(config) {
    const instance = axios.create({
        baseURL: 'https://api.shop.eduwork.cn',
        timeout: 5000
    })

    // 请求拦截
    instance.interceptors.request.use(config => {
        return config;
    }, err => {

    })
    // 响应拦截
    instance.interceptors.response.use(res => {
        return res;
    }, err => {

    })

    return instance(config);
}