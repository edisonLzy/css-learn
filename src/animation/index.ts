import { log } from 'console';
import {createItem} from '../utils';
import './index.scss';
const h = require('./index.html');
// ex实现icon居中
createItem({title:'animation & transition',article:h});

// 注册 动画 事件
(function(){
	let count = 0;
	const clock = document.querySelector('.clock');
	const handler = e=>{
		console.log('动画执行' + count++);
		if(count === 5){
			console.log(e);
			console.log('动画结束' + count);
			clock.removeEventListener('animationiteration',handler);
		}
	};
	clock.addEventListener('animationiteration',handler);
})();