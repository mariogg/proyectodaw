<?php

class Foro {
    public conexion="";

    function __construct() {
        $this->conexion=new mysqli('localhost','root','','proyectodaw');

        if($this->conexion->connect_error){
            die('Error de Conexion ('.$this->conexion->connect_errno.')'.$this->conexion->connect_error);
        }
    }

    function nuevoForo($idRuta,$idUsuario,$mensaje,$imagen,$fecha) {
        $mensaje = "";

        $consulta = "insert into foro (IDRUTA,IDUSUARIO,MENSAJE,IMAGEN,FECHA) values ($idRuta,$idUsuario,'$mensaje','$imagen','$fecha')";
        if($resultado=$this->conexion->query($consulta)) {
            $mensaje = "Se ha introducido un nuevo foro";
        }else {
            $mensaje = "No se ha podido introducir el foro";
        }

        return $mensaje;
    }

    function modificarForo($id,$idRuta,$idUsuario,$mensaje,$imagen,$fecha) {
        $mensaje="";

        $consulta = "update foro set ID='$id',ID_RUTA=$idRuta,ID_USUARIO=$idUsuario,MENSAJE='$mensaje',IMAGEN='$imagen',FECHA='$fecha' where ID=$id";

        if($respuesta=$this->conexion->query($consulta)) {
            $mensaje="Se ha modificado el foro con ID " . $id;
        }else {
            $mensaje="No se ha podido modificar el foro";
        }

        return $mensaje;
    }

    function borrarForo($id) {
        $mensaje="";
        $consulta = "delete from foro where ID=$id";
        if($respuesta=$this->conexion->query($consulta)) {
            $mensaje="Se ha borrado el foro con ID " . $id;
        }else {
            $mensaje="No se ha podido borrar el foro";
        }
    }

    function seleccionarUnForo($id) {
        $consulta = "select * from foro where ID=$id";
        if($resultado=$this->conexion->query($consulta)) {
            return $resultado;
        }
    }

    function desconectar(){
        $this->conexion->close();
        return "conexion cerrada";
    }
}

?>