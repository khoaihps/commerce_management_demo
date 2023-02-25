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
SELECT ID.importID, sum(ID.quantity*P.price_in) as total
from importdetail ID
join products P on ID.productID = P.productID
group by ID.importID, P.productID;";
$stmt = $pdo->prepare($sql);
$stmt->execute();

$id = $_POST['id'];
// $id = 'CS001';

$sql="SELECT I.importID as id, I.date, sum(vID.total) as total, I.status
FROM import I
join vImportDetail vID on I.importID = vID.importID
join providers P on I.providerID = P.providerID where P.providerID=:id
GROUP BY I.importID;";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => $id]);

$rows = $stmt->fetchAll();

header('Content-Type: application/json');
echo json_encode($rows);

$pdo = null;
?>