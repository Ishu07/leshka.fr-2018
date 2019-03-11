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

function bgColorFuncpopUp(project) {
          var bgColor = $(project).attr('bgColor')
          var letterColor = $(project).attr('letterColor')
          var txtColor = $(project).attr('txtColor')
          $('#popUp').css( "background-color", bgColor )
          $('#popUp .heading').css( "color", letterColor )
          $('#popUp .mouse-circle').css( "background-color", letterColor )
          $("#closeBtnPath").attr("fill",txtColor);

          $("#popUp .rollmeover").css("color",txtColor)
          $("#popUp .rollmeover").css("background-color",bgColor)
          $("#popUp .youtube .play-button .playTriangle").css("border-color","transparent transparent transparent" + txtColor)
          $("#popUp .youtube .play-button").css("background-color",bgColor)
          $('#popUp p, #popUp h4, #popUp h2, #popUp a').css( "color", txtColor )
          $("#popUp .button").css("color",bgColor)
          $("#popUp .button").css("background-color",txtColor)

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
