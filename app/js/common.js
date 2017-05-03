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

	var api	= $("#my-menu").data("mmenu");
	var hamburg = $(".hamburger");
	api.bind("open:finish",function() {
		hamburg.addClass("is-active")		
	}).bind('close:finish',function() {
		hamburg.removeClass('is-active')		
	});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-left"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}//end responsive parametrs
	});//end owl carousel

	function carouselService() {
		$('.carousel-services-item').each(function() {
			var ths  = $(this),
					thsh = ths.find('.carousel-services-content').outerHeight();
					ths.find('.carousel-services-image').css('min-height', thsh);
		});//end each function
	}//end carouselService function
	carouselService();
});//end main function