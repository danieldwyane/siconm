var tabla = null;
var serial_caja;

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


    $('.btn_aceptarr').unbind('click');
    $('.btn_aceptarr').click(function () {

        $.fn.inac_empaque();

        $.fn.eventos();

    });//Fin del evento click


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
    tbl += '      <th style="text-align: center">Serial Empaque</th>';
    tbl += '      <th style="text-align: center">Literal Desde</th>';
    tbl += '      <th style="text-align: center">Literal Hasta</th>';
    tbl += '      <th style="text-align: center">Año</th>';
    tbl += '      <th style="text-align: center">Acción</th>';
    tbl += '      <th style="text-align: center">Estatus</th>';
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
                    "url": "<?php echo base_url() ?>index.php/sidre/admin_agen/c_inac_empaque/lista_empaques",
                    "type": "POST",
//                    "data": {"opcion": id_condicion}
                },
                "columns": [
                    {"data": "serial_caja", "class": 'text-center'},
                    {"data": "literal_desde", "class": 'text-center'},
                    {"data": "literal_hasta", "class": 'text-center'},
                    {"data": "anio_caja", "class": 'text-center'},
                    {"data": "serial_caja", "class": 'text-center'},
                    {"data": "descripcion", "class": 'text-center'}
 
                ],
                "fnRowCallback": function (nRow, aData, iDisplayIndex) {
                    
            $('td:eq(4)', nRow).html('<i id="' + aData['serial_caja'] + '" type="button" title="Desactivar" class="fa fa-check btn_Desactivar"></i>');
               

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
            
    tabla.on('click', 'tr td .btn_Desactivar', function (event) {

        //Obtengo el id
        serial_caja = $(this).attr('id');

        $.fn.modal_desactivar();

    }); //Fin del Evento on click 
    
//    tabla.on('click', 'tr td .btn_activar', function (event) {
//
//        //Obtengo el id
//        id_serial_presentacion = $(this).attr('id');
//
//        $.fn.modal_activar();
//
//    }); //Fin del Evento on click 

};//Fin de la función $.fn.tabla
/******************************/



$.fn.modal_desactivar = function () {

    //Html a mostrar en el modal
    var html = '<p><b>¿Está seguro que desea Desactivar el Empaque? </b></p>';
    html += '<form id="form_actualizar" class="form-horizontal" role="form" data-toggle="validator">';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-2">Observación:</label>';
    html += '      <div class="col-sm-8">';
    html += '        <textarea name="observacion" id="observacion" rows="4" cols="50"></textarea>';
    html += '      </div>';
    html += '  </div>';
    html += '    </form>';
    //Seteamos los valores del modal
    $('.modal .modal-title').text('Desactivar Empaque');
    $('.modal .modal-body').html('');
    $('.modal .modal-body').append(html);
    $('.modal .modal-footer').html('');
    $('.modal .modal-footer').append('<button id="' + serial_caja + '" type="button" class="btn btn-azul-modal btn_aceptarr">SI</button>');

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



$.fn.inac_empaque = function () {

    $.ajax({
        url: "<?php echo base_url() ?>index.php/sidre/admin_agen/c_inac_empaque/inac_empaque",
        type: "POST",
        dataType: "json",
        data: {
            
            serial_caja: serial_caja,
            observacion:$('#observacion').val()
        },
        beforeSend: function (objeto) {

            //Limpiamos el mensaje de la modal
//            $('.modal-footer').html('');
//            $('.modal-footer').html('<i class="icono_carga fa fa-cog fa-spin fa-3x fa-fw"></i>');
        },
//        error: function(objeto, quepaso, otroobj) {
//            alert("Error...");
//        },
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

            } else {

                //Mostramos el mensaje
                $('.modal-footer').html('<div class="alert alert-rojo" role="alert">' + data['mensaje_respuesta'] + ' <i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');

            }//Fin del if

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success

    }); //Fin del ajax que permite 		

};//

