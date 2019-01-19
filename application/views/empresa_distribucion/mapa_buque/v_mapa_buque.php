
<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Mapa MINPAL</title>

<!--<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&language=es"></script>-->
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?key=AIzaSyDXu6NShuYaryksdxc-RZshVrooiJgqjqE &sensor=false&language=es"></script>
        <?php
        //CSS del Validations Engine
        echo css_asset('jquery-ui.theme.css', 'jquery-ui-1.11.4');
        //CSS del Validations Engine
        //echo css_asset('validationEngine.jquery.css','jquery-validation-engine');
        //CSS principal de Bootstrap
        echo css_asset('bootstrap.min.css', 'bootstrap-3.3.7');
        //CSS boostrap multiselect

        echo css_asset('fileinput.css', 'file-boostrap');

        echo css_asset('bootstrap-multiselect.css', 'bootstrap-multiselect');
        //CSS para el tipo de fuentes e iconos
        echo css_asset('font-awesome.min.css', 'font-awesome-4.7.0');
        //CSS del Colorbox para las ventanas modales
        //echo css_asset('colorbox.css','colorbox');
        //CSS propio de la vista
        echo css_asset('mapa_buque/v_form_mapa_buque.css', 'empresa_distribucion');

        //CSS para el Datatable
        echo css_asset('dataTables.bootstrap.min.css', 'DataTables-1.10.12/media');

        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js', 'jquery');
        //JS principal de Jquery UI
        echo js_asset('jquery-ui.min.js', 'jquery-ui-1.11.4');
        //JS del Validations Engine
        //echo js_asset('languages/jquery.validationEngine-es.js','jquery-validation-engine');
        //echo js_asset('jquery.validationEngine.js','jquery-validation-engine');
        //JS principal de Bootstrap
        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
                //JS para darle estilos a los botones y al datatable
                //JS principal del Databale
        echo js_asset('jquery.dataTables.min.js', 'DataTables-1.10.12/media');
        echo js_asset('dataTables.bootstrap.min.js', 'DataTables-1.10.12/media');
        //JS bootstrap 
        echo js_asset('bootstrap-multiselect.js', 'bootstrap-multiselect');
        //JS del Colorbox para las ventanas modales
        //echo js_asset('jquery.colorbox.js','colorbox');
        //JS para la ventana de información de las marcas de google map
        echo js_asset('infobubble.js', 'mapa');
        //JS para clusterizar las marcas en el mapa
        echo js_asset('fileinput.js', 'file-boostrap');
        echo js_asset('fileinput_locale_es.js', 'file-boostrap');
        echo js_asset('markerclusterer.js', 'markerclusterer'); //Script para agrupar las marcas
        //JS propio de la vista
        echo js_asset('mapa_buque/v_form_mapa_buque.js', 'empresa_distribucion');

        ?> 

    </head>
    <body>

        <!-- Contenedor de la página -->
        <div class="container-fluid">

            <!-- Capa donde se mostrará el mapa -->
            <div id="capa_mapa"></div>

            <!-- Capa donde se mostrarán los filtros de busqueda -->
            <div id="menu_mapa">

                <div class="container-fluid">

                    <select multiple="multiple"></select>

                    <div class="busqueda btn-group btn-success">
                        <div>Buscar</div>
                        <div class="fa fa-search"></div>
                    </div>

                    <div class="limpiar btn-group btn-danger">
                        <div>Limpiar mapa</div>
                        <div class="fa fa-eraser"></div>
                    </div>

                </div>

            </div>

        </div>
        <!-- Fin del contenedor de la página -->
    </body>
</html>