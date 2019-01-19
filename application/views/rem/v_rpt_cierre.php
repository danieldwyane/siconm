
<style type="text/css">
<?php include_once "assets/rem/css/v_estilos.css"; ?>
</style>

<script type="text/javascript">
<?php include_once "assets/rem/js/reportes/v_rpt_cierre.js"; ?>
</script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        Listado Cierre
        <!--<small>Reports of coupons generated</small>-->
    </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url('ctr_template/cargaHome'); ?>"><i class="fa fa-home"></i> Inicio</a></li>
        <li class="active">Supervisor</li>
        <li class="active">Cierre Operativo</li>
    </ol>
</section>

<!-- Main content -->
<section class="content">
    <br />

    <!-- /.box-header -->
    <div class="box-body">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label> Opcion:</label>
                    <select id="consultar" class="form-control" style="width: 100%;">
                        <option value="">Seleccione</option>
                        <option value="1">SI</option> 
                        <option value="2">NO</option>
                        <option value="3">TODOS</option>
                    </select>
                </div>
            </div>



        </div>

        <div class="row">
            <div class="col-md-12 text-right">
                <button type="button" id="btn_generar_txt"class="btn btn-azul btn_generar_txt">Generar txt</button>
            </div>
<br />
            <div class="capa_descargar col-md-12 form-group text-right">
                <div class="text-info">Descargar</div>
                <a class="descargar" target="_blank" download>
                    <i class="fa fa-file-text" aria-hidden="true"></i>
                </a>
            </div>
<br />
            <div class="col-md-12 text-right">
                <button type="button" class="btn btn-azul" id="cerrar_operativo">Cerrar Operativo</button>
            </div>

        </div>

        <br>

        <!--<div class="row row-centered">-->
        <!--            <div class="col-sm-12 col-centered">
                        <div class="col-xs-12 col-lg-12 text-right">
                            <button type="button" class="btn btn-azul" id="cerrar_operativo">Cerrar Operativo</button>
                        </div>
                    </div>-->
        <!--</div>-->

    </div>

    <!--</div>-->
    <br>

    <!-- Profile Image -->
    <div id="tabla_reporte">
        <!--    <div class="box box-default">
                
                <div class="box-body box-profile">
                     Datatable 
                    <div id="tabla_reporte" class="container-fluid"></div>
                     /.Datatable 
                </div>
                 /.box-body 
            </div>-->
    </div>
    <!-- /.box -->

</section>

<div class="modal fade" id="modal">
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

<!--Ventana Modal--> 
<!--<div id="modal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header"></div>
            <div class="modal-body"></div>
            <div class="modal-footer"></div>
        </div>
    </div>
</div>-->
<!-- Fin de mi ventana modal -->