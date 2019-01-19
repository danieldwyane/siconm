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
    $('.btn_aprobar').click(function() {

        $.fn.aprobar_efectivo();

        $.fn.eventos();

    });//Fin del evento click
    
     $('.btn_reversar').unbind('click');
     $('.btn_reversar').click(function() {

        $.fn.reversar_efectivo();

        $.fn.eventos();

    });//Fin del evento click
    
     $('.btn_verificar').unbind('click');
     $('.btn_verificar').click(function() {

        $.fn.validar_reverso();

        $.fn.eventos();

    });//Fin del evento click


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


    //Asigno el método DataTable a mi tabla
    tabla = $('#tabla_reporte table').DataTable({
        "ajax": {
            "url": "<?php echo base_url() ?>index.php/rem/c_rpt_rem/listado_efectivo_ejec/",
            "type": "POST"
        },
        "columns": [
            {"data": "id_enc_ent_efec", "class": 'text-center'},
            {"data": "cedula", "class": 'text-center'},
            {"data": "nombre_apellido", "class": 'text-center'},
            {"data": "tipo_empleado", "class": 'text-center'},
            {"data": "monto", "class": 'text-center'},
            {"data": "fec_recepcion", "class": 'text-center'},
            {"data": "recibido", "class": 'text-center'}
        ],
        //Oculto el ordenar por columna
        "columnDefs": [{
                "targets": [0],
                "orderable": false
            }],
        "orderClasses": false,
        "fnRowCallback": function (nRow, aData, iDisplayIndex) {

//            $('td:eq(0)', nRow).html('<i id="' + aData['id_empresa'] + '" correo ="' + aData['correo'] + '" rif ="' + aData['rif'] + '" razon_social ="' + aData['razon_social'] + '" type="button" class="fa fa-cog btn_decision"></i>');

         
            if (aData['recibido'] === 'Si') {

//                $('td:eq(0)', nRow).html('<div class="input-group-btn"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="fa fa-cog"></span></button><ul class="dropdown-menu"><li><a href="#" id="' + aData['id_enc_ent_efec'] + '" class="btn_decision_reversar">Reversar</a></li></ul></div>');
                $('td:eq(0)', nRow).html('<i id="' + aData['id_enc_ent_efec'] + '" type="button" title="Recepción" class="fa fa-undo btn_decision_reversar"></i>');
                $('td:eq(6)', nRow).css('background-color', '#D3D3D3');
            } else {

                $('td:eq(0)', nRow).html('<i id="' + aData['id_enc_ent_efec'] + '" type="button" title="Recepción" class="fa fa-check btn_decision_aprobar"></i>');
//                $('td:eq(0)', nRow).html('<div class="input-group-btn"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="fa fa-cog"></span></button><ul class="dropdown-menu"><li><a href="#" id="' + aData['id_enc_ent_efec'] + '" class="btn_decision_aprobar">Aprobar</a></li></ul></div>');

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

    /*
     Evento on click sobre el botón ver detalle
     */
    tabla.on('click', 'tr td .btn_decision_aprobar', function (event) {

        //Obtengo el id
        id_enc_ent_efec = $(this).attr('id');
        
        $.fn.modal_aprobar();

    }); //Fin del Evento on click
    /***************************/
    
    tabla.on('click', 'tr td .btn_decision_reversar', function (event) {

        //Obtengo el id
        id_enc_ent_efec = $(this).attr('id');
        
        $.fn.modal_reversar();

    }); //Fin del Evento on click
    
    /*
     Evento on click sobre el botón ver detalle
     */
//    tabla.on('click', 'tr td .btn_decision_rechazar', function (event) {
//
//        //Obtengo el id
//        id_empresa = $(this).attr('id');
//
//        $.fn.modal_rechazar();
//
//    }); //Fin del Evento on click
//    /***************************/    

}; //Fin de la funcion Tabla

/*
 Función que arma la modal rechazar
 */
$.fn.modal_aprobar = function() {

    //Html a mostrar en el modal
    var html = '<p><b>¿Estás seguro que desea realizar la operación? </b></p>';
        
    //Seteamos los valores del modal
    $('.modal .modal-title').text('Aprobar Entrega de Efectivo');
    $('.modal .modal-body').html('');
    $('.modal .modal-body').append(html);
    $('.modal .modal-footer').html('');
    $('.modal .modal-footer').append('<button id="'+id_enc_ent_efec+'" type="button" class="btn btn-azul-modal btn_aprobar">SI</button>');
//    $('.modal .modal-footer').append('<button id="'+id_empresa+'" type="button" class="btn btn-danger btn_rechazar">NO</button>');   
    $('.modal .modal-footer').append('<button type="button" class="btn btn-amarillo-modal" data-dismiss="modal">NO</button>');
    //Mostramos el modal
    $('.modal').modal('show');
    //Evento de la modal cuando se muestra la modal
    $('.modal').off('shown.bs.modal');
    $('.modal').on('shown.bs.modal', function (e) {
        $(".btn_aprobar").focus();
        $.fn.eventos();
    });
    //Evento de la modal cuando se oculta la modal
    $('.modal').off('hide.bs.modal');
    $('.modal').on('hide.bs.modal', function(e) {

        $.fn.eventos();
    });
};//Fin de la función $.fn.modal_detalle
/*************************************/


$.fn.modal_reversar = function() {

    //Html a mostrar en el modal
//    var html = '<p><b>¿Estás seguro que desea reversar la operación? </b></p>'
        var html =       `<form id="form_nuevo_registro" role="form" data-toggle="validator">
                        <div class="row">
                            <div class="col-md-12 form-group">
                                <label>Usuario:</label>  
                                <input id="usuario" name="usuario" type="text" maxlength="400" class="form-control" required>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 form-group">
                                <label>Contraseña:</label>  
                                <input id="contrasena" name="contrasena" type="password" maxlength="400" class="form-control" style="width: 100%;" required>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
    
                       <div class="row">
                            <div class="col-md-12 form-group">
                                <button type="button" class="btn btn-azul-modal btn_verificar">Reversar</button>
                            </div>
                        </div>
                        
                    </form>`;
        
    //Seteamos los valores del modal
    $('.modal .modal-title').text('Reversar Entrega de Efectivo');
    $('.modal .modal-body').html('');
    $('.modal .modal-body').append(html);
    $('.modal .modal-footer').html('');
   // $('.modal .modal-footer').append('<button id="'+id_enc_ent_efec+'" type="button" class="btn btn-azul-modal btn_reversar">SI</button>');
//    $('.modal .modal-footer').append('<button id="'+id_empresa+'" type="button" class="btn btn-danger btn_rechazar">NO</button>');   
 //   $('.modal .modal-footer').append('<button type="button" class="btn btn-amarillo-modal btn_no" data-dismiss="modal">NO</button>');
    //Mostramos el modal
    $('.modal').modal('show');
    //Evento de la modal cuando se muestra la modal
    $('.modal').off('shown.bs.modal');
    $('.modal').on('shown.bs.modal', function (e) {
        $("#usuario").focus();
        $.fn.eventos();
    });
    //Evento de la modal cuando se oculta la modal
    $('.modal').off('hide.bs.modal');
    $('.modal').on('hide.bs.modal', function(e) {

        $.fn.eventos();
    });
    
    $('.btn_reversar').fadeOut();
    $('.btn_no').fadeOut();
};//Fin de la función $.fn.modal_detalle


/*
 Función que arma la modal rechazar
 */
//$.fn.modal_rechazar = function() {
//
//    //Html a mostrar en el modal
//    var html = '<form id="form_detalle" role="form" data-toggle="validator">';
//        html += '  <div class="row">';
//        html += '    <div class="col-md-12 form-group">';
//        html += '      <label>OBSERVACIONES:</label>';
//        html += '      <textarea id="observacion" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" rows="2" required></textarea>';
//        html += '    <div class="help-block with-errors"></div>';
//        html += '    </div>';
//        html += '  </div>';
//        html += '</form>';
//    //Seteamos los valores del modal
//    $('.modal .modal-title').text('Rechazar Empresa');
//    $('.modal .modal-body').html('');
//    $('.modal .modal-body').append(html);
//    $('.modal .modal-footer').html('');
//    $('.modal .modal-footer').append('<button id="'+id_empresa+'" type="button" class="btn btn-danger btn_rechazar">SI</button>');
//    $('.modal .modal-footer').append('<button type="button" class="btn btn-danger" data-dismiss="modal">NO</button>');
//    //Mostramos el modal
//    $('.modal').modal('show');
//    //Evento de la modal cuando se muestra la modal
//    $('.modal').off('shown.bs.modal');
//    $('.modal').on('shown.bs.modal', function (e) {
//        $.fn.eventos();
//    });
//};//Fin de la función $.fn.modal_detalle
/*************************************/

/*
 Funcion para aprobar la empresa
 */
$.fn.aprobar_efectivo = function() {

    $.ajax({
        url : "<?php echo base_url(); ?>index.php/rem/c_rpt_rem/aprobar_efectivo_ejecutivo",
        type : "POST",
        dataType : "json",
        data: {
                id_enc_ent_efec: id_enc_ent_efec,
                
            },
        beforeSend: function(objeto) {

            //Limpiamos el mensaje de la modal
            $('.modal-footer').html('');
            $('.modal-footer').html('<i class="icono_carga fa fa-cog fa-spin fa-3x fa-fw"></i>');
        },
//        error: function(objeto, quepaso, otroobj) {
//            alert("Error...");
//        },
        success: function(data) {
            
            //Evaluamos la respuesta
            if (data['codigo_respuesta'] == 1) {

                //Limpiamos el mensaje de la modal
                $('.modal-footer').html('');
                //Mostramos el mensaje
                $('.modal-footer').html('<div class="alert alert-azul" role="alert">' + data['mensaje_respuesta'] + ' <i class="fa fa-check-square" aria-hidden="true"></i></div>');

                //Para mantener el mensaje modal por algunos segundos 
                setTimeout(function () {
                    $('#modal').modal('hide');
                }, 8000);

                location.reload();

            } else {

                //Mostramos el mensaje
                $('.modal-footer').html('<div class="alert alert-rojo" role="alert">' + data['mensaje_respuesta'] + ' <i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');

            }//Fin del if

            //Función donde se declaran todos los eventos
            $.fn.eventos();   

        }//Fin del success

    }); //Fin del ajax que permite 		

};//Fin aprobar_empresa



$.fn.validar_reverso = function () {

    $.ajax({
        url: "<?php echo base_url(); ?>index.php/rem/c_rpt_rem/validar_reverso",
        type: "POST",
        dataType: "json",
        data: {
            usuario: $('#usuario').val(),
            contrasena: $('#contrasena').val(),
            id_enc_ent_efec: id_enc_ent_efec

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
    //---------------------------------------------------------------------------------------------------------------------------------------------
    
    

        
 





