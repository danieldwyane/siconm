<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <?php
        //CSS principal de Datatable
        echo css_asset('dataTables.bootstrap.min.css', 'DataTables-1.10.12/media');
        //CSS principal de Bootstrap
        echo css_asset('bootstrap.min.css', 'bootstrap-3.3.7');
        //CSS principal del Font-awesome
        echo css_asset('font-awesome.min.css', 'font-awesome-4.6.3');
        //CSS principal de para el DateTimePicker
        echo css_asset('bootstrap-datetimepicker.min.css', 'bootstrap-datetimepicker/build');
        //CSS propio de la vista
        echo css_asset('carga_masiva/v_form_frecuencia_despacho.css', 'clap');

        //JS principal de Jquery
        echo js_asset('jquery-2.2.4.min.js', 'jquery');
        //JS principal de Bootstrap
        echo js_asset('bootstrap.min.js', 'bootstrap-3.3.7');
        //JS para validar el formulario
        echo js_asset('validator.js', 'bootstrap-3.3.7');
        //JS principal del Datatable
        echo js_asset('jquery.dataTables.min.js', 'DataTables-1.10.12/media');
        echo js_asset('dataTables.bootstrap.min.js', 'DataTables-1.10.12/media');
        //JS principal de Moment
        echo js_asset('moment.min.js', 'moment/min');
        echo js_asset('es.js', 'moment/locale');
        //JS principal de para el DateTimePicker
        echo js_asset('bootstrap-datetimepicker.min.js', 'bootstrap-datetimepicker/build');
        //Js para dar formato numerico
        echo js_asset('autoNumeric-min.js', 'autoNumeric');
        //JS propio de la vista
        echo js_asset('carga_masiva/v_form_frecuencia_despacho.js', 'clap');
        ?>
    </head>
    <body>

        <div id="capa_formulario" class="container-fluid">
            <div class="row row-centered">
                <div class="col-md-12 col-centered">

                    <form id="form_nuevo_mercado" role="form" data-toggle="validator">
                        <fieldset>
                            <legend> <h2 class=text-primary>Frecuencia de Despacho</h2></legend>


                            <div id="capa_productos_mercado" class="container-fluid">
                                <table id="productos_mercado" class="table table-striped" cellspacing="0" width="100%">
                                    <thead>
                                        <tr>
                                            <th style="text-align: center">Cédula</th>
                                            <th style="text-align: center">Nombres</th>
                                            <th style="text-align: center">Asociar Todos</th>
                                        </tr>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th><input id="check_todos" type="checkbox"/></th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>

                                </table>

                            </div>

                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <button id="crear_mercado" type="button" class="btn btn-success" >Crear Mercado</button>    
                                </div>         
                            </div>

                        </fieldset>
                    </form>

                </div>
            </div>
        </div>

        <!-- Ventana Modal -->
        <div id="modal" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header"></div>
                    <div class="modal-body"></div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        </div>
        <!-- Fin de mi ventana modal -->

    </body>
</html>     

