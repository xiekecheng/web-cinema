import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShowTabbar } from '../../store/reducers/stateSlice';
import style from './index.module.scss';
import { fetchFilmDetail } from '../../api';
import { useParams } from 'react-router-dom';
import FilmDescription from '../film/components/FilmDescription';
import Actor from './components/Actor';
export default function Detail(props) {
	useShowTabbar();
	const params = useParams();
	const filmDetail = useFetchFilmDetail(params.filmId, 7587530);

	return (
		<>
			<div className={style.image}>
				<img className={style.image} src={filmDetail.poster} alt='' />
			</div>
			<div className={style.intro}>
				<FilmDescription data={filmDetail} isShowType={true} />
			</div>
			<div className={style.actors}>
				<Actor actors={filmDetail.actors} />
			</div>
			<div className={style.photos}>
				<h3>剧照</h3>
				<div>
					<ul
						style={{
							display: 'flex',
							flexDirection: 'row',
							width: '100%',
							overflow: 'auto',
						}}
					>
						{filmDetail.photos?.map((photo) => (
							<li>
								<img src={photo} alt='' style={{ height: '150px',width:'150px',marginRight:'10px' }} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

// 显示与隐藏tabbar
const useShowTabbar = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setShowTabbar(false));
		return () => {
			dispatch(setShowTabbar(true));
		};
	}, []);
};

const useFetchFilmDetail = (id, key) => {
	const [filmDetail, setFilmDetail] = useState({});
	useEffect(() => {
		fetchFilmDetail(id, key).then((res) => {
			setFilmDetail(res.data.film);
		});
	}, [id, key]);
	return filmDetail;
};
