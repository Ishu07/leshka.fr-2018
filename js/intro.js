function intro() {
  $(".toThat").on( "click", function() {
    console.log("this");
    $(".this").addClass("switchThis");
    $(".that").addClass("switchThat");
    $(".intro").addClass("thatIntro");
  });
  $(".toThis").on( "click", function() {
    console.log("that");
    $(".this").removeClass("switchThis");
    $(".that").removeClass("switchThat");
    $(".intro").removeClass("thatIntro");
  });
}

window.addEventListener("load", function(event) {
    intro();
});
