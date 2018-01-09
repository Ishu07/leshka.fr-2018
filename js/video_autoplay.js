function video_autoplay() {
  for (var i = 0; i <  $('video').length; i++) {
    $('video')[i]
    if (halfView($('video')[i])){
      $('video')[i].play();
    }
    else {
      $('video')[i].pause();
    }
  }
}

$(window).scroll(function() {
    video_autoplay();
});
