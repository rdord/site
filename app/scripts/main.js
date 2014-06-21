'use strict';

function enableArrowKeys() {
	$(document.body).keydown(function(e) {
			var pressedKey = e.keyCode || e.which,
					upKey = 38,
					downKey = 40;

			if (pressedKey === upKey){
				$('.menu__item-wrap:first-child').focus();
			}
			else if(pressedKey === downKey){
				$('.menu__item-wrap:last-child').focus();
			}
		});
}

function setDefaultMenuDisplayState(bodyState) {
	var menu = $('.menu'),
			body = $(document.body);

	if(bodyState === 'clickable' && menu.hasClass('displayMenu')) {
		menu.removeClass('displayMenu');
		body.removeClass('defaultCursor');
	}
	else if(bodyState === 'unclickable' ){
		menu.addClass('displayMenu');
		enableArrowKeys();
	}
}

function markWindowSize(windowWidth){
	var bodyState = windowWidth > 942? 'clickable' : 'unclickable';
	$(document.body).removeClass('clickable unclickable').addClass(bodyState);
	
	return bodyState;
}

function debounceWindowResize(fn, wait) {
	window.onresize = function() {
		clearTimeout(wait);
		wait = setTimeout(fn, 500);
	};
	return fn;
}

function mouseClickMenu() {
		$('.clickable').click(function(e) {
			var cursorPosition = {left: e.pageX, top: e.pageY};
			$('.menu').css(cursorPosition).toggleClass('displayMenu');

			$(this).toggleClass('defaultCursor');
		});
		$('.unclickable').off('click');
	}

function preloadImage(imageLocation) {
	var img = new Image();
	img.src = imageLocation;
}

preloadImage('../images/menu3.png');

debounceWindowResize(function() {
	var windowWidth = $(window).width(),
			bodyState = markWindowSize(windowWidth);

	setDefaultMenuDisplayState(bodyState);
	mouseClickMenu();
})();





