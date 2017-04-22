$(document).ready(function() {
    $('#insertar').on('click',function() {
        var nick = $(this).parent().parent().children().children("#nombreGuia").val();
        console.log(nick);
        var experiencia = $(this).parent().parent().children().children("#experiencia").val();
         console.log(experiencia);
        var imagen = $(this).parent().parent().children().children("#fotoGuia").val();
         console.log(imagen);
        
        
        var enviarAjax = {"nick":nick,"experiencia":experiencia,"imagen":imagen};
        console.log(enviarAjax);
        
        $.ajax({
            data:  enviarAjax,
            url:   'Rutas/php/insertarGuias.php',
            type:  'post',
            dataType: 'Json',
            beforeSend: function () {
                $("#resultado").html("Procesando, espere por favor...");
            },
            success:  function (response) {
                $("#resultado").html(response);
            }
            
            
        });
    }); 

    $('#borrar').on('click',function() {
        console.log("Estamos dentro");
    }); 

    $('#modificar').on('click',function() {
        console.log("Estamos dentro");
    }); 
});