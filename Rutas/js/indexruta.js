var session = false
function noExcursion(date){
var day = date.getDay();
// aqui indicamos el numero correspondiente a los dias que ha de bloquearse (el 0 es Domingo, 1 Lunes, etc...)
return [(day != 0 && day != 1 && day != 2 && day != 3 && day != 4 && day != 5), ''];
}

function cargarRutasFecha(){
	$('#localidad_busqueda').val("Todas")
	var fecha = $('#datepicker').val()
	console.log("def"+fecha)
	if (fecha == ""){
		
	}else{	
	
		var fechax=fecha.split("/")				
		var anio=fechax[2]
		var mes=fechax[1]
		var dia=fechax[0]			
		var fecha2=anio+'/'+mes+'/'+dia
		var dato={
			fecha:fecha2
		}
		
		$.ajax({
			data:dato,
			url: 'rutas/php/busqueda_fecha.php', 
			type: 'POST',
			DataType:'Json',	
			success: function(data){ 
			
				if(data[0].nombre=="vacio"){
						alert("No Hay rutas para esa fecha");
				}else{			
					$('#lista').html("")
					enlace="<select id='listado'>"
					for(var x=0;x<data.length;x++){
										
						if(x==0){
							enlace+="<option selected='selected'>"					
						}else{
							enlace+="<option>"
						}				
						enlace +=data[x].nombre
						enlace+="</option>"
					}
					enlace+="</select>"   			
					$('#lista').html(enlace)		
						var ruta=$('#listado').val()				
						CargarRutaInicio(ruta)
								
				}
			
			}
		})
	}
}

function cargarRutasLocalidad(){
	$('#datepicker').val("")
	console.log("dentro busqueda local")
	var local=$('#localidad_busqueda').val()
	var dato={
		localidad:local
	}
	$.ajax({
		data:dato,
		url:'rutas/php/localidad_ruta.php',
		type:'POST',
		DataType:'Json',
		success:function(data){
			$('#lista').html("")
			enlace="<select id='listado'>"
			for(var x=0;x<data.length;x++){
								
				if(x==0){
					enlace+="<option selected='selected'>"					
				}else{
					enlace+="<option>"
				}				
				enlace +=data[x].nombre
				enlace+="</option>"
			}
			enlace+="</select>"   			
			$('#lista').html(enlace)		
			var ruta=$('#listado').val()
				
			CargarRutaInicio(ruta)
		}
	})
}

function comprobarSession(){
	$.ajax({
		url: 'usuarios/php/clase_sessiones.php',
		type: 'POST',
		DataType:'Json',		
		success: function(data){ 
		
		if (data.usuario==""){
			console.log("no hay sesion")
		}else{
			console.log("Session: "+data.usuario)
		}
			
		}
	})
}

$(document).ready(function(){
	comprobarSession()
	
	$('#localidad_busqueda').change(cargarRutasLocalidad)
		var hoy= new Date()
			$.datepicker.regional['es'] = {
				closeText: 'Cerrar',
				prevText: '< Ant',
				nextText: 'Sig >',
				currentText: 'Hoy',
				monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
				monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
				dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
				dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
				dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
				weekHeader: 'Sm',
				dateFormat: 'dd/mm/yy',
				firstDay: 1,
				isRTL: false,
				showMonthAfterYear: false,
				yearSuffix: ''
			 }
			$.datepicker.setDefaults($.datepicker.regional['es'])
			$("#datepicker").datepicker({
				minDate: hoy,
				changeMonth:true,
				beforeShowDay: noExcursion,
			})
			$('#datepicker').change(cargarRutasFecha)
		$( "#tabs" ).tabs({
			collapsible: true
	})	
	cargarRutas()
	//CargarRutaInicio()
	
  
})

function cargarRutas(){	
	
	$.ajax({
		url: 'rutas/php/panel_admin_verRutas.php',  

		type: 'POST',
		DataType:'Json',		
		success: function(data){ 
			
			$('#lista').html("")
			enlace="<select id='listado'>"
			for(var x=0;x<data.length;x++){
								
				if(x==0){
					enlace+="<option selected='selected'>"					
				}else{
					enlace+="<option>"
				}				
				enlace +=data[x].nombre
				enlace+="</option>"
			}
			enlace+="</select>"   			
			$('#lista').html(enlace)		
			var ruta=$('#listado').val()
				
			CargarRutaInicio(ruta)
			$('#lista').change(function(){	
			var ruta=$('#listado').val()				
			CargarRutaInicio(ruta)
								
			})			
		}		
	})
}

function CargarRutaInicio(ruta){	
	dato={
		ruta:ruta
	}
	$.ajax({
		data:dato,
		url: 'rutas/php/cargar_ruta_valor.php',  
		type: 'POST',
		DataType:'Json',		
		success: function(data){ 
			var id=data[0].id
				
			var tiempo=calcularTiempo(data[0].minutos)
			$('#id_ruta').val(data[0].id)
			$('#nombre_ruta').html(data[0].nombre)
			$('#localidad').html(data[0].localidad)
			$('#Tiempo').html(tiempo)
			$('#Distancia').html(data[0].km)
			$('#valoracion').html(data[0].valoracion)
			$('#Dificultad').html(data[0].dificultad)
			$('#max_personas').html(data[0].max_res)
			$('#PDF').html(data[0].pdf)
			$('#descripcion').html(data[0].consejos)
			$('#mapa').html(data[0].mapa)	
			dato={
				id:id
			}
			$.ajax({
				data:dato,
				url: 'rutas/php/calendario_una_ruta.php',
				type: 'POST',
				DataType: 'Json',
				success:function(data){
									
					$('#fechas_ruta').html("")
					enlace="<select id='listado_rutas'>"
					for(var x=0;x<data.length;x++){
						fecha=data[x].fecha2					
						fechax=fecha.split("-")			
						anio=fechax[0]
						mes=fechax[1]
						dia=fechax[2]			
						fecha2=dia+'/'+mes+'/'+anio					
						if(x==0){
							enlace+="<option selected='selected'>"					
						}else{
							enlace+="<option>"
						}				
						enlace +=fecha2
						enlace+="</option>"
					}
					enlace+="</select>"   			
					$('#fechas_ruta').html(enlace)
					var consulta=$('#datepicker').val()
					console.log(consulta)
					if(consulta!=undefined){
						console.log("dentro")
						$('#listado_rutas').val(consulta)
					}
				}
			})
		}
	})	
}

function calcularTiempo(minutos){
	var horas=Math.trunc(minutos/60);
	var minuto=minutos-horas*60;

	return (horas+"H "+minuto+"'")
	
}


