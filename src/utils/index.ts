export function createItem({title,article}){
	const c = getContainer('.content');
    
	const h2 = document.createElement('h2');
	h2.setAttribute('class','title border');
	h2.setAttribute('id',title);
	h2.innerHTML =  title;
	const art = document.createElement('article');
	art.setAttribute('class','article');
	art.innerHTML = article;
	const div = document.createElement('div');
	div.setAttribute('class','item');
	div.appendChild(h2);
	div.appendChild(art);


	createNav(title);
	c.appendChild(div);
}
function createNav(title){
	const n  = getContainer('.nav');
	const a = document.createElement('a');
	a.href =`#${title}`;
	a.innerText = title;
	n.appendChild(a);
   
}
function getContainer(str){
	const c = document.querySelector(str);
	return c;
}