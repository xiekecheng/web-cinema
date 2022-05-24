/*
 * @Author: github.com/xiekecheng
 * @Date: 2022-05-15 17:12:48
 * @LastEditTime: 2022-05-15 17:32:35
 * @FilePath: /web-cinema/src/App.jsx
 * @Description:
 *
 */
import './App.css';
import MRouter from './router';
import TabBar from './views/tabbar';
import { BrowserRouter } from 'react-router-dom';
function App() {
	return (
		<BrowserRouter>
			<MRouter />
			<TabBar />
		</BrowserRouter>
	);
}

export default App;
