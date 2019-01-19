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
        //CSS principal del Font-awesome
        echo css_asset('font-awesome.min.css', 'font-awesome-4.7.0');
        //CSS principal de la vista
        //  echo css_asset('mapa_panaderia/v_rpt_inventario.css', 'panaderia');
        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js', 'jquery');
        //JS principal de Bootstrap
        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
        //JS para validar el formulario
        echo js_asset('validator.js', 'bootstrap-3.3.7');
        //JS validador autonumeric
        echo js_asset('autoNumeric-min.js', 'autoNumeric');
        //JS principal del Datatable
        echo js_asset('jquery.dataTables.min.js', 'DataTables-1.10.12/media');
        echo js_asset('dataTables.bootstrap.min.js', 'DataTables-1.10.12/media');
        //JS principal de la vista
        echo js_asset('reporte/v_aprobar_empresa.js', 'empresa_distribucion');
        ?>

    </head>


    <body>
        <br>
        <div id="tabla_reporte" class="container-fluid">

            <table id="tbl_reporte" class="display table table-striped table-bordered " cellspacing="0">
                <thead>
                    <tr>
                        <th style="text-align: center">Razon Social</th>
                        <th style="text-align: center">Rif</th>
                        <th style="text-align: center">Nombre</th>
                        <th style="text-align: center">Apellido</th>
                        <th style="text-align: center">Telefóno</th>
                        <th style="text-align: center">Correo</th>                        
                        <th style="text-align: center">Estado</th>
                        <th style="text-align: center">Municipio</th>
                        <th style="text-align: center">Fecha Registro</th>
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
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                </tbody>
            </table>


            <!--------------------------------- Ventana Modal de la Vista-------------------------------------------->
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