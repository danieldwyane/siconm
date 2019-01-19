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
        echo css_asset('notificaciones/v_notificaciones.css', 'intranet');

        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js', 'jquery');
		//JS principal de Bootstrap
        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
		//JS del Socket.io
		echo js_asset('socket.io-1.4.5.js','socket.io');
        //JS propio de la vista
        echo js_asset('notificaciones/v_notificaciones.js', 'intranet');
		
        ?>

    </head>

<body>

	<div class="container-fluid capa_contenido"></div>
 
</body>
</html>