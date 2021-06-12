<?php

include'conexion.php';

$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$correo_electronico = $_POST["correo_electronico"];
$contraseña = $_POST["contraseña"];

$sql = "INSERT INTO register (nombre, apellido, correo_electronico, contraseña) VALUES (?,?,?,?)";

$statement = $dbh->prepare($sql);

    $statement->bindParam(1, $nombre, PDO::PARAM_STR);
    $statement->bindParam(2, $apellido, PDO::PARAM_STR);
    $statement->bindParam(3, $correo_electronico, PDO::PARAM_STR);
    $statement->bindParam(4, $contraseña, PDO::PARAM_STR);

    $respuesta = $statement->execute();

echo "Servidor: datos obtenidos del formulario <br>";
echo "Nombre: $nombre <br>";
echo "Apellido: $apellido <br>";
echo "Email: $correo_electronico <br>";
echo "Contraseña: $contraseña <br>";