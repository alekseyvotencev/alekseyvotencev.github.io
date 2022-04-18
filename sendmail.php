<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'php/Exception.php';
    require 'php/PHPMailer.php';
    require 'php/SMTP.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'php/');
    $mail->IsHTML(true);

    $mail->SetFrom('votencevaleksejj@gmail.com', 'Алексей Вотенцев');
    $mail->addAddress('votencevaleksejj@gmail.com');
    $mail->Subject = 'Обратный звонок';

    $body = '<h1>Заявка на обратный звонок</h1>';
    $body.='<p><strong>Имя</strong> ' .$_POST['name'].'</p>';
    $body.='<p><strong>Телефон</strong> ' .$_POST['tel'].'</p>';

    $mail->Body = $body;

    if(!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>