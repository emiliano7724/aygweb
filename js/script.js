(function (window, document, $) {
	"use strict";
	
	$(window).on('load', function () {
		
	});
	
	/* On resize */
	$(window).on('resize', function () {
	});
	
	/* On scroll */
	$(window).on('scroll', function () {
		//Show or Hide back to top button
		if ($(window).scrollTop() >= 180) {
			$('#go-to-top').addClass('on');
		} else {
			$('#go-to-top').removeClass('on');
		}
	});
	
	$(document).ready(function($) {
		//popup content
		popupContent();
		
		//owl carousel
		owlCarousel();
		
		//fullscreen
		introHeight();
		
		//Progress Bars
		progressBar();
		
		//Google Map
		googleMap();
		
		//Toggle Menu
		toggleMenu();
		
		/* tooltip */
		$('[data-toggle="tooltip"]').tooltip();
		
		$('.show-features').on('click',function(){
            $('.box-features').slideToggle("slow");
        });
		
		//Menu mobile toggle
		$('.noo-main-canvas .fa-angle-down').on('click',function(){
            $(this).siblings('.sub-menu').slideToggle("slow");
			$(this).toggleClass("active");
        });
		
		//Blog Background
		$('.blog-item.style-3').each(function() {
			$(this).find('.blog-featured').css('background-image', 'url("' + $(this).find('.blog-featured').attr("data-src") + '")');
		});
		
		//Toggle Accordion
		$(document).on('show.bs.collapse hide.bs.collapse', '.panel-group', function(e) {
			var $target = $(e.target)
			if (e.type == 'show')
				$('.panel-heading').removeClass('active');
				$target.prev('.panel-heading').addClass('active');
			if (e.type == 'hide')
				$target.prev('.panel-heading').removeClass('active');
		});
		
		//scroll to top
		$('body').on('click', '#go-to-top', function() {
			$("html, body").animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
		//sticky menu
		if($(".header-sticky").length) {
			$(".header-sticky").headroom();
		}
	});

})(window, document, jQuery);


/*=================================================================
	check screen size
===================================================================*/
function popupContent(){
	/**
	* Popup
	*/
	$('[data-init="magnificPopup"]').each(function(index, el) {
		var $el = $(this);
	
	var magnificPopupDefault = {
			removalDelay: 500, //delay removal by X to allow out-animation
			callbacks: {
				beforeOpen: function() {
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
		}
	
	// Merge settings.
		var settings = $.extend(true, magnificPopupDefault, $el.data('options'));
	
	$el.magnificPopup(settings);
	});
	
	//Gallery
	if ($(".gallery-item").length > 0) {
		$('.gallery-item').magnificPopup({
			gallery: {
				enabled: true
			}
		});
	}
	
	if($(".quick-view").length > 0) {
		$('.quick-view').magnificPopup({
			type: 'ajax'
		});
	}
	
	$('.popup-youtube').magnificPopup({
		type: 'iframe',
	});
}

/*=================================================================
	google map
===================================================================*/
function googleMap() {
	if ($("#googleMap").length > 0) {
		$obj = $("#googleMap");
		var myCenter = new google.maps.LatLng($obj.data("lat"), $obj.data("lon"));
		var myMaker = new google.maps.LatLng($obj.data("lat"), $obj.data("lon"));
		function initialize() {
			var mapProp = {
				center: myCenter,
				zoom: 16,
				scrollwheel: false,
				mapTypeControlOptions: {
					mapTypeIds: [ google.maps.MapTypeId.ROADMAP, "map_style" ]
				}
			};
			var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
			var marker = new google.maps.Marker({
				position: myMaker,
				icon: $obj.data("icon")
			});
			marker.setMap(map);
		}
		google.maps.event.addDomListener(window, "load", initialize);
	}
	if ($("#googleMap2").length > 0) {
		$obj = $("#googleMap2");
		var myCenter = new google.maps.LatLng($obj.data("lat"), $obj.data("lon"));
		var myMaker = new google.maps.LatLng($obj.data("lat"), $obj.data("lon"));
		function initialize() {
			var mapProp = {
				center: myCenter,
				zoom: 16,
				scrollwheel: false,
				mapTypeControlOptions: {
					mapTypeIds: [ google.maps.MapTypeId.ROADMAP, "map_style" ]
				}
			};
			var map = new google.maps.Map(document.getElementById("googleMap2"), mapProp);
			var marker = new google.maps.Marker({
				position: myMaker,
				icon: $obj.data("icon")
			});
			marker.setMap(map);
		}
		google.maps.event.addDomListener(window, "load", initialize);
	}
}

/*=================================================================
	fullscreen
===================================================================*/
function introHeight() {
	var wh = $(window).height();
	$('.section-fullscreen').css({ height: wh });
	$('.fullheight').css({ height: wh });
}

/*=================================================================
	toggle menu
===================================================================*/
function toggleMenu() {
	$('.menu-header3').on('click',function(){
		$(this).toggleClass("open");
		$('.navbar').toggleClass("open");
	});
}

/*=================================================================
	progress bars
===================================================================*/
function progressBar() {
	$('.block-progressbar').each(function() {
		$(this).find('.progressbar').progressbar({ display_text: 'center' });
		$(this).find('.progressbar').css('background-color', $(this).attr('data-color'));
	});
}

/*=================================================================
	owl carousel slider function
===================================================================*/
function owlCarousel(){
	if ($(".agent-carousel").length > 0) {
		$(".agent-carousel").each(function(){
			var autoplay = ($(this).attr("data-auto-play") === "true") ? true : false;
			$(this).owlCarousel({
				items: $(this).attr("data-desktop"),
				loop: true,
				mouseDrag: true,
				navigation: true,
				dots: false,
				pagination: false,
				autoPlay: autoplay,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				smartSpeed: 1000,
				autoplayHoverPause: true,
				navigationText: ['<i class="prev-agent ion-ios-arrow-left"></i>', '<i class="next-agent ion-ios-arrow-right"></i>'],
				itemsDesktop: [1199, $(this).attr("data-desktop")],
				itemsDesktopSmall: [979, $(this).attr("data-laptop")],
				itemsTablet: [768, $(this).attr("data-tablet")],
				itemsMobile: [479, $(this).attr("data-mobile")]
			});
		});
	}
	if ($(".testimonial-carousel").length > 0) {
		$(".testimonial-carousel").each(function(){
			var autoplay = ($(this).attr("data-auto-play") === "true") ? true : false;
			$(this).owlCarousel({
				items: $(this).attr("data-desktop"),
				loop: true,
				mouseDrag: true,
				navigation: false,
				dots: false,
				pagination: true,
				autoPlay: autoplay,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				smartSpeed: 1000,
				autoplayHoverPause: true,
				itemsDesktop: [1199, $(this).attr("data-desktop")],
				itemsDesktopSmall: [979, $(this).attr("data-laptop")],
				itemsTablet: [768, $(this).attr("data-tablet")],
				itemsMobile: [479, $(this).attr("data-mobile")]
			});
		});
	}
	if ($(".partner-carousel").length > 0) {
		$(".partner-carousel").each(function(){
			var autoplay = ($(this).attr("data-auto-play") === "true") ? true : false;
			$(this).owlCarousel({
				items: $(this).attr("data-desktop"),
				loop: true,
				mouseDrag: true,
				navigation: true,
				dots: false,
				pagination: false,
				autoPlay: autoplay,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				smartSpeed: 1000,
				autoplayHoverPause: true,
				navigationText: ['<i class="prev-agent ion-ios-arrow-left"></i>', '<i class="next-agent ion-ios-arrow-right"></i>'],
				itemsDesktop: [1199, $(this).attr("data-desktop")],
				itemsDesktopSmall: [979, $(this).attr("data-laptop")],
				itemsTablet: [768, $(this).attr("data-tablet")],
				itemsMobile: [479, $(this).attr("data-mobile")]
			});
		});
	}
	if ($(".properties-carousel").length > 0) {
		$(".properties-carousel").each(function(){
			var autoplay = ($(this).attr("data-auto-play") === "true") ? true : false;
			$(this).owlCarousel({
				items: $(this).attr("data-desktop"),
				loop: true,
				mouseDrag: true,
				navigation: true,
				dots: false,
				pagination: false,
				autoPlay: autoplay,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				smartSpeed: 1000,
				autoplayHoverPause: true,
				navigationText: ['<i class="prev-agent ion-ios-arrow-left"></i>', '<i class="next-agent ion-ios-arrow-right"></i>'],
				itemsDesktop: [1199, $(this).attr("data-desktop")],
				itemsDesktopSmall: [979, $(this).attr("data-laptop")],
				itemsTablet: [768, $(this).attr("data-tablet")],
				itemsMobile: [479, $(this).attr("data-mobile")]
			});
		});
	}
	if ($(".properties-carousel-2").length > 0) {
		$(".properties-carousel-2").each(function(){
			var autoplay = ($(this).attr("data-auto-play") === "true") ? true : false;
			$(this).owlCarousel({
				items: $(this).attr("data-desktop"),
				loop: true,
				mouseDrag: true,
				navigation: false,
				dots: true,
				pagination: true,
				autoPlay: autoplay,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				smartSpeed: 1000,
				autoplayHoverPause: true,
				itemsDesktop: [1199, $(this).attr("data-desktop")],
				itemsDesktopSmall: [979, $(this).attr("data-laptop")],
				itemsTablet: [768, $(this).attr("data-tablet")],
				itemsMobile: [479, $(this).attr("data-mobile")]
			});
		});
	}
	if ($(".property-detail-carousel").length > 0) {
		$(".property-detail-carousel").each(function(){
			var autoplay = ($(this).attr("data-auto-play") === "true") ? true : false;
			$(this).owlCarousel({
				items: $(this).attr("data-desktop"),
				loop: true,
				mouseDrag: true,
				navigation: false,
				dots: true,
				pagination: true,
				autoPlay: autoplay,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				smartSpeed: 1000,
				autoplayHoverPause: true,
				afterInit: makePages,
				afterUpdate: makePages,
				itemsDesktop: [1199, $(this).attr("data-desktop")],
				itemsDesktopSmall: [979, $(this).attr("data-laptop")],
				itemsTablet: [768, $(this).attr("data-tablet")],
				itemsMobile: [479, $(this).attr("data-mobile")]
			});
		});
	}
	if ($(".blog-carousel").length > 0) {
		$(".blog-carousel").each(function(){
			var autoplay = ($(this).attr("data-auto-play") === "true") ? true : false;
			$(this).owlCarousel({
				items: $(this).attr("data-desktop"),
				loop: true,
				mouseDrag: true,
				navigation: true,
				dots: false,
				pagination: false,
				autoPlay: autoplay,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				smartSpeed: 1000,
				autoplayHoverPause: true,
				navigationText: ['<i class="prev-agent ion-ios-arrow-left"></i>', '<i class="next-agent ion-ios-arrow-right"></i>'],
				itemsDesktop: [1199, $(this).attr("data-desktop")],
				itemsDesktopSmall: [979, $(this).attr("data-laptop")],
				itemsTablet: [768, $(this).attr("data-tablet")],
				itemsMobile: [479, $(this).attr("data-mobile")]
			});
		});
	}
	if ($(".floor-plan-carousel").length > 0) {
		$(".floor-plan-carousel").each(function(){
			var autoplay = ($(this).attr("data-auto-play") === "true") ? true : false;
			$(this).owlCarousel({
				items: $(this).attr("data-desktop"),
				loop: true,
				mouseDrag: true,
				navigation: true,
				dots: false,
				pagination: false,
				autoPlay: autoplay,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				smartSpeed: 1000,
				autoplayHoverPause: true,
				navigationText: ['<i class="prev ion-ios-arrow-left"></i>', '<i class="next ion-ios-arrow-right"></i>'],
				itemsDesktop: [1199, $(this).attr("data-desktop")],
				itemsDesktopSmall: [979, $(this).attr("data-laptop")],
				itemsTablet: [768, $(this).attr("data-tablet")],
				itemsMobile: [479, $(this).attr("data-mobile")]
			});
		});
	}
	if ($(".shop-slider").length > 0) {
		$(".shop-slider").each(function(){
			var autoplay = ($(this).attr("data-auto-play") === "true") ? true : false;
			$(this).owlCarousel({
				items: 1,
				loop: true,
				mouseDrag: true,
				navigation: true,
				dots: false,
				pagination: false,
				autoPlay: autoplay,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				smartSpeed: 1000,
				autoplayHoverPause: true,
				navigationText: ['<i class="prev ion-ios-arrow-left"></i>', '<i class="next ion-ios-arrow-right"></i>'],
				itemsDesktop: [1199, $(this).attr("data-desktop")],
				itemsDesktopSmall: [979, $(this).attr("data-laptop")],
				itemsTablet: [768, $(this).attr("data-tablet")],
				itemsMobile: [479, $(this).attr("data-mobile")]
			});
		});
	}
}

function makePages() {
	$.each(this.owl.userItems, function(i) {
		$('.owl-controls .owl-page').eq(i)
			.css({
				'background': 'url(' + $(this).find('img').attr('src') + ')',
				'background-size': 'cover'
			})
	});
}