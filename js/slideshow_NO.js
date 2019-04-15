var slideshowCounter = 0;
var slideshowSpeed = 300; // in ms
var sequenceInView = $('.this .sequence')[0];
var counter=0;
var delay=0;
var delayMax=0;
var elmt, largeur, taille, speed, timeline, imageToDisplay;

function initRollmeover(){
  $(".sequence").each(function( index ){
    // var rollmediv = $( "<div class='rollmeover'>roll me over.</div>")
    // $( this ).append( rollmediv );
  })
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
    // console.log ("TIMELINE = "+timeline)
    // console.log ("TIMELINE = "+timeline)
    if ( speed === "undefined") {
      speed = 10;
    }

    var autoplay = new Boolean(false);
    autoplay = (elmt.attr('autoplay'));
    var play = new Boolean(false);

    delayMax=speed;
    elmt.children("img").css("display","none");
    elmt.children("img:eq("+counter+")").css("display","block");

      elmt.mousemove(function( event ) { switchSequence(sequenceInView) });




  });

};


function switchSequence(sequenceInView){
  // console.log($(sequenceInView).children("img:eq("+counter+")"));
  console.log("DELAY = " + delay + "DELAY MAX = " + delayMax + $(sequenceInView).children("img:eq("+counter+")") );
 $(sequenceInView).children("img:eq("+counter+")").css("display","none");
     delay++;
     if (delay>=delayMax) {
     counter++;
     delay=0;
     };
     if (counter > taille-1){
       counter=0;
     }
     $(sequenceInView).children("img:eq("+counter+")").css("display","block");
}




function playSequence() {
  // THIS
  if (thisOrThat == "this"){
    for (var i = 0; i <  $('.this .sequence').length; i++) {
      $('.this .sequence')[i]
      if (halfView($('.this .sequence')[i])){
        // playVideo($('.this sequence')[i])
        sequenceInView = $('.this .sequence')[i];
        console.log("PLAY SEQUENCE : " + sequenceInView);
      }
      else {
        // $('.this sequence')[i].pause();
        // console.log("STOP SEQUENCE");
      }
    }
  }

  if (thisOrThat == "that"){
    for (var i = 0; i <  $('.that .sequence').length; i++) {
      $('.that .sequence')[i]
      if (halfView($('.that .sequence')[i])){
        // playVideo($('.that sequence')[i])
      }
      else {
        // $('.that sequence')[i].pause();
      }
    }
  }

}




$( document ).ready(function() {
    // initSeq();
    // initFollow();
    initRollmeover();
    setInterval(function(){
      slideshowCounter++;
      switchSequence(sequenceInView)
    }, slideshowSpeed);
});
$(window).scroll(function() {
    playSequence();
});
