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
		//CSS calendario
		echo css_asset('bootstrap-datetimepicker.min.css', 'bootstrap-datetimepicker/build');
		
        //CSS propio de la vista
        echo css_asset('cuenta_usuario/v_cuenta_usuario.css', 'intranet');

        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js', 'jquery');
		//JS principal de Bootstrap
        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
		//JS calendario
		echo js_asset('moment.min.js', 'moment/min');
		echo js_asset('bootstrap-datetimepicker.min.js', 'bootstrap-datetimepicker/build');		
        //JS propio de la vista
        echo js_asset('cuenta_usuario/v_cuenta_usuario.js', 'intranet');
		//validador
	  	echo js_asset('validator.js', 'bootstrap-3.3.7');
		
        ?>

    </head>
    <body>
    
        <div class="container-fluid">
        
<!--            <div id="log_acceso" class="item">
                <div class="icono fa fa-clipboard log_acceso"></div>
                <div class="nombre_sistema">Log de Acceso</div>
                <div class="msj_pronto">Pronto</div>
            </div>-->
            
            <div id="cambio_clave" class="item" >
                <div class="icono fa fa-key cambio_clave"></div>
                <div class="nombre_sistema">Cambio de Clave</div>
                <!--<div class="msj_pronto">Pronto</div>-->
            </div>             
                 
        </div>
        
        <!--modal informativo -->
        <div class="modal fade" role="dialog" aria-labelledby="gridSystemModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title"></h4>
              </div>
              <!--Contenido de la modal-->
              <div class="modal-body"></div>
              <div class="modal-footer"></div>
            </div><!-- /.modal-content -->
          </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->       
        
    </body>
    
</html>