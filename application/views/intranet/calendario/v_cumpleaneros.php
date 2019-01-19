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
		//Css principal del fullcalendar
		echo css_asset('fullcalendar.css', 'fullcalendar-3.0.0');
        //CSS propio de la vista
        echo css_asset('calendario/v_cumpleaneros.css', 'intranet');

        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js', 'jquery');
        //JS principal de Bootstrap
        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
		//JS principal de fullcalendar
		echo js_asset('moment.min.js', 'fullcalendar-3.0.0');
        echo js_asset('fullcalendar.js', 'fullcalendar-3.0.0');
		echo js_asset('locale/es.js', 'fullcalendar-3.0.0');
        //JS propio de la vista
        echo js_asset('calendario/v_cumpleaneros.js', 'intranet');
        ?>

    </head>
    
    <body>
    
     	<!-- Capa wrapper -->
        <div class="container-fluid">
            
            <div class="row">
            	<div id="leyenda" class="col-md-6">
                	<fieldset>
                    	<legend class="text-left">Leyenda </legend>
                        <div class="row">
                            <div class="icono_ofic fa fa-square" ></div> Cumpleaños de su oficina
                        </div>
                        <div class="row">
                            <div class="icono_ofic_ext fa fa-square"></div> Cumpleaños de otras oficinas
                        </div>
                        </fieldset>
                </div>
            </div>
            
            <!-- Capa que contiene el calendario -->
        	<div id="calendario"></div>
        
        </div> 
        
    </body>
    
</html>