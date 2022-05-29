import React from 'react';
import style from './css/Actor.module.scss';
export default function Actors(props) {
	const { actors } = props;
	return (
		<div style={{ padding: '10px' }}>
			<h3>演职人员</h3>
			<div className={style.actors} style={{ display: 'flex', 'overflowX': 'auto' }}>
				{actors?.map((actor) => (
					<ActorBox key={actor.name} actor={actor} />
				))}
			</div>
		</div>
	);
}

function ActorBox(props) {
	const { actor } = props;
	return (
		<>
			<ul
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around',
					marginRight: '10px',
					alignItems: 'center',
				}}
			>
				<li style={{ width: '85px', height: '85px', overflow: 'hidden' }}>
					<img
						style={{ width: '85px', height: '121px' }}
						src={actor.avatarAddress}
						alt={actor.name}
					/>
				</li>
				<li style={{ fontSize: '12px', marginTop: '12px' }}>{actor.name}</li>
				<li style={{ fontSize: '10px' }}>{actor.role}</li>
			</ul>
		</>
	);
}
