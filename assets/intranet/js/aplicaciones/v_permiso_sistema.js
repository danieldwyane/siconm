/*
	Evento document ready
*/
$(document).ready(function(){ 
  
   //Asignamos el método multiselect
   $('#usuarios').multiselect({
                                buttonWidth            : '250px',
                                enableFiltering        : true,
                                maxHeight              : 250,
                                nonSelectedText        : 'Usuarios',
                                
								   onChange: function(option, checked){
				
									  var values = [];
									
									  $('#usuarios option').each(function(){
										
										  if($(this).val() !== option.val()){
											values.push($(this).val());
										  }
										
									  });
                                                                          
                                      //Deseleccionamos				  
									  $('#usuarios').multiselect('deselect', values);
                                                                          
									  var id_usuario = [];
									  
									  //Recorremos las opciones seleccionadas
									  $('#usuarios option:selected').each(function(){
										id_usuario.push([$(this).val()]);
									  });
                                                                          
									  //Evaluamos si es seleccionado un usuario
									  if(id_usuario.length > 0){
										  
										 //Buscamos los sistemas asociados
										 $.fn.sistemasAsociados(id_usuario); 
										
										 //Buscamos los sistemas por asociar
										 $.fn.sistemas_por_asociar(id_usuario);
										
									  }else{
										 
										 //Limpiamos el contenido
										 $('#sistemas_asociados, #sistemas_por_asociar').html('');
										 
										 //Mostramos el mensaje
										 $('#sistemas_asociados, #sistemas_por_asociar').append('<p class="bg-warning">Debe seleccionar un usuario.</p>');
										  
									  }//Fin del if
                                                                          
								   }//Fin del change
							    
							 });//Fin del multiselect
   
    
    //Función que lista los usuarios
    $.fn.usuarios();
   
});//Fin del document ready
/**************************/

/*
	Función donde se declaran todos los eventos
*/
$.fn.eventos = function(){
	
	 /*
	 	Evento change sobre el checkbox de .todos
	 */
	 $('.todos').unbind('change');
	 $('.todos').change(function(){
		 
		 //Evaluo si esta chequeado
		 if($(this).is(':checked')){
			 
			 //Selecciono a los padres
			 $(this).parents('li').find('.todos:first').prop('checked', true);
			 
			 //Chequeo todos los checkbox
			 $(this).parent().find('input[type=checkbox]').prop('checked', true);
			 
			 //Seteamos el css
			 $(this).parent().find('.item_menu').parent().addClass('bg-success');
			 
		 }else{
			 
			 //Deschequeo todos los checkbox
			 $(this).parents('li').find('.todos:first').prop('checked', false);
			 
			 //Chequeo todos los checkbox
			 $(this).parent().find('input[type=checkbox]').prop('checked', false);
			 
			 //Seteamos el css
			 $(this).parent().find('.item_menu').parent().removeClass('bg-success');
			 
		 }//Fin del if
		 
		 $.fn.eventos();
		 
	 });//Fin del evento change
	 /************************/
	 
	 /*
	 	Evento change sobre el checkbox de .item_menu
	 */
	 $('.item_menu').unbind('change');
	 $('.item_menu').change(function(){

		 //Evaluo si esta chequeado
		 if(!$(this).is(':checked')){
                     
			 var i = 0;
			 
			 //Recorro cada item_menu del mismo nivel
			 $(this).parent().parent().find('input[type=checkbox]').each(function(index, element){
				
				 //Evaluo si está chequeado
				 if($(this).is(':checked')){
					 
					 i++;//Incremento
					 
				 }//Fin del if
                 
             });
			
			 //Evaluo i
			 if(i > 0){
			 
				 //Selecciono a los padres
				 $(this).parents('li').find('.todos:first').prop('checked', true);
			 
			 }else{
			
			 	 //Deselecciono a los padres
				 $(this).parents('li').find('.todos').prop('checked', false);
			 	 
			 }//Fin del if
			 
			 //Seteamos el css
			 $(this).parent().find('.item_menu').parent().removeClass('bg-success');
			 
		 }else{
			 
			 //Selecciono a los padres
			 $(this).parents('li').find('.todos:first').prop('checked', true);
			 
			 //Seteamos el css
			 $(this).parent().find('.item_menu').parent().addClass('bg-success');
			 
		 }//Fin del if
		 
		 $.fn.eventos();
		 
	 });//Fin del evento change
	 /************************/
         
	 /*
     	Evento click sobr el botón #agregar menu
	 */
	 $('.agregar_menu').unbind('click');
	 $('.agregar_menu').click(function(){

			//Busco mi padre
			var menus = $(this).parent().parent().parent().find('.item_menu:checked');
			var array = [];
                        
			//Recorremos los chequeados
			$(menus).each(function(){              
					
            	array.push($(this).attr('id'));
										
			});
			
			var numIds = array.length;
		
			//Evaluamos
			if(numIds > 0){
                            
           		$.fn.asociar_menu(array);
			
			}//Fin del if
			
	  });//Fin del evento click agregar menu
	 /*************************************/
         
	 /*
     	Evento click sobr el botón #eliminar menu
	 */
	 $('.eliminar_menu').unbind('click');
	 $('.eliminar_menu').click(function(){

			//Busco mi padre
			var menus = $(this).parent().parent().parent().find('.item_menu:checked');
			var array = [];
                        
			//Recorremos los chequeados
			$(menus).each(function(){              
					
            	array.push($(this).attr('id'));
										
			});
			
			var numIds = array.length;
		
			//Evaluamos
			if(numIds > 0){
		
           		$.fn.desasociar_menu(array);
			
			}//Fin del if
			
	  });//Fin del evento click eliminar menu
	 /*************************************/
             
	
}//Fin de la función $.fn.eventos
/*******************************/

/*
	Función que lista los usuario activos
*/
$.fn.usuarios = function(){

	//Ajax
	$.ajax({
		
		url: 'usuarios_activos',
		type: 'POST',
		dataType: 'json',
		beforeSend: function(objeto){
	            
                    //Mostramos el icono de carga
                    $('#capa_usuarios .icono_carga').css('visibility','visible');
                    
		},
		error: function(){
			
                    //Ocultamos el icono de carga
                    $('#capa_usuarios .icono_carga').css('visibility','hidden');
                        
		},
		success: function(data){
                    
                    console.log(data);
                    

		    //Asignamos la data al select:option
		    $('#usuarios').multiselect('dataprovider', data);
		    
			//Ocultamos el icono de carga
			$('#capa_usuarios .icono_carga').css('visibility','hidden');
			
		}//Fin del success
		
	});//Fin del ajax
	
}//Fin de la función $.fn.usuarios
/********************************/

/*
	Función que lista los sistemas asociados al usuario
*/
$.fn.sistemasAsociados = function(id_usuario){

    //Ajax
	$.ajax({
		
		url: 'sistemasAsociados',
		type: 'POST',
		dataType: 'json',
                data: {id_usuario:id_usuario[0][0]},
		beforeSend: function(objeto){ 
            
			//Limpiamos el contenido
			$('#capa_permisos .capa_boton').remove();
			$('#sistemas_asociados').html('');
			
			//Mostramos el icono de carga
			$('#capa_sistemas_asociados .icono_carga').css({'visibility':'visible'});
			
		},
		error: function(){
			
			//Ocultamos el icono de carga
			$('#capa_sistemas_asociados .icono_carga').css({'visibility':'hidden'});
                        
		},
		success: function(data){
			
			//Ocultamos el icono de carga
			$('#capa_sistemas_asociados .icono_carga').css({'visibility':'hidden'});
			
			//Evaluo si existe registros
			if(data != null){
			    			    
				//Armo la tabla
				var arbol = '<ul>';
				
				//Recorremos los sistemas
				$(data).each(function(index1, sistema){
                    
					arbol += '<li>'+sistema.SISTEMA;
					arbol += '	<input class="todos" type="checkbox">';
					arbol += '	<ul>';
					
					//Recorremos los módulos
					$(sistema.MODULOS).each(function(index2, modulo){
						
						arbol += '<li>'+modulo.MODULO;
						arbol += '	<input class="todos" type="checkbox">';
						arbol += '	<ul>';
						
						//Recorremos los menus
						$(modulo.MENUS).each(function(index3, menu){
						
							arbol += '<li>'+menu.MENU;
							arbol += '	<input id="'+menu.ID_MENU+'" class="item_menu" type="checkbox"></li>';
							arbol += '</li>';
							
						});//Fin del each de los menus*/
						
						arbol += '	</ul>';
						arbol += '</li>';
						
					});//Fin del each de los módulos
					
					arbol += '	</ul>';
					arbol += '</li>';
					
                });//Fin del each de los sistemas
				
				arbol += '</ul>';
				
				var boton  = '<br><div class="row">';
					boton += '	<div class="col-md-12 text-center">';
					boton += '		<button type="button" class="btn btn-success eliminar_menu">Guardar</button>';
					boton += '	</div>';
					boton += '	</div>';
				
				//Mostramos la lista
				$('#sistemas_asociados').append(arbol+boton);
				
				//Asignamos el método treed
				$('#sistemas_asociados > ul').treed();
				
			}else{
				
				//Mostramos un mensaje
				$('#sistemas_asociados').append('<p class="bg-danger">No posee ningún sistema asociado.</p>');
				
			}//Fin del if 
			
			$.fn.eventos();
			
		}//Fin del success
		
	});//Fin del ajax
  
}//Fin de la función sistemas asociados
/*************************************/

/*
	Función que lista los sistemas por asociar al usuario
*/
$.fn.sistemas_por_asociar = function(id_usuario){
  
    //Ajax
	$.ajax({
		
		url: 'sistemas_por_asociar',
		type: 'POST',
		dataType: 'json',
        data: {id_usuario:id_usuario[0][0]},
		beforeSend: function(objeto){ 
        
			//Limpiamos el contenido
			$('#capa_permisos .capa_boton').remove();
			$('#sistemas_por_asociar').html('');
		    
			//Mostramos el icono de carga
			$('#capa_sistemas_por_asociar .icono_carga').css({'visibility':'visible'});
			
		},
		error: function(){
			
            //Ocultamos el icono de carga
			$('#capa_sistemas_por_asociar .icono_carga').css({'visibility':'hidden'});
			       
		},
		success: function(data){
			
			//Ocultamos el icono de carga
			$('#capa_sistemas_por_asociar .icono_carga').css({'visibility':'hidden'});
			
			//Evaluo si existe registros
			if(data != null){
			    
				//Armo la tabla
				var arbol = '<ul>';
				
				//Recorremos los sistemas
				$(data).each(function(index1, sistema){
                    
					arbol += '<li>'+sistema.SISTEMA;
					arbol += '	<input class="todos" type="checkbox">';
					arbol += '	<ul>';
					
					//Recorremos los módulos
					$(sistema.MODULOS).each(function(index2, modulo){
						
						arbol += '<li>'+modulo.MODULO;
						arbol += '	<input class="todos" type="checkbox">';
						arbol += '	<ul>';
						
						//Recorremos los menus
						$(modulo.MENUS).each(function(index3, menu){
						
							arbol += '<li>'+menu.MENU;
							arbol += '	<input id="'+menu.ID_MENU+'" class="item_menu" type="checkbox"></li>';
							arbol += '</li>';
							
						});//Fin del each de los menus*/
						
						arbol += '	</ul>';
						arbol += '</li>';
						
					});//Fin del each de los módulos
					
					arbol += '	</ul>';
					arbol += '</li>';
					
                });//Fin del each de los sistemas
				
				arbol += '</ul>';
				
				var boton  = '<br><div class="row">';
					boton += '	<div class="col-md-12 text-center">';
					boton += '		<button type="button" class="btn btn-success agregar_menu">Guardar</button>';
					boton += '	</div>';
					boton += '	</div>';
					
				var mensaje  = '<br><div class="row">';
					mensaje += '		<div class="col-md-12 text-center mensaje"></div>';
					mensaje += '	</div>';
				
				//Mostramos la lista
				$('#sistemas_por_asociar').append(arbol+boton+mensaje);
				
				//Asignamos el método treed
				$('#sistemas_por_asociar > ul').treed();
				
			}else{
				
				//Mostramos un mensaje
				$('#sistemas_por_asociar').append('<p class="bg-success">Ya posee todos los sistemas asociados.</p>');
				
			}//Fin del if
			
			$.fn.eventos();
			
		}//Fin del success
		
	});//Fin del ajax
  
}//Fin de la función sistemas por asociar
/*****************************************/

/*
	Función que agrega los menu a los usuarios
*/
$.fn.asociar_menu = function(array){

	//Ajax
	$.ajax({
		
		url: 'asociar_menu',
		type: 'POST',
		dataType: 'json',
        data:{
			   ids_menu : array,
			   id_usuario : $('#usuarios').val()
			 },
		beforeSend: function(objeto){ 
        
			//Mostramos el icono de carga
			$('#capa_sistemas_por_asociar .icono_carga').css({'visibility':'visible'});
		    
			//Deshabilitamos el botón
			$('.agregar_menu').attr('disabled',true);
			
			//Quitamos el mensaje
			$('#capa_sistemas_por_asociar .mensaje').html('');
			
		},
		error: function(){
            
			//Ocultamos el icono de carga
			$('#capa_sistemas_por_asociar .icono_carga').css({'visibility':'hidden'});
			
			//Habilitamos el botón
			$('.agregar_menu').removeAttr('disabled');
			
		},
		success: function(data){
			
			//Ocultamos el icono de carga
			$('#capa_sistemas_por_asociar .icono_carga').css({'visibility':'hidden'});
			
			//Habilitamos el botón
			$('.agregar_menu').removeAttr('disabled');
			
			//Evaluamos la respuesta
			if(data['CODIGO_RESPUESTA'] == 1){
				
				var id_usuario = []; 
									  
			    //Recorremos las opciones seleccionadas
			    $('#usuarios option:selected').each(function(){
					id_usuario.push([$(this).val()]);
			    });
				
				//Buscamos los sistemas asociados
			    $.fn.sistemasAsociados(id_usuario); 
			
			    //Buscamos los sistemas por asociar
			    $.fn.sistemas_por_asociar(id_usuario);
				
			}else{
				
				//MOstramos el mensaje de rror
				$('#capa_sistemas_por_asociar .mensaje').html('<p class="bg-danger">Ocurrio un error al asociar el menú.</p>');
				
			}//Fin del if
			
		}//Fin del success
		
	});//Fin del ajax
	
}//Fin de la función $.fn.asociar_menu
/************************************/

/*
	Función que elimina los menu a los usuarios
*/
$.fn.desasociar_menu = function(array){

	//Ajax
	$.ajax({
            
		url: 'desasociar_menu',
		type: 'POST',
		dataType: 'json',
        data: {
			    ids_menu : array,
				id_usuario : $('#usuarios').val()
			  },
		beforeSend: function(objeto){ 
        
			//Mostramos el icono de carga
			$('#capa_sistemas_asociados .icono_carga').css({'visibility':'visible'});
		    
			//Deshabilitamos el botón
			$('.eliminar_menu').attr('disabled',true);
			
			//Quitamos el mensaje
			$('#capa_sistemas_asociados .mensaje').html('');
			
		},
		error: function(){
            
			//Ocultamos el icono de carga
			$('#capa_sistemas_asociados .icono_carga').css({'visibility':'hidden'});
			
			//Habilitamos el botón
			$('.eliminar_menu').removeAttr('disabled');
			
		},
		success: function(data){
			
			//Ocultamos el icono de carga
			$('#capa_sistemas_asociados .icono_carga').css({'visibility':'hidden'});
			
			//Habilitamos el botón
			$('.eliminar_menu').removeAttr('disabled');
			
			//Evaluamos la respuesta
			if(data['CODIGO_RESPUESTA'] == 1){
				
				var id_usuario = [];
									  
			    //Recorremos las opciones seleccionadas
			    $('#usuarios option:selected').each(function(){
					id_usuario.push([$(this).val()]);
			    });
				
				//Buscamos los sistemas asociados
			    $.fn.sistemasAsociados(id_usuario); 
			
			    //Buscamos los sistemas por asociar
			    $.fn.sistemas_por_asociar(id_usuario);
				
			}else{
				
				//Mostramos el mensaje de rror
				$('#capa_sistemas_asociados .mensaje').html('<p class="bg-danger">Ocurrio un error al asociar el menú.</p>');
				
			}//Fin del if
			
		}//Fin del success
		
	});//Fin del ajax
	
}//Fin de la función $.fn.desasociar_menu
/************************************/

