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
        //CSS principal de para el DateTimePicker
        echo css_asset('bootstrap-datetimepicker.min.css', 'bootstrap-datetimepicker/build');
         //CSS boostrap multiselect
        echo css_asset('fileinput.css','file-boostrap');
        echo css_asset('bootstrap-multiselect.css','boostrap-multiselect');
        //CSS principal de la vista
        echo css_asset('fileinput.css', 'bootstrap-fileinput');
        //CSS principal de la vista
        echo css_asset('registro/v_form_trafico_portuario.css', 'empresa_distribucion');

        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js', 'jquery');
        //JS principal de Bootstrap
        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
        //JS principal del Datatable
        echo js_asset('jquery.dataTables.min.js', 'DataTables-1.10.12/media');
        echo js_asset('dataTables.bootstrap.min.js', 'DataTables-1.10.12/media');
        //JS para validar el formulario
        echo js_asset('validator.js', 'bootstrap-3.3.7');
         //JS boostrap multiselect 
        echo js_asset('bootstrap-multiselect.js', 'boostrap-multiselect');
        echo js_asset('moment.min.js', 'moment/min');
        echo js_asset('es.js', 'moment/locale');
         //JS principal de para el DateTimePicker
        echo js_asset('bootstrap-datetimepicker.min.js', 'bootstrap-datetimepicker/build');
        //Js para dar formato numerico
        echo js_asset('autoNumeric-min.js', 'autoNumeric');
        //JS principal de Jquery
        echo js_asset('fileinput.min.js', 'bootstrap-fileinput');
        //JS propio de la vista
        echo js_asset('registro/v_form_trafico_portuario.js', 'empresa_distribucion');
        ?>

    </head>

    <body>
        <div id="capa_formulario" class="container-fluid">
            <div class="row row-centered">
                <div class="col-sm-12 col-centered">

                    <form id="form_conversion_productos" class="form-horizontal" role="form" data-toggle="validator">
                        <div class="col-sm-12">
                            <legend>
                                <h3 class="text-primary text-center">Tráfico Portuario</h3>
                            </legend>
                        </div>
                        <table id="contenido_tabla" class="table table-striped" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th>Buque</th>
                                    <th>Tipo Carga</th>
                                    <th>Peso Inicial</th>
                                    <th>Num. Viaje</th>
                                    <th>IMO</th>
                                    <th>Estatus</th>
                                    <th>Opciones</th>
                                    <th>Consultar</th>

                                </tr>
                                <tr>
                                    <th></th>
                                    <th></th>
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

                        <div class="col-sm-12 form-group text-center">
                            <button type="button" id="ventas_definitivas" class="btn btn-primary ventas_definitivas">Procesar</button>
                        </div>
                    </form>
                </div>
            </div>

            <!--------------------------------- Ventana Modal para editar las solicitudes-------------------------------------------->
            <div id="modal" class="modal fade" tabindex="-1" role="dialog">
                <div class="modal-dialog">
                    <!---------------------------contenido del modal ------------------------------------>
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title text-primary"></h4>
                        </div>
                        <div class="modal-body"></div><!-- /cierra el modal body -->
                        <div class="modal-footer"></div>
                    </div><!-- /cierra el modal content -->
                </div><!-- /cierra el modal-dialog -->
            </div><!-- /cierra el modal -->
        </div>
    </body>
</html> 
