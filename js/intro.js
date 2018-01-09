function intro() {
  $(".toThat").on( "click", function() {
    console.log("this");
    // $(".toThis").html("normal shit")
    $(".toThat").html("crazy shit")
    $(".this").addClass("switchThis");
    $(".that").addClass("switchThat");
    $(".intro").addClass("thatIntro");
  });
  $(".toThis").on( "click", function() {
    console.log("that");
    $(".toThis").html("unique identities")
    $(".toThat").html("immersive experiences")
    $(".this").removeClass("switchThis");
    $(".that").removeClass("switchThat");
    $(".intro").removeClass("thatIntro");
  });
}

window.addEventListener("load", function(event) {
    intro();
});
