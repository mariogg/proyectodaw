<?php
	require_once("clase_rutas.php");
	$id=$_POST['id'];
	$nombre=$_POST['nombre'];
	$km=$_POST['kilometros'];
	$minutos=$_POST['minutos'];
	$inicio=$_POST['inicio'];
	$final=$_POST['final'];
	$consejos=$_POST['consejos'];
	$pdf=$_POST['pdf'];
	$max_res=$_POST['maximo'];
	$valoracion=$_POST['valoracion'];
	$mapa=$_POST['mapa'];
	$dificultad=$_POST['dificultad'];
	
	$enlace=new rutas();
	$resultado=$enlace->modificarRuta($id,$nombre,$km,$minutos,$inicio,$final,$consejos,$dificultad,$valoracion,$pdf,$max_res,$mapa);
	echo $resultado;
	
?>