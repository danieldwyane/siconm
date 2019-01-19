//Variables globales
var alto_ventana  = null;
var ancho_ventana = null;
var foco_pantalla = null;
var socket        = null;
var temporizador  = null;

/*
	Evento document ready
*/
$(document).ready(function(){
	
	//localStorage para saber si una cuenta es valida
	localStorage.setItem("validador_cuenta", 0);
	
    //Obtenemos el ancho y alto de la ventana
    alto_ventana  = $(window).height();
    ancho_ventana = $(window).width();
    alto_cintillo = $('#capa_cintillo').height();
	
    //Seteo el css
	$('body > div:nth-child(2)').css({'width': ancho_ventana, 'height' : alto_ventana - alto_cintillo});
    $('body > div:nth-child(2) > div').css({'width': (ancho_ventana * 2) + 2, 'height' : alto_ventana - alto_cintillo});
	$('#capa_autenticacion, #capa_intranet')
	.css({'height': alto_ventana - alto_cintillo, 'width': ancho_ventana});
    $('#menu_izquierda').css({'height': alto_ventana - alto_cintillo});
    $('#capa_contenido, #capa_contenido iframe').css({'height': alto_ventana - alto_cintillo});
    $('#menu_arriba, #capa_contenido, #capa_contenido iframe').css({'width': ancho_ventana - 230});
	$('.capa_items_menus').css({'max-height': alto_ventana - 190});

	$('.capa_items_menus').enscroll({showOnHover:false,easingDuration:200});
	//$('.enscroll-track').parent().css({'left':'1500px !important'});
	
	//validamos las siguientes cookies
	var validar_session = $.fn.validar_session();
	
	//Evaluamos las cookies
    if(!validar_session[0]){
        
		//Ocultamos la capa #capa_intranet
	    $('#capa_intranet').hide();
		
		//Animo para mostrar siempre el campo que contiene la cuenta del usuario y el botón siguiente
		$('#capa_autenticacion form table tr:nth-child(2) td div, #capa_autenticacion form table tr:nth-child(4) td div, body > div:nth-child(2)')				
				.animate({
					scrollLeft: 0//$('#clave').position().left
				}, 0);
        
		//Seteo el foco sobre el campo donde se especifica la cuenta del usuario
		$(":input[type=email]").focus();
		
    }else{
        
		//Buscamos las notificaciones
		$.fn.notificaciones();
		
		//Mostramos la capa #capa_intranet
	    $('#capa_intranet').show();
		
		//Animo para mostrar siempre el campo que contiene la cuenta del usuario y el botón siguiente
		$('#capa_autenticacion form table tr:nth-child(2) td div, #capa_autenticacion form table tr:nth-child(4) td div')		
		.animate({
			scrollLeft: 0
		 }, 0);
		
		//Animación del div que contiene la Intranet
		$('body > div:nth-child(2)')
		.animate({
			scrollLeft: ancho_ventana
		},0)//Fin del animation
		
		//Función para armar el contiendio de la intranet asociado al usuario
		$.fn.cont_usu_intranet(validar_session[1],validar_session[2],validar_session[3]);
		
	}//Fin del if

    /*
    	Evento resize sobre la ventana
    */
    $(window).resize(function(){
        
		alto_ventana  = ($(window).height() < 550) ? 550 : $(window).height();
        ancho_ventana = ($(window).width() < 800) ? 800 : $(window).width();
		
		//Seteamos el ccs
		$('body > div:nth-child(2)').css({'width': ancho_ventana, 'height' : alto_ventana - alto_cintillo});
		$('body > div:nth-child(2) > div').css({'width': (ancho_ventana * 2) + 2, 'height' : alto_ventana - alto_cintillo});
		$('#capa_autenticacion, #capa_intranet')
		.css({'height': alto_ventana - alto_cintillo, 'width': ancho_ventana});
		$('#capa_cintillo').css({'width': ancho_ventana});
		$('#menu_arriba, #capa_contenido, #capa_contenido iframe').css({'width': ancho_ventana - 230});
		$('#menu_izquierda').css({'height': alto_ventana - alto_cintillo});
		$('#capa_contenido, #capa_contenido iframe').css({'height': alto_ventana - alto_cintillo - 60});
		$('.capa_items_menus').css({'max-height': alto_ventana - 190});
		
		clearTimeout(foco_pantalla);
		
		foco_pantalla = setTimeout($.fn.focoPantalla,500);
		
    });//Fin del evento resize
    /************************/
    
	/*
    	Evento keypres sobre la ventana
    */
	$(window).keydown(function(evento){
       
		//Obtenemos el código de la tecla presionada
		var codigo_tecla = evento.keyCode || evento.which;
	
		//Evaluo el código
		if(codigo_tecla == 9){
			
			return false;
			
		}else if(codigo_tecla == 13){
			
			//Evaluamos el localStorage
			if(localStorage.getItem("validador_cuenta") == 0){
				
				//Llamamos la función que valida la cuenta del usuario
				$.fn.validar_cuenta();
			
			}else if(localStorage.getItem("validador_cuenta") == 1){
				
				//Llamamos la función que valida la clave del usuario
				$.fn.validar_clave();
				
			}//Fin del if
			
		}//Fin del if

    });//Fin del evento keypress
    /**************************/
	
	//Función donde se declaran todos los eventos
    $.fn.eventos();
	
});/*Fin del document ready*/
/***************************/

/*
	Función donde se declaran todos los eventos
*/
$.fn.eventos = function() {
    
	//Llamamos al método para mostrar los tooltips
	$('[data-toggle="tooltip"]').tooltip();
	
    /*
    	Evento click sobre el botón 'Siguiente'
    */
	$('#capa_autenticacion form table tr:nth-child(4) input:nth-child(1)').unbind('click');	
	$('#capa_autenticacion form table tr:nth-child(4) input:nth-child(1)').click(function() {		

        //Llamamos la función que valida la cuenta del usuario
        $.fn.validar_cuenta();

        //Función donde se declaran todos los eventos 
        $.fn.eventos();

    });//Fin del evento click
    /***********************/
    
    /*
    	Evento click sobre el botón 'Iniciar Sesion'
    */
    $('#capa_autenticacion form table tr:nth-child(4) input:nth-child(2)').unbind('click');
    $('#capa_autenticacion form table tr:nth-child(4) input:nth-child(2)').click(function() {	

        //Llamamos la función que valida la cuenta del usuario
        $.fn.validar_clave();

        //Función donde se declaran todos los eventos 
        $.fn.eventos();

    });//Fin del evento click
    /***********************/

    /* 
    	Evento click sobre la capa que contiene el icono para volver a mostrar 
    	nuevamente el input que contiene la cuenta del usuario y el input tipo
    	botón 'siguiente'
    */
    $('#capa_autenticacion > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)').unbind('click');
    $('#capa_autenticacion > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)').click(function() {
       
		//Borramos el localStorage usuario_ldap
		localStorage.removeItem("usuario_ldap");
		
		//Seteamos el localStorage
		localStorage.setItem("validador_cuenta", 0);
		
        //Verificar si el div del mensaje de error existe
        //msu-$('#capa_autenticacion > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) form table tr:nth-child(2) td div')
		$('#capa_autenticacion form table tr:nth-child(3) td div')
                .animate({
						    'height': '10px'
						  },
						  function(){
		
							//Removemos la clase
							$(this).removeClass('msj_error').html('');
		
						  })//Fin del animation
        
		//Muestro el nombre del usuario
		$('#capa_autenticacion form table tr:nth-child(1) td div').animate({
			'height' : '20px'
		},
		function(){
		    
			//Limpio el contenido
			$(this).html('');
		    
			//Animo para mostrar siempre el campo que contiene la cuenta del usuario y el botón siguiente
			$('#capa_autenticacion form table tr:nth-child(2) td div, #capa_autenticacion form table tr:nth-child(4) td div')		
					.animate({
						scrollLeft: 0//$('#clave').position().left
					}, 
					function(){
					
						//Desbloqueamos los siguientes elementos
						$('#capa_autenticacion form table tr:nth-child(4) input:nth-child(1), #capa_autenticacion input[type=email]').removeAttr('disabled');
	
					});//Fin del animate
			
			//Seteamos el css de la imagen del logueo
			$('#capa_autenticacion > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)').css({'background-image':'url(../../assets/modules/intranet/images/usuario_logo_0.png','background-color':'rgba(225,225,225,1)', 'border':'1px solid rgba(0,0,0,0)'});
			
		});//Fin del animate
		
        $(this).fadeOut(300);
		
		//coloco el foco en el input email
		$(":input[type=email]").focus();

        $.fn.eventos();

    });//Fin del evento click
    /************************/

    /*
    	Evento click sobre los itenes del menú del primer nivel
    */
    $('#menu_izquierda #menu .modulo').unbind('click');
    $('#menu_izquierda #menu .modulo').click(function(event){
		
        //Obtengo el id del módulo y la altura de la lista
		var id_modulo = $(this).attr('id');
        var altura_ul = $(this).children('ul').height();
        
		//Evaluo que no sea un menú el que clickea
		if(!$(event.target).hasClass("menu")){
	
			//Evaluo la altura
			if(altura_ul == 0){
				
				//Recorro cada módulo
				$('#menu_izquierda #menu > li').each(function(index, element){
					
					//Obtengo el id
					var id_modulo_actual = $(this).attr('id');
				    
					//Evaluo el if
					if(id_modulo_actual != id_modulo){
						
						//Oculto los menus
						$(this).children('ul').animate({'height': '0px'},
								  function(){
									 // alert();
									 //Css
								     $(this).parent('li').css({'border-right':'5px solid #a74240'});
								     $(this).css('display','none');
									 $(this).parent('li').children('div').css({'border-top': '1px solid rgba(255,255,255,0)', 'border-bottom': '1px solid rgba(0,0,0,0)'});
									 
						});
						
					}else{
					
						$(this).children('ul').show();
										  
						//Obtengo los valores para desplegar
						var num_items = $(this).children('ul').children('li').length;
						var alto_item = $(this).children('ul').children('li').height();
		 
						//Mostramos la lista
						$(this).children('ul').animate({'height': alto_item});
		
						//Seteamos el css
						$(this).children('div').css({'border-top': '1px solid rgba(255,255,255,0.3)', 'border-bottom': '1px solid rgba(0,0,0,0.3)'});
						$(this).css({'border-right':'5px solid #a74240'});
					
					}//Fin del if
					
                });

			}else{
	            
				//Ocultamos la lista
				$(this).children('ul')
				.animate({'height': '0px'},
				          function(){
							  
							  //Css
							  $(this).parent('li').css({'border-right':'5px solid #a74240'});
							  $(this).css('display','none');
							  
						 });
	
				//Seteamos el css
				$(this).children('div').css({'border-top': '1px solid rgba(255,255,255,0)', 'border-bottom': '1px solid rgba(0,0,0,0)'});
				
				//Remuevo la clase a los menus
				$('#menu_izquierda #menu li ul li').removeClass('menu_activo');
	
			}//Fin del if
        
		}//Fin del if
		
        $.fn.eventos();

    });//Fin del evento click
    /***********************/

	/*
		Evento click sobre los itenes del menú del segundo nivel 
	*/
	$('#menu_izquierda #menu li ul li').unbind('click');
	$('#menu_izquierda #menu li ul li').click(function(event) {
	   
		//Seteo la clase para indicar que el menú fue clickeado
		$('#menu_izquierda #menu li ul li').removeClass('menu_activo');
		$(this).addClass('menu_activo');
		
		//Obtengo la ruta del menú
		var ruta = $(this).attr('href');
		
		//Seteo al iframe la ruta del menú
		$('#capa_contenido iframe').attr('src', ruta);
		
		$.fn.eventos();
	
	});//Fin del evento click
	/***********************/
    
	/*
		Evento click sobre el menú de las opciones de cuenta del usuario
	*/
	$('#menu_opc_usuario li').unbind('click')
	$('#menu_opc_usuario li').click(function(){
		
		//Obtengo el id
		var id = $(this).attr('id');
		
		//Evaluo el id
		switch(id){
			
			case '1': $.fn.cerrar_sesion(); break;
			
			case '2': //Seteo al iframe la ruta del menú
		              $('#capa_contenido iframe').attr('src', 'c_cuenta_usuario/opciones_usuario');
					  
					  //validamos las siguientes cookies
					  var validar_session = $.fn.validar_session();
					
					  //Función para armar el contiendio de la intranet asociado al usuario
					  $.fn.cont_usu_intranet(validar_session[1],validar_session[2]);
					  
					  break;
			
		}//Fin del switch
		
		$.fn.eventos();
		
	});//Fin del evento click
	
	/*
		Evento click sobre las notificaciones del usuario
	*/	
	$('#notificaciones').unbind('click');
	$('#notificaciones').click(function(){
		
		$('#capa_contenido iframe').attr('src', 'intranet/c_notificaciones/notificaciones');
		
	});//Fin del evento click
	
	
	/*
		Evento click sobre el botón #restablecer_intranet
	*/
	$('#restablecer_intranet').unbind('click');
	$('#restablecer_intranet').click(function(){
		
		//validamos las siguientes cookies
		var validar_session = $.fn.validar_session();
		
		//Limpiamos el contenido del iframe
		$('#capa_contenido iframe').attr('src','');
		
		//Función para armar el contiendio de la intranet asociado al usuario
		$.fn.cont_usu_intranet(validar_session[1],validar_session[2],validar_session[3]);
		
		$.fn.eventos();
		
	});//Fin del evento click
	/***********************/
	
	/*
		Evento click sobre el botón 
	*/
	/*$('#minimizar_menu').unbind('click');
	$('#minimizar_menu').click(function(){
		
		$('#menu_izquierda').addClass('menu_izquierda_min');
		
		$.fn.eventos();
		
	});//Fin del evento click
	/***********************/
	
};//Fin de la función eventos
/***************************/

/*
	Funcion que valida la cuenta del usuario
*/
$.fn.validar_cuenta = function() {
    		
	//Validamos
	var validador = $.fn.validar_email();

	//Evaluamos la respuesta del validador
	if(validador[0]){
	
		//Obtenemos la cuenta del usuario
		var cuenta = validador[1];
	
		//Ajax
		$.ajax({
			url: 'c_intranet/validar_cuenta',
			type: 'POST',
			dataType: 'json',
			data: {
                            "cuenta" : cuenta,
                            "g_recaptcha_response" : $('#g-recaptcha-response').val()
                        },
			beforeSend: function(objeto) {
	        	
				//Bloqueamos los siguientes elementos
				$('#capa_autenticacion form table tr:nth-child(4) input:nth-child(1), #capa_autenticacion input[type=email]').attr('disabled',true);
				
			},
			
			error: function(objeto, quepaso, otroobj) {
	        	
				//Desbloqueamos los siguientes elementos
				$('#capa_autenticacion form table tr:nth-child(4) input:nth-child(1), #capa_autenticacion input[type=email]').removeAttr('disabled');
				
			},
			//timeout: 10000,
			success: function(data){
				
				//Evaluamos
				if(data['CODIGO_RESPUESTA'])
				{
					
					//Seteamos el localstorage 
					localStorage.setItem("usuario_ldap", data['USUARIO_LDAP']);
							
					//Verificar si el div del mensaje de error existe
					$('#capa_autenticacion form table tr:nth-child(3) td div')
							.animate({
								'height': '10px'
							},
							function() {

								//Animación del input que contiene la cuenta del usuario
 								$('#capa_autenticacion form table tr:nth-child(2) td div, #capa_autenticacion form table tr:nth-child(4) td div')
										.animate({
											scrollLeft: 330
										},
										400,
												function()
												{
	                                                
													//Seteo el foco sobre el campo de la contraseña
													$(":input[type=password]").focus();
													
													//Mostramos la capa que contiene el icono para mostrar de vuelta el input
													//que contiene la cuenta del usuario y el input tipo botón siguiente
													$('#capa_autenticacion > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)').fadeIn(300);
													
													//Seteamos el css de la imagen del logueo
													$('#capa_autenticacion > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)').css({'background-image':'url(../../assets/modules/intranet/images/usuario_logo_1.png','background-color':'rgba(255,255,255,1)', 'border':'1px solid rgba(0,0,0,0.13)'});
													
													//Muestro el nombre del usuario
													$('#capa_autenticacion form table tr:nth-child(1) td div').animate({
														'height' : '50px'
													},
													function(){
													
														$(this).html(cuenta);
													
													});//Fin del animate
													 
												}//Fin del function
										);//Fin del animate
	
								//Removemos la clase
								$(this).removeClass('msj_error').html('');
	
							})//Fin del animation
                                                        
                                                                var div = document.getElementById('batman')
                                                            
                                                                var parent = div.parentElement;
                                                                parent.removeChild(div);
							
					//coloco el foco en el input password
					//$(":input[type=password]").focus();
							
					//Seteamos el localStorage
					localStorage.setItem("validador_cuenta", 1);
	
				}
				else
				{
	
					//Mostramos el error
					/*$('#capa_autenticacion > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) form table tr:nth-child(2) td div')*/
					$('#capa_autenticacion form table tr:nth-child(3) td div')
							.animate({
								'height': '50px'
							},
							function() {
	                            
								//Desbloqueamos los siguientes elementos
								$('#capa_autenticacion form table tr:nth-child(4) input:nth-child(1), #capa_autenticacion input[type=email]').removeAttr('disabled');								
								
								//Agregamos la clase
								$(this).addClass('msj_error').html(data.RESPUESTA);
	
							})//Fin del animation
	
				}//Fin del if
	
				$.fn.eventos();
	
			}//Fin del success
	
		});//Fin del ajax
	
	}//Fin del if validador
	
}//Fin de la función
/******************/

/*
	Función que valida el campo de la cuenta de usuario
*/
$.fn.validar_email = function(){
	
	//Obtenemos la cuenta del usuario
	var cuenta = $('#capa_autenticacion input[type=email]').val();
	
	//Evaluamos si existe el arroba
	if(cuenta.indexOf("@") >= 0)
	{
		
		//Regla para el formato
		var regla = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		//Evaluamos si el formato es valido
        if(regla.test(cuenta)){
			
			return [true,cuenta];
			
		}else{
			
			//Le agregamos la clase .campo_error
			$('#capa_autenticacion input[type=email]').removeClass('campo_error');
			
			//Mostramos el error
			$('#capa_autenticacion form table tr:nth-child(3) td div')
					.animate({
						'height': '50px'
					},
					function(){

						//Agregamos la clase
						$(this).addClass('msj_error').html('Intriduzca una dirección válida.');

					})//Fin del animation
			
			return [false];
			
		}//Fin del if

	}else{

		//Retornamos un array
		return [true,cuenta+'@minpal.gob.ve'];
		
	}//Fin del if
	
}//Fin de la función
/******************/

/*
	Función que valida la contraseña del usuario
*/
$.fn.validar_clave = function(){
	
	var validador;

	//Obtenemos la cuenta del usuario
	var cuenta = $.fn.validar_email();
	var clave  = $('#capa_autenticacion input[type=password]').val();	
		clave  = btoa(clave);

	//Ajax
	$.ajax({
		url        : 'c_intranet/validar_clave',
		type       : 'POST',
		dataType   : 'json',
		data       : {
					  'clave'        : clave,
					  'cuenta'       : cuenta[1], 
					  'usuario_ldap' : localStorage.usuario_ldap
					 },
		beforeSend : function(objeto) {
			
			//Bloqueamos los siguientes elementos
			$('#capa_autenticacion form table tr:nth-child(4) input:nth-child(2), #capa_autenticacion input[type=password]').attr('disabled',true);
			
		},
		error: function(objeto, quepaso, otroobj) {
			
			//Desbloqueamos los siguientes elementos
			$('#capa_autenticacion form table tr:nth-child(4) input:nth-child(2), #capa_autenticacion input[type=password]').removeAttr('disabled');

		},
		//timeout: 10000,
		success: function(data) {
            
			//Desbloqueamos los siguientes elementos
			$('#capa_autenticacion form table tr:nth-child(4) input:nth-child(2), #capa_autenticacion input[type=password]').removeAttr('disabled');
			
			//Evaluamos
			if(data['CODIGO_RESPUESTA'])
			{
				
				//verificamos si existe notificaciones sin leer
			    $.fn.notificaciones();
				
				//Mandamos a verificar la sesion de usuario
				temporizador = setInterval(function(){
				
					var session = $.fn.valor_cookie('ID_USUARIO');
					
					if(session == '' || session == null){
						
						$.fn.cerrar_sesion();
						
					}//Fin del if
					
				}, 5000);
				
				//Verificar si el div del mensaje de error existe
				$('#capa_autenticacion form table tr:nth-child(3) td div')
						.animate({
							'height': '10px'
						},
						function() {
                            
							//Mostramos la capa #capa_intranet
							$('#capa_intranet').show();
							
							//Animación del div que contiene la Intranet
							$('body > div:nth-child(2)')
									.animate({
										scrollLeft: ancho_ventana//$('#clave').position().left
									},
									800,
									function()
									{
										
										//Desbloqueamos los siguientes elementos
										$('#capa_autenticacion form table tr:nth-child(4) input:nth-child(2), #capa_autenticacion input[type=password]').removeAttr('disabled');
										
										//Limpio el campo del password
										$(":input[type=password]").val('');

									});

							//Removemos la clase
							$(this).removeClass('msj_error').html('');

						})//Fin del animation
						
						$('.nombre_usuario').html('');
						
						var respuestaF = $.fn.formato_nomb_usu(data['NOMBRE_USUARIO']);
                                                
                                                var res = respuestaF.substring(0, 20);

//						$('.nombre_usuario').html(respuestaF);
                                                
                                                $('.nombre_usuario').html(res+'...');
						
						//Evaluamos si la foto del usuario es nula
//						if(data['FOTO_USUARIO'] != null && data['FOTO_USUARIO'] != ''){
//							
//							$('.usuario div')
//							.eq(0)
//							.css({
//								  'background-image':'url(assets/modules/rrhh/images/usuarios/'+data['FOTO_USUARIO']+')'
//								});
//							$('.opcion_usuario img').attr('src','/assets/modules/rrhh/images/usuarios/'+data['FOTO_USUARIO']);
//							
//							var popover = $('.usuario div')
//							              .eq(0)
//										  .popover({
//													html : true,
//													trigger : 'hover',
//													content :  "<img class='img-thumbnail' src='/assets/modules/rrhh/images/usuarios/"+data['FOTO_USUARIO']+"' width='140'/>",
//													container : 'body' 
//							              });
//							
//						}else{
							
							$('.usuario div')
							.eq(0)
							.css({
								  'background-image':'url(../../assets/modules/intranet/images/usuario_logo_0.png)'
								});
							$('.opcion_usuario img').attr('src','/../../eventos/aplicaciones/assets/modules/intranet/images/usuario_logo_0.png');
							
//						}//Fin del if
						
						$.fn.menu_intranet(data['PERMISOS'],0);
                                                
//                                                $('#capa_contenido iframe').attr('src', '/../../eventos/aplicaciones/assets/modules/intranet/images/miranda.jpg');

			}else{
                
				//Desbloqueamos los siguientes elementos
				$('#capa_autenticacion form table tr:nth-child(4) input:nth-child(2), #capa_autenticacion input[type=password]').removeAttr('disabled');
				
				//Mostramos el error
				$('#capa_autenticacion form table tr:nth-child(3) td div')
						.animate({
							'height': '50px'
						},
						function() {

							//Agregamos la clase
							$(this).addClass('msj_error').html(data.RESPUESTA);

						}
						)//Fin del animation

			}//Fin del if

			$.fn.eventos();

		}//Fin del success

	});//Fin del ajax
	
}//Fin de la función
/*******************/

/*
	Funcion que da formato al nombre asociado usuario
*/
$.fn.formato_nomb_usu = function(string){

	//alert('AQUI->'+string);
	//return;
	
	var array       = string.split(" ");
	var num_indices = array.length;
	var nombre      = '';
	
	//Recorro el array
	for(var i = 0; i < num_indices; i++)
	{
		
		if(i == (num_indices - 1))
		{
		
			nombre += array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
		
		}else{
			
			nombre += array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase()+' ';
			
		}//Fin del if
		
	}//Fin del for

	return nombre;
	
}//Fin de la función
/******************/	

/*
	Función que arma el menú según el usuario
*/
$.fn.menu_intranet = function(data,btn_regresar){
	
    //Inicializamos variables
	var id_modulo = null;
	var menu      = '';
	
	//Limpiamos el contenedor del menú
	$('#menu').html('');
	
	//Evaluo si tiene que existir el botón de regresar
	//para mostrar los módulos de la intranet
	if(btn_regresar == 1){
		
		//Remuevo el botón #restablecer_intranet si existe
		$('#menu_arriba #restablecer_intranet').remove();
		
		//Muestro el botón #restablecer_intranet
		$('#menu_arriba .fa-bars').after('<i id="restablecer_intranet" class="fa fa-arrow-circle-left" aria-hidden="true" title="Regresar" data-toggle="tooltip" data-placement="bottom"></i>');
		
	}else{
		
		//Oculto el tooltips
		$('[data-toggle="tooltip"]').tooltip('hide');
		
		//Remuevo el botón #restablecer_intranet
		$('#menu_arriba #restablecer_intranet').remove();
		
	}//Fin del if btn_regresar
	
	//Muestro el icono del sistema
	//$('#menu_izquierda .icono_sistema').addClass(data[0]['ICONO_SISTEMA']);
	
	//Evaluo el n° de módulos
	if(data.length > 0){
	    
		//Muestro el nombre del sistema
		$('.titulo_menu .nombre_sistema').html('');
		$('.titulo_menu .nombre_sistema').append('<div>'+data[0]['nombre_sistema']+'</div>');
		
		//Evaluo la altura
		if($('.titulo_menu .nombre_sistema > div').height() > 40){
			
			//Seteamos el css
			$('.titulo_menu, .titulo_menu .nombre_sistema').css({'height':'50px'});
			$('.titulo_menu .nombre_sistema').css({'line-height':'25px'});
			$('.titulo_menu > div:nth-child(1)').css({'margin-top':'4px'});
			
		}else{
			
			//Seteamos el css
			$('.titulo_menu, .titulo_menu .nombre_sistema').css({'height':'40px'});
			$('.titulo_menu .nombre_sistema').css({'line-height':'36px'});
			$('.titulo_menu > div:nth-child(1)').css({'margin-top':'0px'});
			
		}//Fin del if
		
		//Recorremos para armar el módulo
		$(data).each(function(index, elemento){
		   
		   //Verificamos si no existe el módulo
		   if(elemento['id_modulo'] != id_modulo){
	           
			   //Evaluo si no es el primero
			   if(index > 0){
				   
				   menu += '</li>';
				   
			   }//Fin del if
			  
			   //Evaluamos si el módulo es pronto a ser lanzado
			   if(elemento['pronto'] == 'S'){
			   
				   menu += '<li id="'+elemento['id_modulo']+'">';
				   menu += '  <div>';
				   menu += '    <span class="icono_modulo '+elemento['icono_modulo']+'" aria-hidden="true"></span>';
				   menu += '    <span>'+elemento['nombre_modulo']+'</span>';
				   menu += '    <span class="fa fa-caret-down" aria-hidden="true"></span>';
				   menu += '    <div class="msj_pronto">Pronto</div>';
				   menu += '  </div>';
				
			   }else{
				   
				   //Evaluamos si es nuevo el módulo
				   if(elemento['nuevo'] == 'S'){
						
						menu += '<li id="'+elemento['id_modulo']+'" class="modulo">';
					    menu += '  <div>';
					    menu += '    <span class="icono_modulo '+elemento['icono_modulo']+'" aria-hidden="true"></span>';
					    menu += '    <span>'+elemento['nombre_modulo']+'</span>';
					    menu += '    <span class="fa fa-caret-down" aria-hidden="true"></span>';
					    menu += '  <div class="msj_nuevo">Nuevo</div>';
					    menu += '  </div>';
						
				    }else{
						
						menu += '<li id="'+elemento['id_modulo']+'" class="modulo">';
					    menu += '  <div>';
					    menu += '    <span class="icono_modulo '+elemento['icono_modulo']+'" aria-hidden="true"></span>';
					    menu += '    <span>'+elemento['nombre_modulo']+'</span>';
					    menu += '    <span class="fa fa-caret-down" aria-hidden="true"></span>';
					    menu += '  </div>';
						
				    }//Fin del if elemento['nuevo']

			   }//Fin del if elemento['pronto']
				
			   //Seteamos el id_modulo
			   id_modulo = elemento['id_modulo'];
			  
		   }//Fin del if
           
		   //Armamos los menús
		   menu += '<ul>';
		   menu += '  <li id="'+elemento['id_menu']+'" href="'+elemento['ruta_menu']+'" class="menu">'+elemento['nombre_menu']+'</li>';
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
	Función que muestra el contenido de la intranet según el usuario
*/
$.fn.cont_usu_intranet = function(nombre_usuario,permisos,foto_usuario){
	
	var respuestaF = $.fn.formato_nomb_usu(nombre_usuario);
	
        var res = respuestaF.substring(0, 20);
                                
//	$('.nombre_usuario').html(respuestaF);
        $('.nombre_usuario').html(res+'...');
	
	//Evaluamos si la foto del usuario es nula
	if(foto_usuario != null && foto_usuario != ''){
		
		$('.usuario div')
		.eq(0)
		.css({
			  'background-image':'url(assets/modules/rrhh/images/usuarios/'+foto_usuario+')'
			});
	
		$('.opcion_usuario img').attr('src','/assets/modules/rrhh/images/usuarios/'+foto_usuario);
		
	    $('.usuario div').eq(0).popover({
		  html: true,
		  trigger: 'hover',
		  content:  "<img class='img-thumbnail' src='/assets/modules/rrhh/images/usuarios/"+foto_usuario+"' width='140'/>",
		  container: 'body' 
		});
		
	}else{
		
		$('.usuario div')
		.eq(0)
		.css({
			  'background-image':'url(../../assets/modules/intranet/images/usuario_logo_0.png)'
			});
		$('.opcion_usuario img').attr('src','/../../eventos/aplicaciones/assets/modules/intranet/images/usuario_logo_0.png');
		
	}//Fin del if
	
	$.fn.menu_intranet(permisos,0);
	
}//Fin de la función cont_usu_intranet
/************************************/
	
/*
	Funcion que valida la existencia de la cookie 
*/
$.fn.validar_session = function(){
	
	var respuesta;
		
	$.ajax({
		url        : 'c_intranet/validar_session',
		type       : 'POST',
		async      : false,
		dataType   : 'json',
		
		success: function(data) {
			
			//Evaluamos el código de la respuesta
			if(data['CODIGO']){
				
				//Seteamos respuesta
				respuesta = [data['CODIGO'],data['NOMBRE_USUARIO'],data['PERMISOS'],data['FOTO_USUARIO']];
                                
//                                $('#capa_contenido iframe').attr('src', '/../../eventos/aplicaciones/assets/modules/intranet/images/miranda.jpg');
				
			}else{

			   //Seteamos respuestaf
			   respuesta = [data['CODIGO']];
			   
			}//Fin del if

		}//Fin del success

	});//Fin del ajax	
	
	return respuesta;
	
}//Fin de la función $.fn.validar_session
/***************************************/

/*
	Función que cierra la sesión del usuario
*/
$.fn.cerrar_sesion = function(){
	
	//Borramos el localStorage usuario_ldap
				//localStorage.removeItem("usuario_ldap");
	
	$.ajax({
		url      : 'c_intranet/cerrar_session',
		type     : 'POST',
		async    : false,
		dataType : 'json',
		success  : function(data){
			
			$('.usuario div').eq(0).popover('destroy');
			
			//Limpiamos el temporizador
			clearInterval(temporizador);
			
			//Cerramos el socket
//			socket.disconnect();
			
			//Verificar si el div del mensaje de error existe
			$('#capa_autenticacion form table tr:nth-child(3) td div')
			.animate({
				'height': '10px'
			},
			function() {
                
				//Ejecutamos el evento click sobre el botón que muestra el input para colocar la cuenta del usuario
				$('#capa_autenticacion > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)').trigger('click');
				
				//Animación del div que contiene la Intranet
				$('body > div:nth-child(2)')
						.animate({
							scrollLeft: 0
						},
						800,
						function()
						{
							
							//Limpiamos el nombre del usuario
							$('.nombre_usuario').html('');
							
							//Limpiamos el contenido del iframe
							$('#capa_contenido iframe').attr('src','');
							
							//Ocultamos la capa #capa_intranet
							$('#capa_intranet').hide();
							
						});//Fin del animate

			})//Fin del animation
			
			$.fn.eventos();

		}//Fin del success

	});//Fin del ajax
	
}//Fin de la función $.fn.cerrar_sesion
/*************************************/

/***************************************/
/* Función que reposiciona la pantalla */
/***************************************/
$.fn.focoPantalla = function(){
    
	//validamos las siguientes cookies
	var validar_session = $.fn.validar_session();
	
	//Evaluamos las cookies
    if(!validar_session[0]){
		
		//Animación del div que contiene la Intranet
		$('body > div:nth-child(2)')
		.animate({
			scrollLeft: 0
		},500)//Fin del animation
		
	}else{
	
		//Animación del div que contiene la Intranet
		$('body > div:nth-child(2)')
		.animate({
			scrollLeft: ancho_ventana
		},500)//Fin del animation
	
	}//Fin del if
	
};//Fin de la función
/*******************/



$.fn.muestraInfoCuenta = function(){
	

$.ajax({
				
			url : 'c_cuenta_usuario/info_opciones_usuario',
			type: 'POST',
			dataType: 'json',			
			iframe: true,
			dataType: 'json',
			//data:  "idcc="+idcc,
			async:false,
			beforeSend: function(objeto){

			},
			error: function(objeto, quepaso, otroobj){
				
			},
			success: function(data){
				//alert('may->'+data);
				//var numReg = data['USLA_USUS_ID'].length;
				//return;
				
	
		//Evaluamos el nº de registros
		//if(numReg > 0){}
		var tabla =  '<table>';
			tabla += '<tr>';
			tabla += '<td>hola</td>';
			tabla += '</tr>';			
			tabla += '<table>';				
				
			//muestro la información de la cuenta del usuario
			//$('#ctaUsuario').append(tabla);
			$('#capa_contenido iframe').append(tabla);
					
										
			
			}//Fin del success
				
		});
	
}

/*
	Realiza el ajax que cuenta las notificaciones sin leer
*/
$.fn.notificaciones = function(){
    
	//Conextamos al node-server
//    socket = io.connect('http://'+window.location.hostname+':8080', { 'forceNew': true });
	
	/*
		Eventos para enviar el id del usuario al servidor
	*/
//	socket.on('get_id_usuario',function(data){
//		
//		//Variables para enviar el mensaje al servidor node
//		var id_usuario = $.fn.valor_cookie('ID_USUARIO');
//		var parametros = {
//						  id_usuario : id_usuario
//						 }
//		
//		//Envio el mensaje	
//		socket.emit('get_num_notif',parametros);
//		
//	});//Fin del evento messages
	
	/*
		Evento que recibe el n° de notificaciones del usuario
	*/
//	socket.on('num_notif', function(data){
//		  
//		$.fn.num_notificaciones(data);
//		
//	});//Fin del evento messages
//	
//	/*
//		Evento cuando se desconecte del servidor
//	*/
//	socket.on('disconnect', function(){
//		
//        $("#num_mensaje").text(0);
//		$("#num_mensaje").parent().children('.fa').removeClass('notificacion_activa');
//		
//    });//Fin del evento disconnect
	
}//Fin de la función $.fn.notificaciones 
/**************************************/

/*
	Función que muestra el n° de notificaciones del usuario
*/
$.fn.num_notificaciones = function(data){
	
	//Evaluamos si posee notificaciones
	if(data.num_notif > 0){
		
		$("#num_mensaje").parent().children('.fa').addClass('notificacion_activa');
		
	}else{
		
		$("#num_mensaje").parent().children('.fa').removeClass('notificacion_activa');
		
	}//Fin del if
	
	$("#num_mensaje").text(data.num_notif);
	
}//Fin de la función $.fn.notificacion

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