<?php
	class reservas{
		public $conexion="";
		
		//contructor y conexion a la base de datos.
		function __construct(){
			$this->conexion=new mysqli('localhost','root','','proyectodaw');
			
			if($this->conexion->connect_error){
                die('Error de Conexion ('.$this->conexion->connect_errno.')'.$this->conexion->connect_error);
            }
		}
		//pagina web
		function nuevaReserva($id_ruta,$id_usuario,$num_personas,$fecha){
			$mensaje="";
			$consulta="insert into reservas (ID_RUTAS, ID_USUARIO, NUM_PERSONAS, FECHA) VALUES (".$id_ruta.",".$id_usuario.",".$num_personas.",'".$fecha."')";
			if($resultado=$this-conexion->query($consulta)){
				$mensaje="Reserva realizada";
			}else{
				$mensaje="No se ha podido realizar la reserva, intentalo de nuevo";
			}
			return $mensaje;
		}
		//pagina web
		function borrarReserva($id){
			$mensaje="";
			$consulta="delete from reservas where id=".$id;
			if($resultado=$this-conexion->query($consulta)){
				$mensaje="Reserva borrada con exito";
			}else{
				$mensaje="No se ha podido borrar la reserva, intentalo de nuevo";
			}
			return $mensaje;
		}
		//pagina web
		function editarReserva($id,$num_personas,)){
			$mensaje="";
			$consulta="update reservas set NUM_PERSONAS=".$num_personas." where id="$id;
			if($resultado=$this-conexion->query($consulta)){
				$mensaje="Reserva modificada";
			}else{
				$mensaje="No se ha podido modificar la reserva, intentalo de nuevo";
			}
			return $mensaje;
		}
		//pagina web
		function seleccionarTodasReservas(){
			$consulta="select * from reservas";
			if($resultado=$this->conexion->query($consulta)){
				return resultado;
			}
		}
		//pagina web
		function seleccionarReserva($id){
			$consulta="select * from reservas where id=".$id;
			if($resultado=$this->conexion->query($consulta)){
				return resultado;
			}
		}
		
		function desconectar(){
			$this->conexion->close();
			return "conexion cerrada";
		}
	}
	
?>