<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <?php
        //CSS principal de Bootstrap
        echo css_asset('bootstrap.min.css', 'bootstrap-3.3.7');
        //CSS para el tipo de fuentes e iconos
        echo css_asset('font-awesome.min.css', 'font-awesome-4.7.0');
        //CSS para colacar imagen venezuela
        echo css_asset('intlTelInput.css', 'intl-tel-input/build');
        //CSS principal de la vista
        echo css_asset('registro/v_form_capacidad_operativa.css', 'empresa_distribucion');

        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js', 'jquery');
        //JS validador autonumeric
        echo js_asset('autoNumeric-min.js', 'autoNumeric');
        //JS principal de Bootstrap
        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
        //JS para validar el formulario
        echo js_asset('validator.js', 'bootstrap-3.3.7');
        //JS de la mascara
        echo js_asset('intlTelInput.min.js', 'intl-tel-input/build');
        echo js_asset('jquery.mask.js', 'jquery');
        //JS propio de la vista
        echo js_asset('registro/v_form_capacidad_operativa.js', 'empresa_distribucion');
        ?>

    </head>

    <body>

        <div id="capa_formulario" class="nav nav-tabs container-fluid well">

            <form id="form_cap_opera" role="form" data-toggle="validator">

                <div class="col-md-12">
                    <legend>
                        <h3 class="text-primary text-center">Registro Capacidad Operativa</h3>
                    </legend>
                </div>

                <div class="col-xs-12">
                    <div class="col-xs-6 form-group">
                        <label>Producto:</label>
                        <select id="producto" class="form-control" required>
                            <option value="" disabled selected>Seleccione</option>
                        </select>
                        <div class="help-block with-errors"></div>
                    </div>
                    
                    <div class="col-xs-6 form-group">
                        <label>Presentación:</label>
                        <select id="pt_producto" class="form-control" required>
                            <option value="" disabled selected>Seleccione</option>
                        </select>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>

                <div class="col-xs-12">   
                    <div class="col-xs-3 form-group">
                        <label>Valor Presentación</label>
                        <input id="um_producto" class="form-control text-uppercase" required disabled>
                        <input type="hidden" id="um_producto_desc" class="form-control text-uppercase" disabled>
                        <input type="hidden" id="cant_pt_producto" class="form-control text-uppercase" disabled>
                        <div class="help-block with-errors"></div> 
                    </div>
                    
                    <div class="col-xs-3 form-group">
                        <label>Cant. Presentación</label>
                        <input id="prod_estimada" class="form-control text-uppercase" required>
                        <div class="help-block with-errors"></div> 
                    </div>
                    
                    <div class="col-xs-2 form-group">
                        <label>Frecuencia</label>
                        <input id="frec_producto" class="form-control text-uppercase" required disabled>
                        <div class="help-block with-errors"></div> 
                    </div>

                    <div class="col-xs-2 form-group">
                        <label>Total</label>
                        <input id="total_kg_lt" class="form-control text-uppercase" required disabled>
                        <div class="help-block with-errors"></div> 
                    </div>
                    
                    <div class="col-xs-2 form-group">
                        <label>UM</label>
                        <input id="um_total" class="form-control text-uppercase" required disabled>
                        <div class="help-block with-errors"></div> 
                    </div>
                </div>
                
                <div class="col-md-12">
                    <legend>
                        <h3 class="text-primary text-center">Insumos Necesarios</h3>
                    </legend>
                </div>
                
                <div class="col-xs-12">
                    <div class="col-xs-4 form-group">
                        <label>Insumo:</label>
                        <select id="insumo" class="form-control">
                            <option value="" disabled selected>Seleccione</option>
                        </select>
                        <div class="help-block with-errors"></div>
                    </div>
                    
                    <div class="col-xs-4 form-group">
                        <label>Unidad Medida</label>
                        <input id="um_insumo" class="form-control text-uppercase" disabled>
                        <input id="um_insumo_id" type="hidden" class="form-control text-uppercase">
                        <div class="help-block with-errors"></div> 
                    </div>

                    <div class="col-xs-4 form-group">
                        <label>Cantidad</label>
                        <input id="cant_insumo" class="form-control text-uppercase">
                        <div class="help-block with-errors"></div> 
                    </div>
                </div>
                
                <div class="col-md-12 form-group text-center">
                    <button id="agregar_insu_cap_oper" type="button" class="btn btn-success form-group">Agregar</button>
                </div>

                <div class="row consComu" id="consComu">
                    <div class="form-group col-xs-12">
                        <table  class="table table-striped" id="tab_insu_cap_oper" border="0" align="center">
                            <thead> 
                                <tr>
                                    <th style="text-align: center;">Insumo</th>
                                    <th style="text-align: center;">Unidad Medida</th>
                                    <th style="text-align: center;">Cantidad</th>
                                    <th style="text-align: center;">Opción</th>
                                </tr>
                            </thead> 
                            <tbody> 
                            </tbody> 
                            <tfoot>
                            </tfoot>
                        </table>
                    </div>
                </div>
                
                <div class="col-md-12 form-group text-center">
                    <button type="button" id="btn_registro" class="btn btn-primary">Guardar</button>
                </div>
                
                <div class="col-md-12">
                    <legend>
                        <h3 class="text-primary text-center">Capacidades Operativas Registradas</h3>
                    </legend>
                </div>
                
                <div class="row consComu" id="consComu">
                    <div class="form-group col-xs-12">
                        <table  class="table table-striped" id="tab_cap_opera_reg" border="0" align="center">
                            <thead> 
                                <tr>
                                    <th style="text-align: center;">Producto</th>
                                    <th style="text-align: center;">Presentación</th>
                                    <th style="text-align: center;">Prod. Estimada</th>
                                    <th style="text-align: center;">Unid. Medida</th>
                                    <th style="text-align: center;">Frecuencia</th>
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
            </form>

        </div>

        <!--------------------------------- Ventana Modal para editar las solicitudes-------------------------------------------->
        <div id="modal" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog">
                <!---------------------------contenido del modal ------------------------------------>
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title text-primary text-center"></h4>
                    </div>
                    <div class="modal-body"></div><!-- /cierra el modal body -->
                    <div class="modal-footer"></div>
                </div><!-- /cierra el modal content -->
            </div><!-- /cierra el modal-dialog -->
        </div><!-- /cierra el modal -->

    </body>

</html> 
