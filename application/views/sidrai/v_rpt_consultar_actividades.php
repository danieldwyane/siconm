<style type="text/css">
<?php include_once "assets/rem/css/v_estilos.css"; ?>
</style>

<script type="text/javascript">
<?php include_once "assets/sidrai/js/v_rpt_consultar_actividades.js"; ?>
</script>

<br>

<!-- Content Header (Page header) -->
<section class="content-header">
    <h1 class="titulo_p">
        Consultar Actividades
        <!--<small>Reports of coupons generated</small>-->
    </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url('ctr_template/cargaHome'); ?>"><i class="fa fa-home"></i> Inicio</a></li>
        <li class="active">Registro</li>
        <li class="active">Consultar Actividades</li>
    </ol>
</section>

<!-- Main content -->
<section class="content">
<!--    <br />-->

    <div class="box box-default">
        
        <div class="box-header">
            <!--<h3 class="box-title">Consultar Actividades</h3>-->
        </div>
        <!-- /.box-header -->
        
        <div class="box-body">

            <!-- Datatable -->
            <div id="tabla_reporte" class="container-fluid"></div>
            <!-- /.Datatable -->
            
        </div>
        <!-- /.box-body -->
        
    </div>
    <!-- /.box -->
    
</section>

<div class="modal" id="modal_control">
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
