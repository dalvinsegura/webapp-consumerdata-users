<?php

include'./conexion.php';

$nombre = $_GET["nombre"];
$apellido = $_GET["apellido"];
$correo_electronico = $_GET["correo_electronico"];
$contraseña = $_GET["contraseña"];

$sql = "INSERT INTO register (nombre, apellido, correo_electronico, contraseña) VALUES (?,?,?,?)";

$statement = $dbh->prepare($sql);

    if($statement){
        $statement->bindParam(1, $nombre, PDO::PARAM_STR);
    $statement->bindParam(2, $apellido, PDO::PARAM_STR);
    $statement->bindParam(3, $correo_electronico, PDO::PARAM_STR);
    $statement->bindParam(4, $contraseña, PDO::PARAM_STR);

    $respuesta = $statement->execute();
    header('Location: ../index.html');

    }else{
        echo "error";
    }

echo "Servidor: datos obtenidos del formulario <br>";
echo "Nombre: $nombre <br>";
echo "Apellido: $apellido <br>";
echo "Email: $correo_electronico <br>";
echo "Contraseña: $contraseña <br>";