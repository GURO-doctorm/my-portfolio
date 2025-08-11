<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	// Sender Email and Name 
	$from = stripslashes($name) . " <" . stripslashes($email) . ">";

	// Recipient Email Address 
	$to = 'miloudelgoumadi@gmail.com';

	// Email Subject 
	$emailSubject = 'New Message from BentoFolio Contact Form';

	// Email Header 
	$headers  = 'MIME-Version: 1.0' . "\r\n"
	. 'Content-type: text/html; charset=utf-8' . "\r\n"
	. 'From: ' . $from . "\r\n";

	// Message Body 
	$body = "Name: $name<br>Email: $email<br>Message:<br>$message";

	// Validation
	if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
		echo 'Please fill all the fields and try again.';
		exit;
	}

	// Send Email
	if (mail($to, $emailSubject, $body, $headers)) {
		echo 'Thank You! We will be in touch with you very soon.';
	} else {
		echo 'Sorry there was an error sending your message. Please try again';
	}
}
?>
