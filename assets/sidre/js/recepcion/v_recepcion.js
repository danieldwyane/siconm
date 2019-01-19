var tabla = null;
var id_recepcion;

/*
 Evento document ready
 */
$(document).ready(function () {

//    $("#consultar").select2({
//        placeholder: "Seleccione",
//        theme: "classic"
//    });

    $.fn.tabla();
    $.fn.eventos();


});//Fin del evento document ready
/********************************/

/*
 Función donde se declaran todos los eventos
 */
$.fn.eventos = function () {

    /*
     Evento click sobre el btn_agregar_agencias 
     */
    $('#btn_agregar_agencias').unbind('click');
    $('#btn_agregar_agencias').click(function () {

        $.fn.modal_agregar_agencias();

        $.fn.eventos();

    });//Fin del evento click

    /*
     Evento click sobre el id #consultar
     */
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

        $.fn.eventos();

    }); //Fin del evento click

}//Fin de la función $.fn.eventos
/*******************************/

/*
 Función que arma el datatable
 */
$.fn.tabla = function () {
    //Variable que contendra a la tabla del datatable
    var tbl = '<table id="tbl_reporte" class="display table table-striped table-bordered" cellspacing="0" width="100%">';
    tbl += '  <thead>';
    tbl += '    <tr>';
    tbl += '      <th style="text-align: center">Acciones</th>';
    tbl += '      <th style="text-align: center">Codigo de Recepción</th>';
    tbl += '      <th style="text-align: center">Fecha de Recepción</th>';
    tbl += '    </tr>';
    tbl += '  </thead>';
    tbl += '</table>';

    $('#tabla_reporte').html('');
    $('#tabla_reporte').append(tbl);

    //Inicializamos el datatable	
    tabla = $('#tabla_reporte table')
            .DataTable({
                lengthChange: false,
                //paging: false,
                "ajax": {
//                  "url": "total_por_estados",
                    "url": "<?php echo base_url() ?>index.php/sidre/c_recepcion/datos_distribucion",
                    "type": "POST"
                            //"data" : { "opcion" : id_condicion }
                },
                "columns": [
                    {"data": "id_recepcion", "class": 'text-center'},
                    {"data": "cod_recepcion", "class": 'text-center'},
                    {"data": "fecha_recepcion", "class": 'text-center'}

                ],
                "fnRowCallback": function (nRow, aData, iDisplayIndex) {

                    //      if (aData['id_estatus'] == 1) {

                    //$('td:eq(0)', nRow).html('<div class="input-group-btn"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="fa fa-cog"></span></button><ul class="dropdown-menu"><li><a href="#" id="' + aData['id_recepcion'] + '" class="btn_x_recibir">Recepcionar</a></li></ul></div>');
                    $('td:eq(0)', nRow).html('<i id="' + aData['id_recepcion'] + '" type="button" title="Desactivar" class="fa fa-check btn_Desactivar"></i>');

//                    } else {
//                        
//                        $('td:eq(0)', nRow).html('<div class="input-group-btn"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="fa fa-cog"></span></button><ul class="dropdown-menu"><li><a href="#" id="' + aData['id_recepcion'] + '" class="btn_detalle">Detalle</a></li></ul></div>');
//                    }

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

//    /*
//     Evento on click sobre el botón ver detalle
//     */
//    $('tr td .btn_x_recibir').unbind('click');
//    tabla.on('click', 'tr td .btn_x_recibir', function (event) {
//
//        //Obtengo el id
//        id_recepcion = $(this).attr('id');
//
//        $.fn.modal_recepcionar();
//    }); //Fin del Evento on click
//    /***************************/

    tabla.on('click', 'tr td .btn_Desactivar', function (event) {

        //Obtengo el id
        id_recepcion = $(this).attr('id');

        $.fn.modal_recepcionar();

    }); //Fin del Evento on click 

};//Fin de la función $.fn.tabla
/******************************/

/*
 Función que arma la modal_recepcionar
 */
$.fn.modal_recepcionar = function () {

    //Html a mostrar en el modal
    var html = '<form id="form_agregar_agencias" class="form-horizontal" role="form" data-toggle="validator">';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Monto Bsf:</label>';
    html += '      <div class="col-sm-3">';
    html += '        <input id="agencia" name="agencia" type="text" class="form-control" required>';
    html += '      </div>';
    html += '    <label class="control-label col-sm-3">Monto BsS:</label>';
    html += '      <div class="col-sm-3">';
    html += '        <input id="agencia" name="agencia" type="text" class="form-control" required>';
    html += '      </div>';
    html += '  </div>';

    html += ' <div class="form-group">';
    html += '     <label class="control-label col-sm-2">Sí</label>';
    html += '  <div class="col-sm-3">';
    html += '      <input type="radio" name="r3" class="flat-red" checked>';
    html += '  </div>';
    html += '     <label class="control-label col-sm-2">No</label>';
    html += '      <div class="col-sm-3">';
    html += '    <input type="radio" name="r3" class="flat-red">';
    html += '  </label>';
    html += ' </div>';
    html += ' </div>';
    html += ' </div>';
    html += '</form>';

    //Seteamos los valores del modal
    $('.modal .modal-title').text('Aprobar Recepción');
    $('.modal .modal-body').html('');
    $('.modal .modal-body').append(html);
    $('.modal .modal-footer').html('');
    $('.modal .modal-footer').append('<button id="' + id_recepcion + '" type="button" class="btn btn-azul-modal btn_aprobar">SI</button>');

    $('.modal .modal-footer').append('<button type="button" class="btn btn-amarillo-modal" data-dismiss="modal">NO</button>');
    //Mostramos el modal
    $('.modal').modal('show');
    //Evento de la modal cuando se muestra la modal
    $('.modal').off('shown.bs.modal');
    $('.modal').on('shown.bs.modal', function (e) {

        $.fn.eventos();
    });
    //Evento de la modal cuando se oculta la modal
    $('.modal').off('hide.bs.modal');
    $('.modal').on('hide.bs.modal', function (e) {

        $.fn.eventos();
    });

};//Fin de la función $.fn.modal_recepcionar
/*************************************/

/*
 Función que muestra los tipos de evaluacion y periodos.
 */
//$.fn.montos_recibidos = function () {
//
//    $.ajax({
//        url: "<?php echo base_url() ?>index.php/sidre/c_recepcion/montos_recibidos",
//        type: 'POST',
//        dataType: 'json',
//        data: {id_recepcion: id_recepcion},
//        beforeSend: function (objeto) {
//
//        },
//        error: function (objeto, quepaso, otroobj) {
//
//        },
//        success: function (data) {
//
//            //Recorremos el array
//            $(data).each(function (index, elemento) {
//
//                //Mostramos las opciones
//                $('#establecimiento').append('<option value="' + elemento['id_establecimiento'] + '">' + elemento['desc_establecimiento'] + '</option>');
//
//                //Seteamos valores de los datos del empleado
//                //$('#descripcion').val(data['descripcion']);
//                $('#descripcion').val(elemento['descripcion']);
//
//                //Recorremos los recaudos
//                $(data['recaudos']).each(function (indice, elemento) {
//
//                    var html = '<div class="form-group">';
//                    html += ' <label>' + elemento['moneda'] + '</label>';
//                    html += ' <input  id="' + elemento['id_moneda'] + '" name="' + elemento['id_moneda'] + '" type="text" required>';
//                    html += '</div>';
//                    
//                    //Mostramos los recaudos
//                    $('.montos').append(html);
//
//                }); //Fin del each
//
//                //Mostramos los recaudos
////               //$('.recaudos_rec').append(html);
//                
//            }); //Fin del each
//            
//                    //Función donde se declaran todos los eventos
//                    $.fn.eventos();
//
//        }//Fin del success
//
//    });//Fin del ajax
//
//}//Fin de la función
/******************/