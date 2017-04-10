<?php
	require_once("clase_rutas.php");
	
	$id=$_POST['id'];
	$nombre=$_POST['nombre'];
	$km=$_POST['kilometros'];
	$minutos=$_POST['minutos'];
	$inicio=$_POST['inicio'];
	$final=$_POST['destino'];
	$consejos=$_POST['consejos'];
	$pdf=$_POST['archivo'];
	$max_res=$_POST['maximo'];
	$valoracion=$_POST['valoracion'];
	$mapa=$_POST['mapa'];
	$dificultad=$_POST['dificultad'];
	/*
	$id=26;
	$nombre="Aasdf";
	$km="5.5";
	$minutos=500;
	$inicio="vamos";
	$final="final";
	$consejos="asdfasd fasdfadsf asdfasdf";
	$pdf="asdfasd";
	$max_res=60;
	$valoracion=0;
	$mapa="asdfasdf";
	$dificultad="Alta";*/
	
	$enlace=new rutas();
	$resultado=$enlace->modificarRuta($id, $nombre,$km,$minutos,$inicio,$final,$consejos,$dificultad,$valoracion,$pdf,$max_res,$mapa);
	echo $resultado;
	
?>