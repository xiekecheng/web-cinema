/*
 * @Author: github.com/xiekecheng
 * @Date: 2022-05-15 17:26:43
 * @LastEditTime: 2022-05-15 21:01:38
 * @FilePath: /web-cinema/src/views/film/index.jsx
 * @Description:
 *
 */
import React from 'react';
import { Outlet ,NavLink} from 'react-router-dom';

export default function Film() {
	return (
		<div>
			<div style={{display:'flex',justifyContent:'space-around',padding:'10px'}}>
				<div><NavLink to='nowPlaying'>正在热映</NavLink></div>
				<div><NavLink to='comingSoon'>即将上映</NavLink></div>
			</div>
			<Outlet/>
		</div>
	);
}
