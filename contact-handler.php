<?php
if ($_POST) {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $organization = htmlspecialchars($_POST['organization']);
    $service = htmlspecialchars($_POST['service']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "Info.jpconsultant@gmail.com";
    $subject = "New Contact Form Submission from JP Consultancy Website";
    
    $body = "
    New contact form submission:
    
    Name: $name
    Email: $email
    Phone: $phone
    Organization: $organization
    Service of Interest: $service
    
    Message:
    $message
    
    Submitted on: " . date('Y-m-d H:i:s');
    
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    if (mail($to, $subject, $body, $headers)) {
        header("Location: /thank-you/");
        exit();
    } else {
        echo "Error sending email. Please try again.";
    }
} else {
    header("Location: /contact/");
    exit();
}
?>
