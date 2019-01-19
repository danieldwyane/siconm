<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Plantilla CodeIgniter 3.0</title>
        <link rel="shortcut icon" href="<?php echo base_url() ?>application/images/favicon.ico" />

        <link href="<?php echo base_url() ?>application/css/plantilla.css" type="text/css" media="screen" rel="stylesheet"/>
        <link href="<?php echo base_url() ?>application/libraries/bootstrap-3.3.5/css/bootstrap.css" type="text/css" rel="stylesheet"/>
        <link href="<?php echo base_url() ?>application/css/letra.css" type="text/css" media="screen" rel="stylesheet"/>
<!--        <link href="<?php // echo base_url() ?>application/css/superfish.css" type="text/css" media="screen" rel="stylesheet"/>-->
        <link href="<?php echo base_url() ?>application/libraries/DataTables-1.10.7/media/css/jquery.dataTables.css" type="text/css" media="screen" rel="stylesheet"/>

        <script language="javascript" type="text/javascript" src="<?php echo base_url() ?>application/libraries/DataTables-1.10.7/media/js/jquery.js"></script>
<!--        <script language="javascript" type="text/javascript" src="<?php // echo base_url() ?>application/js/superfish-2.js"></script>-->
        <script language="javascript" type="text/javascript" src="<?php echo base_url() ?>application/libraries/DataTables-1.10.7/media/js/jquery.dataTables.js"></script>
        <script language="javascript" type="text/javascript" src="<?php echo base_url()?>application/libraries/bootstrap-3.3.5/js/bootstrap.min.js"></script>

        <script type="text/javascript">

            $(document).ready(function() {
                var cont = $("#contenido");
                //$('ul.sf-menu').superfish();

                /*var urlBandeja = "<?php //echo base_url() ?>index.php/ctrl_bandejaFormulacion/";*/
                $("#menuapp .interno").on("click",function(){
//                    alert("Selecciono Reporte Total");
//                    var pagina = $(this).attr("href");
//                    var x = $("#contenido");
                    $("#contenido").load($(this).attr("href"));
                    return false;
                });
            });


//            function presionEnlaces() {
//                var pagina = $(this).attr("href");
//                var x = $("#contenido");
//                x.load(pagina);
//                return false;
//            }

        </script>

    </head>
    <body>

        <div class="container-fluid">
        <div id="sombra" style="border-radius: 20px 20px 20px 20px;">
            <div id="raiz_login" style="border-radius: 20px 20px 20px 20px;">
                <div id="sistema" style="border-radius: 20px 20px 0px 0px;">
                    <img style="border-radius: 20px 20px 0px 0px;" src="<?php echo base_url() ?>application/images/mcbe.png" height="100%" width="100%" class="img-responsive"/>
                </div>
                <div id="menu">
                    <?php $this->load->view("v_menu"); ?>
                </div>

                <div id="contenido">

                </div>
                
                <div id="pie" style="border-radius: 0px 0px 20px 20px;">
                    <p class="EstiloPie">
                        <br />
                        &copy; <?php date_default_timezone_set('GMT'); echo date("Y"); ?> Ministerio del Poder Popular para la Alimentaci&oacute;n
                        <br />
                        Av. Andr&eacute;s Bello, Edificio Las Fundaciones, Caracas
                        <br />
                        Tel&eacute;fonos: (0212)3957474 / 0500-MINPAL(646725)-1
                        <br />
                        RIF: G-20004327-0
                    </p>
                </div>
            </div>
        </div>
        </div>
    </body>
</html>