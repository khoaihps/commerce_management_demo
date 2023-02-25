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

$id = $_POST['providerId'];
$name = $_POST['name'];
$email = $_POST['email'];
$phoneNumber = $_POST['phoneNumber'];
$address = $_POST['address'];

$sql="INSERT INTO `project`.`providers` (`providerID`, `provider_name`, `email`, `phone_number`, `address`) 
VALUES (:id, :name, :email, :phoneNumber, :address);";
$stmt = $pdo->prepare($sql);
$stmt->execute([
  'id' => $id,
  'name' => $name,
  'email' => $email,
  'phoneNumber' => $phoneNumber,
  'address' => $address
]);

header('Content-Type: application/json');
echo json_encode($stmt);

$pdo = null;
?>


