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
        echo css_asset('registro/v_form_insumos.css', 'empresa_distribucion');

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
        echo js_asset('registro/v_form_insumos.js', 'empresa_distribucion');
        ?>

    </head>

    <body>

        <div id="capa_formulario" class="nav nav-tabs container-fluid well">

            <form id="form_insumos" role="form" data-toggle="validator">

                <div class="col-md-12">
                    <legend>
                        <h3 class="text-primary text-center">Insumos</h3>
                    </legend>
                </div>

                <!--Div padre-->
                <div class="row">

                    <div class="col-md-12">
                        <div class="row">
                            <div class ="col-md-6 form-group">
                                <label>Nombre del Insumo</label>  
                                <select class="form-control" id="list-insumos" multiple="multiple">

                                </select>
                                <div class="help-block with-errors"></div>
                            </div>

                            <div class="col-md-6 form-group">
                                <label>Especificación del Insumo</label>
                                <input id="especificacion" class="form-control text-uppercase" maxlength="500" required>
                                <div class="help-block with-errors"></div> 
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <legend><h4 style="text-align: center">Inventario del Insumo</h4></legend>
                            
                            <div class="col-md-4 form-group">
                                <label>Inventario Inicial</label>
                                <input id="cantidad" class="form-control text-uppercase" required>
                                <div class="help-block with-errors"></div> 
                            </div>
                            <div class="col-md-4 form-group">
                                <label>Unidad Medida:</label>
                                <select id="um_insumo" class="form-control" required>
                                </select>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="col-md-4 form-group">
                                <label>Inv. Minimo</label>
                                <input id="minimo" class="form-control text-uppercase" required>
                                <div class="help-block with-errors"></div> 
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <legend><h4 style="text-align: center">Proveedores</h4></legend>
                            <div class="col-md-12 form-group">
                                <label>Proveedor</label>  
                                <select class="form-control" id="list-proveedor" multiple="multiple">

                                </select>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <label>Es de reposición frecuente?</label>
                                <select id="frecuencia" class="form-control" required>
                                    <option value = "1" >SI</option>
                                    <option value = "0" >NO</option>
                                </select>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Requiere financiamiento?</label>
                                <select id="financiamiento" class="form-control" required>
                                    <option value = "SI" >SI</option>
                                    <option value = "NO" >NO</option>
                                </select>
                                <div class="help-block with-errors"></div>
                            </div>
<!--                            <div class="checkbox" form-group>
                                <input type="checkbox" value="SI" id="financiamiento" >Requiere financiamiento?
                            </div>
                            <div class="checkbox" form-group>
                                <input type="checkbox" value="SI" id="frecuencia" >Es de reposición frecuente?
                            </div>-->
                        </div>
                    </div>

                    <div class="col-md-12 form-group text-center">
                        <button type="button" id="agregar_insumo" class="btn btn-success">Agregar</button>
                    </div>

                    <div class="row insumo_empresa" id="insumo_empresa">
                        <div class="form-group col-xs-12">
                            <table  class="table table-striped" id="tab_insumos" border="0" align="center">
                                <thead> 
                                    <tr>
                                        <th style="text-align: center">Nombre</th>
                                        <th style="text-align: center">Especificación</th>
                                        <th style="text-align: center">Inv. Actual</th>
                                        <th style="text-align: center">UM.</th>
                                        <th style="text-align: center">Inv. Minimo</th>
                                        <th style="text-align: center">Frecuencia</th>
                                        <th style="text-align: center">Financiamiento</th>
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

