/*
 * @Author: github.com/xiekecheng
 * @Date: 2022-05-15 17:12:48
 * @LastEditTime: 2022-05-15 17:30:21
 * @FilePath: /web-cinema/src/index.js
 * @Description:
 *
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
