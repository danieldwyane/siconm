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
        echo css_asset('registro/v_form_empresa_receptora.css', 'empresa_distribucion');

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
        echo js_asset('registro/v_form_empresa_receptora.js', 'empresa_distribucion');
        ?>

    </head>

    <body>

        <div id="capa_formulario" class="nav nav-tabs container-fluid well">

            <form id="form_emp_receptora" role="form" data-toggle="validator">

                <div class="col-md-12">
                    <legend>
                        <h3 class="text-primary text-center">Registro Empresa Receptora</h3>
                    </legend>
                </div>

                <div class="col-xs-12">
                    <div class="col-xs-6 form-group">
                        <label>Rif</label>
                        <input id="rif" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required data-minlength="8" data-minlength-error="Ejemplo: J-12345678 o G-12345678">
                        <div class="help-block with-errors"></div>
                    </div>

                    <div class="col-xs-6 form-group">
                        <label>Razon Social</label>
                        <input id="razon_social" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required>
                        <div class="help-block with-errors"></div> 
                    </div>
                </div>

                <div class="col-xs-12">
                    <div class="col-xs-4 form-group">
                        <label>Estado:</label>
                        <select id="estado" class="form-control" required>
                        </select>
                        <div class="help-block with-errors"></div>
                    </div>

                    <div class="col-xs-4 form-group">
                        <label> Municipio:</label>
                        <select id="municipio" class="form-control" disabled required>
                        </select>
                        <div class="help-block with-errors"></div>
                    </div>

                    <div class="col-xs-4 form-group">
                        <label> Parroquia:</label>
                        <select id="parroquia" class="form-control" disabled required>
                        </select>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>

                <div class="col-xs-12">
                    <div class="col-xs-12 form-group">
                        <label>Dirección</label>
                        <input id="direccion" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required>
                        <div class="help-block with-errors"></div> 
                    </div>
                </div>                

                <div class="row text-center">
                    <div class="col-md-12"><button id="agregar_emp_receptora" type="button" class="btn btn-success">Agregar</button></div>
                </div>

                <div class="row row-centered">
                    <div class="col-md-12 contenido_emp_recep"></div>
                </div>

                <div class="row consComu" id="consComu">
                    <div class="form-group col-xs-12">
                        <table  class="table table-striped" id="tab_emp_receptora" border="0" align="center">
                            <thead> 
                                <tr>
                                    <th style="text-align: center;">Rif</th>
                                    <th style="text-align: center;">Razón Social</th>
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
