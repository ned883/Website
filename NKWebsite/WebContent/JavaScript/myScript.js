/**
Many thanks to w3schools.com & https://www.digitalocean.com/community/tutorials/an-introduction-to-jquery for teaching me a bit of JS & jQuery
and thanks to this JSFiddle http://jsfiddle.net/ryXFt/3/ for helping me figure out what was wrong with my code
 **/
$(document).ready(function() {
	$(".yesbtn").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".spacingbeforeheader").offset().top},
	        'slow');
	});
});

$(document).ready(function() {
	$(".scrolldown").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".spacingbeforeheader").offset().top},
	        'slow');
	});
});