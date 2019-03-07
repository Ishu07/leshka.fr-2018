var bgTargetNew
var bgTargetOld

function bgColorFunc() {
          var bgColor = $(currentProject).attr('bgColor')
          var letterColor = $(currentProject).attr('letterColor')
          var txtColor = $(currentProject).attr('txtColor')
          $('body').css( "background-color", letterColor )
          $('.heading').css( "color", letterColor )
          $('.mouse-circle').css( "background-color", bgColor )

          $(".rollmeover").css("color",txtColor)
          $(".rollmeover").css("background-color",bgColor)
          $(".youtube .play-button .playTriangle").css("border-color","transparent transparent transparent" + txtColor)
          $(".youtube .play-button").css("background-color",bgColor)
          $('p, h4, h2, a').css( "color", txtColor )
          $(".button").css("color",bgColor)
          $(".button").css("background-color",txtColor)

}

function bgColorFuncDirectURL(project) {
          var bgColor = $(project).attr('bgColor')
          var letterColor = $(project).attr('letterColor')
          var txtColor = $(project).attr('txtColor')
          $('#directURL').css( "background-color", bgColor )
          $('#directURL .heading').css( "color", letterColor )
          $('#directURL .mouse-circle').css( "background-color", letterColor )
          $("#closeBtnPath").attr("fill",txtColor);

          $("#directURL .rollmeover").css("color",txtColor)
          $("#directURL .rollmeover").css("background-color",bgColor)
          $("#directURL .youtube .play-button .playTriangle").css("border-color","transparent transparent transparent" + txtColor)
          $("#directURL .youtube .play-button").css("background-color",bgColor)
          $('#directURL p, #directURL h4, #directURL h2, #directURL a').css( "color", txtColor )
          $("#directURL .button").css("color",bgColor)
          $("#directURL .button").css("background-color",txtColor)

}

function initBgColor(){
  $('a, .youtube').mouseout(function() {
    targetProject = currentProject;
    bgColorFunc();
  });
}

$( document ).ready(function() {
    initBgColor();
});
