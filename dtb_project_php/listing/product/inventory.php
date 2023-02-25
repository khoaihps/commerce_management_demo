<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$host = 'localhost';
$dbname = 'project';
$user = 'root';
$password = '';

$dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
$options = [
  PDO::ATTR_EMULATE_PREPARES   => false, // turn off emulation mode for "real" prepared statements
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, //turn on errors in the form of exceptions
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, //make the default fetch be an associative array
];
try {
  $pdo = new PDO($dsn, $user, $password, $options);
} catch (\PDOException $e) {
  throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

$sql = "CREATE OR REPLACE view vInventory as
SELECT productID as id,name,price_in,price_out,sold,quantity FROM products;";
$stmt = $pdo->query($sql);

$sql = "SELECT * FROM vInventory;";
$stmt = $pdo->query($sql);

$rows = $stmt->fetchAll();

header('Content-Type: application/json');
echo json_encode($rows);

$pdo = null;
?>