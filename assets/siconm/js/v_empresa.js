var tabla = null;
var cod_empresa;
var d = new Date();
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

    $('.btn_guardar').unbind('click');
    $('.btn_guardar').click(function () {

        var formulario = document.getElementById('form_agregar_empresa').checkValidity();
        if (formulario == true) {

            $.fn.registrar_empresa();
        } else {

            //Muestro los mensajes de error
//            $('#form_agregar_empresa').validator('destroy');
            $('#form_agregar_empresa').validator('validate');
            $.fn.eventos();
        }

    }); //Fin del evento click

    $('.btn_actualizar_datos').unbind('click');
    $('.btn_actualizar_datos').click(function () {

        var formulario = document.getElementById('form_upd_empresa').checkValidity();
        if (formulario == true) {

            $.fn.upd_empresa();
        } else {

            //Muestro los mensajes de error
//            $('#form_agregar_empresa').validator('destroy');
            $('#form_upd_empresa').validator('validate');
            $.fn.eventos();
        }

    }); //Fin del evento click


    /*
     Evento click sobre el btn_agregar_agencias 
     */
    $('#btn_agregar_empresa').unbind('click');
    $('#btn_agregar_empresa').click(function () {

        $.fn.modal_agregar_empresa();
        $.fn.eventos();
    }); //Fin del evento click

    /*
     Evento change de pais
     */
    $('#pais').unbind('select2:select');
    $('#pais').on('select2:select', function (e) {

        //Obtengo el id del pais
        var pais = $(this).val();
        if (pais == 1) {

            //Ocultamos la capa
            $('.capa_estado').hide();
            //Mostramos la capa
            $('.capa_rif, .capa_estado1').show();
            //Agregamos la clase required
            $('#rif').attr('required', true);
            $('#estado1').attr('required', true);
            //Removemos la clase required
            $('#estado').removeAttr('required');

            $.fn.estados();

        } else {

            //Ocultamos la capa
            $('.capa_rif, .capa_estado1').hide();
            //Mostramos la capa
            $('.capa_estado').show();
            //Agregamos la clase required
            $('#estado').attr('required', true);
            //Removemos la clase required
            $('#rif').removeAttr('required');
            $('#estado1').removeAttr('required');

            $.fn.ciudades(pais);
        }

        $.fn.eventos();
    }); //Fin del evento change pais

    /*
     Evento change de ciudad
     */
    $('#estado1').unbind('select2:select');
    $('#estado1').on('select2:select', function (e) {

        //Obtengo el id del pais.
        var pais = $('#pais').val();
        var id_estado = $(this).val();

        $.fn.ciudades_venezuela(pais, id_estado);

        $.fn.eventos();
    }); //Fin del evento change ciudad

    $('.btn_desactivar_empresa').unbind('click');
    $('.btn_desactivar_empresa').click(function () {

        var formulario = document.getElementById('form_desactivar').checkValidity();
        if (formulario == true) {

            $.fn.desactivar_empresa();
        } else {

            $('#form_desactivar').validator('destroy');
            //Muestro los mensajes de error
            $('#form_desactivar').validator('validate');
            $.fn.eventos();
        }


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
    tbl += '      <th style="text-align: center">Pais</th>';
    tbl += '      <th style="text-align: center">Razon Social</th>';
    tbl += '      <th style="text-align: center">Telefono</th>';
    tbl += '      <th style="text-align: center">Pagina Web</th>';
    tbl += '      <th style="text-align: center">Correo Electrónico</th>';
    tbl += '    </tr>';
    tbl += '  </thead>';
    tbl += '  <tfoot>';
    tbl += '      <tr>';
    tbl += '          <th></th>';
    tbl += '          <th>Pais</th>';
    tbl += '          <th>Razon Social</th>';
    tbl += '          <th>Telefono</th>';
    tbl += '          <th>Pagina Web</th>';
    tbl += '          <th>Correo Electrónico</th>';
    tbl += '      </tr>';
    tbl += '  </tfoot>';
    tbl += '</table>';
    $('#tabla_reporte').html('');
    $('#tabla_reporte').append(tbl);
    // Setup - add a text input to each footer cell
    $('#tabla_reporte tfoot th').each(function () {
        var title = $(this).text();
        $(this).html('<input type="text" style="color:black" placeholder="Buscar ' + title + '"/>');
    });
    //Inicializamos el datatable	
    tabla = $('#tabla_reporte table').DataTable({
        "scrollX": true,
        "order": [
            [1, "desc"]
        ],
        //paging: false,
        "ajax": {
            "url": "<?php echo base_url() ?>index.php/siconm/c_empresa/bandeja_empresa",
            "type": "POST"
        },
        "columns": [
            {"data": "cod_empresa", "class": 'text-center'},
            {"data": "cod_pais", "class": 'text-center'},
            {"data": "razon_social", "class": 'text-center'},
            {"data": "tlf_1", "class": 'text-center'},
            {"data": "pag_web", "class": 'text-center'},
            {"data": "correo_1", "class": 'text-center'}
        ],
        //Oculto el ordenar por columna
        "columnDefs": [{
                "targets": [0],
                "orderable": false
            }],
        "orderClasses": false,
        "fnRowCallback": function (nRow, aData, iDisplayIndex) {
            $('td:eq(0)', nRow).html('<div class="input-group-btn">\n\
               <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n\
                 <span class="fa fa-cog"></span></button>\n\
                  <ul class="dropdown-menu">\n\
                    <li><a href="#" id="' + aData['cod_empresa'] + '" class="btn_actualizar">Actualizar</a></li>\n\
                    <li><a href="#" id="' + aData['cod_empresa'] + '" class="btn_desactivar">Desactivar</a></li>\n\
                    <li><a href="form_sucursal?id=' + aData['cod_empresa'] + '&nombre=' + aData['razon_social'] + '" class="btn_ver_sucursal">Ver Sucursales</a></li></ul></div>');
        },
//        responsive: {
//            details: {
//                renderer: function (api, rowIdx, columns) {
//                    var data = $.map(columns, function (col, i) {
//                        return col.hidden ?
//                                '<tr data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '">' +
//                                '<td>' + col.title + ':' + '</td> ' +
//                                '<td>' + col.data + '</td>' +
//                                '</tr>' :
//                                '';
//                    }).join('');
//
//                    return data ?
//                            $('<table/>').append(data) :
//                            false;
//                }
//            }
//        },
        //"orderClasses": false,
        "language": {
            "lengthMenu": "Resultados _MENU_ por página",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
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

    }); //Fin del DataTable

    tabla.on('click', 'tr td .btn_actualizar', function (event) {

        //Obtengo el id
        cod_empresa = $(this).attr('id');
        $.fn.modal_actualizar();
    }); //Fin del Evento on click 

    tabla.on('click', 'tr td .btn_desactivar', function (event) {

        //Obtengo el id
        cod_empresa = $(this).attr('id');
        $.fn.modal_desactivar();
    }); //Fin del Evento on click 

    tabla.columns().every(function () {
        var that = this;
        $('input', this.footer()).on('keyup change', function () {
            if (that.search() !== this.value) {
                that
                        .search(this.value)
                        .draw();
            }
        });
    });
}; //Fin de la función $.fn.tabla
/******************************/

$.fn.modal_desactivar = function () {

    //Html a mostrar en el modal
    var html = '<p><b>¿Está seguro que desea desactivar la empresa seleccionada?</b></p>';
    html += '<form id="form_desactivar" class="form-horizontal" role="form" data-toggle="validator" method="post">';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-2">Observación:</label>';
    html += '      <div class="col-sm-8">';
    html += '        <textarea name="observacion" id="observacion" type="text" style="width:450px" class="form-control text-uppercase" required></textarea>';
    html += '      </div>';
    html += '  </div>';
    html += '</form>';
    //Seteamos los valores del modal
    $('.modal .modal-title').text('Desactivar Empresa');
    $('.modal .modal-body').html('');
    $('.modal .modal-body').append(html);
    $('.modal .modal-footer').html('');
    $('.modal .modal-footer').append('<button id="' + cod_empresa + '" type="button" class="btn btn-azul-modal btn_desactivar_empresa">Desactivar</button>');
    $('.modal .modal-footer').append('<button type="button" class="btn btn-amarillo-modal" data-dismiss="modal">Salir</button>');
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
};
/*
 Función que arma la modal agregar_agencias
 */
$.fn.modal_agregar_empresa = function () {

    //Html a mostrar en el modal
    var html = '<form id="form_agregar_empresa" class="form-horizontal" role="form" data-toggle="validator">';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">País:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <select id="pais" name="pais" class="form-control" style="width: 100%;">';
    html += '          <option value="">Seleccione</option>';
    html += '        </select>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Razón Social:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="razon_social" name="razon_social" type="text" class="form-control" required>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group capa_rif">';
    html += '    <label class="control-label col-sm-3">Rif</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="rif" name="rif" type="text" class="form-control">';
    html += '      </div>';
    html += '  </div>';

    html += '  <div class="form-group capa_estado">';
    html += '    <label class="control-label col-sm-3">Estado/Provincia</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="estado" name="estado" type="text" class="form-control">';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group capa_estado1">';
    html += '    <label class="control-label col-sm-3">Estado:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <select id="estado1" name="estado1" class="form-control" style="width: 100%;">';
    html += '          <option value="">Seleccione</option>';
    html += '          <option value="1">Dtto Capital</option>';
    html += '        </select>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Ciudad:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <select id="ciudad" name="ciudad" class="form-control" style="width: 100%;">';
    html += '          <option value="">Seleccione</option>';
    html += '        </select>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Dirección:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="direccion" name="direccion" type="text" class="form-control" required>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Teléfono1:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="tlf_1" name="tlf_1" type="text" class="form-control" required>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Teléfono2:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="tlf_2" name="tlf_2" type="text" class="form-control" required>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Pagina Web:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="pag_web" name="pag_web" type="text" class="form-control" required>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Correo Electrónico 1:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="correo_1" name="correo_1" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" type="email" required data-error="Ejemplo: cuenta@dominio.com" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required>';
    html += '        <div class="help-block with-errors"></div>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Correo Electrónico 2:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="correo_2" name="correo_2" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" type="email" required data-error="Ejemplo: cuenta@dominio.com" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required>';
    html += '        <div class="help-block with-errors"></div>';
    html += '      </div>';
    html += ' </div>';
    html += '  <div class="form-group">';
    html += '        <label class="control-label col-sm-3">Año Fundación:</label>';
    html += '        <div class="col-sm-9">';
    html += '           <div class="input-group date">';
    html += '              <div class="input-group-addon">';
    html += '                 <i class="fa fa-calendar"></i>';
    html += '              </div>';
    html += '              <input id="anio_fundacion" name="anio_fundacion" type="text" class="form-control" required>';
    html += '           </div>';
    html += '        </div>';
    html += '</div>';
    html += ' </form>';
    //Seteamos los valores del modal
    $('.modal .modal-title').text('Agregar Nueva Empresa');
    $('.modal .modal-body').html('');
    $('.modal .modal-body').append(html);
    $('.modal .modal-footer').html('');
    $('.modal .modal-footer').append('<button id="' + cod_empresa + '" type="button" class="btn btn-azul-modal btn_guardar">Guardar</button>');
    $('#pais, #estado1, #ciudad').select2({
        theme: "classic"
    });
    $("#anio_fundacion").datetimepicker({
        viewMode: 'years',
        format: 'YYYY',
        maxDate: d
    });
    $('#tlf_2').mask('(000) 000-0000');
    $('#tlf_1').mask('(000) 000-0000');
    $('#rif').mask('Z-0000000000', {translation: {'Z': {pattern: /[JjGgCcVv]/, optional: false}}});
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
}; //Fin de la función $.fn.modal_agregar_agencias
/*************************************/

$.fn.modal_actualizar = function () {

    //Html a mostrar en el modal
    var html = '<form id="form_upd_empresa" class="form-horizontal" role="form" data-toggle="validator">';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">País:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <select id="pais" name="pais" class="form-control" style="width: 100%;">';
    html += '          <option value="">Seleccione</option>';
    html += '        </select>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Razón Social:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="razon_social" name="razon_social" type="text" class="form-control" readonly required>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group capa_rif">';
    html += '    <label class="control-label col-sm-3">Rif</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="rif" name="rif" type="text" class="form-control" readonly>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Ciudad:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <select id="ciudad" name="ciudad" class="form-control" style="width: 100%;">';
    html += '          <option value="">Seleccione</option>';
    html += '        </select>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group capa_estado">';
    html += '    <label class="control-label col-sm-3">Estado/Provincia</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="estado" name="estado" type="text" class="form-control">';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group capa_estado1">';
    html += '    <label class="control-label col-sm-3">Estado:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <select id="estado1" name="estado1" class="form-control" style="width: 100%;">';
    html += '          <option value="">Seleccione</option>';
    html += '        </select>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Dirección:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="direccion" name="direccion" type="text" class="form-control" required>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Teléfono1:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="tlf_1" name="tlf_1" type="text" class="form-control" required>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Teléfono2:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="tlf_2" name="tlf_2" type="text" class="form-control" required>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Pagina Web:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="pag_web" name="pag_web" type="text" class="form-control" readonly required>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Correo Electrónico 1:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="correo_1" name="correo_1" readonly class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" type="email" required data-error="Ejemplo: cuenta@dominio.com" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required>';
    html += '        <div class="help-block with-errors"></div>';
    html += '      </div>';
    html += '  </div>';
    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Correo Electrónico 2:</label>';
    html += '      <div class="col-sm-9">';
    html += '        <input id="correo_2" name="correo_2" readonly class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" type="email" required data-error="Ejemplo: cuenta@dominio.com" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required>';
    html += '        <div class="help-block with-errors"></div>';
    html += '      </div>';
    html += ' </div>';
    html += '  <div class="form-group">';
    html += '  <div class="col-xs-12 form-group">';
    html += '    <label class="control-label col-sm-2">Año Fundación:</label>';
    html += '        <div class="col-sm-8">';
    html += '           <div class="input-group date">';
    html += '             <div class="input-group-addon">';
    html += '              <i class="fa fa-calendar"></i>';
    html += '             </div>';
    html += '            <input id="anio_fundacion" name="anio_fundacion" type="text" class="form-control"readonly required>';
    html += '      </div>';
    html += '  </div>';
    html += '</div>';
    html += '</div>';
    html += ' </form>';
    //Seteamos los valores del modal
    $('.modal .modal-title').text('Actualizar Empresa');
    $('.modal .modal-body').html('');
    $('.modal .modal-body').append(html);
    $('.modal .modal-footer').html('');
    $('.modal .modal-footer').append('<button id="' + cod_empresa + '" type="button" class="btn btn-azul-modal btn_actualizar_datos">Actualizar</button>');
    $('.modal .modal-footer').append('<button type="button" class="btn btn-amarillo-modal" data-dismiss="modal">Cancelar</button>');
    $('#pais, #estado1, #ciudad').select2({
        theme: "classic"
    });
    $("#anio_fundacion").datetimepicker({
        viewMode: 'years',
        format: 'YYYY',
        maxDate: d
    });
    $('#tlf_2').mask('(000) 000-0000');
    $('#tlf_1').mask('(000) 000-0000');
    //Mostramos el modal
    $('.modal').modal('show');
    //Evento de la modal cuando se muestra la modal
    $('.modal').off('shown.bs.modal');
    $('.modal').on('shown.bs.modal', function (e) {

        $.fn.actualizar_empresa();
        $.fn.eventos();
    });
    //Evento de la modal cuando se oculta la modal
    $('.modal').off('hide.bs.modal');
    $('.modal').on('hide.bs.modal', function (e) {

        $.fn.eventos();
    });
}; //Fin de la función $.fn.modal_agregar_agencias

/*
 Función que manda a crear una agencia
 */
$.fn.registrar_empresa = function () {

    //Armamos el objeto tipo formulario
    var formData = new FormData($("#form_agregar_empresa")[0]);
    $.ajax({
        url: "<?php echo base_url() ?>siconm/c_empresa/registrar_empresa",
        type: "POST",
        cache: false,
        contentType: false,
        processData: false,
        accepts: "application/json",
        dataType: 'json',
        data: formData,
        beforeSend: function (objeto) {

            //Limpiamos el mensaje de la modal
//            $('.modal-footer').html('');
//            $('.modal-footer').html('<i class="icono_carga fa fa-cog fa-spin fa-3x fa-fw"></i>');
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
        url: "<?php echo base_url() ?>siconm/c_empresa/data_inicial",
        type: 'POST',
        dataType: 'json',
        success: function (data) {

            //iniciar sin opcion seleccionada
            $("#pais").html('<option value="">Seleccione</option>');
            //Recorremos el array
            $(data['pais']).each(function (index, elemento) {

                //Mostramos las opciones
//                $('#pais').append('<option value="' + elemento['cod_pais'] + '">' + elemento['cod_pais'] + '</option>');
                $('#pais').append('<option value="' + elemento['co_pais'] + '">' + elemento['btrim'] + '</option>');
            }); //Fin del each

            //Función donde se declaran todos los eventos
            $.fn.eventos();
        }
    });
}; //fin funcion formulario

/*
 Función donde se carga los estados del pais venezuela
 */
$.fn.estados = function (id_pais) {
    $.ajax({
        url: "<?php echo base_url() ?>siconm/c_empresa/estados",
        type: 'POST',
        dataType: 'json',
        success: function (data) {

            //iniciar sin opcion seleccionada
            $("#estado1").html('<option value="">Seleccione</option>');
            //Recorremos el array
            $(data['estados']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#estado1').append('<option value="' + elemento['co_estado'] + '">' + elemento['btrim'] + '</option>');
            }); //Fin del each

            //Función donde se declaran todos los eventos
            $.fn.eventos();
        }
    });
}; //fin funcion estados

/*
 Función donde se carga las ciudades del pais
 */
$.fn.ciudades = function (id_pais) {
    $.ajax({
        url: "<?php echo base_url() ?>siconm/c_empresa/ciudades",
        type: 'POST',
        dataType: 'json',
        data: {id_pais: id_pais},
        success: function (data) {

            //iniciar sin opcion seleccionada
            $("#ciudad").html('<option value="">Seleccione</option>');
            //Recorremos el array
            $(data['ciudades']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#ciudad').append('<option value="' + elemento['co_ciudad'] + '">' + elemento['nb_ciudad'] + '</option>');
            }); //Fin del each

            //Función donde se declaran todos los eventos
            $.fn.eventos();
        }
    });
}; //fin funcion ciudades

/*
 Función donde se carga las ciudades del pais vzla
 */
$.fn.ciudades_venezuela = function (id_pais, id_estado) {
    $.ajax({
        url: "<?php echo base_url() ?>siconm/c_empresa/ciudades_venezuela",
        type: 'POST',
        dataType: 'json',
        data: {id_pais: id_pais,
            id_estado: id_estado},
        success: function (data) {

            //iniciar sin opcion seleccionada
            $("#ciudad").html('<option value="">Seleccione</option>');
            //Recorremos el array
            $(data['ciudades_venezuela']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#ciudad').append('<option value="' + elemento['co_ciudad'] + '">' + elemento['nb_ciudad'] + '</option>');
            }); //Fin del each

            //Función donde se declaran todos los eventos
            $.fn.eventos();
        }
    });
}; //fin funcion ciudades vzla


$.fn.actualizar_empresa = function () {
    $.ajax({
        url: "<?php echo base_url() ?>siconm/c_empresa/actualizar_empresa",
        type: 'POST',
        dataType: 'json',
        data: {
            cod_empresa: cod_empresa
        },
        success: function (data) {

            if (data['datos_empresa'][0]['cod_pais'] == 1) {

                //Mostramos la capa
                $('.capa_rif').show();
                $('.capa_estado1').show();
                //Seteamos los valores
                $('#rif').val(data['datos_empresa'][0]['rif']);
                //Mostramos las opciones
                $('#estado1').append('<option selected value="' + data['datos_empresa'][0]['estado'] + '">' + data['datos_empresa'][0]['estado'] + '</option>');
            } else {

                //Mostramos la capa
                $('.capa_estado').show();
                //Ocultamos la capa sino es venezuela
                $('.capa_estado1').hide();
                $('.capa_rif').hide();
                //Seteamos los valores
                $('#estado').val(data['datos_empresa'][0]['estado']);
            }

            //Recorremos el array
            $(data['pais']).each(function (index, elemento) {

                //Evaluamos si el id del requerimiento actual es igual al que trae en la meta
                if (elemento['cod_pais'] == data['datos_empresa'][0]['cod_pais']) {

                    //Mostramos las opciones
                    $('#pais').append('<option selected value="' + elemento['cod_pais'] + '">' + elemento['cod_pais'] + '</option>');
                } else {

                    //Mostramos las opciones
                    $('#pais').append('<option value="' + elemento['cod_pais'] + '">' + elemento['cod_pais'] + '</option>');
                }//Fin del if

            }); //Fin del each

//            $(data['ciudad']).each(function (index, elemento) {
//
//                //Evaluamos si el id del requerimiento actual es igual al que trae en la meta
//                if (elemento['ciudad'] == data['datos_empresa'][0]['ciudad']) {

            //Mostramos las opciones
            $('#ciudad').append('<option selected value="' + data['datos_empresa'][0]['ciudad'] + '">' + data['datos_empresa'][0]['ciudad'] + '</option>');
//                } 
//
//            });//Fin del each

            //Seteamos valores
            $('#razon_social').val(data['datos_empresa'][0]['razon_social']);
            $('#direccion').val(data['datos_empresa'][0]['direccion']);
            $('#tlf_1').val(data['datos_empresa'][0]['tlf_1']);
            $('#tlf_2').val(data['datos_empresa'][0]['tlf_2']);
            $('#pag_web').val(data['datos_empresa'][0]['pag_web']);
            $('#correo_1').val(data['datos_empresa'][0]['correo_1']);
            $('#correo_2').val(data['datos_empresa'][0]['correo_2']);
            $('#anio_fundacion').val(data['datos_empresa'][0]['anio_fundacion']);
        }//Fin del success

    }); //Fin ajax

}; //fin funcion datos_empresa

$.fn.upd_empresa = function () {
    $.ajax({
        url: "<?php echo base_url() ?>siconm/c_empresa/upd_empresa",
        type: 'POST',
        dataType: 'json',
        data: {
            cod_empresa: cod_empresa,
            cod_pais: $('#pais').val(),
            estado: $('#estado').val(),
            direccion: $('#direccion').val(),
            tlf_1: $('#tlf_1').val(),
            tlf_2: $('#tlf_2').val(),
            ciudad: $('#ciudad').val()

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

    }); //Fin ajax

}; //fin funcion datos_empresa


$.fn.desactivar_empresa = function () {

    $.ajax({
        url: "<?php echo base_url() ?>siconm/c_empresa/desactivar_empresa",
        type: "POST",
        dataType: "json",
        data: {
            cod_empresa: cod_empresa,
            observacion: $('#observacion').val()

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

}; //
