var menu = document.getElementById('menu');
var altura = menu.offsetTop;

window.addEventListener("scroll",function(){
	if(window.pageYOffset > altura && document.body.clientWidth>650){
		menu.classList.add('fixed');
	}else{
		menu.classList.remove('fixed');
	}
})
