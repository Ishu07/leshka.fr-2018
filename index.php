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

<!-- DELETE ME IF I AM OFFLINE -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
<script src="build/jquery-2.1.3.min.js"></script>
<script src="build/less.min.js"></script>

<!-- LOADING -->
<?php include("build/loading/loading.php"); ?>

<!-- ABOUT -->
<?php include("build/about/about.php"); ?>

<!-- BIO -->
<?php include("build/bio/bio.php"); ?>

<!-- POP UP & DIRECT URL -->
<div id="popUp">
  <button class="closeBtn" type="button">
    <svg id="closeImgSVG" width="128px" height="128px" viewBox="0 0 128 128">
        <path id="closeBtnPath" stroke="none" stroke-width="1" fill="#0000ff" fill-rule="evenodd" d="M64.0002589,62.4975275 L83.1538932,43.3438932 C83.5444175,42.9533689 84.1775825,42.9533689 84.5681068,43.3438932 C84.9586311,43.7344175 84.9586311,44.3675825 84.5681068,44.7581068 L65.4144547,63.9117589 L84.5681157,83.0659021 C84.9586351,83.4564313 84.9586271,84.0895963 84.5680979,84.4801157 C84.1775687,84.8706351 83.5444037,84.8706271 83.1538843,84.4800979 L64.0002411,65.3259725 L44.8471068,84.4791068 C44.4565825,84.8696311 43.8234175,84.8696311 43.4328932,84.4791068 C43.0423689,84.0885825 43.0423689,83.4554175 43.4328932,83.0648932 L62.5860453,63.9117411 L43.4328843,44.7580979 C43.0423649,44.3675687 43.0423729,43.7344037 43.4329021,43.3438843 C43.8234313,42.9533649 44.4565963,42.9533729 44.8471157,43.3439021 L64.0002589,62.4975275 Z">
        </path>
    </svg>
  </button>
  <!-- <div id="directURL"></div> -->

</div>



<div class="vs-section">

<script src="build/lazyload/lazyload.js"></script>
<script src="build/lazyload/sequences.js"></script>
<!-- DELETE ME IF I AM OFFLINE -->
<script src="build/lazyYoutube/lazyYoutube.js"></script>
<script src="js/intro.js"></script>
<script src="js/inview.js"></script>
<script src="js/slideshow.js"></script>
<script src="js/video_autoplay.js"></script>
<!-- DELETE ME TO USE THE EDITOR -->
<script src="js/cursor.js"></script>
<script src="js/link_arrow.js"></script>
<script src="js/fallowing.js"></script>
<script src="js/bgColor.js"></script>
<script src="js/applyOnce.js"></script>
<script src="js/anchors.js"></script>
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
    <!-- <h1>I'm an Interactive Art Director & Artist focussed on <a class="toThis" >unique identities</a> and <a class="toThat"> <span class="crazyShit">crazy shit</span><span class="experiences">immersive experiences</span></a>. -->
    <h1>I'm a lead Creative & Digital Artist focussed on <a class="toThis" >unique identities</a> and <a class="toThat"> <span class="crazyShit">crazy shit</span><span class="experiences">immersive experiences</span></a>.
    </h1>
  </div>

</div>

<div class="intoImagesWrap">
  <!-- TODO -->
</div>

<div class="this" id="this">

  <!-- 51 SPRINTS -->
  <?php include("projects/51sprints/51sprints.php"); ?>
  <!-- RAF SIMONS -->
  <?php include("projects/raf-simons/raf-simons.php"); ?>
  <!-- Hi-ReS! -->
  <?php include("projects/hi-res/hi-res.php"); ?>
  <!-- LOOP - Trust Power -->
  <?php include("projects/loop/loop.php"); ?>
  <!-- White Bear -->
  <?php include("projects/whitebear/whitebear.php"); ?>
  <!-- HOGAN -->
  <?php include("projects/hogan/hogan.php"); ?>
  <!-- AllofUs -->
  <?php include("projects/allofus/allofus.php"); ?>
  <!-- Taylors -->
  <?php include("projects/taylors/taylors.php"); ?>
  <!-- Teyosh -->
  <?php include("projects/teyosh/teyosh.php"); ?>
  <!-- TODO : REMY MARTIN -->

  <!-- TODO : Andere Tijden -->

  <!-- Awwwards 2016 -->
  <?php include("projects/awwwards2016/awwwards2016.php"); ?>
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
  <?php include("projects/awwwards2016/awwwards2016.php"); ?>
  <!-- FOOTER -->
  <?php   include("pages/footer.php"); ?>
  </div>
    </div>

<div class="mouse-circle mouse-circle-1"></div>

<script src="build/scroll/personalised.js"></script>
<script src="build/scroll/build.js"></script>

</body>
</html>
