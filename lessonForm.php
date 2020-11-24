<?php

if (isset($_POST['send'])) {
    $firstName = $_POST['fname'];
    $lastName = $_POST['lname'];
    $exp = $_POST['exp'];
    $phone = $_POST['phone'];
    $emailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "jacobgfenner@yahoo.com"
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;

    mail($mailTo, $exp, $txt, $headers);
    header("Location: lessons.php?mailsend");
}

>