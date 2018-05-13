<?php
// if($_POST){
    $name = $_POST['form_name'];
    $email = $_POST['form_email'];
    $message = $_POST['form_msg'];
    // use wordwrap() if lines are longer than 70 characters
    // $message = wordwrap($message,70);
    // $email_from = 'yourname@yourwebsite.com';
    // $email_subject = "New Form submission";
    // $email_body = "You have received a new message from the user"

//send email

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
?>
