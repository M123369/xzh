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
	var s=0;
	for(var i=0;i<astronomyimg.length;i++){
		astronomyimg[i].style.width=www*0.19+'px';
		astronomyimg[i].style.height=www*0.19+'px';
		astronomyimg[i].style.marginLeft=i*www*0.2+'px';
		if(i%5==0){
			s++;
			astronomyimg[i].marginTop=s*www*0.2+'px';
			alert(astronomyimg[i].marginTop);
			astronomyimg[i].style.marginLeft=i*www*0.2+'px';
		}
	}
	var astronomyname=document.getElementsByClassName('astronomyname');
	for(var j=0;j<astronomyname.length;j++){
		astronomyname[j].style.width=www*0.19+'px';
		astronomyname[j].style.height=www*0.19+'px';
		astronomyname[j].style.lineHeight=www*0.19+'px';
		astronomyname[j].onmouseover=function(a){
			return function(){
				astronomyname[a].style.opacity=0.4;
			};
		}(j);
		astronomyname[j].onmouseout=function(x){
			return function(){
				astronomyname[x].style.opacity=0;
			};
		}(j);
		
			
	}
}
