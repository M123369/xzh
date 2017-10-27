window.onload=function(){
	var www=document.body.clientWidth;
	var e=www*0.99+'px';
	var outside=document.getElementById('outside');
	outside.style.width=www+'px';
	var logo=document.getElementById('logo');
	logo.style.width=e;
	logo.style.marginLeft=www*0.005+'px';
	var imglogo=document.getElementById('imglogo');
	imglogo.style.width=e;
	var menu=document.getElementById('menu-list');
	menu.style.width=e;
	menu.style.marginLeft=www*0.005+'px';
	var contain=document.getElementById('contain');
	contain.style.width=e;
	contain.style.marginLeft=www*0.005+'px';
	var astronomyimg=document.getElementsByClassName('astronomyimg');
	for(var i=0;i<astronomyimg.length;i++){
		astronomyimg[i].style.width=www*0.19+'px';
		astronomyimg[i].style.height=www*0.19+'px';
	}
}
