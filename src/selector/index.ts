import {createItem} from '../utils';
import './index.scss';
const h = require('./index.html')
// ex实现icon居中
createItem({title:'css3选择器',article:h})


const nav = document.querySelector('.navigator .nav-item');

nav.addEventListener('click',()=>{
    console.log('点击');
})