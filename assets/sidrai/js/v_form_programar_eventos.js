//Variable Global
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

    $("#hora_inicio").unbind("dp.change");
    $("#hora_inicio").on("dp.change", function (e) {

        var h_fin = "23:59:59";

        //Seteamos el minimo de #hora_fin
        $('#hora_fin').data("DateTimePicker").minDate(e.date);
        $('#hora_fin').data("DateTimePicker").maxDate(h_fin);

        $.fn.eventos();
    });

    /*
     Evento click sobre el btn_agregar_eventos 
     */
    $('#btn_agregar_eventos').unbind('click');
    $('#btn_agregar_eventos').click(function () {

        $.fn.modal_agregar_eventos();

        $.fn.eventos();

    }); //Fin del evento click

    $('#btn_guardar').unbind('click');
    $('#btn_guardar').click(function () {

        var formulario = document.getElementById('form_programar_evento').checkValidity();
        if (formulario == true) {

            $.fn.programar_evento();

        } else {

            //Muestro los mensajes de error
//            $('#form_programar_evento').validator('destroy');
            $('#form_programar_evento').validator('validate');

            $.fn.eventos();
        }

    }); //Fin del evento click

    /*
     Evento change de Estado
     */
    $('#estado').unbind('select2:select');
    $('#estado').on('select2:select', function (e) {

        //Obtengo el id del Estado
        var estado = $('#estado').val();
        $.ajax({
            url: "<?php echo base_url() ?>sidrai/c_eventos/municipios",
            type: 'POST',
            dataType: 'json',
            data: {
                estado: estado
            },
            beforeSend: function (objeto) {
            },
            error: function (objeto, quepaso, otroobj) {

            },
            success: function (data) {

                $("#municipio").removeAttr("disabled");
                //iniciar sin opcion seleccionada
                $("#municipio").html('<option value="">Seleccione</option>');
                //Recorremos el array
                $(data['municipios']).each(function (index, elemento) {

                    //Mostramos las opciones
                    $('#municipio').append('<option value="' + elemento['id_municipio'] + '">' + elemento['municipio'] + '</option>');
                }); //Fin del each

                $.fn.eventos();
            }//Fin del success

        }); //Fin del ajax

        $.fn.eventos();

    }); //Fin del evento change estado
    /********************************/

    /*
     Evento change de municipio 
     */
    $('#municipio').unbind('select2:select');
    $('#municipio').on('select2:select', function () {

        //Obtengo el id del Estado
        var municipio = $('#municipio').val();
        $.ajax({
            url: "<?php echo base_url() ?>sidrai/c_eventos/parroquias",
            type: 'POST',
            dataType: 'json',
            data: {
                municipio: municipio
            },
            beforeSend: function (objeto) {

            },
            error: function (objeto, quepaso, otroobj) {

            },
            success: function (data) {

                $("#parroquia").removeAttr("disabled");
                //iniciar sin opcion seleccionada
                $("#parroquia").html('<option value="">Seleccione</option>');
                //Recorremos el array
                $(data['parroquias']).each(function (index, elemento) {

                    //Mostramos las opciones
                    $('#parroquia').append('<option value="' + elemento['id_parroquia'] + '">' + elemento['parroquia'] + '</option>');
                }); //Fin del each

                $.fn.eventos();
            }//Fin del success

        }); //Fin del ajax

        $.fn.eventos();

    }); //Fin del evento change municipio


}//Fin de la función $.fn.eventos
/*******************************/

/*
 Función donde se carga la data inicial para los select 
 */
$.fn.data_inicial = function () {
    $.ajax({
        url: "<?php echo base_url() ?>sidrai/c_eventos/data_inicial",
        type: 'POST',
        dataType: 'json',
        success: function (data) {

            //iniciar sin opcion seleccionada
            $("#estado").html('<option value="">Seleccione</option>');
            //Recorremos el array
            $(data['estado']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#estado').append('<option value="' + elemento['id_estado'] + '">' + elemento['estado'] + '</option>');
            }); //Fin del each

            //Recorremos el array
            $(data['tipo_actividad']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#tipo_actividad').append('<option value="' + elemento['id_tipo_actividad'] + '">' + elemento['tipo_actividad'] + '</option>');
            }); //Fin del each

            //Recorremos el array
            $(data['poblacion_objetivo']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#poblacion_objetivo').append('<option value="' + elemento['id_pob_objetivo'] + '">' + elemento['poblacion_objetivo'] + '</option>');
            }); //Fin del each

            //Recorremos el array
            $(data['facilitador']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#facilitador').append('<option value="' + elemento['id_usuario'] + '">' + elemento['nombre'] + '</option>');
            }); //Fin del each

            //Declaramos los select2
            $('#estado, #municipio, #parroquia, #tipo_actividad, #poblacion_objetivo, #facilitador').select2();
            //Declaramos la fecha
            $('#fecha').datetimepicker({
                format: 'DD/MM/YYYY'
            });
            //Declaramos la hora inicio y hora de culminacion
            $('#hora_inicio, #hora_fin').datetimepicker({
                format: 'HH:mm:ss'
            });
            //Función donde se declaran todos los eventos
            $.fn.eventos();
        }
    });
}; //fin funcion data_inicial

/*
 Función que manda a registrar un evento
 */
$.fn.programar_evento = function () {

    //Armamos el objeto tipo formulario
    var formData = new FormData($("#form_programar_evento")[0]);

    $.ajax({
        url: "<?php echo base_url() ?>sidrai/c_eventos/programar_evento",
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

}//Fin de la función $.fn.programar_evento
/*****************************************/

$.fn.tabla = function () {

    if (tabla != null) {

        tabla.destroy();
    }

    //Variable que contendra a la tabla del datatable
    var tbl = '<table id="tbl_reporte" class="display table table-striped table-bordered" cellspacing="0" width="100%">';
    tbl += '  <thead>';
    tbl += '    <tr>';
    tbl += '      <th style="text-align: center">REGISTRO</th>';
    tbl += '      <th style="text-align: center">ESTADO</th>';
    tbl += '      <th style="text-align: center">NOMBRE DE LA ACTIVIDAD</th>';
    tbl += '      <th style="text-align: center">TIPO ACTIVIDAD</th>';
    tbl += '      <th style="text-align: center">INSTITUCIONES/ COMUNIDADES</th>';
    tbl += '      <th style="text-align: center">POBLACIÓN OBJETIVO</th>';
    tbl += '      <th style="text-align: center">FECHA</th>';
    tbl += '      <th style="text-align: center">ESTATUS</th>';
    tbl += '    </tr>';
    tbl += '  </thead>';
    tbl += '</table>';
    $('#tabla_reporte').html('');
    $('#tabla_reporte').append(tbl);

    //Asigno el método DataTable a mi tabla
    tabla = $('#tabla_reporte table').DataTable({
        "ajax": {
            "url": "<?php echo base_url() ?>sidrai/c_eventos/consultar_actividades_programadas/",
            "type": "POST"
        },
        "columns": [
            {"data": "id_plan", "class": 'text-center'},
            {"data": "estado", "class": 'text-center'},
            {"data": "nombre_actividad", "class": 'text-center'},
            {"data": "tipo_actividad", "class": 'text-center'},
            {"data": "institucion_atendida", "class": 'text-center'},
            {"data": "poblacion_objetivo", "class": 'text-center'},
            {"data": "fecha", "class": 'text-center'},
            {"data": "estatus", "class": 'text-center'}
        ],
        "order": [[0, "desc"]],
        //Oculto el ordenar por columna
        "columnDefs": [{
                "targets": [0],
                "orderable": false
            }],
        "orderClasses": true,
        "fnRowCallback": function (nRow, aData, iDisplayIndex) {

//            $('td:eq(0)', nRow).html('<div class="input-group-btn"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="fa fa-cog"></span></button><ul class="dropdown-menu"><li><a href="#" id="' + aData['id_plan'] + '" nombre_actividad="' + aData['nombre_actividad'] + '" class="btn_detalle">Detalle</a></li></ul></div>');


            if (aData['id_estatus'] == 3) {

                $('td:eq(7)', nRow).addClass('text-success');
//                $('td:eq(0)', nRow).html('<div class="input-group-btn"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="fa fa-cog"></span></button><ul class="dropdown-menu"><li><a href="#" id="' + aData['id_plan'] + '" nombre_actividad="' + aData['nombre_actividad'] + '" class="btn_detalle">Detalle</a></li></ul></div>');

            } else {
                $('td:eq(7)', nRow).addClass('text-danger');
//                $('td:eq(0)', nRow).html('<div class="input-group-btn"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="fa fa-cog"></span></button><ul class="dropdown-menu"><li><a href="#" id="' + aData['id_plan'] + '" nombre_actividad="' + aData['nombre_actividad'] + '" class="btn_editar">Finalizar</a></li></ul></div>');
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
    });//Fin del $.fn.dataTable.Buttons

    //Mostramos los botones en el Datatable   
    tabla.buttons().container().appendTo('#tbl_reporte_wrapper .col-sm-6:eq(0)');

    /*
     Evento on click sobre el botón ver detalle
     */
//    $('tr td .btn_detalle').unbind('click');
//    tabla.on('click', 'tr td .btn_detalle', function (event) {
//
//        //Obtengo el id
//        id_plan = $(this).attr('id');
//        nombre_actividad = $(this).attr('nombre_actividad');
//
//        $.fn.modal_agregar_evento();
//
//    }); //Fin del Evento on click
    /***************************/

}; //Fin de la funcion Tabla

/*
 Función que arma la modal agregar_evento
 */
$.fn.modal_agregar_eventos = function () {

    //Html a mostrar en el modal
    var html = ' <form id="form_programar_evento" name="form_programar_evento" role="form" data-toggle="validator">';
    html += ' <div class="row">';
    html += '  <div class="col-md-12">';
    html += '    <legend class="titulo_p text-center">Datos de la Actividad</legend>';
    html += '  </div>';
    html += ' </div>';


    html += ' <div class="row">';
    html += '  <div class="col-md-6">';
    html += '   <div class="form-group">';
    html += '    <label>Fecha:</label>';
    html += '    <div class="input-group date">';
    html += '     <div class="input-group-addon">';
    html += '      <i class="fa fa-calendar"></i>';
    html += '     </div>';
    html += '     <input id="fecha" name="fecha" class="form-control" type="text" required>';
    html += '    </div>';
    html += '   </div>';
    html += '  </div>';

    html += '  <div class="col-md-6">';
    html += '   <div class="form-group">';
    html += '    <label>Tipo de Actividad:</label>';
    html += '    <select id="tipo_actividad" name="tipo_actividad" class="form-control select2" style="width: 100%;" required>';
    html += '     <option value="">Seleccione</option>';
    html += '    </select>';
    html += '   </div>';
    html += '  </div>';
    html += ' </div>';

    html += ' <div class="row">';
    html += '  <div class="col-md-6">';
    html += '   <div class="form-group">';
    html += '    <label>Hora de Inicio:</label>';
    html += '     <div class="input-group date">';
    html += '      <div class="input-group-addon">';
    html += '       <i class="fa fa-clock-o"></i>';
    html += '      </div>';
    html += '      <input id="hora_inicio" name="hora_inicio"  class="form-control" type="text" required>';
    html += '     </div>';
    html += '    </div>';
    html += '  </div>';
    html += '  <div class="col-md-6">';
    html += '   <div class="form-group">';
    html += '    <label>Hora de Culminación:</label>';
    html += '     <div class="input-group date">';
    html += '      <div class="input-group-addon">';
    html += '       <i class="fa fa-clock-o"></i>';
    html += '      </div>';
    html += '      <input id="hora_fin" name="hora_fin" class="form-control" type="text" required>';
    html += '     </div>';
    html += '    </div>';
    html += '  </div>';
    html += ' </div>';


    html += ' <div class="row">';
    html += '  <div class="col-md-6">';
    html += '    <div class="form-group">';
    html += '      <label>Poblacion Objetivo:</label>';
    html += '      <select id="poblacion_objetivo" name="poblacion_objetivo" class="form-control select2" style="width: 100%;" required>';
    html += '         <option value="">Seleccione</option>';
    html += '       </select>';
    html += '   </div>';
    html += '  </div>';
    html += '  <div class="col-md-6">';
    html += '   <div class="form-group">';
    html += '    <label>Institución / Comunidad:</label>';
    html += '    <input id="institucion_atendida" name="institucion_atendida" class="form-control" type="text" required>';
    html += '   </div>';
    html += '  </div>';
    html += ' </div>';

    html += ' <div class="row">';
    html += '  <div class="col-md-6">';
    html += '    <div class="form-group">';
    html += '      <label>Nombre de la Actividad:</label>';
    html += '    <input id="nombre_actividad" name="nombre_actividad" class="form-control" type="text" required>';
    html += '   </div>';
    html += '  </div>';
    html += '  <div class="col-md-6">';
    html += '    <div class="form-group">';
    html += '      <label>Facilitador Asignado:</label>';
    html += '      <select id="facilitador" name="facilitador" class="form-control select2" style="width: 100%;">';
    html += '         <option value="">Seleccione</option>';
    html += '       </select>';
    html += '   </div>';
    html += '  </div>';
    html += ' </div>';

    html += ' </div>';
    html += ' <div class="row">';
    html += '  <div class="col-md-12">';
    html += '    <legend class="titulo_p text-center">Dirección de la Actividad</legend>';
    html += '  </div>';
    html += ' </div>';
    html += ' <div class="row">';
    html += '  <div class="col-md-4">';
    html += '    <div class="form-group">';
    html += '      <label>Estado:</label>';
    html += '      <select id="estado" name="estado" class="form-control select2" style="width: 100%;" required>';
    html += '         <option value="">Seleccione</option>';
    html += '       </select>';
    html += '    </div>';
    html += '  </div>';
    html += '  <div class="col-md-4">';
    html += '    <div class="form-group">';
    html += '      <label>Municipio:</label>';
    html += '      <select id="municipio" name="municipio" class="form-control select2" style="width: 100%;" required disabled>';
    html += '         <option value="">Seleccione</option>';
    html += '       </select>';
    html += '    </div>';
    html += '  </div>';
    html += '  <div class="col-md-4">';
    html += '    <div class="form-group">';
    html += '      <label>Parroquia:</label>';
    html += '      <select id="parroquia" name="parroquia" class="form-control select2" style="width: 100%;" required disabled>';
    html += '         <option value="">Seleccione</option>';
    html += '       </select>';
    html += '    </div>';
    html += '  </div>';
    html += ' </div>';
    html += ' <div class="row">';
    html += '  <div class="col-md-6">';
    html += '    <div class="form-group">';
    html += '      <label>Ciudad:</label>';
    html += '      <input id="ciudad" name="ciudad" class="form-control" type="text" required>';
    html += '    </div>';
    html += '  </div>';
    html += '  <div class="col-md-6">';
    html += '    <div class="form-group">';
    html += '      <label>Lugar:</label>';
    html += '      <input id="lugar" name="lugar" class="form-control" type="text" required>';
    html += '    </div>';
    html += '  </div>';
    html += ' </div>';
//    html += '  <div class="col-md-6 text-center">';
//    html += '    <button type="button" id="btn_agregar_eventos" class="btn btn-azul-modal pull-right">Guardar</button>';
//    html += '  </div>';
    html += ' </form>';

//Seteamos los valores del modal
    $('.modal .modal-title').text('Registrar Programación');
    $('.modal .modal-body').html('');
    $('.modal .modal-body').append(html);
    $('.modal .modal-footer').html('');
    $('.modal .modal-footer').append('<button id="btn_guardar" type="button" class="btn btn-azul-modal btn_guardar">Guardar</button>');

    $('#estado, #municipio, #parroquia').select2({
        theme: "classic"
    });

    /**Cargar libreria mask en el input**/
//    $("#codigo_agencia").mask("0000");

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

};//Fin de la función $.fn.modal_agregar_evento
/*********************************************/







