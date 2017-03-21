<?php
	require_once("clase_rutas.php");
	$nombre=$_POST['nombre'];
	$km=$_POST['kilometros'];
	$minutos=$_POST['minutos'];
	$inicio=$_POST['inicio'];
	$final=$_POST['final'];
	$consejos=$_POST['consejos'];	
	$max_res=$_POST['maximo'];
	$mapa=$_POST['mapa'];
	$dificultad=$_POST['dificultad'];
	$destino="";
	
	if((!empty($_FILES['archivo']['tmp_name']))){
    if(is_uploaded_file($_FILES['archivo']['tmp_name'])){
        if(!is_dir("pdf/"))
            mkdir("pdf/");
        $directorio="pdf/";
        $destino=$directorio.$_FILES['archivo']['name'];
        if(!is_file($destino)){
            move_uploaded_file($_FILES['archivo']['tmp_name'],$destino);
            echo "fichero movido";
        }
        else
            echo "nose ha podido mover el fichero ya existe";
    }
    else
        echo "error no se ha podido subir el fichero";
}else
    echo "no hay ningun fichero que subir";
	
	

	$enlace=new rutas();
	$resultado=$enlace->nuevaRuta($nombre,$km,$minutos,$inicio,$final,$consejos,$dificultad,0,$destino,$max_res,$mapa);
	
	
	echo $resultado;
	
	
?>