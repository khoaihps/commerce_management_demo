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

$sql="CREATE OR REPLACE view vOrderInfo as
SELECT orderID as order_id, date as date_ordered,C.customerID as customer_id,customer_name,status
FROM orders as O
JOIN customers as C on O.customerID=C.customerID;";
$stmt = $pdo->prepare($sql);
$stmt->execute();

$id = $_POST['id'];

$sql="SELECT * FROM vOrderInfo where order_id=:id;";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => $id]);

$rows = $stmt->fetch();

header('Content-Type: application/json');
echo json_encode($rows);

$pdo = null;
?>