$(document).ready(function(){   
	
    var fileExtension = "";
    //función que observa los cambios del campo file y obtiene información
    $(':file').change(function(){
        //obtenemos un array con los datos del archivo
        var file = $("#imagen")[0].files[0];
        //obtenemos el nombre del archivo
        var fileName = file.name;
        //obtenemos la extensión del archivo
        fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
        //obtenemos el tamaño del archivo
        var fileSize = file.size;
        //obtenemos el tipo de archivo image/png ejemplo
        var fileType = file.type;
        //mensaje con la información del archivo
        
    })
 modificar()
   
   
})

//comprobamos si el archivo a subir es un pdf
function isImage(extension)
{
    switch(extension.toLowerCase()) 
    {
        case 'pdf':
            return true;
        break;
        default:
            return false;
        break;
    }
}

function modificar(){
	
	$('#edit').click(envioModificar)
	var id=1
	var parametro={
		"id":id
	}
	$.ajax({

		url: 'rutas/php/devolverRuta.php',  
		type: 'POST',
		data:parametro,
		DataType:'Json',		
		success: function(data){  	
			var enlace=$('#Modificar_ruta input')	
			$('#Modificar_ruta textarea').val(data.consejos)	
			$('#Modificar_ruta select').val(data.dificultad)			
			$('#Modificar_ruta input[name=id]').val(data.id)
			$('#Modificar_ruta input[name=nombre]').val(data.nombre)
			$('#Modificar_ruta input[name=kilometros]').val(data.km)
			$('#Modificar_ruta input[name=minutos]').val(data.minutos)
			$('#Modificar_ruta input[name=inicio]').val(data.inicio)
			$('#Modificar_ruta input[name=destino]').val(data.final)
			$('#Modificar_ruta input[name=maximo]').val(data.max_res)
			$('#Modificar_ruta input[name=pdf]').val(data.pdf)
			$('#Modificar_ruta input[name=mapa]').val(data.mapa)
			$('#Modificar_ruta input[name=valoracion]').val(data.valoracion)
			
			console.log(data.consejos)
		}
	})	
}



function envioModificar(){
	console.log("ok")
	var formData = new FormData($(".formulario_edit")[0])       
        //hacemos la petición ajax  
        $.ajax({
            url: 'rutas/php/direccion_imagen.php',  
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
				var datos=$("#Modificar_ruta input")	
				var archivo, id, valoracion, nombre, kilometros, minutos, inicio, destino, consejos, dificultad, num_reservas, direc, mapa
				nombre=datos[2].value
				id=datos[0].value
				valoracion=datos[1].value
				if(data=='Sin Fichero'){
					archivo=datos[9].value
				}else{
					archivo=data
				}					
				kilometros=datos[3].value
				minutos=parseInt(datos[4].value)
				inicio=datos[5].value
				destino=datos[6].value	
				num_reservas=parseInt(datos[7].value)
				mapa=datos[8].value	
				consejos=$('#Modificar_ruta textarea').val()
				dificultad=$('#Modificar_ruta select').val()	
console.log(archivo)				
				var ruta={
					id:id,
					valoracion:valoracion,
					nombre:nombre,
					kilometros:kilometros,
					minutos:minutos,
					inicio:inicio,
					destino:destino,
					maximo:num_reservas,
					mapa:mapa,
					dificultad:dificultad,
					archivo:archivo,
					consejos:consejos
				}
				
				$.ajax({
					url: 'rutas/php/panel_admin_modificar.php',  
					type: 'POST',					
					data: ruta,		
					success: function(data){         
					   $("#Modificar_ruta input:text").each(function(){
						   $(this).val("")
					   })
					   $('#Modificar_ruta textarea').val("")
					   
					}
				})
				
			}
        })
    
}