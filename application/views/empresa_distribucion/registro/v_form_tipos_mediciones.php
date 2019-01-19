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
        echo css_asset('registro/v_form_tipos_mediciones.css', 'empresa_distribucion');

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
        echo js_asset('registro/v_form_tipos_mediciones.js', 'empresa_distribucion');
        ?>

    </head>

    <body>

        <div id="capa_formulario" class="nav nav-tabs container-fluid well">

            <form id="form_tipos_mediciones" role="form" data-toggle="validator">

                <div class="col-md-12">
                    <legend>
                        <h3 class="text-primary text-center">Catalogos</h3>
                    </legend>
                </div>
              
                <div id="capa_consultar_mediciones" class="col-md-12 form-group">
                    <div class="col-md-6 form-group col-md-offset-3"  >
                        
                        <select id="mediciones" name="mediciones" class="form-control text-uppercase" required>
                            <option value="seleccione" selected disabled>Seleccione</option>
                            <option value="1">Unidad de Tiempo</option>
                            <option value="2">Unidad de Medida</option>
                            <option value="3">Presentación</option>
                            <option value="4">Producto</option>
                            <option value="5">Tipo de Insumo</option>
                            <option value="6">Insumo</option>
                        </select>
                        <div class="help-block with-errors"></div>
                    </div>
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



