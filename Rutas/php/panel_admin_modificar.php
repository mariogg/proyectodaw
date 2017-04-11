<?php
	require_once("clase_rutas.php");
	
	$id=$_POST['id'];
	$nombre=$_POST['nombre'];
	$km=$_POST['kilometros'];
	$minutos=$_POST['minutos'];
	$inicio=$_POST['inicio'];
	$final=$_POST['destino'];
	$consejos=$_POST['consejos'];
	$pdf=$_POST['dir_pdf'];
	$max_res=$_POST['maximo'];
	$valoracion=$_POST['valoracion'];
	$mapa=$_POST['mapa'];
	$dificultad=$_POST['dificultad'];
	$imagen=$_POST['dir_img'];	
	
	/*
	$id=35;
	$nombre=1;
	$km=2;
	$minutos=3;
	$inicio=4;
	$final=5;
	$consejos=6;
	$pdf=7;
	$max_res=8;
	$valoracion=9;
	$mapa=10;
	$dificultad=11;
	$imagen=12;
	*/
	$enlace=new rutas();
	$resultado=$enlace->modificarRuta($id, $nombre,$km,$minutos,$inicio,$final,$consejos,$dificultad,$valoracion,$pdf,$max_res,$mapa,$imagen);
	echo $resultado;
	
?>