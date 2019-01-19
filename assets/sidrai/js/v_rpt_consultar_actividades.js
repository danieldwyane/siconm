var tabla = null;
var id_plan;
var nombre_actividad;
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

    /*
     Evento click sobre el boton guardar de la modal 
     */
    $('.btn_actualizar').unbind('click');
    $('.btn_actualizar').click(function () {

        var formulario = document.getElementById('form_actualizar_data').checkValidity();
        if (formulario == true) {

            $.fn.actualizar_plan_difusion();
        } else {

            //Muestro los mensajes de error
            $('#form_actualizar_data').validator('validate');
            $.fn.eventos();
        }


    }); //Fin del evento click



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
    tbl += '      <th style="text-align: center">Nombre</th>';
    tbl += '      <th style="text-align: center">Tipo Actividad</th>';
    tbl += '      <th style="text-align: center">Poblacion Objetivo</th>';
    tbl += '      <th style="text-align: center">Parroquia</th>';
    tbl += '      <th style="text-align: center">Fecha</th>';
    tbl += '      <th style="text-align: center">Estatus</th>';
    tbl += '    </tr>';
    tbl += '  </thead>';
    tbl += '</table>';
    $('#tabla_reporte').html('');
    $('#tabla_reporte').append(tbl);
    //Asigno el método DataTable a mi tabla
    tabla = $('#tabla_reporte table').DataTable({
        "ajax": {
            "url": "<?php echo base_url() ?>sidrai/c_rpt_eventos/consultar_actividades/",
            "type": "POST"
        },
        "columns": [
            {"data": "id_plan", "class": 'text-center'},
            {"data": "nombre_actividad", "class": 'text-center'},
            {"data": "tipo_actividad", "class": 'text-center'},
            {"data": "poblacion_objetivo", "class": 'text-center'},
            {"data": "parroquia", "class": 'text-center'},
            {"data": "fecha", "class": 'text-center'},
            {"data": "estatus", "class": 'text-center'}
        ],
        "order": [[6, "desc"]],
        //Oculto el ordenar por columna
        "columnDefs": [{
                "targets": [0],
                "orderable": false
            }],
        "orderClasses": true,
        "fnRowCallback": function (nRow, aData, iDisplayIndex) {

            if (aData['id_estatus'] == 3) {

                $('td:eq(6)', nRow).addClass('text-success');
                $('td:eq(0)', nRow).html('<div class="input-group-btn"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="fa fa-cog"></span></button><ul class="dropdown-menu"><li><a href="#" id="' + aData['id_plan'] + '" nombre_actividad="' + aData['nombre_actividad'] + '" class="btn_detalle">Detalle</a></li></ul></div>');
            } else {
                $('td:eq(6)', nRow).addClass('text-danger');
                $('td:eq(0)', nRow).html('<div class="input-group-btn"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="fa fa-cog"></span></button><ul class="dropdown-menu"><li><a href="#" id="' + aData['id_plan'] + '" nombre_actividad="' + aData['nombre_actividad'] + '" class="btn_editar">Finalizar</a></li></ul></div>');
            }

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
    //Agregamos los botones
    new $.fn.dataTable.Buttons(tabla, {
        buttons: [{
                extend: 'excelHtml5',
                text: 'Exportar a Excel',
                title: 'Listado de Actividades de Difusión Programadas',
                fieldSeparator: ';',
                footer: false,
                exportOptions: {
                    orthogonal: 'filter',
                }
            }, {
                extend: 'pdfHtml5',
                text: 'Exportar a PDF',
                title: 'Listado de Actividades de Difusión Programadas',
                orientation: 'landscape'
            }, {
                extend: 'colvis',
                text: 'Visibilidad de columnas'
            }]
    }); //Fin del $.fn.dataTable.Buttons

    //Mostramos los botones en el Datatable   
    tabla.buttons().container().appendTo('#tbl_reporte_wrapper .col-sm-6:eq(0)');
    /*
     Evento on click sobre el botón editar
     */
    $('tr td .btn_editar').unbind('click');
    tabla.on('click', 'tr td .btn_editar', function (event) {

        //Obtengo el id
        id_plan = $(this).attr('id');
        nombre_actividad = $(this).attr('nombre_actividad');
        $.fn.modal_editar();
    }); //Fin del Evento on click
    /***************************/

    /*
     Evento on click sobre el botón ver detalle
     */
    $('tr td .btn_detalle').unbind('click');
    tabla.on('click', 'tr td .btn_detalle', function (event) {

        //Obtengo el id
        id_plan = $(this).attr('id');
        nombre_actividad = $(this).attr('nombre_actividad');
        $.fn.modal_detalle();
    }); //Fin del Evento on click
    /***************************/

}; //Fin de la funcion Tabla

/*
 Función que arma la modal editar
 */
$.fn.modal_editar = function () {

    //Html a mostrar en el modal
    var html = '<form id="form_actualizar_data" role="form" data-toggle="validator">';
    html += '<div class="row">';
    html += ' <div class="col-md-4">';
    html += '  <div class="form-group">';
    html += '    <label>Estatus:</label>';
    html += '    <select id="estatus" name="estatus" class="form-control" style="width: 100%;" required>';
    html += '      <option value="">Seleccione</option>';
    html += '    </select>';
    html += '  </div>';
    html += ' </div>';
    html += ' <div class="col-md-4">';
    html += '  <div class="form-group">';
    html += '   <label>Hora de Inicio:</label>';
    html += '   <div class="input-group date">';
    html += '    <div class="input-group-addon">';
    html += '      <i class="fa fa-clock-o"></i>';
    html += '    </div>';
    html += '      <input id="hora_inicio" name="hora_inicio"  class="form-control" type="text" required>';
    html += '   </div>';
    html += '  </div>';
    html += ' </div>';
    //Fin de la hora inicio
    html += ' <div class="col-md-4">';
    html += '  <div class="form-group">';
    html += '   <label>Hora de Culminación:</label>';
    html += '   <div class="input-group date">';
    html += '    <div class="input-group-addon">';
    html += '      <i class="fa fa-clock-o"></i>';
    html += '    </div>';
    html += '      <input id="hora_fin" name="hora_fin" class="form-control" type="text" required>';
    html += '   </div>';
    html += '  </div>';
    html += ' </div>';
    //Fin de la hora fin
    html += '</div>';
    //Fin del row

    html += '<div class="row">';
    html += ' <div class="col-md-6">';
    html += '  <div class="form-group">';
    html += '    <label>Cant. Femenina:</label>';
    html += '    <input id="cant_f" name="cant_f" class="form-control" type="text" required>';
    html += '  </div>';
    html += ' </div>';
    //Fin de la Cant. Femenina
    html += ' <div class="col-md-6">';
    html += '  <div class="form-group">';
    html += '    <label>Cant. Masculino:</label>';
    html += '    <input id="cant_m" name="cant_m" class="form-control" type="text" required>';
    html += '  </div>';
    html += ' </div>';
    //Fin de la Cant. Masculino
    html += '</div>';
    //Fin del row

    html += '<div class="row">';
    html += ' <div class="col-md-12">';
    html += '  <div class="form-group">';
    html += '    <label>Preguntas / Consultas</label>';
    html += '    <textarea id="preguntas" name="preguntas" class="form-control" rows="3" placeholder="Escriba aqui la pregunta o consulta..."></textarea>';
    html += '  </div>';
    html += ' </div>';
    //Fin de las Preguntas / Consultas
    html += '</div>';
    //Fin del row

    html += '<div class="row">';
    html += ' <div class="col-md-12">';
    html += '  <div class="form-group">';
    html += '    <label>Observaciones / Incidencias</label>';
    html += '    <textarea id="observaciones" name="observaciones" class="form-control" rows="3" placeholder="Escriba aqui sus observaciones o incidencias..."></textarea>';
    html += '  </div>';
    html += ' </div>';
    //Fin de las Observaciones / Incidencias
    html += '</div>';
    html += '</form>';
    //Fin del row

    //Seteamos los valores del modal
    $('#modal_control .modal-title').text(nombre_actividad);
    $('#modal_control .modal-body').html('');
    $('#modal_control .modal-body').append(html);
    $('#modal_control .modal-footer').html('');
    $('.modal .modal-footer').append('<button id="' + id_plan + '" type="button" class="btn btn-azul-modal btn_actualizar">Guardar</button>');
    //$('#modal_control .modal-footer').append('<button type="button" class="btn btn-amarillo-modal" data-dismiss="modal">NO</button>');

    $.fn.consultar_estatus();
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
}; //Fin de la función $.fn.modal_editar
/*************************************/

/*
 Función que arma la modal detalle
 */
$.fn.modal_detalle = function () {

    //Html a mostrar en el modal
    var html = '<form id="form_detalle" role="form" data-toggle="validator">';
    html += '<div class="row">';
    html += ' <div class="col-md-6">';
    html += '  <div class="form-group">';
    html += '   <label>Hora de Inicio:</label>';
    html += '   <div class="input-group date">';
    html += '    <div class="input-group-addon">';
    html += '      <i class="fa fa-clock-o"></i>';
    html += '    </div>';
    html += '      <input id="hora_inicio" name="hora_inicio"  class="form-control" type="text" disabled required>';
    html += '   </div>';
    html += '  </div>';
    html += ' </div>';
    //Fin de la hora inicio
    html += ' <div class="col-md-6">';
    html += '  <div class="form-group">';
    html += '   <label>Hora de Culminación:</label>';
    html += '   <div class="input-group date">';
    html += '    <div class="input-group-addon">';
    html += '      <i class="fa fa-clock-o"></i>';
    html += '    </div>';
    html += '      <input id="hora_fin" name="hora_fin" class="form-control" type="text" disabled required>';
    html += '   </div>';
    html += '  </div>';
    html += ' </div>';
    //Fin de la hora fin
    html += '</div>';
    //Fin del row

    html += '<div class="row">';
    html += ' <div class="col-md-6">';
    html += '  <div class="form-group">';
    html += '    <label>Cant. Femenina:</label>';
    html += '    <input id="cant_f" name="cant_f" class="form-control" type="text" disabled required>';
    html += '  </div>';
    html += ' </div>';
    //Fin de la Cant. Femenina
    html += ' <div class="col-md-6">';
    html += '  <div class="form-group">';
    html += '    <label>Cant. Masculino:</label>';
    html += '    <input id="cant_m" name="cant_m" class="form-control" type="text" disabled required>';
    html += '  </div>';
    html += ' </div>';
    //Fin de la Cant. Masculino
    html += '</div>';
    //Fin del row

    html += '<div class="row">';
    html += ' <div class="col-md-12">';
    html += '  <div class="form-group">';
    html += '    <label>Preguntas / Consultas</label>';
    html += '    <textarea id="preguntas" name="preguntas" disabled class="form-control" rows="3" placeholder="Escriba aqui la pregunta o consulta..."></textarea>';
    html += '  </div>';
    html += ' </div>';
    //Fin de las Preguntas / Consultas
    html += '</div>';
    //Fin del row

    html += '<div class="row">';
    html += ' <div class="col-md-12">';
    html += '  <div class="form-group">';
    html += '    <label>Observaciones / Incidencias</label>';
    html += '    <textarea id="observaciones" name="observaciones" disabled class="form-control" rows="3" placeholder="Escriba aqui sus observaciones o incidencias..."></textarea>';
    html += '  </div>';
    html += ' </div>';
    //Fin de las Observaciones / Incidencias
    html += '</div>';
    html += '</form>';
    //Fin del row

    //Seteamos los valores del modal
    $('#modal_control .modal-title').text(nombre_actividad);
    $('#modal_control .modal-body').html('');
    $('#modal_control .modal-body').append(html);
    $('#modal_control .modal-footer').html('');
    //$('.modal .modal-footer').append('<button id="' + id_plan + '" type="button" class="btn btn-azul-modal btn_actualizar">Ok</button>');
//    $('#modal_control .modal-footer').append('<button type="button" class="btn btn-azul-modal" data-dismiss="modal">Ok</button>');

    /***********************************************************************/

    $.fn.detalle_plan_difusion();
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
}; //Fin de la función $.fn.modal_editar
/*************************************/


/************************************/
$.fn.actualizar_plan_difusion = function () {

    $.ajax({
        url: "<?php echo base_url() ?>sidrai/c_rpt_eventos/actualizar_plan_difusion",
        type: "POST",
        dataType: 'json',
        data: {
            id_plan: id_plan,
            id_estatus: $('#estatus').val(),
            hora_inicio: $('#hora_inicio').val(),
            hora_inicio: $('#hora_inicio').val(),
            hora_fin: $('#hora_fin').val(),
            cant_f: $('#cant_f').val(),
            cant_m: $('#cant_m').val(),
            preguntas: $('#preguntas').val(),
            observaciones: $('#observaciones').val()
        },
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

}; //Fin de la función $.fn.actualizar_data_dir 

$.fn.detalle_plan_difusion = function () {

    $.ajax({
        url: '<?php echo base_url() ?>sidrai/c_rpt_eventos/detalle_plan_difusion',
        type: 'POST',
        dataType: 'json',
        data: {id_plan: id_plan},
        beforeSend: function (objeto) {

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {
            //alert(Object.entries(data['detalle'][0]));
            //Seteamos valores de los datos solicitados
            $('#hora_inicio').val(data['detalle'][0]['hora_inicio_real']);
            $('#hora_fin').val(data['detalle'][0]['hora_fin_real']);
            $('#cant_f').val(data['detalle'][0]['cant_f']);
            $('#cant_m').val(data['detalle'][0]['cant_m']);
            $('#preguntas').val(data['detalle'][0]['preguntas']);
            $('#observaciones').val(data['detalle'][0]['observaciones']);
            //Función donde se declaran todos los eventos
            $.fn.eventos();
        }//Fin del success

    }); //Fin del ajax

};
$.fn.consultar_estatus = function () {

    $.ajax({
        url: '<?php echo base_url() ?>sidrai/c_rpt_eventos/consultar_estatus',
        type: 'POST',
        dataType: 'json',
        beforeSend: function (objeto) {

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            /***********************************************************************/
            //declaramos el select
            $('#estatus').select2({
                theme: "classic"
            });
            //Declaramos la hora inicio y hora de culminacion
            $('#hora_inicio, #hora_fin').datetimepicker({
                format: 'HH:mm:ss'
            });
            /**********************************************************************/

            /**************Evento para validar hora fin*****************************/
            $("#hora_inicio").unbind("dp.change");
            $("#hora_inicio").on("dp.change", function (e) {

                var h_fin = "23:59:59";
                //Seteamos el minimo de #hora_fin
                $('#hora_fin').data("DateTimePicker").minDate(e.date);
                $('#hora_fin').data("DateTimePicker").maxDate(h_fin);
                $.fn.eventos();
            });
            /*********************************************************************/
            /********************************************************************/

//            $("#estatus").unbind("dp.change");
//            $("#estatus").change(function () {
//
//                $('.beneficiario').fadeIn();
//                $('.beneficiario').fadeOut();
//
//            });




            //Recorremos el array
            $(data['estatus']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#estatus').append('<option value="' + elemento['id_estatus'] + '">' + elemento['estatus'] + '</option>');
            }); //Fin del each

            //Función donde se declaran todos los eventos
            $.fn.eventos();
        }//Fin del success

    }); //Fin del ajax

};