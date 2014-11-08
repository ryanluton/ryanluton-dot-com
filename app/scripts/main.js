'use strict';

console.log('\'Allo \'Allo!');


$(document).ready(function() {
  
  $('.modal-launch').on('click', function(e) {
    e.preventDefault();
    var index = $('.modal-launch').index(this);
    //alert('modal-'+index);
    $('#modal-'+index).trigger('click'); 
  });

});