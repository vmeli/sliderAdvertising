var sliderAdvertising = function () {

	var slider = $('#slider');
	var next = $('.btn-next');
	var preview = $('.btn-prev');

	// mover ultima imagen al primer lugar
	$('#slider li:last').insertBefore('#slider li:first');

	// mostrar la primera imagen con un margen de -100%
	slider.css('margin-left','-'+100+'%');

	function moveRight() {
		slider.animate({marginLeft:'-'+200+'%'}, 700 ,function(){
			$('#slider li:first').insertAfter('#slider li:last');
			slider.css('margin-left','-'+100+'%');
		});
	}

	function moveLeft() {
		slider.animate({marginLeft: 0}, 700 ,function(){
			$('#slider li:last').insertBefore('#slider li:first');
			slider.css('margin-left','-'+100+'%');
		});
	}

	next.on('click',moveRight);

	preview.on('click',moveLeft);

	function autoplay() {
		interval = setInterval (moveRight,5000);
	}

	// autoplay();

};

sliderAdvertising();
