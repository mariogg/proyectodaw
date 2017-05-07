<?php
session_start();
include "clase_usuarios.php";


$password = $_REQUEST['password'];

$nombre = $_REQUEST['nombre'];


$apellidos = $_REQUEST['apellidos'];


$fecna = $_REQUEST['fecna'];


$telefono = $_REQUEST['telefono'];






$enlace = new Usuarios(); 
$visualizar = $enlace->modificarUsuario($_SESSION['ID'],"","","",$nombre,$apellidos,$fecna,$telefono,$password);



echo json_encode($visualizar);

?>