import axios from 'axios';

axios.defaults.baseURL = 'https://open.duyiedu.com';
//拦截请求
axios.interceptors.request.use(function (config){
    config.params = {
        ...config.params,
        appkey:'caohongyu_1575787039527'
    }
    return config;
})


export default axios;