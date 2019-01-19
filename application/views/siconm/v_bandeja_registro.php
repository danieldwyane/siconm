<style type="text/css">
<?php include_once "assets/siconm/css/v_estilos.css"; ?>
</style>

<script type="text/javascript">
<?php include_once "assets/siconm/js/v_bandeja_registro.js"; ?>
</script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <h1 class="titulo_p">
        Piezas Registradas
        <!--<small>Reports of coupons generated</small>-->
    </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url('ctr_template/cargaHome'); ?>"><i class="fa fa-home"></i> Inicio</a></li>
        <li class="active">Registro</li>
        <li class="active">Bandeja Registro</li>
    </ol>
</section>

<!-- Main content -->
<section class="content">
    <br />

    <!-- Profile Image -->
    <div class="box box-default">
        <div class="box-body box-profile">
            <!-- Datatable -->
            <div id="tabla_reporte" class="container-fluid"></div>
            <!-- /.Datatable -->
        </div>
        <!-- /.box-body -->
    </div>
    <!-- /.box -->
</section>

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