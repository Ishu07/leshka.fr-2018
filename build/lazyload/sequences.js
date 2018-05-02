function initlazySequences(){
  ( function() {

      $(".sequence").each(function( index ){
        var sequence = $(this);
        sequence.data("toload",true);
      });

  } )();
};


function looplazySequences(){
  ( function() {
    // THIS
    if (thisOrThat == "this"){
    $(".this .sequence").each(function( index ){
      var sequence = $(this);
      if (inViewLoad(sequence) && (sequence.data("toload"))){
        sequence.data("toload",false);
        // create images from urls
        var urls = new Array();
        // split the sring in array
        urls = sequence.attr("urls").split(",");;
        // sequence.append('<div class="full">');
        for (var i = 0; i < urls.length; i++) {
          // console.log(urls[i]);
          sequence.append('<img class="full" src="' + urls[i] +'" />');
        }
        // sequence.append('</div>');
        // diplay only the good one
        initSeq(sequence);
      }
    });
    };

    // THAT
    if (thisOrThat == "that"){
    $(".that .sequence").each(function( index ){
      var sequenceo = $(this);
      if (inViewLoad(sequenceo) && (sequenceo.data("toload"))){
        sequenceo.data("toload",false);
        // create images from urls
        var urls = new Array();
        // split the sring in array
        urls = sequenceo.attr("urls").split(",");;
        // sequenceo.append('<div class="full">');
        for (var i = 0; i < urls.length; i++) {
          // console.log(urls[i]);
          sequenceo.append('<img class="full" src="' + urls[i] +'" />');
        }
        // sequenceo.append('</div>');
        // diplay only the good one
        initSeq(sequenceo);
      }
    });
    };

  } )();
};


$(window).scroll(function() {
    looplazySequences();
});
$( document ).ready(function() {
    initlazySequences();
});
