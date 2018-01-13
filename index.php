<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>SHK (le Shka)</title>
  <meta name="description" content="SHK(le Shka) Designer / Artist based between London - Paris - Amsterdam">
  <meta name="author" content="le Shka">

  <link rel="stylesheet/less" href="css/disposition.less">
  <link rel="stylesheet/less" href="css/skin.less">
  <link rel="stylesheet/less" href="css/skinThat.less">
  <link rel="stylesheet" href="build/lazyYoutube/lazyYoutube.css">
  <link rel="stylesheet" href="build/lazyload/lazyload.css">
</head>
<body>
<script src="build/jquery-2.1.3.min.js"></script>
<script src="build/less.min.js"></script>
<script src="build/lazyload/lazyload.js"></script>
<!-- DELETE ME IF I AM OFFLINE -->
<script src="build/lazyYoutube/lazyYoutube.js"></script>
<script src="js/intro.js"></script>
<script src="js/inView.js"></script>
<script src="js/slideshow.js"></script>
<script src="js/cursor.js"></script>
<script src="js/video_autoplay.js"></script>
<script src="js/link_arrow.js"></script>
<script src="js/bgColor.js"></script>
<script>
  var page="home";
  //if (screen.width <= 730) {
  //  window.location = "mobile.php";
  //  }
</script>

<!-- INTRO -->

<div class="intro project" bgColor="#aaa">
  <div class="introwrap">
    <h3>Hey!</h3>
    <h1>I'm a Senior Interactive
    Art Director & Motion Designer focussed on <a class="toThis" >unique identities</a> and  <a class="toThat" >immersive experiences</a>.
    </h1>
  </div>
</div>


<div class="this">

  <!-- AllofUs -->

  <?php include("projects/Allofus/allofus.php"); ?>

  <!-- White Bear -->

  <?php include("projects/whitebear/whitebear.php"); ?>

  <!-- Teyosh -->

  <?php include("projects/teyosh/teyosh.php"); ?>

  <!-- 51 SPRINTS -->

  <?php include("projects/51sprints/51sprints.php"); ?>

<!-- Hogan -->

<?php include("projects/hogan/hogan.php"); ?>
<?php include("projects/hogan/hogan-club.php"); ?>
<?php include("projects/hogan/hogan-atelier.php"); ?>

<!-- NESPRESSO U -->

<div class="project" bgColor="#44bfff">
  <div class="heading">U</div>
  <h2>Nespresso U</h2>
  <p class="subtitle">Art Direction, Design & Motion</p>
  <div class="wrapper">
      <img class="full lazyload sequencethumb" src="projects/nespresso/nespresso_thumb.png" data-src=" "/>
      <div class="youtube" data-embed="TTHdSYNrRSk">
          <div class="play-button"></div>
      </div>
  </div>
</div>

<!-- Awwwards 2016 -->

<?php include("projects/awwwards2016/awwwards.php"); ?>

<!-- Hermes -->

<?php include("projects/hermes/hermes.php"); ?>

<!-- SLIDESHOW TEST -->

<div class="project">
  <div class="heading">J</div>
  <h2>Jagermeister</h2>
  <p class="subtitle">change the speed, timeline, and Autoplay</p>
  <div class="sequence wrapper" speed="10" timeline="false" autoplay="true" >
    <img class="full" src="projects/jagermeister-recipes/recipes/000.jpg" />
    <img class="full" src="projects/jagermeister-recipes/recipes/001.jpg" />
    <img class="full" src="projects/jagermeister-recipes/recipes/002.jpg" />
    <img class="full" src="projects/jagermeister-recipes/recipes/003.jpg" />
    <img class="full" src="projects/jagermeister-recipes/recipes/004.jpg" />
    <img class="full" src="projects/jagermeister-recipes/recipes/005.jpg" />
    <img class="full" src="projects/jagermeister-recipes/recipes/006.jpg" />
    <img class="full" src="projects/jagermeister-recipes/recipes/007.jpg" />
    <img class="full" src="projects/jagermeister-recipes/recipes/008.jpg" />
    <img class="full" src="projects/jagermeister-recipes/recipes/009.jpg" />
    <img class="full" src="projects/jagermeister-recipes/recipes/010.jpg" />
    <img class="full" src="projects/jagermeister-recipes/recipes/011.jpg" />
    <img class="full" src="projects/jagermeister-recipes/recipes/012.jpg" />
    <img class="full" src="projects/jagermeister-recipes/recipes/013.jpg" />
    <img class="full" src="projects/jagermeister-recipes/recipes/014.jpg" />
    <img class="full" src="projects/jagermeister-recipes/recipes/015.jpg" />
    <img class="full" src="projects/jagermeister-recipes/recipes/016.jpg" />
    <img class="full" src="projects/jagermeister-recipes/recipes/017.jpg" />
    <img class="full" src="projects/jagermeister-recipes/recipes/018.jpg" />
  </div>
</div>

<!-- FOOTER -->
<!-- <?php   include("pages/footer.html"); ?> -->

</div>


<div class="that">

  <!-- Nike Infinite -->
  <?php include("projects/nike-infinite/nike-infinite.php"); ?>
  <!-- Teyosh -->
  <?php include("projects/teyosh/teyosh.php"); ?>
  <!-- Awwwards 2016 -->
  <?php include("projects/awwwards2016/awwwards.php"); ?>

  <!-- FOOTER -->
  <!-- <?php   include("pages/footer.html"); ?> -->
</div>



</body>
</html>
