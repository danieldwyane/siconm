<style type="text/css">
<?php include_once "assets/rem/css/v_estilos.css"; ?>
</style>

<script type="text/javascript">
<?php include_once "assets/rem/js/registro/v_form_crear_usuario.js"; ?>
</script>

<br>

<!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        Crear Usuario
        <!--<small>Reports of coupons generated</small>-->
    </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url('ctr_template/cargaHome'); ?>"><i class="fa fa-home"></i> Inicio</a></li>
        <li class="active">Usuario</li>
        <li class="active">Crear Usuario</li>
    </ol>
</section>

<!-- Main content -->
<section class="content">
    <br />

    <div class="box box-default">
        <div class="box-header with-border">
            <h3 class="box-title">Ingresar Usuario Emergente</h3>
        </div>

        <!-- form start -->
        <form id="frm_registrarse" name="frm_registrarse" class="form-horizontal" role="form" data-toggle="validator">

            <div class="box-body">

                <div class="form-group">
                    <label class="col-sm-2 control-label">Usuario</label>
                    <div class="col-sm-8">
                        <input class="form-control text-uppercase" name="screenname" id="screenname" data-minlength="3" placeholder="Usuario" type="text" required>
                    </div>
                    <span class="col-sm-2">&nbsp;</span>
                </div>

                <div class="form-group">
                    <label class="col-sm-2 control-label">Cedula</label>
                    <div class="col-sm-8">
                        <input class="form-control text-uppercase" name="cedula" id="cedula" data-minlength="3" placeholder="Cedula" type="text" required>
                    </div>
                    <span class="col-sm-2">&nbsp;</span>
                </div>

                <div class="form-group">
                    <label class="col-sm-2 control-label">Nombre y Apellido</label>
                    <div class="col-sm-8">
                        <input class="form-control text-uppercase" name="nombre_apellido" id="nombre_apellido" data-minlength="3" placeholder="Nombre y Apellido" type="text" required>
                    </div>
                    <span class="col-sm-2">&nbsp;</span>
                </div>

                <div class="form-group">
                    <label class="col-sm-2 control-label">Tipo Empleado</label>
                    <div class="col-sm-8">
                        <input class="form-control text-uppercase" name="tipo_empleado" id="tipo_empleado" data-minlength="3" placeholder="Tipo Empleado" type="text" required>
                    </div>
                    <span class="col-sm-2">&nbsp;</span>
                </div>

                <div class="form-group">
                    <label class="col-sm-2 control-label">Nómina</label>
                    <div class="col-sm-8">
                        <input class="form-control text-uppercase" name="nomina" id="nomina" data-minlength="3" placeholder="Nómina" type="text" required>
                    </div>
                    <span class="col-sm-2">&nbsp;</span>
                </div>

                <div class="form-group">
                    <label class="col-sm-2 control-label">Compañía Física</label>
                    <div class="col-md-8">
                        <select id="com_fis" name="com_fis" class="form-control" style="width: 100%;" required>
                            <option value="">Seleccione</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-2 control-label">Departamento</label>
                    <div class="col-sm-8">
                        <input class="form-control text-uppercase" name="departamento" id="departamento" data-minlength="3" placeholder="Departamento" type="text" required>
                    </div>
                    <span class="col-sm-2">&nbsp;</span>
                </div>

                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">Correo</label>
                    <div class="col-sm-8">
                        <input class="form-control text-uppercase" name="correo" id="correo" data-minlength="3" placeholder="Correo" type="email" required>
                    </div>
                    <span class="col-sm-2">&nbsp;</span>
                </div>

                <div class="form-group">
                    <label class="col-sm-2 control-label">Teléfono</label>
                    <div class="col-sm-8">
                        <input class="form-control text-uppercase" name="telefono" id="telefono" data-minlength="3" placeholder="Teléfono" type="text" required>
                    </div>
                    <span class="col-sm-2">&nbsp;</span>
                </div>

            </div>
            <!-- /.box-body -->
            <div class="box-footer">
                <button type="submit" class="btn btn-amarillo-modal">Cancelar</button>
                <button type="button" id="btn_registrarse" class="btn btn-azul-modal pull-right">Guardar</button>
            </div>
            <!-- /.box-footer -->
        </form>

    </div>

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