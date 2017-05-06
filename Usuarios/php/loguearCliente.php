<?php

include "clase_usuarios.php";

class ObjetoLoguin {
    public $nick = "";
    public $correo = "";
    public $perfil = "";
    
    
        function __construct($nick,$correo,$perfil) {
            $this->nick = $nick;
            $this->correo = $correo;
            $this->perfil = $perfil;
        }
    
        
}

$nick = $_REQUEST['nick'];
$password = $_REQUEST['passwd'];


$loguear = new Usuarios();

$resultado = $loguear->comprobarLogueo($nick,$password);

if($resultado == 0) {
    $respuestaNegativa = ["El nickname no existe"];
    echo(json_encode($respuestaNegativa));
    
}else {
    if($nick == $resultado[0] && $password == $resultado[1]) {
	session_start();
        $_SESSION['nick'] = $resultado[0];
        $_SESSION['correo'] = $resultado[2];
        $_SESSION['perfilUsuario'] = $resultado[8];
        
        $respuesta = new ObjetoLoguin($_SESSION["nick"],$_SESSION["correo"],$_SESSION["perfilUsuario"]);
        header('Content-type: application/json');
        echo(json_encode($respuesta));
        
    }else {
        $respuestaNegativa = ["La password introducida no es correcta"];
        echo(json_encode($respuestaNegativa));
    }
}







?>