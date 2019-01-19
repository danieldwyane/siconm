//Conectamos al node-server
var socket = io.connect('http://'+window.location.hostname+':8081', { 'forceNew': true });

//Id del usuario
var id_usuario = null;

/*
	Evento document ready  
*/
$(document).ready(function(){  
   
   id_usuario = $.fn.valor_cookie('ID_USUARIO');
   
		//muestro el icono de carga
		$('.capa_contenido').append('<i class="fa fa-cog fa-spin fa-fw" aria-hidden="true"></i>Cargando...');   
   
   
   //Función que lista las notificaciones del usuario
   $.fn.listarNotificacionesUsuario();
   $.fn.eventos();
	
});/*Fin del document ready*/
/***************************/

/*==============================================*/
/*Función donde se declaran todos los eventos   */
/*==============================================*/
$.fn.eventos = function(){
	


	
}//Fin la función eventos
/************************/


/*========================================*/
/*  Función que lista las Notificaciones  */
/*  Asocidas al usuario logueado          */
/*======================================= */
$.fn.listarNotificacionesUsuario = function(){
	
	/*
		Eventos para enviar el id del usuario al servidor
	*/
	socket.on('get_id_usuario',function(data){
		
		//Variables para enviar el mensaje al servidor node
		var parametros = {
						  id_usuario : id_usuario
						 }
		
		//Envio el mensaje	
		socket.emit('get_notificaciones',parametros);
		
	});//Fin del evento messages

	/*
		Eventos para enviar el id del usuario al servidor
	*/
	socket.on('upd_notificaciones',function(data){
		
		var infoNotif = '';
		
		$(data).each(function(index, element) {
            
			 infoNotif += `<div class="row notificacion container-fluid">
							<div class="col-md-12 text-left titulo">
							<div class="col-md-12">
							<span>`+element['ASUNTO']+`</span><span class="fecha_asunto">`+element['FECHA']+`</span>
							</div>
							</div>
							<div class="col-md-12 globo">
							<div class="col-md-12">`+element['NOTIFICACION']+`</div>
							</div>
						 </div>`;
			
        });
		
		$('.capa_contenido').html('');
		
		//remuevo el icono de carga
		$('.capa_contenido .fa-cog').remove();
		
		$('.capa_contenido').append(infoNotif);
		$('.notificacion').toggle( "slow" );
		
		//$( "capa_contenido" ).slideUp();
		//$( "pcapa_contenido ).toggle( "slow" );
		
		//Variables para enviar el mensaje al servidor node
		var parametros = {
						  id_usuario : id_usuario
						 }
		
		//Envio el mensaje	
		socket.emit('upd_estatusNotificaciones',parametros);
		
	});//Fin del evento messages	
	
	return;
	//Ajax
	$.ajax({
		
		url: '../c_notificaciones/listanotificaciones',
		type: 'POST',
		dataType: 'json',
		//data: {id_usuario:id_usuario},
		beforeSend: function(objeto){
			
		},
		error: function(objeto, quepaso, otroobj){
			
		},
		success: function(respuesta){

			//Evaluamos si hay notificaciones
			if(respuesta['CODIGO_RESPUESTA']){
				
				//actualizo los estatus
				$.fn.actualizarEstatus();
				
				//Verifico si se realizó el cambio de estatus para decrementar el conteo de las notificacione
				parent.$.fn.notificaciones();
			
				var infoNotif = '';	
				
				//Recorremos los resultados de las notificaciones
				$(respuesta['NOTIFICACIONES']).each(function(index, element)
				{
				
					infoNotif += '<div class="row notificacion container-fluid">';
					infoNotif += '  <div class="col-md-12 text-left titulo">';
					infoNotif += '	  <div class="col-md-12">';
					infoNotif += '	    <span>'+element['ASUNTO']+'</span><span class="fecha_asunto">'+element['FECHA']+'</span>';
					infoNotif += '	  </div>';
					infoNotif += '  </div>';
					infoNotif += '  <div class="col-md-12 globo">';
					infoNotif += '	  <div class="col-md-12">'+element['NOTIFICACION']+'</div>';
					infoNotif += '  </div>';
					infoNotif += '</div>';

				});				
				
			}else{
				
				var infoNotif  = '<p class="bg-danger">'+respuesta['MENSAJE_RESPUESTA']+'</p>';
				
			}//Fin del if
		
			//Mostramos la tabla
			$('.capa_contenido').html('');
			$('.capa_contenido').append(infoNotif);

			$.fn.eventos();
			
		}//Fin del success
		
	});//Fin del ajax
	
}//Fin funcion listarNotificacionesUsuario
/*======================================*/


/*========================================*/
/*  Función que lista las Notificaciones  */
/*  Asocidas al usuario logueado          */
/*======================================= */
$.fn.actualizarEstatus = function(){
	
		//Ajax
		$.ajax({
		
			url: '../c_notificaciones/actualizaEstatus',
			type: 'POST',
			dataType: 'json',
			//data: {id:id},
			async:false,
			beforeSend: function(objeto){
				
			},
			error: function(objeto, quepaso, otroobj){
				
			},
			success: function(respuesta){
				
				alert(respuesta['CODIGO_RESPUESTA']);

				if(respuesta['CODIGO_RESPUESTA'] = 1){
				
					//cambio el color que indica que el mensaje ha sido leido padre globo
					//$(target).parents('div').css({'color':'black','background':'rgba(114,105,105,1.00)'});
					
					 $('.globo div').css({'color':'black','background':'rgba(114,105,105,1.00)'});
					 
					//disparar el evento que cuenta las notificaciones no leidas
					parent.$.fn.notificaciones();
						
				}else{
					
					//mantenemos el color	
				}
				
				$.fn.eventos();
				
		}//Fin del success
		
	});//Fin del ajax	
	
	
}//Fin funcion listarNotificacionesUsuario
/*======================================*/
	
/*
	Función que obtiene el valor de una cookie
*/
$.fn.valor_cookie = function(cname){
	
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
	
    return "";
	
}//Fin de la función valor_cookie
/*******************************/