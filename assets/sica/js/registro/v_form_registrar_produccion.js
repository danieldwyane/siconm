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
     Evento click sobre el btn_crear_distribucion 
     */
    $('#btn_crear_distribucion').unbind('click');
    $('#btn_crear_distribucion').click(function () {

        $.fn.modal_crear_distribucion();

        $.fn.eventos();

    });//Fin del evento click

}//Fin de la función $.fn.eventos
/*******************************/

/*
 Función que arma la modal crear_distribucion
 */
$.fn.modal_crear_distribucion = function () {

    //Html a mostrar en el modal

    var html = '<div class="modal-body">';
    html = '<div role="tabpanel">';
    html += '<!-- Nav tabs -->';
    html += '<ul class="nav nav-tabs" role="tablist">';
    html += '<li role="presentation" class="active"><a href="#uploadTab" aria-controls="uploadTab" role="tab" data-toggle="tab">Upload</a>';

    html += '</li>';
    html += '<li role="presentation"><a href="#browseTab" aria-controls="browseTab" role="tab" data-toggle="tab">Browse</a>';

    html += '</li>';
    html += '</ul>';
    html += '<!-- Tab panes -->';
    html += '<div class="tab-content">';
    html += '<div role="tabpanel" class="tab-pane active" id="uploadTab">upload Tab</div>';
    html += '<div role="tabpanel" class="tab-pane" id="browseTab">browseTab</div>';
    html += '</div>';
    html += '</div>';

//    var html = '<form id="form_crear_distribucion" class="form-horizontal" role="form" data-toggle="validator">';
//
//    html += '<div class="row">';
//    html += '<div class="col-md-12">';
//    html += '<legend>';
//    html += '<h4 class="text-primary text-center">Producción Por Presentación</h4>';
//    html += '</legend>';
//    html += '</div>';
//    html += '</div>';
//
//    html += '  <div class="form-group">';
//    html += '    <label class="control-label col-sm-3">Rubro:</label>';
//    html += '      <div class="col-sm-9">';
//    html += '        <select id="tipo_moneda" name="tipo_moneda" class="form-control" style="width: 100%;">';
//    html += '          <option value="">Seleccione</option>';
//    html += '        </select>';
//    html += '      </div>';
//    html += '  </div>';
//    html += '  <div class="form-group">';
//    html += '    <label class="control-label col-sm-3">Presentación:</label>';
//    html += '      <div class="col-sm-9">';
//    html += '        <select id="banco_destino" name="banco_destino" class="form-control" style="width: 100%;">';
//    html += '          <option value="">Seleccione</option>';
//    html += '        </select>';
//    html += '      </div>';
//    html += '  </div>';
//    html += '  <div class="form-group">';
//    html += '      <label class="control-label col-sm-3">Cantidad:</label>';
//    html += '      <div class="col-sm-9 date">';
//    html += '        <input id="datepicker" name="fecha_est_dist" type="text" class="form-control" required>';
//    html += '      </div>';
//    html += '  </div>';
//    html += '  <div class="form-group">';
//    html += '      <label class="control-label col-sm-3">Valor Present.:</label>';
//    html += '      <div class="col-sm-9 date">';
//    html += '        <input id="datepicker2" name="fecha_est_lleg" type="text" class="form-control" required>';
//    html += '      </div>';
//    html += '  </div>';
//
//    html += '  <div class="row text-center">';
//    html += '      <button type="button" id="btn_agregar_tipo_moneda" class="btn btn-success btn_agregar_tipo_moneda">Agregar</button>';
//    html += '  </div> ';
//
//    html += '  <div class="lista_denominaciones">';
//    html += '  </div>';
//    html += '  </form>';

    //Seteamos los valores del modal
    $('.modal .modal-title').text('Crear Producción');
    $('.modal .modal-body').html('');
    $('.modal .modal-body').append(html);
    $('.modal .modal-footer').html('');
    $('.modal .modal-footer').append('<button id="" type="button" class="btn btn-azul-modal btn_guardar_distribucion">Guardar</button>');

    /**Cargar libreria select2 en el select**/
    $("#banco_destino").select2({
        placeholder: "Seleccione",
        theme: "classic"
    });

    $('#tipo_moneda').select2({
        placeholder: "Seleccione",
        theme: "classic"
    });

    $('#denominacion').select2();
    /****************************************/

    /**************Date picker***************/
    $('#datepicker').datepicker({
        format: 'dd/mm/yyyy',
        startDate: '-0d',
        autoclose: true
    }).on("changeDate", function (e) {
        jQuery('#datepicker2').datepicker("setStartDate", e.date);
    });
    $('#datepicker2').datepicker({
        format: 'dd/mm/yyyy',
        autoclose: true
    }).on("changeDate", function (e) {
        jQuery('#datepicker').datepicker("setEndDate", e.date);
    });
    /****************************************/

    //Mostramos el modal
    $('.modal').modal('show');

    //Evento de la modal cuando se muestra la modal
    $('.modal').off('shown.bs.modal');
    $('.modal').on('shown.bs.modal', function (e) {

        $.fn.data_inicial();

        $.fn.eventos();
    });
    //Evento de la modal cuando se oculta la modal
    $('.modal').off('hide.bs.modal');
    $('.modal').on('hide.bs.modal', function (e) {

        $.fn.eventos();
    });

};//Fin de la función $.fn.modal_crear_distribucion
/*************************************/


/*
 Función que arma el datatable
 */
$.fn.tabla = function (id_condicion) {
    //Variable que contendra a la tabla del datatable
    var tbl = '<table id="tbl_reporte" class="display table table-striped table-bordered" cellspacing="0" width="100%">';
    tbl += '  <thead>';
    tbl += '    <tr>';
    tbl += '      <th style="text-align: center">Id Producción</th>';
    tbl += '      <th style="text-align: center">Producto</th>';
    tbl += '      <th style="text-align: center">Fecha Producción</th>';
    tbl += '      <th style="text-align: center">Cantidad</th>';
    tbl += '    </tr>';
    tbl += '  </thead>';
    tbl += '</table>';

    $('#tabla_reporte').html('');
    $('#tabla_reporte').append(tbl);

    //Inicializamos el datatable	
    tabla = $('#tabla_reporte table')
            .DataTable({
                "ajax": {
                    "url": "<?php echo base_url() ?>index.php/sidre/distribucion/c_distribucion/distribuciones_realizadas",
                    "type": "POST"
                },
                "columns": [
                    {"data": "id_planificacion", "class": 'text-center'},
                    {"data": "banco_destino", "class": 'text-center'},
                    {"data": "fecha_creacion", "class": 'text-center'},
                    {"data": "fecha_real_llegada", "class": 'text-center'}

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

};//Fin de la función $.fn.tabla
/******************************/

function addImage(pk) {
    alert("addImage: " + pk);
}

$('#myModal .save').click(function (e) {
    e.preventDefault();
    addImage(5);
    $('#myModal').modal('hide');
    //$(this).tab('show')
    return false;
})