// jQuery v3.3.1 is supported
$('.box .one').click(function() {
	$(this).toggleClass('full');
	$('.two').toggleClass('hide');
	$('.three').toggleClass('hide');
	$('.four').toggleClass('hide');
})