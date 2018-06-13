<!-- ABOUT -->
<link rel="stylesheet" href="build/about/about.css">

<div class="itemSelector">
  <div class="item"><a>Santa Claus</a></div>
  <div class="item"><a>Jaques Chirac</a></div>
  <div class="item"><a>a random guy</a></div>
  <div class="item"><a>a famous agency</a></div>
  <div class="item"><a>happy</a></div>
  <div class="item"><a>Barbra Streisand</a></div>
  <div class="item"><a>other</a></div>
</div>
<div class="about">
  <div class="aboutWrapper">
    <h3 class="switch">Hey!<span class="asterisk">*</span><img class="bubbleAbout bubbleOn switch" src="images/bye.svg"/></h3>

    <h4>I<a>'m</a> <a>Santa Claus</a>.<br/>
  I’ve been looking at your work <a>for whole my lifetime it seems</a> and found your projects <a>on a bench</a>. I would love to <a>select this option</a> to talk about <a>Japanese comercials</a>.</h4>
    <!-- <h4 class="send">your email </h4> -->
    <div class="thanks"><h4>Thank you for this wonderful email!</h4></div>
    <div class="signWrap">
      <div class="sign">
        <!-- <form method="post" name="myemailform" action="build/about/email.php" > -->
          <form id="ajax-contact" class="ajax-contact" method="post" action="build/about/email.php">
          <input style="display:none" class='imputName' type="text" name="form_name" value="NAME"/>
          <input style="display:none" class='imputMessage' type="text" name="form_msg" value="MESSAGE"/>
          <input class='imputSend' type='text' onfocus=this.value='' name='form_email' value='enter your email and send'>
          <!-- <span class="arrow">➩</span> -->
          <input type="submit" style="display:visible" class="sendButton" value="➩">
        </form>

      </div>
    </div>
  </div>
  <div class="aboutBottom">
    <div class="wrapperInfos">
      <ul>
        <li>Robin Gardeur (le Shka)</li>
        <li>robin.leshka@gmail.com</li>
        <li>+447 491 618 644</li>
        <li>Available for Freelance </li>
        <li><span style="opacity:0.3;">Paris – Amsterdam – </span>&nbsp;London&nbsp;<span style="opacity:0.3;"> – Tokyo</span></li>
      </ul>
      <ul>
        <li>13 fwa</li>
        <li>10 awwwards</li>
        <li>2 fwa of the month</li>
        <li>1 awwwards of the month</li>
        <li></li>
      </ul>
    </div>
  </div>
</div>

<script src="build/about/about.js"></script>
