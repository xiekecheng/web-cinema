/*
 * @Author: github.com/xiekecheng
 * @Date: 2022-05-15 20:56:01
 * @LastEditTime: 2022-05-15 21:10:33
 * @FilePath: /web-cinema/src/utils/request.js
 * @Description: 封装axios
 * 
 */
const axios = require('axios');
const instance = axios.create({
  // baseURL: 'https://some-domain.com/api/',
  timeout: 5000,
  // headers: {'X-Custom-Header': 'foobar'}
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
	// Do something before request is sent
	return config;
}, function (error) {
	// Do something with request error
	return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
	// Any status code that lie within the range of 2xx cause this function to trigger
	// Do something with response data
	if(response.status >= 200 && response.status < 300){
		return response.data
	}
	return response;
}, function (error) {
	// Any status codes that falls outside the range of 2xx cause this function to trigger
	// Do something with response error
	return Promise.reject(error);
});

export default instance;