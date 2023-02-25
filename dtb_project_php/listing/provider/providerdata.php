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

$sql="CREATE OR REPLACE view vProviderInfo as
SELECT provider_name as name,providerID as provider_id,email,address,phone_number FROM providers;";
$stmt = $pdo->prepare($sql);
$stmt->execute();

$id = $_POST['id']; 
// $id = 'CS001';
$sql="SELECT * FROM vProviderInfo where provider_id=:id;";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => $id]);

$rows = $stmt->fetch();

header('Content-Type: application/json');
echo json_encode($rows);

$pdo = null;
?>