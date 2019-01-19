<!--<!DOCTYPE html>-->
<html lang="en">
    <head>
        <title>Login</title>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <!-- Bootstrap 3.3.6 -->
        <link rel="stylesheet" href="<?php echo base_url() ?>assets/bootstrap/css/bootstrap.min.css">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="<?php echo base_url() ?>application/css/font-awesome.min.css">
        <!-- Ionicons -->
        <link rel="stylesheet" href="<?php echo base_url() ?>application/css/ionicons.min.css">
        <!-- Theme style -->
        <link rel="stylesheet" href="<?php echo base_url() ?>assets/dist/css/AdminLTE.min.css">
        <!-- AdminLTE Skins. Choose a skin from the css/skins
             folder instead of downloading all of them to reduce the load. -->
        <link rel="stylesheet" href="<?php echo base_url() ?>assets/dist/css/skins/_all-skins.min.css">
        <!-- iCheck -->
        <link rel="stylesheet" href="<?php echo base_url() ?>assets/plugins/iCheck/square/red.css">


        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="<?php echo base_url() ?>assets/themes/default/js/html5shiv.min.js"></script>
            <script src="<?php echo base_url() ?>assets/themes/default/js/respond.min.js"></script>
        <![endif]-->

        <!-- jQuery 2.2.3 -->
        <script src="<?php echo base_url() ?>assets/plugins/jQuery/jquery-2.2.3.min.js"></script>
        <!-- Bootstrap 3.3.6 -->
        <script src="<?php echo base_url() ?>assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="<?php echo base_url() ?>assets/bootstrap/js/validator.js"></script>
        <!-- mask -->
        <script src="<?php echo base_url() ?>assets/plugins/jQuery/jquery.mask.js"></script>
        <!-- iCheck -->
        <script src="<?php echo base_url() ?>assets/plugins/iCheck/icheck.min.js"></script>
        <script src="<?php echo base_url() ?>assets/sistemas_prueba/v_registrarse.js" type="text/javascript"></script>
        <style type="text/css">
            /*
                Estilo del icono de carga
            */
            .icono_carga{
                color:rgb(42,63,84);
                font-size:30px;
            }
        </style>
    </head>
    <body class="hold-transition register-page">
        <!--        <div class="register-box">
                    <div class="register-logo">-->
        <div class="login-box">
            <div class="login-logo">
                <a href="#"><b>Test</b>System</a>
            </div>
            <!-- /.login-logo -->
            <div class="box box-primary">
                <div class="login-box-body">

                    <p class="login-box-msg">T-Systems</p>
                    <!--                <div class="box box-primary register-box-body">
                                        <p class="login-box-msg">T-Systems</p>-->

                    <form id="frm_registrarse" name="frm_registrarse" role="form" data-toggle="validator">
                        <div class="form-group has-feedback">
                            <input name="nombre" type="text" class="form-control text-capitalize" placeholder="Full name" required>
                            <span class="glyphicon glyphicon-user form-control-feedback"></span>  
                        </div>
                        <div class="form-group has-feedback">
                            <input name="telefono" type="text" class="form-control text-capitalize telefono" placeholder="Phone Ejm: 0414-1234567" required>
                            <span class="glyphicon glyphicon-earphone form-control-feedback"></span>  
                        </div>

                        <div class="form-group has-feedback">
                            <input name="email" type="email" class="form-control text-capitalize email" placeholder="Email" required pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$">
                            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div class="form-group has-feedback">
                            <input name="password" type="password" class="form-control" placeholder="Password" required>
                            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div class="row">
                            <!--                <div class="col-xs-6">
                                                <button type="button" class="btn btn-primary btn-block btn-flat btn_iniciar_sesion">Iniciar Sesion</button>
                                            </div>-->
                            <div class="col-xs-8"></div>
                            <!-- /.col -->
                            <div class="col-xs-4">
                                <button type="button" id="btn_registrarse" class="btn btn-primary btn-block btn-flat">Sign in</button>
                            </div>
                            <!-- /.col -->
                        </div>
                        <a href="<?php echo base_url() ?>index.php/ctr_login/cargarVistaLogin/true" class="text-center">Log in</a>
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

                </div>
                <!-- /.form-box -->
            </div>
        </div>
    </body>
</html>
