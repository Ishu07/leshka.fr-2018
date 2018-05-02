function initbgColor(){

function bgColor() {
  if (thisOrThat == "this"){
    // INTRO COLOR
    // if (inView($('.intro'))){
    //   $('body').css( "background-color", "#ff6148" )
    //   $('.mouse-circle').css( "opacity", "0" )
    // }
    // else {
    //   $('.mouse-circle').css( "opacity", "1" )
    // }
    for (var i = 0; i <  $('.this .project').length; i++) {
      $('.this .project')[i]
      if (inView($('.this .project')[i])){
        var target = $('.this .project')[i]
        var bgColor = $(target).attr('bgColor')
        var letterColor = $(target).attr('letterColor')
        var txtColor = $(target).attr('txtColor')
        // $('.this').css( "background-color", bgColor )
        // $('.this .heading').css( "color", letterColor )
        // $('.mouse-circle').css( "background-color", bgColor )
        $('body').css( "background-color", letterColor )
        $('.this .heading').css( "color", letterColor )
        $('.mouse-circle').css( "background-color", bgColor )

        $(".this .rollmeover").css("color",txtColor)
        $(".this .rollmeover").css("background-color",bgColor)
        $(".this .youtube .play-button .playTriangle").css("border-color","transparent transparent transparent" + txtColor)
        $(".this .youtube .play-button").css("background-color",bgColor)
        $(".this .button").css("color",bgColor)
        $(".this .button").css("background-color",txtColor)
        // $('.this img').css( "box-shadow", "0px 40px 120px" + letterColor )
        // $('.this .youtube').css( "box-shadow", "0px 40px 120px" + letterColor )
        $('.this p, .this h4, .this h2').css( "color", txtColor )

      }
    }
  }
  else if (thisOrThat == "that"){
    // INTRO COLOR
    // if (inView($('.intro'))){
    //   $('body').css( "background-color", "#de0b1a" )
    //   $('.mouse-circle').css( "opacity", "0" )
    // }
    // else {
    //   $('.mouse-circle').css( "opacity", "1" )
    // }
    for (var i = 0; i <  $('.that .project').length; i++) {
      $('.that .project')[i]
      if (inView($('.that .project')[i])){
        var target = $('.that .project')[i]
        var bgColor = $(target).attr('bgColor')
        var letterColor = $(target).attr('letterColor')
        var txtColor = $(target).attr('txtColor')
        // if undefined, do lalala
        // $('.that').css( "background-color", bgColor )
        // $('.that .heading').css( "color", letterColor )
        $('.that p, .that h4, .that h2').css( "color", txtColor )

        $('body').css( "background-color", letterColor )
        $('.that .heading').css( "color", letterColor )
        $('.mouse-circle').css( "background-color", bgColor )
      }
    }
  }
}
// background-color: ababff
$(window).scroll(function() {
    bgColor();
});
$('a, .youtube').mouseout(function() {
    bgColor();
});

}

$( document ).ready(function() {
    initbgColor();
});
