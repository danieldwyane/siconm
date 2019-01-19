//Variables globales

/*
 Evento document ready
 */
$(document).ready(function () {
    var session = $.fn.valor_cookie('ID_USUARIO');
//    alert(session);

    $.fn.menu_lateral();
});/*Fin del document ready*/
/***************************/

$.fn.menu_lateral = function () {
//alert('bat');
    var id_modulo = null;
    var menu = '';
    //var base_url = "<?php echo base_url();";
    var base_url = window.location.origin;
    //alert(base_url);
    //Limpiamos el contenedor del menú
//    $('#sidebar-menu').html('');

    $.ajax({
        url: '/siconm/index.php/intranet/c_intranet/verificar_session/',

        //url: "intranet/c_intranet/verificar_session/",
        type: 'POST',
        //async: false,
        dataType: 'json',

        success: function (data) {
            
            //////////////////////////////////
            $(data['PERMISOS']).each(function (index, elemento) {

                //Verificamos si no existe el módulo
                if (elemento['id_modulo'] != id_modulo) {

                    //Evaluo si no es el primero
                    if (index > 0) {

                        menu += '</ul>';
                        menu += '</li>';

                    }//Fin del if

                    menu += '<li class="treeview">';
                    menu += '<a href="#">';
                    menu += '<i class="' + elemento['icono_modulo'] +' '+ elemento['id_modulo'] + '"></i><span>' + elemento['nombre_modulo'] + '</span>';
                    menu += '<span class="pull-right-container">';
                    menu += '<i class="fa fa-angle-left pull-right"></i>';
                    menu += '</span>';
                    menu += '</a>';
                    menu += '<ul class="treeview-menu">';
//                    menu += '<li class="active"><a href=""><i class="fa fa-circle-o"></i> Asociar Producto</a></li>';
//                    menu += '<li class="active"><a href=""><i class="fa fa-circle-o"></i> Catálogo Fotos</a></li>';
//                    menu += '</ul>';
//                    menu += '</li>';

//                        menu += '<li id="' + elemento['id_modulo'] + '" class="modulo">';
//                        menu += '  <div>';
//                        menu += '    <span class="icono_modulo ' + elemento['icono_modulo'] + '" aria-hidden="true"></span>';
//                        menu += '    <span>' + elemento['nombre_modulo'] + '</span>';
//                        menu += '    <span class="fa fa-caret-down" aria-hidden="true"></span>';
//                        menu += '  </div>';

                    //Seteamos el id_modulo
                    id_modulo = elemento['id_modulo'];

                }//Fin del if

                //Armamos los menús
//                menu += '<ul>';
                menu += '<li class="active ' + elemento['id_menu'] + '"><a href="'+base_url+'/' + elemento['ruta_menu'] + '"><i class="fa fa-circle-o"></i>' + elemento['nombre_menu'] + '</a></li>';
//                menu += '  <li id="' + elemento['id_menu'] + '" href="' + elemento['ruta_menu'] + '" class="menu">' + elemento['nombre_menu'] + '</li>';
//                menu += '</ul>';
//                menu += '</li>';

            });//Fin del each

//            menu += '</li>';

            //Mostramos los menús
            $('#sidebar-menu').append(menu);
            //////////////////////////////////
        }//Fin del success

    });//Fin del ajax	


//    var menu = '';
//
//    menu += '<li class="treeview">';
//    menu += '<a href="#">';
//    menu += '<i class="fa fa-file-text"></i><span>Productos</span>';
//    menu += '<span class="pull-right-container">';
//    menu += '<i class="fa fa-angle-left pull-right"></i>';
//    menu += '</span>';
//    menu += '</a>';
//    menu += '<ul class="treeview-menu">';
//    menu += '<li class="active"><a href=""><i class="fa fa-circle-o"></i> Asociar Producto</a></li>';
//    menu += '<li class="active"><a href=""><i class="fa fa-circle-o"></i> Catálogo Fotos</a></li>';
//    menu += '</ul>';
//    menu += '</li>';
//    
//    menu += '<li class="treeview">';
//    menu += '<a href="#">';
//    menu += '<i class="fa fa-file-text"></i><span>Solicitud</span>';
//    menu += '<span class="pull-right-container">';
////    menu += '<i class="fa fa-angle-left pull-right"></i>';
//    menu += '</span>';
//    menu += '</a>';
//    menu += '<ul class="treeview-menu">';
//    menu += '</ul>';
//    menu += '</li>';
//    
//    menu += '<li class="treeview">';
//    menu += '<a href="#">';
//    menu += '<i class="fa fa-file-text"></i><span>Documentos</span>';
//    menu += '<span class="pull-right-container">';
////    menu += '<i class="fa fa-angle-left pull-right"></i>';
//    menu += '</span>';
//    menu += '</a>';
//    menu += '<ul class="treeview-menu">';
//    menu += '</ul>';
//    menu += '</li>';
//        
//    menu += '<li class="treeview">';
//    menu += '<a href="#">';
//    menu += '<i class="fa fa-file-text"></i><span>Catálogo</span>';
//    menu += '<span class="pull-right-container">';
//    menu += '<i class="fa fa-angle-left pull-right"></i>';
//    menu += '</span>';
//    menu += '</a>';
//    menu += '<ul class="treeview-menu">';
//    menu += '<li class="active"><a href=""><i class="fa fa-circle-o"></i> Organismo</a></li>';
//    menu += '<li class="active"><a href=""><i class="fa fa-circle-o"></i> Productos</a></li>';
//    menu += '<li class="active"><a href=""><i class="fa fa-circle-o"></i> Presentaciones</a></li>';
//    menu += '<li class="active"><a href=""><i class="fa fa-circle-o"></i> Unidad Medida</a></li>';
//    menu += '<li class="active"><a href=""><i class="fa fa-circle-o"></i> Países</a></li>';
//    menu += '<li class="active"><a href=""><i class="fa fa-circle-o"></i> Moneda</a></li>';
//    menu += '</ul>';
//    menu += '</li>';
//    
//    menu += '<li class="treeview">';
//    menu += '<a href="#">';
//    menu += '<i class="fa fa-file-text"></i><span>Administrador</span>';
//    menu += '<span class="pull-right-container">';
//    menu += '<i class="fa fa-angle-left pull-right"></i>';
//    menu += '</span>';
//    menu += '</a>';
//    menu += '<ul class="treeview-menu">';
//    menu += '<li class="active"><a href=""><i class="fa fa-circle-o"></i> Menú</a></li>';
//    menu += '<li class="active"><a href=""><i class="fa fa-circle-o"></i> Módulo</a></li>';
//    menu += '<li class="active"><a href=""><i class="fa fa-circle-o"></i> Rol</a></li>';
//    menu += '<li class="active"><a href=""><i class="fa fa-circle-o"></i> Sistema</a></li>';
//    menu += '</ul>';
//    menu += '</li>';
//
//    //Mostramos los menús
//    $('#sidebar-menu').append(menu);

}

/*
 Función que arma el menú según el usuario
 */
$.fn.menu_intranet = function (data, btn_regresar) {

    //Inicializamos variables
    var id_modulo = null;
    var menu = '';

    //Limpiamos el contenedor del menú
    $('#menu').html('');

    //Evaluo si tiene que existir el botón de regresar
    //para mostrar los módulos de la intranet
    if (btn_regresar == 1) {

        //Remuevo el botón #restablecer_intranet si existe
        $('#menu_arriba #restablecer_intranet').remove();

        //Muestro el botón #restablecer_intranet
        $('#menu_arriba .fa-bars').after('<i id="restablecer_intranet" class="fa fa-arrow-circle-left" aria-hidden="true" title="Regresar" data-toggle="tooltip" data-placement="bottom"></i>');

    } else {

        //Oculto el tooltips
        $('[data-toggle="tooltip"]').tooltip('hide');

        //Remuevo el botón #restablecer_intranet
        $('#menu_arriba #restablecer_intranet').remove();

    }//Fin del if btn_regresar

    //Muestro el icono del sistema
    //$('#menu_izquierda .icono_sistema').addClass(data[0]['ICONO_SISTEMA']);

    //Evaluo el n° de módulos
    if (data.length > 0) {

        //Muestro el nombre del sistema
        $('.titulo_menu .nombre_sistema').html('');
        $('.titulo_menu .nombre_sistema').append('<div>' + data[0]['nombre_sistema'] + '</div>');

        //Evaluo la altura
        if ($('.titulo_menu .nombre_sistema > div').height() > 40) {

            //Seteamos el css
            $('.titulo_menu, .titulo_menu .nombre_sistema').css({'height': '50px'});
            $('.titulo_menu .nombre_sistema').css({'line-height': '25px'});
            $('.titulo_menu > div:nth-child(1)').css({'margin-top': '4px'});

        } else {

            //Seteamos el css
            $('.titulo_menu, .titulo_menu .nombre_sistema').css({'height': '40px'});
            $('.titulo_menu .nombre_sistema').css({'line-height': '36px'});
            $('.titulo_menu > div:nth-child(1)').css({'margin-top': '0px'});

        }//Fin del if

        //Recorremos para armar el módulo
        $(data).each(function (index, elemento) {

            //Verificamos si no existe el módulo
            if (elemento['id_modulo'] != id_modulo) {

                //Evaluo si no es el primero
                if (index > 0) {

                    menu += '</li>';

                }//Fin del if

                //Evaluamos si el módulo es pronto a ser lanzado
                if (elemento['pronto'] == 'S') {

                    menu += '<li id="' + elemento['id_modulo'] + '">';
                    menu += '  <div>';
                    menu += '    <span class="icono_modulo ' + elemento['icono_modulo'] + '" aria-hidden="true"></span>';
                    menu += '    <span>' + elemento['nombre_modulo'] + '</span>';
                    menu += '    <span class="fa fa-caret-down" aria-hidden="true"></span>';
                    menu += '    <div class="msj_pronto">Pronto</div>';
                    menu += '  </div>';

                } else {

                    //Evaluamos si es nuevo el módulo
                    if (elemento['nuevo'] == 'S') {

                        menu += '<li id="' + elemento['id_modulo'] + '" class="modulo">';
                        menu += '  <div>';
                        menu += '    <span class="icono_modulo ' + elemento['icono_modulo'] + '" aria-hidden="true"></span>';
                        menu += '    <span>' + elemento['nombre_modulo'] + '</span>';
                        menu += '    <span class="fa fa-caret-down" aria-hidden="true"></span>';
                        menu += '  <div class="msj_nuevo">Nuevo</div>';
                        menu += '  </div>';

                    } else {

                        menu += '<li id="' + elemento['id_modulo'] + '" class="modulo">';
                        menu += '  <div>';
                        menu += '    <span class="icono_modulo ' + elemento['icono_modulo'] + '" aria-hidden="true"></span>';
                        menu += '    <span>' + elemento['nombre_modulo'] + '</span>';
                        menu += '    <span class="fa fa-caret-down" aria-hidden="true"></span>';
                        menu += '  </div>';

                    }//Fin del if elemento['nuevo']

                }//Fin del if elemento['pronto']

                //Seteamos el id_modulo
                id_modulo = elemento['id_modulo'];

            }//Fin del if

            //Armamos los menús
            menu += '<ul>';
            menu += '  <li id="' + elemento['id_menu'] + '" href="' + elemento['ruta_menu'] + '" class="menu">' + elemento['nombre_menu'] + '</li>';
            menu += '</ul>';

        });//Fin del each

        menu += '</li>';

        //Mostramos los menús
        $('#menu').append(menu);

        $('#menu_izquierda #menu > li').addClass('alerta');

    }//Fin del if

    $.fn.eventos();

}//Fin de la función menu_intranet
/********************************/

/*
 Función que obtiene el valor de una cookie
 */
$.fn.valor_cookie = function (cname) {

    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";

}//Fin de la función valor_cookie
/*******************************/