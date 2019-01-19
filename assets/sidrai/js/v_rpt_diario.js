/*
 Evento document ready
 */
$(document).ready(function () {

    //Caja de totales y porcentajes
    $.fn.total_personas_atendidas();
    $.fn.total_avance_difusion();
    //Cajas de planificacion y cant. de personas
    $.fn.reporte_actividades();
    $.fn.reporte_grupos();
    $.fn.reporte_zonas();
    $.fn.reporte_estados();

    $.fn.eventos();

}); //Fin del evento document ready
/********************************/

/*
 Función donde se declaran todos los eventos
 */
$.fn.eventos = function () {

}//Fin de la función $.fn.eventos
/*******************************/

$.fn.total_personas_atendidas = function () {

    $.ajax({
        url: "<?php echo base_url(); ?>sidrai/c_rpt_graficos/total_personas_atendidas",
        type: "POST",
        dataType: "json",
        beforeSend: function (objeto) {

            //Limpiamos las opciones
            $('#femenino').html('');
            $('#masculino').html('');
            $('#total').html('');

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            //Seteamos valores
            $('#femenino').html(data[0]['femenino']);
            $('#masculino').html(data[0]['masculino']);
            $('#total').html(data[0]['total']);

            var decimal_places = 2;
            var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);

            $('#femenino').animateNumber({
                number: data[0]['femenino'] * decimal_factor,
                numberStep: function (now, tween) {

                    var floored_number = Math.floor(now) / decimal_factor,
                            target = $(tween.elem);
                    //Evaluo la cantidad de decimales
                    if (decimal_places > 0) {

                        // force decimal places even if they are 0
                        floored_number = floored_number.toFixed(decimal_places);
                        // replace '.' separator with ','
                        floored_number = floored_number.toString().replace('.', ',');
                    }//Fin del if

                    var numero = floored_number.split(',');
                    var miles = numero[0];
                    var decimales = numero[1];
                    var regx = /(\d+)(\d{3})/;
                    while (regx.test(miles)) {

                        miles = miles.replace(regx, '$1' + '.' + '$2');
                    }

                    target.text(miles);
                }

            });

            $('#masculino').animateNumber({
                number: data[0]['masculino'] * decimal_factor,
                numberStep: function (now, tween) {

                    var floored_number = Math.floor(now) / decimal_factor,
                            target = $(tween.elem);
                    //Evaluo la cantidad de decimales
                    if (decimal_places > 0) {

                        // force decimal places even if they are 0
                        floored_number = floored_number.toFixed(decimal_places);
                        // replace '.' separator with ','
                        floored_number = floored_number.toString().replace('.', ',');
                    }//Fin del if

                    var numero = floored_number.split(',');
                    var miles = numero[0];
                    var decimales = numero[1];
                    var regx = /(\d+)(\d{3})/;
                    while (regx.test(miles)) {

                        miles = miles.replace(regx, '$1' + '.' + '$2');
                    }

                    target.text(miles);
                }

            });

            $('#total').animateNumber({
                number: data[0]['total'] * decimal_factor,
                numberStep: function (now, tween) {

                    var floored_number = Math.floor(now) / decimal_factor,
                            target = $(tween.elem);
                    //Evaluo la cantidad de decimales
                    if (decimal_places > 0) {

                        // force decimal places even if they are 0
                        floored_number = floored_number.toFixed(decimal_places);
                        // replace '.' separator with ','
                        floored_number = floored_number.toString().replace('.', ',');
                    }//Fin del if

                    var numero = floored_number.split(',');
                    var miles = numero[0];
                    var decimales = numero[1];
                    var regx = /(\d+)(\d{3})/;
                    while (regx.test(miles)) {

                        miles = miles.replace(regx, '$1' + '.' + '$2');
                    }

                    target.text(miles);
                }

            });

            //Función donde se declaran todos los eventos
            $.fn.eventos();
        }//Fin del success

    }); //Fin del ajax

}//Fin de la función $.fn.total_personas_atendidas()
/***********************************************/

$.fn.total_avance_difusion = function () {

    $.ajax({
        url: "<?php echo base_url(); ?>sidrai/c_rpt_graficos/total_avance_difusion",
        type: "POST",
        dataType: "json",
        beforeSend: function (objeto) {

            //Limpiamos las opciones
            $('#zona').html('');
            $('#instituciones').html('');
            $('#comunidades').html('');
            $('#educacion').html('');

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            var fin_zona = data[0]['fin_zona'];
            var prog_zona = data[0]['prog_zona'];
            var fin_inst = data[0]['fin_inst'];
            var prog_inst = data[0]['prog_inst'];
            var fin_com = data[0]['fin_com'];
            var prog_com = data[0]['prog_com'];
            var fin_educ = data[0]['fin_educ'];
            var prog_educ = data[0]['prog_educ'];

            var zona = Math.trunc(((fin_zona / prog_zona) * 100));
            var instituciones = Math.trunc(((fin_inst / prog_inst) * 100));
            var comunidades = Math.trunc(((fin_com / prog_com) * 100));
            var educacion = Math.trunc(((fin_educ / prog_educ) * 100));

            //Seteamos valores
            $('#zona').html(zona + '%');
            $('#instituciones').html(instituciones + '%');
            $('#comunidades').html(comunidades + '%');
            $('#educacion').html(educacion + '%');

            //Función donde se declaran todos los eventos
            $.fn.eventos();
        }//Fin del success

    }); //Fin del ajax

}//Fin de la función $.fn.total_avance_difusion()
/***********************************************/

$.fn.reporte_actividades = function () {

    $.ajax({
        url: "<?php echo base_url(); ?>sidrai/c_rpt_graficos/reporte_actividades",
        type: "POST",
        dataType: "json",
        beforeSend: function (objeto) {

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            var fecha = '22/04/2018';

//            alert(Object.entries(data['planif_actividades'][2]['data']['value']));

//            var obj_nombre_act = data['nombre_actividades'][0]['data'];
            var obj_finalizadas = data['planif_actividades'][0]['data'];
            var obj_pautadas = data['planif_actividades'][1]['data'];

//            var data_nombre_act = JSON.parse(obj_nombre_act);
            var data_finalizadas = JSON.parse(obj_finalizadas);
            var data_pautadas = JSON.parse(obj_pautadas);

            Highcharts.chart('det_planif_actividades', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Total Actividades, ' + fecha
                },
                xAxis: {
                    categories: ['Charla', 'Encuentro', 'Evento', 'Taller', 'Otro']
//                    categories: obj_nombre_act
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Cantidad de Actividades'
                    },
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.x + '</b><br/>' +
                                this.series.name + ': ' + this.y + '<br/>' +
                                'Total: ' + this.point.stackTotal;
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal'
                    },
                },
                credits: {
                    enabled: false
                },
                series: [{
                        name: 'Pautadas',
                        data: data_pautadas,
                        stack: 'pautadas',
                        color: '#3277b3'
                    }, {
                        name: 'Finalizadas',
                        data: data_finalizadas,
                        stack: 'finalizadas',
                        color: '#00cc44'
                    }]
            });

            //Obtenemos el valor
            var pers_actividades = data['pers_actividades'];

            // Create the chart
            Highcharts.chart('det_pers_actividades', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Total Personas Atendidas, ' + fecha
                },
                subtitle: {
//                    text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'Cantidad De Personas Atendidas'
                    }

                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.y}</b>',
//                            '{point.y:.1f}%'
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
//                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
                },
                series: [{
                        name: 'Porcentaje',
                        colorByPoint: true,
                        data: pers_actividades
                    }]
            });

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success

    }); //Fin del ajax

}//Fin de la función $.fn.reporte_actividades()
/*********************************************/

$.fn.reporte_grupos = function () {

    $.ajax({
        url: "<?php echo base_url(); ?>sidrai/c_rpt_graficos/reporte_grupos",
        type: "POST",
        dataType: "json",
        beforeSend: function (objeto) {

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            var fecha = '22/04/2018';

//            alert(Object.entries(data['planif_actividades'][2]['data']['value']));

//            var obj_nombre_act = data['nombre_actividades'][0]['data'];
            var obj_finalizadas = data['planif_grupos'][0]['data'];
            var obj_pautadas = data['planif_grupos'][1]['data'];

//            var data_nombre_act = JSON.parse(obj_nombre_act);
            var data_finalizadas = JSON.parse(obj_finalizadas);
            var data_pautadas = JSON.parse(obj_pautadas);

            Highcharts.chart('det_planif_grupos', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Total Grupos, ' + fecha
                },
                xAxis: {
                    categories: ['Sector Público', 'Sector Privado', 'Comunidad Organizada', 'Comunidad Organizada - Indígena', 'Sector Educación - Básico(En todas sus modalidades)', 'Sector Educación - Universitario']
//                    categories: obj_nombre_act
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Cantidad de Actividades'
                    },
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.x + '</b><br/>' +
                                this.series.name + ': ' + this.y + '<br/>' +
                                'Total: ' + this.point.stackTotal;
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal'
                    },
                },
                credits: {
                    enabled: false
                },
                series: [{
                        name: 'Pautadas',
                        data: data_pautadas,
                        stack: 'pautadas',
                        color: '#3277b3'
                    }, {
                        name: 'Finalizadas',
                        data: data_finalizadas,
                        stack: 'finalizadas',
                        color: '#00cc44'
                    }]
            });

            var pers_grupos = data['pers_grupos'];

            // Create the chart
            Highcharts.chart('det_pers_grupos', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Total Personas Atendidas, ' + fecha
                },
                subtitle: {
//                    text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'Cantidad De Personas Atendidas'
                    }

                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.y}</b>',
//                            '{point.y:.1f}%'
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
//                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
                },
                series: [{
                        name: 'Porcentaje',
                        colorByPoint: true,
                        data: pers_grupos
                    }],
            });

            //Obtenemos el valor
//            var pers_grupos = data['pers_grupos'];
//
//            Highcharts.chart('det_pers_grupos', {
//                chart: {
//                    plotBackgroundColor: null,
//                    plotBorderWidth: null,
//                    plotShadow: false,
//                    type: 'pie'
//                },
//                title: {
////            text: 'Browser market shares January, 2015 to May, 2015'
//                    text: 'Total Por Region, ' + fecha
//                },
//                tooltip: {
//                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//                },
//                plotOptions: {
//                    pie: {
//                        allowPointSelect: true,
//                        cursor: 'pointer',
//                        dataLabels: {
//                            enabled: true,
//                            format: '<b>{point.name}</b>: {point.y}',
//                            style: {
//                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
//                            }
//                        }
//                    }
//                },
//                credits: {
//                    enabled: false
//                },
//                series: [{
//                        name: 'Porcentaje',
//                        colorByPoint: true,
//                        data: pers_grupos
//                    }]
//            });

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success

    }); //Fin del ajax

}//Fin de la función $.fn.reporte_grupos()
/***********************************************/


$.fn.reporte_zonas = function () {

    $.ajax({
        url: "<?php echo base_url(); ?>sidrai/c_rpt_graficos/reporte_zonas",
        type: "POST",
        dataType: "json",
        beforeSend: function (objeto) {

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            var fecha = '22/04/2018';

//            alert(Object.entries(data['planif_actividades'][2]['data']['value']));

//            var obj_nombre_act = data['nombre_actividades'][0]['data'];
            var obj_finalizadas = data['planif_zonas'][0]['data'];
            var obj_pautadas = data['planif_zonas'][1]['data'];

//            var data_nombre_act = JSON.parse(obj_nombre_act);
            var data_finalizadas = JSON.parse(obj_finalizadas);
            var data_pautadas = JSON.parse(obj_pautadas);

            Highcharts.chart('det_planif_zonas', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Total por zonas geográficas, ' + fecha
                },
                xAxis: {
                    categories: ['Capital', 'Central', 'Llanos', 'Occidental', 'Oriental', 'Sur']
//                    categories: obj_nombre_act
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Cantidad de zonas atendidas'
                    },
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.x + '</b><br/>' +
                                this.series.name + ': ' + this.y + '<br/>' +
                                'Total: ' + this.point.stackTotal;
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal'
                    },
                },
                credits: {
                    enabled: false
                },
                series: [{
                        name: 'Pautadas',
                        data: data_pautadas,
                        stack: 'pautadas',
                        color: '#3277b3'
                    }, {
                        name: 'Finalizadas',
                        data: data_finalizadas,
                        stack: 'finalizadas',
                        color: '#00cc44'
                    }]
            });

            var pers_zonas = data['pers_zonas'];

            Highcharts.chart('det_pers_zonas', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
//            text: 'Browser market shares January, 2015 to May, 2015'
                    text: 'Total por zonas geográficas, ' + fecha
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
                credits: {
                    enabled: false
                },
                series: [{
                        name: 'Porcentaje',
                        colorByPoint: true,
                        data: pers_zonas
                    }]
            });

            //Función donde se declaran todos los eventos
            $.fn.eventos();

        }//Fin del success

    }); //Fin del ajax

}//Fin de la función $.fn.total_region()
/**************************************/

$.fn.reporte_estados = function () {

    $.ajax({
        url: "<?php echo base_url(); ?>sidrai/c_rpt_graficos/reporte_estados",
        type: "POST",
        dataType: "json",
        beforeSend: function (objeto) {

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            var fecha = '22/04/2018';

//            alert(Object.entries(data['planif_actividades'][2]['data']['value']));

//            var obj_nombre_act = data['nombre_actividades'][0]['data'];
            var obj_finalizadas = data['planif_estados'][0]['data'];
            var obj_pautadas = data['planif_estados'][1]['data'];

//            var data_nombre_act = JSON.parse(obj_nombre_act);
            var data_finalizadas = JSON.parse(obj_finalizadas);
            var data_pautadas = JSON.parse(obj_pautadas);

            Highcharts.chart('det_planif_estados', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Total por zonas geográficas, ' + fecha
                },
                xAxis: {

                    categories: ['Distrito Capital', 'Amazonas', 'Anzoategui', 'Apure', 'Aragua', 'Barinas', 'Bolivar', 'Carabobo', 'Cojedes', 'Delta Amacuro', 'Falcon', 'Guarico', 'Lara', 'Merida', 'Miranda', 'Monagas', 'Nueva Esparta', 'Portuguesa', 'Sucre', 'Tachira', 'Trujillo', 'Yaracuy', 'Zulia', 'Vargas']
//                    categories: obj_nombre_act
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Cantidad de zonas atendidas'
                    },
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.x + '</b><br/>' +
                                this.series.name + ': ' + this.y + '<br/>' +
                                'Total: ' + this.point.stackTotal;
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal'
                    },
                },
                credits: {
                    enabled: false
                },
                series: [{
                        name: 'Pautadas',
                        data: data_pautadas,
                        stack: 'pautadas',
                        color: '#3277b3'
                    }, {
                        name: 'Finalizadas',
                        data: data_finalizadas,
                        stack: 'finalizadas',
                        color: '#00cc44'
                    }]
            });

            var pers_estados = data['pers_estados'];

            Highcharts.chart('det_pers_estados', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
//            text: 'Browser market shares January, 2015 to May, 2015'
                    text: 'Total Por Estado, ' + fecha
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
                credits: {
                    enabled: false
                },
                series: [{
                        name: 'Porcentaje',
                        colorByPoint: true,
                        data: pers_estados
                    }]
            });
            //Función donde se declaran todos los eventos
            $.fn.eventos();
        }//Fin del success

    }); //Fin del ajax

}//Fin de la función $.fn.total_estado_region()
/*********************************************/

//$.fn.data_reporte_diario = function () {
//
//    $.ajax({
//        url: "<?php echo base_url(); ?>sidrai/c_rpt_graficos/data_reporte_diario",
//        type: "POST",
//        dataType: "json",
//        beforeSend: function (objeto) {
//
//            $('#charla, #encuentro, #evento, #taller, #otro').html('');
//
//        },
//        error: function (objeto, quepaso, otroobj) {
//
//        },
//        success: function (data) {
//
////            var region = data['total_region'][0];
////            var estado = data['total_estado_region'][0];
//
//            var colors = Highcharts.getOptions().colors,
//                    categories = ['MSIE', 'Firefox', 'Chrome', 'Safari', 'Opera'],
//                    data = [{
//                            y: 56.33,
//                            color: colors[0],
//                            drilldown: {
//                                name: 'MSIE versions',
//                                categories: ['MSIE 6.0', 'MSIE 7.0', 'MSIE 8.0', 'MSIE 9.0',
//                                    'MSIE 10.0', 'MSIE 11.0'],
//                                data: [1.06, 0.5, 17.2, 8.11, 5.33, 24.13],
//                                color: colors[0]
//                            }
//                        }, {
//                            y: 10.38,
//                            color: colors[1],
//                            drilldown: {
//                                name: 'Firefox versions',
//                                categories: ['Firefox v31', 'Firefox v32', 'Firefox v33',
//                                    'Firefox v35', 'Firefox v36', 'Firefox v37', 'Firefox v38'],
//                                data: [0.33, 0.15, 0.22, 1.27, 2.76, 2.32, 2.31, 1.02],
//                                color: colors[1]
//                            }
//                        }, {
//                            y: 24.03,
//                            color: colors[2],
//                            drilldown: {
//                                name: 'Chrome versions',
//                                categories: ['Chrome v30.0', 'Chrome v31.0', 'Chrome v32.0',
//                                    'Chrome v33.0', 'Chrome v34.0',
//                                    'Chrome v35.0', 'Chrome v36.0', 'Chrome v37.0', 'Chrome v38.0',
//                                    'Chrome v39.0', 'Chrome v40.0', 'Chrome v41.0', 'Chrome v42.0',
//                                    'Chrome v43.0'],
//                                data: [0.14, 1.24, 0.55, 0.19, 0.14, 0.85, 2.53, 0.38, 0.6, 2.96,
//                                    5, 4.32, 3.68, 1.45],
//                                color: colors[2]
//                            }
//                        }, {
//                            y: 4.77,
//                            color: colors[3],
//                            drilldown: {
//                                name: 'Safari versions',
//                                categories: ['Safari v5.0', 'Safari v5.1', 'Safari v6.1',
//                                    'Safari v6.2', 'Safari v7.0', 'Safari v7.1', 'Safari v8.0'],
//                                data: [0.3, 0.42, 0.29, 0.17, 0.26, 0.77, 2.56],
//                                color: colors[3]
//                            }
//                        }, {
//                            y: 0.91,
//                            color: colors[4],
//                            drilldown: {
//                                name: 'Opera versions',
//                                categories: ['Opera v12.x', 'Opera v27', 'Opera v28', 'Opera v29'],
//                                data: [0.34, 0.17, 0.24, 0.16],
//                                color: colors[4]
//                            }
//                        }, {
//                            y: 0.2,
//                            color: colors[5],
//                            drilldown: {
//                                name: 'Proprietary or Undetectable',
//                                categories: [],
//                                data: [],
//                                color: colors[5]
//                            }
//                        }],
//                    browserData = [],
//                    versionsData = [],
//                    i,
//                    j,
//                    dataLen = data.length,
//                    drillDataLen,
//                    brightness;
//
//
//// Build the data arrays
//            for (i = 0; i < dataLen; i += 1) {
//
//                // add browser data
//                browserData.push({
//                    name: categories[i],
//                    y: data[i].y,
//                    color: data[i].color
//                });
//
//                // add version data
//                drillDataLen = data[i].drilldown.data.length;
//                for (j = 0; j < drillDataLen; j += 1) {
//                    brightness = 0.2 - (j / drillDataLen) / 5;
//                    versionsData.push({
//                        name: data[i].drilldown.categories[j],
//                        y: data[i].drilldown.data[j],
//                        color: Highcharts.Color(data[i].color).brighten(brightness).get()
//                    });
//                }
//            }
//
//            // Create the chart
//            Highcharts.chart('pie_operador', {
//                chart: {
//                    type: 'pie'
//                },
//                title: {
//                    text: 'Browser market share, January, 2015 to May, 2015'
//                },
//                subtitle: {
//                    text: 'Source: <a href="http://netmarketshare.com/">netmarketshare.com</a>'
//                },
//                yAxis: {
//                    title: {
//                        text: 'Total percent market share'
//                    }
//                },
//                plotOptions: {
//                    pie: {
//                        shadow: false,
//                        center: ['50%', '50%']
//                    }
//                },
//                tooltip: {
//                    valueSuffix: '%'
//                },
//                series: [{
//                        name: 'Browsers',
//                        data: browserData,
//                        size: '60%',
//                        dataLabels: {
//                            formatter: function () {
//                                return this.y > 5 ? this.point.name : null;
//                            },
//                            color: '#ffffff',
//                            distance: -30
//                        }
//                    }, {
//                        name: 'Versions',
//                        data: versionsData,
//                        size: '80%',
//                        innerSize: '60%',
//                        dataLabels: {
//                            formatter: function () {
//                                // display only if larger than 1
//                                return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
//                                        this.y + '%' : null;
//                            }
//                        },
//                        id: 'versions'
//                    }],
//                responsive: {
//                    rules: [{
//                            condition: {
//                                maxWidth: 400
//                            },
//                            chartOptions: {
//                                series: [{
//                                        id: 'versions',
//                                        dataLabels: {
//                                            enabled: false
//                                        }
//                                    }]
//                            }
//                        }]
//                }
//            });
//
//            //Función donde se declaran todos los eventos
//            $.fn.eventos();
//        }//Fin del success
//
//    }); //Fin del ajax
//
//}//Fin de la función $.fn.chequear_cant_mercado()
/***********************************************/