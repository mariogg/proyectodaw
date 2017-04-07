<?php
session_start();
include "clase_usuarios.php";

//$nick = $_REQUEST['nick'];
//$password = $_REQUEST['passwd'];


$loguear = new Usuarios();

$resultado = $loguear->comprobarLogueo("Deivid","1234");

echo json_encode(array("asfsd",$resultado));


?>