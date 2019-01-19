//Variable Global
var tabla = null;
var id_agencia;

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

    $("#hora_inicio").unbind("dp.change");
    $("#hora_inicio").on("dp.change", function (e) {

        var h_fin = "23:59:59";

        //Seteamos el minimo de #hora_fin
        $('#hora_fin').data("DateTimePicker").minDate(e.date);
        $('#hora_fin').data("DateTimePicker").maxDate(h_fin);

        $.fn.eventos();
    });

    $('#btn_agregar_eventos').unbind('click');
    $('#btn_agregar_eventos').click(function () {

        var formulario = document.getElementById('form_registrar_evento').checkValidity();

        if (formulario == true) {

            $.fn.registrar_evento_dir();

        } else {

            //Muestro los mensajes de error
//            $('#form_registrar_evento').validator('destroy');
            $('#form_registrar_evento').validator('validate');

            $.fn.eventos();
        }

    });//Fin del evento click

    /*
     Evento change de Estado
     */
    $('#estado').unbind('select2:select');
    $('#estado').on('select2:select', function (e) {

        //Obtengo el id del Estado
        var estado = $('#estado').val();
        $.ajax({
            url: "<?php echo base_url() ?>sidrai/c_eventos/municipios",
            type: 'POST',
            dataType: 'json',
            data: {
                estado: estado
            },
            beforeSend: function (objeto) {
            },
            error: function (objeto, quepaso, otroobj) {

            },
            success: function (data) {

                $("#municipio").removeAttr("disabled");
                //iniciar sin opcion seleccionada
                $("#municipio").html('<option value="">Seleccione</option>');

                //Recorremos el array
                $(data['municipios']).each(function (index, elemento) {

                    //Mostramos las opciones
                    $('#municipio').append('<option value="' + elemento['id_municipio'] + '">' + elemento['municipio'] + '</option>');

                });//Fin del each

                $.fn.eventos();

            }//Fin del success

        }); //Fin del ajax

        $.fn.eventos();
    }); //Fin del evento change estado
    /********************************/

    /*
     Evento change de municipio 
     */
    $('#municipio').unbind('select2:select');
    $('#municipio').on('select2:select', function () {

        //Obtengo el id del Estado
        var municipio = $('#municipio').val();
        $.ajax({
            url: "<?php echo base_url() ?>sidrai/c_eventos/parroquias",
            type: 'POST',
            dataType: 'json',
            data: {
                municipio: municipio
            },
            beforeSend: function (objeto) {

            },
            error: function (objeto, quepaso, otroobj) {

            },
            success: function (data) {

                $("#parroquia").removeAttr("disabled");
                //iniciar sin opcion seleccionada
                $("#parroquia").html('<option value="">Seleccione</option>');

                //Recorremos el array
                $(data['parroquias']).each(function (index, elemento) {

                    //Mostramos las opciones
                    $('#parroquia').append('<option value="' + elemento['id_parroquia'] + '">' + elemento['parroquia'] + '</option>');

                });//Fin del each

                $.fn.eventos();

            }//Fin del success

        }); //Fin del ajax

        $.fn.eventos();
    }); //Fin del evento change municipio


}//Fin de la función $.fn.eventos
/*******************************/

/*
 Función donde se carga la data inicial para los select 
 */
$.fn.data_inicial = function () {
    $.ajax({
        url: "<?php echo base_url() ?>sidrai/c_eventos/data_inicial",
        type: 'POST',
        dataType: 'json',
        success: function (data) {

            //iniciar sin opcion seleccionada
            $("#estado").html('<option value="">Seleccione</option>');

            //Recorremos el array
            $(data['estado']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#estado').append('<option value="' + elemento['id_estado'] + '">' + elemento['estado'] + '</option>');

            });//Fin del each

            //Recorremos el array
            $(data['tipo_actividad']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#tipo_actividad').append('<option value="' + elemento['id_tipo_actividad'] + '">' + elemento['tipo_actividad'] + '</option>');

            });//Fin del each

            //Recorremos el array
            $(data['poblacion_objetivo']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#poblacion_objetivo').append('<option value="' + elemento['id_pob_objetivo'] + '">' + elemento['poblacion_objetivo'] + '</option>');

            });//Fin del each

            //Declaramos los select2
            $('#estado, #municipio, #parroquia, #tipo_actividad, #poblacion_objetivo').select2();

            //Declaramos la fecha
            $('#fecha').datetimepicker({
                format: 'DD-MM-YYYY'
            });

            //Declaramos la hora inicio y hora de culminacion
            $('#hora_inicio, #hora_fin').datetimepicker({
                format: 'HH:mm:ss'
            });

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }
    });
}; //fin funcion data_inicial

/*
 Función que manda a registrar un evento directo
 */
$.fn.registrar_evento_dir = function () {

    //Armamos el objeto tipo formulario
    var formData = new FormData($("#form_registrar_evento")[0]);

    $.ajax({
        url: "<?php echo base_url() ?>sidrai/c_eventos/registrar_evento",
        type: "POST",
        cache: false,
        contentType: false,
        processData: false,
        accepts: "application/json",
        dataType: 'json',
        data: formData,
        beforeSend: function (objeto) {

            //Limpiamos el mensaje de la modal
            $('.modal-footer').html('');
            $('.modal-footer').html('<i class="icono_carga fa fa-cog fa-spin fa-3x fa-fw"></i>');
        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            //Evaluamos la respuesta
            if (data['codigo_respuesta'] == 1) {

                //Limpiamos el mensaje de la modal
                $('.modal-footer').html('');
                //Mostramos el mensaje
                $('.modal-footer').html('<div class="alert alert-azul" role="alert">' + data['mensaje_respuesta'] + ' <i class="fa fa-check-square" aria-hidden="true"></i></div>');

                //Mostramos la modal
                $('#modal_eventos').modal('show');

                //Para mantener el mensaje modal por algunos segundos 
                setTimeout(function () {
                    $('#modal_eventos').modal('hide');
                    location.reload();
                }, 2000);

            } else {

                //Mostramos el mensaje
                $('.modal-footer').html('<div class="alert alert-rojo" role="alert">' + data['mensaje_respuesta'] + ' <i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');

                //Mostramos la modal
                $('#modal_eventos').modal('show');

            }//Fin del if

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success

    }); //Fin del ajax

}//Fin de la función $.fn.registrar_evento_dir
/*****************************************/