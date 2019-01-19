

var tabla = null;
var id_enc_ent_efec;
var id_supervisor;

/*
 Evento document ready
 */
$(document).ready(function () {

    $.fn.tabla();

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


}//Fin de la función $.fn.eventos
/*******************************/

/*
 Función que arma la modal rechazar
 */
$.fn.modal_aprobar = function () {

    //Html a mostrar en el modal
    var html = '<p><b>¿Estás seguro que desea realizar la operación? </b></p>';

    //Seteamos los valores del modal
    $('.modal .modal-title').text('Aprobar Entrega de Efectivo');
    $('.modal .modal-body').html('');
    $('.modal .modal-body').append(html);
    $('.modal .modal-footer').html('');
    $('.modal .modal-footer').append('<button id="' + id_enc_ent_efec + '" type="button" class="btn btn-azul-modal btn_aprobar">SI</button>');
//    $('.modal .modal-footer').append('<button id="'+id_empresa+'" type="button" class="btn btn-danger btn_rechazar">NO</button>');   
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
};//Fin de la función $.fn.modal_detalle
/*************************************/



//------------------------------------------------------------------------------------------------------------------------

/*
 Función que arma el datatable
 */
$.fn.tabla = function () {

    //Variable que contendra a la tabla del datatable
    var tbl = '<table id="tbl_reporte" class="display table table-striped table-bordered" cellspacing="0" width="100%">';
    tbl += '  <thead>';
    tbl += '    <tr>';
    tbl += '      <th style="text-align: center">Cedula</th>';
    tbl += '      <th style="text-align: center">Nombre</th>';
    tbl += '      <th style="text-align: center">Tipo Empleado</th>';
    tbl += '      <th style="text-align: center">Monto</th>';
    tbl += '      <th style="text-align: center">Fecha Recepcion</th>';
    tbl += '      <th style="text-align: center">Recibido</th>';
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
//                    "url": "total_por_estados",
                    "url": "<?php echo base_url() ?>index.php/rem/c_rpt_cierre/listado_cierre_cajero/",
                    "type": "POST"
                },
                "columns": [
                    {"data": "cedula", "class": 'text-center'},
                    {"data": "nombre_apellido", "class": 'text-center'},
                    {"data": "tipo_empleado", "class": 'text-center'},
                    {"data": "monto", "class": 'text-center'},
                    {"data": "fec_recepcion", "class": 'text-center'},
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
                title: 'Listado_cierre_cajero',
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










