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
        //CSS principal de la vista
        echo css_asset('registro/v_form_produccion.css', 'empresa_distribucion');
        //CSS principal de para el DateTimePicker
        echo css_asset('bootstrap-datetimepicker.min.css', 'bootstrap-datetimepicker/build');

        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js', 'jquery');
        //JS validador autonumeric
        echo js_asset('autoNumeric-min.js', 'autoNumeric');
        //JS principal de Bootstrap
        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
        //JS para validar el formulario
        echo js_asset('validator.js', 'bootstrap-3.3.7');
        //JS propio de la vista
        echo js_asset('registro/v_form_distribucion_registro.js', 'empresa_distribucion');
        //JS principal de Moment
        echo js_asset('moment.min.js', 'moment/min');
        echo js_asset('es.js', 'moment/locale');
        //JS principal de para el DateTimePicker
        echo js_asset('bootstrap-datetimepicker.min.js', 'bootstrap-datetimepicker/build');
        ?>

    </head>

    <body>

        <div id="capa_formulario" class="container">
            <div class="row row-centered">
                <div class="col-md-8 col-centered">

                    <form id="form_registro" role="form" data-toggle="validator">
                        
                        <div class="col-md-12">
                            <legend>
                                <h3 class="text-primary text-center">Registro Distribución Empresa</h3>
                            </legend>
                        </div>
                        
                        <div class="col-md-6 form-group"> 
                            <label>Producto:</label>              
                            <select id="producto" name="producto" class="form-control" required>
                                <option value="" disabled selected>Seleccione</option>
                            </select>
                            <div class="help-block with-errors"></div>              
                        </div>

                        <div class="col-md-6 form-group"> 
                            <label>Presentación:</label>              
                            <select id="presentacion" name="presentacion" class="form-control" required>
                                <option value="" disabled selected>Seleccione</option>
                            </select>
                            <div class="help-block with-errors"></div>              
                        </div>
                        
                        <div class="col-md-3 form-group">
                            <label>Cantidad</label>
                            <input id="cant_distribucion" name="cant_distribucion" class="form-control" required>
                            <div class="help-block with-errors"></div> 
                        </div>
                        
                        <div class="col-md-3 form-group">
                            <label>Unidad Medida</label>
                            <select id="unidad_medida_distribucion" name="unidad_medida_distribucion" class="form-control" required>
                                <option value="" disabled selected>Seleccione</option>
                            </select>
                            <div class="help-block with-errors"></div> 
                        </div>

                        <div class="col-md-6 form-group">
                            <label>Empresa Receptora:</label>
                            <select id="empresa_receptora" name="empresa_receptora" class="form-control" required>
                                <option value="" disabled selected>Seleccione</option>
                            </select>
                            <div class="help-block with-errors"></div> 
                        </div>
 
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Fecha de Despacho:</label>
                                <div class='input-group date' id='fecha_despacho'>
                                    <input type='text' class="form-control" required/>
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                            
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Fecha de Recepción:</label>     
                                <div class='input-group date' id='fecha_recepcion'>
                                    <input type='text' class="form-control" required>
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        
                        <div class="col-md-12 form-group text-center">
                            <button type="button" id="btn_registro"class="btn btn-primary">Guardar</button>
                        </div>

                    </form>

                </div><!-- /col-centered -->
            </div><!-- /row row-centered -->

            <!--------------------------------- Ventana Modal para editar las solicitudes-------------------------------------------->
            <div id="modal" class="modal fade" tabindex="-1" role="dialog">
                <div class="modal-dialog">
                    <!---------------------------contenido del modal ------------------------------------>
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title"></h4>
                        </div>
                        <div class="modal-body"></div><!-- /cierra el modal body -->
                        <div class="modal-footer"></div>
                    </div><!-- /cierra el modal content -->
                </div><!-- /cierra el modal-dialog -->
            </div><!-- /cierra el modal -->
        </div>

    </body>

</html> 

