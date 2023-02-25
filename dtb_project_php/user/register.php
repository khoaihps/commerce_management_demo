<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$host = 'localhost';
$dbname = 'project';
$user = 'root';
$password = '';

$dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
$options = [
  PDO::ATTR_EMULATE_PREPARES   => false,
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, 
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];
try {
  $pdo = new PDO($dsn, $user, $password, $options);
} catch (\PDOException $e) {
  throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

$username = $_POST['username'];
$password = $_POST['password'];

// $username = 'admin';
// $password = '123456';


$stmt = $pdo->prepare('SELECT * FROM users WHERE username = ?');
$stmt->execute([$username]); 
$user = $stmt->fetch();
if ($user) {
  echo json_encode(['success' => false, 'message' => 'Username already exists']);
  exit;
}

function hash_password($password) {
    $options = [
      'cost' => 12,
    ];
    return password_hash($password, PASSWORD_BCRYPT, $options);
}

$hashed_password = hash_password($password);

$stmt = $pdo->prepare('INSERT INTO users(username, password) VALUES (?, ?)');
$stmt->execute([$username, $hashed_password]);


header('Content-Type: application/json');
echo json_encode(['success' => true]);

$pdo = null;
?>