/* js file */

(function( window, undefined ){

	
	$( document ).ready(function(){

		var bar         = $('#bar' ),
		    $window     = $( window ),
		    $doc        = $( document ),
		    docHeight   = $doc.height(),
		    baseX       = $window.height() / docHeight * 100,
		    topOfOthDiv = $( "#othdiv" ).offset().top,
		    nav			= $( "#nav" );

		bar.css( 'background', '-webkit-linear-gradient(left, #f7941d '+ baseX +'%, #b2b2b2 '+ baseX +'%)');
	    bar.hide(); //hide your div initially
	    nav.hide();

	    $window.on( "resize", function( e ){

	    	docHeight = $doc.height();
		    baseX     = $window.height() / docHeight * 100;
	    } );

	    $window.on( "scroll", function( e ){

		    var x = $window.scrollTop() / docHeight * 100 + baseX;
		    bar.css('background', '-webkit-linear-gradient(left, #f7941d '+ x +'%, #b2b2b2 '+ x +'%)');
	        
	        if( $window.scrollTop() > topOfOthDiv ){ //scrolled past the other div?
	            bar.show(300); //reached the desired point -- show div
	            nav.show(300);
	        }
	        else{
	        	bar.hide(300); //reached the desired point -- show div
	        	nav.hide(300);
	        }
	    });

		$(document).ready(function(){
			$('a[href^="#"]').on('click',function (e) {
			    e.preventDefault();

			    var target = this.hash;
			    var $target = $(target);

			    $('html, body').stop().animate({
			        'scrollTop': $target.offset().top - 90
			    }, 900, 'swing', function () {
			        window.location.hash = target;
			    });
			});
		});

	});


})( window, undefined );