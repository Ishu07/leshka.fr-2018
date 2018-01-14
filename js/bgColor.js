function initbgColor(){

function bgColor() {
  if (thisOrThat == "this"){
    // INTRO COLOR
    if (inView($('.intro'))){
      $('.this').css( "background-color", "#aaa" )
    }
    for (var i = 0; i <  $('.this .project').length; i++) {
      $('.this .project')[i]
      if (inView($('.this .project')[i])){
        var target = $('.this .project')[i]
        var color = $(target).attr('bgColor')
        // if undefined, do lalala
        $('.this').css( "background-color", color )
      }
    }
  }
  else if (thisOrThat == "that"){
    // INTRO COLOR
    if (inView($('.intro'))){
      $('.that').css( "background-color", "#ff00ff" )
    }
    for (var i = 0; i <  $('.that .project').length; i++) {
      $('.that .project')[i]
      if (inView($('.that .project')[i])){
        var target = $('.that .project')[i]
        var color = $(target).attr('bgColor')
        // if undefined, do lalala
        $('.that').css( "background-color", color )
      }
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
