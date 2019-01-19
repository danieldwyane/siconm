var tabla = null;
var tabla_det = null;
var id_control_carga;
var id_operativo;

/*
 Evento document ready
 */
$(document).ready(function () {

    $("#carga_masiva").fileinput({
        showUpload: false,
        maxFileCount: 1,
        allowedFileExtensions: ["xlsx"],
        maxFileSize: 2000,
        msgSizeTooLarge: "File {name} ({size} KB) exceeds maximum upload size of {maxSize} KB. Please Try again",
        mainClass: "input-group-md",
        browseClass: "btn btn-azul-modal",
        browseLabel: "&nbsp;Buscar",
        browseIcon: "<i class=\"glyphicon glyphicon-folder-open\"></i>",
        removeClass: "btn btn-amarillo-modal",
        removeLabel: "Remover",
        removeIcon: "<i class=\"glyphicon glyphicon-trash\"></i>",
        msgNoFilesSelected: 'Solo de permiten extensiones de archivos PDF y de peso 2MB.',
        msgInvalidFileExtension: 'Invalid extension for file {name}. Only "{extensions} files are supported.'
    });

    $.fn.tabla();
    $.fn.existe_operativo();

    $.fn.eventos();
}); //Fin del evento document ready
/********************************/

/*
 Función donde se declaran todos los eventos
 */
$.fn.eventos = function () {

    /*
     Evento click sobre el botón .btn_cargar_fideicomiso
     */
    $('#btn_carga_masiva').unbind('click');
    $('#btn_carga_masiva').click(function () {

        var formulario = document.getElementById('form_carga_masiva').checkValidity();
        //Evaluo si el formulario es válido
        if (formulario == true) {

            $.fn.subir_archivo();
//            $.fn.carga_masiva();
        } else {

            //Muestro los mensajes de error
            $('#form_carga_masiva').validator('validate');
            $.fn.eventos();
        }//Fin del if

    }); //Fin del evento click
    /***********************/

    /*
     Evento click sobre el botón .btn_cargar_fideicomiso
     */
    $('#iniciar_operativo').unbind('click');
    $('#iniciar_operativo').click(function () {

        $.fn.modal_iniciar_operativo();
        $.fn.eventos();

    }); //Fin del evento click
    /***********************/

    /*
     Evento click sobre el botón .btn_cargar_fideicomiso
     */
    $('.btn_iniciar_operativo').unbind('click');
    $('.btn_iniciar_operativo').click(function () {

        $.fn.iniciar_operativo();
        $.fn.eventos();

    }); //Fin del evento click
    /***********************/

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
    tbl += '      <th style="text-align: center">Acciones</th>';
    tbl += '      <th style="text-align: center">Codigo Carga</th>';
    tbl += '      <th style="text-align: center">Archivo</th>';
    tbl += '      <th style="text-align: center">Fecha Inicio</th>';
    tbl += '      <th style="text-align: center">Fecha Fin</th>';
    tbl += '      <th style="text-align: center">Usuario</th>';
    tbl += '    </tr>';
    tbl += '  </thead>';
    tbl += '</table>';
    $('#tabla_reporte').html('');
    $('#tabla_reporte').append(tbl);
    //Asigno el método DataTable a mi tabla
    tabla = $('#tabla_reporte table').DataTable({
        "ajax": {
            "url": "<?php echo base_url() ?>index.php/rem/c_supervisor/control_carga/",
            "type": "POST"
        },
        "columns": [
            {"data": "id_control_carga", "class": 'text-center'},
            {"data": "cod_control_carga", "class": 'text-center'},
            {"data": "archivo", "class": 'text-center'},
            {"data": "fecha_ini", "class": 'text-center'},
            {"data": "fecha_fin", "class": 'text-center'},
            {"data": "id_usuario", "class": 'text-center'}
        ],
        //Oculto el ordenar por columna
        "columnDefs": [{
                "targets": [0],
                "orderable": false
            }],
        "orderClasses": true,
        "fnRowCallback": function (nRow, aData, iDisplayIndex) {

//            if (aData['id_estatus_operativo'] == 1) {
//
//                $('td:eq(0)', nRow).html('<div class="input-group-btn"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="fa fa-cog"></span></button><ul class="dropdown-menu"><li><a href="#" id="' + aData['id_control_carga'] + '" class="btn_imprimir">Generar Apertura</a></li></ul></div>');
//                $('td:eq(0)', nRow).html('<div class="input-group-btn"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="fa fa-cog"></span></button><ul class="dropdown-menu"><li><a href="#" id="' + aData['id_control_carga'] + '" class="btn_detalle">Detalle</a></li></ul></div>');
//
//            } else {

                $('td:eq(0)', nRow).html('<div class="input-group-btn"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="fa fa-cog"></span></button><ul class="dropdown-menu"><li><a href="#" id="' + aData['id_control_carga'] + '" class="btn_detalle">Detalle</a></li></ul></div>');
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
    /*
     Evento on click sobre el botón ver detalle
     */
    $('tr td .btn_detalle').unbind('click');
    tabla.on('click', 'tr td .btn_detalle', function (event) {

        //Obtengo el id
        id_enc_ent_efec = $(this).attr('id');
//        $.fn.tabla_det();
        $.fn.modal_detalle();
    }); //Fin del Evento on click
    /***************************/

}; //Fin de la funcion Tabla

$.fn.tabla_det = function () {

    //Variable que contendra a la tabla del datatable
    var tbl = '<table id="tbl_reporte_segundario" class="display table table-striped table-bordered" cellspacing="0" width="100%">';
    tbl += '  <thead>';
    tbl += '    <tr>';
    tbl += '      <th style="text-align: center">Codigo Carga</th>';
    tbl += '      <th style="text-align: center">Archivo</th>';
    tbl += '      <th style="text-align: center">Fecha Inicio</th>';
    tbl += '      <th style="text-align: center">Fecha Fin</th>';
    tbl += '      <th style="text-align: center">Usuario</th>';
    tbl += '    </tr>';
    tbl += '  </thead>';
    tbl += '</table>';
    $('#tabla_detalle_operativo').html('');
    $('#tabla_detalle_operativo').append(tbl);

    //Asigno el método DataTable a mi tabla
    if (tabla_det != null) {

        tabla_det.destroy();
    }

    //Asigno el método DataTable a mi tabla
    tabla_det = $('#tabla_detalle_operativo table').DataTable({
        "ajax": {
            "url": "<?php echo base_url() ?>index.php/rem/c_supervisor/control_carga/",
            "type": "POST"
        },
        "columns": [
            {"data": "cod_control_carga", "class": 'text-center'},
            {"data": "archivo", "class": 'text-center'},
            {"data": "fecha_ini", "class": 'text-center'},
            {"data": "fecha_fin", "class": 'text-center'},
            {"data": "id_usuario", "class": 'text-center'}
        ],
        //Oculto el ordenar por columna
        "columnDefs": [{
                "targets": [0],
                "orderable": false
            }],
        "orderClasses": true,
        "fnRowCallback": function (nRow, aData, iDisplayIndex) {

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
}; //Fin de la funcion Tabla

/*
 Función que verifica si el operativo existe
 */
$.fn.existe_operativo = function () {

    $.ajax({
        url: "<?php echo base_url(); ?>index.php/rem/c_supervisor/existe_operativo",
        type: "POST",
        dataType: "json",
        beforeSend: function (objeto) {

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            //Evaluamos la respuesta
//            if (data[0] == "") {
//            if (data[0]['id_operativo'] == 8) {
//
//                id_operativo = data[0]['id_operativo'];
//
//                //Mostramos la capa iniciar operativo
//                $('.capa_iniciar_operativo').fadeIn();
//                //Oculta la capa carga masiva
//                $('.capa_carga_masiva').fadeOut();
//            } else {

            //Mostramos la capa carga masiva
            $('.capa_carga_masiva').fadeIn();
            //Oculta la capa iniciar operativo
            $('.capa_iniciar_operativo').fadeOut();
//            }//Fin del if

            //Función donde se declaran todos los eventos
            $.fn.eventos();
        }//Fin del success

    }); //Fin del ajax

}//Fin de la función $.fn.existe_operativo
/************************************/

/*
 Función que manda a iniciar el operativo
 */
$.fn.iniciar_operativo = function () {

    $.ajax({
        url: "<?php echo base_url(); ?>index.php/rem/c_supervisor/iniciar_operativo",
        type: "POST",
        dataType: "json",
        data: {id_operativo: id_operativo},
        beforeSend: function (objeto) {

            //Limpiamos el contenido del modal y los botones
            $('.modal-body').html('');
            $('.modal-footer').html('');
            $('.modal-header').html('');

            $('#btn_carga_masiva').css('display', 'none');
            $('#btn_carga_masiva').parent().append('<i class="icono_carga fa fa-cog fa-spin fa-3x fa-fw"></i>');
        },
        error: function (objeto, quepaso, otroobj) {

            $('#btn_carga_masiva').parent().children('.icono_carga').remove();
            $('#btn_carga_masiva').show();
        },
        success: function (data) {

            $('#btn_carga_masiva').parent().children('.icono_carga').remove();
            $('#btn_carga_masiva').show();
            //Evaluamos la respuesta
            if (data['codigo_respuesta'] == 1) {

                //Mostramos el mensaje
                $('.modal-body').html('<b>' + data['mensaje_respuesta'] + '</b>  <i class="fa fa-check-square" aria-hidden="true"></i>');
                $('.modal-footer').html('<button type="button" class="btn btn-outline" data-dismiss="modal">Ok</button>');
                //Mostramos la modal
                $('#modal').modal('show');
                //Evento cuando se oculte la modal
                $('#modal').on('hidden.bs.modal', function (e) {

                    location.reload();
                });
            } else {

                //Mostramos el mensaje
                $('.modal-body').html('<p><b>' + data['mensaje_respuesta'] + '</b> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i></p>');
                $('.modal-footer').html('<button type="button" class="btn btn-outline" data-dismiss="modal">Ok</button>');
                //Mostramos la modal
                $('#modal').modal('show');
            }//Fin del if

            //Función donde se declaran todos los eventos
            $.fn.eventos();
        }//Fin del success

    }); //Fin del ajax

}//Fin de la función $.fn.iniciar_operativo
/************************************/

/*
 Función que manda a cargar el monto disponible y el monto neto
 */
$.fn.subir_archivo = function () {

    //Armamos el objeto tipo formulario
    var formData = new FormData($("#form_carga_masiva")[0]);
    $.ajax({
        url: "<?php echo base_url(); ?>index.php/rem/c_supervisor/subir_archivo",
        type: "POST",
        cache: false,
        contentType: false,
        processData: false,
        accepts: "application/json",
        dataType: 'json',
        //async: false,
        data: formData,
        beforeSend: function (objeto) {

        },
//        error: function (objeto, quepaso, otroobj) {
//
//            $('#btn_carga_masiva').parent().children('.icono_carga').remove();
//            $('#btn_carga_masiva').show();
//        },
        success: function (data) {

            $.ajax({
                url: "<?php echo base_url(); ?>index.php/rem/c_supervisor/carga_masiva",
                type: "POST",
                dataType: "json",
                data: {nombre_archivo: data['archivo']},
                beforeSend: function (objeto) {

                    //Limpiamos el contenido del modal y los botones
                    $('.modal-body').html('');
                    $('.modal-footer').html('');
                    $('.modal-header').html('');

                    $('#btn_carga_masiva').css('display', 'none');
                    $('#btn_carga_masiva').parent().append('<i class="icono_carga fa fa-cog fa-spin fa-3x fa-fw"></i>');
                },
//                error: function (objeto, quepaso, otroobj) {
//
//                    $('#btn_carga_masiva').parent().children('.icono_carga').remove();
//                    $('#btn_carga_masiva').show();
//                },
                success: function (data) {

                    $('#btn_carga_masiva').parent().children('.icono_carga').remove();
                    $('#btn_carga_masiva').show();

                    //Evaluamos la respuesta
//                    if (data['CODIGO_RESPUESTA'] == 1) {
//
//                        //Mostramos el mensaje
//                        $('#modal_control .modal-body').html('<b>' + data['MENSAJE_RESPUESTA'] + '</b>  <i class="fa fa-check-square" aria-hidden="true"></i>');
//                        $('#modal_control .modal-footer').html('<button type="button" class="btn btn-azul-modal" data-dismiss="modal">Ok</button>');
//                        $('#modal_control .modal-header').html('CARGA MASIVA');
//
//                        //Mostramos la modal
//                        $('#modal_control').modal('show');

                        //Para mantener el mensaje modal por algunos segundos 
                        setTimeout(function () {
                            //$('#modal_control').modal('hide');
                            location.reload();
                            tabla.ajax.reload();
                        }, 2000);

//                    } else {
//
//                        //Mostramos el mensaje
//                        $('#modal_control .modal-body').html('<p><b>' + data['MENSAJE_RESPUESTA'] + '</b> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i></p>');
//                        $('#modal_control .modal-footer').html('<button type="button" class="btn btn-azul-modal" data-dismiss="modal">Ok</button>');
//                        $('#modal_control .modal-header').html('CARGA MASIVA');
//
//                        //Mostramos la modal
//                        $('#modal_control').modal('show');
                    //}//Fin del if

                    //Función donde se declaran todos los eventos
                    $.fn.eventos();
                }//Fin del success

            }); //Fin del ajax

            //Función donde se declaran todos los eventos
            $.fn.eventos();
        }//Fin del success

    }); //Fin del ajax

}//Fin de la función $.fn.carga_masiva
/************************************/

/*
 Función que manda a cargar el monto disponible y el monto neto
 */
$.fn.carga_masiva = function () {

    //Armamos el objeto tipo formulario
    var formData = new FormData($("#form_carga_masiva")[0]);
    $.ajax({
        url: "<?php echo base_url(); ?>index.php/rem/c_supervisor/carga_masiva",
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
            $('#btn_carga_masiva').css('display', 'none');
            $('#btn_carga_masiva').parent().append('<i class="icono_carga fa fa-cog fa-spin fa-3x fa-fw"></i>');
        },
//        error: function (objeto, quepaso, otroobj) {
//
//            $('#btn_carga_masiva').parent().children('.icono_carga').remove();
//            $('#btn_carga_masiva').show();
//        },
        success: function (data) {

            $('#btn_carga_masiva').parent().children('.icono_carga').remove();
            $('#btn_carga_masiva').show();
            //Evaluamos la respuesta
            if (data['codigo_respuesta'] == 1) {

                //Mostramos el mensaje
                $('.modal-body').html('<b>' + data['mensaje_respuesta'] + '</b>  <i class="fa fa-check-square" aria-hidden="true"></i>');
                $('.modal-footer').html('<button type="button" class="btn btn-outline" data-dismiss="modal">Ok</button>');
                //Mostramos la modal
                $('#modal').modal('show');
                //Evento cuando se oculte la modal
                $('#modal').on('hidden.bs.modal', function (e) {

                    location.reload();
                });
            } else {

                //Mostramos el mensaje
                $('.modal-body').html('<p><b>' + data['mensaje_respuesta'] + '</b> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i></p>');
                $('.modal-footer').html('<button type="button" class="btn btn-outline" data-dismiss="modal">Ok</button>');
                //Mostramos la modal
                $('#modal').modal('show');
            }//Fin del if

            //Función donde se declaran todos los eventos
            $.fn.eventos();
        }//Fin del success

    }); //Fin del ajax

}//Fin de la función $.fn.carga_masiva
/************************************/

/*
 Función que arma la modal rechazar
 */
$.fn.modal_detalle = function () {

//Html a mostrar en el modal
    var html = '<div id="tabla_detalle_operativo" class="container-fluid"></div>';
//    var html = '<table id="tabla_detalle_operativo" class="table table-striped" cellspacing="0" width="100%">';
//    html += ' <thead>';
//    html += '  <tr>';
//    html += '   <th>Codigo Carga</th>';
//    html += '   <th>Archivo</th>';
//    html += '   <th>fecha Inicio</th>';
//    html += '   <th>Fecha Fin</th>';
//    html += '   <th>id_usuario</th>';
//    html += '  </tr>';
//    html += ' </thead>';
//    html += ' <tbody>';
//    html += '  <tr>';
//    html += '   <td></td>';
//    html += '   <td></td>';
//    html += '   <td></td>';
//    html += '   <td></td>';
//    html += '   <td></td>';
//    html += '  </tr>';
//    html += ' </tbody>';
//    html += '</table>';

    //Seteamos los valores del modal
    $('#modal_control .modal-title').text('Detalle Operativo');
    $('#modal_control .modal-body').html('');
    $('#modal_control .modal-body').append(html);
    $('#modal_control .modal-footer').html('');
//    $('.modal .modal-footer').append('<button id="'+id_enc_ent_efec+'" type="button" class="btn btn-azul-modal btn_aprobar">SI</button>');
//    $('.modal .modal-footer').append('<button id="'+id_empresa+'" type="button" class="btn btn-danger btn_rechazar">NO</button>');   
//    $('#modal_control .modal-footer').append('<button type="button" class="btn btn-amarillo-modal" data-dismiss="modal">NO</button>');

    //Llamamos a la tabla
    $.fn.tabla_det();

    //Mostramos el modal
    $('#modal_control').modal('show');
    //Evento de la modal cuando se muestra la modal
    $('#modal_control').off('shown.bs.modal');
    $('#modal_control').on('shown.bs.modal', function (e) {

        $.fn.eventos();
    });
    //Evento de la modal cuando se oculta la modal
    $('#modal_control').off('hide.bs.modal');
    $('#modal_control').on('hide.bs.modal', function (e) {

        $.fn.eventos();
    });
}; //Fin de la función $.fn.modal_detalle
/*************************************/

/*
 Función que arma la modal rechazar
 */
$.fn.modal_iniciar_operativo = function () {

    //Html a mostrar en el modal
    var html = '<div class="form-group">';
    html += '  <label>Fecha de Inicio:</label>';
    html += '  <div class="input-group date">';
    html += '   <div class="input-group-addon">';
    html += '    <i class="fa fa-calendar"></i>';
    html += '   </div>';
    html += '  <input id="datepicker" class="form-control pull-right datepicker" type="text">';
    html += '  </div>';
    html += '</div>';

    //Seteamos los valores del modal
    $('#modal_control .modal-title').text('Detalle Operativo');
    $('#modal_control .modal-body').html('');
    $('#modal_control .modal-body').append(html);
    $('#modal_control .modal-footer').html('');
    $('.modal .modal-footer').append('<button id="' + id_operativo + '" type="button" class="btn btn-azul-modal btn_iniciar_operativo">SI</button>');
    $('#modal_control .modal-footer').append('<button type="button" class="btn btn-amarillo-modal" data-dismiss="modal">NO</button>');

    //Mostramos el modal
    $('#modal_control').modal('show');
    //Evento de la modal cuando se muestra la modal
    $('#modal_control').off('shown.bs.modal');
    $('#modal_control').on('shown.bs.modal', function (e) {

        $.fn.eventos();
    });
    //Evento de la modal cuando se oculta la modal
    $('#modal_control').off('hide.bs.modal');
    $('#modal_control').on('hide.bs.modal', function (e) {
        $.fn.eventos();
    });

    $('#datepicker').datepicker({
        format: 'dd/mm/yyyy'
    });

}; //Fin de la función $.fn.modal_detalle
/*************************************/