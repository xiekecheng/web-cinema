/*
 * @Author: github.com/xiekecheng
 * @Date: 2022-05-15 20:55:53
 * @LastEditTime: 2022-05-15 21:50:34
 * @FilePath: /web-cinema/src/api/index.js
 * @Description: api接口
 * 
 */
import fetch from '../utils/request';
export function getNowPlayingList() {
	return fetch({
		url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=2874356',
		method: 'get',
		headers:{
			'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.0","e":"1650286360180006374342657","bc":"440300"}',
			'X-Host': 'mall.film-ticket.film.list'
		}
	});
}

export function getComingSoonList() {
	return fetch({
		url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=7449014',
		method: 'get',
		headers:{
			'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1650286360180006374342657","bc":"440300"}',
			'X-Host': 'mall.film-ticket.film.list'
		}
	});
}

export function fetchFilmDetail(id,key){
	return fetch({
		url:`https://m.maizuo.com/gateway?filmId=${id}&k=${key}`,
		method:'get',
		headers:{
			'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1653575582389381735055361","bc":"440300"}',
			'X-Host': 'mall.film-ticket.film.info'
		}
	})
}

export function fetchCountAPI(mount=1) {
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve({
				data:{
					value:mount
				}
			})
		},1000)
	})
}