function initAbout(){
  var items0 = Array(
    "&apos;m",
    "&apos;m not"
  );
  var items1 = Array(
    "Santa Claus",
    "Jaques Chirac",
    "a random guy",
    "a famous agency",
    "happy",
    // "drunk",
    // "other",
    "Barbra Streisand"
  );
  var items2 = Array(
    "with confusion",
    "randomly",
    "with my cat",
    "quickly",
    "with pleasure",
    "indiferently",
    "for whole my lifetime it seams"
  );
  var items3 = Array(
    "awefuls",
    "amazing",
    "disturbing",
    "on a bench"
  );
  var items4 = Array(
    "get in touch",
    "get a drink",
    "meet your mom",
    "go to a rave",
    "be a chicken",
    "select this option"
  );
  var items5 = Array(
    "money",
    "quantum physics",
    "them",
    "future",
    "japanese comercials",
    "stevie wonder",
    // "other",
    "the actual political instability in the west caucasian region"
  );

  // bubble
  $(".switch").click(function() {
    $(".about").toggleClass("aboutOn")
  });
  $(".about .switch").click(function() {
    $(".about").removeClass("aboutOn")
  });
  $(".intro .switch").hover(function() {
    $(".bubble").toggleClass("bubbleOn")
  });

// place the module in the page
  var aboutPlacement = function(){
    var introHeight = $(".introwrap").height()
    var aboutHeight = $(".aboutWrapper").height()
    var differenceHeight = introHeight-aboutHeight;
    $(".aboutWrapper").css("padding-bottom",differenceHeight+"px")
  }
aboutPlacement();
setInterval(function(){ aboutPlacement()}, 1500);


// random text

//display the multiple choices
var choice = function(index,item,element){
  $( ".itemSelector" ).empty();
  for (var i = 0; i < item.length; i++) {
    // console.log(item[i]);
    var emphasis = "<div class='item'><a>" + item[i] + "</a></div>";
    $( ".itemSelector" ).append(emphasis)
  }
  // chose an item
  $( ".itemSelector a" ).click(function(e) {
    // $( ".about" ).find( "li" )
    console.log(element);
    var changeMe = $( ".about" ).find( element )
    changeMe.html("<a>"+$(this).html()+"</a>")
    console.log($(this).html());
  });
}



// init random text
$( ".about a" ).each(function(index, element) {
  switch(index) {
    case 0:
        var item = items0[Math.floor(Math.random()*items0.length)];
        $(this).html(item)
        $(this).click(function(){choice(index,items0,element)})
        break;
    case 1:
      var item = items1[Math.floor(Math.random()*items1.length)];
      $(this).html(item)
      $(this).click(function(){choice(index,items1,element)})
      break;
    case 2:
      var item = items2[Math.floor(Math.random()*items2.length)];
      $(this).html(item)
      $(this).click(function(){choice(index,items2,element)})
      break;
    case 3:
      var item = items3[Math.floor(Math.random()*items3.length)];
      $(this).html(item)
      $(this).click(function(){choice(index,items3,element)})
      break;
    case 4:
      var item = items4[Math.floor(Math.random()*items4.length)];
      $(this).html(item)
      $(this).click(function(){choice(index,items4,element)})
      break;
    case 5:
      var item = items5[Math.floor(Math.random()*items5.length)];
      $(this).html(item)
      $(this).click(function(){choice(index,items5,element)})
      break;
    default:
        $(this).html("error")
      }
});



// items
$(".item a").click(function() {
  $(".itemSelector").toggleClass("itemOn")
});
$( ".about a" ).click(function() {
  $(".itemSelector").toggleClass("itemOn")
});
// click outside
$(".itemSelector").click(function() {
  $(".itemSelector").toggleClass("itemOn")
});

};


$( document ).ready(function() {
  // console.log("ABOUT LOADED1");
  initAbout();

});
