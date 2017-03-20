var fileExtension = "";
var fileName="";

$(document).ready(function(){	
	$("#registro").click(recogerDatos)
	 
    //función que observa los cambios del campo file y obtiene información
    $(':file').change(function()
    {
        //obtenemos un array con los datos del archivo
        var file = $("#imagen")[0].files[0];
        //obtenemos el nombre del archivo
        fileName = file.name;
        //obtenemos la extensión del archivo
        fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
        //obtenemos el tamaño del archivo
        var fileSize = file.size;
        //obtenemos el tipo de archivo image/png ejemplo
        var fileType = file.type;
        //mensaje con la información del archivo
        showMessage("<span class='info'>Archivo para subir: "+fileName+", peso total: "+fileSize+" bytes.</span>");
    });
})

function datos(direc){	 
	var datos=$("#nuevo_articulo input")	
	var nombre, kilometros, minutos, inicio, destino, consejos, dificultad, num_reservas, direc, mapa
	nombre=datos[0].value
	kilometros=datos[1].value
	minutos=parseInt(datos[2].value)
	inicio=datos[3].value
	destino=datos[4].value
	num_reservas=parseInt(datos[5].value)
	mapa=datos[7].value
	archivo=direc,
	consejos=$('textarea').val()
	dificultad=$('select').val()
	var ruta={
		nombre:nombre,
		kilometros:kilometros,
		minutos:minutos,
		inicio:inicio,
		final:destino,
		maximo:num_reservas,
		mapa:mapa,
		dificultad:dificultad,
		archivo:archivo,
		consejos:consejos
	}
	
	$.ajax({
		
		type:"POST",		
		//dataType:"json",        
		url:"Rutas/php/panel_admin_registro.php",		
		data:ruta,		
		success:function(data){
			$("#mensaje").html(data)
		}
		
	})
	
}

function recogerDatos(){
	 var formData = new FormData($(".formulario")[0]);
	 $.ajax({
		url: 'Rutas/php/direccion_imagen.php',  
		type: 'POST',
		// Form data
		//datos del formulario
		data: formData,
		//necesario para subir archivos via ajax
		cache: false,
		contentType: false,
		processData: false,
		
		//una vez finalizado correctamente
		success: function(data){
			document.write(data)
		}
}

