$(document).ready(function () {

	// $('#canvasmenu').click(function () {
	// 	if ($('section').hasClass('in-view')) {
	// 		$('section').removeClass('in-view');
	// 	} else {
	// 		$('section').addClass('in-view');
	// 	}
	// });

	$('#scrollToTop').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	$(window).scroll(function () {
		var win = $(window);
		// $('#header').css('position', 'fixed');
		// $('#header').css('top', $win.scrollTop());

		if (win.scrollTop() > 200) {
			$('#header').addClass('sticky');
			$('#scrollToTop').fadeIn();
		} else {
			$('#header').removeClass('sticky');
			$('#scrollToTop').fadeOut();
		}



	});

});
