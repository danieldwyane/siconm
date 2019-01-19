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
        <!-- Theme style -->
        <link rel="stylesheet" href="<?php echo base_url() ?>assets/rem/css/v_estilos.css">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="<?php //echo base_url()   ?>assets/themes/default/js/html5shiv.min.js"></script>
            <script src="<?php //echo base_url()   ?>assets/themes/default/js/respond.min.js"></script>
        <![endif]-->

        <!-- jQuery 2.2.3 -->
        <script src="<?php echo base_url() ?>assets/plugins/jQuery/jquery-2.2.3.min.js"></script>
        <!-- Bootstrap 3.3.6 -->
        <script src="<?php echo base_url() ?>assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="<?php echo base_url() ?>assets/bootstrap/js/validator.js"></script>
        <!-- iCheck -->
        <script src="<?php echo base_url() ?>assets/plugins/iCheck/icheck.min.js"></script>

        <script>
            $(document).ready(function () {

                //Reseteamos los formulario
                $('#login')[0].reset();

                $('input').iCheck({
                    checkboxClass: 'icheckbox_square-red',
                    radioClass: 'iradio_square-red',
                    increaseArea: '20%' // optional
                });

                var val_auth = '<?php echo $error; ?>';
                if (val_auth == 'true') {
                    $("#error_auth").show('slow');
                } else {
                    $("#error_auth").hide('slow');
                }
            });
        </script>
        <style type="text/css">
            /*
                Estilo del icono de carga
            */
            .icono_carga{
                color:rgb(42,63,84);
                font-size:30px;
            }

            .login-box-body{
                border-left: 2px solid #cecece;
                border-right: 2px solid #cecece;
                box-shadow: 6px 6px 0px #cecece;
            }
        </style>

    </head>
    <body>
        <!--<img src="./assets/vuce/images/cintillo_vuce.png" class="img-responsive"/>-->
        <img src="<?php echo base_url() ?>application/images/banner_minerales.png" class="img-responsive" style="width: 1700px;"/>

<!--<img src="<?php //echo base_url()   ?>application/images/cintillo-juventud.png" class="img-responsive" style="width: 1700px;" />-->
        <div class="login-box">
            <div class="login-logo">
                <img src="<?php echo base_url() ?>application/images/emblema_bcv2.png"/>
            </div>
            <!-- /.login-logo -->
            <div class="box box-default">
                <div class="login-box-body">

                    <!--<p class="login-box-msg">Ingrese sus datos</p>-->

                    <form action="<?php echo base_url() ?>index.php/ctr_login/logonBd" method="post" id="login" name="login" data-toggle="validator">
                        <div class="form-group has-feedback">
                            <input type="usuario" class="form-control" placeholder="Ingrese su usuario" id="usuario" name="usuario" required>
                            <span class="glyphicon glyphicon-user form-control-feedback"></span>
                        </div>
                        <div class="form-group has-feedback">
                            <input type="password" class="form-control" placeholder="Contraseña" id="clave" name="clave" required>
                            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div class="row">
                            <div class="col-xs-3"></div>                            
                            <!-- /.col -->
                            <div class="col-xs-6">
                                <button type="submit" class="btn btn-azul btn-block btn-flat btn_enviar">Iniciar Sesión</button>
                            </div>
                            <!-- /.col -->
                            <div class="col-xs-3"></div>                            
                            <!-- /.col -->
                        </div>
                        <!--<a href="<?php //echo base_url() ?>index.php/ctr_login/registrarse/" class="text-center text-danger">Crear una nueva cuenta</a>-->
                    </form>
                    <br>

                    <div class="alert alert-cuadro alert-dismissible" id="error_auth" align="center" style="display: none;">
                        <i class="icon fa fa-ban"></i>
                        Por favor inicie sesión con un usuario admitido
                    </div>
                </div>
            </div>
            <!-- /.login-box-body -->
        </div>
        <!-- /.login-box -->
    </body>
</html>