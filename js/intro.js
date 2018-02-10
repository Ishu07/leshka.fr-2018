var thisOrThat = "this";
function intro() {

  // THAT
  $(".toThat").on( "click", function() {
    if (thisOrThat == "this") {
      // $(".toThis").html("normal shit");
      $(".toThat").css("opacity","0")
      $(".crazyShit").css("opacity","1")
      // $(".toThat").html("crazy shit")
      $(".this").css("animation","switchThis 0.5s ease 0s forwards");
      $(".that").css("animation","switchThat 0.5s ease 0s forwards");

      $(".intro").addClass("thatIntro");
      setTimeout(
      function()
      {
        $(".this").css("display","none");
        thisOrThat = "that";
        // console.log("that");
      }, 500);
      $(".that").css("display","block");
    }
  });


  //THIS
  $(".toThis").on( "click", function() {
    if (thisOrThat == "that") {

      $(".toThis").html("unique identities")

      $(".toThat").css("opacity","1")
      $(".crazyShit").css("opacity","0")
      // $(".toThat").html("immersive experiences")
      $(".this").css("display","block");
      $(".this").css("animation","this 0.5s ease 0s forwards");
      $(".that").css("animation","that 0.5s ease 0s forwards");

      $(".intro").removeClass("thatIntro");

      setTimeout(
      function()
      {
        $(".that").css("display","none");
        thisOrThat = "this";
        // console.log("this");
      }, 500);
    }
  });
}

window.addEventListener("load", function(event) {
    intro();
});
