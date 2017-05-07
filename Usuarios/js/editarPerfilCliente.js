$(document).ready(function() {
    
     $("#desplegableUpdate").on('click',function() {
         if($('#divUpdate').hasClass('ocultar2')) {
         $('#divUpdate').removeClass('ocultar2');
         $('#divUpdate').addClass('mostrar2');
         }else if($('#divUpdate').hasClass('mostrar2')) {
              $('#divUpdate').removeClass('mostrar2');
         $('#divUpdate').addClass('ocultar2');
         }
     });
    
     $('#update').on('click',function() {
         
       console.log("Dentro de la función");

        var nombre = $(this).parent().parent().children().children("#nombre").val();
         console.log(nombre);
        var apellidos = $(this).parent().parent().children().children("#apellidos").val();

        var fecna = $(this).parent().parent().children().children("#fecna").val();

        var telefono = $(this).parent().parent().children().children("#telefono").val();

        

        var password = $(this).parent().parent().children().children("#passwd").val();
         
       
         
          var enviarAjax = {"nombre":nombre,"apellidos":apellidos,"fecna":fecna,"telefono":telefono,"password":password};
         
          console.log("Esto se va a enviar: " + enviarAjax.nombre);
        
         $.ajax({
            data:  enviarAjax,
            url:   'Usuarios/php/editarPerfilCliente.php',
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
});