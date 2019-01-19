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
        //CSS para colacar imagen venezuela
        echo css_asset('intlTelInput.css', 'intl-tel-input/build');
        //CSS principal de la vista
        echo css_asset('registro/v_form_empresa.css', 'empresa_distribucion');

        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js', 'jquery');
        //JS validador autonumeric
        echo js_asset('autoNumeric-min.js', 'autoNumeric');
        //JS principal de Bootstrap
        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
        //JS para validar el formulario
        echo js_asset('validator.js', 'bootstrap-3.3.7');
        //JS de la mascara
        echo js_asset('intlTelInput.min.js', 'intl-tel-input/build');
        echo js_asset('jquery.mask.js', 'jquery');
        //JS propio de la vista
        echo js_asset('registro/v_form_empresa.js', 'empresa_distribucion');
        ?>

    </head>

    <body>

        <!-- Capa que contiene el cintillo gubernamental -->
<!--        <div id="capa_cintillo">
            <div></div>
            <div></div>
        </div>-->

        <div id="capa_formulario" class="nav nav-tabs container-fluid well">

            <form id="form_registro_empresa" role="form" data-toggle="validator">

                <div class="col-md-12">
                    <legend>
                        <h3 class="text-primary text-center">Registro Empresa</h3>
                    </legend>
                </div>

                <div class="col-md-12">
                    <div class="col-md-3 form-group">
                        <label> Sucursal:</label>
                        <select id="sucursal" name="sucursal" class="form-control" onKeyUp="this.value = this.value.toUpperCase();" required>
                            <option value="seleccione" selected disabled>Seleccione</option>
                            <option value="1">SI</option>
                            <option value="0">NO</option>
                        </select>
                        <div class="help-block with-errors"></div>
                    </div>

                    <div class="col-md-3 form-group">
                        <label>Rif</label>
                        <input id="rif" name="rif" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required data-minlength="8" data-minlength-error="Ejemplo: J-12345678, C-12345678, G-12345678">
                        <div class="contenido_empresa help-block with-errors"></div> 
                    </div>

                    <div class="col-md-6 form-group">
                        <label>Razon Social</label>
                        <input id="razon_social" name="razon_social" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required>
                        <div class="help-block with-errors"></div> 
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-3 form-group">
                        <label> Propiedad:</label>
                        <select id="propiedad" name="propiedad" class="form-control" onKeyUp="this.value = this.value.toUpperCase();" required>
                            <option value="seleccione" selected disabled>Seleccione</option>
                            <option value="1">PÚBLICA</option>
                            <option value="2">PRIVADA</option>
                            <option value="3">MIXTA</option>
                        </select>
                        <div class="help-block with-errors"></div>
                    </div>

                    <div class="col-md-3 form-group">  
                        <label>Tipo Empresa:</label>              
                        <div class="form-group">
                            <select id="tipo_empresa" name="tipo_empresa" class="form-control" required>
                                <option value="" disabled selected>Seleccione</option>
                            </select>
                            <div class="help-block with-errors"></div>              
                        </div>  
                    </div>

                    <div class="col-md-6 form-group">
                        <label>Estado:</label>
                        <select id="estado" name="estado" class="form-control" required>
                        </select>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-3 form-group">
                        <label> Municipio:</label>
                        <select id="municipio" name="municipio" class="form-control" disabled required>
                        </select>
                        <div class="help-block with-errors"></div>
                    </div>

                    <div class="col-md-3 form-group">
                        <label> Parroquia:</label>
                        <select id="parroquia" name="parroquia" class="form-control" disabled required>
                        </select>
                        <div class="help-block with-errors"></div>
                    </div>

                    <div class="col-md-6 form-group">
                        <label>Dirección</label>
                        <input id="direccion" name="direccion" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required>
                        <div class="help-block with-errors"></div> 
                    </div>
                </div>

                <div class="col-md-12">
                    <legend>
                        <h3 class="text-primary text-center">Datos Responsable</h3>
                    </legend>
                </div>

                <div class="col-md-12">
                    <div class="col-md-6 form-group">
                        <label>Nombre</label>
                        <input id="nombre" name="nombre" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required>
                        <div class="help-block with-errors"></div> 
                    </div>

                    <div class="col-md-6 form-group">
                        <label>Apellido</label>
                        <input id="apellido" name="apellido" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" required>
                        <div class="help-block with-errors"></div> 
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-3 form-group">
                        <label>Telefono</label>
                        <input id="tlf1" name="tlf1" class="form-control" required data-fv-field="phoneNumber" data-minlength="13" data-minlength-error="Ejemplo: +584145555555">
                        <div class="help-block with-errors"></div> 
                    </div>

                    <div class="col-md-3 form-group">
                        <label>Telefono (Opcional)</label>
                        <input id="tlf2" name="tlf2" class="form-control" data-fv-field="phoneNumber" data-minlength="13" data-minlength-error="Ejemplo: +584125555555">
                        <div class="help-block with-errors"></div> 
                    </div>

                    <div class="col-md-6 form-group"> 
                        <label>Correo</label>
                        <input id="correo" name="correo" class="form-control text-uppercase" onKeyUp="this.value = this.value.toUpperCase();" placeholder="Correo electrónico" type="email" required data-error="La dirección de correo es inválida." pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"/>
                        <div class="help-block with-errors">Ejemplo: cuenta@dominio.com</div>
                    </div>  

                </div>

                <div class="col-md-12 form-group text-center">
                    <button type="button" id="btn_registro" class="btn btn-primary">Guardar</button>
                </div>

            </form>

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


