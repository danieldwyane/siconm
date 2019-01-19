<style type="text/css">
<?php include_once "assets/sica/css/v_estilos.css"; ?>
</style>

<script type="text/javascript">
<?php include_once "assets/sica/js/registro/v_form_registrar_produccion.js"; ?>
</script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <h1 class="titulo_p">
        Producciones
        <!--<small>Reports of coupons generated</small>-->
    </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url('ctr_template/cargaHome'); ?>"><i class="fa fa-home"></i> Inicio</a></li>
        <li class="active">Registro</li>
        <li class="active">Registrar Producción</li>
    </ol>
</section>

<!-- Main content -->
<section class="content">
    <div class="col-xs-12 text-right">
        <button type="button" id="btn_crear_distribucion" class="btn btn-azul-modal pull-right">Registrar Producción</button>
    </div>

    <br/> <br/> <br/> 

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

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Launch demo modal</button>
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>

                </button>
                <h4 class="modal-title" id="myModalLabel">Modal title</h4>

            </div>
            <div class="modal-body">
                <div role="tabpanel">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active"><a href="#uploadTab" aria-controls="uploadTab" role="tab" data-toggle="tab">Upload</a>

                        </li>
                        <li role="presentation"><a href="#browseTab" aria-controls="browseTab" role="tab" data-toggle="tab">Browse</a>

                        </li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane active" id="uploadTab">upload Tab</div>
                        <div role="tabpanel" class="tab-pane" id="browseTab">browseTab</div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary save">Save changes</button>
            </div>
        </div>
    </div>
</div>
