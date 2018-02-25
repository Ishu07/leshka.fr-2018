var thisOrThat = "none";
var timeOutThat;
var timeOutThis;
function intro() {
$(".this").css("display","none");
$(".that").css("display","none");



  // THAT
  toThat = function(e) {
    console.log(thisOrThat);
    if (thisOrThat != "that") {
      clearTimeout(timeOutThat)
      // $(".toThis").html("normal shit");
      $(".toThat").css("opacity","0")
      $(".crazyShit").css("opacity","1")
      // $(".toThat").html("crazy shit")
      $(".this").css("animation","switchThis 0.5s ease 0s forwards");
      $(".that").css("animation","switchThat 0.5s ease 0s forwards");

      $(".intro").addClass("thatIntro");
      timeOutThis = setTimeout(
      function()
      {
        $(".this").css("display","none");
        thisOrThat = "that";
      }, 100);
      $(".that").css("display","block");
    }
  };


  //THIS
  toThis = function(e) {
    console.log(thisOrThat);
    if (thisOrThat != "this") {
      clearTimeout(timeOutThis)
      $(".toThis").html("unique identities")

      $(".toThat").css("opacity","1")
      $(".crazyShit").css("opacity","0")
      // $(".toThat").html("immersive experiences")
      $(".this").css("display","block");
      $(".this").css("animation","this 0.5s ease 0s forwards");
      $(".that").css("animation","that 0.5s ease 0s forwards");

      $(".intro").removeClass("thatIntro");

      timeOutThat = setTimeout(
      function()
      {
        $(".that").css("display","none");
        thisOrThat = "this";
      }, 100);

    }
  };

  clickToThis = function(e) {
    $('html, body').animate({scrollTop: '1000px'}, 800);
  }
  clickToThat = function(e) {
    $('html, body').animate({scrollTop: '1000px'}, 800);
  }


  //LISTENERS
  $(".toThat").hover(toThat);
  $(".toThat").click(clickToThat);

  $(".toThis").hover(toThis);
  $(".toThis").click(clickToThis);


}

window.addEventListener("load", function(event) {
    intro();
});
