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

$sql="CREATE OR REPLACE view vImportDetail as
SELECT ID.importID, P.productID as id, P.name, P.price_in as price, ID.quantity, sum(ID.quantity*P.price_in) as total
from importdetail ID
join products P on ID.productID = P.productID
group by ID.importID, P.productID;";
$stmt = $pdo->prepare($sql);
$stmt->execute();

$id = $_POST['id'];
// $id='OD001';
$sql="SELECT id,name,price,quantity,total FROM vImportDetail where importID=:id;";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => $id]);

$rows = $stmt->fetchAll();

header('Content-Type: application/json');
echo json_encode($rows);

$pdo = null;
?>