$('#amir').scroll(function () {
	var $win = $('#amir');
	$('#btnFix').css('top', 32 + $win.scrollTop());

	$('div.scroller').scroll(function () {
		if ($('div.scroller').scrollTop() > 150) {
			$('header.sarbarg').addClass('sticky');
		} else {
			$('header.sarbarg').removeClass('sticky');
		}
	});
});
