/*
 Evento document ready
 */
$(document).ready(function () {

    $.fn.data_inicial();

    $.fn.eventos();

});//Fin del evento document ready
/********************************/

/*
 Función donde se declaran todos los eventos
 */
$.fn.eventos = function () {

    /**Cargar libreria select2 en el select**/
    $("#com_fis").select2({
        placeholder: "Seleccione",
        theme: "classic"
    });

    /**Cargar libreria mask en el input**/
    $("#cedula").mask("00000000");
    $("#telefono").mask("(0000) 000-0000");

    /*
     Evento click sobre el botón #crear meta
     */
    $('#btn_registrarse').unbind('click');
    $('#btn_registrarse').click(function () {

        var formulario = document.getElementById('frm_registrarse').checkValidity();

        //Evaluo si el formulario es válido
        if (formulario == true) {

            var formData = new FormData($("#frm_registrarse")[0]);

            //Llamamos la Funcion para insertarle los datos
            $.fn.crear_usuario(formData);

        } else {

            $('#frm_registrarse').validator('destroy');
            //Muestro los mensajes de error
            $('#frm_registrarse').validator('validate');

            $.fn.eventos();

        }//Fin del if

    });//Fin del evento click
    /***********************/


}//Fin de la función $.fn.eventos
/*******************************/

$.fn.data_inicial = function () {

    $.ajax({
        url: "<?php echo base_url() ?>index.php/rem/c_usuario/data_inicial/",
        type: 'POST',
        dataType: 'json',
        success: function (data) {

            $(data['com_fis']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#com_fis').append('<option value="' + elemento['cod_sede'] + '">' + elemento['descripcion'] + '</option>');

            });//Fin del each	

        }
    });

}

$.fn.crear_usuario = function (formData) {

//Enviar los datos del formulario:
    $.ajax({
        url: "<?php echo base_url() ?>index.php/rem/c_usuario/crear_usuario/",
        type: "POST",
        cache: false,
        contentType: false,
        processData: false,
        accepts: "application/json",
        dataType: 'json',
        data: formData,
        beforeSend: function (objeto) {

            //Limpiamos el contenido del modal y los botones
            $('.modal-body').html('');
            $('.modal-footer').html('');
            $('.modal-header').html('');
            //Mostramos el icono de carga
            $('#btn_datos_basicos').css('display', 'none');
            $('#btn_datos_basicos').parent().append('<i class="icono_carga fa fa-cog fa-spin fa-3x fa-fw"></i>');
        },
        error: function (objeto, quepaso, otroobj) {

            //Mostramos el botón btn_establecimiento
            $('#btn_datos_basicos').parent().children('.icono_carga').remove();
            $('#btn_datos_basicos').show();
        },
        success: function (data) {

            //Evaluamos la respuesta
            if (data['codigo_respuesta'] == 1) {
                //Mostramos el mensaje
                $('.modal-body').html('<p class="bg-success"><b>' + data['mensaje_respuesta'] + '</b> <i class="fa fa-check-square" aria-hidden="true"></i></p>');
                $('.modal-footer').html('<button class="btn btn-danger" type="button" data-dismiss="modal">OK</button>');
                $('.modal-header').text('Creación Usuario');

                //Mostramos la modal
                $('.modal').modal('show');

                //Para mantener el mensaje modal por algunos segundos 
                setTimeout(function () {
                    $('.modal').modal('hide');
                    location.reload();
                }, 2000);

            } else {

                //Mostramos el mensaje
                $('.modal-body').html('<p class="bg-danger"><b>' + data['mensaje_respuesta'] + '</b> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i></p>');
                $('.modal-footer').html('<button type="button" class="btn btn-danger" data-dismiss="modal">Ok</button>');
                $('.modal-header').html('Creación Usuario');

                //Mostramos la modal
                $('.modal').modal('show');

            }//Fin del if

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }
    });

}