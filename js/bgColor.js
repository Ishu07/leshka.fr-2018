function initbgColor(){

function bgColor() {
  for (var i = 0; i <  $('.project').length; i++) {
    $('.project')[i]
    if (inView($('.project')[i])){
    var target = $('.project')[i]
    var color = $(target).attr('bgColor')
      // if undefined, do lalala
      $('.this').css( "background-color", color )
    }
  }
}
// background-color: ababff
$(window).scroll(function() {
    bgColor();
});

}

$( document ).ready(function() {
    initbgColor();
});
