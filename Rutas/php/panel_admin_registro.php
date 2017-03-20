<?php
	require_once("clase_rutas.php");
	$nombre=$_POST['nombre'];
	$km=$_POST['kilometros'];
	$minutos=$_POST['minutos'];
	$inicio=$_POST['inicio'];
	$final=$_POST['final'];
	$consejos=$_POST['consejos'];
	$pdf=$_POST['pdf'];
	$max_res=$_POST['maximo'];
	$mapa=$_POST['mapa'];
	$dificultad=$_POST['dificultad'];
	
	$enlace=new rutas();
	$resultado=$enlace->nuevaRuta($nombre,$km,$minutos,$inicio,$final,$consejos,$dificultad,0,$pdf,$max_res,$mapa);
	
	
	echo $resultado;
	
	
?>