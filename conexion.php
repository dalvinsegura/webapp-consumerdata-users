<?php
$link = 'mysql:host=localhost;dbname=consumerdata';
$user = 'root';
$pass = '';

try {
    $dbh = new PDO($link, $user, $pass);
    // echo "CONECTADO";

} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}

?>

