/*
 * @Author: github.com/xiekecheng
 * @Date: 2022-05-15 17:26:58
 * @LastEditTime: 2022-05-15 20:44:36
 * @FilePath: /web-cinema/src/views/center/Center.jsx
 * @Description: 
 * 
 */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement, incrementByAmount,fetchCount } from '../../store/reducers/counterSlice'
export default function Center() {
	const count = useSelector(state=>state.counter.value)
	const dispatch = useDispatch()
	return (
		<div>
			<h1>Center</h1>
			<p>{count}</p>
			<button onClick={()=>dispatch(increment())}>自增1</button>
			<button onClick={()=>dispatch(incrementByAmount(3))}>自增3</button>
			<button onClick={()=>dispatch(decrement())}>自减1</button>
			<button onClick={()=>dispatch(fetchCount(30))}>设置为30</button>
		</div>
	)
}
