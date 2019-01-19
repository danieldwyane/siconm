<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?key=AIzaSyDXu6NShuYaryksdxc-RZshVrooiJgqjqE &sensor=false&language=es"></script>
        
        <?php
        //CSS principal de Bootstrap
        echo css_asset('bootstrap.min.css', 'bootstrap-3.3.7');
        //CSS para el tipo de fuentes e iconos
        echo css_asset('font-awesome.min.css', 'font-awesome-4.7.0');
        //CSS boostrap multiselect
        echo css_asset('fileinput.css','file-boostrap');
        echo css_asset('bootstrap-multiselect.css','boostrap-multiselect');
        //CSS para colacar imagen venezuela
        echo css_asset('intlTelInput.css', 'intl-tel-input/build');
        //CSS principal de la vista
        echo css_asset('registro/v_form_datos_empresa.css', 'empresa_distribucion');

        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js', 'jquery');
        //JS validador autonumeric
        echo js_asset('autoNumeric-min.js', 'autoNumeric');
        //JS principal de Bootstrap
        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
        //JS boostrap multiselect 
        echo js_asset('bootstrap-multiselect.js', 'boostrap-multiselect');
        //JS para validar el formulario
        echo js_asset('validator.js', 'bootstrap-3.3.7');
        //JS de la mascara
        echo js_asset('intlTelInput.min.js', 'intl-tel-input/build');
        echo js_asset('jquery.mask.js', 'jquery');
        //JS propio de la vista
        echo js_asset('registro/v_form_datos_empresa.js', 'empresa_distribucion');
        ?>

    </head>

    <body>

        <div id="capa_formulario" class="nav nav-tabs container-fluid well">

            <form id="form_empresa" role="form" data-toggle="validator">

                <div class="col-md-12">
                    <legend>
                        <h3 class="text-primary text-center">Datos de la Empresa</h3>
                    </legend>
                </div>
                <!--Div padre-->
                <div class="row">

                    <div class="col-md-12">

                        <div class="row">
                            <div class ="col-md-6 form-group">
                                <label>Nombre de la empresa</label>  
                                <input id="nombre_empresa" class="form-control text-uppercase" disabled="">
                                <div class="help-block with-errors"></div> 
                            </div>

                            <div class="col-md-6 form-group">
                                <label>RIF</label>
                                <input id="rif" class="form-control text-uppercase" disabled="">
                                <div class="help-block with-errors"></div> 
                            </div>
                        </div>

                    </div>

                    <!--Div -->
                    <div class="col-md-6">
                        <div class="row">

                            <div class="col-md-12 form-group">
                                <label>Cantidad Empleados</label>
                                <input id="cant_empleados" class="form-control text-uppercase" placeholder="0" required>
                                <div class="help-block with-errors"></div> 
                            </div>

                            <div class="col-md-12 form-group">
                                <label>Tipo empresa</label>
                                <select id="tipo_empresa" class="form-control" required>
                                </select>
                                <div class="help-block with-errors"></div>
                            </div>
<!--                            <div class="col-md-12 form-group">
                                <label>Sector Económico</label>
                                <select id="sector_economico" class="form-control" required>
                                </select>
                                <div class="help-block with-errors"></div>
                            </div>-->

                        </div>
                    </div>
                    <!--Fin div -->

                    <!--Div -->
                    <div class="col-md-6">
                        <div class="row">

                            <div class="col-md-12 form-group">
                                <label>Propiedad</label>
                                <select id="propiedad" class="form-control" required>
                                </select>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="col-md-12 form-group">
                                <label>Situación Legal</label>
                                <select id="situacion_legal" class="form-control" required>
                                </select>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <!--Fin div -->
                    <div class="col-md-12 form-group">
                                <label>Actividad Económica</label>
                                <select id="actividad_economica" class="form-control" multiple="multiple">
                                </select>
                                <div class="help-block with-errors"></div>
                                <label>Sociedad, Federación u Organismo:</label>
                                <select id="organismos" class="form-control" multiple="multiple">
                                </select>
                                <div class="help-block with-errors"></div>
                    </div>
                    
                    <!--Div -->
                    <div class="col-md-12 form-group">

                                <label>Financiamiento</label>
                                <select id="institucion_financiera" class="form-control" required>
                                </select>
                                <div class="help-block with-errors"></div>
                    </div>
                    
                    <!--Div -->
<!--                    <div class="col-md-12 form-group">
                            <label>Infraestructura:</label>
                            <textarea class="form-control" rows="5" id="infraestructura"></textarea>
                    </div>-->
                    <!--Div Datos Geográficos-->
                    <div class="col-md-12">                   
                        <legend>
                            <h3 class="text-primary text-center">Datos Geográficos</h3>
                        </legend>

                        <div class="row">

                            <div class="form-group col-md-10 col-md-offset-1 coordenadas">

                                <div class="form-group col-md-4 text-center">
                                    <!--Trigger the modal with a button--> 
                                    <button type="button" class="btn btn btn-info btn-sm geografico" id="myBtn">Seleccionar Coordenadas</button>
                                </div>

                                <div class="form-group col-md-4">
                                    <label>Latitud</label>
                                    <input id="latitud" name="latitud" type="text" class="form-control" required/>
                                </div>

                                <div class="form-group col-md-4"> 
                                    <label>Longitud</label>
                                    <input id="longitud" name="longitud" type="text" class="form-control" required/>
                                </div>
                            </div>  
                        </div>

                        <br>

                        <div class="col-md-12 form-group text-center">
                            <button type="button" id="actualizar_empresa" class="btn btn-success">Guardar</button>
                        </div>
                    </div>
                    <!--Fin div datos geográficos-->

                </div>
                <!--Div padre-->
            </form>

        </div>

       
        <!--Contenedor de la modal-->

            <div class="container" >

                <!-- Modal -->
                <div id="myModal" class="modal fade" tabindex="-1" role="dialog">
                    <div class="modal-dialog">

                        <!-- Modal content-->
                        <div class="modal-content" >
                            <!-- Modal -->
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4><span ></span>Seleccionar Coordenadas</h4>
                            </div>
                            <div class="modal-body">
                                <div id="capa_mapa"></div>
                                <br><br>
                                <div class="form-group col-xs-6">
                                    <label>Latitud</label>
                                    <input  name="latitud_modal" type="text" class="form-control latitud_modal"/>
                                </div>

                                <div class="form-group col-xs-6"> 
                                    <label>Longitud</label>
                                    <input  name="longitud_modal" type="text" class="form-control longitud_modal"/>
                                </div>            

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-success btn-sm" data-dismiss="modal"><span class="glyphicon glyphicon-ok"></span>Guardar</button>

                            </div>
                        </div>
                        <!--Fin modal-->  

                    </div>
                </div> 
            </div>
        
             <!--Fin Contenedor de la modal-->
    </body>

</html> 

