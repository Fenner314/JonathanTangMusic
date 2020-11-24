<?php

if (isset($_POST['send'])) {
    $firstName = $_POST['fname'];
    $lastName = $_POST['lname'];
    $emailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "jacobgfenner@yahoo.com"
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: lessons.php?mailsend");
}

>