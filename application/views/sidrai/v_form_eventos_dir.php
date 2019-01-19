<style type="text/css">
<?php include_once "assets/sidrai/css/v_estilos.css"; ?>
</style>

<script type="text/javascript">
<?php include_once "assets/sidrai/js/v_form_eventos_dir.js"; ?>
</script>

<!-- Content Header (Page header) -->
<section class="content-header">
    <h1 class="titulo_p">
        Actividades de Divulgación
        <!--<small>Reports of coupons generated</small>-->
    </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url('ctr_template/cargaHome'); ?>"><i class="fa fa-home"></i> Inicio</a></li>
        <li class="active">Registro</li>
        <li class="active">Programar Actividades</li>
    </ol>
</section>

<br/>

<!-- Main content -->
<section class="content">

    <div class="box box-default">
        <div class="box-header"></div>  

        <form id="form_registrar_evento" name="form_registrar_evento" role="form" data-toggle="validator">


            <!-- /.box-header -->
            <div class="box-body">


                <div class="row">
                    <div class="col-md-12">
                        <legend class="titulo_p text-center">Dirección de la Actividad</legend>
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->

                <div class="row">

                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Estado:</label>
                            <select id="estado" name="estado" class="form-control select2" style="width: 100%;" required>
                                <option value="">Seleccione</option>
                            </select>
                        </div>
                        <!-- /.form-group -->
                    </div>
                    <!-- /.col -->

                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Municipio:</label>
                            <select id="municipio" name="municipio" class="form-control select2" style="width: 100%;" required disabled>
                                <option value="">Seleccione</option>
                            </select>
                        </div>
                        <!-- /.form-group -->
                    </div>
                    <!-- /.col -->

                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Parroquia:</label>
                            <select id="parroquia" name="parroquia" class="form-control select2" style="width: 100%;" required disabled>
                                <option value="">Seleccione</option>
                            </select>
                        </div>
                        <!-- /.form-group -->
                    </div>
                    <!-- /.col -->

                </div>
                <!-- /.row -->

                <div class="row">

                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Ciudad:</label>
                            <input id="ciudad" name="ciudad" class="form-control" type="text" required>
                        </div>
                        <!-- /.form-group -->
                    </div>
                    <!-- /.col -->

                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Lugar:</label>
                            <input id="lugar" name="lugar" class="form-control" type="text" required>
                        </div>
                        <!-- /.form-group -->
                    </div>
                    <!-- /.col -->
                </div>
                <!-- </div>-->

                <div class="row">
                    <div class="col-md-12">
                        <legend class="titulo_p text-center">Datos de la Actividad</legend>
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->

                <div class="row">

                    <!-- Datepicker Fecha -->
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Fecha:</label>
                            <div class="input-group date">
                                <div class="input-group-addon">
                                    <i class="fa fa-calendar"></i>
                                </div>
                                <input id="fecha" name="fecha" class="form-control" type="text" required>
                            </div>
                            <!-- /.input group -->
                        </div>
                        <!-- /.form group -->
                    </div>
                    <!-- /.col -->

                    <!-- datetimepicker inicio -->
                    <div class="col-md-2">
                        <div class="form-group">
                            <label>Hora de Inicio:</label>
                            <div class="input-group date">
                                <div class="input-group-addon">
                                    <i class="fa fa-clock-o"></i>
                                </div>
                                <input id="hora_inicio" name="hora_inicio"  class="form-control" type="text" required>
                            </div>
                            <!-- /.input group -->
                        </div>
                        <!-- /.form group -->
                    </div>
                    <!-- /.col -->

                    <!-- datetimepicker fin -->
                    <div class="col-md-2">
                        <div class="form-group">
                            <label>Hora de Culminación:</label>
                            <div class="input-group date">
                                <div class="input-group-addon">
                                    <i class="fa fa-clock-o"></i>
                                </div>
                                <input id="hora_fin" name="hora_fin" class="form-control" type="text" required>
                            </div>
                            <!-- /.input group -->
                        </div>
                        <!-- /.form group -->
                    </div>
                    <!-- /.col -->

                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Tipo de Actividad:</label>
                            <select id="tipo_actividad" name="tipo_actividad" class="form-control select2" style="width: 100%;" required>
                                <option value="">Seleccione</option>
                            </select>
                        </div>
                        <!-- /.form-group -->
                    </div>

                </div>
                <!-- /.row -->

                <div class="row">

                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Poblacion Objetivo:</label>
                            <select id="poblacion_objetivo" name="poblacion_objetivo" class="form-control select2" style="width: 100%;" required>
                                <option value="">Seleccione</option>
                            </select>
                        </div>
                        <!-- /.form-group -->
                    </div>
                    <!-- /.col -->

                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Institución Atendida:</label>
                            <input id="institucion_atendida" name="institucion_atendida" class="form-control" type="text" required>
                        </div>
                        <!-- /.form-group -->
                    </div>
                    <!-- /.col -->

                    <div class="col-md-2">
                        <div class="form-group">
                            <label>Cant. Femenina:</label>
                            <input id="cant_f" name="cant_f" class="form-control" type="text" required>
                        </div>
                        <!-- /.form-group -->
                    </div>
                    <!-- /.col -->

                    <div class="col-md-2">
                        <div class="form-group">
                            <label>Cant. Masculino:</label>
                            <input id="cant_m" name="cant_m" class="form-control" type="text" required>
                        </div>
                        <!-- /.form-group -->
                    </div>
                    <!-- /.col -->


                </div>
                <!-- /.row -->

                <div class="row">

                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Nombre de la Actividad:</label>
                            <input id="nombre_actividad" name="nombre_actividad" class="form-control" type="text" required>
                        </div>  
                    </div>

                </div>
                <!-- /.row -->

                <div class="row">

                    <!-- textarea Preguntas -->
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Preguntas / Consultas</label>
                            <textarea id="preguntas" name="preguntas" class="form-control" rows="3" placeholder="Escriba aqui la pregunta o consulta..."></textarea>
                        </div>
                    </div>

                    <!-- textarea Observaciones -->
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Observaciones / Incidencias</label>
                            <textarea id="observaciones" name="observaciones" class="form-control" rows="3" placeholder="Escriba aqui sus observaciones o incidencias..."></textarea>
                        </div>
                    </div>

                </div>

                <!-- /.box-body -->

                <div class="box-footer">
                    <!--Planifique sus actividades de divulgación.-->
                    <div class="col-md-6 text-center">
                        <button type="button" id="btn_agregar_eventos" class="btn btn-azul-modal pull-right">Guardar</button>
                    </div>
                </div>

            </div>
        </form>
    </div>
    <!-- /.box -->

</section>

<div class="modal fade" id="modal_eventos">
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
