<style type="text/css">
<?php include_once "assets/siconm/css/v_estilos.css"; ?>
</style>

<script type="text/javascript">
<?php include_once "assets/siconm/js/v_form_registro_oro.js"; ?>
</script>

<section class="content-header">
    <h1 class="titulo_p">
        Registro Pieza de Oro
        <!--<small>Reports of coupons generated</small>-->
    </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url('ctr_template/cargaHome'); ?>"><i class="fa fa-home"></i> Inicio</a></li>
        <li class="active">Registro</li>
        <li class="active">Registro Oro</li>
    </ol>
</section>
<!-- /.row -->
<!-- END ALERTS AND CALLOUTS -->
<!-- START CUSTOM TABS -->
<!--<h2 class="page-header titulo_p text-center">Registrar Datos Empresa</h2>-->

<!--<div class="row">-->
<!--<div class="col-md-3"></div>-->
<!--<div class="col-md-6">-->
<!-- Custom Tabs -->
<div class="row">
    <div class="col-md-3">
    </div>
    <div class="col-md-6">
        <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
                <li class="active"><a href="#datos_basicos" data-toggle="tab">Datos Basicos</a></li>
                <li><a href="#caracteristicas" data-toggle="tab">Caracteristicas</a></li>
                <li><a href="#identificacion" data-toggle="tab">Identificacion</a></li>
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

            <form id="form_registro_oro" role="form" data-toggle="validator" action="javascritp:void(0)" method="post">

                <div class="tab-content">
                    <div class="tab-pane active" id="datos_basicos">

                        <br>
                        <!--                    <form id="form_registro_oro" role="form" data-toggle="validator" action="javascritp:void(0)" method="post">-->

                        <div class="row">
                            <div class="col-xs-12 form-group">
                                <label class="control-label col-sm-2">Tipo Mineral:</label>
                                <div class="col-sm-8">
                                    <select id="tipo_oro" name="tipo_oro" class="form-control" style="width: 100%;" required>
                                        <option value="">Seleccione</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12 form-group">
                                <label class="control-label col-sm-2">Propietario:</label>
                                <div class="col-sm-8">
                                    <select id="propietario" name="propietario" class="form-control" style="width: 100%;" required>
                                        <option value="">Seleccione</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12 form-group">
                                <label class="control-label col-sm-2">Tipo Producto:</label>
                                <div class="col-sm-8">
                                    <select id="tipo_producto" name="tipo_producto" class="form-control" style="width: 100%;" required>
                                        <option value="">Seleccione</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12 form-group">
                                <label class="control-label col-sm-2">Empresa:</label>
                                <div class="col-sm-8">
                                    <select id="empresa" name="empresa" class="form-control" style="width: 100%;" required>
                                        <option value="">Seleccione</option>
                                    </select>
                                </div>

                            </div>
                        </div>

<!--                         Datepicker Fecha 
                        <div class="row">
                            <div class="col-xs-12 form-group">
                                <label>Fecha de Recepcion:</label>
                                <div class="col-sm-8">
                                    <div class="input-group date">
                                        <div class="input-group-addon">
                                            <i class="fa fa-calendar"></i>
                                        </div>
                                        <input id="fecha" name="fecha" class="form-control" type="text" required>
                                    </div>
                                     /.input group 
                                </div>
                                 /.form group 
                            </div>
                        </div>-->

                        <div class="row">
                            <!-- Datepicker Fecha -->
                            <div class="col-xs-12 form-group">
                                <label class="control-label col-sm-2">Fecha Recepcion Pieza:</label>
                                <div class="col-sm-8">
                                    <div class="input-group date">
                                        <div class="input-group-addon">
                                            <i class="fa fa-calendar"></i>
                                        </div>
                                        <input id="fecha_recepcion_bcv" name="fecha_recepcion_bcv" class="form-control" type="text">
                                    </div>
                                    <!-- /.input group -->
                                </div> 
                            </div>
                            <!-- /.form group -->
                        </div>

                        <div class="box-footer">
                            <div class="col-xs-12 text-right">
                                <button type="button" id="btn_datos_basicos" class="btn btn-azul-modal pull-right">Siguiente</button>
                            </div>
                        </div>
                        <!--</form>-->

                    </div>
                    <!-- /.tab-pane -->
                    <div class="tab-pane" id="caracteristicas">
                        <br>
                        <!--<form id="form_caracteristicas" role="form" data-toggle="validator" action="javascritp:void(0)" method="post">-->
                        <div class="row">
                            <!-- Datepicker Fecha -->
                            <div class="col-xs-12 form-group">
                                <label class="control-label col-sm-2">Año Pieza:</label>
                                <div class="col-sm-8">
                                    <div class="input-group date">
                                        <div class="input-group-addon">
                                            <i class="fa fa-calendar"></i>
                                        </div>
                                        <input id="ano" name="ano" class="form-control" type="text">
                                    </div>
                                    <!-- /.input group -->
                                </div> 
                            </div>
                            <!-- /.form group -->
                        </div>
                        <div class="row">
                            <div class="col-xs-12 form-group capa_ancho">
                                <label class="control-label col-sm-2">Ancho (mm):</label>
                                <div class="col-sm-8">
                                    <input id="ancho" name="ancho" type="text" class="form-control text-uppercase"> 
                                </div>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12 form-group capa_largo">
                                <label class="control-label col-sm-2">Largo (mm):</label>
                                <div class="col-sm-8">
                                    <input id="largo" name="largo" type="text" class="form-control text-uppercase"> 
                                </div>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12 form-group capa_diametro">
                                <label class="control-label col-sm-2">Diametro (mm):</label>
                                <div class="col-sm-8">
                                    <input id="diametro" name="diametro" type="text" class="form-control text-uppercase"> 
                                </div>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12 form-group capa_altura">
                                <label class="control-label col-sm-2">Altura (mm):</label>
                                <div class="col-sm-8">
                                    <input id="altura" name="altura" type="text" class="form-control text-uppercase"> 
                                </div>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12 form-group">
                                <label class="control-label col-sm-2">Peso Neto(grs):</label>
                                <div class="col-sm-8">
                                    <input id="peso_unitario" name="peso_unitario" type="text" class="form-control text-uppercase"required> 
                                </div>

                                <!--                                <div class="col-sm-3">
                                                                    <select id="unidad_medida" name="unidad_medida" class="form-control" style="width: 100%;" required>
                                                                        <option value="">Seleccione</option>
                                                                    </select>
                                                                </div>-->

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12 form-group">
                                <label class="control-label col-sm-2">Peso Fino (grs):</label>
                                <div class="col-sm-8">
                                    <input id="peso_fino" name="peso_fino" type="text" class="form-control text-uppercase"required> 
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12 form-group">
                                <label class="control-label col-sm-2">Ley Pureza:</label>
                                <div class="col-sm-8">
                                    <input id="ley_pureza" name="ley_pureza" type="text" class="form-control text-uppercase"required> 
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12 form-group">
                                <label class="control-label col-sm-2">Valor Historico (Bs):</label>
                                <div class="col-sm-8">
                                    <input id="va_hist_bs" name="va_hist_bs" type="text" class="form-control text-uppercase"required> 
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-xs-12 form-group">
                                <label class="control-label col-sm-2">Valor Historico ($):</label>
                                <div class="col-sm-8">
                                    <input id="va_hist_dolar" name="va_hist_dolar" type="text" class="form-control text-uppercase"required> 
                                </div>
                            </div>
                        </div>

                        <!--                        <div class="row">
                                                    <div class="col-xs-12 form-group">
                                                        <label class="control-label col-sm-2">Cantidad Oro Fino:</label>
                                                        <div class="col-sm-8">
                                                            <input id="cantidad_oro" name="cantidad_oro" type="text" class="form-control text-uppercase"required> 
                                                        </div>
                        
                                                    </div>
                                                </div>-->


                        <div class="box-footer">
                            <div class="col-xs-12 text-right">
                                <button type="button" id="btn_caracteristicas" class="btn btn-azul-modal pull-right">Siguiente</button>
                            </div>
                        </div>
                        <!--</form>-->

                    </div>
                    <!-- /.tab-pane -->
                    <div class="tab-pane" id="identificacion">
                        <br>
                        <!--<form id="form_identificacion" role="form" data-toggle="validator" action="javascritp:void(0)" method="post">-->

                        <div class="row">
                            <div class="col-xs-12 form-group">
                                <label class="control-label col-sm-2">Tipo producto:</label>
                                <div class="col-sm-8">
                                    <input id="tp_producto" name="tp_producto" type="text" class="form-control text-uppercase" disabled required> 
                                </div>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12 form-group capa_serial">
                                <label class="control-label col-sm-2">Serial Pieza:</label>
                                <div class="col-sm-8">
                                    <input id="serial" name="serial" type="text" class="form-control text-uppercase" minlength="3" maxlength="15" required> 
                                </div>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12 form-group">
                                <label class="control-label col-sm-2">Tipo Boveda:</label>
                                <div class="col-sm-8">
                                    <select id="tipo_boveda" name="tipo_boveda" class="form-control" style="width: 100%;" required>
                                        <option value="">Seleccione</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12 form-group capa_anaquel">
                                <label class="control-label col-sm-2">Anaquel:</label>
                                <div class="col-sm-8">
                                    <input id="anaquel" name="anaquel" type="text" class="form-control text-uppercase"required> 
                                </div>

                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-xs-12 form-group capa_cubiculo">
                                <label class="control-label col-sm-2">Cubículo:</label>
                                <div class="col-sm-8">
                                    <input id="cubiculo" name="cubiculo" type="text" class="form-control text-uppercase"required> 
                                </div>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12 form-group">
                                <label class="control-label col-sm-2">Finalidad:</label>
                                <div class="col-sm-8">
                                    <select id="finalidad" name="finalidad" class="form-control" style="width: 100%;" required>
                                        <option value="">Seleccione</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div class="box-footer">
                            <div class="col-xs-12 text-right">
                                <button type="button" id="btn_identificacion" class="btn btn-azul-modal pull-right">Siguiente</button>
                            </div>
                        </div>
                        <!--</form>-->

                    </div>
                    <!-- /.tab-pane -->
                    <!-- /.tab-pane -->
                    <div class="tab-pane" id="recaudos">
                        <br>

                        <div class="row">
                            <div class="form-group has-feedback col-xs-12">
                                <div class="form-horizontal recaudos file"></div>
                            </div>
                        </div>


                        <div class="box-footer">
                            <div class="col-xs-12 text-right">
                                <button type="button" id="btn_guardar" class="btn btn-azul-modal pull-right">Guardar</button>
                            </div>
                        </div>

                        <!--</form>-->

                    </div>
                    <!-- /.tab-pane -->   

                </div>

            </form>

            <!-- /.tab-content -->
        </div>
        <!-- nav-tabs-custom -->
    </div>
    <!-- /.col -->
    <div class="col-md-3"></div>
</div>

<div class="modal fade" id="modal_tab">
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