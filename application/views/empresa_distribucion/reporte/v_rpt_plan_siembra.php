<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <?php
       
        //CSS principal de Datatable
	echo css_asset('dataTables.bootstrap.min.css','DataTables-1.10.12/media');
        echo css_asset('buttons.bootstrap.min.css','DataTables-1.10.12/extensions/Buttons');
        //CSS principal de Bootstrap
        echo css_asset('bootstrap.min.css','bootstrap-3.3.7');
        //CSS principal del Font-awesome
        echo css_asset('font-awesome.min.css','font-awesome-4.7.0');
        //CSS principal de la vista
        echo css_asset('reporte/v_rpt_plan_siembra.css', 'empresa_distribucion');

        
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
        echo js_asset('dataTables.buttons.min.js','DataTables-1.10.12/extensions/Buttons');
        echo js_asset('buttons.bootstrap.min.js','DataTables-1.10.12/extensions/Buttons');
        echo js_asset('buttons.flash.min.js','DataTables-1.10.12/extensions/Buttons');
        echo js_asset('jszip.min.js','DataTables-1.10.12/media');
        echo js_asset('pdfmake.min.js','DataTables-1.10.12/media');
        echo js_asset('vfs_fonts.js','DataTables-1.10.12/media');
        echo js_asset('buttons.html5.min.js','DataTables-1.10.12/extensions/Buttons');
        echo js_asset('buttons.print.js','DataTables-1.10.12/extensions/Buttons');
        echo js_asset('buttons.colVis.min.js','DataTables-1.10.12/extensions/Buttons');
        echo js_asset('dataTables.rowsGroup.js','DataTables-1.10.12/extensions/rowGroup');
        
        echo js_asset('jquery.mask.js', 'jquery');
        //JS principal de la vista
        echo js_asset('reporte/v_rpt_plan_siembra.js', 'empresa_distribucion');
        ?>

    </head>
    
    
    <body>
   <br>
   <div id="tabla_reporte" class="container-fluid">

       <table id="tbl_reporte" class="display table table-striped table-bordered " cellspacing="0">
           <thead>
               <tr>
                   <!--<th colspan=""></th>-->
                   <th colspan="5" class="text-center">Datos de la Empresa</th>
                   <th colspan="6" class="text-center">Plan de Siembra</th>
               </tr>
               <tr>
                   <th style="text-align: center">Rif</th>
                   <th style="text-align: center">Razon Social</th>
                   <th style="text-align: center">Estado</th>
                   <th style="text-align: center">Minicipio</th>
                   <th style="text-align: center">Parroquia</th>
                   
                   <th style="text-align: center">Rubro</th>
                   <th style="text-align: center">Ciclo de Siembra</th>
                   <th style="text-align: center">Superficie de Siembra (H)</th>
                   <th style="text-align: center">Fecha de Siembra</th>
                   <th style="text-align: center">Fecha de Cosecha</th>
                   <th style="text-align: center">Meta de Producción</th>

               </tr>
               <tr>
                   <th></th>
                   <th></th>
                   <th></th>
                   <th></th>
                   <th></th>
                   
                   <th></th>
                   <th></th>
                   <th></th>
                   <th></th>
                   <th></th>
                   <th></th>

               </tr>
           </thead>
       </table>

   </div>
            <!--------------------------------- Ventana Modal de la Vista-------------------------------------------->
        
    <!--Ventana Modal--> 
        <div id="modal" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header"></div>
                    <div class="modal-body"></div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        </div>
    <!-- Fin de mi ventana modal -->      
        
    </body>

</html>  