import React from 'react';
import styles from './css/index.module.css';
import { NavLink } from 'react-router-dom';
export default function index() {
	const styleFn = (isActive) => {
		return isActive ? styles.active : styles.normal;
	};
	return (
		<>
			<ul className={styles.tabbar}>
				<li>
					<NavLink to='/film' className={({isActive}) => styleFn(isActive)}>
						电影
					</NavLink>
				</li>
				<li>
					<NavLink to='/cinema' className={({isActive}) => styleFn(isActive)}>
						影院
					</NavLink>
				</li>
				<li>
					<NavLink to='/info' className={({isActive}) => styleFn(isActive)}>
						资讯
					</NavLink>
				</li>
				<li>
					<NavLink to='/center' className={({isActive}) => styleFn(isActive)}>
						我的
					</NavLink>
				</li>
			</ul>
		</>
	);
}
