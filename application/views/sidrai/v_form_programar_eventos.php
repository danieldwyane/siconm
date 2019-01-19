<style type="text/css">
<?php include_once "assets/sidrai/css/v_estilos.css"; ?>
</style>

<script type="text/javascript">
<?php include_once "assets/sidrai/js/v_form_programar_eventos.js"; ?>
</script>

<!-- Content Header (Page header) -->
<section class="content-header">
    <h1 class="titulo_p">
        Programar las actividades de divulgación
        <!--<small>Reports of coupons generated</small>-->
    </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url('ctr_template/cargaHome'); ?>"><i class="fa fa-home"></i> Inicio</a></li>
        <li class="active">Actividades Difusión</li>
        <li class="active">Programar</li>
    </ol>
</section>

<br/>

<!-- Main content -->
<section class="content">

    <div class="col-xs-12 text-right">
        <button type="button" id="btn_agregar_eventos" class="btn btn-azul-modal pull-right">Agregar Programación</button>
    </div>

    <br/> <br/> <br/> 
    <!-- Profile Image -->
    <div class="box box-default">
        <div class="box-body">
            <!-- Datatable -->
            <div id="tabla_reporte" class="container-fluid"></div>
            <!-- /.Datatable -->
        </div>
        <!-- /.box-body -->
    </div>
    <!-- /.box -->

    <!--    <div class="box box-default">
            <div class="box-header"></div>-->        

    <!--</div>-->
    <!-- /.box -->

</section>

<div class="modal fade" id="modal_eventos">
    <div class="modal-dialog modal-lg">
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
