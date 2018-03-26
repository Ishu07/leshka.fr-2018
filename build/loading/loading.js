function initLoading(){
  // CHANGE LETTER
  var loadingSwitch = setInterval(changeLetter, 150);
  function changeLetter(){

    switch ($(".loadingBig").html()) {
    case "L":
        $(".loadingBig").html("E");
        $(".loading").css("background-color","#04b");
        $(".loading").css("color","#aaa");
        break;
    case "E":
        $(".loadingBig").html("S");
        $(".loading").css("background-color","#aaa");
        $(".loading").css("color","#04b");
        break;
    case "S":
        $(".loadingBig").html("H");
        $(".loading").css("background-color","#04b");
        $(".loading").css("color","#aaa");
        break;
    case "H":
        $(".loadingBig").html("K");
        $(".loading").css("background-color","#aaa");
        $(".loading").css("color","#04b");
        break;
    case "K":
        $(".loadingBig").html("A");
        $(".loading").css("background-color","#04b");
        $(".loading").css("color","#aaa");
        break;
    case "A":
        $(".loadingBig").html("L");
        $(".loading").css("background-color","#aaa");
        $(".loading").css("color","#04b");
        break;
    }

  }
};
function stopLoading(){
  setTimeout(function(){
    $(".loading").addClass("fadeOutLoad");
  }, 1000);

  setTimeout(function(){
    $(".loading").css("display","none");
  }, 1800);

  // $(".fadeOutLoad").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
  //   function(event) {
  //     // HERE
  //     console.log("DONE");
  //   $(".loading").css("display","none");
  // });

};

initLoading();
$( document ).ready(function() {
  console.log("PAGE LOADED1");
  stopLoading();

});

window.addEventListener("load", function(event) {
    console.log("PAGE LOADED2");
});
