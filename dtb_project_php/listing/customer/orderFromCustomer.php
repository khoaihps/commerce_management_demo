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

$sql="CREATE OR REPLACE view vOrderDetail as
SELECT OD.orderID, sum(OD.quantity*P.price_out) as total
from orderdetail OD
join products P on OD.productID = P.productID
group by OD.orderID, P.productID;";
$stmt = $pdo->prepare($sql);
$stmt->execute();

$id = $_POST['id'];
// $id = 'CS001';

$sql="SELECT O.orderID as id, O.date, sum(vOD.total) as total, O.status
FROM orders O 
join vOrderDetail vOD on O.orderID = vOD.orderID
join customers C on O.customerID = C.customerID where C.customerID=:id
GROUP BY O.orderID;";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => $id]);

$rows = $stmt->fetchAll();

header('Content-Type: application/json');
echo json_encode($rows);

$pdo = null;
?>