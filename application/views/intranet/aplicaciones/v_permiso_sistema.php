<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <?php
        //CSS principal de Bootstrap
        echo css_asset('bootstrap.min.css','bootstrap-3.3.7');
        //CSS para el tipo de fuentes e iconos
        echo css_asset('font-awesome.min.css','font-awesome-4.7.0');
        //CSS para los multiselect
        echo css_asset('bootstrap-multiselect.css','bootstrap-multiselect');
		//CSS para la vista en arbol
        echo css_asset('treed.css','treed');
        //CSS propio de la vista
        echo css_asset('aplicaciones/v_permiso_sistema.css','intranet');

        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js','jquery');
        //JS principal de Bootstrap
        echo js_asset('bootstrap.min.js','bootstrap-3.3.7');
        //JS principal para los multiselect
        echo js_asset('bootstrap-multiselect.js','bootstrap-multiselect');
		//JS principal para los multiselect
		echo js_asset('treed.js','treed');
        //JS propio de la vista
        echo js_asset('aplicaciones/v_permiso_sistema.js','intranet');
        ?>

    </head>
    
    <body>
    
     	<!-- Capa contenedor -->
        <div id="contenedor" class="container-fluid">
           
            <form>
                
                <div id="capa_usuarios" class="row">
                    <div class="col-md-12 text-center">
                    	<fieldset>
                    		<legend>Acceso de los usuarios sobre los sistemas</legend>
                            <div class="form-group">
                              <select id="usuarios" multiple="multiple"></select>
                              <span class="icono_carga fa fa-cog fa-spin fa-fw"></span>
                            </div>
                        </fieldset>
                    </div>
                </div>       
                      
            </form>
            
            <div id="capa_permisos" class="row">
            	<div id="capa_sistemas_asociados" class="col-md-6">
                	<fieldset>
                    	<legend class="text-center">Sistemas Asociados <span class="icono_carga fa fa-cog fa-spin fa-fw"></span></legend>
            			<div id="sistemas_asociados">
                        	<p class="bg-warning">Debe seleccionar un usuario.</p>
                        </div>
                    </fieldset>
                </div>
                <div id="capa_sistemas_por_asociar" class="col-md-6">
                	<fieldset>
                    	<legend class="text-center">Sistemas por Asociar <span class="icono_carga fa fa-cog fa-spin fa-fw"></span></legend>
            			<div id="sistemas_por_asociar">
                        	<p class="bg-warning">Debe seleccionar un usuario.</p>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div> 
        <!-- Fin de la capa container-fluid -->
        
    </body>
    
</html>