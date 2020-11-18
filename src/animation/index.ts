import {createItem} from '../utils';
import './index.scss';
const h = require('./index.html');
// ex实现icon居中
createItem({title:'animation & transition',article:h});

// 注册 transitionend 事件

const square = document.querySelector('#square');

const handler  = e =>{
	e.target.innerHTML = 'done';
};
square.addEventListener('transitionend',handler);