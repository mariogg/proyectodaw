<?php
session_start();
include "clase_usuarios.php";

$nick = $_REQUEST['nick'];
$password = $_REQUEST['passwd'];


$loguear = new Usuarios();

$resultado = $loguear->comprobarLogueo($nick,$password);

if($resultado == 0) {
    $respuestaNegativa = ["El nickname no existe"];
    echo(json_encode($respuestaNegativa));
    
}else {
    if($nick == $resultado[0] && $password == $resultado[1]) {
        $_SESSION['nickCliente'] = $resultado[0];
        $_SESSION['correoCliente'] = $resultado[2];
        $_SESSION['perfilUsuario'] = $resultado[8];
        echo(json_encode(array($_SESSION['nickCliente'],$_SESSION['correoCliente'],$_SESSION['perfilUsuario'],"AQUI")));
        
    }else {
        $respuestaNegativa = ["La password introducida no es correcta"];
        echo(json_encode($respuestaNegativa));
    }
}




?>