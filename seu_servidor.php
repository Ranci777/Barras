<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Pega os dados do formulário
  $postData = file_get_contents('php://input');
  $data = json_decode($postData);

  // Valide os dados recebidos (por exemplo, verifique se o email é válido)

  // Envie o email
  $to = 'laboratorio3d@tcgloria.com.br'; // Substitua pelo endereço de email do laboratório 3D
  $subject = 'Dados do Cliente';
  $message = "Nome: {$data->nome}\r\n";
  $message .= "E-mail: {$data->email}\r\n";

  $headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  $success = mail($to, $subject, $message, $headers);

  if ($success) {
    echo json_encode(['success' => true]);
  } else {
    echo json_encode(['success' => false]);
  }
} else {
  // Requisição inválida
  http_response_code(400);
  echo 'Requisição inválida';
}
?>
