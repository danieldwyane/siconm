/*
 Evento document ready
 */
$(document).ready(function () {

    //Mascaras de los campos
    $('.telefono').mask('0000-0000000');

    $('#frm_registrarse')[0].reset();

    $.fn.eventos();

});//Fin del evento document ready
/********************************/

/*
 Función donde se declaran todos los eventos
 */
$.fn.eventos = function () {

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
        $.fn.insertUsuario(formData);

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

$.fn.insertUsuario = function (formData) {

    //Enviar los datos del formulario:
    $.ajax({
        url: "../../c_registro/insertUsuario/",
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
            $('#btn_registrarse').css('display', 'none');
            $('#btn_registrarse').parent().append('<i class="icono_carga fa fa-cog fa-spin fa-3x fa-fw"></i>');

        },
        error: function (objeto, quepaso, otroobj) {
            
            //Mostramos el botón btn_establecimiento
            $('#btn_registrarse').parent().children('.icono_carga').remove();
            $('#btn_registrarse').show();

        },
        success: function (data) {

            //Mostramos el botón insertar establecimiento
            $('#btn_registrarse').parent().children('.icono_carga').remove();
            $('#btn_registrarse').show();

            //Evaluamos la respuesta
            if (data['CODIGO_RESPUESTA'] == 1) {
                //Mostramos el mensaje
                $('.modal-body').html('<p>' + data['MENSAJE_RESPUESTA'] + '</p>');
                $('.modal-footer').html('<button class="btn btn-outline" type="button" data-dismiss="modal">OK</button>');
//                $('.modal-footer').html('<button type="button" class="btn btn-success" data-dismiss="modal">Ok</button>');
//                $('.modal-header').html('<h4>Su codigo de cupon es: </h4>');

                //Mostramos la modal
                $('#modal-info').modal('show');

                //Evento cuando se oculte la modal
                $('#modal-info').on('hidden.bs.modal', function (e) {

                    location.reload();
                });

            } else {

                //Mostramos el mensaje
                $('.modal-body').html('<p class="bg-danger"><b>' + data['MENSAJE_RESPUESTA'] + '</b></p>');
                $('.modal-footer').html('<button type="button" class="btn btn-danger" data-dismiss="modal">Ok</button>');
                $('.modal-header').html('<h4>Error <i class="fa fa-exclamation-triangle" aria-hidden="true"></i></h4>');

                //Mostramos la modal
                $('#modal-info').modal('show');

            }//Fin del if

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success
    });//Fin del ajax

}//Fin de la función insertCurso
/******************************/

