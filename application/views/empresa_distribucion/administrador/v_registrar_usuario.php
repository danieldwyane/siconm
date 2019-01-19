<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <?php
        //CSS principal de Bootstrap
        echo css_asset('bootstrap.min.css', 'bootstrap-3.3.7');
        //CSS principal del Font-awesome
        echo css_asset('font-awesome.min.css', 'font-awesome-4.7.0');
        //CSS para colacar imagen venezuela
        echo css_asset('intlTelInput.css', 'intl-tel-input/build');
        //CSS principal de la vista
        echo css_asset('administrador/v_registrar_usuario.css', 'empresa_distribucion');

        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js', 'jquery');
        //JS principal de Bootstrap
        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
        //JS para validar el formulario
        echo js_asset('validator.js', 'bootstrap-3.3.7');
        //Js para dar formato numerico
        echo js_asset('autoNumeric-min.js', 'autoNumeric');
        //JS de la mascara
        echo js_asset('intlTelInput.min.js', 'intl-tel-input/build');
        echo js_asset('jquery.mask.js', 'jquery');
        //JS propio de la vista
        echo js_asset('administrador/v_registrar_usuario.js', 'empresa_distribucion');
        
        ?>
    </head>
    
    <body>
     
                        
        <div id="capa_formulario" class="nav nav-tabs container-fluid well">

                    <form id="form_nuevo_usuario" role="form" data-toggle="validator">


                        <div class="col-md-12">
                            <legend>
                                <h3 class="text-primary text-center">Datos del Usuario</h3>
                            </legend>
                        </div>

                        <!--div datos personales-->
                        <div class="col-md-12">

                                <div class="col-md-3 form-group"> 
                                    <label>Primer Nombre</label>
                                    <input id="primer_nombre" name="primer_nombre" type="text" class="form-control text-uppercase" required pattern=".{3,}" data-error="Solo letras, mínimo 3 caracteres.">
                                    <div class="help-block with-errors">Mínimo 3 caracteres.</div>
                                </div> 

                                <div class="col-md-3 form-group"> 
                                    <label>Segundo Nombre</label>
                                    <input id="segundo_nombre" name="segundo_nombre" type="text" class="form-control text-uppercase"  pattern=".{3,}" data-error="Solo letras, mínimo 3 caracteres.">
                                    <div class="help-block with-errors">Mínimo 3 caracteres.</div>
                                </div>

                                <div class="col-md-3 form-group"> 
                                    <label>Primer Apellido</label>
                                    <input id="primer_apellido" name="primer_apellido" type="text" class="form-control text-uppercase" required pattern=".{3,}" data-error="Solo letras, mínimo 3 caracteres.">
                                    <div class="help-block with-errors">Mínimo 3 caracteres.</div>
                                </div>
                                <div class="col-md-3 form-group"> 
                                    <label>Segundo Apellido</label>
                                    <input id="segundo_apellido" name="segundo_apellido" type="text" class="form-control text-uppercase"  pattern=".{3,}" data-error="Solo letras, mínimo 3 caracteres.">
                                    <div class="help-block with-errors">Mínimo 3 caracteres.</div>
                                </div>
                        </div>

                        <div class="col-md-12">

                                <div class="col-md-3 form-group"> 
                                    <label>Cedula</label>
                                    <input id="cedula" name="cedula" type="text" class="form-control cedula" required placeholder="V-00000000 o E-0000000"/>
                                    <div class="help-block with-errors"></div>
                                </div>

                                <div class="col-md-3 form-group">
                                    <label>Telefono</label>
                                    <input id="tlf" name="tlf" class="form-control" required>
                                    <div class="help-block with-errors"></div> 
                                </div>


                                <div class="col-md-6 form-group"> 
                                    <label>Correo Electronico</label>
                                    <input id="correo" name="correo" class="form-control text-uppercase" placeholder="Correo electrónico" type="email" required data-error="La dirección de correo es inválida." pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"/>
                                    <div class="help-block with-errors">Ejemplo: cuenta@dominio.com</div>
                                </div>  
                        </div>  
                        <!--Fin div datos personales-->
                        

                        <div class="col-md-12 form-group text-center">
                            <button type="button" id="crear_usuario"class="btn btn-success">Crear Usuario</button>
                        </div>

                    </form>

        </div><!-- Fin de la capa #capa_formulario -->

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