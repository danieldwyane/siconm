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
        //CSS boostrap multiselect
        echo css_asset('fileinput.css','file-boostrap');
        echo css_asset('bootstrap-multiselect.css','boostrap-multiselect');
        //CSS para colacar imagen venezuela
        echo css_asset('intlTelInput.css', 'intl-tel-input/build');
        //CSS principal de la vista
        echo css_asset('registro/v_form_productos.css', 'empresa_distribucion');

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
        echo js_asset('registro/v_form_productos.js', 'empresa_distribucion');
        ?>

    </head>

    <body>

        <div id="capa_formulario" class="nav nav-tabs container-fluid well">

            <form id="form_productos" role="form" data-toggle="validator">

                <div class="col-md-12">
                    <legend>
                        <h3 class="text-primary text-center">Productos</h3>
                    </legend>
                </div>
                <!--Div padre-->
                <div class="row">

                    <div class="col-md-12">

                        <div class="row">
                            <div class ="col-md-6 form-group">
                                <label>Nombre del Producto</label>  
                                <select class="form-control" id="list-productos" multiple="multiple">

                                </select>
                                <div class="help-block with-errors"></div>
                            </div>

                            <div class="col-md-6 form-group">
                                <label>Especificación del Producto</label>
                                <input id="especificacion" class="form-control text-uppercase" maxlength="500"  required>
                                <div class="help-block with-errors"></div> 
                            </div>
                        </div>

                    </div>

                    <!--Div Inventario del Producto-->
                    <div class="col-md-6">
                        <div class="row">
                            <legend><h4 style="text-align: center">Inventario del Producto</h4></legend>

                            <div class="col-md-6 form-group">
                                <label>Inventario Inicial</label>
                                <input id="inventario" class="form-control text-uppercase" placeholder="0" required>
                                <div class="help-block with-errors"></div> 
                            </div>

                            <div class="col-md-6 form-group">
                                <label>Unidad Medida</label>
                                <select id="um_producto" class="form-control" required>
                                </select>
                                <div class="help-block with-errors"></div>
                            </div>

                        </div>
                    </div>
                    <!--Fin div Inventario del Producto-->

                    <!--Div Tiempo de Producción-->
                    <div class="col-md-6">
                        <div class="row">
                            <legend><h4 style="text-align: center">Frecuencia de Producción</h4></legend>

                            <div class="col-md-6 form-group">
                                <label>Tiempo</label>
                                <input id="cantidad_tiempo" class="form-control text-uppercase"  placeholder="0" required>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Unidad tiempo</label>
                                <select id="unidad_tiempo" class="form-control" required>
                                </select>
                                <div class="help-block with-errors"></div>
                            </div>

                        </div>
                    </div>
                    <!--Fin div Tiempo de Producción-->

                    <div class="col-md-12 form-group text-center">
                        <button type="button" id="agregar_producto" class="btn btn-success">Agregar</button>
                    </div>




                    <div class="row productos_empresa" id="productos_empresa">
                        <div class="form-group col-md-12">
                            <table  class="table table-striped" id="tab_productos" border="0" align="center">
                                <thead> 
                                    <tr>
                                        <th style="text-align: center;">Nombre</th>
                                        <th style="text-align: center;">Especificación</th>
                                        <th style="text-align: center">Inventario Actual</th>
                                        <th style="text-align: center">Tiempo de Producción</th>
                                        <th style="text-align: center">Opciones</th>
                                    </tr>
                                </thead> 
                                <tbody> 
                                </tbody> 
                                <tfoot>
                                </tfoot>

                            </table>
                        </div>
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

