(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		jQuery(".humburger").click(function(){
			jQuery(".mobile-menu").toggleClass("slide")
		});

		jQuery(".mobile-menu .mobile-logo i").click(function() {
			jQuery(".mobile-menu").removeClass("slide");
		});

		(function() {
			$("#range1").slider({
			    range: "min",
			    max: 100,
			    value: 13,
			    slide: function(e, ui) {
			      $("#currentVal1").html(ui.value);
			    }
			});

		}).call(this);

		(function() {
			$("#range2").slider({
			    range: "min",
			    max: 100,
			    value: 12,
			    slide: function(e, ui) {
			      $("#currentVal2").html(ui.value);
			    }
			});

		}).call(this);


		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);