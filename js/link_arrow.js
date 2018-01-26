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
        $(".button:hover").css("color","#FE00D6")
        $(".button:hover").css("background-color","#14CBC0")
        $(".youtube:hover .play-button .playTriangle").css("border-color","transparent transparent transparent #FE00D6")
        $(".youtube:hover .play-button").css("background-color","#14CBC0")
      }
      else if (count_arrow==2){
        $(".arrow").html("➩")
        $(".button:hover").css("color","#FED419")
        $(".button:hover").css("background-color","#B11298")
        $(".youtube:hover .play-button .playTriangle").css("border-color","transparent transparent transparent #FED419")
        $(".youtube:hover .play-button").css("background-color","#B11298")
      }
      else if (count_arrow==3){
        $(".arrow").html("➬")
        $(".button:hover").css("color","#1BFEC7")
        $(".button:hover").css("background-color","#FE531B")
        $(".youtube:hover .play-button .playTriangle").css("border-color","transparent transparent transparent #1BFEC7")
        $(".youtube:hover .play-button").css("background-color","#FE531B")
      }
      count_arrow++;
    }
}

$( document ).ready(function() {
    initLinkArrow();
});
