var loadingSwitch = null
function initLoading(){
  // CHANGE LETTER
  loadingSwitch = setInterval(changeLetter, 150);
  function changeLetter(){

    switch ($(".loadingBig").html()) {
    case "L":
        $(".loadingBig").html("E");
        $(".loading").css("background-color","#ddd");
        $(".loading").css("color","#333");
        break;
    case "E":
        $(".loadingBig").html("S");
        $(".loading").css("background-color","#333");
        $(".loading").css("color","#ddd");
        break;
    case "S":
        $(".loadingBig").html("H");
        $(".loading").css("background-color","#ddd");
        $(".loading").css("color","#333");
        break;
    case "H":
        $(".loadingBig").html("K");
        $(".loading").css("background-color","#333");
        $(".loading").css("color","#ddd");
        break;
    case "K":
        $(".loadingBig").html("A");
        $(".loading").css("background-color","#ddd");
        $(".loading").css("color","#333");
        break;
    case "A":
        $(".loadingBig").html("L");
        $(".loading").css("background-color","#333");
        $(".loading").css("color","#ddd");
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
  // CLEAR THE LOADING INTERVAL
  setTimeout(function(){
    clearInterval(loadingSwitch);
  }, 1800);

};

initLoading();
$( document ).ready(function() {
  console.log("PAGE LOADED1");
  stopLoading();

});

window.addEventListener("load", function(event) {
    console.log("PAGE LOADED2");
    // stopLoading();
});
