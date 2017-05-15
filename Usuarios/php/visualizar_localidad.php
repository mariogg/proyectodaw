<?php

include 'clase_hospedajes.php';
	$datos=[];
	class hospe{
		public $id="";
		public $nombre="";
		public $localidad="";
		public $descripcion="";
		public $web="";
		
		function __construct($id, $nombre,$localidad,$descripcion,$web){
			$this->id=$id;
			$this->nombre=$nombre;
			$this->localidad=$localidad;
			$this->descripcion=$descripcion;
			$this->web=$web;
		}
	}

$localidad = $_POST['localidad'];

$enlace = new hospedaje();

$resultado=$enlace->mostrarHospedaje($localidad);
			while($fila=$resultado->fetch_assoc()){	
				$media=new hospe($fila['ID'],$fila['NOMBRE'],$fila['LOCALIDAD'],$fila['DESCRIPCION'],$fila['PAGINA_WEB']);
				array_push($datos, $media);
			}
		


if($datos!=""){
		header('Content-Type: application/json');
		echo json_encode($datos);
	}
	else{
		echo 'No hay Datos';
	}

?>