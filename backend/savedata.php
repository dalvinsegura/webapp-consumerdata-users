<?php

include'./conexion.php';

$sql = "INSERT INTO register (nombre, apellido, correo_electronico, contraseña) VALUES (?,?,?,?)";
$statement = $dbh->prepare($sql);


$usuarios = json_decode($_POST["json"]);
// var_dump($usuarios->{"data"}[0]->{"nombre"});

$respuesta = false;

foreach($usuarios->{"data"} as $usuario){
    $statement->bindParam(1, $usuario->{"nombre"}, PDO::PARAM_STR);
    $statement->bindParam(2, $usuario->{"apellido"}, PDO::PARAM_STR);
    $statement->bindParam(3, $usuario->{"correo_electronico"}, PDO::PARAM_STR);
    $statement->bindParam(4, $usuario->{"contraseña"}, PDO::PARAM_STR);

    $respuesta = $statement->execute();
};

echo $respuesta;
?>