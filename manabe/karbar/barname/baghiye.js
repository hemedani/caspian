$(document).ready(function () {
	$('#AmirSnapper').scroll(function () {
		var $win = $('#AmirSnapper');
		$('#header').css('top', $win.scrollTop());

		if ($('#AmirSnapper').scrollTop() > 180) {
			$('#header').addClass('sticky');
			$('#scrollToTop').fadeIn();
		} else {
			$('#header').removeClass('sticky');
			$('#scrollToTop').fadeOut();
		}
	});

	$('#scrollToTop').click(function () {
		$('#AmirSnapper').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});
