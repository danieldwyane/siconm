/*
	Evento document ready
*/
$(document).ready(function(){ 
   
   //Función que lista los sistemas asociados al usuario
   $.fn.sistemasAsociados();
  
});//Fin del document ready
/**************************/

/*
	Función donde se declaran todos los eventos
*/
$.fn.eventos = function(){

	 /*
     	Evento click sobre la capa que contiene a los sistemas
	 */
	 $('.sistema').unbind('click');
	 $('.sistema').click(function(){
		
		//Obtenemos valores
		var id_sistema = $(this).attr('id');
		var path       = $(this).attr('path');
        
		$('.icono').removeClass('icono_activo');
		$(this).children('.icono').addClass('icono_activo');
		
		$.fn.abrirSistema(id_sistema,path);

	})//Fin del evento click
	/**********************/
	
	/*
     	Evento click sobre la capa que contiene a los sistemas pronto a ser lanzados
	 */
	 $('.pronto').unbind('click');
	 $('.pronto').click(function(){
		
		//Obtenemos valores
		var id_sistema = $(this).attr('id');
		
		$.fn.leyendaSistema(id_sistema);

	})//Fin del evento click
	/**********************/
	
}//Fin de la función $.fn.eventos
/*******************************/

/*******************************************************/
/* Función que lista los sistemas que posee el usuario */
/*******************************************************/
$.fn.sistemasAsociados = function(){

	//Ajax
	$.ajax({
		
		url: 'sistemas_asociados',
		type: 'POST',
		dataType: 'json',
		beforeSend: function(objeto){
			  
		},
		error: function(){
			
	
		},
		success: function(data){
			
            //Variables a emplear
			var id_sistema = null;
			var sistema    = '';
			
			//Recorro el array
			$(data).each(function(index, elemento){
		        
				//Evaluo si es el mismo sistema
				if(elemento['ID_SISTEMA'] != id_sistema){
					
					//Evaluamos si el sistema es pronto a ser lanzado
					if(elemento['PRONTO'] == 'S'){
						
						sistema += '<div class="pronto" id="'+elemento['ID_SISTEMA']+'" path="'+elemento['PATH']+'">';
						sistema += '  <div class="icono '+elemento['ICONO_SISTEMA']+'"></div>';
						sistema += '  <div class="nombre_sistema">'+elemento['NOMBRE_SISTEMA']+'</div>';
						sistema += '  <div class="msj_pronto">Pronto</div>';
						sistema += '</div>';
						
					}else{
					
						//Evaluamos si es nuevo el sistema
						if(elemento['NUEVO'] == 'S'){
						
							sistema += '<div class="sistema" id="'+elemento['ID_SISTEMA']+'" path="'+elemento['PATH']+'">';
							sistema += '  <div class="icono '+elemento['ICONO_SISTEMA']+'"></div>';
							sistema += '  <div class="nombre_sistema">'+elemento['NOMBRE_SISTEMA']+'</div>';
							sistema += '  <div class="msj_nuevo">Nuevo</div>';
							sistema += '</div>';
						
						}else{
							
							sistema += '<div class="sistema" id="'+elemento['ID_SISTEMA']+'" path="'+elemento['PATH']+'">';
							sistema += '  <div class="icono '+elemento['ICONO_SISTEMA']+'"></div>';
							sistema += '  <div class="nombre_sistema">'+elemento['NOMBRE_SISTEMA']+'</div>';
							sistema += '</div>';
							
						}//Fin del if elemento['NUEVO']
					
					}//Fin del if elemento['PRONTO']
					
				    id_sistema = elemento['ID_SISTEMA'];
				   
				}//Fin del if
			   
			});//Fin del each
		    
			//Muestro los sistemas
			$('#sistemas').html('');
			$('#sistemas').append(sistema);

			$.fn.eventos();
			
		}//Fin del success
		
	});//Fin del ajax
	
}//Fin de la función $.fn.sistemasAsociados
/*****************************************/

/*
	Función que lista los módulos y menus del sistema
*/
$.fn.abrirSistema = function(id_sistema,path){
	
	//Ajax
	$.ajax({
		
		url: 'abrir_sistema',
		type: 'POST',
		dataType: 'json',
		data: {id_sistema: id_sistema, path:path},
		beforeSend: function(objeto){
			  
		},
		error: function(){
			
	
		},
		success: function(respuesta){
            
			//Muestro los módulos y menus
			parent.$.fn.menu_intranet(respuesta,1);
			
			$.fn.eventos();
			
		}//Fin del success
		
	});//Fin del ajax	
	
}//Fin de la función $.fn.abrirSistema
/************************************/

/*
	Función que muestra la leyenda asociada al sistema proximo
	a ser liberado
*/
$.fn.leyendaSistema = function(id_sistema)
{
	
	//Ajax
	$.ajax({
		
		url: 'leyenda_sistema',
		type: 'POST',
		dataType: 'json',
		data: {id_sistema: id_sistema},
		beforeSend: function(objeto){
			  
		},
		error: function(){
			
	
		},
		success: function(data){
            
			//Muestro los módulos y menus
			var modal  = '<div id="leyenda" class="modal fade" tabindex="-1" role="dialog">';
				modal += '	<div class="modal-dialog" role="document">';
				modal += '	  <div class="modal-content">';
				modal += '	    <div class="modal-header">';
				modal += '	      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
				modal += '	      <h4 class="modal-title">Acerca de <b>"'+data['TITULO']+'"</b></h4>';
				modal += '	    </div>';
				modal += '	    <div class="modal-body">';
				modal += '	      <p>'+data['LEYENDA']+'</p>';
				modal += '	    </div>';
				modal += '	    <div class="modal-footer">';
				modal += '	      <button type="button" class="btn btn-default" data-dismiss="modal">Ok!</button>';
				modal += '	    </div>';
				modal += '	  </div><!-- /.modal-content -->';
				modal += '	</div><!-- /.modal-dialog -->';
				modal += '</div><!-- /.modal -->';
			
			//Mostramos la modal en el documento
			$('body').append(modal);
			
			//Mostramos el modal
			$('#leyenda').modal('show');
			
			//Evento cuando se oculte la modal
			$('#leyenda').on('hidden.bs.modal', function (e){
			  
				$(this).remove();
			  
			});
			
			$.fn.eventos();
			
		}//Fin del success
		
	});//Fin del ajax	
	
}//Fin de la función $.fn.leyendaSistema
/**************************************/	