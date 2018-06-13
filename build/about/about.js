function initAbout(){
  var customTheText;
  var important = false
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
    "Barbara Streisand"
  );
  var items2 = Array(
    "with confusion",
    "randomly",
    "with my cat",
    "quickly",
    "with pleasure",
    "indifferently",
    "for whole my lifetime it seems"
  );
  var items3 = Array(
    "awefuls",
    "amazing",
    "disturbing",
    "on a bench",
    "meeeeh"
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
    "japanese commercials",
    "stevie wonder",
    // "other",
    "the actual political instability in the west caucasian region"
  );

  // bubble
  $(".switch").click(function() {
    $(".thanksVisible").removeClass("thanksVisible");
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
    $(".aboutWrapper").css("padding-bottom",differenceHeight+"px");
    // console.log("window : " + $(window).height());
    // console.log("aout wraper : " + $(".aboutWrapper").height());
    // console.log("aout offset : " + $(".aboutWrapper").offset().top);
    // console.log("aout h4 : " + $(".aboutWrapper h4").height());
    var infosHeight = $(window).height() - ($(".aboutWrapper").offset().top + $(".aboutWrapper").height()+differenceHeight)
    $(".aboutBottom").css("height",infosHeight+"px");
    $(".wrapperInfos").css("height",infosHeight+"px");
    var infosHeight2 = $(window).height() - $(".signWrap").offset().top - infosHeight;
    $(".sign").css("margin-top",infosHeight2/2 - 25+"px");


  }
aboutPlacement();
setInterval(function(){ aboutPlacement()}, 1500);


// random text

//display the multiple choices
var choice = function(index,item,element){
  $( ".itemSelector" ).empty();
  for (var i = 0; i < item.length; i++) {
    var emphasis = "<div class='item'><a>" + item[i] + "</a></div>";
    $( ".itemSelector" ).append(emphasis)
  }
  // add customisable field
  if (index==1 || index ==5) {
    var emphasis = "<input class='customField' type='text' onfocus=this.value='' name='LastName' value='other...'>";
    $( ".itemSelector" ).append(emphasis)

    // custom text
    //don't close
    $(".customField").click(function() {
      $(".itemSelector").toggleClass("itemOn")
    });
    //change if modified
    $(".itemSelector").click(function() {
      if ($(".customField").val()!="other...") {
        customTheText()
      }
    });
    //press enter
    $(".customField").on('keyup', function (e) {
        if (e.keyCode == 13) {
            customTheText();
            $(".itemSelector").toggleClass("itemOn");
        }
    });
    // the function to modify the text
    customTheText = function(){
      var changeMe = $( ".about" ).find( element )
      // emptyfield
      // console.log($(".customField").val());
      changeMe.html($(".customField").val())
      if ($(".customField").val()=="") {
        console.log("EMPTY");
        // var changeMe = $( ".about" ).find( element )
        changeMe.html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
      }
      // console.log("LOL + "+ $(".customField").val());
    }
  }
//custom field
  // $(".customField").click(function() {
  //     $(".itemSelector").toggleClass("itemOn")
  // });
  // chose an item
  $( ".itemSelector a" ).click(function(e) {
    var changeMe = $( ".about" ).find( element )
    changeMe.html($(this).html())
  });
  //end
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


// enter your $email

// active the button if you enter your mail
$(".imputSend").click(function(){
  $(".imputSend").addClass("imputSendActive");
  $(".sendButton").addClass("sendButtonActive");
});

//send the email
$(".ajax-contact").submit(function(){
var formData = $(".ajax-contact").serialize();

  $.ajax({
            type: "POST",
            url: $(".ajax-contact").attr('action'),
            // data: data,
            data: formData,
            success: function(){
              console.log("SUCESS");
              $(".thanks").addClass("thanksVisible");
            }
        });
  console.log("SEND : " + $(".imputMessage").val());
  return false;
});


$(".sendButton").hover(function(){
  // console.log("Message :");
  $(".imputName").val("Somebody")
  var name = $(".imputName").val()
  $(".imputMessage").val($(".aboutWrapper h4").text())
  var message = $(".aboutWrapper h4").text();
  var mail = $(".send").val();
  console.log($(".imputMessage").val());
  // todo important email
})


// items
$(".item a").click(function() {
  $(".itemSelector").toggleClass("itemOn")
});
$( ".aboutWrapper a" ).click(function() {
  $(".itemSelector").toggleClass("itemOn")
});
// click outside
$(".itemSelector").click(function() {
  $(".itemSelector").toggleClass("itemOn")
});




};


$( document ).ready(function() {
  initAbout();

});
