$('#amir').scroll(function () {
	var $win = $('#amir');
	$('.sarbarg').css('top', $win.scrollTop());

	if ($('#amir').scrollTop() > 200) {
		$('.sarbarg').addClass('sticky');
	} else {
		$('.sarbarg').removeClass('sticky');
	}
});
