<?php
include "clase_usuarios.php";


$nick = $_REQUEST['nick'];
$correo = $_REQUEST['correo'];
$dni = $_REQUEST['dni'];
$nombre = $_REQUEST['nombre'];
$apellidos = $_REQUEST['apellidos'];
$fecna = $_REQUEST['fecna'];
$telefono = $_REQUEST['telefono'];
$perfil = $_REQUEST['perfil'];
$password = $_REQUEST['password'];

$enlace = new Usuarios(); 
$enlace->nuevoUsuario($nick,$correo,$dni,$nombre,$apellidos,$fecna,$telefono,$perfil,$password);



echo json_encode(array($nick,$correo,$dni));

?>