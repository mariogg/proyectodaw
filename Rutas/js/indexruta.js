$(document).ready(function(){	  
    $( "#tabs" ).tabs({
		collapsible: true
	})
	
	CargarRutaInicio()
	
  
})

function CargarRutaInicio(){	
	$.ajax({
		url: 'rutas/php/cargar_ruta_valor.php',  
		type: 'POST',
		DataType:'Json',		
		success: function(data){  	
			var tiempo=calcularTiempo(data[0].minutos)		
			/*enlace="<p id='titulo_ruta'>"+data[0].nombre+"<span id='valoracion'>"+data[0].valoracion+"</span></p>"
			enlace+="<li>Localidad: "+data[0].localidad+"</li><li>Distancia: "+data[0].km+" km</li><li> Tiempo: "+tiempo+"</li>"
			enlace+="<li>Dificultad: "+data[0].dificultad+"</li><li>Personas Máximas: "+data[0].max_res+"</li><li> Tiempo: "+data[0].pdf+"</li>"
			enlace+="<li><input type='submit' name='Reserva' value='Reservar'></input></li>"
			*/
			
			$('#nombre_ruta').html(data[0].nombre)
			$('#localidad').html(data[0].localidad)
			$('#Tiempo').html(tiempo)
			$('#Distancia').html(data[0].km)
			$('#valoracion').html(data[0].valoracion)
			$('#Dificultad').html(data[0].dificultad)
			$('#max_personas').html(data[0].max_res)
			$('#PDF').html(data[0].pdf)
			$('#mapa').html(data[0].mapa)
			$('input:submit').click(popUp)
			
			
		}
	})	
}

function calcularTiempo(minutos){
	var horas=Math.trunc(minutos/60);
	var minuto=minutos-horas*60;

	return (horas+"H "+minuto+"'")
	
}

function popUp() {
	var URL="popUpReserva.html"	
	window.open(URL, 'Nombre de la ventana', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=600,height=600,left = 390,top = 250');
}