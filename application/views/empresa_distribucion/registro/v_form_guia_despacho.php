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
        //CSS boostrap multiselect
        echo css_asset('bootstrap-multiselect.css', 'boostrap-multiselect');
        //CSS principal de la vista
        echo css_asset('registro/v_form_guia_despacho.css', 'empresa_distribucion');
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
        //JS de la mascara
        echo js_asset('intlTelInput.min.js', 'intl-tel-input/build');
        echo js_asset('jquery.mask.js', 'jquery');
        //JS boostrap multiselect 
        echo js_asset('bootstrap-multiselect.js', 'boostrap-multiselect');
        //JS propio de la vista
        echo js_asset('registro/v_form_guia_despacho.js', 'empresa_distribucion');
        //JS principal de Moment
        echo js_asset('moment.min.js', 'moment/min');
        echo js_asset('es.js', 'moment/locale');
        //JS principal de para el DateTimePicker
        echo js_asset('bootstrap-datetimepicker.min.js', 'bootstrap-datetimepicker/build');
        ?>

    </head>

    <body>

        <div id="capa_formulario" class="nav nav-tabs container-fluid well">

            <form id="form_guia_despacho" role="form" data-toggle="validator">

                <div class="col-md-12">
                    <legend>
                        <h3 class="text-primary text-center">Registro de Guía de Despacho</h3>
                    </legend>
                </div>

                <div class="col-xs-12">
                    <div class="col-xs-12 form-group">
                        <label>Distribuciones Registradas</label>
                        <select class="form-control" id="dist_registradas" multiple="multiple">

                        </select>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>

                <div class="col-xs-12">
                    <div class="col-xs-12 form-group">
                        <label>Presentaciones a Distribuir</label>
                        <select id="pt_distribuir" class="form-control">
                            <option value="" disabled selected>Seleccione</option>
                        </select>                       
                        <input type="hidden" id="emp_receptora" class="form-control text-uppercase" required>
                        <input type="hidden" id="rubro" class="form-control text-uppercase" required>
                        <input type="hidden" id="presentacion" class="form-control text-uppercase" required>
                        <input type="hidden" id="cant_presentacion" class="form-control text-uppercase" required>
                        <input type="hidden" id="um_presentacion" class="form-control text-uppercase" required>
                        <input type="hidden" id="cantidad" class="form-control text-uppercase" required>
                        <input type="hidden" id="id_emp_receptora" class="form-control text-uppercase" required>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>

                <div class="col-xs-12">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Fecha de Despacho:</label>
                            <div class="input-group date" id="fecha_despacho">
                                <input type="text" class="form-control" required/>
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
                            <div class="input-group date" id="fecha_recepcion">
                                <input type="text" class="form-control" required/>
                                <span class="input-group-addon">
                                    <span class="glyphicon glyphicon-calendar"></span>
                                </span>
                            </div>
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12 form-group text-center">
                    <button id="agregar_pt_distribuir" type="button" class="btn btn-success form-group">Agregar</button>
                </div>

                <div class="row consComu" id="consComu">
                    <div class="form-group col-xs-12">
                        <table class="table table-striped" id="tab_pt_distribuir" border="0" align="center">
                            <thead> 
                                <tr>
                                    <th style="text-align: center;">Empresa Receptora</th>
                                    <th style="text-align: center;">Rubro</th>
<!--                                    <th style="text-align: center;">Presentación</th>
                                    <th style="text-align: center;">Cantidad</th>-->
                                    <th style="text-align: center;">Fecha Despacho</th>
                                    <th style="text-align: center;">Fecha Recepción</th>
                                </tr>
                            </thead> 
                            <tbody> 
                            </tbody> 
                            <tfoot>
                            </tfoot>
                        </table>
                    </div>
                </div>

                <div class="col-xs-12">
                    <div class="col-xs-12 form-group">
                        <label>Transporte</label>
                        <select id="transporte" class="form-control" required>
                            <option value="" disabled selected>Seleccione</option>
                        </select>
                        <div class="help-block with-errors"></div>
                    </div>  
                </div>    

                <div class="col-xs-12">
                    <div class="col-xs-4 form-group">
                        <label>Identidad Conductor</label>
                        <input id="identidad_conductor" class="cedula form-control text-uppercase" required placeholder="V-00000000 o E-0000000">
                        <div class="help-block with-errors"></div> 
                    </div>

                    <div class="col-xs-4 form-group">
                        <label>Primer Nombre</label>
                        <input id="primer_nombre" class="form-control text-uppercase" required>
                        <div class="help-block with-errors"></div> 
                    </div>

                    <div class="col-xs-4 form-group">
                        <label>Segundo Nombre</label>
                        <input id="segundo_nombre" class="form-control text-uppercase" required>
                        <div class="help-block with-errors"></div> 
                    </div>
                </div>

                <div class="col-xs-12">
                    <div class="col-xs-6 form-group">
                        <label>Primer Apellido</label>
                        <input id="primer_ape" class="form-control text-uppercase" required>
                        <div class="help-block with-errors"></div> 
                    </div>

                    <div class="col-xs-6 form-group">
                        <label>Segundo Apellido</label>
                        <input id="segundo_ape" class="form-control text-uppercase" required>
                        <div class="help-block with-errors"></div> 
                    </div>
                </div>

                <div class="col-xs-12">
                    <div class="col-xs-12 form-group">
                        <label>Origen</label>
                        <input id="origen_dist" class="form-control text-uppercase" required disabled>
                        <div class="help-block with-errors"></div> 
                    </div>
                </div>

                <div class="col-md-12">
                    <legend>
                        <h3 class="text-primary text-center">Destinos</h3>
                    </legend>
                </div>

                <div class="row consComu" id="consComu">
                    <div class="form-group col-xs-12">
                        <table  class="table table-striped" id="tab_destino_dist" border="0" align="center">
                            <thead> 
                                <tr>
                                    <th style="text-align: center;">Empresa Receptora</th>
                                    <th style="text-align: center;">Dirección</th>
                                    <th style="text-align: center;">Estado</th>
                                    <th style="text-align: center;">Municipio</th>
                                    <th style="text-align: center;">Parroquia</th>
                                </tr>
                            </thead> 
                            <tbody> 
                            </tbody> 
                            <tfoot>
                            </tfoot>
                        </table>
                    </div>
                </div>

                <div class="col-xs-12">
                    <div class="col-xs-3 form-group">
                        <label>Total Despacho</label>
                        <input id="total_despacho_desc" class="form-control text-uppercase" required disabled>
                        <input id="total_despacho" type="hidden" class="form-control text-uppercase" required disabled>
                        <div class="help-block with-errors"></div> 
                    </div>
                </div>

                <div class="col-md-12 form-group text-center">
                    <button type="button" id="btn_registro" class="btn btn-primary">Guardar</button>
                </div>

            </form>

            <div id="capa_pdf">
                <iframe></iframe>
            </div>

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
