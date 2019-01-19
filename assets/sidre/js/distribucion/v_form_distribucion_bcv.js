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

    $('.btn_guardar_distribucion').unbind('click');
    $('.btn_guardar_distribucion').click(function () {

        var formulario = document.getElementById('form_crear_distribucion').checkValidity();

        if (formulario == true) {

            $.fn.crear_distribucion();

        } else {

            //Muestro los mensajes de error
            $('#form_crear_distribucion').validator('validate');

            $.fn.eventos();
        }

    });//Fin del evento click

    $('#btn_agregar_tipo_moneda').unbind('click');
    $('#btn_agregar_tipo_moneda').click(function () {

        //Obtenemos valores
        var valor = $('#tipo_moneda option:selected').val();
        var descripcion = $('#tipo_moneda option:selected').text();

        //Evaluamos el id de la condición
        if (valor != 0) {
            $.fn.mostrar_denominacion(valor, descripcion);

        }

        $.fn.eventos();

    }); //Fin del evento click

    $('#btn_agregar_denominacion').unbind('click');
    $('#btn_agregar_denominacion').click(function () {

        //Obtenemos valores
        var valor = $('#tipo_moneda option:selected').val();
        var descripcion = $('#tipo_moneda option:selected').text();

        //Evaluamos el id de la condición
        if (valor != 0) {
            $.fn.agregar_denominacion(valor, descripcion);

        }

        $.fn.eventos();

    }); //Fin del evento click

}//Fin de la función $.fn.eventos
/*******************************/

/*
 Función que arma la modal crear_distribucion
 */
$.fn.modal_crear_distribucion = function () {

    //Html a mostrar en el modal
    var html = '<form id="form_crear_distribucion" class="form-horizontal" role="form" data-toggle="validator">';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Banco Destino:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <select id="banco_destino" name="banco_destino" class="form-control" style="width: 100%;">';
    html += '          <option value="">Seleccione</option>';
    html += '        </select>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '      <label class="control-label col-sm-3">Fecha Est. Dist.:</label>';
    html += '      <div class="col-sm-9 date">';
    html += '        <input id="datepicker" name="fecha_est_dist" type="text" class="form-control" required>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '      <label class="control-label col-sm-3">Fecha Est. Lleg.:</label>';
    html += '      <div class="col-sm-9 date">';
    html += '        <input id="datepicker2" name="fecha_est_lleg" type="text" class="form-control" required>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Tipo Moneda:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <select id="tipo_moneda" name="tipo_moneda" class="form-control" style="width: 100%;">';
    html += '          <option value="">Seleccione</option>';
    html += '        </select>';

//    html += '        <select id="tipo_moneda" name="tipo_moneda" class="form-control select2" multiple="multiple" data-placeholder="Seleccione Tipos de Moneda" style="width: 100%;">';
//    html += '        <option value="1">Bolívar Fuerte</option>';
//    html += '        <option value="2">Bolívar Soberano</option>';
//    html += '        </select>';
    html += '      </div>';
    html += '  </div>';

    html += '  <div class="row text-center">';
    html += '      <button type="button" id="btn_agregar_tipo_moneda" class="btn btn-success btn_agregar_tipo_moneda">Agregar</button>';
    html += '  </div> ';

    html += '  <div class="lista_denominaciones">';
//    html += '  <div class="form-group col-sm-12 text-center">';
//    html += '    <label class="control-label">Bolívar Fuerte:</label>';
//    html += '  </div>';
//    html += '  <div class="form-group">';
//    html += '    <label class="control-label col-sm-3">Denominaciones:</label>';
//    html += '      <div class="col-sm-9">';
//    html += '        <select id="denominacion" name="denominacion" class="form-control select2" multiple="multiple" data-placeholder="Seleccione Tipos de Denominación" style="width: 100%;">';
//    html += '        <option>Mil Bolívares</option>';
//    html += '        <option>Dos Mil Bolívares</option>';
//    html += '        <option>Cinco Mil Bolívares</option>';
//    html += '        </select>';
//    html += '      </div>';
//    html += '  </div>';
    html += '  </div>';

//    html += '  <div class="form-group">';
//    html += '    <label class="control-label col-sm-3">Mil Bolívares:</label>';
//    html += '      <div class="col-sm-9">';
//    html += '        <input id="1" name="1" type="text" class="form-control denominacion" required>';
//    html += '      </div>';
//    html += '  </div>';
//    html += '  <div class="form-group">';
//    html += '    <label class="control-label col-sm-3">Dos Mil Bolívares:</label>';
//    html += '      <div class="col-sm-9">';
//    html += '        <input id="2" name="2" type="text" class="form-control denominacion" required>';
//    html += '      </div>';
//    html += '  </div>';
//    html += '  <div class="form-group">';
//    html += '    <label class="control-label col-sm-3">Cinco Mil Bolívares:</label>';
//    html += '      <div class="col-sm-9">';
//    html += '        <input id="3" name="3" type="text" class="form-control denominacion" required>';
//    html += '      </div>';
//    html += '  </div>';

    html += '  </form>';

    //Seteamos los valores del modal
    $('.modal .modal-title').text('Crear Distribución');
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
 Función donde se carga la data inicial para los select 
 */
$.fn.data_inicial = function () {
    $.ajax({
        url: "<?php echo base_url() ?>index.php/sidre/distribucion/c_distribucion/data_inicial",
        type: 'POST',
        dataType: 'json',
        success: function (data) {

            //Recorremos el array banco_destino
            $(data['banco_destino']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#banco_destino').append('<option value="' + elemento['id_inst_ban'] + '">' + elemento['banco'] + '</option>');

            });//Fin del each

            //Recorremos el array tipo_moneda
            $(data['tipo_moneda']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#tipo_moneda').append('<option value="' + elemento['id_tipo_moneda'] + '">' + elemento['tipo_moneda'] + '</option>');

            });//Fin del each

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }
    });
};//fin funcion data_inicial

/*
 Función para crear distribucion
 */
$.fn.crear_distribucion = function () {

    //Armamos el objeto tipo formulario
    var formData = new FormData($("#form_crear_distribucion")[0]);

    /**************Contar Nro de Campos Denominaciones****************************/
    var arreglo_nro_campos = [];
    var elementos = $('.denominacion');

    var nro_campos = 0;
    $.each(elementos, function (i, val) {
        nro_campos++;
    });

    arreglo_nro_campos.push(nro_campos);

    //////////////////////Crear array con denominaciones///////////////////////////

    var arreglo = [];

    var rastreo = 1;

    while (rastreo <= arreglo_nro_campos) {

        var a = $('#' + rastreo + '').attr('id');
        var b = $('#' + rastreo + '').val();

        arreglo.push({tipo_moneda: a, cantidad: b});

        rastreo++;
    }
    //////////////////////////////////////////
    /******************************************/

    $.ajax({
        url: "<?php echo base_url() ?>index.php/sidre/distribucion/c_distribucion/crear_distribucion",
        type: "POST",

//        cache: false,
//        contentType: false,
//        processData: false,
//        accepts: "application/json",

        dataType: 'json',
//        data: formData,
        data: {arreglo: arreglo},
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

            } else {

                //Mostramos el mensaje
                $('.modal-footer').html('<div class="alert alert-rojo" role="alert">' + data['mensaje_respuesta'] + ' <i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');

            }//Fin del if

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success

    }); //Fin del ajax

}//Fin de la función $.fn.crear_distribucion
/*****************************************/

/*
 Función para mostrar_denominacion
 */
$.fn.mostrar_denominacion = function (valor, descripcion) {

//    $.ajax({
//        url: "<?php echo base_url() ?>index.php/sidre/distribucion/c_distribucion/mostrar_denominacion",
//        type: "POST",
//        dataType: 'json',
//        data: {arreglo: arreglo},
//        beforeSend: function (objeto) {
//
//        },
//        error: function (objeto, quepaso, otroobj) {
//
//        },
//        success: function (data) {

    var html = '<div id="' + valor + '">';
    html += '<div class="row">';
    html += '<div class="col-md-12">';
    html += '<legend>';
    html += '<h3 class="text-primary text-center">' + descripcion + '</h3>';
    html += '</legend>';
    html += '</div>';
    html += '</div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Denominaciones:</label>';
    html += '      <div class="col-sm-9">';

    html += '        <select id="' + valor + '" name="' + valor + '" class="form-control" style="width: 100%;">';
    html += '          <option value="">Seleccione</option>';
    html += '        <option>Mil Bolívares</option>';
    html += '        <option>Dos Mil Bolívares</option>';
    html += '        <option>Cinco Mil Bolívares</option>';
    html += '        </select>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="row text-center">';
    html += '      <button type="button" id="btn_agregar_denominacion" class="btn btn-warning btn_agregar_denominacion">Agregar</button>';
    html += '  </div> ';
    html += '  </div> ';

    $('.lista_denominaciones').append(html);

    $('#' + valor + '').select2({
        placeholder: "Seleccione",
        theme: "classic"
    });

    //Función donde se declaran todos los eventos
    $.fn.eventos();

//        }//Fin del success
//
//    }); //Fin del ajax

}//Fin de la función $.fn.mostrar_denominacion
/*****************************************/

/*
 Función para mostrar_denominacion
 */
$.fn.agregar_denominacion = function (valor, descripcion) {

//    $.ajax({
//        url: "<?php echo base_url() ?>index.php/sidre/distribucion/c_distribucion/mostrar_denominacion",
//        type: "POST",
//        dataType: 'json',
//        data: {arreglo: arreglo},
//        beforeSend: function (objeto) {
//
//        },
//        error: function (objeto, quepaso, otroobj) {
//
//        },
//        success: function (data) {

    var html = '<div class="row">';
    html += '<div class="col-md-12">';
    html += '<legend>';
    html += '<h3 class="text-primary text-center">' + descripcion + '</h3>';
    html += '</legend>';
    html += '</div>';
    html += '</div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Denominaciones:</label>';
    html += '      <div class="col-sm-9">';

    html += '        <select id="' + valor + '" name="' + valor + '" class="form-control" style="width: 100%;">';
    html += '          <option value="">Seleccione</option>';
    html += '        <option>Mil Bolívares</option>';
    html += '        <option>Dos Mil Bolívares</option>';
    html += '        <option>Cinco Mil Bolívares</option>';
    html += '        </select>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="row text-center">';
    html += '      <button type="button" id="btn_agregar_denominacion_' + valor + '" class="btn btn-warning btn_agregar_denominacion_' + valor + '">Agregar</button>';
    html += '  </div> ';

    $('.lista_denominaciones').append(html);

    $('#' + valor + '').select2({
        placeholder: "Seleccione",
        theme: "classic"
    });

    //Función donde se declaran todos los eventos
    $.fn.eventos();

//        }//Fin del success
//
//    }); //Fin del ajax

}//Fin de la función $.fn.mostrar_denominacion
/*****************************************/



/*
 Función que arma el datatable
 */
$.fn.tabla = function (id_condicion) {
    //Variable que contendra a la tabla del datatable
    var tbl = '<table id="tbl_reporte" class="display table table-striped table-bordered" cellspacing="0" width="100%">';
    tbl += '  <thead>';
    tbl += '    <tr>';
    tbl += '      <th style="text-align: center">Id Planificación</th>';
    tbl += '      <th style="text-align: center">Banco Destino</th>';
    tbl += '      <th style="text-align: center">Fecha Creación</th>';
    tbl += '      <th style="text-align: center">Fecha Llegada</th>';
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
