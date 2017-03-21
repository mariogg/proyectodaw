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
        
    });
 
    //al enviar el formulario
    $(':button').click(function(){
        //información del formulario
        var formData = new FormData($(".formulario")[0]);
       
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
				var datos=$("#nuevo_articulo input")	
				var nombre, kilometros, minutos, inicio, destino, consejos, dificultad, num_reservas, direc, mapa
				nombre=datos[0].value
				archivo=data
				kilometros=datos[1].value
				minutos=parseInt(datos[2].value)
				inicio=datos[3].value
				destino=datos[4].value	
				num_reservas=parseInt(datos[5].value)
				mapa=datos[7].value	
				consejos=$('textarea').val()
				dificultad=$('select').val()	
				
				
				var ruta={
					nombre:nombre,
					kilometros:kilometros,
					minutos:minutos,
					inicio:inicio,
					destino:destino,
					maximo:num_reservas,
					mapa:mapa,
					dificultad:dificultad,
					archivo:data,
					consejos:consejos
				}
				
				$.ajax({
					url: 'rutas/php/panel_admin_registro.php',  
					type: 'POST',					
					data: ruta,		
					success: function(data){                
					   $('#mensaje').html(data)
					   $("#nuevo_articulo input:text").each(function(){
						   $(this).val("")
					   })
					   $('textarea').val("")
			   
					}
				})
				
			}
        })
    })
})
 
 
//comprobamos si el archivo a subir es una imagen
//para visualizarla una vez haya subido
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