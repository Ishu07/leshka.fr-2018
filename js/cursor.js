function initCursor(){
var count = 1;

setInterval(changecursor, 70);

    function changecursor(elmt,event){
      if (count==12){
      count=1
      }
      if (count==1){
      $("a").css( "cursor", "pointer" )
      }
      else if (count==2){
      $("a").css( "cursor", "cell" )
      }
      else if (count==3){
      $("a").css( "cursor", "all-scroll" )
      }
      else if (count==4){
      $("a").css( "cursor", "crosshair" )
      }
      else if (count==5){
      $("a").css( "cursor", "help" )
      }
      else if (count==6){
      $("a").css( "cursor", "ne-resize" )
      }
      else if (count==7){
      $("a").css( "cursor", "no-drop" )
      }
      else if (count==8){
      $("a").css( "cursor", "progress" )
      }
      else if (count==9){
      $("a").css( "cursor", "wait" )
      }
      else if (count==10){
      $("a").css( "cursor", "zoom-in" )
      }
      else if (count==11){
      $("a").css( "cursor", "not-allowed" )
      }
      count++

    }

}


$( document ).ready(function() {
    initCursor();
});
