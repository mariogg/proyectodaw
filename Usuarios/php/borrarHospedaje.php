<?php
	include 'clase_hospedajes.php';
	$nombre=$_POST['id'];	
	
	$enlace = new hospedaje();	
	$resultado=$enlace->borrarHospedaje($id);		
	echo $resultado;
	$enlace->desconectar();
	
	
?>