var thisOrThat = "none";
var timeOutThat;
var timeOutThis;
function intro() {
// $(".this").css("display","none");
// $(".that").css("display","none");



  // THAT
  toThat = function(e) {
    console.log(thisOrThat);
    if (thisOrThat != "that") {
      clearTimeout(timeOutThat)
      // $(".toThis").html("normal shit");
      $(".experiences").css("opacity","0")
      $(".crazyShit").css("opacity","1")
      // $(".toThat").html("crazy shit")
      $(".this").css("animation","switchThis 0.5s ease 0s forwards");
      $(".that").css("animation","switchThat 0.5s ease 0s forwards");
      $('body').css( "background-color", "#ff00ff" );

      $(".intro").addClass("thatIntro");
      timeOutThis = setTimeout(
      function()
      {
        $(".this").css("display","none");
        thisOrThat = "that";
      }, 100);
      $(".that").css("display","block");
    }
    scrollPage()
  };


  //THIS
  toThis = function(e) {
    console.log(thisOrThat);
    if (thisOrThat != "this") {
      clearTimeout(timeOutThis)
      $(".toThis").html("unique identities")

      $(".experiences").css("opacity","1")
      $(".crazyShit").css("opacity","0")
      // $(".toThat").html("immersive experiences")
      $(".this").css("display","block");
      $(".this").css("animation","this 0.5s ease 0s forwards");
      $(".that").css("animation","that 0.5s ease 0s forwards");
      $('body').css( "background-color", "#fccb90" );

      $(".intro").removeClass("thatIntro");

      timeOutThat = setTimeout(
      function()
      {
        $(".that").css("display","none");
        thisOrThat = "this";
        scrollPage()
      }, 500);

    }
    scrollPage()
  };

  scrollPage = function(e) {
    setTimeout(
    function()
    {
      $('html, body').animate({scrollTop: '500px'}, 800);
    }, 500);
  }


  //LISTENERS
  $(".toThat").click(toThat);
  // $(".toThat").click(setTimeout(scrollPage(), 500));

  $(".toThis").click(toThis);
  // $(".toThis").click(setTimeout(scrollPage(), 500));


}

$( document ).ready(function() {
    intro();
});
