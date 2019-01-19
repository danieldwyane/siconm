<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <?php
        //CSS principal de Datatable
        echo css_asset('dataTables.bootstrap.min.css', 'DataTables-1.10.12/media');
        //CSS principal de Bootstrap
        echo css_asset('bootstrap.min.css', 'bootstrap-3.3.7');
        //CSS para el tipo de fuentes e iconos
        echo css_asset('font-awesome.min.css', 'font-awesome-4.7.0');
        //CSS boostrap multiselect
        echo css_asset('fileinput.css','file-boostrap');
        echo css_asset('bootstrap-multiselect.css','boostrap-multiselect');
        //CSS para colacar imagen venezuela
        echo css_asset('intlTelInput.css', 'intl-tel-input/build');
        //CSS principal de para el DateTimePicker
        echo css_asset('bootstrap-datetimepicker.min.css', 'bootstrap-datetimepicker/build');
        //CSS principal de la vista
        echo css_asset('registro/v_form_pecuario.css', 'empresa_distribucion');

        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js', 'jquery');
        //JS validador autonumeric
        echo js_asset('autoNumeric-min.js', 'autoNumeric');
        //JS principal de Bootstrap
        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
        //JS principal del Datatable
        echo js_asset('jquery.dataTables.min.js', 'DataTables-1.10.12/media');
        echo js_asset('dataTables.bootstrap.min.js', 'DataTables-1.10.12/media');
        //JS boostrap multiselect 
        echo js_asset('bootstrap-multiselect.js', 'boostrap-multiselect');
        //JS para validar el formulario
        echo js_asset('validator.js', 'bootstrap-3.3.7');
        //JS principal de Moment
        echo js_asset('moment.min.js', 'moment/min');
        echo js_asset('es.js', 'moment/locale');
        //JS principal de para el DateTimePicker
        echo js_asset('bootstrap-datetimepicker.min.js', 'bootstrap-datetimepicker/build');
        //JS de la mascara
        echo js_asset('intlTelInput.min.js', 'intl-tel-input/build');
        echo js_asset('jquery.mask.js', 'jquery');
        //JS propio de la vista
        echo js_asset('registro/v_form_pecuario.js', 'empresa_distribucion');
        ?>

    </head>

    <body>

        <div id="capa_formulario" class="nav nav-tabs container-fluid well">

            <form id="form_pecuario" role="form" data-toggle="validator">

                <div class="col-md-12">
                    <legend>
                        <h3 class="text-primary text-center">Inventario Pecuario</h3>
                    </legend>
                </div>
                <!--Div padre-->
                <div class="row">

                    <div class="col-md-12">

                        <div class="row">
                            <div class ="col-md-4 form-group">
                                <label>Tipo de Ganado</label>  
                                <select class="form-control" id="tipo_ganado" required>

                                </select>
                                <div class="help-block with-errors"></div>
                            </div>

                            <div class ="col-md-4 form-group">
                                <label>Raza</label>  
                                <select class="form-control" id="raza" disabled required>

                                </select>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class ="col-md-4 form-group">
                                <label>Cantidad</label>  
                                <input id="cantidad" name="cantidad" type="text" class="form-control" placeholder="0" required/>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                    </div>
                    
                    <div class="col-md-12">

                        <div class="row">
                            <div class="col-md-4 form-group">
                                <label>Producto Final</label>  
                                <select class="form-control" id="list-productos" multiple="multiple" required>

                                </select>
                                <div class="help-block with-errors"></div>
                            </div>

                            <div class="col-md-4 form-group">
                                 <label>Rendimiento x Animal</label>  
                                <input id="rendimiento" name="rendimiento" type="text" class="form-control" placeholder="0" required/>
                                <div class="help-block with-errors"></div>
                            </div>
                            
                           <div class="col-md-2 form-group">
                                <label>Unidad Medida</label>
                                <select id="unidad_m" class="form-control" required>
                                </select>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="col-md-2 form-group">
                                <label>Unidad tiempo</label>
                                <select id="unidad_tiempo" class="form-control" required>
                                </select>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                    </div>
                    

                    <div class="col-md-12 form-group text-center">
                        <button type="button" id="registrar" class="btn btn-success">Guardar</button>
                    </div>
                    
                    <div id="capa_inventarios_pecuario" class="container-fluid">
                            <table id="inventarios_pecuario" class="table table-striped" cellspacing="0" width="100%">
                                <thead>
                                    <tr>
                                        <th colspan="6"> <h3 class="text-primary text-center">Inventarios Registrados</h3></th>
                                    </tr>
                                <tr>
                                    <th>Ganado</th>
                                    <th>Cantidad</th>
                                    <th>Producto Final</th>
                                    <th>Rendimiento x Animal</th>
                                    <th></th>
                                    <th></th>

                                </tr>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>

                                </tr>
                                </thead>
                                <tbody></tbody>

                            </table>

                        </div>

                </div>
                <!--Div padre-->
            </form>

        </div>

       
        <!--Ventana Modal--> 
        <div id="modal" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header"></div>
                    <div class="modal-body"></div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        </div>
        <!-- Fin de mi ventana modal -->
    </body>

</html> 

