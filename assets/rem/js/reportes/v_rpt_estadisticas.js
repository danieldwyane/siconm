/*
 Evento document ready
 */
$(document).ready(function () {

    $.fn.total_encuesta();
    $.fn.total_operador();
    $.fn.eventos();
}); //Fin del evento document ready
/********************************/

/*
 Función donde se declaran todos los eventos
 */
$.fn.eventos = function () {

    /*
     Evento click sobre el botón .btn_cargar_fideicomiso
     */
    $('#btn_carga_masiva').unbind('click');
    $('#btn_carga_masiva').click(function () {

        var formulario = document.getElementById('form_carga_masiva').checkValidity();
        //Evaluo si el formulario es válido
        if (formulario == true) {

            $.fn.subir_archivo();
//            $.fn.carga_masiva();
        } else {

            //Muestro los mensajes de error
            $('#form_carga_masiva').validator('validate');
            $.fn.eventos();
        }//Fin del if

    }); //Fin del evento click
    /***********************/

    /*
     Evento click sobre el botón .btn_cargar_fideicomiso
     */
    $('#iniciar_operativo').unbind('click');
    $('#iniciar_operativo').click(function () {

        $.fn.modal_iniciar_operativo();
        $.fn.eventos();
    }); //Fin del evento click
    /***********************/

    /*
     Evento click sobre el botón .btn_cargar_fideicomiso
     */
    $('.btn_iniciar_operativo').unbind('click');
    $('.btn_iniciar_operativo').click(function () {

        $.fn.iniciar_operativo();
        $.fn.eventos();
    }); //Fin del evento click
    /***********************/

}//Fin de la función $.fn.eventos
/*******************************/

/*
 Función que arma la funcion para el total encuesta
 */
$.fn.total_encuesta = function () {

    $.ajax({
        url: "<?php echo base_url(); ?>index.php/rem/c_supervisor/total_encuesta",
        type: "POST",
        dataType: "json",
        beforeSend: function (objeto) {

            $('#real, #retira, #faltan').html('');
        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            //Seteamos valores
            $('#real').html(data[0]['realizados']);
            $('#retira').html(data[0]['faltantes']);
            $('#faltan').html(data[0]['retirados']);
            $('#real').animateNumber({number: data[0]['realizados']});
            $('#retira').animateNumber({number: data[0]['faltantes']});
            $('#faltan').animateNumber({number: data[0]['retirados']});
            //Función donde se declaran todos los eventos
            $.fn.eventos();
        }//Fin del success

    }); //Fin del ajax

}//Fin de la función $.fn.chequear_cant_mercado()
/***********************************************/

$.fn.total_operador = function () {

    $.ajax({
        url: "<?php echo base_url(); ?>index.php/rem/c_supervisor/total_operador",
        type: "POST",
        dataType: "json",
        beforeSend: function (objeto) {

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (resp) {

            var op = resp['operador'];
            
            var fecha = resp['operador'][0]['fecha'];

            Highcharts.chart('pie_operador', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
//            text: 'Browser market shares January, 2015 to May, 2015'
                    text: 'Total Por Cajero, '+fecha
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.y}',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    }
                },
                series: [{
                        name: 'Operadores',
                        colorByPoint: true,
                        data: op
                    }]
            });
            //Función donde se declaran todos los eventos
            $.fn.eventos();
        }//Fin del success

    }); //Fin del ajax

}//Fin de la función $.fn.chequear_cant_mercado()
/***********************************************/