//Variables globales
var xhr = null;

/*
 Evento document ready
 */
$(document).ready(function () {

    //Función donde se declaran todos los eventos
    $.fn.eventos();

});/*Fin del document ready*/
/***************************/

/*
 Función donde se declaran todos los eventos
 */
$.fn.eventos = function () {

    /*
     Evento keypres sobre la ventana
     */
//    $(window).keydown(function (evento) {
//
//        //Obtenemos el código de la tecla presionada
//        var codigo_tecla = evento.keyCode || evento.which;
//
//        //Evaluo el código
//        if (codigo_tecla == 13) {
//
//            var formulario = document.getElementById('form_login').checkValidity();
//
//            //Evaluo si el formulario es válido
//            if (formulario == true) {
//
//                //Llamamos la función que valida la cuenta del usuario
//                $.fn.validar_clave();
//
//            } else {
//
//                //Muestro los mensajes de error
//                $('#form_login').validator('validate');
//
//                $.fn.eventos();
//
//            }//Fin del if
//
//        }//Fin del if
//
//    });//Fin del evento keypress
    /**************************/

    /*
     Evento click sobre el botón 'Iniciar Sesion'
     */
    $('.btn_enviar').unbind('click');
    $('.btn_enviar').click(function () {

        var formulario = document.getElementById('login').checkValidity();

        //Evaluo si el formulario es válido
        if (formulario == true) {

            //Llamamos la función que valida la cuenta del usuario
            $.fn.validar_clave();

        } else {

            //Muestro los mensajes de error
            $('#login').validator('validate');

            $.fn.eventos();

        }//Fin del if

    });//Fin del evento click
    /************************/

};//Fin de la función eventos
/***************************/

/*
 Función que valida la contraseña del usuario
 */
$.fn.validar_clave = function () {

    //Evaluamos si existe una petición ajax activa
    if (xhr != null) {

        xhr.abort();

    }//Fin del if

    //Obtenemos la cuenta del usuario
//    var usuario = $('#usuario input[type=usuario]').val();
//    var clave = $('#clave input[type=password]').val();
    
    var usuario = $('#usuario').val();
    var clave = $('#clave').val();
//    clave = btoa(clave);

    xhr = $.ajax({
        url: 'index.php/Ctr_login/validar_clave',
        type: 'POST',
        dataType: 'json',
        data: {
            'clave': clave,
            'usuario': usuario
        },
        beforeSend: function (objeto) {

            //Mostramos el icono de carga
            $('.capa_btn_ingresar').html('');
            $('.capa_btn_ingresar').html('<i class="fa fa-cog fa-spin fa-fw"></i>');
            //$('.fa-cog').show();

            //Limpiamos el mensaje de error
            $('.capa_btn_ingresar .mensaje').html('');

            //Deshabilitamos el botón de ingresar
            $('#ingresar').attr('disabled', true);

        },
        error: function (objeto, quepaso, otroobj) {

            //errores 500 o del sistema
            xhr = null;

            //Habilitamos el botón de ingresar
            $('#ingresar').removeAttr('disabled');

            $('.capa_btn_ingresar .mensaje').append('<span class="fa fa-exclamation-triangle"></span>Error a la hora de autenticar!.');

            //Ocultamos el icono de carga y mostramos nuevamente el botón de ingreaar
            $('.capa_btn_ingresar').html('');
            $('.capa_btn_ingresar').html('<button id="ingresar" type="button" class="btn btn-primary">Ingresar</button><div class="mensaje"></div>');

            $.fn.eventos();

        },
        success: function (data) {

            xhr = null;

            //Habilitamos el botón de ingresar
            $('#ingresar').removeAttr('disabled');

            //Evaluamos
            if (data['CODIGO']) {

                //Llama al formulario chequear orden
                window.location = "form_chequear_oc";

            } else {

                //Ocultamos el icono de carga y mostramos nuevamente el botón de ingreaar
                $('.capa_btn_ingresar').html('');
                $('.capa_btn_ingresar').html('<button id="ingresar" type="button" class="btn btn-primary">Ingresar</button><div class="mensaje"></div>');

                //Mostramos el mensaje de error
                $('.capa_btn_ingresar .mensaje').append('<span class="fa fa-exclamation-triangle"></span>' + data['RESPUESTA']);

            }//Fin del if

            $.fn.eventos();

        }//Fin del success

    });//Fin del ajax

}//Fin de la función
/*******************/