//Инициализация слайдера на главной
$(document).ready(function() {
	$('.mediahead_main').carousel({
		slider: '.main_slider',
		slide: '.gellery_item',
		slideHed: '.gallery_item figcaption',
		nextSlide : '.next',
		prevSlide : '.prev',
		addPagination: true,
		addNav : false

	}).bind();

	//	Автокликер для воспроизведения картинок в слайдере
	setInterval(function(){
		$("a.next").click()
	}, 10000);

});