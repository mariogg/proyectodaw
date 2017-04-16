<?php
	require_once('clase_rutas.php');
	class envio{
		public $id;
		public $nombre;
		public $km;
		public $minutos;
		public $inicio;
		public $final;
		public $consejos;
		public $pdf;
		public $max_res;
		public $valoracion;
		public $mapa;
		public $dificultad;
		public $imagen;
		
		function __construct($id, $nombre, $km, $minutos, $inicio, $final, $consejos, $pdf, $max_res, $valoracion, $mapa, $dificultad, $imagen){
			$this->id=$id;
			$this->nombre=$nombre;
			$this->km=$km;
			$this->minutos=$minutos;
			$this->inicio=$inicio;
			$this->final=$final;
			$this->consejos=$consejos;
			$this->pdf=$pdf;
			$this->max_res=$max_res;
			$this->valoracion=$valoracion;
			$this->mapa=$mapa;
			$this->dificultad=$dificultad;
			$this->imagen=$imagen;
		}			
	}
	$id=$_POST['id'];
	
	$enlace = new rutas();
	$resultado=$enlace->seleccionarUnaRuta($id);
	while($fila=$resultado->fetch_assoc()){
		$respuesta= new envio($fila['ID'], $fila['NOMBRE'],$fila['KILOMETROS'],$fila['MINUTOS'],$fila['INICIO'],$fila['FINAL'],$fila['CONSEJOS'],$fila['PDF'],$fila['MAX_RESERVAS'],$fila['VALORACION'],$fila['MAPA'],$fila['DIFICULTAD'],$fila['IMAGEN']);
	}
	header('Content-Type: application/json');
	echo json_encode($respuesta);
	$enlace->desconectar();
?>