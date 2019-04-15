function initRollmeover(){
  // $(".sequence").each(function( index ){
  //   var rollmediv = $( "<div class='rollmeover'>roll me over.</div>")
  //   $( this ).append( rollmediv );
  // })
};

  function initSeq(sequence){
    $(sequence).each(function( index ){
    var elmt = $(this);
    var largeur = elmt.width();
    var taille = (elmt.children('img').size() / elmt.size());
    var speed = (elmt.attr('speed'));
    var timeline = new Boolean(false);
    timeline = (elmt.attr('timeline'));
    imageToDisplay = 0;
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


    //MOUSE MOVE
    // elmt.mousemove(function( event ) { switchSequence(elmt) });

    // AUTOMATIC
    setInterval(function(){
      if (halfView(elmt)){
        switchSequence(elmt);
        // console.log("INTERVAL");
      }
    }, 50);


    // SWITCH IMAGE
     function switchSequence(elmt){
      elmt.children("img:eq("+counter+")").css("display","none");
          delay+=1;
          if (delay>=delayMax) {
          counter++;
          delay=0;
          };
          if (counter > taille-1){
            counter=0;
          }
          elmt.children("img:eq("+counter+")").css("display","block");
    }


  });

};


// function playCurrentSequence() {
//   // THIS
//   if (thisOrThat == "this"){
//     for (var i = 0; i <  $('.this .sequence').length; i++) {
//       $('.this .sequence')[i]
//       if (halfView($('.this .sequence')[i])){
//         // playVideo($('.this sequence')[i])
//         sequenceInView = $('.this .sequence')[i];
//         console.log("PLAY SEQUENCE : " + sequenceInView);
//       }
//       else {
//         // $('.this sequence')[i].pause();
//         // console.log("STOP SEQUENCE");
//       }
//     }
//   }
//
//   if (thisOrThat == "that"){
//     for (var i = 0; i <  $('.that .sequence').length; i++) {
//       $('.that .sequence')[i]
//       if (halfView($('.that .sequence')[i])){
//         // playVideo($('.that sequence')[i])
//         sequenceInView = $('.that .sequence')[i];
//         console.log("PLAY SEQUENCE : " + sequenceInView);
//       }
//       else {
//         // $('.that sequence')[i].pause();
//       }
//     }
//   }
//
// }
//
// $(window).scroll(function() {
//     playCurrentSequence();
// });
//



$( document ).ready(function() {
    initRollmeover();
});
