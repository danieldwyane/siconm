<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="utf-8"> 
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Mapa MINPAL</title>

        <script type="text/javascript" src="http://maps.google.com/maps/api/js?key=AIzaSyDXu6NShuYaryksdxc-RZshVrooiJgqjqE &sensor=false&language=es"></script>

        <?php
        //CSS principal de Datatable
        echo css_asset('dataTables.bootstrap.min.css', 'DataTables-1.10.12/media');
        echo css_asset('buttons.bootstrap.min.css', 'DataTables-1.10.12/extensions/Buttons');
        //CSS principal de Bootstrap
        echo css_asset('bootstrap.min.css', 'bootstrap-3.3.7');
        //CSS Vista
        echo css_asset('reporte/v_rpt_procura.css', 'empresa_distribucion');

        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js', 'jquery');
        //JS principal de Bootstrap
        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
        //JS par validar el formulario
        echo js_asset('validator.js', 'bootstrap-3.3.7');
        //JS principal del Databale
        echo js_asset('jquery.dataTables.min.js', 'DataTables-1.10.12/media');
        //JS para darle estilos a los botones y al datatable
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
        echo js_asset('infobubble.js', 'mapa');
        //JS propio de la vista
//        echo js_asset('mapa_panaderia/v_registrar_panaderia.js', 'panaderia');
        echo js_asset('reporte/v_rpt_procura.js', 'empresa_distribucion');
        ?>

    </head>
    <body>

        <div id="capa_formulario" class="container-fluid">

            <div class="col-xs-12">
                <h4 style="text-align: center">Tracking de Buques</h4>
            </div>

        </div>
        <!--Fin container-->  

        <div id="tabla_reporte" class="container-fluid"></div>

        <!--------------------------------- Ventana Modal -------------------------------------------->
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
