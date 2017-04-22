<?php
    include "clase_guias.php";

    $nick = $_REQUEST['nick'];
    $experiencia = $_REQUEST['experiencia'];
    

    $imagen=$_REQUEST['imagen']['name'];
    $ruta=$_REQUEST['imagen']['tmp_name'];
    $destino="./imagenesGuias/" . $imagen;
    copy($ruta,$destino);

    $resultado = new guias();

    $resutado->annadirGuia($nick,$experiencia,$destino);

    echo json_encode(array($nick,$experiencia,$destino,$resultado));
    
?>