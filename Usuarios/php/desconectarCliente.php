<?php
session_start();
if($_REQUEST['desconectar'] == "Desconectar") {
    session_destroy();
    echo("Eliminado");
}




?>