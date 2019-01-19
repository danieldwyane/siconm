var tabla = null;

/*
 Evento document ready
 */
$(document).ready(function () {

    /* Definir Bandeja de CLAP */
//    $('#tbl_despachos').DataTable({
//        responsive: {
//            details: {
//                renderer: function (api, rowIdx, columns) {
//                    var data = $.map(columns, function (col, i) {
//                        return col.hidden ?
//                                '<tr data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '">' +
//                                '<td>' + col.title + ':' + '</td> ' +
//                                '<td>' + col.data + '</td>' +
//                                '</tr>' :
//                                '';
//                    }).join('');
//
//                    return data ?
//                            $('<table/>').append(data) :
//                            false;
//                }
//            }
//        }
//    });

//Asigno el método DataTable a mi tabla
//        tabla = $('#tbl_despachos').DataTable({
//        //Oculto el seleccionar varios de 1 a 100
//        lengthChange: false,
//        "ajax": {
//            "url": "<?php echo base_url() ?>index.php/c_registro/reporte_cupon/",
//            "type": "POST"
//        },
//        "columns": [
//            {"data": "nombre", "class":'text-center'},
//            {"data": "establecimiento", "class":'text-center'},
//            {"data": "descripcion", "class":'text-center'},
//            {"data": "cupon", "class":'text-center'},
//        ],
//        //Oculto el ordenar por columna
//        "columnDefs": [{
//                "targets": [1],
//                "orderable": false
//            }],
//        "order": [[0, "desc"]],
//        "fnRowCallback": function (nRow, aData, iDisplayIndex) {
//
//        },
//        "orderClasses": false,
//        "language": {
//            "search": "Busqueda:",
//            "info": "Mostrando página _PAGE_ de _PAGES_",
//            "lengthMenu": "Mostrando _MENU_ registros por página",
//            "infoFiltered": "(filtrado desde _MAX_ total registros)",
//            "infoEmpty": "No hay registros disponibles",
//            "zeroRecords": "No se encontraron resultados",
//            "paginate": {
//                "previous": "Anterior",
//                "next": "Siguiente"
//            }
//        },
//        //Evento cuando el datatable esta listo
//        "initComplete": function (settings, json) {
//
////            //Asignamos la data al select:option
////            $('#estatus_consulta select').eq(0).multiselect('dataprovider', data['estatus']);
//
//            $.fn.eventos();
//        }//Fin de initComplete
//
//    });
//    
    /* Definir Bandeja de CLAP */
//    $('#tbl_despachos').DataTable({
//        responsive: {
//            details: {
//                renderer: function (api, rowIdx, columns) {
//                    var data = $.map(columns, function (col, i) {
//                        return col.hidden ?
//                                '<tr data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '">' +
//                                '<td>' + col.title + ':' + '</td> ' +
//                                '<td>' + col.data + '</td>' +
//                                '</tr>' :
//                                '';
//                    }).join('');
//
//                    return data ?
//                            $('<table/>').append(data) :
//                            false;
//                }
//            }
//        }
//    });


//    $(".btn-ver").click(function () {
//        alert("Click a Ver");
//    });

    $.fn.tabla();

    $.fn.eventos();

});//Fin del evento document ready
/********************************/

/*
 Función donde se declaran todos los eventos
 */
$.fn.eventos = function () {

    /*
     Evento click sobre el botón #boton crear curso 
     */
    $('.btn-info').unbind('click');
    $('.btn-info').click(function () {

        //Limpiamos el formulario
        $('#form_agregar_usuario')[0].reset();

    });//Fin del evento click
    /***********************/

}//Fin de la función $.fn.eventos
/*******************************/

$.fn.tabla = function () {

    if (tabla != null) {

        tabla.destroy();
    }

    //Variable que contendra a la tabla del datatable
    var tbl = '<table id="tbl_reporte" class="display table table-striped table-bordered" cellspacing="0" width="100%">';
    tbl += '  <thead>';
    tbl += '    <tr>';
    tbl += '      <th style="text-align: center">Client</th>';
    tbl += '      <th style="text-align: center">Establishment</th>';
    tbl += '      <th style="text-align: center">Description</th>';
    tbl += '      <th style="text-align: center">Coupon</th>';
    tbl += '    </tr>';
    tbl += '  </thead>';
    tbl += '</table>';

    $('#tabla_reporte').html('');
    $('#tabla_reporte').append(tbl);


    //Asigno el método DataTable a mi tabla
    tabla = $('#tabla_reporte table').DataTable({
        "ajax": {
            "url": "<?php echo base_url() ?>index.php/c_registro/reporte_cupon/",
            "type": "POST"
        },
        "columns": [
            {"data": "nombre", "class": 'text-center'},
            {"data": "establecimiento", "class": 'text-center'},
            {"data": "descripcion", "class": 'text-center'},
            {"data": "cupon", "class": 'text-center'}
        ],
        //Oculto el ordenar por columna
        "columnDefs": [{
                "targets": [3],
                "orderable": false
            }],
        "orderClasses": false,
        "fnRowCallback": function (nRow, aData, iDisplayIndex) {

        },
        responsive: {
            details: {
                renderer: function (api, rowIdx, columns) {
                    var data = $.map(columns, function (col, i) {
                        return col.hidden ?
                                '<tr data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '">' +
                                '<td>' + col.title + ':' + '</td> ' +
                                '<td>' + col.data + '</td>' +
                                '</tr>' :
                                '';
                    }).join('');

                    return data ?
                            $('<table/>').append(data) :
                            false;
                }
            }
        },
        "orderClasses": false,
//        "language": {
//            "search": "Busqueda:",
//            "info": "Mostrando página _PAGE_ de _PAGES_",
//            "lengthMenu": "Mostrando _MENU_ registros por página",
//            "infoFiltered": "(filtrado desde _MAX_ total registros)",
//            "infoEmpty": "No hay registros disponibles",
//            "zeroRecords": "No se encontraron resultados",
//            "paginate": {
//                "previous": "Anterior",
//                "next": "Siguiente"
//            }
//        },
        //Evento cuando el datatable esta listo
        "initComplete": function (settings, json) {

//            //Asignamos la data al select:option
//            $('#estatus_consulta select').eq(0).multiselect('dataprovider', data['estatus']);

            $.fn.eventos();
        }//Fin de initComplete
    });

    /* Definir Bandeja de CLAP */
//    $('#tbl_despachos').DataTable({
//        responsive: {
//            details: {
//                renderer: function (api, rowIdx, columns) {
//                    var data = $.map(columns, function (col, i) {
//                        return col.hidden ?
//                                '<tr data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '">' +
//                                '<td>' + col.title + ':' + '</td> ' +
//                                '<td>' + col.data + '</td>' +
//                                '</tr>' :
//                                '';
//                    }).join('');
//
//                    return data ?
//                            $('<table/>').append(data) :
//                            false;
//                }
//            }
//        }
//    });

}; //Fin de la funcion Tabla






