'use strict';

/* global ga */

console.log('\'Allo \'Allo!');




$(document).ready(function() {
  
  //css only modal using jquery to apply "click" of hidden launch points
  $('body').on('click', '.modal-launch', function(e) {
    e.preventDefault();
    var index = $('.modal-launch').index(this);
    //alert('modal-'+index);
    $('#modal-'+index).trigger('click');
    ga('send', 'event', 'button', 'click', '#modal-'+index);
  });
  
  //jquery sticky implementation for cta "header"
  $('#sticky-info').sticky({topSpacing:0});
  
  //ga tag to track resume downloads
  $('#cv-download').on('click', function() {
    ga('send', 'event', 'button', 'click', 'cv-download');
  });
  
  
/* single page scrolling */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 100
          }, 1000);
          return false;
        }
      }
    });
});
  

});


$(window).load(function(){
  setTimeout(function() {
    $('.preloader').addClass('loader-out'); //animate.sass class
    setTimeout(function() {
      $('.preloader').hide(); //hide from dom fix for visibility 
    }, 1200);
  }, 4000);
});





//modernizr features n such
/*
if(!Modernizr.csstransitions) { // Test if CSS transitions are supported
  $(function() {
    $('#js').hover(function(){
      $(this).animate({width:'50px',height:'50px'},{queue:false,duration:500});
    }, function(){
      $(this).animate({width:'100px',height:'100px'},{queue:false,duration:500});
    });
  });
}
*/
