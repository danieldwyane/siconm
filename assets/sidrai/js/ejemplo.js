var id_combo_padre;
var nombre_clap;
var tipo_combo;

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
     Evento click del btn modal combo detalle 
     */
    $('#agreg_combo').unbind('click');
    $('#agreg_combo').click(function () {

        $.fn.modal_agreg_combo();
        $.fn.data_inicial_combo();

        $.fn.eventos();

    }); //Fin del evento click
    /************************/

    /*
     Evento click del btn modal combo detalle 
     */
    $('.btn_act_productos').unbind('click');
    $('.btn_act_productos').click(function () {

        var formulario = document.getElementById('form_editar_prod').checkValidity();

        //Evaluo si el formulario es válido
        if (formulario == true) {

            //Llamo a la funcion que consulta los productos asociados
            $.fn.actualizar_productos();

        } else {

            //Muestro los mensajes de error
            $('#form_editar_prod').validator('validate');

            $.fn.eventos();

        }//Fin del if

    }); //Fin del evento click
    /************************/

    /*
     Evento click del boton eliminar combo registrado
     */
    $('.tab_eliminar_combo').unbind('click');
    $('.tab_eliminar_combo').click(function () {

        //Obtengo el id del combo
        var id_combo = $(this).attr('id');

        //Envio el id del combo a la funcion
        $.fn.modal_eliminar(id_combo);

        $.fn.eventos();

    }); //Fin del evento click
    /************************/

    /*
     Evento click sobre el botón .btn_act_reaquirir
     */
    $('.btn_eliminar_combo').unbind('click');
    $('.btn_eliminar_combo').click(function () {

        var id_combo = $(this).attr('id');

        //Actualiza el nuevo analista
        $.fn.eliminar_combo(id_combo);

        //Función donde se declaran todos los eventos
        $.fn.eventos();

    });

    /*
     Evento click del btn agregar consejo comunal
     */
    $('#btn_agregar_combo').unbind('click');
    $('#btn_agregar_combo').click(function () {

        var formulario = document.getElementById('form_detalle_combo').checkValidity();

        //Evaluo si el formulario es válido
        if (formulario == true) {

            $.fn.agregar_detalle_combo();
            $.fn.peso_combo();

        } else {

            //Muestro los mensajes de error
            $('#form_detalle_combo').validator('destroy');
            $('#form_detalle_combo').validator('validate');

            $.fn.eventos();

        }//Fin del if

    }); //Fin del evento click
    /************************/

    /*
     Evento click sobre el btn eliminar contacto 
     */
    $('.tab_eliminar').unbind('click');
    $('.tab_eliminar').click(function () {

        $(this).closest('tr').remove();

        $.fn.peso_combo();

        $.fn.eventos();

    });//Fin del evento click

    /*
     Evento click sobre el botón #crear meta
     */
    $('.btn_registro_combo').unbind('click');
    $('.btn_registro_combo').click(function () {

        var formulario = document.getElementById('form_registro_combo').checkValidity();

        //Evaluo si el formulario es válido
        if (formulario == true) {

            $.fn.registrar_combo();

        } else {

            //Muestro los mensajes de error
            $('#form_registro_combo').validator('destroy');
            $('#form_registro_combo').validator('validate');

            $.fn.eventos();

        }//Fin del if

    }); //Fin del evento click
    /************************/

    /*
     Evento focus sobre el campo #rif
     */
    $('#cantidad_combos').unbind('keyup');
    $('#cantidad_combos').keyup(function (evento) {

        //Obtenemos el valor
        var cantidad = $('#cantidad_combos').autoNumeric('get');
        var precio = $('#precio_combo').autoNumeric('get');

        var total = cantidad * precio;

        $("#precio").val(roundToTwo(total));

        $.fn.eventos();

    });//Fin del evento focus
    /***********************/

    /*
     Evento focus sobre el campo #rif
     */
    $('#precio_combo').unbind('keyup');
    $('#precio_combo').keyup(function (evento) {

        //Obtenemos el valor
        var cantidad = $('#cantidad_combos').autoNumeric('get');
        var precio = $('#precio_combo').autoNumeric('get');

        var total = cantidad * precio;

        $("#precio").val(roundToTwo(total));

        $.fn.eventos();

    });//Fin del evento focus
    /***********************/

    /*
     Evento focus sobre el campo #rif
     */
    $('.valor_presentacion_act').unbind('keyup');
    $('.valor_presentacion_act').keyup(function (evento) {

        $.fn.editar_peso_modal();

        $.fn.eventos();

    });//Fin del evento focus
    /***********************/

    /*
     Evento focus sobre el campo #rif
     */
    $('.cantidad_act').unbind('keyup');
    $('.cantidad_act').keyup(function (evento) {

        $.fn.editar_peso_modal();

        $.fn.eventos();

    });//Fin del evento focus
    /***********************/

    /*
     Evento focus sobre el campo #rif
     */
    $('#m_cantidad_combos').unbind('keyup');
    $('#m_cantidad_combos').keyup(function (evento) {

        //Obtenemos el valor
        var cantidad = $('#m_cantidad_combos').autoNumeric('get');
        var precio = $('#m_precio_combo').autoNumeric('get');

        var total = cantidad * precio;

        $("#m_precio").val(roundToTwo(total));

        $.fn.eventos();

    });//Fin del evento focus
    /***********************/

    /*
     Evento focus sobre el campo #rif
     */
    $('#m_precio_combo').unbind('keyup');
    $('#m_precio_combo').keyup(function (evento) {

        //Obtenemos el valor
        var cantidad = $('#m_cantidad_combos').autoNumeric('get');
        var precio = $('#m_precio_combo').autoNumeric('get');

        var total = cantidad * precio;

        $("#m_precio").val(roundToTwo(total));

        $.fn.eventos();

    });//Fin del evento focus
    /***********************/

};//Fin de la función $.fn.eventos
/********************************/

/*
 Función que muestra los datos del Usuario
 */
$.fn.data_inicial_combo = function () {

    $.ajax({
        url: 'data_inicial_combo',
        type: 'POST',
        dataType: 'json',
        beforeSend: function (objeto) {

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            //Recorremos el array
            $(data['COMBO']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#tipo_combo').append('<option value="' + elemento['ID_COMBO'] + '">' + elemento['DESC_COMBO'] + '</option>');
            }); //Fin del each

            //Recorremos el array
            $(data['COMBO']).each(function (index, elemento) {

                //Asignamos la data al select:option
                $('#producto').multiselect('dataprovider', data['PRODUCTO']);
            }); //Fin del each

            //Recorremos el array
            $(data['PRESENTACION']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#presentacion').append('<option value="' + elemento['ID_PRESENTACION'] + '">' + elemento['DESC_DESCRIPCION'] + '</option>');
            }); //Fin del each

            //Recorremos el array
            $(data['MEDIDA']).each(function (index, elemento) {

                //Mostramos las opciones
                $('#unidad_medida').append('<option value="' + elemento['ID_MEDIDA'] + '">' + elemento['DESC_MEDIDA'] + '</option>');
            }); //Fin del each

            //Función donde se declaran todos los eventos
            $.fn.eventos();
        }//Fin del success

    }); //Fin del ajax
};

/*
 Funcion para agregar el detalle del combo temporal sin guardar
 */
$.fn.agregar_detalle_combo = function () {

    //valor descripcion
    var producto = $('#producto option:selected').text();
    var tipo_producto = $('#tipo_producto option:selected').text();
    var presentacion = $('#presentacion option:selected').text();
    var valor_presentacion = $('#valor_presentacion').val();
    var unidad_medida = $('#unidad_medida option:selected').text();
    var cantidad = $('#cantidad').val();

    //valor id
    var id_producto = $('#producto').val();
    var id_tipo_producto = $('#tipo_producto').val();
    var id_presentacion = $('#presentacion').val();
    var id_unidad_medida = $('#unidad_medida').val();

    //Limpiamos el formulario despues que agregamos
    $('#producto').html(''); //select
    $('#tipo_producto').html(''); //select
    $('#presentacion').html(''); //select
    $('#valor_presentacion').val(''); //input
    $('#unidad_medida').html(''); //select
    $('#cantidad').val(''); //input

    //Colocamos de nuevo el opcion en los select
    $("#producto").html('<option value="" disabled selected>Seleccione</option>');
    $("#tipo_producto").html('<div class="col-md-4 form-group"><label> Tipo de Producto:</label><select id="tipo_producto" name="tipo_producto" class="form-control" onKeyUp="this.value = this.value.toUpperCase();" required><option value="seleccione" selected disabled>Seleccione</option><option value="NACIONAL">NACIONAL</option><option value="IMPORTADO">IMPORTADO</option></select><div class="help-block with-errors"></div></div>');
    $("#presentacion").html('<option value="" disabled selected>Seleccione</option>');
    $("#unidad_medida").html('<option value="" disabled selected>Seleccione</option>');

    //Llamamos nuevamente a la funcion que arma los select
    $.fn.data_inicial_combo();

    $('#tab_detalle_combo tbody').append($.fn.tabla_detalle_combo(producto, tipo_producto, presentacion, valor_presentacion, unidad_medida, cantidad, id_producto, id_tipo_producto, id_presentacion, id_unidad_medida));

};

/*
 Funcion que contiene la tabla donde se asociaran el detalle del combo temporal
 */
$.fn.tabla_detalle_combo = function (producto, tipo_producto, presentacion, valor_presentacion, unidad_medida, cantidad, id_producto, id_tipo_producto, id_presentacion, id_unidad_medida) {

    var tabla = '<tr id="tbl_detalle_combo">';
    tabla += '  <td align="center">';
    tabla += '    ' + producto;
    tabla += '    <input type="hidden" id="producto_array" name="producto_array[]" class="producto_array" readonly value="' + id_producto + '">';
    tabla += '  </td>';
    tabla += '  <td align="center">';
    tabla += '    ' + tipo_producto;
    tabla += '    <input type="hidden" id="tipo_producto_array" name="tipo_producto_array[]" class="tipo_producto_array" readonly value="' + id_tipo_producto + '">';
    tabla += '  </td>';
    tabla += '  <td align="center">';
    tabla += '    ' + presentacion;
    tabla += '    <input type="hidden" id="presentacion_array" name="presentacion_array[]" class="presentacion_array" readonly value="' + id_presentacion + '">';
    tabla += '  </td>';
    tabla += '  <td align="center">';
    tabla += '    ' + valor_presentacion;
    tabla += '    <input type="hidden" id="valor_presentacion_array" name="valor_presentacion_array[]" class="valor_presentacion_array" readonly value="' + valor_presentacion + '">';
    tabla += '  </td>';
    tabla += '  <td align="center">';
    tabla += '    ' + unidad_medida;
    tabla += '    <input type="hidden" id="unidad_medida_array" name="unidad_medida_array[]" class="unidad_medida_array" readonly value="' + id_unidad_medida + '">';
    tabla += '    <input type="hidden" id="desc_medida_array" name="desc_medida_array[]" class="desc_medida_array" readonly value="' + unidad_medida + '">';
    tabla += '  </td>';
    tabla += '  <td align="center">';
    tabla += '    ' + cantidad;
    tabla += '    <input type="hidden" id="cantidad_array" name="cantidad_array[]" class="cantidad_array" readonly value="' + cantidad + '">';
    tabla += '  </td>';
    tabla += '  <td align="center">';
    tabla += '    <i class="fa fa-times fa-3 tab_eliminar" id=' + producto + ' data-toggle="tooltip" title="Eliminar Producto"></i>';
    tabla += '  </td>';
    tabla += '</tr>';

    return tabla;

};//fin función $.fn.tabla_detalle_combo
/**************************************/

/*
 Funcion para registrar el combo
 */
$.fn.registrar_combo = function () {

    //Array de derivados
    var datos_combo_json = [];

    var o = 0;
    while (o < document.getElementsByName("producto_array[]").length) {
        var producto = document.getElementsByName("producto_array[]")[o].value;
        var tipo_producto = document.getElementsByName("tipo_producto_array[]")[o].value;
        var presentacion = document.getElementsByName("presentacion_array[]")[o].value;
        var valor_presentacion = document.getElementsByName("valor_presentacion_array[]")[o].value;
        var unidad_medida = document.getElementsByName("unidad_medida_array[]")[o].value;
        var cantidad = document.getElementsByName("cantidad_array[]")[o].value;

        datos_combo_json.push({producto: producto, tipo_producto: tipo_producto, presentacion: presentacion, valor_presentacion: valor_presentacion, unidad_medida: unidad_medida, cantidad: cantidad});

        o++;
    }

    //Ajax que permite actualizar los datos del mercado
    $.ajax({
        url: 'registrar_combo',
        type: 'POST',
        dataType: 'json',
        data: {descripcion: $('#descripcion').val(),
            tipo_combo: $('#tipo_combo').val(),
            precio: $('#precio').autoNumeric('get'),
            peso: $('#peso').val(),
            tipo_empaque: $('#tipo_empaque').val(),
            cantidad_combos: $('#cantidad_combos').autoNumeric('get'),
            precio_combo: $('#precio_combo').autoNumeric('get'),
            datos_combo_json: datos_combo_json
        },
        beforeSend: function (objeto) {

            //Limpiamos el contenido del modal y los botones
            $('.modal-body').html('');
            $('.modal-footer').html('');
            $('.modal-header').html('');

            //Mostramos el icono de carga
            $('#btn_registro_combo').css('display', 'none');
            $('#btn_registro_combo').parent().append('<i class="icono_carga fa fa-cog fa-spin fa-3x fa-fw"></i>');

        },
        error: function (objeto, quepaso, otroobj) {

            //Mostramos el botón crear solicitud
            $('#btn_registro_combo').parent().children('.icono_carga').remove();
            $('#btn_registro_combo').show();
        },
        success: function (data) {

            //Evaluamos la respuesta
            if (data['CODIGO_RESPUESTA'] == 1) {

                $('.modal').modal('hide');

                //Actualizamos la data de la tabla
                tabla.ajax.reload();

            } else {

                $('.modal-body').html('<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><span class="sr-only">Error:</span>' + data['MENSAJE_RESPUESTA'] + '</div>');

                //Para mantener el mensaje modal por algunos segundos 
                setTimeout(function () {
                    $('.modal-body').html('');
                }, 3000);

            }//Fin del if

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success

    });//Fin del ajax que permite actualizar los datos del mercado

};//fin de la funcion registrar_combo

/*
 Función que consulta el combo registrado
 */
$.fn.consultar_combo_registrado = function () {

    $.ajax({
        url: 'consultar_combo_registrado',
        type: 'POST',
        dataType: 'json',
        beforeSend: function (objeto) {

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            $('#tab_combo_registrado tbody').append($.fn.tabla_combo_registrado(data));

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success

    }); //Fin del ajax que permite 

};//Fin de consulta_cap_operativa

/*
 Funcion que contiene la tabla donde se visualiza el combo registrado
 */
$.fn.tabla_combo_registrado = function (data) {

    var tabla = '  <tr class="tbl_combo_registrado" id="">';

    $.each(data['COMBO_REG'], function (key, value) {

        tabla += '      <td align = "center">';
        tabla += value.ID_COMBO_PADRE;
        tabla += '      </td>';

        tabla += '      <td align = "center">';
        tabla += value.DESC_COMBO;
        tabla += '      </td>';

        tabla += '      <td align = "center">';
        tabla += value.TIPO_COMBO;
        tabla += '      </td>';

        tabla += '      <td align = "center">';
        tabla += value.FECHA;
        tabla += '      </td>';

        tabla += '      <td align = "center">';
        tabla += value.CANTIDAD;
        tabla += '      </td>';

        tabla += '      <td align = "center">';
        tabla += value.PRECIO;
        tabla += '      </td>';

        tabla += '      <td align = "center">';
        tabla += value.PESO;
        tabla += '      </td>';

        tabla += '	<td align = "center">';
//        if (data['POSEE_DISTRIBUCION']['CODIGO_RESPUESTA'] = 0) {

        tabla += '          <i class="fa fa-pencil-square-o btn_modal_combo_editar" id="' + value.ID_COMBO_PADRE + '" nombre_clap="' + value.DESC_COMBO + '" data-toggle="modal" data-target=".bd-example-modal-lg" data-whatever="" data-toggle="tooltip" title="Editar Combo"></i>&nbsp;&nbsp;';
//        }
        tabla += '          <i class="fa fa-newspaper-o fa-3 btn_modal_combo_detalle" id="' + value.ID_COMBO_PADRE + '" nombre_clap="' + value.DESC_COMBO + '" data-toggle="modal" data-target=".bd-example-modal-lg" data-whatever="" data-toggle="tooltip" title="Detalle del Combo"></i>&nbsp;&nbsp;';
        tabla += '          <i class="fa fa-times fa-3 tab_eliminar_combo" id="' + value.ID_COMBO_PADRE + '" nombre_clap="' + value.DESC_COMBO + '" data-toggle="tooltip" title="Eliminar Combo"></i>';
        tabla += '	</td>';
        tabla += '  </tr>';
    });

    return tabla;

};//fin función $.fn.tabla_combo_registrado
/*****************************************/

/*
 Arma la información de la modal ver los productos asociados
 */
$.fn.modal_agreg_combo = function () {
    
    var infoModal = `<form id="form_registro_combo" role="form" data-toggle="validator">

                    <div class="col-md-12">
                        <div class="col-md-3">  
                            <label>Tipo:</label>              
                            <div class="form-group">
                                <select id="tipo_combo" name="tipo_combo" class="form-control" required>
                                    <option value="" disabled selected>Seleccione</option>
                                </select>
                                <div class="help-block with-errors"></div>              
                            </div>  
                        </div>

                        <div class="col-md-6 form-group">
                            <label>Nombre</label>
                            <input id="descripcion" name="descripcion" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required>
                            <div class="help-block with-errors"></div> 
                        </div>

                        <div class="col-md-3 form-group">  
                            <label>Empaque:</label>              
                            <select id="tipo_empaque" name="tipo_empaque" class="form-control" onKeyUp="this.value = this.value.toUpperCase();" required>
                                <option value="seleccione" selected disabled>Seleccione</option>
                                <option value="1">BOLSA</option>
                                <option value="0">CAJA</option>
                            </select>
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="col-md-3 form-group">
                            <label>Cant. Combos</label>
                            <input id="cantidad_combos" name="cantidad_combos" class="form-control" required>
                            <div class="help-block with-errors">Sólo Números.</div> 
                        </div>

                        <div class="col-md-3 form-group">
                            <label>Precio (Bs)</label>
                            <input id="precio_combo" name="precio_combo" class="form-control" required>
                            <div class="help-block with-errors">Sólo Números.</div> 
                        </div>

                        <div class="col-md-3 form-group">
                            <label>Precio Total (Bs)</label>
                            <input id="precio" name="precio" class="form-control" readonly required>
                            <div class="help-block with-errors"></div> 
                        </div>

                        <div class="col-md-3 form-group">
                            <label>Peso Total (Kg)</label>
                            <input id="peso" name="peso" class="form-control" readonly required>
                            <div class="help-block with-errors"></div> 
                        </div>
                    </div>

                </form>  

                <form id="form_detalle_combo" role="form" data-toggle="validator">
                    <div class="col-md-12">
                        <legend>
                            <h2 class="titulo_m">Productos</h2>
                        </legend>
                    </div>

                    <div class="col-md-12">
                        <div class="col-md-8">  
                            <label>Producto:</label>              
                            <div class="form-group">
                                <select id="producto" name="producto" class="form-control" multiple="multiple" required>
                                    <!--<option value="" disabled selected>Seleccione</option>-->
                                </select>
                                <div class="help-block with-errors"></div>              
                            </div>  
                        </div>

                        <div class="col-md-4 form-group">
                            <label> Tipo de Producto:</label>
                            <select id="tipo_producto" name="tipo_producto" class="form-control" onKeyUp="this.value = this.value.toUpperCase();" required>
                                <option value="seleccione" selected disabled>Seleccione</option>
                                <option value="NACIONAL">NACIONAL</option>
                                <option value="IMPORTADO">IMPORTADO</option>
                            </select>
                            <div class="help-block with-errors"></div>
                        </div> 
                    </div>
                    <div class="col-md-12">
                        <div class="col-md-3">  
                            <label>Presentacion:</label>              
                            <div class="form-group">
                                <select id="presentacion" name="presentacion" class="form-control" required>
                                    <option value="" disabled selected>Seleccione</option>
                                </select>
                                <div class="help-block with-errors"></div>              
                            </div>  
                        </div>
                        <div class="col-md-3 form-group">
                            <label>Valor Presentación</label>
                            <input id="valor_presentacion" name="valor_presentacion" class="form-control" required>
                            <div class="help-block with-errors">Sólo Números.</div> 
                        </div>

                        <div class="col-md-3">  
                            <label>Unidad de Medida:</label>              
                            <div class="form-group">
                                <select id="unidad_medida" name="unidad_medida" class="form-control" required>
                                    <option value="" disabled selected>Seleccione</option>
                                </select>
                                <div class="help-block with-errors"></div>              
                            </div>  
                        </div>

                        <div class="col-md-3 form-group">
                            <label>Cant. Presentación</label>
                            <input id="cantidad" name="cantidad" class="form-control" required>
                            <div class="help-block with-errors">Sólo Números.</div> 
                        </div>
                    </div>

                    <div class="col-md-12 form-group text-center">
                        <button id="btn_agregar_combo" type="button" class="btn btn-danger">Agregar</button>
                    </div>

                    <div class="row consComu" id="consComu">
                        <div class="form-group col-xs-12">
                            <table  class="table row-border table-bordered" id="tab_detalle_combo" border="0" align="center">
                                <thead> 
                                    <tr>
                                        <th style="text-align: center;">Producto</th>
                                        <th style="text-align: center;">Tipo de Producto</th>
                                        <th style="text-align: center;">Presentacion</th>
                                        <th style="text-align: center;">Valor Presentacion</th>
                                        <th style="text-align: center;">Unidad de Medida</th>
                                        <th style="text-align: center;">Cantidad</th>
                                        <th style="text-align: center;">Opciones</th>
                                    </tr>
                                </thead> 
                                <tbody> 
                                </tbody> 
                                <tfoot>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </form>`;

    
        //Seteamos los valores del modal
        $('.modal-header').html('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
        $('.modal-header').append('<h4 class="modal-title titulo_m text-center"></h4>');
        $('#modal .modal-title').text('Registro de Cajas y Bolsas Sicep');

        //Seteamos el body de la moda
        $('.modal-body').html(infoModal);

        //boton para registrar
        $('#modal .modal-footer').html('');
        $('#modal .modal-footer').append('<button type="button" class="btn btn-outline btn_registro_combo">Guardar</button>');
        //$('#modal .modal-footer').append('<button type="button" class="btn btn-success" data-dismiss="modal">Ok</button>');

        //ancho de modal
        $('.modal-dialog').css({
            'width': '1000px'
        });

        //Asignamos el método multiselect
        $('#producto').multiselect({
            buttonWidth: '100%',
//        buttonWidth            : '250px',
//        maxHeight              : 250,
            enableFiltering: true,
            //includeSelectAllOption : true,
            //maxHeight              : 400,
            nonSelectedText: 'Productos',
            selectAllText: 'Seleccionar todo',
            onChange: function (option, checked) {

                var values = [];

                $('#producto option').each(function () {

                    if ($(this).val() !== option.val()) {
                        values.push($(this).val());
                    }

                });

                //Deseleccionamos				  
                $('#producto').multiselect('deselect', values);

                var id_producto = [];

                //Recorremos las opciones seleccionadas
                $('#producto option:selected').each(function () {
                    id_producto.push([$(this).val()]);
                });

            }//Fin del change
        });//Fin del Multiselect

        $("#precio, #precio_combo, #cantidad_combos")
                .autoNumeric('init',
                        {
                            aDec: ',',
                            aSep: '.'
                        });

        $("#valor_presentacion, #cantidad")
                .autoNumeric('init',
                        {
                            aSep: '',
                            aDec: ' ',
                            mDec: '',
                            vMin: '0'
                        });

        //caracteristicas scroll modal
        $('.scroll_modal').css({
            'height': '300px',
            'overflow-y': 'auto',
            'overflow-x': 'hidden'
        });

        //Mostramos la ventana modal
        $('.modal').modal('show');

        //Evento de la modal cuando se muestra la modal
        $('.modal').off('shown.bs.modal');
        $('.modal').on('shown.bs.modal', function (e) {

            $.fn.eventos();
        });

        //Evento de la modal cuando se oculta la modal
        $('#modal').off('hide.bs.modal');
        $('#modal').on('hide.bs.modal', function (e) {

            $.fn.eventos();
        });


};// fin de la funcion modal_agreg_combo
/*
 Arma la información de la modal ver los productos asociados
 */
$.fn.modal_productos = function () {

    var infoModal = '<form id="form_editar" role="form" data-toggle="validator">';
    infoModal += '  <div id="capa_scroll_prod" class= "scroll_modal">';
    infoModal += '    <div class="row">';
    infoModal += '      <div class="container-fluid header_present">';
    infoModal += '	  <div class="col-md-4 text-center">Producto</div>';
    infoModal += '	  <div class="col-md-2 text-center">Tipo</div>';
    infoModal += '	  <div class="col-md-5 text-center">Presentación</div>';
    infoModal += '        <div class="col-md-1 text-center">Cant.</div>';
    infoModal += '      </div>';
    infoModal += '    </div>';
    infoModal += '  </div>';
    infoModal += '</form>';

    //Seteamos los valores del modal
    $('.modal-header').html('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
    $('.modal-header').append('<h4 class="modal-title titulo_m text-center"></h4>');
    $('#modal .modal-title').text(nombre_clap);

    //Seteamos el body de la moda
    $('.modal-body').html('');
    $('.modal-body').append(infoModal);

    //boton para registrar
    $('#modal .modal-footer').html('');
    $('#modal .modal-footer').append('<button type="button" class="btn btn-outline" data-dismiss="modal">Ok</button>');

    //ancho de modal
    $('.modal-dialog').css({
        'width': '850px'
    });

    //caracteristicas scroll modal
    $('.scroll_modal').css({
        'height': '175px',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
    });

    //Mostramos la ventana modal
    $('.modal').modal('show');

    //Evento de la modal cuando se muestra la modal
    $('.modal').off('shown.bs.modal');
    $('.modal').on('shown.bs.modal', function (e) {

        $.fn.eventos();
    });

    //Evento de la modal cuando se oculta la modal
    $('#modal').off('hide.bs.modal');
    $('#modal').on('hide.bs.modal', function (e) {

        $.fn.eventos();
    });

};// fin de la funcion modal_productos

/*
 Funcion para cargar los productos asociados
 */
$.fn.consultar_productos_asociados = function () {

    //Ajax que trae de la base de datos la información de los productos asociados
    $.ajax({

        url: 'consultar_productos_asociados',
        type: 'POST',
        dataType: 'json',
        data: {id_combo_padre: id_combo_padre},
        beforeSend: function (objeto) {

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            var infoModal = '';

            //Recorremos los resultados de los productos asociados
            $.each(data['PRODUCTOS'], function (k, v) {

                infoModal += '<div class="row">';
                infoModal += ' <div class="text-center container-fluid dato_prod">';
                infoModal += '	<div class="col-md-4 text-center producto" id =' + v.ID_PRODUCTO + '>' + v.DESC_PRODUCTO + '</div>';
                infoModal += '	<div class="col-md-2 text-center tipo_producto">' + v.TIPO_PRODUCTO + '</div>';
                infoModal += '	<div class="col-md-5 text-center presentacion">' + v.PRESENTACION + '</div>';
                infoModal += '	<div class="col-md-1 text-center cantidad">' + v.CANTIDAD + '</div>';
                infoModal += ' </div>';
                infoModal += '</div>';
            });

            $('#capa_scroll_prod').append(infoModal);

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success

    });//Fin del ajax que muestra los datos del mercado

};//fin de la funcion consultar_productos_asociados
//***********************************************//

/*
 Arma la información de la modal ver los productos asociados
 */
$.fn.modal_editar_productos = function () {

    var infoModal = '<form id="form_editar_prod" role="form" data-toggle="validator">';
    infoModal += '  <div class="row">';
    infoModal += '    <div class="col-md-6 form-group">';
    infoModal += '      <label>Nombre</label>';
    infoModal += '      <input id="m_descripcion" name="m_descripcion" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required>';
    infoModal += '      <div class="help-block with-errors"></div>';
    infoModal += '    </div>';
    infoModal += '    <div class="col-md-6 form-group">';
    infoModal += '      <label>Tipo:</label>';
    infoModal += '      <input id="m_tipo_combo" name="m_tipo_combo" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required readonly>';
    infoModal += '      <input id="m_tipo_combo_id" name="m_tipo_combo" type="hidden" class="form-control" readonly>';
    infoModal += '      <div class="help-block with-errors"></div>';
    infoModal += '    </div>';
    infoModal += '  </div>';

    infoModal += '  <div class="row">';
    infoModal += '    <div class="col-md-3 form-group">';
    infoModal += '      <label>Cant. Combos</label>';
    infoModal += '      <input id="m_cantidad_combos" name="m_cantidad_combos" class="form-control" required>';
    infoModal += '      <div class="help-block with-errors">Sólo Números.</div>';
    infoModal += '    </div>';
    infoModal += '    <div class="col-md-3 form-group">';
    infoModal += '      <label>Precio Combo (Bs)</label>';
    infoModal += '      <input id="m_precio_combo" name="m_precio_combo" class="form-control" required>';
    infoModal += '      <div class="help-block with-errors">Sólo Números.</div>';
    infoModal += '    </div>';
    infoModal += '    <div class="col-md-3 form-group">';
    infoModal += '      <label>Precio Total (Bs)</label>';
    infoModal += '      <input id="m_precio" name="m_precio" class="form-control" readonly required>';
    infoModal += '      <div class="help-block with-errors"></div>';
    infoModal += '    </div>';
    infoModal += '    <div class="col-md-3 form-group">';
    infoModal += '      <label>Peso Total (Kg)</label>';
    infoModal += '      <input id="m_peso" name="m_peso" class="form-control" readonly required>';
    infoModal += '      <div class="help-block with-errors"></div>';
    infoModal += '    </div>';
    infoModal += '  </div>';

    infoModal += '<form id="form_editar" role="form" data-toggle="validator">';
    infoModal += '  <div id="capa_scroll_prod" class="scroll_modal">';
    infoModal += '    <div class="row">';
    infoModal += '      <div class="container-fluid header_prod">';
    infoModal += '	  <div class="col-md-2 text-center">Producto</div>';
    infoModal += '	  <div class="col-md-2 text-center">Tipo</div>';
    infoModal += '	  <div class="col-md-2 text-center">Presentación</div>';
    infoModal += '	  <div class="col-md-2 text-center">Valor</div>';
    infoModal += '	  <div class="col-md-2 text-center">Unidad Medida</div>';
    infoModal += '        <div class="col-md-2 text-center">Cant.</div>';
    infoModal += '      </div>';
    infoModal += '    </div>';
    infoModal += '  </div>';
    infoModal += '</form>';

    //Seteamos los valores del modal
    $('.modal-header').html('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
    $('.modal-header').append('<h4 class="modal-title titulo_m text-center"></h4>');
    $('#modal .modal-title').text(nombre_clap);

    //Seteamos el body de la moda
    $('.modal-body').html('');
    $('.modal-body').append(infoModal);

    //boton para registrar
    $('#modal .modal-footer').html('');
    $('#modal .modal-footer').append('<button type="button" class="btn btn-outline btn_act_productos">Actualizar</button>');
    //$('#modal .modal-footer').append('<button type="button" class="btn btn-success" data-dismiss="modal">Ok</button>');

    //ancho de modal
    $('.modal-dialog').css({
        'width': '1000px'
    });

    //caracteristicas scroll modal
    $('.scroll_modal').css({
        'height': '300px',
        'overflow-y': 'auto',
        'overflow-x': 'hidden'
    });

    //Mostramos la ventana modal
    $('.modal').modal('show');

    //Evento de la modal cuando se muestra la modal
    $('.modal').off('shown.bs.modal');
    $('.modal').on('shown.bs.modal', function (e) {

        $.fn.eventos();
    });

    //Evento de la modal cuando se oculta la modal
    $('#modal').off('hide.bs.modal');
    $('#modal').on('hide.bs.modal', function (e) {

        $.fn.eventos();
    });

};// fin de la funcion modal_editar_productos

/*
 Funcion para cargar los productos asociados
 */
$.fn.consultar_productos_editar = function () {

    //Ajax que trae de la base de datos la información de los productos asociados
    $.ajax({

        url: 'consultar_productos_editar',
        type: 'POST',
        dataType: 'json',
        data: {id_combo_padre: id_combo_padre},
        beforeSend: function (objeto) {

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            var infoModal = '';

            //Recorremos los resultados de los productos asociados
            $.each(data['DET_PRODUCTOS'], function (k, v) {

                infoModal += '<div class="row">';
                infoModal += ' <div class="text-center container-fluid dato_prod_editar">';
                infoModal += '    <input type="hidden" id="id_combo_hijo" name="id_combo_hijo[]" class="form-control id_combo_hijo" required value=' + v.ID_COMBO_HIJO + '>';
                infoModal += '    <input type="hidden" id="desc_um_act" name="desc_um_act[]" class="form-control desc_um_act" required value=' + v.DESC_UNIDAD_MEDIDA + '>';
                //Producto
                infoModal += '	<div class="col-md-2 form-group text-center">';
                infoModal += '   <select id="producto_act" name="producto_act[]" class="form-control producto_act" required>';
                infoModal += '     <option selected value=' + v.ID_PRODUCTO + '>' + v.DESC_PRODUCTO + '</option>';
                $.each(data['PRODUCTO'], function (k, v) {
                    //Mostramos las opciones
                    infoModal += '<option value=' + v.value + '>' + v.label + '</option>';
                });//Fin del if  
                infoModal += '   </select>';
                infoModal += '  </div>';
                //Tipo de Producto
                infoModal += '	<div class="col-md-2 form-group text-center">';
                infoModal += '   <select id="tipo_producto_act" name="tipo_producto_act[]" class="form-control tipo_producto_act" required>';
                infoModal += '     <option selected value=' + v.TIPO_PRODUCTO + '>' + v.TIPO_PRODUCTO + '</option>';
                if (v.TIPO_PRODUCTO == "IMPORTADO") {
                    infoModal += ' <option value="NACIONAL">NACIONAL</option>';
                } else {
                    infoModal += ' <option value="IMPORTADO">IMPORTADO</option>';
                }
                infoModal += '   </select>';
                infoModal += '  </div>';
                //Presentacion
                infoModal += '	<div class="col-md-2 form-group text-center">';
                infoModal += '   <select id="presentacion_act" name="presentacion_act[]" class="form-control presentacion_act" required>';
                infoModal += '     <option selected value=' + v.ID_PRESENTACION + '>' + v.DESC_PRESENTACION + '</option>';
                $.each(data['PRESENTACION'], function (k, v) {
                    //Mostramos las opciones
                    infoModal += '<option value=' + v.ID_PRESENTACION + '>' + v.DESC_DESCRIPCION + '</option>';
                });//Fin del if  
                infoModal += '   </select>';
                infoModal += '  </div>';
                //Valor Presentacion
                infoModal += '	<div class="col-md-2 form-group text-center">';
                infoModal += '    <input id="valor_presentacion_act" name="valor_presentacion_act[]" class="form-control valor_presentacion_act" required value=' + v.VALOR_PRESENTACION + '>';
                infoModal += '  </div>';
                //Unidad Medida
                infoModal += '	<div class="col-md-2 form-group text-center">';
                infoModal += '   <select id="um_act" name="um_act[]" class="form-control um_act" required>';
                infoModal += '     <option selected value=' + v.ID_UNIDAD_MEDIDA + '>' + v.DESC_UNIDAD_MEDIDA + '</option>';
                $.each(data['MEDIDA'], function (k, v) {
                    //Mostramos las opciones
                    infoModal += '<option value=' + v.ID_MEDIDA + '>' + v.DESC_MEDIDA + '</option>';
                });//Fin del if  
                infoModal += '   </select>';
                infoModal += '  </div>';
                //Cantidad
                infoModal += '	<div class="col-md-2 form-group text-center">';
                infoModal += '    <input id="cantidad_act" name="cantidad_act[]" class="form-control cantidad_act" required value=' + v.CANTIDAD + '>';
                infoModal += '  </div>';
                infoModal += ' </div>';
                infoModal += '</div>';

            });

            $('#capa_scroll_prod').append(infoModal);

            //Seteamos valores de los datos
            $('#m_descripcion').val(data['DET_PRODUCTOS'][0]['NOMBRE']);
            $('#m_cantidad_combos').val(data['DET_PRODUCTOS'][0]['CANTIDAD_TOTAL']);
            $('#m_precio_combo').val(data['DET_PRODUCTOS'][0]['PRECIO_COMBO']);
            $('#m_precio').val(data['DET_PRODUCTOS'][0]['PRECIO_TOTAL']);


            $('#m_tipo_combo').val(data['DET_PRODUCTOS'][0]['DESC_TIPO_COMBO']);
            $('#m_tipo_combo_id').val(data['DET_PRODUCTOS'][0]['ID_TIPO_COMBO']);

            $.fn.editar_peso_modal();

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success

    });//Fin del ajax que muestra los datos del mercado

};//fin de la funcion consultar_productos_asociados
//***********************************************//

$.fn.actualizar_productos = function () {

    //Variable que almacenará los productos
    var productos = [];

    var o = 0;
    while (o < document.getElementsByName("id_combo_hijo[]").length) {
        var id_combo_hijo = document.getElementsByName("id_combo_hijo[]")[o].value;
        var producto = document.getElementsByName("producto_act[]")[o].value;
        var tipo_producto = document.getElementsByName("tipo_producto_act[]")[o].value;
        var presentacion = document.getElementsByName("presentacion_act[]")[o].value;
        var valor_presentacion = document.getElementsByName("valor_presentacion_act[]")[o].value;
        var unidad_medida = document.getElementsByName("um_act[]")[o].value;
        var cantidad = document.getElementsByName("cantidad_act[]")[o].value;

        productos.push({
            "id_combo_hijo": id_combo_hijo,
            "producto": producto,
            "tipo_producto": tipo_producto,
            "presentacion": presentacion,
            "valor_presentacion": valor_presentacion,
            "unidad_medida": unidad_medida,
            "cantidad": cantidad
        });

        o++;
    }

    //Ajax que permite actualizar los datos de la meta
    $.ajax({
        url: 'actualizar_productos',
        type: 'POST',
        dataType: 'json',
        data: {
            id_combo_padre: id_combo_padre,
            nombre_combo: $('#m_descripcion').val(),
            tipo_combo: $('#m_tipo_combo_id').val(),
            cant_combos: $('#m_cantidad_combos').autoNumeric('get'),
            precio_combo: $('#m_precio_combo').autoNumeric('get'),
            precio_total: $('#m_precio').autoNumeric('get'),
            peso_total: $('#m_peso').val(),
            productos: productos
        },
        beforeSend: function (objeto) {

            //Limpiamos el mensaje de la modal
            $('.modal-footer').html('<i class="icono_carga fa fa-cog fa-spin fa-3x fa-fw"></i>');

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            //Evaluamos la respuesta
            if (data['CODIGO_RESPUESTA'] == 1) {

                $('.modal').modal('hide');

                //Actualizamos la data de la tabla
                tabla.ajax.reload();

            } else {

                $('.modal-body').html('<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><span class="sr-only">Error:</span>' + data['MENSAJE_RESPUESTA'] + '</div>');

                //Para mantener el mensaje modal por algunos segundos 
                setTimeout(function () {
                    $('.modal').modal('hide');
                }, 3000);

            }//Fin del if

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success

    });//Fin del ajax que permite actualizar los datos del periódo
}

/*
 Función que elimina el combo registrado
 */
$.fn.eliminar_combo = function (id_combo) {

    $.ajax({
        url: 'eliminar_combo',
        type: 'POST',
        dataType: 'json',
        data: {id_combo: id_combo},
        beforeSend: function (objeto) {

            //Limpiamos el mensaje de la modal
            $('.modal-footer').html('<i class="icono_carga fa fa-cog fa-spin fa-3x fa-fw"></i>');

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            //Evaluamos la respuesta
            if (data['CODIGO_RESPUESTA'] == 1) {

                $('.modal').modal('hide');

                //Actualizamos la data de la tabla
                tabla.ajax.reload();

            } else {

                $('.modal-body').html('<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><span class="sr-only">Error:</span>' + data['MENSAJE_RESPUESTA'] + '</div>');

                //Para mantener el mensaje modal por algunos segundos 
                setTimeout(function () {
                    $('.modal').modal('hide');
                }, 3000);

            }//Fin del if

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success

    }); //Fin del ajax que permite 

};//Fin de eliminar_combo

/*
 Función que arma la modal eliminar
 */
$.fn.modal_eliminar = function (id_combo) {

    //Html a mostrar en el modal
    var html = '<form id="form_eliminar">';
    html += '  <div class="form-group">';
    html += '    <p><b> Seguro desea eliminar este combo? </b></p>';
    html += '  </div>';
    html += '</form>';
    //Seteamos los valores del modal
    $('.modal-header').html('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
    $('.modal-header').append('<h4 class="modal-title titulo_m text-center"></h4>');
    $('#modal .modal-title').text(nombre_clap);

    $('.modal-body').html(html);
    $('.modal-footer').html('<button id="' + id_combo + '" type="button" class="btn btn-outline btn_eliminar_combo">Si</button>');
    $('.modal-footer').append('<button type="button" class="btn btn-outline" data-dismiss="modal">No</button>');
    //Mostramos el modal
    $('#modal').modal('show');
    //Evento de la modal cuando se muestra la modal
    $('#modal').off('shown.bs.modal');
    $('#modal').on('shown.bs.modal', function (e) {
        $.fn.eventos();
    });

};//Fin de la función $.fn.modal_anular_sol
/****************************************/

/*
 Función que calcula el peso total
 */
$.fn.peso_combo = function () {

    var reset = $("#peso").val('');

    var o = 0;
    while (o < document.getElementsByName("producto_array[]").length) {
        var valor_presentacion = document.getElementsByName("valor_presentacion_array[]")[o].value;
        var unidad_medida = document.getElementsByName("desc_medida_array[]")[o].value;
        var cantidad = document.getElementsByName("cantidad_array[]")[o].value;
        var valor = 0;

        switch (unidad_medida) {
            case 'KG':
                valor = 1;
                break;
            case 'TONELADA (T)':
                valor = 1000;
                break;
            case 'GRAMO (G)':
                valor = 0.001;
                break;
            case 'QUINTAL LARGO BRITÁNICO':
                valor = 50.802;
                break;
            case 'LITRO (L)':
                valor = 1;
                break;
            case 'GALÓN (GAL)':
                valor = 3.785;
                break;
            case 'CENTIMETRO CUBICO (cm3)':
                valor = 0.001;
                break;
            case 'UNIDAD':
                valor = 0;
        }

        var result_peso = (Number(valor_presentacion) * Number(cantidad)) * Number(valor);

        //Resultado del peso total
        var peso = $("#peso").val();
        var total_peso = Number(result_peso) + Number(peso);
        $("#peso").val(roundToTwo(total_peso));

        o++;
    }

};//Fin de peso_combo

/*
 Función que calcula el peso total
 */
$.fn.editar_peso_modal = function () {

    var reset = $("#m_peso").val('');

    var o = 0;
    while (o < document.getElementsByName("id_combo_hijo[]").length) {
        var valor_presentacion = document.getElementsByName("valor_presentacion_act[]")[o].value;
        var unidad_medida = document.getElementsByName("desc_um_act[]")[o].value;
        var cantidad = document.getElementsByName("cantidad_act[]")[o].value;
        var valor = 0;

        switch (unidad_medida) {
            case 'KG':
                valor = 1;
                break;
            case 'TONELADA':
                valor = 1000;
                break;
            case 'GRAMO':
                valor = 0.001;
                break;
            case 'QUINTAL':
                valor = 50.802;
                break;
            case 'LITRO':
                valor = 1;
                break;
            case 'GALÓN':
                valor = 3.785;
                break;
            case 'CENTIMETRO':
                valor = 0.001;
                break;
            case 'UNIDAD':
                valor = 0;
        }

        var result_peso = (Number(valor_presentacion) * Number(cantidad)) * Number(valor);

        var peso = $("#m_peso").val();
        var total_peso = Number(result_peso) + Number(peso);
        $("#m_peso").val(roundToTwo(total_peso));

        o++;
    }

};//Fin de peso_combo

/*
 Función que calcula el peso total
 */
$.fn.editar_peso_keyup2 = function (id_motivo) {

    var reset = $("#m_peso").val('');

    var o = 0;
    while (o < document.getElementsByName("id_combo_hijo[]").length) {
        var valor_presentacion = document.getElementsByName("valor_presentacion_act[]")[o].value;
//            var unidad_medida = document.getElementsByName("desc_um_act[]")[o].value;
        var cantidad = document.getElementsByName("cantidad_act[]")[o].value;
        var valor = 0;

        switch (id_motivo) {
            case '1':
                valor = 1;
                break;
            case '2':
                valor = 1000;
                break;
            case '3':
                valor = 0.001;
                break;
            case '4':
                valor = 50.802;
                break;
            case '5':
                valor = 1;
                break;
            case '6':
                valor = 3.785;
                break;
            case '7':
                valor = 0.001;
                break;
            case '8':
                valor = 0;
        }

        var result_peso = (Number(valor_presentacion) * Number(cantidad)) * Number(valor);

        var peso = $("#m_peso").val();
        var total_peso = Number(result_peso) + Number(peso);
        $("#m_peso").val(roundToTwo(total_peso));

        o++;
    }

};//Fin de peso_combo

/*
 Función para mantener los decimales
 */
function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

/*
 Función que consulta el combo registrado
 */
$.fn.consultar_distribucion = function (id_combo_padre) {

    $.ajax({
        url: 'consultar_distribucion',
        type: 'POST',
        dataType: 'json',
        data: {id_combo_padre: id_combo_padre},
        beforeSend: function (objeto) {

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            //Evaluamos la respuesta
            if (data['CODIGO_RESPUESTA'] == 1) {
                //Mostramos el mensaje
                $('.modal-body').html('<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span><span class="sr-only">Error:</span>' + data['MENSAJE_RESPUESTA'] + '</div>');
                $('.modal-footer').html('<button type="button" class="btn btn-outline" data-dismiss="modal">Ok</button>');
                $('.modal-header').html('<h4>Error <i class="fa fa-exclamation-triangle" aria-hidden="true"></i></h4>');

                //Mostramos la modal
                $('#modal').modal('show');

            } else {

                //Llamo la funcion donde genero la vista de los productos asociados
                $.fn.modal_editar_productos();

                //Llamo a la funcion que consulta los productos asociados
                $.fn.consultar_productos_editar();

                $("#m_cantidad_combos, #m_precio_combo, #m_precio")
                        .autoNumeric('init',
                                {
                                    aDec: ',',
                                    aSep: '.'
                                });

            }//Fin del if

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success

    }); //Fin del ajax que permite 

};//Fin de consulta_cap_operativa

//funcion que muestra la tabla datatable
$.fn.tabla = function ()
{

//    //Campo de busqueda por cada columna
//    $('#contenido_tabla thead tr:eq(1) th:eq(0), #contenido_tabla thead tr:eq(1) th:eq(1),#contenido_tabla thead tr:eq(1) th:eq(2)')
//            .each(function () {
//
//                $(this).html('<input type="text" placeholder="Buscar"/>');
//
//            });

    //Asigno el método DataTable a mi tabla
    tabla = $('#contenido_tabla').DataTable({
        "ajax": 'consultar_combo_registrado',
        "columns": [
            {"data": "DESC_COMBO"},
            {"data": "TIPO_COMBO"},
            {"data": "CANTIDAD"},
            {"data": "PRECIO"},
            {"data": "PESO"},
            {"data": "ID_COMBO_PADRE", "class": 'text-center'},
            {"data": "ID_COMBO_PADRE", "class": 'text-center'},
            {"data": "ID_COMBO_PADRE", "class": 'text-center'}

        ],
        "order": [[1, "desc"]],
        "fnRowCallback": function (nRow, aData, iDisplayIndex) {

            $('td:eq(5)', nRow).html('<i class="fa fa-pencil-square-o btn_modal_combo_editar" id="' + aData['ID_COMBO_PADRE'] + '" nombre_clap="' + aData['DESC_COMBO'] + '" data-toggle="tooltip" title="Editar"></i>');
            $('td:eq(6)', nRow).html('<i class="fa fa-search btn_modal_detalle" id="' + aData['ID_COMBO_PADRE'] + '" nombre_clap="' + aData['DESC_COMBO'] + '" data-toggle="tooltip" title="Consultar"></i>');
            $('td:eq(7)', nRow).html('<i class="fa fa-times-circle btn_eliminar" id="' + aData['ID_COMBO_PADRE'] + '" nombre_clap="' + aData['DESC_COMBO'] + '" data-toggle="tooltip" title="Eliminar"></i>');



        },
        "columnDefs": [{
                "targets": [3, 4, 5, 6, 7],
                "orderable": false

            }],
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
        "fnInitComplete": function () {

            $.fn.eventos();

        },

    });

//    // Apply the search
//    tabla.columns().every(function () {
//        var that = this;
//
//        $('input', this.header()).on('keyup change', function () {
//            if (that.search() !== this.value) {
//                that
//                        .search(this.value)
//                        .draw();
//            }
//        });
//    });

    /*
     Evento on clik sobre el botón editar mercado el cual captura el atributo de id_mercado
     */
    tabla.on('click', 'tr td .btn_modal_combo_editar', function (event) {


        //Obtengo el id del combo
        id_combo_padre = $(this).attr('id');
        nombre_clap = $(this).attr('nombre_clap');

        $.fn.consultar_distribucion(id_combo_padre);


    }); //Fin del Evento on clik
    /*************************/

    /*
     Evento on clik sobre el botón editar mercado el cual captura el atributo de id_mercado
     */
    tabla.on('click', 'tr td .btn_modal_detalle', function (event) {


        //Obtengo el id del combo
        id_combo_padre = $(this).attr('id');
        nombre_clap = $(this).attr('nombre_clap');

        //Llamo la funcion donde genero la vista de los productos asociados
        $.fn.modal_productos();
        //Llamo a la funcion que consulta los productos asociados
        $.fn.consultar_productos_asociados();


    }); //Fin del Evento on clik
    /*************************/

    /*
     Evento on clik sobre el botón editar mercado el cual captura el atributo de id_mercado
     */
    tabla.on('click', 'tr td .btn_eliminar', function (event) {


        //Obtengo el id del combo
        var id_combo = $(this).attr('id');
        nombre_clap = $(this).attr('nombre_clap');

        //Envio el id del combo a la funcion
        $.fn.modal_eliminar(id_combo);


    }); //Fin del Evento on clik
    /*************************/

}//fin de la funcion $.fn.tabla





