/**
* Simply add a a div with id="content" next to a div with id="sidebar" and position:fixed
* you will see the sidebar scrolling alongside the content with the mouse scroll 
* and it will stop when the bottom of the sidebar corresponds the bottom of
* the content
*
* @author Daniele Spagnuolo
* @version 1.0.0
*/

var CONTENT_SELECTOR = '#content';
var SIDEBAR_SELECTOR = '#sidebar';
var content_height;
var sidebar_height;
var stop_height;
var anchored = false; //true if we have anchored the sidebar

//this is fixed depending on the content width
var top_fixed_pos;
var start_top;

$(document).ready(function() {
	content_height = $(CONTENT_SELECTOR).height();
	sidebar_height = $(SIDEBAR_SELECTOR).height();
	top_fixed_pos = $(CONTENT_SELECTOR).position().top + content_height - sidebar_height;
	start_top = $(SIDEBAR_SELECTOR).position().top;
	stop_height = content_height - sidebar_height;
});

$(window).scroll(function() {
	var pos = $('body').scrollTop();
	if (!anchored) {
   		if (pos>top_fixed_pos) {
  			$(SIDEBAR_SELECTOR).css( "position", "absolute" );
		    $(SIDEBAR_SELECTOR).css( "top", top_fixed_pos );
			anchored = true;
        }
    } else {
    	if (pos<top_fixed_pos) {
	    	$(SIDEBAR_SELECTOR).css( "position", "fixed" );
		    $(SIDEBAR_SELECTOR).css( "top", start_top );
		    anchored = false;
	    }
    }
});