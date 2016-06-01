$(document).ready(function(){
 
  $(window).scroll(function(){
    if( $(this).scrollTop() > 0 ){
      $('#navbar').addClass('navbar2');
    } else {
      $('#navbar').removeClass('navbar2');
    }
  });
 
});