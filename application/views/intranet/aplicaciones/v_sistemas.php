<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>INTRANET - MINPAL</title>

        <?php
        //CSS principal de Bootstrap
        echo css_asset('bootstrap.min.css', 'bootstrap-3.3.7');
        //CSS para el tipo de fuentes e iconos
        echo css_asset('font-awesome.min.css','font-awesome-4.7.0');
        //CSS propio de la vista
        echo css_asset('aplicaciones/v_sistemas.css', 'intranet');

        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js', 'jquery');
        //JS principal de Bootstrap
        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
        //JS propio de la vista
        echo js_asset('aplicaciones/v_sistemas.js', 'intranet');
        ?>

    </head>
    
    <body>
    
     	<!-- Capa que contiene los sistemas asociados -->
        <div id="sistemas" class="container-fluid"></div> 
        
    </body>
    
</html>