<style type="text/css">
<?php include_once "assets/sidrai/css/v_estilos.css"; ?>
</style>

<script type="text/javascript">
<?php include_once "assets/sidrai/js/v_rpt_diario.js"; ?>
</script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <h1 class="titulo_p">
        Reporte De Las actividades de Difusión
        <!--<small>Reports of coupons generated</small>-->
    </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url('ctr_template/cargaHome'); ?>"><i class="fa fa-home"></i> Inicio</a></li>
        <li class="active">registro</li>
        <li class="active">reporte diario</li>
    </ol>
</section>

<!-- Main content -->
<section class="content">
    <!--<br />-->

    <div class="row">
        <!-- Total Personas Atendidas -->
        <div class="col-md-6">
            <div class="box box-default">
                <div class="box-header with-border">
                    <h3 class="box-title titulo_p">Total personas atendidas</h3>
                    <!--box-title-->
                </div>
                <div class="box-body">
                    <div class="col-md-4 form-group text-center text-primary">
                        <label>Femenino</label>
                        <div id="femenino"></div>
                    </div>
                    <div class="col-md-4 form-group text-center text-danger">
                        <label>Masculino</label>
                        <div id="masculino"></div>
                    </div>
                    <div class="col-md-4 form-group text-center text-success">
                        <label>Total</label>
                        <div id="total"></div> 
                    </div>
                </div>
            </div>
            <!-- /.box -->
        </div>

        <!-- Impacto De Las Actividades -->
        <div class="col-md-6">
            <div class="box box-default">
                <div class="box-header with-border">
                    <h3 class="box-title titulo_p">Cumplimiento de la programación por:</h3>
                    <!--box-title-->
                </div>
                <div class="box-body">
                    <div class="col-md-3 form-group text-center text-primary">
                        <label>Zona</label>
                        <div id="zona"></div>
                    </div>
                    <div class="col-md-3 form-group text-center text-danger">
                        <label>Instituciones</label>
                        <div id="instituciones"></div>
                    </div>
                    <div class="col-md-3 form-group text-center text-warning">
                        <label>Comunidades</label>
                        <div id="comunidades"></div> 
                    </div>
                    <div class="col-md-3 form-group text-center text-success">
                        <label>Educacion</label>
                        <div id="educacion"></div> 
                    </div>
                </div>
            </div>
            <!-- /.box -->
        </div>
    </div>

    <div class="row">
        <!-- Detalle de las Actividades -->
        <div class="col-md-6">
            <div class="box box-default">
                <div class="box-header with-border">
                    <h3 class="box-title titulo_p">Detalle de las actividades</h3>
                </div>
                <div  class="box-body">
                    <div class="row">
                        <div id="det_planif_actividades" class="form-group" style="max-height: 400px; max-width: 600px; margin: 0 auto"></div>
                    </div>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>

        <!-- Detalle de las personas atendidas por actividades -->
        <div class="col-md-6">
            <div class="box box-default">
                <div class="box-header with-border">
                    <h3 class="box-title titulo_p">Detalle de las personas atendidas por actividades</h3>
                </div>
                <div  class="box-body">
                    <div class="row">
                        <div id="det_pers_actividades" class="form-group" style="max-height: 400px; max-width: 600px; margin: 0 auto"></div>
                    </div>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>

    </div>

    <div class="row">
        <!-- Detalle de las grupos abordados -->
        <div class="col-md-6">
            <div class="box box-default">
                <div class="box-header with-border">
                    <h3 class="box-title titulo_p">Detalle de las grupos abordados</h3>
                </div>
                <div  class="box-body">
                    <div class="row">
                        <div id="det_planif_grupos" class="form-group" style="max-height: 400px; max-width: 600px; margin: 0 auto"></div>
                    </div>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>

        <!-- Detalle  de las personas atendidas por Grupos -->
        <div class="col-md-6">
            <div class="box box-default">
                <div class="box-header with-border">
                    <h3 class="box-title titulo_p">Detalle de las personas atendidas por grupos</h3>
                </div>
                <div  class="box-body">
                    <div id="det_pers_grupos" class="form-group" style="max-height: 400px; max-width: 600px; margin: 0 auto"></div>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>
    </div>

    <div class="row">
        <!-- Detalle de la planificación por zonas geográficas -->
        <div class="col-md-6">
            <div class="box box-default">
                <div class="box-header with-border">
                    <h3 class="box-title titulo_p">Detalle de la planificación por zonas geográficas</h3>
                </div>
                <div  class="box-body">
                    <div class="row">
                        <div id="det_planif_zonas" class="form-group" style="max-height: 400px; max-width: 600px; margin: 0 auto"></div>
                    </div>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>

        <!-- Detalle de las personas atendidas por zonas geográficas -->
        <div class="col-md-6">
            <div class="box box-default">
                <div class="box-header with-border">
                    <h3 class="box-title titulo_p">Detalle de las personas atendidas por zonas geográficas</h3>
                </div>
                <div  class="box-body">
                    <div id="det_pers_zonas" class="form-group" style="max-height: 400px; max-width: 600px; margin: 0 auto"></div>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>
    </div>

    <div class="row">

        <!-- Detalle de la planificación por estados -->
        <div class="col-md-6">
            <div class="box box-default">
                <div class="box-header with-border">
                    <h3 class="box-title titulo_p">Detalle de la planificación por estados</h3>
                </div>
                <div  class="box-body">
                    <div class="row">
                        <div id="det_planif_estados" class="form-group" style="max-height: 400px; max-width: 600px; margin: 0 auto"></div>
                    </div>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>

        <!-- Detalle de las personas atendidas por estado -->
        <div class="col-md-6">
            <div class="box box-default">
                <div class="box-header with-border">
                    <h3 class="box-title titulo_p">Detalle de las personas atendidas por estado</h3>
                </div>
                <div  class="box-body">
                    <div class="row">
                        <div id="det_pers_estados" class="form-group" style="max-height: 400px; max-width: 600px; margin: 0 auto"></div>
                    </div>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>
    </div>

    <!--<br />-->

</section>
