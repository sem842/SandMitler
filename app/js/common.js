$(function() {

	$("#my-menu").mmenu({
		extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салон красоты Смитлер">'
		},
		offCanvas: {
			position: 'right'
		}

	});

	console.log($("#my-menu"));

	var api = $("#my-menu").data("mmenu");
	var hamburg = $(".hamburger");
	api.bind("open:start",function() {
		hamburg.addClass("is-active")		
	}).bind('close:finish',function() {
		hamburg.removeClass('is-active')		
	});



});