<?php

class Hospedajes {
    public $conexion="";

    function __construct() {
        $this->conexion=new mysqli('localhost','root','','proyectodaw');

        if($this->conexion->connect_error){
            die('Error de Conexion ('.$this->conexion->connect_errno.')'.$this->conexion->connect_error);
        }
    }

    function nuevoHospedaje($nombre,$localidad,$descripcion,$paginaWeb) {
        $mensaje="";

        $consulta="insert into hospedajes (NOMBRE,LOCALIDAD,DESCRIPCION,PAGINA_WEB) values ('$nombre','$localidad','$descripcion','$paginaWeb')";

        if($resultado=$this->conexion->query($consulta)) {
            $mensaje="Se ha introducido el nuevo hospedaje";
        }else {
            $mensaje="No se ha podido introducir el hospedaje";
        }

        return $mensaje;
    }

    function modificarHospedaje($id,$nombre,$localidad,$descripcion,$paginaWeb) {
        $mensaje="";

        $consulta="update hospedajes set NOMBRE='$nombre',LOCALIDAD='$localidad',DESCRIPCION='$descripcion',PAGINA_WEB='$paginaWeb' where ID=$id";

        if($resultado=$this->conexion->query($consulta)) {
            $mensaje="Se ha modificado el hospedaje con ID " $id;
        }else {
            $mensaje="No se ha podido modificar el hospedaje";
        }

        return $mensaje;
    }

    function borrarHospedaje($id) {
        $mensaje="";

        $consulta="delete from hospedajes where ID=$id";

        if($resultado=$this->conexion->query($consulta)) {
            $mensaje="Se ha borrado el hospedaje con ID " .$id;
        }else {
            $mensaje="No se ha podido borrar el hospedaje";
        }

        return $mensaje;
    }

    function seleccionarTodosLosHospedajes() {
        $consulta="select * from hospedajes";
        if($resultado=$this->conexion->query($consulta)){
            return $resultado;
        }
    }

    function seleccionarUnHospedaje($id) {
        $consulta="select * from hospedajes where id=".$id;
        if($resultado=$this->conexion->query($consulta)){
            return $resultado;
        }
    }

    function desconectar() {
        $this->conexion->close();
        return "conexion cerrada";
    }
}

?>