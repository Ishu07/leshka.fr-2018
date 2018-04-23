function initbgFallowingCursor(){

  // fallowing circle
   var $mouseX = 0, $mouseY = 0;
   var $xp = 512, $yp =512;
   var $xp2 = 0, $yp2 =0;
   var $xp3 = 0, $yp3 =0;
   var $xp4 = 0, $yp4 =0;
   var $xp5 = 0, $yp5 =0;
   var $xp6 = 0, $yp6 =0;
   var $xp7 = 0, $yp7 =0;
   var $xp8 = 0, $yp8 =0;
   var $xp9 = 0, $yp9 =0;
   var $xp10 = 0, $yp10 =0;
   $(document).mousemove(function(e){
   $mouseX = e.pageX;
   // $mouseY = e.pageY- $(".vs-section").offset().top;
   // console.log($mouseY);
   $mouseY = e.pageY- $(window).scrollTop();
   });
   // $(window).scroll(function(event) {
   //   console.log("LOL");
   // }
   var $loop = setInterval(function(){
   $xp += (($mouseX - $xp)/53);
   $yp += (($mouseY - $yp)/53);
   $(".mouse-circle-1").css({left:$xp +'px', top:$yp +'px'});
   $(".cursor-sm").css({left:$xp +'px', top:$yp +'px'});
   }, 10);

   // CHANGE SIZE ON ROLL OVER
   $( ".this a, .this .youtube" ).mouseover(function() {
       $(".mouse-circle").css({width:'200vw', height:'200vw'});
       // circleOver = true;
       // $(".mouse-circle").css("transition","background 0s, width 0.5s, height 0.5s")
   });
   $( ".that a, .that .youtube" ).mouseover(function() {
       circleOver = true;
       $(".mouse-circle").css("transition","background 0s, width 0.5s, height 0.5s")
       $(".mouse-circle").css({width:'200vw', height:'200vw'});
   });

   // CHANGE SIZE ON ROLLOUT
   $( ".this a, .this .youtube" ).mouseout(function() {
       $(".mouse-circle").css({width:'108vw', height:'108vw'});
       // circleOver = false;
       // $(".mouse-circle").css("transition","background 0.5s, opacity 0.5s, width 0.5s, height 0.5s")
   });
   $( ".that a, .that .youtube" ).mouseout(function() {
       $(".mouse-circle").css({width:'110vw', height:'110vw'});
       circleOver = false;
       $(".mouse-circle").css("transition","background 0.5s, opacity 0.5s, width 0.5s, height 0.5s")
   });


}

$( document ).ready(function() {
    initbgFallowingCursor();
});
