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
  <link rel="stylesheet" href="css/slideshow.css">
</head>
<body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
<script src="build/jquery-2.1.3.min.js"></script>
<script src="build/less.min.js"></script>
<script src="build/lazyload/lazyload.js"></script>
<!-- DELETE ME IF I AM OFFLINE -->
<script src="build/lazyYoutube/lazyYoutube.js"></script>
<script src="js/intro.js"></script>
<script src="js/inView.js"></script>
<script src="js/slideshow.js"></script>
<script src="js/video_autoplay.js"></script>
<script src="js/cursor.js"></script>
<script src="js/link_arrow.js"></script>
<script src="js/bgColor.js"></script>
<script src="js/bouing.js"></script>
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
    Art Director & Motion Designer focussed on <a class="toThis" >unique identities</a> and <a class="toThat">immersive experiences</a>.
    </h1>
  </div>
</div>


<div class="this">

  <!-- AllofUs -->

  <?php include("projects/Allofus/allofus.php"); ?>

  <!-- White Bear -->

  <?php // include("projects/whitebear/whitebear.php"); ?>

  <!-- Teyosh -->

  <?php include("projects/teyosh/teyosh.php"); ?>

  <!-- 51 SPRINTS -->

  <?php include("projects/51sprints/51sprints.php"); ?>

<!-- Hogan -->

<?php include("projects/hogan/hogan.php"); ?>
<?php include("projects/hogan/hogan-club.php"); ?>
<?php include("projects/hogan/hogan-atelier.php"); ?>

<!-- NESPRESSO U -->

<?php include("projects/nespresso/nespresso_u.php"); ?>

<!-- Awwwards 2016 -->

<?php include("projects/awwwards2016/awwwards.php"); ?>


<!-- FOOTER -->

<!-- <?php   include("pages/footer.php"); ?>

</div>


<div class="that">

  <!-- My Most Beautiful Nightmare -->
  <?php include("projects/my_most_beautiful_nightmare/mymostbeautifulnightmare.php"); ?>
  <!-- Nike Infinite -->
  <?php include("projects/nike-infinite/nike-infinite.php"); ?>
  <!-- Hermes -->
  <?php include("projects/hermes/hermes.php"); ?>
  <!-- Teyosh -->
  <?php include("projects/teyosh/teyosh.php"); ?>
  <!-- Awwwards 2016 -->
  <?php include("projects/awwwards2016/awwwards.php"); ?>

  <!-- FOOTER -->
  <!-- <?php   include("pages/footer.php"); ?>
</div>



</body>
</html>
