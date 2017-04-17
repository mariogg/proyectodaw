function mostrar(){
	var pueblo=$('#hospedaje').val()
		datos={
			pueblo:pueblo
		}
		 $.ajax({            
            url:'Usuarios/php/mostrarHospedaje.php',
			type:'post',
			data:datos,
			DataType:'Json',                      
            success:function (data) {
                var enlace="<table>"				
				for( var x=0;x<data.length;x++){
					enlace+="<tr>"
					enlace+="<td><button class='borrar' id='"+data[x].id+"'>Borrar</button><button class='modificar' id='"+data[x].id+"'>Modificar</button></td><td>"+data[x].id+"</td><td>"+data[x].nombre+"</td><td>"+data[x].localidad+"</td><td>"+data[x].descripcion+"</td><td>"+data[x].web+"</td>"
					enlace+="</tr>"
				}
				enlace+="</table>"
				$('#mostrar').html(enlace)
				$('.borrar').click(borrar)
				$('.modificar').click(modificar)
				$('#actualizar').click(actualizar)
            }            
        })		
}

function guardarHospedaje(){
	var datos=$('#annadir input')
	var nombre=datos[1].value
	var localidad=$('#localidad').val()
	var direccion=datos[2].value
	var telefono=datos[3].value
	var email=datos[4].value
	var web=datos[5].value
	
	var envio={
		nombre:nombre,
		localidad:localidad,
		direccion:direccion,
		telefono:telefono,
		email:email,
		web:web
	}
	$.ajax({            
		url:'Usuarios/php/guardarHospedaje.php',
		type:'post',
		data:envio,                     
		success:function(respuesta) {	
			$('#mensaje').html("")	
			mostrar()
			$('#mensaje').html(respuesta)	
		}            
	})
}

$(document).ready(function(){
	mostrar()
	$('#hospedaje').change(mostrar)
	$('#guardar').click(guardarHospedaje)
})

function borrar(){
	$('#mensaje').html("")
	var id=$(this).attr("id")
	envia={
		id:id
	}	
	$.ajax({            
		url:'Usuarios/php/borrarHospedaje.php',
		type:'post',
		data:envia,                     
		success:function(respuesta) {
								
			$('#mensaje').html(respuesta)			
			mostrar()
		}            
	})
}

function modificar(){
	$('#mensaje').html("")
	var id=$(this).attr("id")
	envia={
		id:id
	}	
	$.ajax({            
		url:'Usuarios/php/modificarHospedaje.php',
		type:'post',
		DataType:'Json',
		data:envia,                     
		success:function(datos) {			
			console.log(datos[0].id)
			$('#localidad').val(datos[0].localidad)	
			$('#annadir input[name=id]').val(datos[0].id)
			$('#annadir input[name=nombre]').val(datos[0].nombre)
			$('#annadir input[name=direccion]').val(datos[0].direccion)
			$('#annadir input[name=telefono]').val(datos[0].telefono)
			$('#annadir input[name=email]').val(datos[0].email)
			$('#annadir input[name=web]').val(datos[0].web)
			mostrar()
					
		}            
	})
}

function actualizar(){
	var datos=$('#annadir input')
	var id=datos[0].value
	var nombre=datos[1].value
	var localidad=$('#localidad').val()
	var direccion=datos[2].value
	var telefono=datos[3].value
	var email=datos[4].value
	var web=datos[5].value
	
	var envio={
		id:id,
		nombre:nombre,
		localidad:localidad,
		direccion:direccion,
		telefono:telefono,
		email:email,
		web:web
	}
	$.ajax({            
		url:'Usuarios/php/editarHospedaje.php',
		type:'post',
		data:envio,                     
		success:function(respuesta) {	
			$('#mensaje').html("")	
			mostrar()
			$('#mensaje').html(respuesta)	
		}            
	})
}