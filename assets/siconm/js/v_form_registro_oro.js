/*
 Evento document ready
 */
$(document).ready(function () {

    $("#tipo_oro").select2({
        placeholder: "Seleccione",
        theme: "classic"
    });

    $("#propietario").select2({
        placeholder: "Seleccione",
        theme: "classic"
    });

    $("#tipo_producto").select2({
        placeholder: "Seleccione",
        theme: "classic"
    });

    $("#unidad_medida").select2({
        placeholder: "Seleccione",
        theme: "classic"
    });

    $("#finalidad").select2({
        placeholder: "Seleccione",
        theme: "classic"
    });

    $("#tipo_documento").select2({
        placeholder: "Seleccione",
        theme: "classic"
    });

    $("#tipo_boveda").select2({
        placeholder: "Seleccione",
        theme: "classic"
    });

    $("#empresa").select2({
        placeholder: "Seleccione",
        theme: "classic"
    });

    $("#ano").datetimepicker({
        viewMode: 'years',
        format: 'YYYY'
    });

    $("#fecha_recepcion_bcv").datetimepicker({
        viewMode: 'years',
        format: 'DD-MM-YYYY'
    });

    //Inicializamos el formateo numerico
    $("#ley_pureza, #va_hist_bs, #va_hist_dolar, #peso_fino, #peso_unitario, #altura, #diametro, #ancho, #largo ")
            .autoNumeric('init', {
                vMin: '0',
                aDec: ',',
                aSep: '.'
            });

//$('#monto_solicitar').autoNumeric('get'));

    $.fn.data_inicial();

    $.fn.eventos();


});//Fin del evento document ready
/********************************/

/*
 Función donde se declaran todos los eventos
 */
$.fn.eventos = function () {

    $('#tipo_producto').unbind('select2:select');
    $('#tipo_producto').on('select2:select', function (e) {

        var tipo_producto = $(this).val();
        var nombre_producto = e.params.data.text;

        $('#tp_producto').val(nombre_producto);

        $.fn.existe_serial(tipo_producto);
        $.fn.caractericticas_tipo_producto(tipo_producto);

        $.fn.eventos();

    }); //Fin del evento click 

    $('#tipo_boveda').unbind('select2:select');
    $('#tipo_boveda').on('select2:select', function (e) {

        var tipo_boveda = $(this).val();
        //var nombre_producto = e.params.data.text;

        //  $('#tipo_boveda').val(nombre_producto);

        $.fn.tipo_boveda_ubicacion(tipo_boveda);

        $.fn.eventos();

    }); //Fin del evento click 

    $('#btn_guardar').unbind('click');
    $('#btn_guardar').click(function () {

        var formulario = document.getElementById('form_registro_oro').checkValidity();

        //Evaluo si el formulario es válido
        if (formulario == true) {

//            var tipo_oro = $('#tipo_oro').val();
//            var propietario = $('#propietario').val();
//            var tipo_producto = $('#tipo_producto').val();
//            var ancho = $('#ancho').val();
//            var largo = $('#largo').val();
//            var diametro = $('#diametro').val();
//            var altura = $('#altura').val();
//            var peso_unitario = $('#peso_unitario').val();
//            var unidad_medida = $('#unidad_medida').val();
//            var cantidad_oro = $('#cantidad_oro').val();
//            var serial = $('#serial').val();
//            var anaquel = $('#anaquel').val();
//            var finalidad = $('#finalidad').val();
//            var recaudos = $('.recaudos input:file').val();

            //Armamos el objeto tipo formulario
//            var formData = new FormData($("#form_recaudos")[0]);

//            var parametros = [];

            //Parametros tipo json
//            parametros =
//                    {
//                        tipo_oro: tipo_oro,
//                        propietario: propietario,
//                        tipo_producto: tipo_producto,
//                        ancho: ancho,
//                        largo: largo,
//                        diametro: diametro,
//                        altura: altura,
//                        peso_unitario: peso_unitario,
//                        unidad_medida: unidad_medida,
//                        cantidad_oro: cantidad_oro,
//                        serial: serial,
//                        anaquel: anaquel,
//                        finalidad: finalidad
//                    };

//            $('.recaudos input:file').each(function (index, element) {
//
//                var archivo = $(this)[0].files[0];
//                var id_recaudo = $(this).attr('id');
//
//                parametros.push({id_recaudo: archivo});
//            });

//        var parametros = $("#form_registro_oro").serializeArray();
//        var datos_caract = $("#form_caracteristicas").serializeArray();
//        var datos_ident = $("#form_identificacion").serializeArray();
//        var array_recuados = $("#form_recaudos").serializeArray();

//        datos_reg.append($("#form_caracteristicas").serializeArray());

            //    var formData1 = $("#form_registro_oro").serializeArray();
//    var formData2 = $("#form_caracteristicas").serializeArray();
//    var formData3 = $("#form_identificacion").serializeArray();
//    var formData4 = $("#form_recaudos").serializeArray();

            //Llamamos la Funcion para insertarle los datos
            $.fn.registro_datos_basicos();

        } else {

            $('#form_registro_oro').validator('destroy');
            //Muestro los mensajes de error
            $('#form_registro_oro').validator('validate');

            $.fn.eventos();

        }//Fin del if

    });//Fin del evento click
    /***********************/

    $('#btn_datos_basicos').unbind('click');
    $('#btn_datos_basicos').click(function () {

//        var formulario = document.getElementById('form_registro_oro').checkValidity();

        //Evaluo si el formulario es válido
//        if (formulario == true) {

        $(".nav-tabs a[href|='#caracteristicas']").tab('show');
        $(".nav-tabs a[href|='#caracteristicas']").attr('data-toggle', 'tab');

//        } else {
//
//            $('#form_registro_oro').validator('destroy');
//            //Muestro los mensajes de error
//            $('#form_registro_oro').validator('validate');
//
//            $.fn.eventos();
//
//        }//Fin del if

    });//Fin del evento click
    /***********************/

    $('#btn_caracteristicas').unbind('click');
    $('#btn_caracteristicas').click(function () {

//        var formulario = document.getElementById('form_registro_oro').checkValidity();

        //Evaluo si el formulario es válido
//        if (formulario == true) {

        $(".nav-tabs a[href|='#identificacion']").tab('show');
        $(".nav-tabs a[href|='#identificacion']").attr('data-toggle', 'tab');

//        } else {
//
//            $('#form_registro_oro').validator('destroy');
//            //Muestro los mensajes de error
//            $('#form_registro_oro').validator('validate');
//
//            $.fn.eventos();
//
//        }//Fin del if

    });//Fin del evento click
    /***********************/

    $('#btn_identificacion').unbind('click');
    $('#btn_identificacion').click(function () {

//        var formulario = document.getElementById('form_registro_oro').checkValidity();

        //Evaluo si el formulario es válido
//        if (formulario == true) {

        $(".nav-tabs a[href|='#recaudos']").tab('show');
        $(".nav-tabs a[href|='#recaudos']").attr('data-toggle', 'tab');

//        } else {
//
//            $('#form_registro_oro').validator('destroy');
//            //Muestro los mensajes de error
//            $('#form_registro_oro').validator('validate');
//
//            $.fn.eventos();
//
//        }//Fin del if

    });//Fin del evento click
    /***********************/


};


$.fn.data_inicial = function () {
    $.ajax({
        url: "<?php echo base_url() ?>siconm/c_registro_oro/data_inicial",
        type: 'POST',
        dataType: 'json',
        success: function (data) {

            //Recorremos el array
            $(data['tipo_oro']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#tipo_oro').append('<option value="' + elemento['id_tipo_oro'] + '">' + elemento['tipo_oro'] + '</option>');

            });//Fin del each

            //Recorremos el array
            $(data['propietario']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#propietario').append('<option value="' + elemento['id_propietario'] + '">' + elemento['propietario'] + '</option>');

            });//Fin del each

            //Recorremos el array
            $(data['tipo_producto']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#tipo_producto').append('<option value="' + elemento['id_producto'] + '">' + elemento['producto'] + '</option>');

            });//Fin del each

            //Recorremos el array
            $(data['unidad_medida']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#unidad_medida').append('<option value="' + elemento['id_medida'] + '">' + elemento['medida'] + '</option>');

            });//Fin del each

            //Recorremos el array
            $(data['finalidad']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#finalidad').append('<option value="' + elemento['id_finalidad'] + '">' + elemento['finalidad'] + '</option>');

            });//Fin del each

            //Recorremos el array
            $(data['tipo_boveda']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#tipo_boveda').append('<option value="' + elemento['cod_tipo_boveda'] + '">' + elemento['tipo_boveda'] + '</option>');

            });//Fin del each

            $(data['empresa']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#empresa').append('<option value="' + elemento['cod_empresa'] + '">' + elemento['razon_social'] + '</option>');

            });//Fin del each

            //Recorremos el array
//            $(data['tipo_documento']).each(function (index, elemento) {
//
//                //Mostramos las opciones
//                $('#tipo_documento').append('<option value="' + elemento['id_documento'] + '">' + elemento['documento'] + '</option>');
//
//            });//Fin del each

            //Recorremos los recaudos
            $(data['tipo_documento']).each(function (indice, elemento) {

                var html = '<div class="row">';
                html += ' <div class="col-xs-12 form-group">';
                html += '   <label class="control-label col-sm-3">' + elemento['documento'] + '</label>';
                html += '   <div class="col-sm-9">';
                html += '     <input  id="' + elemento['id_documento'] + '" type="file" data-show-preview="false" name="recaudo[' + elemento['id_documento'] + ']">';
                html += '   </div>';
                html += '  </div>';
                html += ' </div>';

                //Mostramos los recaudos
                $('.recaudos').append(html);

                $("#" + elemento['id_documento']).fileinput({
                    showUpload: false,
                    maxFileCount: 1,
                    allowedFileExtensions: ["pdf"],
                    maxFileSize: 2000,
                    msgSizeTooLarge: "File {name} ({size} KB) exceeds maximum upload size of {maxSize} KB. Please Try again",
                    mainClass: "input-group-md",
                    browseClass: "btn btn-azul",
                    browseLabel: "&nbsp;Buscar",
                    browseIcon: "<i class=\"glyphicon glyphicon-folder-open\"></i>",
                    removeClass: "btn btn-info",
                    removeLabel: "Remover",
                    removeIcon: "<i class=\"glyphicon glyphicon-trash\"></i>",
                    msgNoFilesSelected: 'Solo de permiten extensiones de archivos PDF y de peso 2MB.',
                    msgInvalidFileExtension: 'Invalid extension for file {name}. Only "{extensions} files are supported.'
                });

            }); //Fin del each

            //Mascaras de los input
//            $('#ancho').mask('0000');
//            $('#lago').mask('0000');
//            $('#diametro').mask('0000');
//            $('#altura').mask('0000');
//            $('#peso_fino').mask('#0000');
//            $('#peso_unitario').mask('#0000');
//            $('#ley_pureza').mask('#0000');


            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }
    });
}; //fin funcion data_inicial

$.fn.existe_serial = function (tipo_producto) {
    $.ajax({
        url: "<?php echo base_url() ?>siconm/c_registro_oro/existe_serial",
        type: 'POST',
        dataType: 'json',
        data: {tipo_producto: tipo_producto},
        beforeSend: function (objeto) {

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            if (data['existe'][0]['tiene_serial'] === true) {

                $('.capa_serial').show();
                $('#serial').show();

            } else if (data['existe'][0]['tiene_serial'] === false) {

                $('.capa_serial').hide();

            }

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }
    });
}; //fin funcion data_inicial

$.fn.caractericticas_tipo_producto = function (tipo_producto) {

    if (tipo_producto == 1 || tipo_producto == 2 || tipo_producto == 4 || tipo_producto == 11) {

        //Mostramos los campos
        $('.capa_ancho').show();
        $('.capa_largo').show();

        //Agregamos la clase required
        $('#ancho').attr('required', true);
        $('#largo').attr('required', true);

        //Ocultamos los campos
        $('.capa_diametro').hide();
        $('.capa_altura').hide();

        //Removemos la clase required
        $('#diametro').removeAttr('required');
        $('#altura').removeAttr('required');

    }

    if (tipo_producto == 3 || tipo_producto == 5 || tipo_producto == 6 || tipo_producto == 7 || tipo_producto == 8 || tipo_producto == 9 || tipo_producto == 10) {

        //Mostramos los campos
        $('.capa_diametro').show();
        $('.capa_altura').show();

        //Agregamos la clase required
        $('#diametro').attr('required', true);
        $('#altura').attr('required', true);

        //Ocultamos los campos
        $('.capa_ancho').hide();
        $('.capa_largo').hide();

        //Removemos la clase required
        $('#ancho').removeAttr('required');
        $('#largo').removeAttr('required');

    }

//    1";"Barra grande GoodDelivery	A / L
//            2";"Barra pequeña cuadrada GoodDelivery	A / L
//            3";"Barra pequeña redonda GoodDelivery	D / A
//            4";"Cast Bar	A / L
//            5";"Granos de oro	D / A
//            6";"Medalla	D / A
//            7";"Marco de medalla	D / A
//            8";"Tapa de medalla	D / A
//            9";"Moneda	D / A
//            10";"Cospel	D / A
//            11";"Barra Doré	A / L


    //Función donde se declaran todos los eventos
    $.fn.eventos();

}; //fin funcion data_inicial


$.fn.tipo_boveda_ubicacion = function (tipo_boveda) {

    if (tipo_boveda == 1 || tipo_boveda == 2) {

        //Mostramos los campos
        $('.capa_anaquel').show();
        //Agregamos la clase required
        $('#anaquel').attr('required', true);

        //Ocultamos los campos
        $('.capa_cubiculo').hide();
        //Removemos la clase required
        $('#cubiculo').removeAttr('required');

        $('#cubiculo').val('');

    }

    if (tipo_boveda == 3) {

        //Mostramos los campos
        $('.capa_cubiculo').show();
        //Agregamos la clase required
        $('#cubiculo').attr('required', true);

        //Ocultamos los campos
        $('.capa_anaquel').hide();
        $('#anaquel').removeAttr('required');

        $('#anaquel').val('');

    }

//    1";"Barra grande GoodDelivery	A / L
//            2";"Barra pequeña cuadrada GoodDelivery	A / L
//            3";"Barra pequeña redonda GoodDelivery	D / A
//            4";"Cast Bar	A / L
//            5";"Granos de oro	D / A
//            6";"Medalla	D / A
//            7";"Marco de medalla	D / A
//            8";"Tapa de medalla	D / A
//            9";"Moneda	D / A
//            10";"Cospel	D / A
//            11";"Barra Doré	A / L


    //Función donde se declaran todos los eventos
    $.fn.eventos();

}; //fin funcion data_inicial
$.fn.registro_datos_basicos = function () {

    //Armamos el objeto tipo formulario
    var formData = new FormData($("#form_registro_oro")[0]);

    var array_recuados = [];

    $('.recaudos input:file').each(function (index, element) {

        var archivo = $(this)[0].files[0];
        var id_recaudo = $(this).attr('id');

        array_recuados.push({id_recaudo: archivo});

    });

//    var formData1 = $("#form_registro_oro").serializeArray();
//    var formData2 = $("#form_caracteristicas").serializeArray();
//    var formData3 = $("#form_identificacion").serializeArray();
//    var formData4 = $("#form_recaudos").serializeArray();

    //Enviar los datos del formulario:
    $.ajax({
        url: "<?php echo base_url() ?>siconm/c_registro_oro/registro_datos_basicos",
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
//            $('#btn_datos_basicos').css('display', 'none');
//            $('#btn_datos_basicos').parent().append('<i class="icono_carga fa fa-cog fa-spin fa-3x fa-fw"></i>');

        },
        error: function (objeto, quepaso, otroobj) {

            //Mostramos el botón btn_establecimiento
//            $('#btn_datos_basicos').parent().children('.icono_carga').remove();
//            $('#btn_datos_basicos').show();

        },
        success: function (data) {

            //Mostramos el botón insertar establecimiento
//            $('#btn_datos_basicos').parent().children('.icono_carga').remove();
//            $('#btn_datos_basicos').show();

            //Evaluamos la respuesta
            if (data['codigo_respuesta'] == 1) {
                //Mostramos el mensaje
                $('.modal-body').html('<p class="bg-success"><b>' + data['mensaje_respuesta'] + '</b> <i class="fa fa-check-square" aria-hidden="true"></i></p>');
                $('.modal-footer').html('<button class="btn btn-azul-modal" type="button" data-dismiss="modal">OK</button>');
                $('.modal-header').text('DATOS BÁSICOS');




                //Mostramos la modal
                $('#modal_tab').modal('show');

                //Para mantener el mensaje modal por algunos segundos 
                setTimeout(function () {
                    $('#modal_tab').modal('hide');
                    location.reload();
                }, 2000);

            } else {

                //Mostramos el mensaje
                $('.modal-body').html('<p class="bg-danger"><b>' + data['mensaje_respuesta'] + '</b> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i></p>');
                $('.modal-footer').html('<button type="button" class="btn btn-danger" data-dismiss="modal">Ok</button>');
                $('.modal-header').html('DATOS BÁSICOS');

                //Mostramos la modal
                $('#modal_tab').modal('show');

            }//Fin del if

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success
    });//Fin del ajax

}//Fin de la función registro_datos_basicos
/*****************************************/