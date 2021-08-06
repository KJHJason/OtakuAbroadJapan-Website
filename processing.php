<?php
// declare variables and set them to an empty string
$to = $from = $name = $UserSubject = $subject2 = $type = $userMessage = $message = $message2 = $headers = $headers2 = $userMessageLen = $emailLen = "";

if ($_SERVER["REQUEST_METHOD"] == "POST"){
  $to = "noreply@otakuabroadjapan.com"; // web server email
  $from = test_input($_POST['email']); // Sender's Email address
  $name = test_input($_POST['name']);
  $UserSubject = "Subject: " . test_input($_POST['subject']);
  $subject2 = "Copy of your enquiry form submission";
  $type=test_input($_POST['Enquirytype']);
  $userMessage=test_input($_POST['message']);

  // changing value from html select options to readable phrases
  switch ($type) {
    case 'General_Enquiry':
      $type = "General Enquiry";
      break;
    case 'Copyright':
      $type = "Copyright Issues with Multimedia Assets Used";
      break;
    case 'Clarifications':
      $type = "Need Futher Clarifications Regarding Something";
      break;
    case 'Inaccurate_Info':
      $type = "Inaccurate Information on the Website";
      break;
    case 'Feedback':
      $type = "Feedback";
      break;
    case 'Others':
      $type = "Others";
      break;
    default:
      break;
  }

  // constructing the message
  $message = $name . " " . "wrote the following:" . "\n\nEmail: " . $from . "\n\n" . $UserSubject . "\n\nType of Enquiry: " . $type . "\n\nMessage: " . $userMessage;
  $message2 = "Here is a copy of your enquiry form:\n\nName: " . $name . "\n\n" . $UserSubject . "\n\nType of Enquiry: " . $type . "\n\nMessage: " . $userMessage . "\n\nThis email was auto-generated. Please do not reply to this email. Please email jason@otakuabroadjapan.com instead if you require further assistance. Thank you for your patience and have a nice day ahead!";
  $headers = "From:" . $from;
  $headers2 = "From:" . $to;

  // calculating the length for validation
  $userMessageLen = strlen($userMessage);
  $emailLen = strlen($from);
  $subjectLen = strlen($UserSubject); // must be more than 10 characters as in the first few lines, it will add "Subject: " + the user's entered subject
  $userName = strlen($name);

  if ($emailLen >= 6  and $userMessageLen > 20 and $subjectLen > 10 and $userName >= 1){
    mail($to,$UserSubject,$message,$headers); // sends an email to me
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender

    // redirect the user to a success page to alert them that their contact form has been emailed to me
    echo '<script>';
    echo "location.href = 'contactSubmitted';"; // .html omitted as htaccess wil strip .html from the url
    echo '</script>';
  }
  else{
    // redirect user to failed page if conditions are not met
    echo '<script>';
    echo "location.href = 'contactFailed';"; // .html omitted as htaccess wil strip .html from the url
    echo '</script>';
  }
}
else{
  // redirect user if the user tries to access processing.php by entering it to his/her url
  echo '<script>';
  echo "location.href = '/';";
  echo '</script>';
}

// to prevent script injections and remove whitespace characters
function test_input($data){
  $data = trim($data); // remove any unnecessary characters (extra space, tab, newline)
  $data = stripslashes($data); // remove any blackslashes (\)
  $data = htmlspecialchars($data); // will convert predefined characteres "<" and ">" to HTML entities, e.g. "<" will become "&lt;"
  return $data;
}
?>
