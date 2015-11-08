/* js file */

(function( window, undefined ){

	
	$( document ).ready(function(){

		var bar         = $('#bar' ),
		    $window     = $( window ),
		    $doc        = $( document ),
		    docHeight   = $doc.height(),
		    baseX       = $window.height() / docHeight * 100,
		    topOfOthDiv = $( "#othdiv" ).offset().top;

		bar.css( 'background', '-webkit-linear-gradient(left, #002041 '+ baseX +'%, #b2b2b2 '+ baseX +'%)');
	    bar.hide(); //hide your div initially

	    $window.on( "resize", function( e ){

	    	docHeight = $doc.height();
		    baseX     = $window.height() / docHeight * 100;
	    } );

	    $window.on( "scroll", function( e ){

		    var x = $window.scrollTop() / docHeight * 100 + baseX;
		    bar.css('background', '-webkit-linear-gradient(left, #002041 '+ x +'%, #b2b2b2 '+ x +'%)');
	        
	        if( $window.scrollTop() > topOfOthDiv ){ //scrolled past the other div?
	            bar.show(300); //reached the desired point -- show div
	        }
	        else{
	        	bar.hide(300); //reached the desired point -- show div
	        }
	    });
	});
})( window, undefined );