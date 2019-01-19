var tabla = null;
var id_agencia;

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

    $('.btn_guardar').unbind('click');
    $('.btn_guardar').click(function () {

        var formulario = document.getElementById('form_agregar_agencias').checkValidity();

        if (formulario == true) {

            $.fn.registrar_agencia();

        } else {

            //Muestro los mensajes de error
//            $('#form_agregar_agencias').validator('destroy');
            $('#form_agregar_agencias').validator('validate');

            $.fn.eventos();
        }

    });//Fin del evento click
    
    $('.btn_aprobar').unbind('click');
    $('.btn_aprobar').click(function () {

        $.fn.desactivar_agencia();

        $.fn.eventos();

    });//Fin del evento click
    
    $('.btn_activar').unbind('click');
    $('.btn_activar').click(function () {

        $.fn.activar_agencia();

        $.fn.eventos();

    });//Fin del evento click
    

    /*
     Evento click sobre el btn_agregar_agencias 
     */
    $('#btn_agregar_agencias').unbind('click');
    $('#btn_agregar_agencias').click(function () {

        $.fn.modal_agregar_agencias();

        $.fn.eventos();

    });//Fin del evento click

    /*
     Evento change de Estado
     */
    $('#estado').unbind('select2:select');
    $('#estado').on('select2:select', function (e) {

        //Obtengo el id del Estado
        var estado = $('#estado').val();
        $.ajax({
            url: "<?php echo base_url() ?>index.php/sidre/admin_agen/c_admin_agen/municipios",
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

                });//Fin del each

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
            url: "<?php echo base_url() ?>index.php/sidre/admin_agen/c_admin_agen/parroquias",
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

                });//Fin del each

                $.fn.eventos();
                
            }//Fin del success

        }); //Fin del ajax

        $.fn.eventos();
    }); //Fin del evento change municipio


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
    tbl += '      <th style="text-align: center">Estado</th>';
    tbl += '      <th style="text-align: center">Municipio</th>';
    tbl += '      <th style="text-align: center">Parroquia</th>';
    tbl += '      <th style="text-align: center">Agencia</th>';
    tbl += '      <th style="text-align: center">Codigo Agencia</th>';
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
                    "url": "<?php echo base_url() ?>index.php/sidre/admin_agen/c_admin_agen/agencias",
                    "type": "POST",
//                    "data": {"opcion": id_condicion}
                },
                "columns": [
                    {"data": "id_agencia", "class": 'text-center'},
                    {"data": "estado", "class": 'text-center'},
                    {"data": "municipio", "class": 'text-center'},
                    {"data": "parroquia", "class": 'text-center'},
                    {"data": "agencia", "class": 'text-center'},
                    {"data": "codigo_agencia", "class": 'text-center'},
                    {"data": "activo", "class": 'text-center'}

                ],
                "fnRowCallback": function (nRow, aData, iDisplayIndex) {
                    
            if (aData['activo'] === 'ACTIVO') {

//                $('td:eq(0)', nRow).html('<div class="input-group-btn"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="fa fa-cog"></span></button><ul class="dropdown-menu"><li><a href="#" id="' + aData['id_enc_ent_efec'] + '" class="btn_decision_reversar">Reversar</a></li></ul></div>');
                 $('td:eq(0)', nRow).html('<i id="' + aData['id_agencia'] + '" type="button" title="Desactivar" class="fa fa-check btn_Desactivar"></i>');
                
            } else {

                 $('td:eq(0)', nRow).html('<i id="' + aData['id_agencia'] + '" type="button" title="Activar" class="fa fa-ban btn_activar"></i>');
//                 $('td:eq(0)', nRow).css('background-color', '#D3D3D3');

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
        id_agencia = $(this).attr('id');

        $.fn.modal_desactivar();

    }); //Fin del Evento on click 
    
    tabla.on('click', 'tr td .btn_activar', function (event) {

        //Obtengo el id
        id_agencia = $(this).attr('id');

        $.fn.modal_activar();

    }); //Fin del Evento on click 

};//Fin de la función $.fn.tabla
/******************************/



$.fn.modal_desactivar = function () {

    //Html a mostrar en el modal
    var html = '<p><b>¿Estás seguro que desea realizar la operación? </b></p>';

    //Seteamos los valores del modal
    $('.modal .modal-title').text('Desactivar Agencia');
    $('.modal .modal-body').html('');
    $('.modal .modal-body').append(html);
    $('.modal .modal-footer').html('');
    $('.modal .modal-footer').append('<button id="' + id_agencia + '" type="button" class="btn btn-azul-modal btn_aprobar">SI</button>');

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

$.fn.modal_activar = function () {

    //Html a mostrar en el modal
    var html = '<p><b>¿Estás seguro que desea realizar la operación? </b></p>';

    //Seteamos los valores del modal
    $('.modal .modal-title').text('Activar Agencia');
    $('.modal .modal-body').html('');
    $('.modal .modal-body').append(html);
    $('.modal .modal-footer').html('');
    $('.modal .modal-footer').append('<button id="' + id_agencia + '" type="button" class="btn btn-azul-modal btn_activar">SI</button>');

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



/*
 Función que arma la modal agregar_agencias
 */
$.fn.modal_agregar_agencias = function () {

    //Html a mostrar en el modal
    var html = '<form id="form_agregar_agencias" class="form-horizontal" role="form" data-toggle="validator">';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Estado:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <select id="estado" name="estado" class="form-control" style="width: 100%;">';
//    html += '          <option value="">Seleccione</option>';
    html += '        </select>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Municipio:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <select id="municipio" name="municipio" class="form-control" style="width: 100%;">';
    html += '          <option value="">Seleccione</option>';
    html += '        </select>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Parroquia:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <select id="parroquia" name="parroquia" class="form-control" style="width: 100%;">';
    html += '          <option value="">Seleccione</option>';
    html += '        </select>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Agencia:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="agencia" name="agencia" type="text" class="form-control" required>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Cod. Agencia:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="codigo_agencia" name="codigo_agencia" type="text" class="form-control" required>';
    html += '      </div>';
    html += '  </div>';
    html += '    </form>';

    //Seteamos los valores del modal
    $('.modal .modal-title').text('Agregar Nueva Agencia');
    $('.modal .modal-body').html('');
    $('.modal .modal-body').append(html);
    $('.modal .modal-footer').html('');
    $('.modal .modal-footer').append('<button id="' + id_agencia + '" type="button" class="btn btn-azul-modal btn_guardar">Guardar</button>');

    $('#estado, #municipio, #parroquia').select2({
        theme: "classic"
    });

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

};//Fin de la función $.fn.modal_agregar_agencias
/*************************************/

/*
 Función que manda a crear una agencia
 */
$.fn.registrar_agencia = function () {

    //Armamos el objeto tipo formulario
    var formData = new FormData($("#form_agregar_agencias")[0]);

    $.ajax({
        url: "<?php echo base_url() ?>index.php/sidre/admin_agen/c_admin_agen/registrar_agencia",
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

            } else {

                //Mostramos el mensaje
                $('.modal-footer').html('<div class="alert alert-rojo" role="alert">' + data['mensaje_respuesta'] + ' <i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');

            }//Fin del if

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success

    }); //Fin del ajax

}//Fin de la función $.fn.registrar_agencia
/*****************************************/

/*
 Función donde se carga la data inicial para los select 
 */
$.fn.data_inicial = function () {
    $.ajax({
        url: "<?php echo base_url() ?>index.php/sidre/admin_agen/c_admin_agen/data_inicial",
        type: 'POST',
        dataType: 'json',
        success: function (data) {

            //iniciar sin opcion seleccionada
            $("#estado").html('<option value="">Seleccione</option>');

            //Recorremos el array
            $(data['estado']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#estado').append('<option value="' + elemento['id_estado'] + '">' + elemento['estado'] + '</option>');

            });//Fin del each

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }
    });
}; //fin funcion formulario


$.fn.desactivar_agencia = function () {

    $.ajax({
        url: "<?php echo base_url() ?>index.php/sidre/admin_agen/c_admin_agen/desactivar_agencia",
        type: "POST",
        dataType: "json",
        data: {
            
            id_agencia: id_agencia

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


$.fn.activar_agencia = function () {

    $.ajax({
        url: "<?php echo base_url() ?>index.php/sidre/admin_agen/c_admin_agen/activar_agencia",
        type: "POST",
        dataType: "json",
        data: {
            
            id_agencia: id_agencia

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