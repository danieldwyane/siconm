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
        //CSS para el tipo de fuentes e iconos
        echo css_asset('font-awesome.min.css', 'font-awesome-4.7.0');
        //CSS principal de la vista
        echo css_asset('fileinput.css', 'bootstrap-fileinput');
        //CSS principal de la vista
        echo css_asset('registro/v_form_ventas.css', 'empresa_distribucion');

        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js', 'jquery');
        //JS principal de Bootstrap
        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
         //JS principal del Datatable
        echo js_asset('jquery.dataTables.min.js', 'DataTables-1.10.12/media');
        echo js_asset('dataTables.bootstrap.min.js', 'DataTables-1.10.12/media');
        //JS para validar el formulario
        echo js_asset('validator.js', 'bootstrap-3.3.7');
        //JS principal de Jquery
        echo js_asset('fileinput.min.js', 'bootstrap-fileinput');
        //JS propio de la vista
        echo js_asset('registro/v_form_ventas.js', 'empresa_distribucion');
        ?>

    </head>

    <body>
        <div id="capa_formulario" class="container-fluid">
            <div class="row row-centered">
                <div class="col-sm-12 col-centered">

                    <form id="form_carga_ventas" class="form-horizontal" role="form" data-toggle="validator">

                        <div class="col-sm-12">
                            <legend>
                                <h3 class="text-primary text-center">Cargar Ventas</h3>
                            </legend>
                        </div>

                        <div class="col-sm-3"></div>

                        <div class="col-sm-6 form-group">                       
                            <input id="carga_masiva" name="carga_masiva" class="carga_masiva" type="file" data-show-preview="false" required>
                            <div class="help-block with-errors"></div>
                        </div>
                        	
                        <div class="col-sm-1 form-group text-center">
                        	<i class="fa fa-info ejemplo" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Ejemplo del archivo a subir"></i>
                        </div>

                        <div class="col-sm-3"></div>

                        <div class="col-sm-12 form-group text-center">
                            <button type="button" id="btn_carga_masiva" class="btn btn-primary btn_carga_masiva">Cargar</button>
                        </div>
                    </form>
                    
                    <form id="form_conversion_productos" class="form-horizontal" role="form" data-toggle="validator">
                        <div id="capa_ventas_temporales" class="container-fluid">
                            <table id="ventas_temporales" class="table table-striped" cellspacing="0" width="100%">
                                <thead>
                                    <tr>
                                        <th colspan="12"> <h3 class="text-primary text-center">Conversión de Productos</h3></th>
                                    </tr>
                                <tr>
                                    <th>Fecha de Venta</th>
                                    <th>Producto</th>
                                    <th>Presentacion</th>
                                    <th>Cantidad</th>
                                    <th>Peso Total</th>
                                    <th>Rubro</th>
                                    <th>Asociar Todos</th>

                                </tr>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th><input id="check_todos" type="checkbox"/> </th>

                                </tr>
                                </thead>
                                <tbody></tbody>

                            </table>

                        </div>
                         <div class="col-sm-12 form-group text-center">
                            <button type="button" id="ventas_definitivas" class="btn btn-primary ventas_definitivas">Procesar Ventas</button>
                        </div>
                    </form>
                </div>
            </div>
            
            <!--------------------------------- Ventana Modal para editar las solicitudes-------------------------------------------->
            <div id="modal" class="modal fade" tabindex="-1" role="dialog">
                <div class="modal-dialog">
                    <!---------------------------contenido del modal ------------------------------------>
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title text-primary"></h4>
                        </div>
                        <div class="modal-body"></div><!-- /cierra el modal body -->
                        <div class="modal-footer"></div>
                    </div><!-- /cierra el modal content -->
                </div><!-- /cierra el modal-dialog -->
            </div><!-- /cierra el modal -->
        </div>
    </body>
</html> 
