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
// $id = 'OD002';

$sql="UPDATE orders SET status = 'Shipping' WHERE (orderID = :id);";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => $id]);

$sql="SELECT COUNT(*) as count FROM trigger_logs 
where message='Product quantity insufficient';";
$stmt = $pdo->prepare($sql);
$stmt->execute();

$count = $stmt->fetch()["count"];


if ($count > 0) {
    $sql="DELETE FROM trigger_logs where message='Product quantity insufficient';";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    header('Content-Type: application/json');
    echo json_encode(false);
} else {
    header('Content-Type: application/json');
    echo json_encode(true);
}

// header('Content-Type: application/json');
// echo json_encode($id);

$pdo = null;
?>


