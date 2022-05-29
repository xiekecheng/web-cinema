/*
 * @Author: github.com/xiekecheng
 * @Date: 2022-05-15 20:45:36
 * @LastEditTime: 2022-05-15 21:56:29
 * @FilePath: /web-cinema/src/views/film/ComingSoon.jsx
 * @Description: 即将热映
 *
 */
import React, { useEffect, useState } from 'react';
import FilmBox from './components/FilmBox2';
import { getComingSoonList } from '../../api';
import { Skeleton } from 'antd-mobile';
export default function ComingSoon() {
	const filmList = useFilmList();
	return (
		<div>
			{filmList.map((item) => (
				<FilmBox data={item} key={item.filmId} />
			))}
			{!filmList.length && (
				<div>
					<Skeleton.Title animated />
					<Skeleton.Paragraph lineCount={10} animated />
				</div>
			)}
		</div>
	);
}

function useFilmList() {
	const [filmList, setFilmList] = useState([]);
	useEffect(() => {
		async function getData() {
			const res = await getComingSoonList();
			setFilmList(res.data.films);
		}
		getData();
	}, []);

	return filmList;
}
