function bio() {

  $(".logo").click(function(e) {
    e.preventDefault();
    // $("#popUpBio .project").html("")
    // bgColorFuncpopUp("51sprints");
    // $("#popUpBio").css("background-color","#fccb90");
    $("#closeBtnPathBio").attr("fill","#19780c");
    $("#popUpBio").css("display","auto");
    $("#popUpBio").css("opacity","1");
    $("#popUpBio").css("pointer-events","auto");
  })
  // $('.logo').mouseover(function() {
  //  $( '.logo p' ).toggleClass('logoHover');
  // });
  // $('.logo').mouseout(function() {
  //   $( '.logo p' ).toggleClass('logoHover');
  // });
  $(".logo").hover(
    // BAD BAD
       function(){ $(".logoContainer").addClass('logoHover') },
       function(){ $(".logoContainer").removeClass('logoHover') }
)

  // $("#popUp").css("display","none")

  // $("#closeImgSVG").click(function() {
  //   $("#popUp").css("opacity","0");
  //   $("#popUp").css("pointer-events","none");
  // })

  //close button listener
  $("#closeImgSVGBio").click(function() {
    $("#popUpBio").css("opacity","0");
    $("#popUpBio").css("pointer-events","none");
  })
}

$( document ).ready(function() {
    bio();
});
