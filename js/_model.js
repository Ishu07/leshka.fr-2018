function initmenu(){
$(".menu_mobile").one("click", handler1);
$(".header a").one("click", changepagemenu);
$(".header_mobile a").one("click", changepagemenu);
setpage(page);
changecolor();

};

function setpage(page){
  console.log(page)
  switch (page) {
     case "home": 

        $(window).one( "scroll", function() {
        setpage("work");
        });   

        break;
      case "work":
        $( "#menu_work" ).addClass( "gradient" );
        $( "#menu_work" ).addClass( "active" );
        break;
      case "work-lvl2":
        $( "#menu_work" ).addClass( "gradient" );
        $( "#menu_work" ).addClass( "active" );
        break;
      case "art":
        $( "#menu_art" ).addClass( "gradient" );
        $( "#menu_art" ).addClass( "active" );
        break;
      case "art-lvl2":
        $( "#menu_art" ).addClass( "gradient" );
        $( "#menu_art" ).addClass( "active" );
        break;
      case "about":
        $( "#menu_about" ).addClass( "gradient" );
        $( "#menu_about" ).addClass( "active" );
        break;
      case "wtf":
        $( "#menu_wtf" ).addClass( "gradient" );
        $( "#menu_wtf" ).addClass( "active" );
        break;
      case "wtf-lvl2":
        $( "#menu_wtf" ).addClass( "gradient" );
        $( "#menu_wtf" ).addClass( "active" );
        break;
      case "kollection":
        $( "#menu_kollection" ).addClass( "gradient" );
        $( "#menu_kollection" ).addClass( "active" );
        break;
      case "kowboys":
        $( "#menu_kowboys" ).addClass( "gradient" );
        $( "#menu_kowboys" ).addClass( "active" );
        break;
 }
}

function handler1() {
    /* push menu right */
    console.log("EXPAND");
     $( "body" ).removeClass( "slide_retract" );
    $( ".header_mobile" ).removeClass( "slide_menu_retract" );
    $( ".header" ).removeClass( "slide_menu_content_retract" );
    $( ".black_cover" ).removeClass( "uncover" );

    $( "body" ).addClass( "slide" );
    $( ".header_mobile" ).addClass( "slide_menu" );
    $( ".header" ).addClass( "slide_menu_content" );
    $( ".black_cover" ).addClass( "cover" );
      console.log("EXPAND FINISH");
    // alert( $( ".header" ));
    $(this).one("click", handler2);
}
function handler2() {
    /* push menu right */
    console.log("RETRAKT");
    $( "body" ).removeClass( "slide" );
    $( ".header_mobile" ).removeClass( "slide_menu" );
    $( ".header" ).removeClass( "slide_menu_content" );
    $( ".black_cover" ).addClass( "uncover" );

    $( "body" ).addClass( "slide_retract" );
    $( ".header_mobile" ).addClass( "slide_menu_retract" );   
    $( ".header" ).addClass( "slide_menu_content_retract" );
    $( ".black_cover" ).removeClass( "cover" );
     console.log("RETRAKT FINISH");
   // alert( $( ".header" ));
    $(this).one("click", handler1);
}

function changepagemenu() {
    var id = $(this).attr('id');

    // IF WE ARE ALREADY ON HOME
    if ((id=="menu_work")&&(page=="home" || page=="work")){
        console.log("PAGE : " + page);
        // SKROLL TO THE WORKS
        scrollto="works";
           var elem = $("#works");
           console.log("skroll to " + elem);
           $('html, body').animate({
              scrollTop: elem.offset().top
        }, 700
        );
        $(".header a").one("click", changepagemenu);
    }
    else if ((id=="menu_logo")&&(page=="home" || page=="work")){
        console.log("PAGE : " + page);
        // SKROLL TO THE TOP
        scrollto="body";
           $('html, body').animate({
              scrollTop: 0
        }, 700
   );        
    }
    else if ((id=="menu_logo_mobile")&&(page=="home" || page=="work")){
        console.log("PAGE : " + page);
        // SKROLL TO THE TOP
        scrollto="body";
           $('html, body').animate({
              scrollTop: 0
        }, 700
   );        
    }
    else{
      // DISEAPEAR
     // $("div").not($(".header")).addClass( "vanish" );
      $("img").not($(".header")).addClass( "vanish" );
      $("p").each(function() {   
      $( this ).addClass( "vanish" );
  });
      $(".quote").each(function() {   
      $( this ).addClass( "vanish" );
  });

    setTimeout(  function() {
      $("div").not($(".header")).remove();
      switch (id) {
        case "menu_logo": 
          window.location="http://www.leshka.fr"
          break;
        case "menu_logo_mobile": 
          window.location="http://www.leshka.fr"
          break;
        case "menu_work": 
          window.location="http://www.leshka.fr/#works"
          break;
        case "menu_art":
          window.location="http://www.leshka.fr/art"
        break;
      case "menu_about":
          window.location="http://www.leshka.fr/about"
        break;
      case "menu_wtf":
          window.location="http://www.leshka.fr/wtf"
        break;
      case "menu_kollection":
          window.location="http://www.leshka.fr/kollection"
        break;
      case "menu_kowboys":
          window.location="http://www.leshka.fr/kowboys"
        break;
      }
    }, 1200);
    }
}

var gradientcolor = Math.floor(Math.random()*6);
console.log(gradientcolor)
function changecolor(){
  console.log(gradientcolor)
  gradientcolor++;
    if (gradientcolor==1){
     $(".gradient").css({"background-color": "#5ee693"});       
    }
    else if (gradientcolor==2){
     $(".gradient").css({"background-color": "#fd126d"});       
    }
    else if (gradientcolor==3){
     $(".gradient").css({"background-color": "#fd126d"});       
    }
    else if (gradientcolor==4){
     $(".gradient").css({"background-color": "#1dbc9c"});       
    }
    else if (gradientcolor==5){
     $(".gradient").css({"background-color": "#475176"});
     }
    else if (gradientcolor==6){
     $(".gradient").css({"background-color": "#5be0f4"});
     gradientcolor=0;
     }
}

window.setInterval(function(){
  changecolor();
}, 5000);

$( document ).ready(function() {
    initmenu();
});