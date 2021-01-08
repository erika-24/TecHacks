<?php

  if(isset($_POST['submit'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $recipient = "a7sarker@uwaterloo.ca";
    $header = "From: $email \r\n";
    $formcontent="From: $name \n Phone: $phone \n\n Message: $message";

    mail($recipient, $subject, $formcontent, $header) or die("Error!");
    header("Location: index.php?mailsend"); //not sure if this is needed
    echo "Thank You!" . "-" . "<a href='form.html' style='text-decoration:none;color:#ff0099;'>Return Home</a>";

  }

?>
