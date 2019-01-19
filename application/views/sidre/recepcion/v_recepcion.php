<style type="text/css">
<?php include_once "assets/rem/css/v_estilos.css"; ?>
</style>

<script type="text/javascript">
<?php include_once "assets/sidre/js/recepcion/v_recepcion.js"; ?>
</script>

<br>

<!-- Content Header (Page header) -->
<section class="content-header">
    <h1 class="titulo_p">
        Recepción
        <!--<small>Reports of coupons generated</small>-->
    </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url('ctr_template/cargaHome'); ?>"><i class="fa fa-home"></i> Inicio</a></li>
        <li class="active">Banco</li>
        <li class="active">Recepcionar</li>
    </ol>
</section>

<!-- Main content -->
<section class="content">
    <br />

    <div class="col-sm-12 col-centered capa_iniciar_operativo">
        <div class="col-xs-12 col-lg-12 text-right">
            <button type="button" class="btn btn-azul-modal" id="iniciar_operativo">Iniciar Operativo</button>
        </div>
    </div>

    <div class="box box-default capa_carga_masiva">
        <div class="box-header with-border">
            <h3 class="box-title">Carga Masiva</h3>
        </div>
        <form id="form_carga_masiva" class="form-horizontal" role="form" data-toggle="validator">

            <div class="box-body">

                <div class="col-sm-6 form-group">
                    <input id="carga_masiva" name="carga_masiva" type="file" data-show-preview="false" required>
                    <div class="help-block with-errors"></div>
                </div>
            </div>
            <!--Fin de la clase box-body--> 

            <div class="box-footer">
                <div class="col-sm-12 form-group"> 
                    <button type="button" id="btn_carga_masiva" class="btn btn-azul btn_carga_masiva">Procesar Archivo</button>
                </div>
            </div>
        </form>
    </div>

    <br />
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