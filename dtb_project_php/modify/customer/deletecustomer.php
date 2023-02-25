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
// $id = 'CS010';

$sql="DELETE FROM orderdetail WHERE orderID IN (
SELECT orderID FROM orders
WHERE customerID=:id);";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => $id]);

$sql="DELETE FROM orders WHERE customerID=:id;";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => $id]);

$sql="DELETE FROM customers WHERE customerID=:id;";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => $id]);

header('Content-Type: application/json');
echo json_encode($id);

$pdo = null;
?>


