<?php

	class rutas{
		public $conexion="";
		
		//contructor y conexion a la base de datos.
		function __construct(){
			$this->conexion=new mysqli('localhost','root','','proyectodaw');
			
			if($this->conexion->connect_error){
                die('Error de Conexion ('.$this->conexion->connect_errno.')'.$this->conexion->connect_error);
            }
		}
		//Para panel del Admin
		function nuevaRuta($nombre,$kilometros,$minutos,$inicio,$final,$consejos,$dificultad,$valoracion,$pdf,$max_res,$mapa){
			$mensaje="";
			$consulta="inser into rutas (NOMBRE, KILOMETROS, MINUTOS, INICIO, FINAL, CONSEJOS, DIFICULTAD, VALORACION, PDF, MAX_RESERVAS, MAPA) values ('".$nombre."',".$kilometros.",".$minutos.",'".$inicio."','".$final."','".$consejos."','".$dificultad."',".$valoracion.",'".$pdf."',".$max_res.",'".$mapa."')";
			if($resultado=$this->conexion->query($consulta)){
				$mensaje="Registrado nueva ruta";
			}else{
				$mensaje"No se ha podido registrar la ruta";
			}
			return $mensaje;
		}
		//Para panel del Admin
		function modificarRuta($id, $nombre,$kilometros,$minutos,$inicio,$final,$consejos,$dificultad,$valoracion,$pdf,$max_res,$mapa){
			$mensaje="";
			$consulta="update rutas set nombre='".$nombre."' kilometros=".$kilometros." minutos=".$minutos." inicio='".$inicio."' final='".$final."' consejos='".$consejos."' dificultad='".$dificultad."' valoracion=".$valoracion." pdf='".$pdf."' max_reserva=".$max_res." mapa='".$mapa."' where id=".$id;
			if($resultado=$this->conexion->query($consulta)){
				$mensaje="Modificada la ruta con id=".$id;
			}else{
				$mensaje="No se ha podido modificar la ruta con id=".$id;
			}
			return $mensaje;
		}
		//Para panel del Admin
		function borrarRuta($id){
			$mensaje="";
			$consulta="delete from rutas where id=".$id;
			if($resultado=$this->conexion->query($consulta)){
				$mensaje="Borrada la ruta con id=".$id;
			}else{
				$mensaje="No se ha podido modificar la ruta con id=".$id;
			}
			return $mensaje;
		}
		//Para la web
		function seleccionarTodasLasRutas(){			
			$consulta="select * from rutas";
			if($resultado=$this->conexion->query($consulta)){
				return $resultado;
			}
		}
		//Para la web
		function seleccionarUnaRuta($id){
			$consulta="select * from rutas where id=".$id;
			if($resultado=$this->conexion->query($consulta)){
				return $resultado;
			}
		}
		
	}

?>