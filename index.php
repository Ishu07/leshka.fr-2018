<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>SHK(leShka)</title>
  <meta name="description" content="SHK(le Shka) Designer / Artist based between London - Paris - Amsterdam">
  <meta name="author" content="le Shka">

  <link rel="stylesheet/less" href="css/skin.less">
  <link rel="stylesheet" href="build/lazyYoutube/lazyYoutube.css">
</head>
<body>
<script src="build/jquery-2.1.3.min.js"></script>
<script src="build/less.min.js"></script>
<script src="build/lazyload.min.js"></script>
<script src="build/lazyYoutube/lazyYoutube.js"></script>
<script src="js/init.js"></script>
<script src="js/inView.js"></script>
<script src="js/slideshow.js"></script>
<script>
  var page="home";
  //if (screen.width <= 730) {
  //  window.location = "mobile.php";
  //  }

</script>
<div class="intro">
  <div class="introwrap">
    <h3>Hey!</h3>
    <h1>I'm a Senior Interactive<br/>
    Art Director & Motion Designer  focussed on uniques identities and  immersive experiences.<br/>
    I do this, and That.
    </h1>
  </div>
</div>

<div class="project">
  <h2>Slideshow</h2>
  <p>change the speed, timeline, and Autoplay</p>
  <div class="sequence full" speed="10" timeline="false" autoplay="true" >
    <img class="lazyload full " src="works/gameofthrones/image1_thumb.jpg" data-src="works/gameofthrones/recipes/001.jpg" />
    <img class="lazyload full " src="works/gameofthrones/image1_thumb.jpg" data-src="works/gameofthrones/recipes/002.jpg" />
    <img class="lazyload full " src="works/gameofthrones/image1_thumb.jpg" data-src="works/gameofthrones/recipes/003.jpg" />
    <img class="lazyload full " src="works/gameofthrones/image1_thumb.jpg" data-src="works/gameofthrones/recipes/004.jpg" />
    <img class="lazyload full " src="works/gameofthrones/image1_thumb.jpg" data-src="works/gameofthrones/recipes/005.jpg" />
  </div>
</div>

<div class="project">
  <h2>Youtube</h2>
  <p>Youtube lazyload</p>
  <div class="wrapper ">
      <div class="youtube " data-embed="AqcjdkPMPJA">
          <div class="play-button"></div>
      </div>
  </div>
</div>


<div class="project">
  <h2>Hogan.com</h2>
  <a href="http://www.hogan.com">visit the website</a>
  <img class="lazyload full" src="works/gameofthrones/image1_thumb.jpg" data-src="works/gameofthrones/image1.jpg" />
</div>

<div class="project">
  <h2>Hogan.com</h2>
  <a href="http://www.hogan.com">visit the website</a>
  <img class="lazyload full" src="works/gameofthrones/image1_thumb.jpg" data-src="works/gameofthrones/image2.jpg" />
</div>

<div class="project">
  <h2>Hogan.com</h2>
  <a href="http://www.hogan.com">visit the website</a>
  <img class="lazyload full" src="works/gameofthrones/image1_thumb.jpg" data-src="works/gameofthrones/image3.jpg" />
</div>

<!-- <?php
    include("pages/footer.html");
?> -->

</body>
</html>
