$(document).ready(function() {
    
    /* Definiendo dialogos modales */
    $( ".dlg-liquidacion" ).dialog({
        modal: true,
        buttons: {
            "Salir": function() {
                $( this ).dialog( "close" );
            }
        },
        autoOpen: true,
        show: {
        effect: "slide",
        duration: 800
        },
        hide: {
        effect: "explode",
        duration: 800
        },
        width: 900,
        height: 600
    });
    
    
    /* Manejador del evento click del boton Consulta Liquidación */
    $('.btn-consultar-liquidacion').on('click', function(event){
        
        $.ajax({
            async : true,
            type : "POST",
            contentType : "application/x-www-form-urlencoded",
            url : "<?php echo base_url() ?>index.php/ctr_liquidacion/consultaLiquidacion/",
            success : function(response){
                
                $("#dlg-consultar").html(response);
            },
            timeout : 4000
        });
        
        $("#dlg-consultar").dialog( "open" );
        
    });
});

