/*
 Variables Globales
 */
var tabla = null;
var total = 0;

/*
 Evento document ready
 */
$(document).ready(function () {

    $.fn.data_inicial();

    $.fn.tabla();

    $.fn.eventos();

});//Fin del evento document ready
/********************************/

/*
 Función donde se declaran todos los eventos
 */
$.fn.eventos = function () {


    //Declaramos la fecha
    $('#fecha').datetimepicker({
        format: 'DD-MM-YYYY'
    });

}//Fin de la función $.fn.eventos
/*******************************/


/*
 Función donde se inician datos y objetos
 */
$.fn.data_inicial = function () {



}//Fin de la función $.fn.eventos
/*******************************/


/*
 Función donde se implementa el datatable
 */
$.fn.tabla = function () {

    if (tabla != null) {

        tabla.destroy();
    }

    //Variable que contendra a la tabla del datatable
    var tbl = '<div class="box box-default">';
    tbl += '<div class="box-body box-profile">';
    tbl += '<table id="tbl_reporte" class="display table table-striped table-bordered" cellspacing="0" width="100%">';
    tbl += '  <thead>';
    tbl += '    <tr>';
    tbl += '      <th></th>';
    tbl += '      <th style="text-align: center">Fecha Recepcion</th>';
    tbl += '      <th style="text-align: center">Tipo Producto</th>';
    tbl += '      <th style="text-align: center">Peso Neto</th>';
    tbl += '      <th style="text-align: center">Peso Bruto(grs)</th>';
    tbl += '      <th style="text-align: center">Peso Fino(grs)</th>';
    tbl += '      <th style="text-align: center">Peso Fino(kgs)</th>';
    tbl += '      <th style="text-align: center">Peso Fino(Onz T)</th>';
    tbl += '      <th style="text-align: center">Cod. Pieza</th>';
    tbl += '    </tr>';
    tbl += '  </thead>';
    tbl += '  <tfoot>';
    tbl += '      <tr>';
    tbl += '          <th colspan="7" style="text-align:right">Total:</th>';
    tbl += '          <th colspan="2"></th>';
    tbl += '      </tr>';
    tbl += '  </tfoot>';
    tbl += '</table>';
    tbl += '  <div>';
    tbl += '  <input type="text" name="total_peso_oro">';
    tbl += '  </div>';
    tbl += '</div>';
    tbl += '</div>';

    $('#tabla_reporte').html('');
    $('#tabla_reporte').append(tbl);


    //Asigno el método DataTable a mi tabla
    tabla = $('#tabla_reporte table').DataTable({
        "ajax": {
            "url": "<?php echo base_url() ?>siconm/c_bandeja_registro/reporte_registro",
            "type": "POST"
        },
        "columns": [
            {"data": "peso_unitario", "class": 'text-center select-checkbox'},
            {"data": "fecha_registro", "class": 'text-center'},
            {"data": "nb_tipo_producto", "class": 'text-center'},
            {"data": "peso_unitario", "class": 'text-center'},
            {"data": "peso_unitario", "class": 'text-center'},
            {"data": "cod_pieza", "class": 'text-center'},
            {"data": "md_peso_fino_gramos", "class": 'text-center'},
            {"data": "peso_fino_kg", "class": 'text-center'},
            {"data": "peso_fino_onz", "class": 'text-center'}
        ],

        "fnRowCallback": function (nRow, aData, iDisplayIndex) {

            $('td:eq(0)', nRow).html('');

        },
        //Oculto el ordenar por columna
        "columnDefs": [{
                "orderable": false,
                "className": 'select-checkbox',
                "targets": 0
            }],
        dom: 'Bfrtip',
        buttons: [
            'selectAll',
            'selectNone'
        ],
        "select": {
            style: 'multi',
            selector: 'td:first-child'
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
        "language": {
            "search": "Busqueda:",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "lengthMenu": "Mostrando _MENU_ registros por página",
            "infoFiltered": "(filtrado desde _MAX_ total registros)",
            "infoEmpty": "No hay registros disponibles",
            "zeroRecords": "No se encontraron resultados",
            "paginate": {
                "previous": "Anterior",
                "next": "Siguiente"
            },
            select: {
                rows: {
                    _: "<b>Ha seleccionado %d piezas</b>",
                    0: "<b>Ninguna pieza seleccionada</b>",
                    1: "<b>Sólo 1 pieza seleccionada</b>"
                }
            },
            buttons: {
                selectAll: "Seleccionar Todo",
                selectNone: "Deseleccionar Todo"
            }
        },
        //Evento cuando el datatable esta listo
        "initComplete": function (settings, json) {
            $.fn.eventos();
        } //Fin de initComplete
//        "footerCallback": function (row, data, start, end, display) {
//            var api = this.api(), data;
//
//            // Remove the formatting to get integer data for summation
//            var intVal = function (i) {
//                return typeof i === 'string' ?
//                        i.replace(/[\$,]/g, '') * 1 :
//                        typeof i === 'number' ?
//                        i : 0;
//            };
//
//            // Total over all pages
//            total = api
//                    .column(4)
//                    .data()
//                    .reduce(function (a, b) {
//                        return intVal(a) + intVal(b);
//                    }, 0);
//
//            // Total over this page
//            pageTotal = api
//                    .column(4, {page: 'current'})
//                    .data()
//                    .reduce(function (a, b) {
//                        return intVal(a) + intVal(b);
//                    }, 0);
//
//            // Update footer
//            $(api.column(8).footer()).html(
//                    '$' + pageTotal + ' ( $' + total + ' total)'
//                    );
//        }
    });



    /*
     Evento on click sobre cada seleccion de la tabla
     */
    tabla
            .on('select', function (e, dt, type, indexes) {
                var rowData = tabla.rows(indexes).data().toArray();

                var seleccionado = rowData[0]['peso_unitario'];

                total = total + Number(seleccionado);

                // Update footer
                $(tabla.column(8).footer()).html(
                        '$' + total + ' ( $' + total + ' total)'
                        );

                //events.prepend('<div><b>' + type + ' selection</b> - ' + JSON.stringify(rowData) + '</div>');
                //alert(Object.entries(rowData[0]));
            })
            .on('deselect', function (e, dt, type, indexes) {
                var rowData = tabla.rows(indexes).data().toArray();

                var seleccionado = rowData[0]['peso_unitario'];

                total = total - Number(seleccionado);

                // Update footer
                $(tabla.column(8).footer()).html(
                        '$' + total + ' ( $' + total + ' total)'
                        );

                //events.prepend('<div><b>' + type + ' <i>de</i>selection</b> - ' + JSON.stringify(rowData) + '</div>');
                //alert(Object.entries(rowData[0]));
            }); //Fin del Evento on click
    /***************************/

}; //Fin de la funcion Tabla

