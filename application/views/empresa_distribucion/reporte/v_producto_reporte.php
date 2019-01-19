<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <?php
       
//        //CSS principal de Datatable
//	echo css_asset('dataTables.bootstrap.min.css','DataTables-1.10.12/media');
//        //CSS principal de Bootstrap
//        echo css_asset('bootstrap.min.css','bootstrap-3.3.7');
//        //CSS principal del Font-awesome
//        echo css_asset('font-awesome.min.css','font-awesome-4.7.0');
//        //CSS boostrap multiselect
//        echo css_asset('fileinput.css','file-boostrap');
//        echo css_asset('bootstrap-multiselect.css','boostrap-multiselect');
//        //CSS principal de para el DateTimePicker
//        echo css_asset('bootstrap-datetimepicker.min.css', 'bootstrap-datetimepicker/build');
//        //CSS para colacar imagen venezuela
//        echo css_asset('intlTelInput.css', 'intl-tel-input/build');
//        //CSS principal de la vista
//        echo css_asset('reporte/v_producto_reporte.css', 'empresa_distribucion');
//
//        //JS principal de Jquery
//        echo js_asset('jquery-2.2.4.min.js', 'jquery');
//        //JS principal de Bootstrap
//        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
//        //JS para validar el formulario
//        echo js_asset('validator.js', 'bootstrap-3.3.7');
//        //JS validador autonumeric
//        echo js_asset('autoNumeric-min.js', 'autoNumeric');
//        //JS principal del Datatable
//        echo js_asset('jquery.dataTables.min.js', 'DataTables-1.10.12/media');
//        echo js_asset('dataTables.bootstrap.min.js', 'DataTables-1.10.12/media');
//        //JS principal de la vista
//        echo js_asset('reporte/v_producto_reporte.js', 'empresa_distribucion');
//        //JS boostrap multiselect 
//        echo js_asset('bootstrap-multiselect.js', 'boostrap-multiselect');
//        //JS principal de Moment
//        echo js_asset('moment.min.js', 'moment/min');
//        echo js_asset('es.js', 'moment/locale');
//        //JS principal de para el DateTimePicker
//        echo js_asset('bootstrap-datetimepicker.min.js', 'bootstrap-datetimepicker/build');
        ?>

    </head>
    <body>
        <div id="capa_formulario" class="container-fluid">


                <div class="col-md-12">
                    <legend>
                        <h2 class="text-primary">Inventario Productos y Derivados</h2>
                    </legend>
                </div>
            <!-----------------------------------tabla que contiene solicitudes------------------------------------------------>

            <table id="tabla_inventario" class="table table-striped" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Especificación</th>
                        <th>Inv. Actual</th>
                        <th>Unid. Medida</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                </tbody>
            </table>
            <br>
            <br>
            <table id="tabla_derivado" class="table table-striped" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>Derivado</th>
                        <th>Especificación</th>
                        <th>Inv. Actual</th>
                        <th>Unid. Medida</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                </tbody>
            </table>

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
        </div>
    </body>

</html>  