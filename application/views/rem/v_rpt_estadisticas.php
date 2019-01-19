<style type="text/css">
<?php include_once "assets/rem/css/v_estilos.css"; ?>
</style>

<script type="text/javascript">
<?php include_once "assets/rem/js/reportes/v_rpt_estadisticas.js"; ?>
</script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <h1 class="titulo_p">
        Listado Cierre
        <!--<small>Reports of coupons generated</small>-->
    </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url('ctr_template/cargaHome'); ?>"><i class="fa fa-home"></i> Inicio</a></li>
        <li class="active">Taquilla</li>
        <li class="active">Consolidado</li>
    </ol>
</section>

<!-- Main content -->
<section class="content">
    <br />

    <!-- Total Encuesta -->
    <div class="box box-default">
        <div class="box-header with-border">
            <h3 class="titulo_p text-center">Total Encuesta</h3>
            <!--box-title-->
        </div>
        <div class="box-body">
            <div class="col-md-4 form-group text-center text-primary">
                <label>Total Encuesta</label>
                <div id="real"></div>
            </div>
            <div class="col-md-4 form-group text-center text-danger">
                <label>Por Retirar</label>
                <div id="retira"></div>
            </div>
            <div class="col-md-4 form-group text-center text-success">
                <label>Retirados</label>
                <div id="faltan"></div> 
            </div>
        </div>

    </div>
    <!-- /.box -->

    <!-- Retiros por Taquillero -->
    <div class="box box-default">
        <div class="box-header with-border">
            <h3 class="titulo_p text-center">Retiros por Operador</h3>
        </div>
        <div  class="box-body">
<!--            <div id="pie_operador" class="col-md-12 form-group" style="min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto">-->
            <div id="pie_operador" class="form-group" style="max-height: 400px; max-width: 600px; margin: 0 auto">
            </div>
            <!--<canvas id="pieChart" style="height:250px"></canvas>-->
        </div>
        <!-- /.box-body -->
    </div>
    <!-- /.box -->


</section>