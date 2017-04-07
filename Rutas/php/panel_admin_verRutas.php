<?php
	require_once("clase_rutas.php");
	$enlace=new rutas();
	$datos=array();
	$resultado=$enlace->seleccionarTodasLasRutas();
	class ruta{
		public $id="";
		public $nombre="";
		public $km="";
		public $minutos="";
		public $inicio="";
		public $destino="";
		public $consejos="";
		public $pdf="";
		public $max_res="";
		public $valoracion="";
		public $mapa="";
		public $dificultad="";
		
		function __construct($id, $nombre,$kilometros,$minutos,$inicio,$final,$consejos,$dificultad,$valoracion,$pdf,$max_res,$mapa){
			$this->id=$id;
			$this->nombre=$nombre;
			$this->km=$kilometros;
			$this->minutos=$minutos;
			$this->inicio=$inicio;
			$this->destino=$final;
			$this->consejos=$consejos;
			$this->pdf=$pdf;
			$this->max_res=$max_res;
			$this->valoracion=$valoracion;
			$this->mapa=$mapa;
			$this->dificultad=$dificultad;
		}
	}
	
	while($fila=$resultado->fetch_assoc()){	
		$enlace=new ruta($fila['ID'],$fila['NOMBRE'],$fila['KILOMETROS'],$fila['MINUTOS'],$fila['INICIO'],$fila['FINAL'],$fila['CONSEJOS'],$fila['DIFICULTAD'],$fila['VALORACION'],$fila['PDF'],$fila['MAX_RESERVAS'],$fila['PDF']/*$fila['MAPA']*/);
		array_push($datos, $enlace);
	}	
	
	if($datos!=""){
		header('Content-Type: application/json');
		echo json_encode($datos);
	}
	else{
		echo 'No hay Datos';
	}
	
	
	
?>