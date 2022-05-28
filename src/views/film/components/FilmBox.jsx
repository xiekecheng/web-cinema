import { useNavigate } from 'react-router-dom';
import style from './css/FilmBox.module.scss';
import FilmDescription from './FilmDescription';
export default function FilmBox(props) {
	const { data } = props;
	let navigate = useNavigate()
	// 跳转至详情页
	const goDetail = ()=>{
		navigate(`/detail/${data.filmId}`)
	}
	return (
		<div
			style={{
				padding: '15px',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				borderTop: '1px dash #ccc',
			}}
		>
			<div className='img-wrap' onClick={()=>goDetail()}>
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
				<FilmDescription data={data}/>
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
