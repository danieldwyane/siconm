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
        //CSS principal de para el DateTimePicker
        echo css_asset('bootstrap-datetimepicker.min.css', 'bootstrap-datetimepicker/build');
        //CSS boostrap multiselect
        echo css_asset('bootstrap-multiselect.css', 'boostrap-multiselect');
        //CSS principal de la vista
        echo css_asset('registro/v_form_procura.css', 'empresa_distribucion');

        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js', 'jquery');
        //JS principal de Bootstrap
        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
        //JS para validar el formulario
        echo js_asset('validator.js', 'bootstrap-3.3.7');
        //JS boostrap multiselect 
        echo js_asset('bootstrap-multiselect.js', 'boostrap-multiselect');
        //JS principal de Moment necesario para el DateTimePicker
        echo js_asset('moment.min.js', 'moment/min');
        echo js_asset('es.js', 'moment/locale');
        echo js_asset('bootstrap-datetimepicker.min.js', 'bootstrap-datetimepicker/build');
        //JS propio de la vista
        echo js_asset('registro/v_form_procura.js', 'empresa_distribucion');
        ?>

    </head>

    <body>

        <div id="capa_formulario" class="nav nav-tabs container-fluid well">

            <form id="form_procura" role="form" data-toggle="validator">

                <div class="col-md-12">
                    <legend>
                        <h3 class="text-primary text-center">Registro Procura</h3>
                    </legend>
                </div>

                <div class="col-md-12">
                    <div class="col-md-4 form-group">  
                        <label>Rubro:</label>              
                        <div class="form-group">
                            <select id="rubro" name="rubro" class="form-control" multiple="multiple" required>
                                <!--<option value="" disabled selected>Seleccione</option>-->
                            </select>
                            <div class="help-block with-errors"></div>              
                        </div>  
                    </div>

                    <div class="col-md-4 form-group">
                        <label>Prooveedor</label>
                        <input id="prooveedor" name="prooveedor" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required>
                        <div class="help-block with-errors"></div> 
                    </div>

                    <div class="col-md-4 form-group">
                        <label>CONTRATO (CORPOVEX)</label>
                        <input id="contrato" name="contrato" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required>
                        <div class="help-block with-errors"></div> 
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-4 form-group">
                        <label>Fuente de Financiamiento</label>
                        <input id="fuente_finan" name="fuente_finan" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required>
                        <div class="help-block with-errors"></div> 
                    </div>

                    <div class="col-md-4 form-group">
                        <label>Oferta Comercial</label>
                        <input id="oferta_comercial" name="oferta_comercial" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required>
                        <div class="help-block with-errors"></div> 
                    </div>

                    <div class="col-md-4 form-group">
                        <label>Orden de Compra</label>
                        <input id="orden_compra" name="orden_compra" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required>
                        <div class="help-block with-errors"></div> 
                    </div>
                </div> 

                <div class="col-md-12">
                    <div class="col-md-4 form-group">
                        <label>Orden de Servicio</label>
                        <input id="orden_serv" name="orden_serv" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required>
                        <div class="help-block with-errors"></div> 
                    </div>

                    <div class="col-md-4 form-group">
                        <label>Buque</label>
                        <input id="buque" name="buque" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required>
                        <div class="help-block with-errors"></div> 
                    </div>

                    <div class="col-md-4 form-group">
                        <label> Puerto:</label>
                        <select id="puerto" name="puerto" class="form-control" onKeyUp="this.value = this.value.toUpperCase();" required>
                            <option value="seleccione" selected disabled>Seleccione</option>
                        </select>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-4 form-group">
                        <label>Manifiesto en Bl</label>
                        <input id="manifiesto_bl" name="manifiesto_bl" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required>
                        <div class="help-block with-errors"></div> 
                    </div>

                    <div class="col-md-4 form-group">  
                        <label>Fecha de Documentos:</label>              
                        <input id="fecha_documentos" name="fecha_documentos" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required>
                        <div class="help-block with-errors"></div> 
                    </div>

                    <div class="col-md-4 form-group">
                        <label>Bl</label>
                        <input id="num_bl" name="num_bl" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required>
                        <div class="help-block with-errors"></div> 
                    </div>
                </div>
        </div>

        <div class="col-md-12 form-group text-center">
            <button type="button" id="btn_procura" class="btn btn-primary">Guardar</button>
        </div>

    </form>

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



