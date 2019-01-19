var tabla = null;
var cod_empresa;
var d = new Date();

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


    // Evento click sobre el btn_agregar_agencias 

    $('#btn_agregar_sucursal').unbind('click');
    $('#btn_agregar_sucursal').click(function () {

        $.fn.modal_agregar_sucursal();

        $.fn.eventos();

    });//Fin del evento click

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
     Evento change de estado. 
     */
    $('#estado1').unbind('select2:select');
    $('#estado1').on('select2:select', function (e) {

        //Obtengo el id del pais.
        var pais = $('#pais').val();
        var id_estado = $(this).val();

        $.fn.ciudades_venezuela(pais, id_estado);

        $.fn.eventos();
    }); //Fin del evento change estado.



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
            "url": "<?php echo base_url() ?>index.php/siconm/c_sucursal/bandeja_sucursal",
            "type": "POST", 
            data:{id_empresa:$('#btn_agregar_sucursal').attr('id_empresa')}
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
                    <li><a href="#" id="' + aData['cod_empresa'] + '" class="btn_actualizar">Actualizar</a></li><li><a href="#" id="' + aData['cod_empresa'] + '" class="btn_desactivar">Desactivar</a></li></ul></div>');
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

    });//Fin del DataTable

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

};//Fin de la función $.fn.tabla
/******************************/

/*
 Función que arma la modal_agregar_sucursal
 */
$.fn.modal_agregar_sucursal = function () {

    //Html a mostrar en el modal
    var html = '<form id="form_agregar_sucursal" class="form-horizontal" role="form" data-toggle="validator">';

    html += '  <div class="form-group">';
    html += '    <label class="control-label col-sm-3">Empresa:</label>';
    html += '      <div class="col-sm-9">';
    html += '     <input value="'+$('.titulo_p').find('small').html()+'" type="text" class="form-control" readonly>';   
    html += '      </div>';
    html += '  </div>';

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
    html += '    <label class="control-label col-sm-3">Año Fundación:</label>';
    html += '        <div class="col-sm-9">';
    html += '           <div class="input-group date">';
    html += '             <div class="input-group-addon">';
    html += '              <i class="fa fa-calendar"></i>';
    html += '             </div>';
    html += '            <input id="anio_fundacion" name="anio_fundacion" type="text" class="form-control" required>';
    html += '      </div>';
    html += '  </div>';
    html += '</div>';

    html += ' </form>';

    //Seteamos los valores del modal
    $('.modal .modal-title').text('Agregar Nueva Sucursal');
    $('.modal .modal-body').html('');
    $('.modal .modal-body').append(html);
    $('.modal .modal-footer').html('');
    $('.modal .modal-footer').append('<button id="" type="button" class="btn btn-azul-modal btn_guardar">Guardar</button>');

    $('#empresa, #pais, #estado1, #ciudad').select2({
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

};//Fin de la función $.fn.modal_agregar_agencias
/*************************************/

/*
 Función donde se carga la data inicial para los select 
 */
$.fn.data_inicial = function () {
    $.ajax({
        url: "<?php echo base_url() ?>siconm/c_sucursal/data_inicial",
        type: 'POST',
        dataType: 'json',
        success: function (data) {

            //iniciar sin opcion seleccionada
            $("#empresa").html('<option value="">Seleccione</option>');

            //Recorremos el array
            $(data['empresas']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#empresa').append('<option value="' + elemento['cod_empresa'] + '">' + elemento['razon_social'] + '</option>');

            });//Fin del each

            //iniciar sin opcion seleccionada
            $("#pais").html('<option value="">Seleccione</option>');

            //Recorremos el array
            $(data['pais']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#pais').append('<option value="' + elemento['co_pais'] + '">' + elemento['btrim'] + '</option>');

            });//Fin del each

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }
    });

}; //fin funcion Data Inicial.

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