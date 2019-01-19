<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <?php
        //CSS principal de Bootstrap
        echo css_asset('bootstrap.min.css', 'bootstrap-3.3.7');
        //CSS para el tipo de fuentes e iconos
        echo css_asset('font-awesome.min.css', 'font-awesome-4.7.0');
        //CSS principal de la vista
        echo css_asset('registro/v_form_produccion.css', 'empresa_distribucion');

        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js', 'jquery');
        //JS validador autonumeric
        echo js_asset('autoNumeric-min.js', 'autoNumeric');
        //JS principal de Bootstrap
        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
        //JS para validar el formulario
        echo js_asset('validator.js', 'bootstrap-3.3.7');
        //JS propio de la vista
        echo js_asset('registro/v_form_produccion_registro.js', 'empresa_distribucion');
        ?>

    </head>

    <body>

        <div id="capa_formulario" class="container">
            <div class="row row-centered">
                <div class="col-md-8 col-centered">

                    <form id="form_registro" role="form" data-toggle="validator">
                        
                        <div class="col-md-12">
                            <legend>
                                <h3 class="text-primary text-center">Registro Producción Empresa</h3>
                            </legend>
                        </div>
                        
                        <div class="col-md-6 form-group"> 
                            <label>Insumo:</label>              
                            <select id="insumo" name="insumo" class="form-control" required>
                                <option value="" disabled selected>Seleccione</option>
                            </select>
                            <div class="help-block with-errors"></div>              
                        </div>

                        <div class="col-md-3 form-group">
                            <label>Inv. Insumo</label>
                            <input id="cant_insumo" name="cant_insumo" class="form-control" required disabled>
                            <div class="help-block with-errors"></div> 
                        </div>
                        
                        <div class="col-md-3 form-group">
                            <label>Cant. Insumo</label>
                            <input id="cant_insumo" name="cant_insumo" class="form-control" required>
                            <div class="help-block with-errors"></div> 
                        </div>
                        
                        <div class="col-md-7 form-group"> 
                            <label>Producto:</label>              
                            <select id="producto" name="producto" class="form-control" required>
                                <option value="" disabled selected>Seleccione</option>
                            </select>
                            <div class="help-block with-errors"></div>              
                        </div>
                        
                        <div class="col-md-5 form-group">
                            <label>Cant. Producción</label>
                            <input id="cant_produccion" name="cant_produccion" class="form-control" required>
                            <div class="help-block with-errors"></div> 
                        </div>
                        
                        <div class="col-md-12 form-group text-center">
                            <button type="button" id="btn_registro"class="btn btn-primary">Guardar</button>
                        </div>

                    </form>

                </div><!-- /col-centered -->
            </div><!-- /row row-centered -->

            <!--------------------------------- Ventana Modal para editar las solicitudes-------------------------------------------->
            <div id="modal" class="modal fade" tabindex="-1" role="dialog">
                <div class="modal-dialog">
                    <!---------------------------contenido del modal ------------------------------------>
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title"></h4>
                        </div>
                        <div class="modal-body"></div><!-- /cierra el modal body -->
                        <div class="modal-footer"></div>
                    </div><!-- /cierra el modal content -->
                </div><!-- /cierra el modal-dialog -->
            </div><!-- /cierra el modal -->
        </div>

    </body>

</html> 

