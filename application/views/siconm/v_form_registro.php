<style type="text/css">
<?php include_once "assets/vuce/css/v_estilos.css"; ?>
</style>

<script type="text/javascript">
<?php include_once "assets/vuce/js/empresa/v_form_actualizar_empresa.js"; ?>
</script>

<!-- /.row -->
<!-- END ALERTS AND CALLOUTS -->
<!-- START CUSTOM TABS -->
<h2 class="page-header titulo_p text-center">Registrar Datos Empresa</h2>

<!--<div class="row">-->
<!--<div class="col-md-3"></div>-->
<!--<div class="col-md-6">-->
<!-- Custom Tabs -->
<div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
        <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
                <li class="active"><a href="#datos_basicos" data-toggle="tab">Datos Básicos</a></li>
                <li><a href="#registro_mercantil" data-toggle="tab">Registro Mercantil</a></li>
                <li><a href="#representante_legal" data-toggle="tab">Representante Legal</a></li>
                <li><a href="#recaudos" data-toggle="tab">Recaudos</a></li>
                <!--                <li class="dropdown">
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                        Dropdown <span class="caret"></span>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
                                        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
                                        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
                                        <li role="presentation" class="divider"></li>
                                        <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
                                    </ul>
                                </li>
                                <li class="pull-right"><a href="#" class="text-muted"><i class="fa fa-gear"></i></a></li>-->
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="datos_basicos">

                    <form id="frm_datos_basicos" name="frm_datos_basicos" role="form" data-toggle="validator">

                        <div class="row">
                            <div class="form-group has-feedback col-xs-4">
                                <input id="rif" name="rif" type="text" class="form-control text-uppercase rif" data-minlength="11" data-minlength-error="Ejemplo: J-12345678" placeholder="Rif" disabled required>
                            </div>
                            <div class="form-group has-feedback col-xs-8">
                                <input id="correo" name="correo" type="email" class="form-control text-uppercase" placeholder="Correo Electronico" disabled required pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$">
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group has-feedback col-xs-12">
                                <input id="razon_social" name="razon_social" type="text" class="form-control text-uppercase" placeholder="Razon Social" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group has-feedback col-xs-4">
                                <input id="tlf1" name="tlf1" type="text" class="form-control text-uppercase telefono" data-minlength="14" placeholder="Telefono" required>
                            </div>
                            <div class="form-group has-feedback col-xs-4">
                                <input id="tlf2" name="tlf2" type="text" class="form-control text-uppercase telefono" data-minlength="14" placeholder="Telefono2" required>
                            </div>
                            <div class="form-group has-feedback col-xs-4">
                                <input id="tlf3" name="tlf3" type="text" class="form-control text-uppercase telefono" data-minlength="14" placeholder="Telefono3" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-6 form-group">
                                <select id="sector" name="sector" class="form-control" style="width: 100%;" required>
                                    <option value="seleccione" selected disabled>SECTOR</option>
                                </select>
                                <div class="help-block with-errors"></div>                      
                            </div>
                            <div class="col-xs-6 form-group">
                                <select id="pais" name="pais" class="form-control" style="width: 100%;" required>
                                    <option value="seleccione" selected disabled>PAIS</option>
                                </select>
                                <div class="help-block with-errors"></div>                      
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-6 form-group">
                                <select id="estado" name="estado" class="form-control" style="width: 100%;" disabled required>
                                    <option value="seleccione" selected disabled>ESTADO</option>
                                </select>
                                <div class="help-block with-errors"></div>                      
                            </div>

                            <div class="col-xs-6 form-group">
                                <select id="municipio" name="municipio" class="form-control" style="width: 100%;" disabled required>
                                    <option value="seleccione" selected disabled>MUNICIPIO</option>
                                </select>
                                <div class="help-block with-errors"></div>                      
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group has-feedback col-xs-6">
                                <input id="ciudad" name="ciudad" type="text" class="form-control text-uppercase" placeholder="Ciudad" required>
                            </div>
                            <div class="form-group has-feedback col-xs-6">
                                <input id="direccion" name="direccion" type="text" class="form-control text-uppercase" placeholder="Dirección" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group has-feedback col-xs-6">
                                <input id="latitud" name="latitud" type="text" class="form-control text-uppercase" placeholder="Latitud" required>
                            </div>
                            <div class="form-group has-feedback col-xs-6">
                                <input id="longitud" name="longitud" type="text" class="form-control text-uppercase" placeholder="Longitud" required>
                            </div>
                        </div>

                        <br>

                        <div class="row">
                            <!--                <div class="col-xs-6">
                                                <button type="button" class="btn btn-primary btn-block btn-flat btn_iniciar_sesion">Iniciar Sesion</button>
                                            </div>-->
                            <div class="col-xs-3"></div>
                            <!-- /.col -->
                            <div class="col-xs-6">
                                <button type="button" id="btn_datos_basicos" class="btn btn-danger btn-block btn-flat">Guardar y Seguir</button>
                            </div>
                            <!-- /.col -->
                            <div class="col-xs-3"></div>
                            <!-- /.col -->
                        </div>
                    </form>

                </div>
                <!-- /.tab-pane -->
                <div class="tab-pane" id="registro_mercantil">

                    <form id="frm_registro_mercantil" name="frm_registro_mercantil" role="form" data-toggle="validator">

                        <div class="row">
                            <div class="form-group has-feedback col-xs-12">
                                <input id="rif_merc" name="rif" type="text" class="form-control text-uppercase rif" data-minlength="11" data-minlength-error="Ejemplo: J-12345678" placeholder="Rif" disabled required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group has-feedback col-xs-12">
                                <input id="reg_mercantil" name="reg_mercantil" type="text" class="form-control text-uppercase" placeholder="Registro Mercantil" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group has-feedback col-xs-12">
                                <input id="num_reg" name="num_reg" type="text" class="form-control text-uppercase" placeholder="Numero de Registro" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group has-feedback col-xs-12">
                                <input id="tomo" name="tomo" type="text" class="form-control text-uppercase" placeholder="Tomo" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group has-feedback col-xs-12">
                                <input id="folio" name="folio" type="text" class="form-control text-uppercase" placeholder="Folio" required >
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group has-feedback col-xs-12">
                                <input id="capital" name="capital" type="text" class="form-control text-uppercase" placeholder="Capital" required>
                            </div>
                        </div>

                        <div class="row">
                            <!--                <div class="col-xs-6">
                                                <button type="button" class="btn btn-primary btn-block btn-flat btn_iniciar_sesion">Iniciar Sesion</button>
                                            </div>-->
                            <div class="col-xs-3"></div>
                            <!-- /.col -->
                            <div class="col-xs-6">
                                <button type="button" id="btn_registro_mercantil" class="btn btn-danger btn-block btn-flat">Guardar y Seguir</button>
                            </div>
                            <!-- /.col -->
                            <div class="col-xs-3"></div>
                            <!-- /.col -->
                        </div>
                    </form>

                </div>
                <!-- /.tab-pane -->
                <div class="tab-pane" id="representante_legal">

                    <form id="frm_representante_legal" name="frm_representante_legal" role="form" data-toggle="validator">

                        <div class="row">
                            <div class="form-group has-feedback col-xs-12">
                                <input id="rif_legal" name="rif" type="text" class="form-control text-uppercase rif" data-minlength="11" data-minlength-error="Ejemplo: J-12345678" placeholder="Rif" disabled required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group has-feedback col-xs-12">
                                <input id="cedula" name="cedula" type="text" class="form-control text-uppercase cedula" placeholder="cédula" data-minlength="6" required>  
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group has-feedback col-xs-12">
                                <input id="nombre" name="nombre" type="text" class="form-control text-uppercase" placeholder="Nombre" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group has-feedback col-xs-12">
                                <input id="apellido" name="apellido" type="text" class="form-control text-uppercase" placeholder="Apellido" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group has-feedback col-xs-12">
                                <input id="correo_legal" name="correo" type="email" class="form-control text-uppercase" placeholder="Correo Electronico" required pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$">
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group has-feedback col-xs-12">
                                <input id="tlf1_legal" name="tlf1" type="text" class="form-control text-uppercase telefono" data-minlength="14" placeholder="Telefono Ejm: (414) 029-6288" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group has-feedback col-xs-12">
                                <input id="tlf2_legal" name="tlf2" type="text" class="form-control text-uppercase telefono" data-minlength="14" placeholder="Telefono2 Ejm: (414) 029-6288">
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group has-feedback col-xs-12">
                                <input id="tlf3_legal" name="tlf3" type="text" class="form-control text-uppercase telefono" data-minlength="14" placeholder="Telefono3 Ejm: (414) 029-6288">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-3"></div>
                            <!-- /.col -->
                            <div class="col-xs-6">
                                <button type="button" id="btn_representante_legal" class="btn btn-danger btn-block btn-flat">Guardar</button>
                            </div>
                            <!-- /.col -->
                            <div class="col-xs-3"></div>
                            <!-- /.col -->
                        </div>
                    </form>

                </div>
                <!-- /.tab-pane -->
                <!-- /.tab-pane -->
                <div class="tab-pane" id="recaudos">

                    <form id="frm_recaudos" name="frm_recaudos" role="form" data-toggle="validator">


                        <div class="form-group has-feedback col-xs-12">
                            <legend>
                                <h4 class="titulo_p text-center">Anexos:</h4>
                            </legend>
                        </div>

                        <div class="form-group has-feedback col-xs-12">
                            <div class="form-horizontal recaudos file"></div>
                        </div>


                        <!--                        <div class="row">
                                                    <div class="form-group has-feedback col-xs-12">
                                                        <input id="rif_legal" name="rif" type="text" class="form-control text-uppercase rif" data-minlength="11" data-minlength-error="Ejemplo: J-12345678" placeholder="Rif" disabled required>
                                                    </div>
                                                </div>
                        
                                                <div class="row">
                                                    <div class="form-group has-feedback col-xs-12">
                                                        <input id="correo_legal" name="correo" type="email" class="form-control text-uppercase" placeholder="Correo Electronico" required pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$">
                                                    </div>
                                                </div>
                        
                                                <div class="row">
                                                    <div class="form-group has-feedback col-xs-12">
                                                        <input id="tlf1_legal" name="tlf1" type="text" class="form-control text-uppercase telefono" data-minlength="14" placeholder="Telefono Ejm: (414) 029-6288" required>
                                                    </div>
                                                </div>-->

                        <div class="row">
                            <div class="col-xs-3"></div>
                            <!-- /.col -->
                            <div class="col-xs-6">
                                <button type="button" id="btn_recaudos" class="btn btn-danger btn-block btn-flat">Guardar</button>
                            </div>
                            <!-- /.col -->
                            <div class="col-xs-3"></div>
                            <!-- /.col -->
                        </div>
                    </form>

                </div>
                <!-- /.tab-pane -->                
            </div>
            <!-- /.tab-content -->
        </div>
        <!-- nav-tabs-custom -->
    </div>
    <!-- /.col -->
    <div class="col-md-3"></div>
</div>

<div class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header titulo_m">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title titulo_m"></h4>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer"></div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->