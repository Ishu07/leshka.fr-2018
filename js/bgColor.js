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
        var bgColor = $(target).attr('bgColor')
        var letterColor = $(target).attr('letterColor')
        var txtColor = $(target).attr('txtColor')
        console.log(bgColor);
        // if undefined, do lalala
        $('.this').css( "background-color", bgColor )
        $('.this .heading').css( "color", letterColor )
        $('.this p, .this h4, .this h2').css( "color", txtColor )

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
        var bgColor = $(target).attr('bgColor')
        // if undefined, do lalala
        $('.that').css( "background-color", bgColor )
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
