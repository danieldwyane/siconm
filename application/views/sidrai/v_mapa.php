
       
<style type="text/css">
<?php include_once "assets/sidrai/css/v_estilos.css"; ?>
    <?php include_once "assets/sidrai/css/v_mapa.css"; ?>
</style>

<script type="text/javascript">
<?php include_once "assets/sidrai/js/v_mapa.js"; ?>
</script>

 <script type="text/javascript" src="https://maps.google.com/maps/api/js?key=AIzaSyDXu6NShuYaryksdxc-RZshVrooiJgqjqE &sensor=false&language=es"></script>
<!-- Content Header (Page header) -->
<section class="content-header">
    <h1 class="titulo_p">
        Actividades de Divulgación
        <!--<small>Reports of coupons generated</small>-->
    </h1>
    <ol class="breadcrumb">
        <li><a href="<?php echo site_url('ctr_template/cargaHome'); ?>"><i class="fa fa-home"></i> Inicio</a></li>
        <li class="active">Registro</li>
        <li class="active">Programar Actividades</li>
    </ol>
</section>

<br/>

    </head>
    <body>

        <!-- Contenedor de la página -->
        <div class="container-fluid">

            <!-- Capa donde se mostrará el mapa -->
            <div id="capa_mapa"></div>

            <!-- Capa donde se mostrarán los filtros de busqueda -->
            <div id="menu_mapa">

                <div class="container-fluid">

                    <select multiple="multiple"></select>

                    <div class="busqueda btn-group btn-success">
                        <div>Buscar</div>
                        <div class="fa fa-search"></div>
                    </div>

                    <div class="limpiar btn-group btn-danger">
                        <div>Limpiar mapa</div>
                        <div class="fa fa-eraser"></div>
                    </div>

                </div>

            </div>

        </div>
        <!-- Fin del contenedor de la página -->
    </body>
</html>