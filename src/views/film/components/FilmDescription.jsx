import React from 'react';
import style from './css/FilmDescription.module.scss';
export default function FilmDescription(props) {
	const { data, isShowType } = props;
	return (
		<>
			<div>{data.name}</div>
			{isShowType && <div className={style.label}>{data.category}</div>}
			<div className={style.label}>观众评分:{data.grade}</div>
			<div className={style.label}>
				<span>主演:</span>
				{data.actors?.map((item) => (
					<span key={item.name}>{item.name}</span>
				))}
			</div>
			<div className={style.label}>
				<span>
					{data.nation}|{data.runtime}分钟
				</span>
			</div>
			{isShowType && (
				<div style={{ marginTop: '12px', fontSize: '13px', color: '#797d82' }}>
					{data.synopsis}
				</div>
			)}
		</>
	);
}
