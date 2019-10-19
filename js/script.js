$(document).ready(function(){
	$('#enter').click(function(){
		$('.modal__background').css('display', 'block')
	});
	
	$('#enter-mob').click(function(){
		$('.modal__background').css('display', 'block')
		$('#helpmenu1').toggleClass('helpmenu__container__active')
	});
	
	$('.close').click(function(){
		$('.modal__background').css('display', 'none')
	});
	
	$('#helpclick').click(function(){
		$('#helpmenu1').toggleClass('helpmenu__container__active')
	});
	
	$('.mobmenu').click(function(){
		$('#helpmenu1').toggleClass('helpmenu__container__active')
	});
	
});

var arrows = document.getElementsByClassName('arrow');
var txt = document.getElementsByClassName('text__container');
var i;
var x;

for (i = 0; i < arrows.length; i++){
	arrows[i].addEventListener('click', function() {
		this.classList.toggle('arrow-reverse');
		this.nextElementSibling.classList.toggle('text__container__active');
	});
}