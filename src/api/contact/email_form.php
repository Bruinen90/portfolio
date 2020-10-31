<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if ($_POST)
	{
		http_response_code(200);
		$subject = $_POST['topic'];
		$to = "max.machnik@gmail.com";
		$from = $_POST['email'];
		$message = '<html><body>';
		$message .= '<center>';
		$message .= '<table rules="all" style="border-color: #666; max-width: 800px;" cellpadding="10">';
		$message .= "<tr><td><strong>Imię i nazwisko:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";
		$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
		$message .= "<tr><td><strong>Temat:</strong> </td><td>" . strip_tags($_POST['topic']) . "</td></tr>";
		$message .= "<tr><td><strong>Wiadomość</strong> </td><td>" . $_POST['content'] . "</td></tr>";
		$message .= "</table>";
		$message .= "</center>";
		$message .= "</body></html>";

		$headers = "MIME-Version: 1.0\r\n";
		$headers.= "Content-type: text/html; charset=UTF-8\r\n";
		$headers.= "From: <" . $from . ">";
		mail($to, $subject, $message, $headers);

		echo json_encode(array(
			"sent" => true
	));
	}
  else
	{
		echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>
