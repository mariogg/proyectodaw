

$(document).ready(function(){
	$("#registro").click(recogerDatos)
})

function recogerDatos(){

	var datos=$("#nuevo_articulo input")	
	var nombre, kilometros, minutos, inicio, destino, consejos, dificultad, num_reservas, direc, mapa
	nombre=datos[0].value
	kilometros=datos[1].value
	minutos=parseInt(datos[2].value)
	inicio=datos[3].value
	destino=datos[4].value
	num_reservas=parseInt(datos[5].value)
	direc=datos[6].value
	mapa=datos[7].value
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
		pdf:direc,
		consejos:consejos
	}
	
	$.ajax({
		
		method:"POST",		
		//dataType:"json",
		url:"Rutas/php/panel_admin_registro.php",		
		data:ruta,
		success:function(data){
			$("#mensaje").html(data)
		}
		
	})
}