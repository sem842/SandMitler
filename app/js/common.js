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

	$('.carousel-services').on('initialized.owl.carousel', function(){
		setTimeout(function(){
			carouselService()
		}, 100);//end setTimeout	function

	});//end on function
	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		dots: false,
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

	$('.carousel-services-composition .h3').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});//end each function

	$('section .h2').each(function(){
		var ths = $(this);		
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});//end each function

	$('select').selectize();

	//Resize Window
	function onResize() {
		$('.carousel-services-content').equalHeights();
	}onResize();//end onResize function
	window.onresize = function() {onResize()};

});//end main function