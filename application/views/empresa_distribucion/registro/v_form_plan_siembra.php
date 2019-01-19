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
        echo css_asset('registro/v_form_plan_siembra.css', 'empresa_distribucion');

        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js', 'jquery');
        //JS validador autonumeric
        echo js_asset('autoNumeric-min.js', 'autoNumeric');
        //JS principal de Bootstrap
        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
        //Css principal del fullcalendar
	echo css_asset('fullcalendar.css', 'fullcalendar-3.0.0');
        //JS principal del Datatable
        echo js_asset('jquery.dataTables.min.js', 'DataTables-1.10.12/media');
        echo js_asset('dataTables.bootstrap.min.js', 'DataTables-1.10.12/media');
        //JS boostrap multiselect 
        echo js_asset('bootstrap-multiselect.js', 'boostrap-multiselect');
        //JS principal de fullcalendar
	echo js_asset('moment.min.js', 'fullcalendar-3.0.0');
        echo js_asset('fullcalendar.js', 'fullcalendar-3.0.0');
        echo js_asset('locale/es.js', 'fullcalendar-3.0.0');
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
        echo js_asset('registro/v_form_plan_siembra.js', 'empresa_distribucion');
        ?>

    </head>

    <body>

        <div id="capa_formulario" class="nav nav-tabs container-fluid well">

            <form id="form_plan_siembra" role="form" data-toggle="validator">

                <div class="col-md-12">
                    <legend>
                        <h3 class="text-primary text-center">Plan de Siembra</h3>
                    </legend>
                </div>
                <!--Div padre-->
                <div class="row">

                    <div class="col-md-12">

                        <div class="row">
                            <div class ="col-md-6 form-group">
                                <label>Ciclo de Siembra</label>  
                                <select class="form-control" id="ciclo_siembra" required>

                                </select>
                                <div class="help-block with-errors"></div>
                            </div>

                            <div class="col-md-6 form-group">
                                <label>Producto</label>  
                                <select class="form-control" id="list-productos" multiple="multiple" required>

                                </select>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                    </div>
                    
                    <div class="col-md-12">

                        <div class="row">
                            <div class ="col-md-4 form-group">
                                <label>Superficie Total (Ha)</label>  
                                <input id="s_total" name="s_total" type="text" class="form-control" placeholder="0" required/>
                                <div class="help-block with-errors"></div>
                            </div>

                            <div class="col-md-4 form-group">
                                 <label>Superficie Siembra (Ha)</label>  
                                <input id="s_siembra" name="s_siembra" type="text" class="form-control" placeholder="0" required/>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="col-md-4 form-group">
                                 <label>Rendimiento (Ton/Ha)</label>  
                                <input id="rendimiento" name="rendimiento" type="text" class="form-control" placeholder="0" required/>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-12">

                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Fecha de Siembra:</label>
                                    <div class='input-group date' id='fecha_siembra'>
                                        <input type='text' class="form-control" required/>
                                        <span class="input-group-addon">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Fecha de Cosecha:</label>
                                    <div class='input-group date' id='fecha_cosecha'>
                                        <input type='text' class="form-control" required/>
                                        <span class="input-group-addon">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-4 form-group">
                                 <label>Meta Producción(Ton)</label>  
                                <input id="meta_prod" name="meta_prod" type="text" class="form-control" placeholder="0" disabled=""/>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                    </div>


                    <div class="col-md-12 form-group text-center">
                        <button type="button" id="registrar_plan" class="btn btn-success">Guardar</button>
                    </div>
                    
                    <!-- Capa que contiene el calendario -->
        	<div id="calendario"></div>
                
<!--                    <div id="capa_siembras" class="container-fluid">
                            <table id="siembras" class="table table-striped" cellspacing="0" width="100%">
                                <thead>
                                    <tr>
                                        <th colspan="4"> <h3 class="text-primary text-center">Planes de Siembra</h3></th>
                                    </tr>
                                <tr>
                                    <th colspan="4"></th>
                                </tr>
                                <tr>
                                    <th>Rubro</th>
                                    <th>Ciclo de Siembra</th>
                                    <th>Producto Final</th>
                                    <th>Rendimiento</th>

                                </tr>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>

                                </tr>
                                </thead>
                                <tbody></tbody>

                            </table>

                        </div>-->


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

