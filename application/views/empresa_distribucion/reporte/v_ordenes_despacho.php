<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <?php
        //CSS principal de Datatable
        echo css_asset('dataTables.bootstrap.min.css', 'DataTables-1.10.12/media');
        echo css_asset('buttons.bootstrap.min.css', 'DataTables-1.10.12/extensions/Buttons');
        //CSS principal de Bootstrap
        echo css_asset('bootstrap.min.css', 'bootstrap-3.3.7');
        //CSS principal del Font-awesome
        echo css_asset('font-awesome.min.css', 'font-awesome-4.7.0');
        //CSS principal de la vista
        echo css_asset('reporte/v_rpt_empresa_productos.css', 'empresa_distribucion');


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
        echo js_asset('dataTables.buttons.min.js', 'DataTables-1.10.12/extensions/Buttons');
        echo js_asset('buttons.bootstrap.min.js', 'DataTables-1.10.12/extensions/Buttons');
        echo js_asset('buttons.flash.min.js', 'DataTables-1.10.12/extensions/Buttons');
        echo js_asset('jszip.min.js', 'DataTables-1.10.12/media');
        echo js_asset('pdfmake.min.js', 'DataTables-1.10.12/media');
        echo js_asset('vfs_fonts.js', 'DataTables-1.10.12/media');
        echo js_asset('buttons.html5.min.js', 'DataTables-1.10.12/extensions/Buttons');
        echo js_asset('buttons.print.js', 'DataTables-1.10.12/extensions/Buttons');
        echo js_asset('buttons.colVis.min.js', 'DataTables-1.10.12/extensions/Buttons');
        echo js_asset('dataTables.rowsGroup.js', 'DataTables-1.10.12/extensions/rowGroup');

        echo js_asset('jquery.mask.js', 'jquery');
        //JS principal de la vista
        echo js_asset('reporte/v_ordenes_despacho.js', 'empresa_distribucion');
        ?>

    </head>


    <body>

        <br>

        <div id="capa_formulario" class="container-fluid">

            <form id="form_solicitudes_expo" data-toggle="validator" role="form">
                <div class="row row-centered">

                    <div class="col-sm-5 col-centered">

                        <div class="form-group col-md-5">
                            <select name="tipo" id="tipo" class="form-control tipo" required/>
                            <option value="1" selected>Emitidas</option>
                            <option value="2">Cerradas</option>
                            <option value="3">Inconformes</option>
                            </select>
                        </div>

                    </div>

                </div>
            </form>
        </div>

        <div id="tabla_reporte" class="container-fluid"></div>

    </body>

</html>  