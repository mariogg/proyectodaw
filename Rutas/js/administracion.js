$(document).ready(function(){   

	cargarRutas()
    mostrar()
	ocultar()

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
    $('#registrar').click(function(){
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
				mapa=datos[6].value	
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
					archivo:archivo,
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
 
function mostrar(){
	
	$('#nuevo').click(function(){
			$('#nuevo_articulo').removeClass('ocultar').addClass('mostrar')
	})
} 

function ocultar(){
	$('#oculto').click(function(){
			$('#nuevo_articulo').removeClass('mostrar').addClass('ocultar')
	})
}

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

function cargarRutas(){
	
	$.ajax({
		url: 'rutas/php/panel_admin_verArticulos.php',  
		type: 'POST',
		DataType:'Json',		
		success: function(data){  	
			$('#mensaje2').html("")
			var enlace="<table>"
			for(var x=0;x<data.length;x++){
				enlace+="<tr>"
				enlace += "<td>"+data[x].id+"</td>"+"<td>"+data[x].nombre+"</td>"+"<td>"+data[x].km+"</td>"+"<td>"+data[x].minutos+"</td>"+"<td>"+data[x].inicio+"</td>"+"<td>"+data[x].destino+"</td>"+"<td>"+data[x].consejos+"</td>"+"<td>"+data[x].dificultad+"</td>"+"<td>"+data[x].valoracion+"</td>"+"<td>"+data[x].pdf+"</td>"+"<td>"+data[x].max_res+"</td>"+"<td>"+data[x].mapa+"</td>"
				enlace+="</tr>"
			}
			enlace+="</table>"
            console.log(data[1].id)
        $('#mensaje2').html(enlace)
		 
		}
	})
}