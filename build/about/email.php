<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
// echo("<script>console.log('PHP: ".$data."');</script>");
// echo("<script>console.log('PHP:');</script>");
// echo "<script>alert( 'LOL' );</script>";
// if($_POST){
    // $name = $_POST['form_name'];
    $email = $_POST['form_email'];
    $message = $_POST['form_msg'];
    // echo("<script>console.log('PHP: ".$message."');</script>");
    // $message = $doc->getElementByClass('aboutWrapper')->textContent;
    // echo("<script>console.log('PHP: ".$message."');</script>");
    // echo("<script>console.log('PHP: ".$email."');</script>");
    // use wordwrap() if lines are longer than 70 characters
    // $message = wordwrap($message,70);
    // $email_from = 'yourname@yourwebsite.com';
    // $email_subject = "New Form submission";
    // $email_body = "You have received a new message from the user"
//send email

// mail("email@gmail.com", "This is an email from:" .$email, $message);
  $to = "robin.leshka@gmail.com";
  $headers = "Message from : $email";
  // $test = "MESSAGE TEST";
  // $headers = "Reply-To: $email";
  mail($to,"new message incoming",$message,$headers);

    // mail("someone@example.com","Message from :" .$name,"Message from :" .$name .$email .$message);

    // mail("robin.leshka@gmail.com", "This is an email from:" .$email, $message);

    // if (mail("robin.leshka@gmail.com", "New email from:" .$email, $message)) {
    //     echo "Mail Sent.";
    // }
    // else {
    //     echo "failed";
    // }
// }
// mail("robin.leshka@gmail.com","My subject","My message");
}
?>
