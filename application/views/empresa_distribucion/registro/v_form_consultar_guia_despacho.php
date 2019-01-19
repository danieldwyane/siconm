<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <script src='https://www.google.com/recaptcha/api.js'></script>

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
        echo css_asset('registro/v_form_consultar_guia_despacho.css', 'empresa_distribucion');
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
        echo js_asset('registro/v_form_consultar_guia_despacho.js', 'empresa_distribucion');
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
                        <h3 class="text-primary text-center">Consultar Guía de Despacho</h3>
                    </legend>
                </div>

                <div class="row row-centered">
                    <div class="col-xs-12">
                        <div class="col-sm-2 col-centered">
                            <div class="col-xs-12 col-lg-12">
                                <input id="codigo" name="codigo" type="text" class="codigo form-control" placeholder="Código" required/>
                            </div>
                        </div>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>

                <div class="row row-centered">
                    <div class="col-xs-12">
                        <div class="col-sm-0 col-centered">
                            <div class="col-xs-12 col-lg-12">
                                <div class="g-recaptcha" data-sitekey="6LdK7yUUAAAAAIgu2zhv1tMhDiQkaN7s6CDXDCLV" data-theme="light" data-type="image" ></div>
                            </div>
                        </div>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                
                <div id="capa_autenticacion">
                    <div></div>
                </div>

                <div class="col-md-12 form-group text-center">
                    <button type="button" id="btn_consultar" class="btn btn-primary">Consultar</button>
                </div>

                <span class="input-group-btn">
                    <li class="icono_carga fa fa-cog fa-spin fa-3x fa-fw"></li>
                </span>

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
