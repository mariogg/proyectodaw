

$(document).ready(function() {



    $('#loguearse').on('click',function() {

        var nick = $(this).parent().parent().children().children("#usuario").val();
        var password = $(this).parent().parent().children().children("#passwd").val();
        
        var enviarAjax = {"nick":nick,"passwd":password};
        
         $.ajax({
            data:  enviarAjax,
            url:   'Usuarios/php/loguearCliente.php',
            type:  'post',
             
            beforeSend: function () {
                $("#resultado").html("Procesando, espere por favor...");
            },
            success:  function (response) {
                $("#resultado").html(response);
            }
            
            
        });


    });



    $('#insertar').on('click',function() {


        var nick = $(this).parent().parent().children().children("#usuario").val();

        var correo = $(this).parent().parent().children().children("#correo").val();

        var nombre = $(this).parent().parent().children().children("#nombre").val();

        var apellidos = $(this).parent().parent().children().children("#apellidos").val();

        var fecna = $(this).parent().parent().children().children("#fecna").val();

        var telefono = $(this).parent().parent().children().children("#telefono").val();

        var perfil = $(this).parent().parent().children().children("#perfil").val();

        var dni = $(this).parent().parent().children().children("#dni").val();

        var password = $(this).parent().parent().children().children("#passwd").val();

        var enviarAjax = {"nick":nick,"correo":correo,"dni":dni,"nombre":nombre,"apellidos":apellidos,"fecna":fecna,"telefono":telefono,"perfil":perfil,"password":password};


        $.ajax({
            data:  enviarAjax,
            url:   'Usuarios/php/insertarCliente.php',
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
    $('#desconectar').on('click',function() {
        var desconectar = {"desconectar":$(this).val()};
        
        console.log(desconectar);
        
        $.ajax({
            data:  desconectar,
            url:   'Usuarios/php/desconectarCliente.php',
            type:  'post',
            beforeSend: function () {
                $("#resultado").html("Procesando, espere por favor...");
            },
            success:  function (response) {
                $("#resultado").html(response);
            }
            
            
        });
        
    });

});

