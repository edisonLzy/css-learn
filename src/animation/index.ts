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


// web animations Api
(function(){
	const target:HTMLElement = document.querySelector('.animate');
	target.addEventListener('click',e=>{
		const player = target.animate([
			{transform: 'translate(0)'},
			{transform: 'translate(100px, 100px)'}
		],{
			duration:500,
			fill:'forwards'
		});
	});
})();


// 视图间的动画切换
(function(){
	function toggle(){
		container.classList.toggle('view-change');
	}

	const toDetailBtn = document.querySelector('#toDetail'),
		toListBtn = document.querySelector('#toList'),
		showModel=document.querySelector('#showModel'),
		view = document.querySelector('.view'),
		container = document.querySelector('.toggle');
	showModel.addEventListener('click',function(){
		view.classList.toggle('visible');
	});
	toListBtn.addEventListener('click',toggle);
	toDetailBtn.addEventListener('click',toggle);
})();

