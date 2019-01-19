var consultar_clave;
var timer_modal;

/*
	Evento document ready
*/
$(document).ready(function(){    

	//Función donde se declaran todos los eventos
	$.fn.eventos();
	
});/*Fin del document ready*/
/***************************/

/*
	Función donde se declaran todos los eventos
*/
$.fn.eventos = function() {
	
	/*
		Evento click sobre el elemento #log_acceso
	*/
	$("#log_acceso").unbind('click');
	$("#log_acceso").click(function(){
		
		$.fn.modal_log_acceso();
		
	})//Fin del evento click

	/*
		Evento click sobre el elemento .cambio_clave
	*/
	$("#cambio_clave").unbind('click');
	$("#cambio_clave").click(function(){
		
		$.fn.modal_cambio_clave();
		
	})//Fin del evento click	
	
	/*
		Evento focusout sobre el elemento .actual_contasena
		Verifico mediante el ajax, el valor de la contraseña actual
	*/
	$("#actual_contasena").unbind('keyup');
	$("#actual_contasena").keyup(function(){
		
		$('#mensaje').html('');
		$('#mensaje').removeClass('bg-danger text-warning')
		
		//Obtenemos el valor
		var valor = $(this).val().trim();
		$(this).val(valor);
		
		clearTimeout(consultar_clave);
		consultar_clave = setTimeout(function(){ $.fn.clave_actual() }, 1000);
	
	})//Fin del evento focusout
	/*************************/
	
	/*
		Evento keyup sobre los campos #nueva_contasena
	*/
	$("#nueva_contasena").unbind('keyup');
	$("#nueva_contasena").keyup(function(){
		
		$('#mensaje').html('');
		$('#mensaje').removeClass('bg-danger text-warning');
				
		//Obtenemos el valor
		var valor = $(this).val().trim();
		$(this).val(valor);
		
		$.fn.validar_nueva_clave();
		
		$.fn.eventos();
		
	})//Fin del evento keyup
	/**********************/
	
	/*
		Evento keyup sobre los campos #confirmar_contasena
	*/
	$("#confirmar_contasena").unbind('keyup');
	$("#confirmar_contasena").keyup(function(){
		
		$.fn.validar_confirmacion_clave();
		
		$.fn.eventos();
		
	})//Fin del evento keyup
	/**********************/	
	

	/*
		Evento click sobre el btn #ver_contrasena
	*/
	$('#ver_contrasena').unbind('click');
	$('#ver_contrasena').click(function(){
		
		if($('#actual_contasena').attr('type') === 'password'){
			
			$('#actual_contasena').attr('type', 'text');
			$('#nueva_contasena').attr('type', 'text');
			$('#confirmar_contasena').attr('type', 'text');
			
			$(this).text('Ocultar Contraseña');
			$(this).addClass('btn-warning');
			$(this).removeClass('btn-info');
			
		}else{
			
			$('#actual_contasena').attr('type', 'password');
			$('#nueva_contasena').attr('type', 'password');
			$('#confirmar_contasena').attr('type', 'password');
			
			$(this).text('Mostrar Contraseña');
			$(this).addClass('btn-info');
			$(this).removeClass('btn-warning');
			
		}
		
		$.fn.eventos();
		
	})//Fin del evento click
	/**********************/   	
	
	
	/*
		Evento click sobre el btn #guardar_contrasena
	*/
	$('#guardar_contrasena').unbind('click');
	$('#guardar_contrasena').click(function(){
		
		var form = $("#form_cambio_contrasena")[0];
		
		//Verificamos el validador
		if(form.checkValidity()){

		    $.fn.cambiar_contrasena();
			
		}//fin if validador
		
	})//Fin del evento click
	/**********************/
	
	/*
		Evento click sobre la clase btn-danger
	*/	
//	$('.btn-danger').unbind('click');
//	$('.btn-danger').click(function(){
//		
//		//Blanqueamos las fechas 
//		$('#fecha_inicio input').val('');
//		$('#fecha_fin input').val('');
//		//Damos estilo Deshabilitado a la fecha fin
//		$('#fecha_fin input').attr('disabled',true);
//		$.fn.log_acceso('','');
//		
//		$.fn.eventos();
//		
//	})//Fin del evento click
	/*************************/
	
	/*
		Evento change sobre el campo #fecha_fin
	*/
	$('#fecha_fin').off('dp.hide');
	$('#fecha_fin').on('dp.hide', function(e){
		
		//Obtenemos la fecha
		var fecha_inicio = $('#fecha_inicio input').val();
		var fecha_fin    = $('#fecha_fin input').val();
		
		
		$.fn.log_acceso(fecha_inicio,fecha_fin);
		
		$.fn.eventos();
		
	});//Fin del evento dp.hide
	/*************************/
	
	/*
		Evento change sobre el campo #fecha_inicio
	*/
	$('#fecha_inicio').off('dp.hide');
	$('#fecha_inicio').on('dp.hide', function(e){
		
		//datetimepicker
		$('#fecha_fin').data("DateTimePicker").minDate(e.date);
		$('#fecha_fin input').val('');
		
		//Obtenemos el valor
		var fecha = $('#fecha_inicio input').val();
		
		//Evaluo si la fecha está vacia
		if(fecha == ''){
			
			//Deshabilitamos la fecha
			$('#fecha_fin input').attr('disabled',true);
			
		}else{
			
			//Habilitamos la fecha
		    $('#fecha_fin input').removeAttr('disabled'); 
			
		}//Fin de la fecha
		
		$.fn.eventos();
		
	});//Fin del evento dp.hide
	/*************************/
	
};//Fin de la función eventos
/***************************/

/*
	Funcion que muestra el log de acceso del usuario
*/
$.fn.log_acceso = function(fecha_inicio,fecha_fin){

	$.ajax({
				
			url : '../c_cuenta_usuario/log_acceso',
			type: 'POST',
			dataType: 'json',			
			iframe: true,
			dataType: 'json',
			data:  {fecha_inicio:fecha_inicio,fecha_fin:fecha_fin},
			async:false,
			beforeSend: function(objeto){

			},
			error: function(objeto, quepaso, otroobj){
				
			},
			success: function(data){

				var infoModal = '';
				
				//Recorremos los resultados de los logs
				$(data).each(function(index, element)
				{
				
					infoModal += '<div class="row text-center container-fluid dato_log">';
					infoModal += '	<div class="col-md-3">'+element['NAVEGADOR']+'</div>';
					infoModal += '	<div class="col-md-2">'+element['VERSION_NAVEGADOR']+'</div>';
					infoModal += '	<div class="col-md-2">'+element['SIST_OPERATIVO']+'</div>';
					infoModal += '	<div class="col-md-2">'+element['IP_USUARIO']+'</div>';
					infoModal += '	<div class="col-md-3">'+element['FECHA_CONEXION']+'</div>';
					infoModal += '</div>';
					
				});
				
				$('.dato_log').remove();
				$('.header_log').after(infoModal);
				
			}//Fin del success
				
		});//Fin del ajax
	
}//Fin de la función $.fn.log_acceso
/**********************************/

/*
	Arma la información de la modal del log de acceso	
*/    
$.fn.modal_log_acceso = function(){
	
	var infoModal = '';
	
	infoModal += '<form id="form_busqueda">';	
	infoModal += '  <div class="row container-fluid">';
	infoModal += '	  <div class="col-md-5">';
	infoModal += '      <div class="form-group">';
	infoModal += '        <div id="fecha_inicio" class="input-group date">';
	infoModal += '	        <input type="text" class="form-control" placeholder="Fecha Desde" name="fecha_inicio" required readonly="true"/>';
	infoModal += '	        <span class="input-group-addon">';
	infoModal += '	          <span class="glyphicon glyphicon-calendar"></span>';
	infoModal += '	        </span>';
	infoModal += '	      </div>';
	infoModal += '	    </div>';	
	infoModal += '	  </div>';	
	infoModal += '	  <div class="col-md-5">';
	infoModal += '      <div class="form-group">';
	infoModal += '        <div id="fecha_fin" class="input-group date">';
	infoModal += '	        <input type="text" class="form-control" placeholder="Fecha Hasta" name="fecha_fin" required disabled="true" readonly="true"/>';
	infoModal += '	        <span class="input-group-addon">';
	infoModal += '	          <span class="glyphicon glyphicon-calendar"></span>';
	infoModal += '	        </span>';
	infoModal += '	      </div>';
	infoModal += '	    </div>';	
	infoModal += '	  </div>';
	infoModal += '	  <div class="col-md-2">';
	infoModal += '      <div class="form-group text-center">';
	infoModal += '        <button class="btn btn-danger" type="button">Limpiar</button>';
	infoModal += '	    </div>';	
	infoModal += '	  </div>';	
	infoModal += '  </div>';
	infoModal += '</form>';		
	
	infoModal += '<div id="capa_scroll_modal">';
	infoModal += '  <div class="row container-fluid header_log affix" data-spy="affix" data-offset-top="197">';
	infoModal += '	  <div class="col-md-3 text-center">Navegador</div>';
	infoModal += '	  <div class="col-md-2 text-center">Versión</div>';
	infoModal += '	  <div class="col-md-2 text-center">S/O</div>';
	infoModal += '	  <div class="col-md-2 text-center">IP Usuario</div>';
	infoModal += '	  <div class="col-md-3 text-center">Fecha Conex.</div>';
	infoModal += '  </div>';
	infoModal += '</div>'; 
	
	//Seteamos el titulo de la modal
	$('.modal-header h4').text('Historial de conexiones "Log de acceso"');
	
	//Seteamos el footer
	$('.modal-footer').html('');
	$('.modal-footer').append('<button type="button" class="btn btn-success" data-dismiss="modal">Ok!</button>');
	
	//Seteamos el body de la moda
	$('.modal-body').html('');
	$('.modal-body').append(infoModal);
	$('.modal-dialog').css({
					 'width':'800px'
					});
	$('#capa_scroll_modal').css({
								 'height':'300px', 
								 //'border': '1px solid red', 
								 'overflow-y' : 'auto', 
								 'overflow-x' : 'hidden'
								});
	
	//Css de la capa '#capa_scroll_modal
	$('.modal-content').css({
						 'width':'100%',
						 'margin-left' : '0%'
						});
	
	//Mostramos la ventana modal
	$('.modal').modal('show');	
	
	//Evento cuando se carga la modal
	$('.modal').on('shown.bs.modal', function (e){
	    
		//Obtenemos la fecha actual	
		var fecha = new Date();
		
		//Inicializamos el calendario #fecha_inicio
		$('.date').datetimepicker({
			
			maxDate : fecha,
			format : 'DD/MM/Y',
			ignoreReadonly : true
			
		});
		
		$.fn.log_acceso(null,null);
		
		$.fn.eventos();
	  
	});//fin de carga de la modal	
	
	//Evento cuando se empiece a cerrar la modal
	$('.modal').on('hide.bs.modal', function (e){
	    
		//Desatamos el evento
		$('.modal').off('shown.bs.modal');
		
		$.fn.eventos();
	  
	});//fin de carga de la modal	  
	  
 }//Fin de la función $.fn.modal_log_acceso
 /****************************************/
 
/*
	Arma la información de la modal para el cambio de clave	
*/   
$.fn.modal_cambio_clave = function(){
	
	var modal  = '<form id="form_cambio_contrasena">';
		modal += '  <div class="row container-fluid">';
		modal += '	  <div class="col-md-12">';
		modal += '      <div class="form-group">';
		modal += '        <input name="actual_contasena" id="actual_contasena" type="password" placeholder="Actual Contraseña" class="form-control">';
		modal += '        <span class="glyphicon form-control-feedback" aria-hidden="true"></span>';
		modal += '		  <div class="help-block"></div>';
		modal += '	    </div>';
		modal += '	  </div>';	
		modal += '  </div>';
		modal += '  <div class="row container-fluid">';
		modal += '	  <div class="col-md-12">';
		modal += '      <div class="form-group has-feedback">';
		modal += '        <input name="nueva_contasena" type="password" id="nueva_contasena" placeholder="Nueva Contraseña" class="form-control" required disabled>';
		modal += '        <span class="glyphicon form-control-feedback" aria-hidden="true"></span>';
		modal += '		  <div class="help-block with-errors" id="pssw_info">La clave debe ser mayor a 8 caracteres, ser alfanumérico poseer mayúsculas y minúsculas y contener al menos uno de los siguientes caracter especiales #$.*=-</div>';		
		modal += '	    </div>';
		modal += '	  </div>';	
		modal += '  </div>';
		modal += '  <div class="row container-fluid">';
		modal += '	  <div class="col-md-12">';
		modal += '      <div class="form-group has-feedback">';
		modal += '        <input name="confirmar_contasena" type="password" id="confirmar_contasena" placeholder="Confirmar Contraseña" class="form-control" required disabled>';
		modal += '        <span class="glyphicon form-control-feedback" aria-hidden="true"></span>';
		modal += '		  <div class="help-block with-errors"></div>';
		modal += '	    </div>';	
		modal += '	  </div>';	
		modal += '  </div>';
		modal += '  <div id="mensaje"></div>';
		modal += '</form>';
		
		//Seteamos el titulo de la modal
		$('.modal-header h4').text('Cambio de Contraseña');	
        
		//Seteamos el footer
	    $('.modal-footer').html('');
		
		$('.modal-footer').append('<button  id="ver_contrasena" type="button" class="btn btn-warning">Mostrar Contraseña</button>');
		
		$('.modal-footer').append('<button  id="guardar_contrasena" type="button" class="btn btn-danger">Guardar</button>');	
		
		//Css de la capa '#capa_scroll_modal
		$('.modal-content').css({
							 'width':'50%',
							 'margin-left' : '22%'
							});

		//Seteamos el body de la moda
		$('.modal-body').html('');
		$('.modal-body').append(modal);		
		
		//Mostramos la ventana modal
		$('.modal').modal('show');
		
		//Evento cuando la ventana este cargada
		$('.modal').on('shown.bs.modal', function (e) {
		    
		  $.fn.eventos();
		  
		});
		
		//Evento cuando se empiece a cerrar la modal
		$('.modal').on('hide.bs.modal', function (e) {
			 
			 //Desatamos el evento
			 $('.modal').off('shown.bs.modal');
			 
			 clearTimeout(timer_modal);
			 
			 $.fn.eventos();
			 
		});		
	 
}//Fin de la función $.modal_cambio_clave
/****************************************/

/*
	Función que realiza el ajax para el cambio de la clave del usuario
*/
$.fn.cambiar_contrasena = function(){
	
	var claveCambiada = $('#confirmar_contasena').val();
	    		clave = btoa(claveCambiada);
	
	$.ajax({
				
		url : '../c_cuenta_usuario/cambiar_contrasena',
		type: 'POST',
		dataType: 'json',			
		iframe: true,
		dataType: 'json',
		data:  {clave:clave},
		async:false,
		beforeSend: function(objeto){
			 
			 $('#guardar_contrasena').css({'display':'none'});
			 
			 $('.modal-footer').append('<i class="fa fa-cogs fa-spin fa-fw" aria-hidden="true"></i>');

			 //removemos el mensaje de error o exito si existe
			 $('#mensaje').removeClass('bg-danger');	
			 
		},
		error: function(objeto, quepaso, otroobj){
			
			//muestro el mensaje de error
			$('#mensaje').html(quepaso/*data['MENSAJE_RESPUESTA']*/);
			$('#mensaje').addClass('bg-danger text-warning');
			
			//limpio los campos
			$('#nueva_contasena').val('');
			$('#confirmar_contasena').val('');			
			
			//remuevo el icono de carga
			$('.modal-footer .fa-cogs').remove();
			
			//Habilito el botón de guardar
			$('#guardar_contrasena').show();
			
			//quito los estilos exito de las validacio
			$("#nueva_contasena").parent('.form-group').removeClass('has-feedback has-success');
			$("#nueva_contasena").parent('.form-group').children('.glyphicon').removeClass('glyphicon-ok');

			$("#confirmar_contasena").parent('.form-group').removeClass('has-feedback has-success');
			$("#confirmar_contasena").parent('.form-group').children('.glyphicon').removeClass('glyphicon-ok');	

		},
		success: function(data){

			//Removemos la clase del cargando
			$('.modal-footer .fa-cogs').remove();
			
			//Habilito el botón de guardar
			$('#guardar_contrasena').show();
			
			//Evaluamos la respuesta
			if(data['CODIGO_RESPUESTA'] == 1){
				
				
				
				//Deshabilito el botón de guardar
			    $('#guardar_contrasena').attr('disabled',true);
				
				$('#mensaje').html(data['MENSAJE_RESPUESTA']);
				$('#mensaje').addClass('bg-success text-success');
				
				//cerramos la modal si es exitoso el cambio de clave
				timer_modal = setTimeout(function(){
								
								$('.modal').modal('hide');
									
				             }, 3000);
							 
			}else{

				//muestro el mensaje de error
				$('#mensaje').html(data['MENSAJE_RESPUESTA']);
				$('#mensaje').addClass('bg-danger text-warning');
				
				//limpio los campos
				$('#nueva_contasena').val('');
				$('#confirmar_contasena').val('');	
				
				//remuevo el icono de carga
				$('.modal-footer .fa-cogs').remove();
			 	//Habilito el botón de guardar
			 	$('#guardar_contrasena').show();
				
				//quito los estilos exito de las validacio
				$("#nueva_contasena").parent('.form-group').removeClass('has-feedback has-success');
				$("#nueva_contasena").parent('.form-group').children('.glyphicon').removeClass('glyphicon-ok');
	
				$("#confirmar_contasena").parent('.form-group').removeClass('has-feedback has-success');
				$("#confirmar_contasena").parent('.form-group').children('.glyphicon').removeClass('glyphicon-ok');	
				
			}//Fin del if
			
			$.fn.eventos();
							
		}//Fin del success
			
	});//Fin del ajax	
	
}//Fin de la función $.fn.cambiar_contrasena
/******************************************/

/*
	Función que valida la contraseña actual del usuario
*/
$.fn.clave_actual = function(){
	
	//Obtengo la clave ingresada y codifico la cadena "string" en base-64
	var actual_contasena = $('#actual_contasena').val();
				  clave  = btoa(actual_contasena);
		
	$.ajax({
				
		url : '../c_cuenta_usuario/obtener_actual_contrasena',
		type: 'POST',
		dataType: 'json',
		data:  {actual_contasena:clave},			
		iframe: true,
		dataType: 'json',
		async:false,
		beforeSend: function(objeto){
			
			$("#actual_contasena").parent().children('.with-errors').html('');
			
		},
		error: function(objeto, quepaso, otroobj){
			
		},
		success: function(data){
			
			if(data == true){ 
				
				$("#actual_contasena").parent('.form-group').removeClass('has-feedback has-error has-danger');
				$("#actual_contasena").parent('.form-group').addClass('has-feedback has-success');
				$("#actual_contasena").parent('.form-group').children('.glyphicon').removeClass('glyphicon-remove');
				$("#actual_contasena").parent('.form-group').children('.glyphicon').addClass('glyphicon-ok');
				$("#actual_contasena").parent().children('.help-block').html('');
				
				$("#actual_contasena")[0].setCustomValidity('');
				
				//Habilitamos los siguientes campos
				$('#nueva_contasena, #confirmar_contasena').removeAttr('disabled');
				
			}else{
				
				$("#actual_contasena").parent('.form-group').removeClass('has-feedback has-success');
				$("#actual_contasena").parent('.form-group').addClass('has-feedback has-error has-danger');
				$("#actual_contasena").parent('.form-group').children('.glyphicon').removeClass('glyphicon-ok');
				$("#actual_contasena").parent('.form-group').children('.glyphicon').addClass('glyphicon-remove');
				
				$("#actual_contasena").parent().children('.help-block').html('Contraseña incorrecta');
				$("#actual_contasena")[0].setCustomValidity(' ');
				
				//Deshabilitamos los siguientes campos
				$('#nueva_contasena, #confirmar_contasena').attr('disabled',true);
				
			}//Fin del if
			
			$.fn.eventos();
			
		}//Fin del success
				
	});//Fin del ajax	

}//Fin de la función $.fn.clave_actual
/************************************/

$.fn.validar_nueva_clave = function(){
	
	//Campo
	var campo = $('#nueva_contasena');
	
	//Obtenemos el valor del campo
	var clave = $('#nueva_contasena').val();
	
	//Obtenemos el valor del campo
	var actual = $('#actual_contasena').val();	
	
	//Limpiamos el campo
	campo.parent().children('.help-block').html('');
	campo[0].setCustomValidity('');
	
	//Regla que contenga una mayuscula
	var regla = new RegExp("[A-Z]+");
	
	//Evaluo si cumple la regla
	if(!regla.test(clave)){
		
		campo.parent('.form-group').removeClass('has-feedback has-success');
		campo.parent('.form-group').addClass('has-feedback has-error has-danger');
		campo.parent('.form-group').children('.glyphicon').removeClass('glyphicon-ok');
		campo.parent('.form-group').children('.glyphicon').addClass('glyphicon-remove');
		
		campo.parent().children('.help-block').html('Debe de contener al menos una mayúscula.');
		campo[0].setCustomValidity(' ');
		return false;
		 
	}//Fin del if
	
	//Regla que contenga una minúscula
	regla = new RegExp("[a-z]+");
	
	//Evaluo si cumple la regla
	if(!regla.test(clave)){
		
		campo.parent('.form-group').removeClass('has-feedback has-success');
		campo.parent('.form-group').addClass('has-feedback has-error has-danger');
		campo.parent('.form-group').children('.glyphicon').removeClass('glyphicon-ok');
		campo.parent('.form-group').children('.glyphicon').addClass('glyphicon-remove');
		
		campo.parent().children('.help-block').html('Debe de contener al menos una minúscula.');
		campo[0].setCustomValidity(' ');
		return false;
		 
	}//Fin del if
	
	//Regla que contenga un número
	regla = new RegExp("[0-9]+");
							
	//Evaluo si cumple la regla
	if(!regla.test(clave)){
		
		campo.parent('.form-group').removeClass('has-feedback has-success');
		campo.parent('.form-group').addClass('has-feedback has-error has-danger');
		campo.parent('.form-group').children('.glyphicon').removeClass('glyphicon-ok');
		campo.parent('.form-group').children('.glyphicon').addClass('glyphicon-remove');
		
		campo.parent().children('.help-block').html('Debe de contener al menos un número.');
		campo[0].setCustomValidity(' ');
		return false;
	}
	
	//Regla que contenga un caracter especial
	regla = new RegExp("[#*$.=-]+");
							
	//Evaluo si cumple la regla
	if(!regla.test(clave)){
		
		campo.parent('.form-group').removeClass('has-feedback has-success');
		campo.parent('.form-group').addClass('has-feedback has-error has-danger');
		campo.parent('.form-group').children('.glyphicon').removeClass('glyphicon-ok');
		campo.parent('.form-group').children('.glyphicon').addClass('glyphicon-remove');
		
		campo.parent().children('.help-block').html('Debe de contener uno de los sig caracteres especiales # $ .* = - .');
		campo[0].setCustomValidity(' ');
		return false;
	}	

	//regla El campo debe ser >= 8
	if(clave.length < 8) {
		
		campo.parent('.form-group').removeClass('has-feedback has-success');
		campo.parent('.form-group').addClass('has-feedback has-error has-danger');
		campo.parent('.form-group').children('.glyphicon').removeClass('glyphicon-ok');
		campo.parent('.form-group').children('.glyphicon').addClass('glyphicon-remove');
		
		campo.parent().children('.help-block').html('La contraseña debe poseer 8 caracteres.');
		campo[0].setCustomValidity(' ');
		return false;
    }	   
	
	//Regla la clave nueva no puede ser igual a la anterior
	if(actual == clave){

		campo.parent('.form-group').removeClass('has-feedback has-success');
		campo.parent('.form-group').addClass('has-feedback has-error has-danger');
		campo.parent('.form-group').children('.glyphicon').removeClass('glyphicon-ok');
		campo.parent('.form-group').children('.glyphicon').addClass('glyphicon-remove');
		
		campo.parent().children('.help-block').html('La contraseña debe ser diferente a la clave actual.');
		campo[0].setCustomValidity(' ');
		return false;		
		
		
	}
	
	campo.parent('.form-group').removeClass('has-feedback has-error has-danger');
	campo.parent('.form-group').addClass('has-feedback has-success');
	campo.parent('.form-group').children('.glyphicon').removeClass('glyphicon-remove');
	campo.parent('.form-group').children('.glyphicon').addClass('glyphicon-ok');
	
	$('#confirmar_contasena').trigger('keyup');
	
}//Fin de la función $.fn.validar_nueva_clave
/*******************************************/

/*
	Función que valida la confirmación de la contraseña
*/
$.fn.validar_confirmacion_clave = function(){
	
	var campo  = $('#confirmar_contasena');
	var camp2  = $('#nueva_contasena');
	var contra = $('#nueva_contasena').val();
	var confir = $('#confirmar_contasena').val();
	
	//Limpiamos el campo
	campo.parent().children('.help-block').html('');
	campo[0].setCustomValidity('');	
	
	if(confir != ''){
	
		//Evaluo si cumple la regla
		if(contra != confir){
			
			campo.parent('.form-group').removeClass('has-feedback has-success');
			campo.parent('.form-group').addClass('has-feedback has-error has-danger');
			campo.parent('.form-group').children('.glyphicon').removeClass('glyphicon-ok');
			campo.parent('.form-group').children('.glyphicon').addClass('glyphicon-remove');
			
			camp2.parent('.form-group').removeClass('has-feedback has-success');
			camp2.parent('.form-group').addClass('has-feedback has-error has-danger');
			camp2.parent('.form-group').children('.glyphicon').removeClass('glyphicon-ok');
			camp2.parent('.form-group').children('.glyphicon').addClass('glyphicon-remove');			
			
			
			campo.parent().children('.help-block').html('Opss no coinciden las contraseñas');
			campo[0].setCustomValidity(' ');
			return false;
			 
		}//Fin del if	
		
		campo.parent('.form-group').removeClass('has-feedback has-error has-danger');
		campo.parent('.form-group').addClass('has-feedback has-success');
		campo.parent('.form-group').children('.glyphicon').removeClass('glyphicon-remove');
		campo.parent('.form-group').children('.glyphicon').addClass('glyphicon-ok');
		
		camp2.parent('.form-group').removeClass('has-feedback has-error has-danger');
		camp2.parent('.form-group').addClass('has-feedback has-success');
		camp2.parent('.form-group').children('.glyphicon').removeClass('glyphicon-remove');
		camp2.parent('.form-group').children('.glyphicon').addClass('glyphicon-ok');		
		
	
	}//Fin del if
	
}//Fin de la función $.fn.validar_confirmacion_clave
/**************************************************/



				

