/*
 * @Author: github.com/xiekecheng
 * @Date: 2022-05-15 17:23:46
 * @LastEditTime: 2022-05-15 20:48:11
 * @FilePath: /web-cinema/src/router/index.jsx
 * @Description: 路由
 *
 */
import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Cinema from '../views/cinema';
import Film from '../views/film';
import NowPlaying from '../views/film/NowPlaying';
import ComingSoon from '../views/film/ComingSoon';
import Center from '../views/center';
import Info from '../views/info';
export default function Router() {
	return (
		<Routes>
			<Route path='/' element={<Redirect to='/film/nowPlaying' />}></Route>
			<Route path='/film' element={<Redirect to='/film/nowPlaying' />}></Route>
			<Route path='/film' element={<Film />}>
				<Route path='nowPlaying' element={<NowPlaying />}></Route>
				<Route path='comingSoon' element={<ComingSoon />}></Route>
			</Route>
			<Route path='/cinema' element={<Cinema />}></Route>
			<Route path='/info' element={<Info />}></Route>
			<Route path='/center' element={<Center />}></Route>

			<Route
				path='*'
				element={
					<main>
						<p>当前不匹配任何路由</p>
					</main>
				}
			></Route>
		</Routes>
	);
}

// 重写重定向组件
function Redirect(props) {
	const navigate = useNavigate();
	useEffect(() => {
		navigate(props.to, { replace: true });
	});
	return null;
}
