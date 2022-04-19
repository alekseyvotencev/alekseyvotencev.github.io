<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'php/PHPMailer.php';
require 'php/SMTP.php';
require 'php/Exception.php';

$name = $_POST['name'];
$tel = $_POST['tel'];

$title = "Заявка на обратный звонок";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $tel<br><br>
";

$mail = new PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    $mail->Host       = 'smtp.yandex.ru'; 
    $mail->Username   = 'votentseff@yandex.ru'; 
    $mail->Password   = 'chpuwrqdglmncncp'; 
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('votentseff@yandex.ru', 'Алексей Вотенцев');

    
    $mail->addAddress('votentseff@yandex.ru');  


$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    


if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
?>