
$(document).ready(function() {
    cargarDatos();
    var fileExtension="";
    $("insertGuia :file").change(function() {
        var file = $("#fotoGuia")[0].files[0];
        var fileName = file.name;
        fileExtension = fileName.substring(fileName.lastIndexOf(".")+1);
    });
    $('#insertar').on('click',function() {
        var nick = $(this).parent().parent().children().children("#nombreGuia").val();
        console.log(nick);
        var experiencia = $(this).parent().parent().children().children("#experiencia").val();
        console.log(experiencia);
        var imagen = $(this).parent().parent().children().children("#fotoGuia").val();
        console.log(imagen);




        var enviarAjax = {"nick":nick,"experiencia":experiencia,"imagen":imagen};
        console.log(enviarAjax);

        var formData = new FormData($(".formulario")[0]);

        $.ajax({

            url:   'Rutas/php/direccion_imagen.php',
            type:  'post',
            data: 'formData',
            cache: false,
            contentType: false,
            processData: false,
            beforeSend: function () {
                $("#resultado").html("Procesando, espere por favor...");
            },
            success:  function (response) {



                console.log(response);
            }


        });
    }); 

    $('#borrar').on('click',function() {
        console.log("Estamos dentro");
    }); 

    $('#modificar').on('click',function() {
        console.log("Estamos dentro");
    }); 

    function isImage(extension){
        switch(extension.toLowerCase()) 
        {
            case 'jpg': case 'gif': case 'png': case 'jpeg':
                return true;
                break;
            default:
                return false;
                break;
        }
    }
    function cargarDatos() {
        $.ajax({

            url:   'Rutas/php/listaUsuarios.php',
            type:  'post',

            beforeSend: function () {
                $("#resultado").html("Procesando, espere por favor...");
            },
            success:  function (response) {
                $("#listaUsuarios").innerHTML = response;
                console.log(response);
            }
        });
    }
});