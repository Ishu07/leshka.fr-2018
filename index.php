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
<script>
  var page="home";
  //if (screen.width <= 730) {
  //  window.location = "mobile.php";
  //  }
</script>

<!-- INTRO -->

<div class="intro">
  <div class="introwrap">
    <h3>Hey!</h3>
    <h1>I'm a Senior Interactive
    Art Director & Motion Designer  focussed on <a class="toThis" href="#">unique identities</a> and  <a class="toThat" href="#">immersive experiences</a>.
    </h1>
  </div>
</div>


<div class="this">

<!-- 51 SPRINTS -->


<?php include("projects/51sprints/51sprints.php"); ?>


<!-- Hogan.com -->

<?php include("projects/hogan/hogan.php"); ?>




<!-- Hogan Club -->

<div class="project">
  <div class="heading">C</div>
  <h2>Hogan Club</h2>
  <p class="subtitle">Design & Animations</p>
  <div class="wrapper">
      <div class="youtube " data-embed="UnEeEQFYqN8">
          <div class="play-button"></div>
      </div>
  </div>
</div>

<!-- NESPRESSO U -->

<div class="project">
  <div class="heading">U</div>
  <h2>Nespresso U</h2>
  <p class="subtitle">Art Direction, Design & Motion</p>
  <div class="wrapper">
      <div class="youtube " data-embed="TTHdSYNrRSk">
          <div class="play-button"></div>
      </div>
  </div>
</div>

<!-- Awwwards 2016 -->

<?php include("projects/awwwards2016/awwwards.php"); ?>

<!-- Hermes -->

<div class="project">
  <div class="heading">H</div>
  <h2>Hermes</h2>
  <p class="subtitle">Art Direction, Design & Motion</p>
  <div class="wrapper">
    <img class="lazyload full" src="projects/hermes/img/hermes_thumb.png" data-src="projects/hermes/img/hermes.png" />
  </div>

  <div class="wrapper">
      <div class="youtube" data-embed="vkeVIn6KEaQ">
          <div class="play-button"></div>
      </div>
  </div>

  <div class="wrapper article">
    <div class="big-left">
      <img class="lazyload full" src="projects/hermes/img/hermes_leather_thumb.jpg" data-src="projects/hermes/img/hermes_leather.jpg" />
    </div>
    <p class="lil-right">The leather-working station shows moments from every step in the creation of a Hermès bag, from leather hide to product. A difficult task was to give people a sense of how the artisan looks at leather, what he or she sees on the skin...<br/>
      Like a magical lens, the digital pictureframe allows a view of the leather as seen through the eyes of the craftsman. Revealed are the life marks, wrinkles and parts of the leather that are not up to the quality standards of Hermès. Based on this reading and knowledge, the artisan decides how to lay out the pattern, what parts to cut and in which way.</p>
  </div>
  <div class="separator"></div>
  <div class="wrapper article">
    <div class="big-right">
      <img class="lazyload full" src="projects/hermes/img/hermes_googles_thumb.jpg" data-src="projects/hermes/img/hermes_googles.jpg" />
    </div>
    <p class="lil-left">Metal-working for jewellery and watches has an even finer degree of detail. The craftsmen use special magnifying goggles to put the precious pieces together. We adapted this archetypal piece of equipment for our display: digital binoculars which peer into a museum-grade vitrine, housing the Hermès piece.<br/>
      Through the goggles, people see the manual fabrication and assembly steps from an artisan’s point of view, at 1-1 scale to make it feel as if you were doing it yourself.</p>
  </div>

</div>

<!-- SLIDESHOW TEST -->

<div class="project">
  <div class="heading">J</div>
  <h2>Jagermeister</h2>
  <p class="subtitle">change the speed, timeline, and Autoplay</p>
  <div class="sequence wrapper" speed="10" timeline="false" autoplay=true >
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

  <!-- Awwwards 2016 -->

  <?php include("projects/awwwards2016/awwwards.php"); ?>

  <!-- FOOTER -->
  <!-- <?php   include("pages/footer.html"); ?> -->
</div>



</body>
</html>
