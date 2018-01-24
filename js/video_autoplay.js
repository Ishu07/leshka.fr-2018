function video_autoplay() {

  // THIS
  if (thisOrThat == "this"){
    for (var i = 0; i <  $('.this video').length; i++) {
      $('.this video')[i]
      if (halfView($('.this video')[i])){
        $('.this video')[i].play();
      }
      else {
        $('.this video')[i].pause();
      }
    }
  }

  if (thisOrThat == "that"){
    for (var i = 0; i <  $('.that video').length; i++) {
      $('.that video')[i]
      if (halfView($('.that video')[i])){
        $('.that video')[i].play();
      }
      else {
        $('.that video')[i].pause();
      }
    }
  }

}

$(window).scroll(function() {
    video_autoplay();
});
