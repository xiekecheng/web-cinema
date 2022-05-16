/*
 * @Author: github.com/xiekecheng
 * @Date: 2022-05-15 21:12:16
 * @LastEditTime: 2022-05-15 21:45:47
 * @FilePath: /web-cinema/src/views/film/components/FilmBox.jsx
 * @Description: 正在热映组件
 *
 */
export default function FilmBox(props) {
	const { data } = props;
	return (
		<div
			style={{
				padding: '15px',
				display: 'flex',
				justifyContent: 'space-between',
				borderTop: '1px dash #ccc',
			}}
		>
			<div className='img-wrap'>
				<img
					src={data.poster}
					alt=''
					style={{
						width: '66px',
						height: '98px',
					}}
				/>
			</div>
			<div
				style={{
					flex: 1,
					paddingLeft: '10px',
				}}
			>
				<div>{data.name}</div>
				<div>观众评分:{data.grade}</div>
				<div>
					<span>主演:</span>
					{data.actors.map((item) => (
						<span>{item.name}</span>
					))}
				</div>
				<div>
					{data.nation}|{data.runtime}分钟
				</div>
			</div>
			<div>
				<span
					style={{
						border: '1px solid #ff5f16',
						padding: '5px',
						color: '#ff5f16',
						cursor: 'pointer',
					}}
				>
					购票
				</span>
			</div>
		</div>
	);
}