$(document).ready(function(){
	$('.menu a').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $( $.attr(this, "href") ).offset().top-50
		}, 500);
	});
});