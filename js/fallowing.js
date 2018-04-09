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
   $mouseY = e.pageY- $(window).scrollTop();;
   });
   var $loop = setInterval(function(){
   // $xp += (($mouseX - $xp)/8);
   // $yp += (($mouseY - $yp)/8);
   // $xp2 += (($mouseX - $xp2)/13);
   // $yp2 += (($mouseY - $yp2)/13);
   // $xp3 += (($mouseX - $xp3)/18);
   // $yp3 += (($mouseY - $yp3)/18);
   // $xp4 += (($mouseX - $xp4)/23);
   // $yp4 += (($mouseY - $yp4)/23);
   // $xp5 += (($mouseX - $xp5)/28);
   // $yp5 += (($mouseY - $yp5)/28);
   // $xp6 += (($mouseX - $xp6)/33);
   // $yp6 += (($mouseY - $yp6)/33);
   // $xp7 += (($mouseX - $xp7)/38);
   // $yp7 += (($mouseY - $yp7)/38);
   // $xp8 += (($mouseX - $xp8)/43);
   // $yp8 += (($mouseY - $yp8)/43);
   // $xp9 += (($mouseX - $xp9)/48);
   // $yp9 += (($mouseY - $yp9)/48);
   // $xp9 += (($mouseX - $xp9)/53);
   // $yp9 += (($mouseY - $yp9)/53);
   $xp += (($mouseX - $xp)/53);
   $yp += (($mouseY - $yp)/53);
   $(".mouse-circle-1").css({left:$xp +'px', top:$yp +'px'});
   // $(".mouse-circle-2").css({left:$xp2 +'px', top:$yp2 +'px'});
   // $(".mouse-circle-3").css({left:$xp3 +'px', top:$yp3 +'px'});
   // $(".mouse-circle-4").css({left:$xp4 +'px', top:$yp4 +'px'});
   // $(".mouse-circle-5").css({left:$xp5 +'px', top:$yp5 +'px'});
   // $(".mouse-circle-6").css({left:$xp6 +'px', top:$yp6 +'px'});
   // $(".mouse-circle-7").css({left:$xp7 +'px', top:$yp7 +'px'});
   // $(".mouse-circle-8").css({left:$xp8 +'px', top:$yp8 +'px'});
   // $(".mouse-circle-9").css({left:$xp9 +'px', top:$yp9 +'px'});
   // $(".mouse-circle-10").css({left:$xp10 +'px', top:$yp10 +'px'});
   $(".cursor-sm").css({left:$xp +'px', top:$yp +'px'});
   // $(".cursor-sm-2").css({left:$xp2 +'px', top:$yp2 +'px'});
   // $(".cursor-sm-3").css({left:$xp3 +'px', top:$yp3 +'px'});
   }, 10);

   // CHANGE SIZE ON ROLL OVER
   $( ".this a, .this .youtube" ).mouseover(function() {
       $(".mouse-circle").css({width:'200vw', height:'200vw'});
       // circleOver = true;
       // $(".mouse-circle").css("transition","background 0s, width 0.5s, height 0.5s")
   });
   $( ".that a, .that .youtube" ).mouseover(function() {
       $(".mouse-circle").css({width:'200vw', height:'200vw'});
       circleOver = true;
       $(".mouse-circle").css("transition","background 0s, width 0.5s, height 0.5s")
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
