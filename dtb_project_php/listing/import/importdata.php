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

$sql="CREATE OR REPLACE view vImportInfo as
SELECT importID as import_id, date as date_ordered,I.providerID as provider_id,provider_name,status
FROM import as I 
JOIN providers as P on I.providerID=P.providerID";
$stmt = $pdo->prepare($sql);
$stmt->execute();

$id = $_POST['id'];

$sql="SELECT * FROM vImportInfo where import_id=:id;";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => $id]);

$rows = $stmt->fetch();

header('Content-Type: application/json');
echo json_encode($rows);

$pdo = null;
?>