<?php


    $email_from="madik@mgj.kz";
    $subject="Form to email message";
    
    $name=$_POST["firstname"];
    $visitor_email=$_POST["email"];
    $phone=$_POST["phone"];
    $message=$_POST["message"];

    $email_to="madik@mgj.kz";
    
    $mailBody="Name: $name \n Email: $visitor_email \n Phone: $phone \n Message: $message";

    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";    

    mail($email_to, $subject, $mailBody, $headers);

    header("Location: index.html");

?>