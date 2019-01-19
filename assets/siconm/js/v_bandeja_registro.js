var tabla = null;
var cod_inventario;
/*
 Evento document ready
 */
$(document).ready(function () {

    $.fn.tabla();
    $.fn.eventos();
}); //Fin del evento document ready
/********************************/

/*
 Función donde se declaran todos los eventos
 */
$.fn.eventos = function () {

    $('.btn_guardar').unbind('click');
    $('.btn_guardar').click(function () {

//        var formulario = document.getElementById('form_actualizar').checkValidity();
//
//        if (formulario == true) {

        $.fn.actualizar_datos();

//        } else {
//
//            //Muestro los mensajes de error
////            $('#form_agregar_agencias').validator('destroy');
//            $('#form_actualizar').validator('validate');
//
//            $.fn.eventos();
//        }

    });//Fin del evento click

}//Fin de la función $.fn.eventos
/*******************************/

$.fn.tabla = function () {

    if (tabla != null) {

        tabla.destroy();
    }

//Variable que contendra a la tabla del datatable
    var tbl = '<table id="tbl_reporte" class="display table table-striped table-bordered" cellspacing="0" width="100%">';
    tbl += '  <thead>';
    tbl += '    <tr>';
    tbl += '      <th style="text-align: center"></th>';
    tbl += '      <th style="text-align: center">Fecha Recepcion BCV</th>';
    tbl += '      <th style="text-align: center">Propietario</th>';
    tbl += '      <th style="text-align: center">Anaquel/Cubiculo</th>';
//    tbl += '      <th style="text-align: center">Tipo Producto</th>';
//    tbl += '      <th style="text-align: center">Cod. BCV</th>';
//    tbl += '      <th style="text-align: center">Finalidad</th>';
//    tbl += '      <th style="text-align: center">Peso Neto (grs)</th>';
//    tbl += '      <th style="text-align: center">Peso Bruto(grs)</th>';
//    tbl += '      <th style="text-align: center">Peso Fino(grs)</th>';
//    tbl += '      <th style="text-align: center">Peso Fino(kgs)</th>';
//    tbl += '      <th style="text-align: center">Peso Fino(Onz T)</th>';
//    tbl += '      <th style="text-align: center">Ley Pureza</th>';
//    tbl += '      <th style="text-align: center">Valor Hist.(Bs)</th>';
//    tbl += '      <th style="text-align: center">Valor Hist.(USD)</th>';

    tbl += '    </tr>';
    tbl += '  </thead>';
    tbl += '</table>';
    $('#tabla_reporte').html('');
    $('#tabla_reporte').append(tbl);
    //Asigno el método DataTable a mi tabla
    tabla = $('#tabla_reporte table').DataTable({
        "ajax": {
            "url": "<?php echo base_url() ?>index.php/siconm/c_bandeja_registro/reporte_registro",
            "type": "POST"
        },
        "columns": [
            {"data": "cod_inventario", "class": 'text-center'},
            {"data": "fecha_registro", "class": 'text-center'},
            {"data": "nb_propietario", "class": 'text-center'},
            {"data": "nu_anaquel", "class": 'text-center'}
//            {"data": "nb_tipo_producto", "class": 'text-center'},
//            {"data": "cod_pieza", "class": 'text-center'},
//            {"data": "nb_finalidad", "class": 'text-center'},
//            //{"data": "dimension", "class": 'text-center'},
//            {"data": "peso_unitario", "class": 'text-center'},
//            {"data": "peso_unitario", "class": 'text-center'},
//            {"data": "md_peso_fino_gramos", "class": 'text-center'},
//            {"data": "peso_fino_kg", "class": 'text-center'},
//            {"data": "peso_fino_onz", "class": 'text-center'},
//            {"data": "ley_pureza", "class": 'text-center'},
//            {"data": "va_hist_bs", "class": 'text-center'},
//            {"data": "va_hist_dolar", "class": 'text-center'}
        ],
        //Oculto el ordenar por columna
        "columnDefs": [{
                "targets": [0],
                "orderable": false
            }],
        "orderClasses": false,
        "fnRowCallback": function (nRow, aData, iDisplayIndex) {

//            if (aData['recibido'] === 'Si') {
//
////                $('td:eq(0)', nRow).html('<div class="input-group-btn"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="fa fa-cog"></span></button><ul class="dropdown-menu"><li><a href="#" id="' + aData['id_enc_ent_efec'] + '" class="btn_decision_reversar">Reversar</a></li></ul></div>');
            $('td:eq(0)', nRow).html('<i id="' + aData['cod_inventario'] + '" type="button" title="Detalle" class="fa fa-list-alt  btn_detalle"></i>');
//                $('td:eq(6)', nRow).css('background-color', '#D3D3D3');
//            } else {
//
//                $('td:eq(0)', nRow).html('<i id="' + aData['id_enc_ent_efec'] + '" type="button" title="Recepción" class="fa fa-check btn_decision_aprobar"></i>');
////                $('td:eq(0)', nRow).html('<div class="input-group-btn"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="fa fa-cog"></span></button><ul class="dropdown-menu"><li><a href="#" id="' + aData['id_enc_ent_efec'] + '" class="btn_decision_aprobar">Aprobar</a></li></ul></div>');
//
//            }

        },
        responsive: {
            details: {
                renderer: function (api, rowIdx, columns) {
                    var data = $.map(columns, function (col, i) {
                        return col.hidden ?
                                '<tr data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '">' +
                                '<td>' + col.title + ':' + '</td> ' +
                                '<td>' + col.data + '</td>' +
                                '</tr>' :
                                '';
                    }).join('');
                    return data ?
                            $('<table/>').append(data) :
                            false;
                }
            }
        },
        "orderClasses": false,
                "language": {
                    "search": "Busqueda:",
                    "info": "Mostrando página _PAGE_ de _PAGES_",
                    "lengthMenu": "Mostrando _MENU_ registros por página",
                    "infoFiltered": "(filtrado desde _MAX_ total registros)",
                    "infoEmpty": "No hay registros disponibles",
                    "zeroRecords": "No se encontraron resultados",
                    "paginate": {
                        "previous": "Anterior",
                        "next": "Siguiente"
                    }
                },
        //Evento cuando el datatable esta listo
        "initComplete": function (settings, json) {
            $.fn.eventos();
        }//Fin de initComplete
    });

    new $.fn.dataTable.Buttons(tabla, {
        buttons: [
            {
                extend: 'excelHtml5',
                text: 'Exportar a Excel',
                title: 'Listado_cierre',
                fieldSeparator: ';',
                footer: false,
                exportOptions: {
                    orthogonal: 'filter',
                }
            }
        ]
    });//Fin del $.fn.dataTable.Buttons

    tabla.buttons().container().appendTo('#tbl_reporte_wrapper .col-sm-6:eq(0)');
    /*
     Evento on click sobre el botón ver detalle
     */

    tabla.on('click', 'tr td .btn_detalle', function (event) {

        //Obtengo el id
        cod_inventario = $(this).attr('id');
        $.fn.modal_detalle();
    }); //Fin del Evento on click
    /***************************/

}; //Fin de la funcion Tabla



$.fn.modal_detalle = function () {

//Html a mostrar en el modal
    var html = '<form id="form_registro_oro" role="form" data-toggle="validator" action="javascritp:void(0)" method="post">';

    html += '  <div class="form-group">';
    html += '<div class="row">';
    html += '<div class="form-group has-feedback col-xs-12">';
    html += '<div class="form-horizontal recaudos file"></div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

//    html += '  <div class="form-group">';
//    html += '    <label class="control-label col-sm-2">Tipo Boveda:</label>';
//    html += '      <div class="col-sm-8">';
//    html += '        <select id="tipo_boveda" name="tipo_boveda" class="form-control required" style="width: 100%;">';
//    html += '          <option value="">Seleccione</option>';
//    html += '        </select>';
//    html += '      </div>';
//    html += '  </div>';
//
//    html += '  <div class="form-group">';
//    html += '    <label class="control-label col-sm-2">Anaquel:</label>';
//    html += '      <div class="col-sm-8">';
//    html += '        <input id="anaquel" name="anaquel" type="text" class="form-control" required>';
//    html += '      </div>';
//    html += '  </div>';
//
//    html += '  <div class="form-group">';
//    html += '    <label class="control-label col-sm-2">Finalidad:</label>';
//    html += '      <div class="col-sm-8">';
//    html += '        <select id="finalidad" name="finalidad" class="form-control required" style="width: 100%;">';
//    html += '          <option value="">Seleccione</option>';
//    html += '        </select>';
//    html += '      </div>';
//    html += '  </div>';
    html += '    </form>';

    //Seteamos los valores del modal
    $('.modal .modal-title').text('Actualizar Datos Registro');
    $('.modal .modal-body').html('');
    $('.modal .modal-body').append(html);
    $('.modal .modal-footer').html('');
    $('.modal .modal-footer').append('<button id="' + cod_inventario + '" type="button" class="btn btn-azul-modal btn_guardar">Actualizar</button>');

    $('#finalidad').select2({
        theme: "classic"
    });
    $('#tipo_boveda').select2({
        theme: "classic"
    });
    //Mostramos el modal
    $('.modal').modal('show');
    //Evento de la modal cuando se muestra la modal
    $('.modal').off('shown.bs.modal');
    $('.modal').on('shown.bs.modal', function (e) {

//        $.fn.finalidad();
        $.fn.form_adjuntos();
        $.fn.eventos();

    });
    //Evento de la modal cuando se oculta la modal
    $('.modal').off('hide.bs.modal');
    $('.modal').on('hide.bs.modal', function (e) {

        $.fn.eventos();
    });

};


$.fn.form_adjuntos = function () {

    $.ajax({
        url: "<?php echo base_url() ?>index.php/siconm/c_bandeja_registro/recaudos",
        type: 'POST',
        dataType: 'json',
        success: function (data) {

            //Recorremos los recaudos
            $(data['tipo_documento']).each(function (indice, elemento) {

                var html = '<div class="row">';
                html += ' <div class="col-xs-12 form-group">';
                html += '   <label class="control-label col-sm-3">' + elemento['documento'] + '</label>';
                html += '   <div class="col-sm-9">';
                html += '<input id="' + elemento['id_documento'] + '" name="recaudo[' + elemento['id_documento'] + ']" type="file" multiple>';
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
                    browseLabel: "&nbsp;Cambiar",
                    browseIcon: "<i class=\"glyphicon glyphicon-folder-open\"></i>",
                    removeClass: "btn btn-info",
                    removeLabel: "Remover",
                    removeIcon: "<i class=\"glyphicon glyphicon-trash\"></i>",
                    msgNoFilesSelected: 'Solo de permiten extensiones de archivos PDF y de peso 2MB.',
                    msgInvalidFileExtension: 'Invalid extension for file {name}. Only "{extensions} files are supported.',
                    showRemove: false,
//        'theme': 'explorer-fa',
//        'uploadUrl': '#',
                    overwriteInitial: true,
                    initialPreviewAsData: true,
                    initialPreview: [
                        // PDF DATA
                        'http://localhost/siconm/assets/siconm/files/documentos/103/103-1.pdf'
                    ],
                    initialPreviewConfig: [
                        {type: "pdf", size: 8000, caption: elemento['documento'] + ".pdf", key: 10, showRemove: false}
                    ]
                });

            }); //Fin del each

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }
    });

}; //fin funcion data_inicial


$.fn.finalidad = function () {
    $.ajax({
        url: "<?php echo base_url() ?>siconm/c_bandeja_registro/finalidad",
        type: 'POST',
        dataType: 'json',
        success: function (data) {

            //Recorremos el array
            $(data['finalidad']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#finalidad').append('<option value="' + elemento['id_finalidad'] + '">' + elemento['finalidad'] + '</option>');

            });//Fin del each

            $(data['tipo_boveda']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#tipo_boveda').append('<option value="' + elemento['cod_tipo_boveda'] + '">' + elemento['tipo_boveda'] + '</option>');

            });//Fin del each


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

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }
    });
}; //fin funcion data_inicial

$.fn.actualizar_datos = function () {

    //Armamos el objeto tipo formulario
    var formData = new FormData($("#form_registro_oro")[0]);
//console.log(formData);
    var array_recaudos = [];

    $('.recaudos input:file').each(function (index, element) {

        var archivo = $(this)[0].files[0];
        var id_recaudo = $(this).attr('id');

        array_recaudos.push({id_recaudo: archivo});

    });

//    console.log(array_recaudos);

    //Enviar los datos del formulario:
    $.ajax({
        url: "<?php echo base_url() ?>index.php/siconm/c_bandeja_registro/actualizar_datos",
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

                //Para mantener el mensaje modal por algunos segundos 
                setTimeout(function () {
                    $('#modal').modal('hide');
                }, 2000);

                location.reload();

            } else if (data['codigo_respuesta'] == 3) {
//alert('oso');
                //Evento de la modal cuando se oculta la modal
                $('.modal').modal('hide');
            } else {

                //Mostramos el mensaje
                $('.modal-footer').html('<div class="alert alert-rojo" role="alert">' + data['mensaje_respuesta'] + ' <i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');

            }//Fin del if

            //Función donde se declaran todos los eventos
            $.fn.eventos();

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success
    });//Fin del ajax

};//Fin de la función registro_datos_basicos
