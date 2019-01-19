

var tabla = null;
var id_enc_ent_efec;
var id_supervisor;

/*
 Evento document ready
 */
$(document).ready(function () {

    $("#consultar").select2({
        placeholder: "Seleccione",
        theme: "classic"
    });

    $.fn.eventos();

});//Fin del evento document ready
/********************************/

/*
 Función donde se declaran todos los eventos
 */
$.fn.eventos = function () {

    /*
     Evento click sobre el tab_eliminar 
     */
    $('.btn_aprobar').unbind('click');
    $('.btn_aprobar').click(function () {

        $.fn.aprobar_efectivo();

        $.fn.eventos();

    });//Fin del evento click

    /*
     Evento click sobre el tab_eliminar 
     */
    $('#cerrar_operativo').unbind('click');
    $('#cerrar_operativo').click(function () {

        $.fn.cerrar_oper();

        $.fn.eventos();

    });//Fin del evento click

    /*
     Evento click sobre el btn #btn_generar_txt
     */
    $('#btn_generar_txt').unbind('click');
    $('#btn_generar_txt').click(function () {

        $.fn.generar_archivo();

    });//Fin del evento click
    /***********************/

    /*
     Evento click sobre el id #consultar
     */
//    $("#consultar").unbind("change");
//    $("#consultar").change(function () {
    $('#consultar').unbind('select2:select');
    $('#consultar').on('select2:select', function (e) {

        //Obtenemos valores
        var id_condicion = $(this).val();

        //Removemos los campos del id #capa_consultar_por
        $('#capa_consultar_por ~ div').remove();

        //Evaluamos el id de la condición
        if (id_condicion != 0) {
            $.fn.tabla(id_condicion);


        }
//        else if (id_condicion == 2) {
//
//            //Función donde se carga el estatus  
//            $.fn.estatus_consulta();
//
//            $('#capa_consultar_por').after('<div class="col-md-2 form-group"><label>Estatus</label><select id="estatus_consulta" multiple="multiple"></select></div><div class="col-md-2 form-group"><label>Fecha Desde:</label><div class="input-group date" id="fecha_inicio"><input type="text" class="form-control" required><span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span></div><div class="help-block with-errors"></div></div><div class="col-md-3 form-group"><label>Fecha Hasta:</label><div class="input-group date" id="fecha_fin"><input type="text" class="form-control" required><span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span></div><button class="btn btn-info btn_buscar" type="button">Buscar</button><div class="help-block with-errors"></div></div>');
//            //Inicializamos el método del calendario
//            $('#fecha_inicio, #fecha_fin').datetimepicker({
//                format: 'DD/MM/YYYY'
//            });
//        }//Fin del if

        $.fn.eventos();

    }); //Fin del evento click



}//Fin de la función $.fn.eventos
/*******************************/

/*
 Función que cierra el operativo
 */
$.fn.cerrar_oper = function () {

    $.ajax({
        url: "<?php echo base_url(); ?>index.php/rem/c_rpt_cierre/cerrar_operativo",
        type: "POST",
        dataType: "json",
        data: {

        },
        beforeSend: function (objeto) {

            //Limpiamos el mensaje de la modal
            $('.modal-footer').html('');
            $('.modal-footer').html('<i class="icono_carga fa fa-cog fa-spin fa-3x fa-fw"></i>');
        },
//        error: function(objeto, quepaso, otroobj) {
//            alert("Error...");
//        },
        success: function (data) {

            //Evaluamos la respuesta
            if (data['codigo_respuesta'] == 1) {

                //Mostramos el mensaje
                $('.modal-body').html('<b>' + data['mensaje_respuesta'] + '</b>  <i class="fa fa-check-square" aria-hidden="true"></i>');
                $('.modal-footer').html('<button type="button" class="btn btn-azul-modal" data-dismiss="modal">Ok</button>');
                $('.modal-header').html('CIERRE OPERATIVO');

                //Mostramos la modal
                $('.modal').modal('show');

                //Para mantener el mensaje modal por algunos segundos 
                setTimeout(function () {
                    $('.modal').modal('hide');
                    location.reload();
                }, 2000);

            } else {

                //Mostramos el mensaje
                $('.modal-body').html('<p><b>' + data['mensaje_respuesta'] + '</b> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i></p>');
                $('.modal-footer').html('<button type="button" class="btn btn-azul-modal" data-dismiss="modal">Ok</button>');
                $('.modal-header').html('CIERRE OPERATIVO');

                //Mostramos la modal
                $('.modal').modal('show');

            }//Fin del if

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success

    }); //Fin del ajax que permite 	

};//Fin de la función $.fn.cerrar_oper
/*************************************/

/*
 Función que arma la modal_error_generar_txt
 */
$.fn.modal_error_generar_txt = function (mensaje) {

    //Html a mostrar en el modal
    var html = '<form id="form_error_generar_txt">';
    html += '  <div class="form-group">';
    html += '    <p><b>' + mensaje + '</b></p>';
    html += '  </div>';
    html += '</form>';

    //Seteamos los valores del modal
    $('.modal-title').text('Falló al tratar de generar el archivo');
    $('.modal-body').html('');
    $('.modal-body').append(html);
    $('.modal-footer').html('');
    $('.modal-footer').append('<button type="button" class="btn btn-azul-modal" data-dismiss="modal">OK</button>');

    //Mostramos el modal
    $('#modal').modal('show');

    //Evento de la modal cuando se muestra la modal
    $('#modal').off('shown.bs.modal');
    $('#modal').on('shown.bs.modal', function (e) {

        $.fn.eventos();

    });

}//Fin de la función $.fn.modal_error_generar_txt
/****************************************/

/*
 Función que genera el TXT
 */
$.fn.generar_archivo = function () {

    $.ajax({
        url: "<?php echo base_url(); ?>index.php/rem/c_rpt_cierre/generar_archivo",
        type: 'POST',
        dataType: 'json',

        beforeSend: function (objeto) {

            //Mostramos el icono de carga
            $('.btn_generar_txt').css('display', 'none');
            $('.btn_generar_txt').parent().append('<i class="icono_carga fa fa-cog fa-spin fa-3x fa-fw"></i>');

            //Ocultamos el icono para descargar el archivo
            $('.capa_descargar').hide();

        },

        error: function (objeto, quepaso, otroobj) {

            //Mostramos el botón .btn_generar_txt
            $('.btn_generar_txt').parent().children('.icono_carga').remove();
            $('.btn_generar_txt').show();

        },

        success: function (data) {

            //Mostramos el botón .btn_generar_txt
            $('.btn_generar_txt').parent().children('.icono_carga').remove();
            $('.btn_generar_txt').show();

            //Evaluamos la respuesta
            if (data['CODIGO_RESPUESTA'] == 1) {

                //Seteamos la ruta del archivo
//                $('.descargar').attr('href', '../../../assets/modules/rrhh/files/txt/' + data['ARCHIVO']);
                $('.descargar').attr('href', '../../../assets/rem/files/txt_cierre/' + data['ARCHIVO']);
                //Mostramos el icono para descargar el archivo
                $('.capa_descargar').show();

            } else {

                $.fn.modal_error_generar_txt(data['MENSAJE_RESPUESTA']);

            }//Fin del if

            //Función donde se declaran todos los eventos

            $.fn.eventos();

        }//Fin del success

    }); //Fin del ajax

}//Fin de la función $.fn.generar_archivo

/***************************************/

//------------------------------------------------------------------------------------------------------------------------

/*
 Función que arma el datatable
 */
$.fn.tabla = function (id_condicion) {
    //Variable que contendra a la tabla del datatable
    var tbl = '<div class="box box-default">';
    tbl += '<div class="box-body box-profile">';
    tbl += '<table id="tbl_reporte" class="display table table-striped table-bordered" cellspacing="0" width="100%">';
    tbl += '  <thead>';
    tbl += '    <tr>';
    tbl += '      <th style="text-align: center">Cedula</th>';
    tbl += '      <th style="text-align: center">Nombre</th>';
    tbl += '      <th style="text-align: center">Tipo Empleado</th>';
    tbl += '      <th style="text-align: center">Nomina</th>';
    tbl += '      <th style="text-align: center">Monto</th>';
    tbl += '      <th style="text-align: center">Fecha Recepcion</th>';
    tbl += '      <th style="text-align: center">Procesado Por:</th>';
    tbl += '      <th style="text-align: center">Recibido</th>';
    tbl += '    </tr>';
    tbl += '  </thead>';
    tbl += '</table>';
    tbl += '</div>';
    tbl += '</div>';

    $('#tabla_reporte').html('');
    $('#tabla_reporte').append(tbl);

    //Inicializamos el datatable	
    tabla = $('#tabla_reporte table')
            .DataTable({
                lengthChange: false,
                //paging: false,
                "ajax": {
//                    "url": "total_por_estados",
                    "url" : "<?php echo base_url() ?>index.php/rem/c_rpt_cierre/listado_cierre/",
                    "type" : "POST",
                    "data" : { "opcion" : id_condicion }
                },
                "columns": [
                    {"data": "cedula", "class": 'text-center'},
                    {"data": "nombre_apellido", "class": 'text-center'},
                    {"data": "tipo_empleado", "class": 'text-center'},
                    {"data": "nomina", "class": 'text-center'},
                    {"data": "monto", "class": 'text-center'},
                    {"data": "fec_recepcion", "class": 'text-center'},
                    {"data": "usuario_taquilla", "class": 'text-center'},
                    {"data": "recibido", "class": 'text-center'}
                ],
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
                    "lengthMenu": "Resultados _MENU_ por página",
                    "info": "Mostrando página _PAGE_ de _PAGES_",
                    "infoEmpty": "No hay registros habilitados",
                    "loadingRecords": "Por favor espere - Cargando ...<li class='carga_expo fa fa-cog fa-spin fa-3x fa-fw'></li>",
                    "emptyTable": "<b class='text-danger'>No se encontraron resultados.</b>",
                    "infoFiltered": "(filtrado desde _MAX_ total de registros)",
                    "paginate": {
                        "previous": "Anterior",
                        "next": "Siguiente"
                    },
                    "search": "Buscar:"
                },
                //Evento cuando el datatable esta listo
                "initComplete": function (settings, json) {
                    $.fn.eventos();
                }//Fin de initComplete

            });//Fin del DataTable

    //Agregamos los botones
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

    //Mostramos los botones en el Datatable	
    tabla.buttons().container().appendTo('#tbl_reporte_wrapper .col-sm-6:eq(0)');

};//Fin de la función $.fn.tabla
/******************************/