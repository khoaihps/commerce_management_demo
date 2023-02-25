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
$quantity = $_POST['quantity'];
$price_in = $_POST['price_in'];
$price_out = $_POST['price_out'];

$sql="UPDATE products
SET name=:name,quantity=:quantity,price_in=:price_in,price_out=:price_out
WHERE productID=:id;";
$stmt = $pdo->prepare($sql);
$stmt->execute([
  'id' => $id,
  'name' => $name,
  'quantity' => $quantity,
  'price_in' => $price_in,
  'price_out' => $price_out
]);


header('Content-Type: application/json');
echo json_encode($email);

$pdo = null;
?>