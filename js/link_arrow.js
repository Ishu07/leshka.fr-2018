function initLinkArrow(){
var count_arrow = 1;

setInterval(link_arrow, 120);
    function link_arrow(elmt,event){
      if (count_arrow==4){
      count_arrow=1
      }
      if (count_arrow==1){
        $(".arrow").html("➫")
      }
      else if (count_arrow==2){
        $(".arrow").html("➩")
      }
      else if (count_arrow==3){
        $(".arrow").html("➬")
      }
      count_arrow++;
    }
}

$( document ).ready(function() {
    initLinkArrow();
});
