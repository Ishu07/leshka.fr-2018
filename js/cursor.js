function initCursor(){
var count = 1;

setInterval(changecursor, 120);

    function changecursor(elmt,event){
      if (count==9){
      count=1
      }
      if (count==1){
      // $("a").css( "cursor", "pointer" )
      $("a").css( "cursor", "-webkit-image-set(url(images/cursorHand1x.png) 1x,url(images/cursorHand1.png) 2x) 0 0,default" )
      }
      else if (count==2){
      // $("a").css( "cursor", "cell" )
      $("a").css( "cursor", "-webkit-image-set(url(images/cursorHand1x.png) 1x,url(images/cursorHand2.png) 2x) 0 0,default" )
      }
      else if (count==3){
      // $("a").css( "cursor", "all-scroll" )
      $("a").css( "cursor", "-webkit-image-set(url(images/cursorHand1x.png) 1x,url(images/cursorHand3.png) 2x) 0 0,default" )
      }
      else if (count==4){
      // $("a").css( "cursor", "crosshair" )
      $("a").css( "cursor", "-webkit-image-set(url(images/cursorHand1x.png) 1x,url(images/cursorHand4.png) 2x) 0 0,default" )
      }
      else if (count==5){
      // $("a").css( "cursor", "help" )
      $("a").css( "cursor", "-webkit-image-set(url(images/cursorHand1x.png) 1x,url(images/cursorHand5.png) 2x) 0 0,default" )
      }
      else if (count==6){
      // $("a").css( "cursor", "ne-resize" )
      $("a").css( "cursor", "-webkit-image-set(url(images/cursorHand1x.png) 1x,url(images/cursorHand6.png) 2x) 0 0,default" )
      }
      else if (count==7){
      // $("a").css( "cursor", "no-drop" )
      $("a").css( "cursor", "-webkit-image-set(url(images/cursorHand1x.png) 1x,url(images/cursorHand7.png) 2x) 0 0,default" )
      }
      else if (count==8){
      // $("a").css( "cursor", "progress" )
      $("a").css( "cursor", "-webkit-image-set(url(images/cursorHand1x.png) 1x,url(images/cursorHand8.png) 2x) 0 0,default" )
      }
      count++

    }

}


$( document ).ready(function() {
    initCursor();
});
