<style>
    /*
        Estilo del icono de carga
    */
    .icono_carga{
        color:rgb(42,63,84);
        font-size:30px;
    }
</style>
<script type="text/javascript">
<?php
include_once "assets/sistemas_prueba/v_establecimiento.js";
?>
</script>
<!--<div class="container-fluid">-->
<!--<fieldset>-->
<!--<div class="register-box">
    <div class="register-logo">
        <a href="#"><b>Admin</b>LTE</a>
    </div>

    <div class="register-box-body">

        <p class="login-box-msg">Register a new membership</p>-->

<div class="login-box">
    <div class="login-logo">
        <a href="#"><b>Test</b>System</a>
    </div>
    <!-- /.login-logo -->
    <div class="box box-primary">
        <div class="login-box-body">

            <p class="login-box-msg">T-Systems</p>

            <form id="frm_establecimiento" name="frm_establecimiento" data-toggle="validator">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Establishment</label>
                            <select id="establecimiento" name="establecimiento" class="form-control" style="width: 100%;" required>
                                <option selected="selected"></option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="form-group has-feedback">
                    <label>Description</label>
                    <input id="descripcion" name="descripcion" type="text" class="form-control" readonly>
                    <!--<span class="glyphicon glyphicon-user form-control-feedback"></span>-->
                </div>

                <br>
                <div class="row">
                    <div class="col-xs-6"></div>
                    <!-- /.col -->
                    <div class="col-xs-6">
                        <button type="button" id="btn_establecimiento" class="btn btn-primary btn-block btn-flat">Generate coupon</button>
                    </div>
                    <!-- /.col -->
                </div>
            </form> 

            <div class="modal modal-info fade" id="modal-info">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <!--                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>-->
                            <h4 class="modal-title"></h4>
                        </div>
                        <div class="modal-body"></div>
                        <div class="modal-footer">
                            <!--                        <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-outline">Save changes</button>-->
                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <!-- /.modal -->

        </div>
        <!-- /.form-box -->
    </div>
</div>

