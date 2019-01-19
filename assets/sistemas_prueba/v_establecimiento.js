/*
 Evento document ready
 */
$(document).ready(function () {

    //Mascaras de los campos
//                $('#cedula').mask('00000000');

    $('#frm_establecimiento')[0].reset();

    $.fn.establecimiento();

    $.fn.eventos();

});//Fin del evento document ready
/********************************/

/*
 Función donde se declaran todos los eventos
 */
$.fn.eventos = function () {

    /*
     Evento click sobre el botón #btn_establecimiento
     */
    $('#btn_establecimiento').unbind('click');
    $('#btn_establecimiento').click(function () {

        var formulario = document.getElementById('frm_establecimiento').checkValidity();

        //Evaluo si el formulario es válido
        if (formulario == true) {

            var formData = new FormData($("#frm_establecimiento")[0]);

            //Llamamos la Funcion para insertarle los datos
            $.fn.insertEstablecimiento(formData);

        } else {

            //Muestro los mensajes de error
            $('#frm_establecimiento').validator('validate');

            $.fn.eventos();

        }//Fin del if

    });//Fin del evento click
    /***********************/

    $("#establecimiento").unbind("change");
    $("#establecimiento").change(function () {

        var id_establecimiento = $(this).val();

        $.fn.tipo_establecimiento(id_establecimiento);

    });

}//Fin de la función $.fn.eventos
/*******************************/

$.fn.insertEstablecimiento = function (formData) {
    //Enviar los datos del formulario:
    $.ajax({
        url: "<?php echo base_url() ?>index.php/c_registro/insertEstablecimiento/",
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
            $('#btn_establecimiento').css('display', 'none');
            $('#btn_establecimiento').parent().append('<i class="icono_carga fa fa-cog fa-spin fa-3x fa-fw"></i>');

        },
        error: function (objeto, quepaso, otroobj) {
            
            //Mostramos el botón btn_establecimiento
            $('#btn_establecimiento').parent().children('.icono_carga').remove();
            $('#btn_establecimiento').show();

        },
        success: function (data) {

            //Mostramos el botón insertar establecimiento
            $('#btn_establecimiento').parent().children('.icono_carga').remove();
            $('#btn_establecimiento').show();

            //Evaluamos la respuesta
            if (data['CODIGO_RESPUESTA'] == 1) {
                //Mostramos el mensaje
                $('.modal-body').html('<p>' + data['MENSAJE_RESPUESTA'] + '</p>');
                $('.modal-footer').html('<button class="btn btn-outline" type="button" data-dismiss="modal">OK</button>');
//                $('.modal-footer').html('<button type="button" class="btn btn-success" data-dismiss="modal">Ok</button>');
                $('.modal-header').html('<h4>Your coupon code is: </h4>');

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
                $('#modal').modal('show');

            }//Fin del if

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success
    });//Fin del ajax

}//Fin de la función insertCurso
/******************************/

/*
 Función que muestra los tipos de evaluacion y periodos.
 */
$.fn.establecimiento = function () {

    $.ajax({
        url: "<?php echo base_url() ?>index.php/c_registro/establecimiento/",
        type: 'POST',
        dataType: 'json',
        beforeSend: function (objeto) {

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            //Recorremos el array
            $(data).each(function (index, elemento) {

                //Mostramos las opciones
                $('#establecimiento').append('<option value="' + elemento['id_establecimiento'] + '">' + elemento['desc_establecimiento'] + '</option>');

            });//Fin del each		

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success

    });//Fin del ajax

}//Fin de la función
/******************/

/*
 Función que muestra los tipos de evaluacion y periodos.
 */
$.fn.tipo_establecimiento = function (id_establecimiento) {

    $.ajax({
        url: "<?php echo base_url() ?>index.php/c_registro/tipo_establecimiento/",
        type: 'POST',
        dataType: 'json',
        data: {id_establecimiento: id_establecimiento},
        beforeSend: function (objeto) {

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            //Seteamos valores de los datos del empleado
            $('#descripcion').val(data['descripcion']);

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success

    });//Fin del ajax

}//Fin de la función
/******************/





