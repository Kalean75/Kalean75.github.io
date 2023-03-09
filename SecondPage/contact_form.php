<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$contact = $_POST['contact'];
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    if (!preg_match("/^[0-9]{10}$/", $contact)) {
        echo "<span>* Please Fill Valid Contact No. *</span>";
    } else {
        $subject = $name;
        
// To send HTML mail, the Content-type header must be set.
        $headers = 'MIME-Version: 1.0' . "rn";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "rn";
        $headers .= 'From:' . $email . "rn";
        $headers .= 'Cc:' . $email . "rn"; 
        $template = '<div style="padding:50px; color:white;">Hello ' . $name . ',<br/>'
                . '<br/>Thank you...! For Contacting Us.<br/><br/>'
                . 'Name:' . $name . '<br/>'
                . 'Email:' . $email . '<br/>'
                . 'Contact No:' . $contact . '<br/>'
                . 'Message:' . $message . '<br/><br/>'
                . 'This is an automatically generated Confirmation email.'
                . '<br/>'
                . 'We Will contact You as soon as possible .</div>';

        $sendmessage = wordwrap($sendmessage, 70);
        mail("genericemail@genericemail.com", $subject, $sendmessage, $headers);
        echo "Your Query has been received, We will contact you soon.";
    }
} else {
    echo "<span>* invalid email *</span>";
}
?>