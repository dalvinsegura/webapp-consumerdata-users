<?php

include'./conexion.php';

$sql_leer = 'SELECT * FROM register';
$gsent = $dbh->prepare($sql_leer); 
$gsent->execute();

$valor = $gsent->fetchAll();

if($valor){
    $data["data"] = $valor;
    echo json_encode($data);
}else{
    echo "ERROR";
};

?>

