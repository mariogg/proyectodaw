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
					enlace+="<td><button class='borrar' id='"+data[x].id+"'>Borrar</button></td><td>"+data[x].id+"</td><td>"+data[x].nombre+"</td><td>"+data[x].localidad+"</td><td>"+data[x].descripcion+"</td><td>"+data[x].web+"</td>"
					enlace+="</tr>"
				}
				enlace+="</table>"
				$('#mostrar').html(enlace)
				$('.borrar').click(borrar)
            }            
        })		
}

function guardarHospedaje(){
	var datos=$('#annadir input')
	var nombre=datos[1].value
	var localidad=$('#localidad').val()
	var direccion=datos[2].value
	var telefono=datos[3].value
	var telefono2=datos[4].value
	var email=datos[5].value
	var web=datos[6].value
	
	var envio={
		nombre:nombre,
		localidad:localidad,
		direccion:direccion,
		telefono:telefono,
		telefono2:telefono2,
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