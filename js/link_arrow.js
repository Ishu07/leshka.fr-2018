function initLinkArrow(){
var count_arrow = 1;
var j
// $('.youtube .play-button').toggleClass('color');
for (var i = 0; i < $(".button").length; i++) {
  j = Math.floor((Math.random() * 3) + 1);
  // console.log(j);
  if (j==1) {
    $(".button:eq("+i+")").css("color","#FE00D6")
    $(".button:eq("+i+")").css("background-color","#14CBC0")
  }
  else if (j==2) {
    $(".button:eq("+i+")").css("color","#FED419")
    $(".button:eq("+i+")").css("background-color","#B11298")
  }
  else if (j==3) {
    $(".button:eq("+i+")").css("color","#1BFEC7")
    $(".button:eq("+i+")").css("background-color","#FE531B")
  }
}

setInterval(link_arrow, 120);
    function link_arrow(elmt,event){
      if (count_arrow==4){
      count_arrow=1
      }
      if (count_arrow==1){
        $(".arrow").html("➫")
        $(".that .button").css("color","#FE00D6")
        $(".that .button").css("background-color","#14CBC0")
        $(".this .button:hover").css("color","#FE00D6")
        $(".this .button:hover").css("background-color","#14CBC0")
        $(".that .rollmeover").css("color","#FE00D6")
        $(".that .rollmeover").css("background-color","#14CBC0")
        $(".that .youtube .play-button .playTriangle").css("border-color","transparent transparent transparent #FE00D6")
        $(".that .youtube .play-button").css("background-color","#14CBC0")
        $(".this .youtube:hover .play-button .playTriangle").css("border-color","transparent transparent transparent #FE00D6")
        $(".this .youtube:hover .play-button").css("background-color","#14CBC0")
      }
      else if (count_arrow==2){
        $(".arrow").html("➩")
        $(".that .button").css("color","#FED419")
        $(".that .button").css("background-color","#B11298")
        $(".this .button:hover").css("color","#FED419")
        $(".this .button:hover").css("background-color","#B11298")
        $(".that .rollmeover").css("color","#FED419")
        $(".that .rollmeover").css("background-color","#B11298")
        $(".that .youtube .play-button .playTriangle").css("border-color","transparent transparent transparent #FED419")
        $(".that .youtube .play-button").css("background-color","#B11298")
        $(".this .youtube:hover .play-button .playTriangle").css("border-color","transparent transparent transparent #FED419")
        $(".this .youtube:hover .play-button").css("background-color","#B11298")
      }
      else if (count_arrow==3){
        $(".arrow").html("➬")
        $(".that .button").css("color","#1BFEC7")
        $(".that .button").css("background-color","#FE531B")
        $(".this .button:hover").css("color","#1BFEC7")
        $(".this .button:hover").css("background-color","#FE531B")
        $(".that .rollmeover").css("color","#1BFEC7")
        $(".that .rollmeover").css("background-color","#FE531B")
        $(".that .youtube .play-button .playTriangle").css("border-color","transparent transparent transparent #1BFEC7")
        $(".that .youtube .play-button").css("background-color","#FE531B")
        $(".this .youtube:hover .play-button .playTriangle").css("border-color","transparent transparent transparent #1BFEC7")
        $(".this .youtube:hover .play-button").css("background-color","#FE531B")
      }
      count_arrow++;
    }
}

$( document ).ready(function() {
    initLinkArrow();
});
