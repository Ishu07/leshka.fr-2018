<!doctype html>

<html lang="en">
<head>
  <!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-71310025-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-71310025-1');
</script>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>Robin Gardeur (le Shka)</title>
  <meta name="description" content="le Shka (Robin Gardeur) – Designer / Artist based between London - Paris - Amsterdam">
  <meta name="author" content="le Shka">

  <link rel="stylesheet/less" href="css/loadfirst.css">
  <link rel="stylesheet/less" href="css/fallowing.css">

  <link rel="stylesheet/less" href="css/disposition.less">
  <link rel="stylesheet/less" href="css/skin.less">
  <link rel="stylesheet/less" href="css/skinThat.less">
  <link rel="stylesheet" href="build/lazyYoutube/lazyYoutube.css">
  <link rel="stylesheet" href="build/lazyload/lazyload.css">
  <link rel="stylesheet" href="css/slideshow.css">
  <link rel="stylesheet" href="css/mobile.css">
  <link rel="stylesheet" type="text/css" href="build/scroll/scroll.css">
</head>
<body>

<!-- <div class="header"><h3>Robin Gardeur (leShka)</h3></div> -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
<script src="build/jquery-2.1.3.min.js"></script>
<script src="build/less.min.js"></script>

<!-- LOADING -->
<?php include("build/loading/loading.php"); ?>

<!-- ABOUT -->
<?php include("build/about/about.php"); ?>

<div class="vs-section">

<script src="build/lazyload/lazyload.js"></script>
<script src="build/lazyload/sequences.js"></script>
<!-- DELETE ME IF I AM OFFLINE -->
<script src="build/lazyYoutube/lazyYoutube.js"></script>
<script src="js/intro.js"></script>
<script src="js/inView.js"></script>
<script src="js/slideshow.js"></script>
<script src="js/video_autoplay.js"></script>
<!-- DELETE ME TO USE THE EDITOR -->
<script src="js/cursor.js"></script>
<script src="js/link_arrow.js"></script>
<script src="js/fallowing.js"></script>
<script src="js/bgColor.js"></script>
<script src="js/bouing.js"></script>

<!-- MOBILE REDIRECTION -->
<!-- <script>
  var page="home";
  if (screen.width <= 730) {
   window.location = "pages/mobile.php";
   }
</script> -->



<!-- INTRO -->

<div class="intro" letterColor="#aaa">

  <div class="introwrap">
    <h3 class="switch">Hey!<span class="asterisk">*</span><img class="bubble" src="images/hello.svg"/></h3>
    <h1>I'm an Interactive Art Director & Artist focussed on <a class="toThis" >unique identities</a> and <a class="toThat"> <span class="crazyShit">crazy shit</span><span class="experiences">immersive experiences</span></a>.
    </h1>
  </div>

  <!-- <div class="introwrap">
    <h3>Hey!</h3>
    <h1>I'm a Senior Interactive
    Art Director & Designer focussed on <a class="toThis" >unique identities</a> and <a class="toThat"> <span class="crazyShit">crazy shit</span><span class="experiences">immersive experiences</span></a>.
    </h1>
  </div> -->

</div>

<div class="intoImagesWrap">
  <!-- TODO -->
</div>

<div class="this" id="this">

  <!-- 51 SPRINTS -->
  <?php include("projects/51sprints/51sprints.php"); ?>
  <!-- RAF SIMONS -->
  <?php include("projects/raf/raf_simons.php"); ?>
  <!-- LOOP - Trust Power -->
  <?php include("projects/loop/loop.php"); ?>
  <!-- White Bear -->
  <?php include("projects/whitebear/whitebear.php"); ?>
  <!-- HOGAN -->
  <?php include("projects/hogan/hogan.php"); ?>
  <?php include("projects/hogan/hogan-club.php"); ?>
  <?php include("projects/hogan/hogan-atelier.php"); ?>
  <!-- AllofUs -->
  <?php include("projects/allofus/allofus.php"); ?>
  <!-- Taylors -->
  <?php include("projects/taylors/taylors.php"); ?>
  <!-- Teyosh -->
  <?php include("projects/teyosh/teyosh.php"); ?>
  <!-- TODO : REMY MARTIN -->

  <!-- TODO : Andere Tijden -->

  <!-- Awwwards 2016 -->
  <?php include("projects/awwwards2016/awwwards.php"); ?>
  <!-- TODO : JAGER -->

  <!-- VvV -->
  <?php include("projects/velvet-venus/velvet-venus.php"); ?>

  <!-- NESPRESSO U -->
  <?php include("projects/nespresso/nespresso_u.php"); ?>

  <!-- Doddle -->
  <?php include("projects/doddle/doddle.php"); ?>
  <!-- FOOTER -->
  <?php include("pages/footer.php"); ?>
</div>


<div class="that">
  <!-- Nike Infinite -->
  <?php include("projects/nike-infinite/nike-infinite.php"); ?>
  <!-- Gigi -->
  <?php include("projects/tommy-hilfiger/tommy-hilfiger.php"); ?>
  <!-- VOID -->
  <?php include("projects/void/void.php"); ?>
  <!-- PANDORA -->
  <?php include("projects/pandora/pandora.php"); ?>
  <!-- i-remember -->
  <?php include("projects/i-remember/i-remember.php"); ?>
  <!-- My Most Beautiful Nightmare -->
  <?php include("projects/my_most_beautiful_nightmare/mymostbeautifulnightmare.php"); ?>
  <!-- Hermes -->
  <?php include("projects/hermes/hermes.php"); ?>
  <!-- TODO : GIGI -->
  <!-- Teyosh -->
  <?php include("projects/teyosh/teyosh.php"); ?>
  <!-- Awwwards 2016 -->
  <?php include("projects/awwwards2016/awwwards.php"); ?>
  <!-- FOOTER -->
  <?php   include("pages/footer.php"); ?>
  </div>
    </div>

<div class="mouse-circle mouse-circle-1"></div>

<script src="build/scroll/personalised.js"></script>
<script src="build/scroll/build.js"></script>

</body>
</html>
