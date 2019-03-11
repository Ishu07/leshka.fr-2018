var currentUrl = window.location.href;
var newUrl = window.location.href;
var pageTitle = "Robin Gardeur (le Shka)";

function changeURL() {
  // change the url
  // newUrl = "?project=" + targetProject.id;
  // window.history.pushState({}, null, newUrl);
  var getUrl = window.location;
  var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1]+ "/";

  history.pushState({
      id: 'homepage'
  }, pageTitle, baseUrl);

  // change the title
  // document.title = "le Shka —> " + currentProject.id;
  document.title = pageTitle;

}
function initScrollUrl(){
    const urlParams = new URLSearchParams(window.location.search);
    var urlPage = urlParams.get('page');
    var urlProject = urlParams.get('project');

    if (urlProject != null){
        // add php
        insertPHP(urlProject)
        console.log("URL PROJECT : "+urlProject);
    } else {
        console.log("NO URL PROJECT");
        $("#popUp").css("opacity","0");
        $("#popUp").css("pointer-events","none");
    }

    //close button listener
    $("#closeImgSVG").click(function() {
      $("#popUp").css("opacity","0");
      $("#popUp").css("pointer-events","none");
    })
}

function insertPHP(urlProject){
    var project = $("#"+urlProject)
    // add php
    var phpCode = "projects/"+ urlProject +"/"+ urlProject +".php"
    // add the page
    $.post(phpCode, {}, function(result){
        $("#popUp").append(result);
        //put the colors
        bgColorFuncpopUp(project);
        //LazyLoad
        lazyLoadProject();
        loadLazyYoutube();
        //Scroll Video Events
        playVideos();
        // $(".project").scroll = function(){console.log("LOL");};
    }, 'text');


}



// LAZY LOAD all the project in Direct URL
function lazyLoadProject(){
    $(".lazyload").each(function( index ) {
        this.src = this.getAttribute("data-src")
            if ( $(this).parents('#popUp').length == 1 ) {
            // console.log("LOL");
            if ($( this ).hasClass("sequencethumb")){
                $( this ).addClass("fadeOut");
            }
            else{
                $( this ).after("<img class='full under' src='"+this.src+"'></img>");
                $( this ).addClass("over");
            }
        }
    });
}

// AUTO PLAY THE VIDEOS BECAUSE OF THE SCROLL PROBLEM
function playVideos(){
    $("#popUp video").each(function(){
      var media = this;
      // temporary, still bug
      const playPromise = media.play();
      if (playPromise !== null){
          playPromise.catch(() => {
            // essential
            media.pause();
            media.currentTime = 0;
            media.play();
          })
      }
    })

}

// Show youtube thumbs
function loadLazyYoutube(){

  ( function() {

      var youtube = document.querySelectorAll( ".youtube" );

      for (var i = 0; i < youtube.length; i++) {
        // console.log(youtube[ i ]);
        // console.log($(youtube[ i ]).parents());
          if ($(youtube[ i ]).parents('#popUp').length == 1 ) {
              // if (halfView(youtube)){
                // console.log("load youtube");
              var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/maxresdefault.jpg";
              // console.log(source);
              var image = new Image();
                      image.src = source;
                      image.addEventListener( "load", function() {
                          youtube[ i ].appendChild( image );
                      }( i ) );

                      youtube[i].addEventListener( "click", function() {

                          var iframe = document.createElement( "iframe" );

                                  iframe.setAttribute( "frameborder", "0" );
                                  iframe.setAttribute( "allowfullscreen", "" );
                                  iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

                                  this.innerHTML = "";
                                  this.appendChild( iframe );
                      } );
              }
      };

  } )();
};



  $( document ).ready(function() {
      initScrollUrl();
  });
