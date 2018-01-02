function initSeq(){
  $(".sequence").each(function( index ){

    // var rollmediv = $( "<div class='rollmeover'>roll me over.</div>")
    // $( this ).append( rollmediv );

    var elmt = $(this);
    var largeur = elmt.width();
    var taille = (elmt.children('img').size() / elmt.size());
    var speed = (elmt.attr('speed'));
    var timeline = new Boolean(false);
    timeline = (elmt.attr('timeline'));
    imageToDisplay = 0;
    // console.log ("TIMELINE = "+timeline)
    // console.log ("TIMELINE = "+timeline)
    if ( speed === "undefined") {
      speed = 10;
    }
    var counter=0;
    var autoplay = new Boolean(false);
    autoplay = (elmt.attr('autoplay'));
    var play = new Boolean(false);
    var delay=0;
    var delayMax=speed;
    elmt.children("img").css("display","none");
    elmt.children("img:eq("+counter+")").css("display","block");
    // if (timeline){
    //
    //   elmt.mousemove(function( event ) { playTimeline(elmt,event) });
    //
    // }
    // else{
      elmt.mousemove(function( event ) { switchSequence(elmt) });
        // }
    // function playTimeline(elmt,event){
    //
    //
    //   var offset = elmt.offset();
    //   var positionRelative = (event.pageX-offset.left)/largeur;
    //  elmt.children("img:eq("+imageToDisplay+")").removeClass("lol");
    //   imageToDisplay =  Math.round( positionRelative*taille)-1;
    //   if (imageToDisplay<0){
    //     imageToDisplay=0;
    //   }
    //
    //       elmt.children("img:eq("+imageToDisplay+")").addClass("lol");
    // }

    // MOUSE MOVE
     function switchSequence(elmt){
      elmt.children("img:eq("+counter+")").css("display","none");
          delay++;
          if (delay>=delayMax) {
          counter++;
          delay=0;
          };
          if (counter > taille-1){
            counter=0;
          }
          elmt.children("img:eq("+counter+")").css("display","block");
    }

    // AUTO
    elmt.mouseenter(function(){
      if (autoplay == true){
        play = false;
      }
    })
    elmt.mouseleave(function(){
      if (autoplay == true) {
        play = true;
      }
    })
    window.setInterval(function(){
      console.log(play);
      if (play ==true && halfView(elmt)){
        elmt.children("img:eq("+counter+")").css("display","none");
        counter++;
        if (counter > taille-1){
          counter=0;
        }
        elmt.children("img:eq("+counter+")").css("display","block");
      }
    }, 9000/speed);

  });

};


$( document ).ready(function() {
    initSeq();
});




// function initmenu(){
// $(".menu_mobile").one("click", handler1);
// $(".header a").one("click", changepagemenu);
// $(".header_mobile a").one("click", changepagemenu);
// setpage(page);
//
// };

function setpage(page){
  // console.log(page)
}



$( document ).ready(function() {
//    initmenu();
});
