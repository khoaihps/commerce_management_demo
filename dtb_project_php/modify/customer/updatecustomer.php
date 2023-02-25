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

$id = $_POST['id'];
$name = $_POST['name'];
$email = $_POST['email'];
$phoneNumber = $_POST['phoneNumber'];
$address = $_POST['address'];

$sql="UPDATE customers
SET customer_name=:name,email=:email,phone_number=:phoneNumber,address=:address
WHERE customerID=:id;";
$stmt = $pdo->prepare($sql);
$stmt->execute();   

$stmt->execute([
  'id' => $id,
  'name' => $name,
  'email' => $email,
  'phoneNumber' => $phoneNumber,
  'address' => $address
]);

header('Content-Type: application/json');
echo json_encode($email);

$pdo = null;
?>