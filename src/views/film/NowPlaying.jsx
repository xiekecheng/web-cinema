/*
 * @Author: github.com/xiekecheng
 * @Date: 2022-05-15 20:45:27
 * @LastEditTime: 2022-05-15 21:51:49
 * @FilePath: /web-cinema/src/views/film/NowPlaying.jsx
 * @Description: 正在热映组件
 *
 */
import React, { useEffect, useState } from 'react';
import { getNowPlayingList } from '../../api';
import FilmBox from './components/FilmBox';
export default function NowPlaying() {
	const filmList = useFilmList();
	return (
		<div>
			{filmList.map((item, index) => (
				<FilmBox key={index} data={item}></FilmBox>
			))}
		</div>
	);
}

// 获取正在热映的电影列表
function useFilmList() {
	const [filmList, setFilmList] = useState([]);
	useEffect(() => {
		getNowPlayingList().then((res) => {
			setFilmList(res.data.films);
		});
	}, []);
	return filmList;
}
