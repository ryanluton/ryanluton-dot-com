'use strict';

console.log('\'Allo \'Allo!');


$(document).ready(function() {
  
  //css only modal using jquery to apply "click" of hidden launch points
  $('.modal-launch').on('click', function(e) {
    e.preventDefault();
    var index = $('.modal-launch').index(this);
    //alert('modal-'+index);
    $('#modal-'+index).trigger('click'); 
  });
  
  //jquery sticky implementation for cta "header"
  $('#sticky-info').sticky({topSpacing:0});
  
  //ga tag to track resume downloads
  $('#cv-download').on('click', function() {
  ga('send', 'event', 'button', 'click', 'cv-download');
});

});

