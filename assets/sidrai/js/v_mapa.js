
var mapa                            = null;
var xhr                             = null;
var marca                           = null;
var sucuarsalesArray                = new Array();
var marcasArray                     = new Array();
var infoBubble                      = null;
var array_contactos                 = new Array();
var geocerca_zona_inspeccion        = new Array();
var marca_cluster                   = null;
var menu_marca_admin;
    //capa_marca_menu_admin.prototype = new google.maps.OverlayView();
var marca_admin                     = null;
var editando_marca                  = 0;
var id_sucursal_editando            = null;
var indice_marca_editando           = null;
//var url_base                        = window.location.pathname;


/*************************/
/* Evento document ready */
/*************************/
$(document).ready(function(){
  
  //Asignamos el método multiselect
 
//  $('#menu_mapa select').eq(0).multiselect({
//										    buttonWidth            : '200px',
//										    enableFiltering        : true,
//										    includeSelectAllOption : true,
//										    maxHeight              : 200,
//										    nonSelectedText        : 'Seleccione',
//										    selectAllText          : 'Seleccionar todo'		
//										  });
// 										
//   
   //Deshabilitamos el select:option
   
   //Inicializamos el mapa con sus configuraciones
   $.fn.mapa();
     
   //Función donde se carga la información inicial   
   $.fn.carga_inicial();
   
});/*Fin del document ready*/
/***************************/

/*******************************************************/
/* Función donde se carga la data inicial para el mapa */
/*******************************************************/
$.fn.carga_inicial = function(){
   
	//Ajax
	$.ajax({
			
		url: 'data_inicial',
		type: 'POST',
		dataType: 'json',
		beforeSend: function(objeto){
	
		},
		error: function(objeto, quepaso, otroobj){
			
		},
		//timeout: 10000,
		success: function(data){
													
			//Asignamos la data al select:option
		        $('#menu_mapa select').eq(0).multiselect('dataprovider', data['filtro_1']);
                     
			//Función donde se declaran todos los eventos
		        $.fn.eventos();
		   
		}//Fin del success
			
	});//Fin del ajax
	
}//Fin de la función

/*
	Descripcion : Función donde se atan los eventos a los objetos
	Parametros  : Ninguno
	Retorna     : Nada
*/
$.fn.eventos = function(){
	
	/****************************************/
	/* Evento change sobre el primer filtro */
	/****************************************/
	$('#menu_mapa select').eq(0).unbind('change');
	$('#menu_mapa select').eq(0).change(function()
	{

                var valores = $(this).val();
		
		//Evaluo los valores
//		if(valores == null)
//		{
//			
//                        $('#menu_mapa select').eq(1).multiselect('disable');
//			$('#menu_mapa select').eq(1).multiselect('deselectAll', false);
//			$('#menu_mapa select').eq(1).multiselect('updateButtonText');
//			$('#menu_mapa select').eq(2).multiselect('disable');
//			$('#menu_mapa select').eq(2).multiselect('deselectAll', false);
//			$('#menu_mapa select').eq(2).multiselect('updateButtonText');
//			$('#menu_mapa select').eq(3).multiselect('disable');
//			$('#menu_mapa select').eq(3).multiselect('deselectAll', false);
//			$('#menu_mapa select').eq(3).multiselect('updateButtonText');
//			
//		}else{
//                    
                    //Función que actualiza los filtros de busqueda
//                    $.fn.marca_sucursales();
                    
//                }//Fin del if
		
		$.fn.eventos();
                
	});//Fin del evento change
	/************************/
	
	/*****************************************/
	/* Evento change sobre el segundo filtro */
	/*****************************************/
//	$('#menu_mapa select').eq(1).unbind('change');
//	$('#menu_mapa select').eq(1).change(function()
//	{
//		
//		//Función que actualiza los filtros de busqueda
//		$.fn.filtros();
//		
//		var valores = $(this).val();
//		
//		//Evaluo los valores
//		if(valores == null)
//		{
//			
//			$('#menu_mapa select').eq(2).multiselect('disable');
//			$('#menu_mapa select').eq(2).multiselect('deselectAll', false);
//			$('#menu_mapa select').eq(2).multiselect('updateButtonText');
//			$('#menu_mapa select').eq(3).multiselect('disable');
//			$('#menu_mapa select').eq(3).multiselect('deselectAll', false);
//			$('#menu_mapa select').eq(3).multiselect('updateButtonText');
//			
//		}//Fin del if
//		
//		$.fn.eventos();
//		
//	});//Fin del evento change
//	/************************/
//	
//	/****************************************/
//	/* Evento change sobre el tercer filtro */
//	/****************************************/
//	$('#menu_mapa select').eq(2).unbind('change');
//	$('#menu_mapa select').eq(2).change(function()
//	{
//		
//		//Función que actualiza los filtros de busqueda
//		$.fn.filtros();
//		
//		var valores = $(this).val(); 
//		
//		//Evaluo los valores
//		if(valores == null){
//			
//			$('#menu_mapa select').eq(3).multiselect('disable');
//			$('#menu_mapa select').eq(3).multiselect('deselectAll', false);
//			$('#menu_mapa select').eq(3).multiselect('updateButtonText');
//				
//		}//Fin del if
//		
//		$.fn.eventos();
//		
//	});//Fin del evento change
//	/************************/
//
//	/****************************************/
//	/* Evento change sobre el cuarto filtro */
//	/****************************************/
//	$('#menu_mapa select').eq(3).unbind('change');
//	$('#menu_mapa select').eq(3).change(function()
//	{
//		
//		//Función que actualiza los filtros de busqueda
//		$.fn.filtros();
//		
//		$.fn.eventos();
//		
//	});//Fin del evento change
	/************************/
	
	
	/**************************************/
	/* Evento click sobre el btn busqueda */
	/**************************************/
	$('.busqueda').unbind('click');
	$('.busqueda').click(function()
    {
                    
            //Obtengo valores
            var buque  = $('#menu_mapa select').eq(0).val();
//            var estados         = $('#menu_mapa select').eq(1).val();
//            var municipios      = $('#menu_mapa select').eq(2).val();
//            var parroquias      = $('#menu_mapa select').eq(3).val();
//            var sucursales      = $('#menu_mapa select').eq(4).val();
 
            //Ajax
            $.ajax({

                    url: 'marca_sucursales',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                                    buque  : buque
//                                    estados         : estados,
//                                    municipios      : municipios,
//                                    parroquias      : parroquias,
//                                    sucursales      : sucursales

                              },
                    beforeSend: function(objeto){


                    },
                    error: function(objeto, quepaso, otroobj){

                    },
                    //timeout: 10000,
                    success: function(data){

                            console.log(data);

                            $.fn.mostrar_marcas(data['marcas']);

                            $.fn.eventos();

                    }//Fin del success

            });//Fin del ajax

            $.fn.eventos();
      
            
	});//Fin del evento click
	/***********************/
	
	/*************************************/
	/* Evento click sobre el btn limpiar */
	/*************************************/
	$('.limpiar').unbind('click');
	$('.limpiar').click(function()
	{
		
		//Llamo a la función que limpia el mapa
		$.fn.borrar_marcas();
		
		$.fn.eventos();
		
	});//Fin del evento clic
	/**********************/
	
}//Fin de la función eventos
/**************************/

/*
	Descripcion : Función que actualiza los filtros
	Parametros  : Ninguno
	Retorna     : Los combos actualizados
*/
$.fn.filtros = function()
{
	
	//Obtengo valores
	
        var buque         = $('#menu_mapa select').eq(0).val();
//	var estados         = $('#menu_mapa select').eq(1).val();
//	var municipios      = $('#menu_mapa select').eq(2).val();
//	var parroquias      = $('#menu_mapa select').eq(3).val();
	
	//Ajax
	$.ajax({
			
		url: 'filtros',
		type: 'POST',
		dataType: 'json',
		data: {
			  	buque         : buque[0]
//				estados         : estados,
//				municipios      : municipios,
//				parroquias      : parroquias
				
			  },
		beforeSend: function(objeto){
		
		},
		error: function(objeto, quepaso, otroobj){
			
		},
		//timeout: 10000,
		success: function(data){
			
            //Muestro el contenido de los combos
			$('#menu_mapa select').eq(0).multiselect('dataprovider', data['filtro_1']);
//			$('#menu_mapa select').eq(1).multiselect('dataprovider', data['filtro_2']);
			
			//Evaluo si esta seleccionado algun Estado
//			if(estados)
//			{
//				
//				//Mostramos la información
//				$('#menu_mapa select').eq(2).multiselect('dataprovider', data['filtro_3']);
//			    
//				//Seteamos valores
//				$('#menu_mapa select').eq(2).multiselect('select', municipios);
//				
//			}//Fin del if
			
			//Evaluo si esta seleccionado algun Municipio
//			if(municipios)
//			{
//				
//				//Mostramos la información
//				$('#menu_mapa select').eq(3).multiselect('dataprovider', data['filtro_4']);
//			    
//				//Seteamos valores
//				$('#menu_mapa select').eq(3).multiselect('select', parroquias);
//				
//			}//Fin del if
//		   
//			//Seteamos valores
//			$('#menu_mapa select').eq(0).multiselect('select', jornada);
//			$('#menu_mapa select').eq(1).multiselect('select', estados);
//			
			
		}//Fin del success
			
	});//Fin del ajax
	
}//Fin de la función
/******************/

/*
	Función que muestra las marcas en el mapa
*/
$.fn.mostrar_marcas = function(data)
{
	
	//Borramos las marcas creadas
	$.fn.borrar_marcas();
	
	marcasArray = [];
	
	//Recorro cada una de las marcas
	$(data).each(function(index, element){
		
		
		
		//Evaluo la imagen a tomar
		/*if(element['icono_empresa'] != null){
			
			//Icono del ente
			var image = new google.maps.MarkerImage('../../assets/modules/mapa/images/iconos/empresas/'+element['icono_empresa'],
						new google.maps.Size(35, 35),
						new google.maps.Point(0, 0),
						new google.maps.Point(25, 0));
			
		}else{
			
			//Icono por defecto
			var image = new google.maps.MarkerImage('../../assets/modules/mapa/images/iconos/empresas/icon.png',
						new google.maps.Size(35, 35),
						new google.maps.Point(0, 0),
						new google.maps.Point(25, 0));
		
		}//Fin del if*/
		
		//Icono del ente
//		var image = new google.maps.MarkerImage('http://dev.minpal.gob.ve/assets/modules/empresa_distribucion/images/Imagen1.png',
//					new google.maps.Size(35, 35),
//					new google.maps.Point(0, 0),
//					new google.maps.Point(25, 0));
                                        
//                var image = 'http://dev.minpal.gob.ve/assets/modules/empresa_distribucion/images/buque.jpg';

                //Reposicionamos el mapa
		mapa.setCenter(new google.maps.LatLng(element['LATITUD'], element['LONGITUD']));
		mapa.setZoom(15)
		//Marca
		marca = new google.maps.Marker({
					map:mapa,
					//icon: image,
					title: element['NOMBRE'],
					position: new google.maps.LatLng(element['LATITUD'],element['LONGITUD'])
		});
		
		//Agregamos un evento click a la marca
		google.maps.event.addListener(marca,'click',function(event){
			
			//Llamos a la función que muestra la información de la sucurlsal
			$.fn.infoSucursal(element['ID'],marca,mapa,element['LATITUD'],element['LONGITUD']);
			
			//Verifico si la marca del láìz existe
			/*if(marcaLapiz){
				
				//Borro la marca del lápiz
				marcaLapiz.setMap(null);
				
			}//Fin del if
			
			//Verifico si la marca de la geocerca existe
			if(geocerca){
				
				geocerca.setMap(null);
				
			}//Fin del if
			
			//Verifico si la geocerca existe
			if(Nuevageocerca){
			   
			   //Reinicio el poligono si existe
			   ArrayNuevaGeocerca = [];
			   
			   //Borro las geocercas
			   Nuevageocerca.setMap(null);
	
			}//Fin del 
			
			//Borramos el menú del click derecho si existe
			$('.contextmenu').remove();
	
			*/
			
		});//Fin del eveto click
		
		//Agregamos un evento rightclick a la marca
		/*google.maps.event.addListener(marca, 'rightclick', function(event){
			 
			 //Obtengo la sesión del usuario
			 var sesion = $.fn.chequear_cookie('PERMISO_USUARIO');
			 
			 //Evaluo si hay un usuario administrador logueado
			 if(sesion == 1)
			 {
			 
			 	//Menú de la marca con el click derecho
			 	$.fn.menuMarca(event.latLng,element['id_sucursal'],index);
			 
			 }//Fin del if
			 
		});//Fin del evento rightclick
		
		//Agregamos un evento dragstart a la marca
		google.maps.event.addListener(marca, 'dragstart', function(event){
		 
		  	//Borramos el menú anterior si existe
			$('.contextmenu').remove();
		  
		});//Fin del evento drag
		
		//Agregamos un evento dragend a la marca
		google.maps.event.addListener(marca, 'dragend', function(event){
		 
		  	//Menú de la marca con el click derecho
			$.fn.menuMarca(event.latLng,element['id_sucursal'],index);
		  
		});//Fin del evento drag*/
		
		//Coloco la marca en un array
		marcasArray.push(marca);
		
	});//Fin del each
	
	var mcOpciones    = {gridSize: 30, maxZoom: 15};
	    marca_cluster = new MarkerClusterer(mapa, marcasArray, mcOpciones);
	
	//Configuramos la posición del mapa
	$.fn.posicion_mapa();
	
	//Ocultamos el mensaje de carga
	/*$('.background_progressbar').hide();*/
	
	$.fn.eventos();
	
};//Fin de la función
/*******************/

/*****************************************/
/* Función que borra las marcas del mapa */
/*****************************************/
$.fn.borrar_marcas = function()
{
	
	//Nª de marcas creadas
	var numMarcas = marcasArray.length;
	
	//Evaluamos si existe un cluster de marcar
	if(marca_cluster != null){
		
		marca_cluster.removeMarkers(marcasArray);
	    marca_cluster = null;
		
	}//Fin del if
	
	//Si el número de marcas es mayor a 0
	if(numMarcas > 0){
		
		//Por cada marca se setea a NULL para borrar
		for(i = 0; i < numMarcas; i++){
			
		  marcasArray[i].setMap(null);
		  
		}
		
		marcasArray.length = 0;
		
    }//Fin del if
	
	
	//new MarkerClusterer.clearMarkers();
	
}//Fin de la función
/******************/

































/**************************************/
/*Función que lista los items del menú*/
/**************************************/
$.fn.menu = function(){
	
	//Rmuevo los menus si existen
	$('.item_menu').html('');
	
	//Ajax
	$.ajax({
			
		url: 'c_mapa/filtro_busqueda',
		type: 'POST',
		dataType: 'json',
		beforeSend: function(objeto){
			
			//Msj de carga
			$('.background_progressbar').show();
				
		},
		error: function(objeto, quepaso, otroobj){
			
			//Ocultamos el mensaje de carga
			$('.background_progressbar').hide();
			
			//Evaluo el error
			if(quepaso == 'timeout'){
				
				var msj = 'Timeout!';
				
			}else{
				
				var msj = '<p>Ocurrio un error a la hora de mostrar los items del menú</p><p>Por favor cargue de nuevo la p&aacute;gina!.</p>';
				
			}//Fin del if
			
			//Ocultamos el mensaje de carga
			$('.background_progressbar').hide();
			
			var tipo      = 1;
			var ttl       = 'Error';
			var fn_si     = '';
			var txt_fn_si = '';
			var fn_no     = '';
			var txt_fn_no = '';
			var ancho     = 380;
			var alto      = 200;
			
			//Llamamos a la función que genera el dilogo
			$.fn.dialogo(tipo,msj,ttl,fn_si,txt_fn_si,fn_no,txt_fn_no,ancho,alto);
			
		},
		//timeout: 10000,
		success: function(data){
			
			//Ocultamos el mensaje de carga
			$('.background_progressbar').hide();
			
			//Armo los menus
			var tabla  = '<table id="tabla_filtros" border="0">';
			    tabla += '  <tr height="20">';
				tabla += '    <td></td>';
				tabla += '  </tr>';
				
				//Recorro cada uno de los filtros
				$(data['FILTROS_BUSQUEDA']).each(function(indice, elemento){
					
					tabla += '  <tr>';
					tabla += '    <td>';
					tabla += '      <div class="filtro_busqueda">';
					tabla += '        <select id_filtro="'+elemento['ID']+'" multiple title="'+elemento['TITULO']+'">';
					tabla += '          '+$.fn.combo_filtro_busqueda(elemento['VALORES'])+'';
					tabla += '        </select>';
					tabla += '      </div>';
					tabla += '    </td>';
					tabla += '  </tr>';
					
				});//Fin del each
				
				tabla += '  <tr height="10">';
				tabla += '    <td></td>';
				tabla += '  </tr>';
				tabla += '  <tr height="25">';
				tabla += '    <td align="center">';
				tabla += '      <input type="button" class="btn limpiar" value="Limpiar Mapa">';
				tabla += '      <input type="button" class="btn buscar" value="Mostrar">';
				tabla += '    </td>';
				tabla += '  </tr>';
			    tabla += '</table>';
				
			//Muestro los menus
			$('.item_menu').html('');
			$('.item_menu').append(tabla);
			
			//Recorro cada select para saber cuantos options posee
			$('#tabla_filtros .filtro_busqueda select').each(function(index, element) {
                
				//Obtengo el nº de options
				var num_options = $(this).children('option').length;
				
				//Vealuo
				if(num_options == 1){
					
					//Lo coloco como predeterminado
					$(this).children('option').attr('selected',true)
					
				}//Fin del if
				
            });//Fin del each
			
			//Recorro cada filtro y le asigno el método multiselect
			$('#tabla_filtros .filtro_busqueda select').each(function(index, elemento){
				
				$(this).multiselect({
			   
					minWidth: 300,
					multiple: true,
					noneSelectedText: $(this).attr('title'),
					height: 150,
					checkAllText: 'Seleccionar todos',
					uncheckAllText: 'Deseleccionar todos',
					selectedText: $(this).attr('title')+' (#)'
					
				}).multiselectfilter({
				   
					label: 'Filtro:',
					placeholder: '',
					width: 210
				   
			   });
                
            });//Fin del each
		    
		    $.fn.eventos();
		   
		}//Fin del success
			
	});//Fin del ajax
	
}//Fin de la función
/******************/

/************************************************/
/* Función que lista los valores de los filtros */
/************************************************/
$.fn.combo_filtro_busqueda = function(datos){
	
	//Obtengo el nº de registros
	var numReg = datos.length;
	
	//Armo los valores del combo
	var opcion = '';
	
	//Evaluo el nº de registros
	if(numReg > 0 ){
		
		//Recorro los resultados
		for(var i = 0; i < numReg; i++){
			
			opcion += '<option value="'+datos[i]['ID']+'">'+datos[i]['TEXTO']+'</option>';

		}//Fin del for
		
	}else{
		
		combo += '<option value="">'+titulo+' NO DISPONIBLES</option>';
		
	}//Fin del if
	
	return opcion;
	
}//Fin de la función
/******************/

/****************************************************************/
/* Función que muestra el formulario para autenticar el usuario */
/****************************************************************/
$.fn.form_autenticar_usuario = function(){
	
	var contenido  = '<center>';
	    contenido += '  <table border="0" class="tabla_logueo">';
		contenido += '    <tr>';
		contenido += '      <td>';
		contenido += '        <input id="usuario" class="validar validate[required,custom[onlyLetterNumber]]" type="text" data-prompt-position="bottomLeft" placeholder="Usuario">';
		contenido += '      </td>';      
		contenido += '    </tr>';
		contenido += '    <tr><td height="1"></td></tr>';
		contenido += '    <tr>';
		contenido += '      <td>';
		contenido += '        <input id="clave" class="validar validate[required]" type="password" data-prompt-position="topLeft" placeholder="Contrase&ntilde;a">';
		contenido += '      </td>';      
		contenido += '    </tr>';
		contenido += '  </table>';
		contenido += '</center>';
		
		//Ventana de confirmación
		$('#dialogo').dialog({
				   title: 'Zona de autenticaci\u00f3n',
				   resizable: false,
				   height:170,
				   width: 330,
				   modal: true,
				   buttons: {
							 "Acceder": function() {
								
								//Autenticamos         
								$.fn.autenticar_usuario();
								
							 },
							 "Cerrar": function(){
								 
								 $(this).dialog("close");
								 
							 }
				   },
				   show: {
					 effect: "explode",
					 duration: 500
				   },
				   hide: {
					 effect: "explode",
					 duration: 500
				   },
				   open: function(){
					  
					  //Mensaje del dialogo
					  $(this).append(contenido);
					  
					  $.fn.eventos();
					  
				   },
				   close: function(){
				 
					  $(this).dialog("destroy");
					 
				   },
				   beforeClose: function(){
			  
					  $(this).html('');
			  
				   } 
		});
		
		//Le asignamos un indice superior al del colorbox para hacerlo visible
		$('.ui-front').css('z-index','9000');
	
};//Fin de la función
/*******************/

/************************************/
/* Función que autentica el usuario */
/************************************/
$.fn.autenticar_usuario = function(){
	
   //Validamos
   var validador = $.fn.validar_usuario();
   
   //Evaluamos el validador
   if(validador == true){
	   
	   //Obtenemos los datos
	   var usuario = $('#usuario').val();
	   var clave   = $('#clave').val();
	   
	   //Evaluamos si hay un objeto xhr
	   if(xhr != null){
		   
		   xhr.abort();
		   
	   }//Fin del if
	   
	   xhr = $.ajax({

		  url: "c_mapa/autenticar_usuario",
		  type: "POST",
		  dataType: "json",
		  data:{
				usuario:usuario,
				clave:clave
			   },
		  async:true,
		  beforeSend: function(objeto){
				
			  //Ocultamos el mensaje de carga
			  $('.background_progressbar').show();	
			  
		  },
		  complete: function(objeto, exito){
		  },
		  contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
		  error: function(objeto, quepaso, otroobj){
			  
			  //Cerramos el dialogo
			  $('#dialogo').dialog('close');
			  
			  //Ocultamos el mensaje de carga
			  $('.background_progressbar').hide();
			  
			  xhr = null;
			  
			  //Evaluo el error
			  if(quepaso == 'timeout'){
					
					var msj   = 'Timeout!';
					
			  }else{
					
					var msj   = '<p>Ocurrió un error a la hora de autenticar el usuario.</p><p>Por favor intente de nuevo!.</p>';
					
			   }//Fin del if
				
			   var tipo  = 1;
			   var ttl   = 'Error';
			   var fn_si = '';
			   var fn_no = '';
			   var ancho = 350;
			   var alto  = 180;
			
			   //Llamamos a la función que genera el dilogo
			   $.fn.dialogo(tipo,msj,ttl,fn_si,fn_no,ancho,alto);
							  
		  },
		  processData:true,
		  success: function(data){
			  
			  xhr = null
			  
			  //Ocultamos el mensaje de carga
			  $('.background_progressbar').hide();
			  
			  //Obtengo la respuesta
			  var respuesta = data['AUTENTICACION'];
			  
			  //Evaluamos el código
			  if(respuesta['CODIGO'] == 'S00001')
			  {
			      
				  //Cerramos el dialogo
			      $('#dialogo').dialog('close');
				  
				  $('.capa_busqueda #1').remove();
				  $('.capa_busqueda #3').before('<div id="2" title="salir del administrador" class="tooltip"></div>');
				  $('.capa_busqueda #2').css({'background-image':'url(../../assets/modules/mapa/images/icon_logout.png)'});
				  $('.capa_busqueda #3').before('<div id="4" title="agregar sucursal" class="tooltip"></div>');
				  $('.capa_busqueda #4').css({'background-image':'url(../../assets/modules/mapa/images/icon_agregar_sucursal.png)'});
				  
				  //Creamos la cookie
				  $.fn.crear_cookie('PERMISO_USUARIO',respuesta['PERMISO']);
			  
			  }else{
				  
				  //Mostramos el mensje de error
				  $('.ui-dialog-buttonset .ui-button:first').attr('data-prompt-position','topLeft');
				  $('.ui-dialog-buttonset .ui-button:first').validationEngine('showPrompt', respuesta['MENSAJE'], 'topLeft','',true);
				  
			  }//Fin del if
			  
			  $.fn.toolTips('.tooltip');
			  
			  $.fn.eventos();
			  
		  }//Fin del success
		  
	   });//Fin del ajax
	   
   }else{
	   
	   $.fn.eventos();
	   
   }//Fin del if
	
};//Fin de la función
/*******************/

/****************************************************************/
/* Función que muestra la marca para agregar una nueva sucursal */
/****************************************************************/
$.fn.marca_nueva_sucursal = function(){

	//Evaluo si el menú de la marca administrador está activa
	if(marca_admin != null){
	  
		//Removemos la marca del administrador y su menú
		marca_admin.setMap(null);
		
		marca_admin = null;
		
		$('.menu_marca_admin').remove();
	  
	}else{
	
		//Reposicionamos el mapa
		mapa.setCenter(new google.maps.LatLng(10.486630325006969, -66.93214416503906));
		mapa.setZoom(13);
		
		//Icono por defecto
		var image = new google.maps.MarkerImage('../../assets/modules/mapa/images/icon_marca_admin.png',
				  new google.maps.Size(70, 70),
				  new google.maps.Point(0, 0),
				  new google.maps.Point(36, 67),
				  new google.maps.Size(70, 70)
		);
		
		//Marca con el cual obtenemos las latitues y las longitudes
		marca_admin = new google.maps.Marker({
						map:mapa,
						draggable:true,
						icon: image,
						title: 'ADMINISTRADOR',
						animation: google.maps.Animation.DROP,
						position: new google.maps.LatLng(10.486630325006969, -66.93214416503906),
						optimized: true,
						zIndex: 10
		});
		
		//Evento click sobre la marca
		google.maps.event.addListener(marca_admin, 'click', function(event){
		  
		  var myLatLng         = event.latLng;
		  var latitud          = myLatLng.lat();
		  var longitud         = myLatLng.lng();
		  
		  $.fn.overlay_menu_admin(latitud,longitud);	  
		
		});
		
		//Agregamos un evento drag a la marca
		google.maps.event.addListener(marca_admin, 'drag', function(event){
		 
		  //Evaluo si el menú de la marca administrador está activa
		  if($('.menu_marca_admin').length > 0){
			  
			 $('.menu_marca_admin').remove();
			  
		  }//Fin del if	
		  
		});//Fin del evento drag
		
		//Agregamos un evento dragend a la marca
		google.maps.event.addListener(marca_admin, 'dragend', function(event){
		 
		  var myLatLng         = event.latLng;
		  var latitud          = myLatLng.lat();
		  var longitud         = myLatLng.lng();
		 
		  $.fn.overlay_menu_admin(latitud,longitud);
		  
		});//Fin del evento dragend
	
	}//Fin del if
	
};//Fin de la función
/*******************/

/*************************************************************/
/* Función que muestra el overlay del menú del administrador */
/*************************************************************/
$.fn.overlay_menu_admin = function(latitud, longitud){
	
	var zoom_mapa = mapa.getZoom();
	var ajuste_latitud;
	var ajuste_longitud;	
	
	//Evaluo el zoom del mapa
	switch(zoom_mapa){
	
		case 0:  latitud  = (latitud + 59.4);
				 longitud = (longitud + 0.6);
				 break;
		
		case 1:  latitud  = (latitud + 37.6);
				 longitud = (longitud + 0.6);
				 break;
		
		case 2:  latitud  = (latitud + 20.6);
				 longitud = (longitud + 0.6);
				 break;
		
		case 3:  latitud  = (latitud + 10.6);
				 longitud = (longitud + 0.05);
				 break;
		
		case 4:  latitud  = (latitud + 5.43);
				 longitud = (longitud + 0.03);
				 break;
		
		case 5:  latitud  = (latitud + 2.70);
				 longitud = (longitud + 0.03);
				 break;
		
		case 6:  latitud  = (latitud + 1.37);
				 longitud = (longitud + 0.02);
				 break;
		
		case 7:  latitud  = (latitud + 0.68);
				 longitud = (longitud + 0.01);
				 break;
		
		case 8:  latitud  = (latitud + 0.34);
				 longitud = (longitud + 0.003);
				 break;
		
		case 9:  latitud  = (latitud + 0.17);
				 longitud = (longitud + 0.003);
				 break;
		
		case 10: latitud  = (latitud + 0.085);
				 longitud = (longitud + 0.002);
				 break;
		
		case 11: latitud  = (latitud + 0.0422);
				 longitud = (longitud + 0.0002);
				 break;
		
		case 12: latitud  = (latitud + 0.0213);
				 longitud = (longitud + 0.0002);
				 break;
		
		case 13: latitud  = (latitud + 0.0106);
				 longitud = (longitud + 0.0001);
				 break;
				 
		case 14: latitud  = (latitud + 0.0053);
				 longitud = (longitud + 0.0001);
				 break;
				 
		case 15: latitud  = (latitud + 0.00267);
				 longitud = (longitud + 0.00003);
				 break;
				 
		case 16: latitud  = (latitud + 0.00132);
				 longitud = (longitud + 0.00003);
				 break;
		
		case 17: latitud  = (latitud + 0.00066);
				 longitud = (longitud + 0.00001);
				 break;
			 
		case 18: latitud  = (latitud + 0.00033);
				 longitud = (longitud + 0.000004);
				 break;
		
		case 19: latitud  = (latitud + 0.000165);
				 longitud = (longitud + 0.000004);
				 break;
		
		case 20: latitud  = (latitud + 0.000083);
				 longitud = (longitud + 0.000002);
				 break;
		
		case 21: latitud  = (latitud + 0.0000415);
				 longitud = (longitud + 0.000001);
				 break;
		
		default: latitud  = latitud;
				 longitud = longitud;  
		
	}//Fin del switch 
	
	var bounds           = new google.maps.LatLngBounds(
					
							//new google.maps.LatLng((latitud + 0.0106), (longitud + 0.0001))//,
							new google.maps.LatLng(latitud, longitud)
							  //new google.maps.LatLng(10.474476905096347, -66.93231582641602)
						 );
	var srcImage         = '';//Url de la imagen ejemplo: https://rutaimagen.com
	    menu_marca_admin = new capa_marca_menu_admin(bounds, srcImage, mapa);	
	
	$('.menu_marca_admin').remove();
	 
	//Evaluo si el menú de la marca administrador está activa
	if($('.menu_marca_admin').length > 0){
	  
	  $('.menu_marca_admin').remove();
	  
	}//Fin del if	
	 
};//Fin de la función
/*******************/

/*********************************/
/* Contructor del obgeto overlay */
/*********************************/
function capa_marca_menu_admin(bounds, imagen, mapa){

	//Propiedades
	this.bounds_ = bounds;
	this.image_  = imagen;
	this.map_    = mapa;
	
	//Contenedor del overlay
	this.div_ = null;
	
	//Asociamos el overlay al mapa
	this.setMap(mapa);
  
}//Fin de la función
/******************/

/*******************************************************************************************************/
/* Función que es llamada cuando las capas del mapa están listas y el overlay ha sido agregado al mapa */
/*******************************************************************************************************/
capa_marca_menu_admin.prototype.onAdd = function() {
  
  var div                = document.createElement('div');
      div.className      = 'menu_marca_admin';
	  div.style.position = 'absolute';
  this.div_              = div;
  
  // Add the element to the "overlayLayer" pane.
  var panes = this.getPanes();
  
  //Coloco la capa en el nivel del evento click del google maps
  panes.overlayMouseTarget.appendChild(div);
  
  //Creo las capas
  var html  = '<div></div>';
      html += '<div class="capa_intems">';
	  html += '   <div item_marca_menu_admin="1" class="tooltip" title="nueva sucursal"></div>';
	  html += '</div>';
	  html += '<div>';
	  html += '   <div class="cerrar_menu_admin" title="cerrar"></div>';
	  html += '</div>';
  
  //Creamos las capas que contiene los items del menú
  $('.menu_marca_admin').append(html)
  
  //Asigno los tooltips
  $.fn.toolTips('.tooltip');
  
  $.fn.eventos();
  
};//Fin de la función
/*******************/

/************************************************************/
/* Función que es llamada para setear atributos del overlay */
/************************************************************/
capa_marca_menu_admin.prototype.draw = function() {

	// We use the south-west and north-east
	// coordinates of the overlay to peg it to the correct position and size.
	// To do this, we need to retrieve the projection from the overlay.
	var overlayProjection = this.getProjection();
	
	// Retrieve the south-west and north-east coordinates of this overlay
	// in LatLngs and convert them to pixel coordinates.
	// We'll use these coordinates to resize the div.
	var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
	var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());
	
	// Ajusta la image del div
	var div = this.div_;
	div.style.left   = sw.x + 'px';
	div.style.top    = ne.y + 'px';
	div.style.width  = (ne.x - sw.x) + 'px';
	div.style.height = (sw.y - ne.y) + 'px';
	div.style.zIndex = '1';
	
};//Fin de la función
/*******************/

/***************************************************************************************/
/* Función que es llamada automáticamente desde la API si se setea el overlay a 'null' */
/***************************************************************************************/
capa_marca_menu_admin.prototype.onRemove = function(){
	
  this.div_.parentNode.removeChild(this.div_);
  this.div_ = null;
  
};//Fin de la función
/*******************/

/************************************************************/
/* Función que valida el formulario para loguear al usuario */
/************************************************************/
$.fn.validar_usuario = function(){
    
	validador = true;
	
	//Recorremos los campos para validar
	$('.tabla_logueo .validar').each(function(){
        
		//Validamos el campo actual
		var validar = $(this).validationEngine('validate');
		
		//Evaluamos
		if(validar == true){
			
			validador = false;
			
			return validador;
			
		}//Fin del if
		
    });//Fin del each
	
	return validador;

}//Fin de la función
/******************/

/***************************************************************/
/* Función que se invoca para salir de la cuenta administrador */
/***************************************************************/
$.fn.salir_admin = function(){
	
	//Removemos la marca del administrador y su menú
	if(marca_admin != null)
	{
		
		marca_admin.setMap(null);
	
	}//Fin del if
	
	//Evaluo si el menú de la marca administrador está activa
	if($('.menu_marca_admin').length > 0){
	  
	  $('.menu_marca_admin').remove();
	  
	}//Fin del if
	
	//Muestro la capa para acceder como administrador
	$('.capa_busqueda #2').remove();
	$('.capa_busqueda #4').remove();
    $('.capa_busqueda #3').before('<div id="1" class="tooltip" title="acceder como administrador"></div>');
    $('.capa_busqueda #1').css({'background-image':'url(../../assets/modules/mapa/images/icon_login.png)'});
	
	//Asigno los tooltips
	$.fn.toolTips('.tooltip');
	
	//Borramos la cookie
	$.fn.borrar_cookie('PERMISO_USUARIO');
	
	$.fn.eventos();
	
}//Fin de la función
/******************/

/**********************************************************/
/* Función que lista las zonas activas de los brigadistas */
/**********************************************************/
$.fn.zonas_activas = function(){
	
	//Ajax
	$.ajax({
			
		url: 'c_mapa/zonas_activas',
		type: 'POST',
		dataType: 'json',
		beforeSend: function(objeto){
			
			//Msj de carga
			$('.background_progressbar').show();
				
		},
		error: function(objeto, quepaso, otroobj){
			
			//Oculto el msj de carga
			$('.background_progressbar').hide();
			
			//Evaluo el error
			if(quepaso == 'timeout'){
				
				var msj   = 'Timeout!';
				
			}else{
				
				var msj   = '<p>Ocurrio un error a la hora de mostrar las zonas</p><p>Por favor intente de nuevo!.</p>';
				
			}//Fin del if
			
			var tipo      = 1;
			var ttl       = 'Error';
			var fn_si     = '';
			var txt_fn_si = '';
			var fn_no     = '';
			var txt_fn_no = '';
			var ancho     = 380;
			var alto      = 200;
			
			//Llamamos a la función que genera el dilogo
			$.fn.dialogo(tipo,msj,ttl,fn_si,txt_fn_si,fn_no,txt_fn_no,ancho,alto);
			
		},
		//timeout: 10000,
		success: function(data){
	    	
			//Oculto el msj de carga
			$('.background_progressbar').hide();
			
			var contenido  = '<table border="0">';
			    contenido += '  <tr>';
				contenido += '    <td>';
				contenido += '      <div class="capa_combo_zonas">'+$.fn.comboZonas(data['ZONAS'])+'</div>';
				contenido += '    </td>';      
				contenido += '  </tr>';
			    contenido += '  <tr>';
				contenido += '    <td>';
				contenido += '      <div class="capa_combo_inspectores"><select disabled></select></div>';
				contenido += '    </td>';      
				contenido += '  </tr>';
			    contenido += '</table>';
			
			//Ventana de confirmación
	        $('#dialogo').dialog({
						   title: 'Lista de las zonas de acci\u00f3n',
						   resizable: false,
						   height:145,
						   width: 330,
						   modal: true,
						   buttons: {
									 "Ver zona de acci\u00f3n": function() {
                                        
										//Mostramos las zonas         
										$.fn.mostrar_zonas();
										


									 },
									 "Cerrar": function(){
										 
									     $(this).dialog("close");
										 
									 }
						   },
						   show: {
							 effect: "explode",
							 duration: 500
						   },
						   hide: {
							 effect: "explode",
							 duration: 500
						   },
						   open: function(){
							  
							  //Mensaje del dialogo
							  $(this).append(contenido);
							  
							  //Evaluo
							  if(data['ZONAS'].length > 0){
							  
							  	  var multiple = true;
								 
							  }else{
								  
								  var multiple = false;
								  
							  }//Fin del if
							  
							  //Le asigno el método multiselect al combo
							  $('.capa_combo_zonas select').multiselect({
								   
									minWidth: 300,
									multiple: multiple,
									noneSelectedText: "ZONAS DE ACCI\u00d3N",
									height: 150,
									checkAllText: 'Seleccionar todos',
									uncheckAllText: 'Deseleccionar todos',
									selectedText: '# ZONAS DE ACCI\u00d3N'
									
							  }).multiselectfilter({
								   
									label: 'Filtro:',
									placeholder: '',
									width: 210
								   
							  });
							  
							  //Le asigno el método multiselect al combo
							  $('.capa_combo_inspectores select').multiselect({
								   
									minWidth: 300,
									multiple: true,
									noneSelectedText: "BRIGADISTAS",
									height: 150,
									checkAllText: 'Seleccionar todos',
									uncheckAllText: 'Deseleccionar todos',
									selectedText: '# BRIGADISTAS'
									
							  });
							  
							  //Deshabilito el btn de ver zonas de acción
							  $('.ui-dialog-buttonset button:eq(0)').attr('disabled',true);
							  $('.ui-dialog-buttonset button:eq(0)').css('color','#707070');
							  
							  $.fn.eventos();
							  
						   },
					 	   close: function(){
					     
						      $(this).dialog("destroy");
						 	 
				           },
					       beforeClose: function(){
					  
					  		  $(this).html('');
					  
					       } 
	        });
		
		    //Le asignamos un indice superior al del colorbox para hacerlo visible
		    $('.ui-front').css('z-index','9000');
			
		}//Fin del success
		
	});//Fin del ajax
	
};//Fin de la función
/*******************/

/*********************************************/
/* Función que muestra las marcas en el mapa */
/*********************************************/
$.fn.mostrarMarcas2 = function(){
	
	marcasArray = [];
	
	//Recorro cada una de las marcas
	$(sucuarsalesArray).each(function(index, element){
		
		//Evaluo la imagen a tomar
		if(element['icono_empresa'] != null){
			
			//Icono del ente
			var image = new google.maps.MarkerImage('../../assets/modules/mapa/images/iconos/empresas/'+element['icono_empresa'],
						new google.maps.Size(35, 35),
						new google.maps.Point(0, 0),
						new google.maps.Point(25, 0));
			
		}else{
			
			//Icono por defecto
			var image = new google.maps.MarkerImage('../../assets/modules/mapa/images/iconos/empresas/icon.png',
						new google.maps.Size(35, 35),
						new google.maps.Point(0, 0),
						new google.maps.Point(25, 0));
		
		}//Fin del if
		
		//Marca
		marca = new google.maps.Marker({
					map:mapa,
					icon: image,
					title: element['nombre_sucursal'],
					position: new google.maps.LatLng(element['latitud'],element['longitud'])
		});
		
		//Agregamos un evento click a la marca
		google.maps.event.addListener(marca,'click',function(event){
			
			//Llamos a la función que muestra la información de la sucurlsal
			$.fn.infoSucursal(element['id_sucursal'],marca,mapa,element['latitud'],element['longitud']);
			
			//Verifico si la marca del láìz existe
			/*if(marcaLapiz){
				
				//Borro la marca del lápiz
				marcaLapiz.setMap(null);
				
			}//Fin del if
			
			//Verifico si la marca de la geocerca existe
			if(geocerca){
				
				geocerca.setMap(null);
				
			}//Fin del if
			
			//Verifico si la geocerca existe
			if(Nuevageocerca){
			   
			   //Reinicio el poligono si existe
			   ArrayNuevaGeocerca = [];
			   
			   //Borro las geocercas
			   Nuevageocerca.setMap(null);
	
			}//Fin del 
			
			//Borramos el menú del click derecho si existe
			$('.contextmenu').remove();
	
			*/
			
		});//Fin del eveto click
		
		//Agregamos un evento rightclick a la marca
		google.maps.event.addListener(marca, 'rightclick', function(event){
			 
			 //Obtengo la sesión del usuario
			 var sesion = $.fn.chequear_cookie('PERMISO_USUARIO');
			 
			 //Evaluo si hay un usuario administrador logueado
			 if(sesion == 1)
			 {
			 
			 	//Menú de la marca con el click derecho
			 	$.fn.menuMarca(event.latLng,element['id_sucursal'],index);
			 
			 }//Fin del if
			 
		});//Fin del evento rightclick
		
		//Agregamos un evento dragstart a la marca
		google.maps.event.addListener(marca, 'dragstart', function(event){
		 
		  	//Borramos el menú anterior si existe
			$('.contextmenu').remove();
		  
		});//Fin del evento drag
		
		//Agregamos un evento dragend a la marca
		google.maps.event.addListener(marca, 'dragend', function(event){
		 
		  	//Menú de la marca con el click derecho
			$.fn.menuMarca(event.latLng,element['id_sucursal'],index);
		  
		});//Fin del evento drag
		
		//Coloco la marca en un array
		marcasArray.push(marca);
		
	});//Fin del each
	
	var mcOpciones    = {gridSize: 30, maxZoom: 15};
	    marca_cluster = new MarkerClusterer(mapa, marcasArray, mcOpciones);
	
	//Configuramos la posición del mapa
	$.fn.posicion_mapa();
	
	//Ocultamos el mensaje de carga
	$('.background_progressbar').hide();
	
	$.fn.eventos();
	
};//Fin de la función
/*******************/

/****************************************************************/
/* Función que posiciona configura el centro y el zoom del mapa */
/****************************************************************/
$.fn.posicion_mapa = function(){
	
	//Evaluo si existe una sola marca
	/*if(sucuarsalesArray.length == 1){
		 
		 var latitud  = sucuarsalesArray[0]['latitud'];
		 var longitud = sucuarsalesArray[0]['longitud'];
		 var zoom     = sucuarsalesArray[0]['zoom'];
		 
		 //Evaluo
		 if(latitud != null && longitud != null){
		 
			 mapa.setCenter(new google.maps.LatLng(latitud, longitud));
			 mapa.setZoom(parseInt(zoom));
		
		 }//Fin del if
		
	}else{
		 
		 //Obtengo los seleccionados
		 var seleccionados = $('.capa_combo_localidad3 select').multiselect("getChecked").map(function(){
			                   return this.value;    
		 					 }).get();
		
		 //Evaluos
		 if(seleccionados.length == 1){
			 
			 var latitud  = $('.capa_combo_localidad3 select option:selected').attr('latitud');
			 var longitud = $('.capa_combo_localidad3 select option:selected').attr('longitud');
			 var zoom     = $('.capa_combo_localidad3 select option:selected').attr('zoom');
			 
			 //Evaluo
			 if(latitud != null && longitud != null){
			
				 mapa.setCenter(new google.maps.LatLng(latitud, longitud));
				 mapa.setZoom(parseInt(zoom));
			 
			 }//Fin del if
			 
		 }else{
			 
			 //Obtengo los seleccionados
			 var seleccionados = $('.capa_combo_localidad2 select').multiselect("getChecked").map(function(){
								   return this.value;    
								 }).get();
			
			 //Evaluos
			 if(seleccionados.length == 1){
				 
				 var latitud  = $('.capa_combo_localidad2 select option:selected').attr('latitud');
				 var longitud = $('.capa_combo_localidad2 select option:selected').attr('longitud');
				 var zoom     = $('.capa_combo_localidad2 select option:selected').attr('zoom');
				 
				 //Evaluo
				 if(latitud != null && longitud != null){
				
					 mapa.setCenter(new google.maps.LatLng(latitud, longitud));
					 mapa.setZoom(parseInt(zoom));
				 
				 }//Fin del if
			 
			 }else{
				 
				 mapa.setCenter(new google.maps.LatLng(10.486630325006969, -66.93214416503906));
				 mapa.setZoom(13);
				 
			 }//Fin del if
			 
		 }//Fin del if

	}//Fin del if*/
	
};//Fin de la función
/*******************/

/***************************************************************************/
/*Función que muestra el menú con el click derecho según la marca clickeada*/
/***************************************************************************/
$.fn.menuMarca = function(latLng,id_sucursal,indice_marca){
	
	//Creamo el menú al dar click derecho a la marca
	var projection;
	var contextmenuDir;
	
	//Evaluo si hay una sucursal editandose
	if(editando_marca == 0)
	{
	    
		//Seteo la id de susucral que se esta editando
		id_sucursal_editando  = id_sucursal;
		indice_marca_editando = indice_marca;
		
		var opciones  = '<div id="1">Info. General</div>';
			opciones += '<div id="2">Contactos</div>';
			opciones += '<div id="3">Pesta&ntilde;as</div>';
			opciones += '<div id="4" indice_marca="'+indice_marca+'">Mover sucursal</div>';
	
	}else if(editando_marca == 1 && id_sucursal == id_sucursal_editando){
		
		var opciones  = '<div id="5" indice_marca="'+indice_marca+'">Guardar cambios</div>';
			opciones += '<div id="6" indice_marca="'+indice_marca+'">Cancelar cambios</div>';
		
	}else{
		
		var opciones  = '<div id="7" indice_marca="'+indice_marca_editando+'">Ir a la sucursal que se esta editando.</div>';
		
	}//Fin del if
	
	//Borramos el menú anterior si existe
	$('.contextmenu').remove();
	
	projection                = mapa.getProjection();
	contextmenuDir            = document.createElement("div");
	contextmenuDir.className  = 'contextmenu';
	contextmenuDir.innerHTML  = opciones;
	
	$(mapa.getDiv()).append(contextmenuDir);
	
	$.fn.setMenuXY(latLng,'contextmenu');
	
	contextmenuDir.style.visibility = "visible";
	
	//Asigno el id de la sucursal al div contextmenu
	$('.contextmenu').attr('id',id_sucursal);
	
	$.fn.eventos();
			
};//Fin de la función menuMarca
/*****************************/

/******************************/
/*Armamos la posición del menú*/
/******************************/
$.fn.setMenuXY = function(LatLng,clase){
	
	//Obetenmos valores
	var mapWidth        = $('#capa_mapa').width();
	var mapHeight       = $('#capa_mapa').height();
	var menuWidth       = $('.'+clase).width();
	var menuHeight      = $('.'+clase).height();
	var clickedPosition = $.fn.getCanvasXY(LatLng);
	var x               = clickedPosition.x ;
	var y               = clickedPosition.y ;
   
	//Si esta muy cerca del borde del mapa eje X lo reposicionamos
	if((mapWidth - x ) < menuWidth){
	
	  x = x - menuWidth;
	 
	}//Fin del if
	
	//Si esta muy cerca del borde del mapa eje Y lo reposicionamos
	if((mapHeight - y ) < menuHeight){
		
	  y = y - menuHeight;
	
	}//Fin del if
	
	//Seteamos el left y top del menú
	$('.'+clase).css('left',x);
	$('.'+clase).css('top',y);
	
};//Fin de la función
/*******************/

/*********************************************************/
/*Función que obtiene las coordenadas del canvas del mapa*/
/*********************************************************/
$.fn.getCanvasXY = function(LatLng)
{
	
	var scale = Math.pow(2, mapa.getZoom());
	var nw = new google.maps.LatLng(
			  mapa.getBounds().getNorthEast().lat(),
			  mapa.getBounds().getSouthWest().lng()
	        );
	var worldCoordinateNW = mapa.getProjection().fromLatLngToPoint(nw);
	var worldCoordinate = mapa.getProjection().fromLatLngToPoint(LatLng);
	var caurrentLatLngOffset = new google.maps.Point(
	                             Math.floor((worldCoordinate.x - worldCoordinateNW.x) * scale),
	                             Math.floor((worldCoordinate.y - worldCoordinateNW.y) * scale)
	                           );
							   
	return caurrentLatLngOffset;
	
};//Fin de la función
/*******************/

/****************************************************/
/* FUnción que asigna el evento dragable a la marca */
/****************************************************/
$.fn.mover_marca_sucursal = function(indice_marca)
{
    
	//Seteo la variable indicando que se esta editando una marca
	editando_marca = 1;
	
	//Borramos el menú anterior si existe
	$('.contextmenu').remove();
	
	//Asignamos el evento draggable
	marcasArray[indice_marca].setOptions({draggable:true});
	
	$.fn.eventos();
	
}//Fin de la función
/******************/

/*****************************************************/
/* Función que guarda la nueva ubicación de la marca */
/*****************************************************/
$.fn.guardar_nueva_latlng_sucursal = function(indice_marca)
{
	
	//Obtengo valores
	var lat = marcasArray[indice_marca].getPosition().lat();
	var lng = marcasArray[indice_marca].getPosition().lng();
	
	//Ajax
	$.ajax({
			
		url: 'c_mapa/guardar_latlng',
		type: 'POST',
		dataType: 'json',
		data: {
			   id_sucursal:id_sucursal_editando,
			   lat:lat,
			   lng:lng
			  },
		beforeSend: function(objeto){
			
			//Msj de carga
			$('.background_progressbar').show();
				
		},
		error: function(objeto, quepaso, otroobj){
			
			//Oculto el msj de carga
			$('.background_progressbar').hide();

			//Evaluo el error
			if(quepaso == 'timeout'){
				
				var msj   = 'Timeout!';
				
			}else{
				
				var msj   = '<p>Ocurrio un error a la hora de guardar los cambios.</p>';
				
			}//Fin del if
			
			var tipo      = 1;
			var ttl       = 'Error';
			var fn_si     = '';
			var txt_fn_si = '';
			var fn_no     = '';
			var txt_fn_no = '';
			var ancho     = 380;
			var alto      = 200;
			
			//Llamamos a la función que genera el dilogo
			$.fn.dialogo(tipo,msj,ttl,fn_si,txt_fn_si,fn_no,txt_fn_no,ancho,alto);
			
		},
		//timeout: 10000,
		success: function(data){
	    
			//Oculto el msj de carga
			$('.background_progressbar').hide();
			
			//Obtengo la respuesta
			var respuesta = data['RESPUESTA'];
			
			//EValuo
			if(respuesta['CODIGO'] == 1)
			{
				
				var msj       = respuesta['MENSAJE'];
				var tipo      = 1;
				var ttl       = 'Informaci\u00f3n';
				var fn_si     = '';
				var txt_fn_si = '';
				var fn_no     = '';
				var txt_fn_no = '';
				var ancho     = 300;
				var alto      = 180;
				
				//Llamamos a la función que genera el dilogo
				$.fn.dialogo(tipo,msj,ttl,fn_si,txt_fn_si,fn_no,txt_fn_no,ancho,alto);
				
				//Actualizo
				$('.buscar').trigger('click');
				
			}else{
				
				var msj       = respuesta['MENSAJE'];
				var tipo      = 1;
				var ttl       = 'Error';
				var fn_si     = '';
				var txt_fn_si = '';
				var fn_no     = '';
				var txt_fn_no = '';
				var ancho     = 300;
				var alto      = 180;
				
				//Llamamos a la función que genera el dilogo
				$.fn.dialogo(tipo,msj,ttl,fn_si,txt_fn_si,fn_no,txt_fn_no,ancho,alto);
				
			}//Fin del if
		
			$.fn.eventos();
			
		}//Fin del success
	
	});//Fin del ajax
	
		
}//Fin de la función
/******************/

/*****************************************************/
/* Función que cancela la nueva posición de la marca */
/*****************************************************/
$.fn.cancelar_mover_marca_sucursal = function()
{
	
	//Borramos el menú anterior si existe
	$('.contextmenu').remove();
	
	//Reinicio la busqueda
	$('.buscar').trigger('click');
	
	$.fn.eventos();
	
}//Fin de la función
/******************/

/*****************************************************/
/* Función que muestra la marca que se esta editando */
/*****************************************************/
$.fn.ir_marca_editando = function(indice_marca)
{
	
	//Obtengo valores
	var lat = marcasArray[indice_marca].getPosition().lat();
	var lng = marcasArray[indice_marca].getPosition().lng();

	mapa.setOptions({
		
		            zoom: 15,//Zoom inicial del mapa
	  			    center: new google.maps.LatLng(lat, lng)
		
		           });
	
}//Fin de la función
/******************/



/**************************************************************/
/* Función que muestra la información de la sucursal a editar */
/**************************************************************/
$.fn.editar_info_sucursal = function()
{
	
	//Creamos la cookie
	$.fn.crear_cookie('ID_SUCURSAL',id_sucursal_editando);

	var contenido = null;
	
	//Ajax
	$.ajax({
			
		url: 'c_mapa/info_editar_sucursal',
		type: 'POST',
		dataType: 'json',
		beforeSend: function(objeto){
			
			//Msj de carga
			$('.background_progressbar').show();
				
		},
		async: true,
		error: function(objeto, quepaso, otroobj){
			
			//Ocultamos el msj de carga
			$('.background_progressbar').hide();
			
			//Evaluo el error
			if(quepaso == 'timeout'){
				
				var msj   = 'Timeout!';
				
			}else{
				
				var msj   = '<p>&iexcl;Ocurrio un error a la hora de mostrar la informaci&oacute;n de la sucursal!.</p><p>Por favor intente de nuevo.</p>';
				
			}//Fin del if
			
			var tipo      = 1;
			var ttl       = 'Error';
			var fn_si     = '';
			var txt_fn_si = '';
			var fn_no     = '';
			var txt_fn_no = '';
			var ancho     = 380;
			var alto      = 200;
			
			//Llamamos a la función que genera el dilogo
			$.fn.dialogo(tipo,msj,ttl,fn_si,txt_fn_si,fn_no,txt_fn_no,ancho,alto);
			
		},
		//timeout: 10000,
		success: function(data){
			
			//Ocultamos el msj de carga
			$('.background_progressbar').hide();
			
			//Evaluamos
			if(data['INFO_SUCURSAL'] != null){
						
				//Seteamos la foto
				if(data['imagen_sucursal'] == null){
					
					var imagen = 'default.png';
					
				}else{
					
					var imagen = data['INFO_SUCURSAL']['imagen_sucursal'];
					
				}//Fin del if*/
				
				//Armo el contenido		        
				var contenido  = '<center>';
					contenido += '  <table id="tabla_editar_sucursal" border="0">';
					contenido += '    <tr>';
					contenido += '      <td colspan="2">';
					contenido += '        <input id="nombre_sucursal" class="validar validate[required,custom[onlyLetterNumber],minSize[3]] campo_mayuscula" type="text" data-prompt-position="bottomLeft" placeholder="NOMBRE DE LA SUCURSAL" value="'+data['INFO_SUCURSAL']['nombre_sucursal']+'">';
					contenido += '      </td>';     
					contenido += '    </tr>';
					contenido += '    <tr>';
					contenido += '      <td rowspan="7" width="400" style="background-image:url(../../assets/modules/mapa/images/sucursales/'+imagen+');background-position:centert center;background-repeat:no-repeat;background-size:100% 100%;">';
					contenido += '        <div class="capa_foto_nueva_sucursal" data-prompt-position="bottomLeft:0,0">';
					contenido += '          <input type="file" class="foto_nueva_sucursal"/>';
					contenido += '        </div>';
					contenido += '      </td>';
					contenido += '      <td>';
					contenido += '        <div class="capa_sectores capa_combo" data-prompt-position="bottomLeft">';
					contenido += '           <select id="sectores" multiple class="validar validate[required]" title="SECTORES">';
					contenido += '            '+$.fn.combo_sectores(data['SECTORES'],data['INFO_SUCURSAL']['id_sector'])+'';
					contenido += '           </select>';
					contenido += '        </div>';
					contenido += '      </td>';
					contenido += '    </tr>';
					contenido += '    <tr>';
					contenido += '      <td>';
					contenido += '        <div class="capa_centros capa_combo" data-prompt-position="bottomLeft">';
					contenido += '           <select id="centros" multiple class="validar validate[required]" title="CENTROS DE ABASTECIMIENTO">';
					contenido += '            '+$.fn.combo_centros(data['CENTROS'],data['INFO_SUCURSAL']['id_empresa'])+'';
					contenido += '           </select>';
					contenido += '        </div>';
					contenido += '      </td>';
					contenido += '    </tr>';
					contenido += '    <tr>';
					contenido += '      <td>';
					contenido += '        <div class="capa_tipo_suc capa_combo" data-prompt-position="bottomLeft">';
					contenido += '           <select id="tipo_sucursal" multiple class="validar validate[required]" title="TIPOS DE SUCURSALES">';
					contenido += '            '+$.fn.combo_tipos_sucursales(data['TIPOS_SUCURSALES'],data['INFO_SUCURSAL']['id_tipo_sucursal'])+'';
					contenido += '           </select>';
					contenido += '        </div>';
					contenido += '      </td>';
					contenido += '    </tr>';
					contenido += '    <tr>';
					contenido += '      <td>';
					contenido += '        <div class="capa_localidad_1 capa_combo" data-prompt-position="bottomLeft">';
					contenido += '          <select id="localidad_1" multiple class="validar validate[required]" title="MUNICIPIOS">';
					contenido += '            '+$.fn.combo_localidades(data['LOCALIDAD_1'],1,data['INFO_SUCURSAL']['id_localidad_1'])+'';
					contenido += '          </select>';
					contenido += '        </div>';
					contenido += '      </td>';
					contenido += '    </tr>';
					contenido += '    <tr>';
					contenido += '      <td>';
					contenido += '        <div class="capa_localidad_2 capa_combo" data-prompt-position="bottomLeft">';
					contenido += '          <select id="localidad_2" multiple class="validar validate[required]" title="CIRCUITOS">';
					contenido += '            '+$.fn.combo_localidades(data['LOCALIDAD_2'],2,data['INFO_SUCURSAL']['id_localidad_2'])+'';
					contenido += '          </select>';
					contenido += '        </div>';
					contenido += '      </td>';
					contenido += '    </tr>';
					contenido += '    <tr>';
					contenido += '      <td>';
					contenido += '        <div class="capa_localidad_3 capa_combo" data-prompt-position="bottomLeft">';
					contenido += '          <select id="localidad_3" multiple class="validar validate[required]" title="PARROQUIAS">';
					contenido += '            '+$.fn.combo_localidades(data['LOCALIDAD_3'],3,data['INFO_SUCURSAL']['id_localidad_3'])+'';
					contenido += '          </select>';
					contenido += '        </div>';
					contenido += '      </td>';
					contenido += '    </tr>';				
					contenido += '    <tr>'; 
					contenido += '      <td>';
					contenido += '        <div class="capa_estatus capa_combo" data-prompt-position="bottomLeft">';
					contenido += '          <select id="estatus" multiple title="ESTATUS" class="validar">';
					contenido += '            '+$.fn.combo_estatus_sucursal(data['ESTATUS_SUCURSAL'],data['INFO_SUCURSAL']['id_estatus'])+'';
					contenido += '          </select>';
					contenido += '        </div>'
					contenido += '      </td>';
					contenido += '    </tr>';
					contenido += '    <tr>';
					contenido += '      <td colspan="2">';
					contenido += '        <textarea id="direccion_sucursal" maxlength="250" placeholder="M&aacute;x. 250 caracteres">'+$.fn.campo_vacio(data['INFO_SUCURSAL']['descripcion'])+'</textarea>';
					contenido += '      </td>';  
					contenido += '    </tr>';
					contenido += '    <tr>';
					contenido += '      <td colspan="2">';
					contenido += '        <strong>N° caracteres: <span id="numLetras">0</span></strong>&nbsp;<strong>Límite de caracteres: <span id="limLetras">(250)</span></strong>';
					contenido += '      </td>';  
					contenido += '    </tr>';
					contenido += '    <tr height="20">';
					contenido += '      <td colspan="2"></td>';      
					contenido += '    </tr>';
					contenido += '  </table>';
					contenido += '</center>';
			   
				//Ventana de confirmación
				$('#dialogo').dialog({
						   title: 'Editar Sucursal',
						   resizable: false,
						   height:460,
						   width: 750,
						   modal: true,
						   buttons: {
									 "Editar sucursal": function() {
										
										//Llamamos a la función         
										$.fn.editar_sucursal();
										
									 },
									 "Cerrar": function(){
										 
										 $(this).dialog("close");
										 
									 }
						   },
						   show: {
							 effect: "explode",
							 duration: 500
						   },
						   hide: {
							 effect: "explode",
							 duration: 500
						   },
						   open: function(){
							  
							  //Mensaje del dialogo
							  $(this).append(contenido);
							  
							  //Recorro cada filtro y le asigno el método multiselect
							  $('#tabla_editar_sucursal select').each(function(index, elemento){
									
									$(this).multiselect({
								   
										minWidth: 300,
										multiple: false,
										noneSelectedText: $(this).attr('title'),
										height: 100,
										header:  $(this).attr('title'),
										selectedList: 1
	
									/*}).multiselectfilter({
									   
										label: 'Filtro:',
										placeholder: '',
										width: 210
									   */
									});
									
							  });//Fin del each
							  
							  $.fn.eventos();
							  
						   },
						   close: function(){
						 
							  $(this).dialog("destroy");
							 
						   },
						   beforeClose: function(){
					  
							  $(this).html('');
					  
						   } 
				});
				
				//Le asignamos un indice superior al del colorbox para hacerlo visible
				$('.ui-front').css('z-index','9000');
				
			}else{
				
				//Armo los menus
				contenido = '<div class="mensaje_error"></div>';
				
			}//Fin del if
			
			$.fn.eventos();
			
		}//Fin del success
			
	});//Fin del ajax
	
}//Fin de la función
/******************/

/*******************************************************/
/* Función que borra las zonas de inspección mostradas */
/*******************************************************/
$.fn.borrar_zonas_inpeccion = function(){
	
	//Evaluamos si hay geomarcas de
	if(geocerca_zona_inspeccion.length){

	   //Por cada marca se setea a NULL para borrar
		for(i = 0; i < geocerca_zona_inspeccion.length; i++){
			
		  geocerca_zona_inspeccion[i].setMap(null);
		  
		}//Fin del for
		
		geocerca_zona_inspeccion = new Array();
	   
	}//Fin del if
	
}//Fin de la función
/******************/

/*********************************************/
/* Función que muestra las capas de busqueda */
/*********************************************/
$.fn.capas_busqueda = function(){
	
	//Obtengo la sesión del usuario
	var sesion = $.fn.chequear_cookie('PERMISO_USUARIO');
	 
	//Evaluo si hay un usuario administrador logueado
	if(sesion == 1)
	{
	
		$('.capa_busqueda').append('<div id="2" title="salir del administrador" class="tooltip"></div>');
		$('.capa_busqueda #2').css({'background-image':'url(../../assets/modules/mapa/images/icon_logout.png)'});
	    $('.capa_busqueda #2').after('<div id="4" title="agregar sucursal" class="tooltip"></div>');
		$('.capa_busqueda #4').css({'background-image':'url(../../assets/modules/mapa/images/icon_agregar_sucursal.png)'});
		
	}else{
		
		$('.capa_busqueda').append('<div id="1" title="acceder como administrador" class="tooltip"></div>');
		$('.capa_busqueda #1').css({'background-image':'url(../../assets/modules/mapa/images/icon_login.png)'});
		
	}//Fin del if
	
	$('.capa_busqueda').append('<div id="3" title="brigadistas" class="tooltip"></div>');
	$('.capa_busqueda #3').css({'background-image':'url(../../assets/modules/mapa/images/iconos/capa_busqueda/1.png)'});
	
	//Asigno los tooltips
	$.fn.toolTips('.tooltip');
	
	$.fn.eventos();
	
}//Fin de la función
/******************/

/***********************************************/
/* Función que muestra las zonas de inspección */
/***********************************************/
$.fn.mostrar_zonas = function(){
	
	//Obtengo los ids de la zona
	var validador_ver_zonas = true;//$.fn.validador_ver_zonas();
	
	//Evaluo
	if(validador_ver_zonas == true){
		
		//Eliminamos la geocerca si existe
		if(geocerca_zona_inspeccion.length > 0){
			
		   $.fn.borrar_zonas_inpeccion();
		  
		}//Fin del if
		
		//Obtengo los ids de la zona
		var valor = $('.capa_combo_zonas select').val();
		
		//Ajax
		$.ajax({
				
			url: 'c_mapa/ver_zonas',
			type: 'POST',
			dataType: 'json',
			data: {id_zonas:valor},
			beforeSend: function(objeto){
				
				//Msj de carga
				$('.background_progressbar').show();
					
			},
			error: function(objeto, quepaso, otroobj){
				
				//Oculto el msj de carga
				$('.background_progressbar').hide();
				
				//Cerramos el dialogo
				$('#dialogo').dialog('close');
				
				//Evaluo el error
				if(quepaso == 'timeout'){
					
					var msj   = 'Timeout!';
					
				}else{
					
					var msj   = '<p>Ocurrio un error a la hora de mostrar las zonas.</p><p>Por favor intente de nuevo!.</p>';
					
				}//Fin del if
				
				var tipo      = 1;
				var ttl       = 'Error';
				var fn_si     = '';
				var txt_fn_si = '';
				var fn_no     = '';
				var txt_fn_no = '';
				var ancho     = 380;
				var alto      = 200;
				
				//Llamamos a la función que genera el dilogo
				$.fn.dialogo(tipo,msj,ttl,fn_si,txt_fn_si,fn_no,txt_fn_no,ancho,alto);
				
			},
			//timeout: 10000,
			success: function(data){
				
				//Cerramos el dialogo
				$('#dialogo').dialog('close');
				
				//Oculto el msj de carga
				$('.background_progressbar').hide();
				
				//Obtengo el nº de registros
				var i = 0;
				
				//Recorro cada uno de los puntos par armas la geocerca
				$(data['POLIGONO_ZONAS']).each(function(index, element){
					
					//Variable que contendra el array de latitudes y longitudes
		       		var zonas = [];
					
					//Recorro
					$(data['POLIGONO_ZONAS'][i]).each(function(index, element){
					
						var punto = new google.maps.LatLng(element['latitud'], element['longitud']);
					
						//Coloco los puntos en un array
						zonas.push(punto);
				    
					});//Fin del foreach
					
					//Construimos la geocerca
					geocerca_zona_inspeccion[index] = new google.maps.Polygon({
						
						paths: zonas,
						strokeColor: '#FF0000',
						strokeOpacity: 0.8,
						strokeWeight: 2,
						fillColor: '#FF0000',
						fillOpacity: 0.35
						
					});
					
					//Mostramos la geocerca			
					geocerca_zona_inspeccion[index].setMap(mapa);
					
					i++;
						
				});//Fin del each
			
				$.fn.eventos();
				
			}//Fin del success
			
		});//Fin del ajax
		
	}else{
		
		$.fn.eventos();
		
	}//Fin del if
	
}//Fin de la función
/******************/

/************************************************/
/* Función que arma el combo de los inspectores */
/************************************************/
$.fn.comboInspectores = function(data){
	
	//Obtengo el nº de registros
	var numReg = data.length;
	
	//Armo el combo
	var combo = '<select multiple>';
	
	//Evaluo el nº de registros
	if(numReg > 0 ){
		
		//Recorro los resultados
		for(var i = 0; i < numReg; i++){
			
			combo += '<option value="'+data[i]['id_inspector']+'">'+data[i]['nombre_inspector']+'</option>';
			
		}//Fin del for
			
	}else{
		
		combo += '<option selected value="">INSPECTORES NO DISPONIBLES</option>';
		
	}//Fin del if
	
	combo += '</select>';
	
	return combo;
	
}//Fin de la función
/******************/

/******************************************/
/* Función que arma el combo de las zonas */
/******************************************/
$.fn.comboZonas = function(data){
	
	//Obtengo el nº de registros
	var numReg = data.length;
	
	//Armo el combo
	var combo = '<select multiple>';
	
	//Evaluo el nº de registros
	if(numReg > 0 ){
		
		//Recorro los resultados
		for(var i = 0; i < numReg; i++){
			
			combo += '<option value="'+data[i]['id_zona']+'">'+data[i]['nombre_zona']+'</option>';
			

		}//Fin del for
			
	}else{
		
		combo += '<option selected value="">ZONAS NO DISPONIBLES</option>';
		
	}//Fin del if
	
	combo += '</select>';
	
	return combo;
	
}//Fin de la función
/******************/

/**************************************************/
/* Método que lista los estatus de las sucursales */
/**************************************************/
$.fn.combo_estatus_sucursal = function(data,id_estatus){
	
	//Obtengo el nº de registros
	var numReg = data.length;
	
	//Armo el combo
	var combo = '';
	
	//Evaluo el nº de registros
	if(numReg > 0 ){
		
		//Recorro los resultados
		for(var i = 0; i < numReg; i++){
			
			//Evaluo id_estatus
			if(id_estatus != null && id_estatus == data[i]['id_estatus'])
			{
			
				combo += '<option selected value="'+data[i]['id_estatus']+'">'+data[i]['desc_estatus']+'</option>';
			
			}else{
				
				combo += '<option value="'+data[i]['id_estatus']+'">'+data[i]['desc_estatus']+'</option>';
				
			}//Fin del if
			
		}//Fin del for
			
	}else{
		
		combo += '<option selected value="">ESTATUS NO DISPONIBLES</option>';
		
	}//Fin del if;
	
	return combo;
	
}//Fin de la función
/******************/

/**********************************/
/* Función que lista los sectores */
/**********************************/
$.fn.combo_sectores = function(data,id_sector){
	
	//Obtengo el nº de registros
	var numReg = data.length;
	
	//Armo el combo
	var combo = '';
	
	//Evaluo el nº de registros
	if(numReg > 0 ){
		
		//Recorro los resultados
		for(var i = 0; i < numReg; i++){
			
			//Evaluo
			if(id_sector != null && id_sector == data[i]['id_tipo_empresa'])
			{
			
				combo += '<option selected value="'+data[i]['id_tipo_empresa']+'">'+data[i]['desc_tipo_empresa']+'</option>';
			
			}else{
				
				combo += '<option value="'+data[i]['id_tipo_empresa']+'">'+data[i]['desc_tipo_empresa']+'</option>';
				
			}//Fin del if
			
		}//Fin del for
			
	}else{
		
		combo += '<option selected value="">SECTORES NO DISPONIBLES</option>';
		
	}//Fin del if;
	
	return combo;
	
}//Fin de la función
/******************/

/*********************************************/
/* Función que lista los tipos de sucursales */
/*********************************************/
$.fn.combo_tipos_sucursales = function(data,id){
	
	//Obtengo el nº de registros
	var numReg = data.length;
	
	//Armo el combo
	var combo = '';
	
	//Evaluo el nº de registros
	if(numReg > 0 ){
		
		//Recorro los resultados
		for(var i = 0; i < numReg; i++){
			
			//Evaluo
			if(id != null && id == data[i]['id_tipo_sucursal'])
			{
			
				combo += '<option selected value="'+data[i]['id_tipo_sucursal']+'">'+data[i]['desc_tipo_sucursal']+'</option>';
			
			}else{
				
				combo += '<option value="'+data[i]['id_tipo_sucursal']+'">'+data[i]['desc_tipo_sucursal']+'</option>';
				
			}//Fin del if
			
		}//Fin del for
			
	}else{
		
		combo += '<option selected value="">TIPOS DE SUCURSALES NO DISPONIBLES</option>';
		
	}//Fin del if;
	
	return combo;
	
}//Fin de la función
/******************/

/*************************************/
/* Funciòn que lista las localidades */
/*************************************/
$.fn.combo_localidades = function(data,nivel,id_localidad){
	
	//Obtengo el nº de registros
	var numReg = data.length;
	
	//Armo el combo
	var combo = '';
	
	//Evaluo el nº de registros
	if(numReg > 0 ){
		
		//Recorro los resultados
		for(var i = 0; i < numReg; i++){
			
			//Evaluo
			if(id_localidad != null && id_localidad == data[i]['id_localidad_'+nivel])
			{
			
				combo += '<option selected value="'+data[i]['id_localidad_'+nivel]+'">'+data[i]['desc_localidad_'+nivel]+'</option>';
			
			}else{
				
				combo += '<option value="'+data[i]['id_localidad_'+nivel]+'">'+data[i]['desc_localidad_'+nivel]+'</option>';
				
			}//Fin del if
			
		}//Fin del for
			
	}else{
		
		combo += '<option selected value="">LOCALIDADES NO DISPONIBLES</option>';
		
	}//Fin del if;

	
	return combo;
	
}//Fin de la funciòn
/******************/

/***************************************************/
/* Función que lista los centros de abastecimiento */
/***************************************************/
$.fn.combo_centros = function(data,id){
	
	//Obtengo el nº de registros
	var numReg = data.length;
	
	//Armo el combo
	var combo = '';
	
	//Evaluo el nº de registros
	if(numReg > 0 ){
		
		//Recorro los resultados
		for(var i = 0; i < numReg; i++){
			
			//Evaluo
			if(id != null && id == data[i]['id_empresa'])
			{
			
				combo += '<option selected value="'+data[i]['id_empresa']+'">'+data[i]['acronimo_empresa']+'</option>';
			
			}else{
				
				combo += '<option value="'+data[i]['id_empresa']+'">'+data[i]['acronimo_empresa']+'</option>';
				
			}//Fin del if
			
		}//Fin del for
			
	}else{
		
		combo += '<option selected value="">CENTROS NO DISPONIBLES</option>';
		
	}//Fin del if;
	
	return combo;
	
}//Fin de la función
/******************/

/*****************************************************/
/* Función de configuración para el mapa situacional */
/*****************************************************/
$.fn.mapa = function(){
  
  //Settings del mapa	
  var misOpciones = {
	 
	   zoom: 6,//Zoom inicial del mapa
	   center: new google.maps.LatLng(6.6415893362123315, -64.53712463378906),//Punto inicial de foco del mapa
	   mapTypeId: google.maps.MapTypeId.ROADMAP,//Tipo de mapa inicialmente
	   mapTypeControl: true,//Estilo de los controles
	   mapTypeControlOptions:{
		   
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			position: google.maps.ControlPosition.TOP_RIGHT
			
	   },
	   zoomControl: true,
	   zoomControlOptions:{
		   
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.RIGHT_TOP
			
	   },
	   scaleControl: true,
	   scaleControlOptions:{
		   
			position: google.maps.ControlPosition.RIGHT_TOP
			
	   },
	   streetViewControl: true,
	   streetViewControlOptions:{
		   
			position: google.maps.ControlPosition.RIGHT_TOP
			
	   }
   
  }//Fin del setting
  
  /*Decimos en que contenedor se va a mostrar el mapa*/
  mapa = new google.maps.Map(document.getElementById("capa_mapa"),misOpciones);
  
  //Agregamos un evento click al mapa
 /* google.maps.event.addListener(mapa,'click',function(event){
		
	//Borramos el menú de la marca administrador
	$('.menu_marca_admin').remove();
    
	//Borramos el menú del click derecho si existe
	$('.contextmenu').remove();
			
  });//Fin del eveto click
	
  //Agregamos un evento rightclick al mapa
  google.maps.event.addListener(mapa, 'rightclick', function(event){
		 
	 //Borramos el menú de la marca administrador
	 $('.menu_marca_admin').remove();
	 
	 //Borramos el menú del click derecho si existe
	 $('.contextmenu').remove();
	 
  });//Fin del evento rightclick
  
  //Agregamos un evento drag al mapa
  google.maps.event.addListener(mapa, 'drag', function(event){
	 
	 //Borramos el menú de la marca administrador
	 $('.menu_marca_admin').remove();
     
	 //Borramos el menú del click derecho si existe
	 $('.contextmenu').remove();
	 
  });//Fin del evento drag
  
  //Agregamos el evento bounds_changed al mapa
  google.maps.event.addListener(mapa, 'bounds_changed', function(){
	  
     //Evaluo si el menú de la marca administrador está activa
	 if($('.menu_marca_admin').length > 0){
	 
	    var myLatLng         = marca_admin.latLng;
	    var latitud          = marca_admin.getPosition().lat();
	    var longitud         = marca_admin.getPosition().lng();
	 
	    $.fn.overlay_menu_admin(latitud,longitud);
	  
	 }//Fin del if	
	 
	 //Borramos el menú del click derecho si existe
 	 $('.contextmenu').remove();
	 
  });//Fin del evento bounds_changed*/
  
  //Marca con el cual obtenemos las latitues y las longitudes
 /* marker = new google.maps.Marker({
      map:mapa,
      draggable:true,
	  title: 'ADMINISTRADOR',
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(10.486630325006969, -66.93214416503906)
  });
  
  google.maps.event.addListener(marker, 'click', function(event){
	  
    var myLatLng = event.latLng;
    var lat = myLatLng.lat();
    var lng = myLatLng.lng();
	alert(lat+' '+lng);
	
  });*/
  
};//Fin de la función
/*******************/

/************************************************************/
/* Función que abre la ventana modal asociada a la sucursal */
/************************************************************/
$.fn.infoSucursal = function(id_sucursal,marca,mapa,latitud,longitud){
	
//	//Evaluo si hay una ventana informativa abierta
	if(infoBubble != null){
	  
	  //Cerramos la ventana informativa
	  infoBubble.close();
	   
	}//Fin del if
	
	//Variable que contiene la ventana modal
	infoBubble = new InfoBubble({
						activeTabClassName: 'activeTabClass',
						arrowPosition: 50,
						arrowStyle: 2,
						/*borderColor: '#2c2c2c',*/
						borderRadius: 10,
						borderWidth: 1,
						//content: info_sucursal,
						map: mapa,
						maxHeight: 280,
						minHeight: 220,
						maxWidth: 1100,
						minWidth: 640,
						position: new google.maps.LatLng(latitud,longitud),
						tabClassName: 'pestanas'
			   });
			
                        
        $.fn.actas_expo(id_sucursal);
	
	/*var html  = '<table border="0">';
	    html += ' <tr style="font-weight:bold;border-bottom:1px solid rgba(0,0,0,0.6);" height="23">';
		html += '   <td align="center" width="20">N°</td>';
		html += '   <td align="center" width="100">Harina</td>';
		html += '   <td align="center" width="100">Levadura</td>';
		html += '   <td align="center" width="120">Manteca</td>';
		html += '   <td align="center" width="120">Azcucar</td>';
		html += '   <td align="center" width="120">Pan</td>';
		html += ' </tr>';
		html += ' <tr style="font-weight:bold; color:rgba(0,0,0,0.6)">';
		html += '   <td align="center">1</td>';
		html += '   <td align="center">25 kg</td>';
		html += '   <td align="center">10 kg</td>';
		html += '   <td align="center">10 kg</td>';
		html += '   <td align="center">25 kg</td>';
		html += '   <td align="center">1000</td>';
		html += ' </tr>';
	    html += '</table>';*/
	
	infoBubble.addTab(infoBubble, 'Red Venezuela', html,220,640);
//	
//	//Evento cuando cierran la ventana informativa
	google.maps.event.addListener(infoBubble,'closeclick',function(){
	 
		 //Seteamos la variable
		 infoBubble = null;
	 
	});
	
	infoBubble.open();
	
	
	
	//Creamos la cookie
	$.fn.crear_cookie('ID_SUCURSAL',id_sucural);
	
	//Ajax
	$.ajax({
			
		url: 'c_mapa/pestanas_sucursal',
		type: 'POST',
		dataType: 'json',
		beforeSend: function(objeto){
			
			//Msj de carga
			$('.background_progressbar').show();
				
		},
		error: function(objeto, quepaso, otroobj){
			
			//Ocultamos el mensaje de carga
			$('.background_progressbar').hide();
			
			//Evaluo el error
			if(quepaso == 'timeout'){
				
				var msj   = 'Timeout!';
				
			}else{
				
				var msj   = '<p>Ocurrio un error a la hora de mostrar los items del menú</p><p>Por favor cargue de nuevo la p&aacute;gina!.</p>';
				
			}//Fin del if
			
			//Ocultamos el mensaje de carga
			$('.background_progressbar').hide();
			
			var tipo      = 1;
			var ttl       = 'Error';
			var fn_si     = '';
			var txt_fn_si = '';
			var fn_no     = '';
			var txt_fn_no = '';
			var ancho     = 380;
			var alto      = 200;
			
			//Llamamos a la función que genera el dilogo
			$.fn.dialogo(tipo,msj,ttl,fn_si,txt_fn_si,fn_no,txt_fn_no,ancho,alto);
			
		},
		//timeout: 10000,
		success: function(data){
			
			//Evaluo si hay una ventana informativa abierta
			if(infoBubble != null){
			  
			  //Cerramos la ventana informativa
			  infoBubble.close();
			   
			}//Fin del if
			
			//Variable que contiene la ventana modal
			infoBubble = new InfoBubble({
				                activeTabClassName: 'activeTabClass',
								arrowPosition: 50,
								arrowStyle: 2,
								/*borderColor: '#2c2c2c',*/
								borderRadius: 10,
								borderWidth: 1,
								//content: info_sucursal,
								map: mapa,
								maxHeight: 220,
								minHeight: 220,
								maxWidth: 1000,
								minWidth: 500,
								position: new google.maps.LatLng(latitud,longitud),
								tabClassName: 'pestanas',
					   });
			
			
			
			//Asigno los tooltips
			$.fn.toolTips('.tooltip');
			
			//Recorro los registros
			for(var i = 0; i < data['PESTANAS'].length; i++){
				
				//Agregamos las pestañas
				infoBubble.addTab(infoBubble, data['PESTANAS'][i]['nombre_seccion'], '<div class="cargando_pestana"></div>',data['PESTANAS'][i]['alto'],data['PESTANAS'][i]['ancho']);
				
				//Evaluamos el id de la pestaña
				switch(data['PESTANAS'][i]['id_seccion']){
					
					case 1: 
					       //Muestro la información general de la sucursal
						   $.fn.info_general_sucursal(i);
						   
					       break;
						   
					case 2:
					       //Muestro el inventario de la sucursal
						   $.fn.inventario_sucursal(i);
						   
						   break;
					
					case 3:
					       // Muestro el detalle de la sucursal
						   $.fn.detalle_sucursal(i);
						   
						   break;
						   
				    case 4:
					       //Muestro la información de los centros de votación
					       $.fn.info_votacion(i);
						   
						   break;
						   
				    case 5: 
					       //Muestro la información de los operativos
					       $.fn.info_operativo_abierto(i)
					
					       break;
					
				}//Fin del switch
				
			}//Fin del for
			
			//Evento cuando cierran la ventana informativa
			google.maps.event.addListener(infoBubble,'closeclick',function(){
			 
				 //Seteamos la variable
				 infoBubble = null;
				 
				 //Borramos la cookie
				 $.fn.borrar_cookie('ID_SUCURSAL');
			 
			});
			
			//Evento cuando la ventana informativa está lista
			google.maps.event.addListener(infoBubble, 'domready', function(){
			  
				//Ocultamos el mensaje de carga
				$('.background_progressbar').hide();
				
				$.fn.eventos();
				
			}); 

			$(infoBubble.bubble_).click(function() {
			console.log('clicked!');

				//infoBubble.setMaxHeight(100);
					//$(this).width(200);
			
			});
			
			//Abrimos la ventana informativa
			infoBubble.open();
			 var infoBubble2 = new InfoBubble({
			  map: mapa,
			  content: '<div class="phoneytext">Some label</div>',
			  position: new google.maps.LatLng(-35, 151),
			  shadowStyle: 1,
			  padding: 0,
			  backgroundColor: 'rgb(57,57,57)',
			  borderRadius: 4,
			  arrowSize: 10,
			  borderWidth: 1,
			  borderColor: '#2c2c2c',
			  disableAutoPan: true,
			  hideCloseButton: true,
			  arrowPosition: 30,
			  backgroundClassName: 'phoney',
			  arrowStyle: 2
			});

		}//Fin del success
		
                
	});//Fin del ajax

};//Fin de la función
/*******************/


//////////prueba////////////////
$.fn.actas_expo = function(id_sucursal)
{
    
 console.log(id_sucursal); 
 $.ajax({
			
		url: 'sucursal',
		type: 'POST',
                dataType: 'json',
                data:{'sucursal':id_sucursal},
		//timeout: 10000,
		success: function(data){

             var buque = (data.DETALLE_BUQUE[0]['EDPR_BUQUE']);  
            // var foto = (data.DETALLE_BUQUE[0]['FOTO']);
             
           var infoModal = '';
//            infoModal += '<div class="popover__wrapper imgcenterdiv imgcenter">  \n\
//                <img src="../../../../assets/modules/panaderia/images/' + foto + '" height="50" width="50"> \n\
//                <div class="push popover__content">    \n\
//                <img src="../../../../assets/modules/panaderia/images/' + foto + '" height="200" width="400">  \n\
//                </div></div>';
            infoModal += '<h4 class="modal-title text-primary text-center">' + buque + '</h4>';
            infoModal += '  <div class="row"><br>';
            infoModal += '  </div>';
            infoModal += '<div id="capa_scroll_rubro" class= "scroll_modal">';
            infoModal += ' <div class="row">';
            infoModal += '  <div class="container-fluid header_rubro" >';
            infoModal += '	  <div class="col-md-1 text-center">Rubro</div>';
            infoModal += '	  <div class="col-md-1 text-center">Proveedor</div>';
            infoModal += '	  <div class="col-md-2 text-center">Contrato</div>';
            //infoModal += '	  <div class="col-md-2 text-center">Oferta Comercial</div>';
            infoModal += '	  <div class="col-md-2 text-center">Orden de Compra</div>';
            infoModal += '	  <div class="col-md-2 text-center">Orden de Servicio</div>';
            infoModal += '	  <div class="col-md-2 text-center">Puerto</div>';
            infoModal += '	  <div class="col-md-2 text-center">Manifiesto BL</div>';
           // infoModal += '	  <div class="col-md-2 text-center">Obse</div>';
            infoModal += '  </div>';
            infoModal += '  </div>';
            infoModal += '</div>';
            infoModal += '  <div class="col-md-12 mensaje_producto">';
            infoModal += '  </div>';
           
            $.each(data['DETALLE_BUQUE'], function (k, v)
            {
               // var consumodiario = Math.floor(v.CONSUMO_DIARIO);
               // var coberturadiaria = Math.floor(v.COBERTURA);

                $('#modal .modal-title').text(v.EDPR_BUQUE);

                infoModal += '<div class="row">';
                infoModal += '<div class="text-center container-fluid dato_rubro">';
                infoModal += '	<div class="col-md-1 ">' + v.EDEP_ESPECIFICACION + '</div>';
                infoModal += '	<div class="col-md-1 ">' + v.EDPR_PROVEEDOR + '</div>';
                infoModal += '	<div class="col-md-2 ">' + v.EDPR_CONTRATO + '</div>';
                //infoModal += '	<div class="col-md-2 ">' + v.EDPR_OFERTA_COMERCIAL + '</div>';
                infoModal += '	<div class="col-md-2 ">' + v.EDPR_ORDEN_COMPRA + '</div>';
                infoModal += '	<div class="col-md-2 ">' + v.EDPR_ORDEN_SERV + '</div>';
                infoModal += '	<div class="col-md-2 ">' + v.EDPU_DESCRIPCION + '</div>';
                infoModal += '	<div class="col-md-2 ">' + v.EDPR_MANIFIESTO_BL + '</div>';
         
               // infoModal += '	<div class="col-md-1 ">' + v.RECEPCIONADO + ' </div>';
//                if (coberturadiaria <= 7){
//                    infoModal += '<div class="col-md-1 notificacion_activa">' + coberturadiaria + '</div>'; 
//                }else{
//                    infoModal += '	<div class="col-md-1 ">' + coberturadiaria + ' </div>';
//                }
//              //  infoModal += '  <div class="col-md-2 ">' + v.OBSERVACION + '</div>';
//                infoModal += '</div>';
//                infoModal += '</div>';
            });

           infoBubble.addTab(infoBubble, 'Información', infoModal,220,640);
	
           //	//Evento cuando cierran la ventana informativa
           google.maps.event.addListener(infoBubble,'closeclick',function(){

                    //Seteamos la variable
                    infoBubble = null;

           });

           infoBubble.open();

        }//Fin del success
			
	});//Fin del ajax
	
		
 };//Fin de la función $.fn.tabla
 /******************************/
 ////////////////fin prueba/////////////////////
 
 /*
 Función que muestra los datos con los detalles de la solicitud
 */
$.fn.detalle_inventario = function (id_solicitud) {
//console.log(id_solicitud); 
    $.ajax({
        url: 'sucursal',
        type: 'POST',
        dataType: 'json',
        data: {sucursal: id_solicitud},
        beforeSend: function (objeto) {

        },
        error: function (objeto, quepaso, otroobj) {

        },
        success: function (data) {

            var infoModal = '';


            //Recorremos los resultados de los productos asociados
            $.each(data['DETALLE_INV'], function (k, v)
            {
                $('#modal .modal-title').text(v.RAZON_SOCIAL);

                infoModal += '<div class="row">';
                infoModal += '<div class="text-center container-fluid dato_rubro">';
                infoModal += '	<div class="col-md-2 ">' + v.NOMBRE_RUBRO + '</div>';
                infoModal += '	<div class="col-md-2 ">' + v.REQUERIMIENTO_MES + ' ' + v.UM_MES + '</div>';
                infoModal += '	<div class="col-md-2 ">' + v.CONSUMO_DIARIO + ' ' + v.UM_DIARIO + '</div>';
                infoModal += '	<div class="col-md-2 ">' + v.INVENTARIO_ACTUAL + ' ' + v.UM_INV + '</div>';
               // infoModal += '	<div class="col-md-2 ">' + v.RECEPCIONADO + ' </div>';
                infoModal += '	<div class="col-md-2 ">' + v.COBERTURA + ' </div>';
              //  infoModal += '  <div class="col-md-1 ">' + v.OBSERVACION + '</div>';
                infoModal += '</div>';
                infoModal += '</div>';
            });

            $('.dato_rubro').remove();
            $('#capa_scroll_rubro').append(infoModal);

            //Función donde se declaran todos los eventos
            $.fn.eventos();
        }//Fin del success

    }); //Fin del ajax
}


/*****************************************************/
/* Función que muestra la información de la sucursal */
/*****************************************************/
$.fn.info_general_sucursal = function(indice_pestana){
	
	var contenido = null;$.ajax({
			
		url: 'c_mapa/info_sucursal',
		type: 'POST',
		dataType: 'json',
		beforeSend: function(objeto){
			
			//Msj de carga
			//$('.background_progressbar').show();
				
		},
		async: true,
		error: function(objeto, quepaso, otroobj){
			
			//Armo los menus
			contenido = '<div class="mensaje_error"></div>';
			
			//Actualizamos la información de la pestaña
            infoBubble.updateTab(indice_pestana, null, contenido);
			
		},
		//timeout: 10000,
		success: function(data){
			
			//Evaluamos
			if(data['INFO_SUCURSAL'] != null){
				
				//Seteo el array de contactos
				array_contactos = data['CONTACTOS_SUCURSAL'];
						
				//Seteamos la foto
				if(data['imagen_sucursal'] == null){
					
					var imagen = 'default.png';
					
				}else{
					
					var imagen = data['INFO_SUCURSAL']['imagen_sucursal'];
					
				}//Fin del if*/
				
				//Armo el contenido
				contenido  = '<table border="0" class="tbl_info_sucursal">';
				contenido += '  <tr>';
				contenido += '    <td class="foto" rowspan="7" width="300" style="background-image:url(../../assets/modules/mapa/images/sucursales/'+imagen+');background-position:centert center;background-repeat:no-repeat;background-size:100% 100%;"></td>';
				contenido += '    <td align="left" width="70" class="titulo" height="25">Sucursal:</td>';
				contenido += '    <td width="300">'+data['INFO_SUCURSAL']['nombre_sucursal']+'</td>';
				contenido += '  </tr>';
				contenido += '  <tr>';
				contenido += '    <td class="titulo" height="25">Municipio:</td>';
				contenido += '    <td>'+data['INFO_SUCURSAL']['desc_localidad_1']+'</td>';
				contenido += '  </tr>';
				contenido += '  <tr>';
				contenido += '    <td class="titulo" height="25">Circuito:</td>';
				contenido += '    <td>'+data['INFO_SUCURSAL']['desc_localidad_2']+'</td>';
				contenido += '  </tr>';
				contenido += '  <tr>';
				contenido += '    <td class="titulo" height="25">Parroqu&iacute;a:</td>';
				contenido += '    <td>'+data['INFO_SUCURSAL']['desc_localidad_3']+'</td>';
				contenido += '  </tr>';
				contenido += '  <tr>';
				contenido += '    <td class="titulo" height="25">Direcci&oacute;n:</td>';
				contenido += '    <td>';
				contenido += '      <div class="td_direccion">'+data['INFO_SUCURSAL']['direccion_sucursal']+'</div>';
				contenido += '    </td>';
				contenido += '  </tr>';
				contenido += '    <td class="titulo" height="25">Contactos:</td>';
				contenido += '    <td>';
				contenido += '      <div class="btn_contactos tooltip contactos" title="contactos"></div>';
				contenido += '    </td>';
				contenido += '  </tr>';
				contenido += '  <tr>';
				contenido += '    <td class="titulo" height="25">Estatus:</td>';
				contenido += '    <td>'+data['INFO_SUCURSAL']['desc_estatus']+'</td>';
				contenido += '  </tr>';
				contenido += '  <tr>';
				contenido += '    <td colspan="3"></td>';
				contenido += '  </tr>';
				contenido += '</table>';
		    
			}else{
				
				//Armo los menus
				contenido = '<div class="mensaje_error"></div>';
				
			}//Fin del if
			
			//Actualizamos la información de la pestaña
            infoBubble.updateTab(indice_pestana, null, contenido);
			
			$.fn.eventos();
			
		}//Fin del success
			
	});//Fin del ajax
	
	
	//Ajax
	
};//Fin de la función
/*******************/

/**************************************************************/
/* Función que muestra el detalle de la sucursal seleccionada */
/**************************************************************/
$.fn.detalle_sucursal = function(indice_pestana){
	
	var contenido = null;
	
	//Ajax
	$.ajax({
			
		url: 'c_mapa/detalle_sucursal',
		type: 'POST',
		dataType: 'json',
		beforeSend: function(objeto){
			
			//Msj de carga
			//$('.background_progressbar').show();
				
		},
		async: true,
		error: function(objeto, quepaso, otroobj){
			
			//Armo los menus
			contenido = '<div class="mensaje_error"></div>';
			
			//Actualizamos la información de la pestaña
            infoBubble.updateTab(indice_pestana, null, contenido);
			
		},
		//timeout: 10000,
		success: function(data){
			
			//Evaluamos
			if(data['INFO_DETALLE'] != null){
				
				//Armo el contenido
				contenido  = '<table border="0" class="tbl_detalle_sucursal">';
				contenido += '  <tr height="25">';
				contenido += '    <td class="titulo" width="150">Capacidad instalada</td>';
				contenido += '    <td class="leyenda" width="100">'+data['INFO_DETALLE']['ca_cap_instalada']+'</td>';
				contenido += '  </tr>';
				contenido += '  <tr height="25">';
				contenido += '    <td class="titulo">Capacidad operativa</td>';
				contenido += '    <td class="leyenda">'+data['INFO_DETALLE']['ca_cap_operativa']+'</td>';
				contenido += '  </tr>';
				contenido += '  <tr height="25">';
				contenido += '    <td class="titulo">Almacenamiento en frio</td>';
				contenido += '    <td class="leyenda">'+data['INFO_DETALLE']['ca_cap_almac_frio']+'</td>';
				contenido += '  </tr>';
				contenido += '  <tr height="25">';
				contenido += '    <td class="titulo">Almacenamiento en seco</td>';
				contenido += '    <td class="leyenda">'+data['INFO_DETALLE']['ca_cap_almac_seco']+'</td>';
				contenido += '  </tr>';
				contenido += '  <tr height="25">';
				contenido += '    <td class="titulo">Cantidad de empreados</td>';
				contenido += '    <td class="leyenda">'+data['INFO_DETALLE']['ca_empleados']+'</td>';
				contenido += '  </tr>';
				contenido += '</table>';
		    
			}else{
				
				//Armo los menus
				contenido = '<div class="mensaje_error"></div>';
				
			}//Fin del if
		
			//Actualizamos la información de la pestaña
            infoBubble.updateTab(indice_pestana, null, contenido);
			
			$.fn.eventos();
			
		}//Fin del success
			
	});//Fin del ajax
	
};//Fin de la función
/*******************/

/****************************************************/
/* Función que muestra el inventario de la sucursal */
/****************************************************/
$.fn.inventario_sucursal = function(indice_pestana){
	
	var contenido = null;
	
	//Ajax
	$.ajax({
			
		url: 'c_mapa/inventario_sucursal',
		type: 'POST',
		dataType: 'json',
		beforeSend: function(objeto){
			
			//Msj de carga
			//$('.background_progressbar').show();
				
		},
		async: true,
		error: function(objeto, quepaso, otroobj){
			
			//Armo los menus
			contenido = '<div class="mensaje_error"></div>';
			
			//Actualizamos la información de la pestaña
            infoBubble.updateTab(indice_pestana, null, contenido);
			
		},
		//timeout: 10000,
		success: function(data){
			
			//Evaluamos
			if(data['INVENTARIO_SUCURSAL'] != null){
				
				//Armo el contenido
				contenido  = '<table border="0" class="tbl_inventario_sucursal">';
				contenido += '  <tr height="25">';
				contenido += '    <td class="titulo" width="250">Producto</td>';
				contenido += '    <td class="titulo" width="120">Cantidad</td>';
				contenido += '  </tr>';
				contenido += '  <tr height="1">';
			    contenido += '	  <td colspan="2" class="separador_contacto"></td>';
				contenido += '  </tr>';
				
				//Obtengo el nº de registros
				var numReg = data['INVENTARIO_SUCURSAL'].length;
				
				//Recorro los registros
				for(var i = 0; i < numReg; i++){
					
					var f = i%2;
					
					contenido += '  <tr height="25" class="fila_'+f+'">';
					contenido += '    <td class="leyenda">'+data['INVENTARIO_SUCURSAL'][i]['nombre_producto']+'</td>';
					contenido += '    <td class="leyenda">'+data['INVENTARIO_SUCURSAL'][i]['cantidad']+' '+data['INVENTARIO_SUCURSAL'][i]['unidad_medida']+'</td>';
					contenido += '  </tr>';
					
				}//Fin del for
				
				contenido += '</table>';
		    
			}else{
				
				//Armo los menus
				contenido = '<div class="mensaje_error"></div>';
				
			}//Fin del if
			
			//Actualizamos la información de la pestaña
            infoBubble.updateTab(indice_pestana, null, contenido);
			
			$.fn.eventos();
			
		}//Fin del success
			
	});//Fin del ajax
	
};//Fin de la función
/*******************/

/********************************************************************/
/* Función que muestra la información sobre los centros de votación */
/********************************************************************/
$.fn.info_votacion = function(indice_pestana){
	
	var contenido = null;
	
	//Ajax
	$.ajax({
			
		url: 'c_mapa/info_votacion',
		type: 'POST',
		dataType: 'json',
		beforeSend: function(objeto){
			
			//Msj de carga
			//$('.background_progressbar').show();
				
		},
		async: true,
		error: function(objeto, quepaso, otroobj){
			
			//Armo los menus
			contenido = '<div class="mensaje_error"></div>';
			
			//Actualizamos la información de la pestaña
            infoBubble.updateTab(indice_pestana, null, contenido);
			
		},
		//timeout: 10000,
		success: function(data){
			
			//Evaluamos
			if(data['INFO_VOTACION'] != null){
				
				//Armo el contenido
				contenido  = '<table border="0" class="tbl_info_votos">';
				contenido += '  <tr height="25">';
				contenido += '    <td class="titulo" width="200">Candidato</td>';
				contenido += '    <td class="titulo" width="160">Cantidad de votos</td>';
				contenido += '    <td class="titulo" width="160">Porcentaje</td>';
				contenido += '  </tr>';
				contenido += '  <tr height="1">';
			    contenido += '	  <td colspan="3" class="separador_header"></td>';
				contenido += '  </tr>';
				
				//Obtengo el nº de registros
				var numReg = data['INFO_VOTACION'].length;
				
				var id_tipo_votacion = 0;
				
				//Recorro los registros
				for(var i = 0; i < numReg; i++){
					
					// Evaluo si es la misma elecciòn
					if(id_tipo_votacion != data['INFO_VOTACION'][i]['id_tipo_eleccion']){
					
					    // Seteamos la variable
						id_tipo_votacion = data['INFO_VOTACION'][i]['id_tipo_eleccion'];
					    
						contenido += '  <tr height="25">';
						contenido += '    <td class="subtitulo" colspan="3">VOTACIONES '+data['INFO_VOTACION'][i]['nb_tipo_eleccion']+' ('+data['INFO_VOTACION'][i]['desc_tipo_sucursal']+')</td>';
						contenido += '  </tr>';
						
					}//Fin del if
					
					var f = i%2;
					
					contenido += '  <tr height="25" class="fila_'+f+'">';
					contenido += '    <td class="leyenda">'+data['INFO_VOTACION'][i]['nb_candidato']+'</td>';
					contenido += '    <td class="leyenda">'+data['INFO_VOTACION'][i]['ca_votos']+'</td>';
					contenido += '    <td class="leyenda">'+data['INFO_VOTACION'][i]['pc_votos']+'</td>';
					contenido += '  </tr>';
					
				}//Fin del for
				
				contenido += '</table>';
		    
			}else{
				
				//Armo los menus
				contenido = '<div class="mensaje_error"></div>';
				
			}//Fin del if
		
			//Actualizamos la información de la pestaña
            infoBubble.updateTab(indice_pestana, null, contenido);
			
			$.fn.eventos();
			
		}//Fin del success
			
	});//Fin del ajax
	
};//Fin de la función
/*******************/

/***************************************************************************/
/* Función que muestra la información sobre los operativos a cielo abierto */
/***************************************************************************/
$.fn.info_operativo_abierto = function(indice_pestana){
	
	var contenido = null;
	
	//Ajax
	$.ajax({
			
		url: 'c_mapa/info_operativo_cielo_abierto',
		type: 'POST',
		dataType: 'json',
		beforeSend: function(objeto){
			
			//Msj de carga
			//$('.background_progressbar').show();
				
		},
		async: true,
		error: function(objeto, quepaso, otroobj){
			
			//Armo los menus
			contenido = '<div class="mensaje_error"></div>';
			
			//Actualizamos la información de la pestaña
            infoBubble.updateTab(indice_pestana, null, contenido);
			
		},
		//timeout: 10000,
		success: function(data){
			
			//Evaluamos
			if(data['INFO_OPERATIVO'] != null){
				
				//Armo el contenido
				contenido  = '<table border="0" class="tbl_info_operativo_cielo_abierto">';
				contenido += '  <tr height="25">';
				contenido += '    <td class="titulo" width="100">Realizado</td>';
				contenido += '    <td class="titulo" width="100">Pers. atendidas</td>';
				contenido += '    <td class="titulo" width="100">T.M vendidas</td>';
				contenido += '  </tr>';
				contenido += '  <tr height="1">';
			    contenido += '	  <td colspan="3" class="separador_header"></td>';
				contenido += '  </tr>';
				
				//Obtengo el nº de registros
				var numReg = data['INFO_OPERATIVO'].length;
				
				//Recorro los registros
				for(var i = 0; i < numReg; i++){

					var f = i%2;
					
					contenido += '  <tr height="25" class="fila_'+f+'">';
					contenido += '    <td class="leyenda">'+data['INFO_OPERATIVO'][i]['realizado']+'</td>';
					contenido += '    <td class="leyenda">'+data['INFO_OPERATIVO'][i]['ca_personas']+'</td>';
					contenido += '    <td class="leyenda">'+data['INFO_OPERATIVO'][i]['ca_vendidas']+'</td>';
					contenido += '  </tr>';
					
				}//Fin del for
				
				contenido += '</table>';
		    
			}else{
				
				//Armo los menus
				contenido = '<div class="mensaje_error"></div>';
				
			}//Fin del if
		
			//Actualizamos la información de la pestaña
            infoBubble.updateTab(indice_pestana, null, contenido);
			
			$.fn.eventos();
			
		}//Fin del success
			
	});//Fin del ajax
	
};//Fin de la función
/*******************/

/*******************************/
/* Función que crea una cookie */
/*******************************/
$.fn.crear_cookie = function(nombre_cookie, valor_cookie){
	
	//Creo la cookie la cookie
	document.cookie=nombre_cookie+'='+valor_cookie+';domain='+window.location.hostname+';path=/';
	
};//Fin de la función
/*******************/

/******************************************/
/* Función que borra la cookie por nombre */
/******************************************/
$.fn.borrar_cookie = function(nombre_cookie){
	
	//Borramos la cookie
    document.cookie = nombre_cookie+"=; domain="+window.location.hostname+";path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	
}//Fin de la función
/******************/

/*********************************************/
/* Función que obtine el valor de una cookie */
/*********************************************/
$.fn.chequear_cookie = function(nombre_cookie)
{
	
    var nombre  = nombre_cookie + "=";
    var cookies = document.cookie.split(';');
	
	//Recorro las cookies
    for(var i=0; i<cookies.length; i++)
	{
		
        var cookie = cookies[i];
        while (cookie.charAt(0)==' ') cookie = cookie.substring(1);
        if(cookie.indexOf(nombre) == 0) return cookie.substring(nombre.length,cookie.length);
		
    }//Fin del for
	
    return "";
	
} //Fin de la función
/*******************/

/*******************************************************************/
/* Función que muestra el formulario para crear una nueva sucursal */
/*******************************************************************/
$.fn.formulario_nueva_sucursal = function(){
	
   //Ajax
   $.ajax({
			
		url: 'c_mapa/datos_crear_sucursal',
		type: 'POST',
		dataType: 'json',
		//data: {},
		beforeSend: function(objeto){
			
			//Msj de carga
			$('.background_progressbar').show();
				
		},
		error: function(objeto, quepaso, otroobj){
			
			//Ocultamos el mensaje de carga
			$('.background_progressbar').hide();
			
			//Evaluo el error
			if(quepaso == 'timeout'){
				
				var msj   = 'Timeout!';
				
			}else{
				
				var msj   = '<p>&iexcl;Ocurrio un error!.</p><p>Por favor intente de nuevo.</p>';
				
			}//Fin del if
			
			var tipo      = 1;
			var ttl       = 'Error';
			var fn_si     = '';
			var txt_fn_si = '';
			var fn_no     = '';
			var txt_fn_no = '';
			var ancho     = 380;
			var alto      = 200;
			
			//Llamamos a la función que genera el dilogo
			$.fn.dialogo(tipo,msj,ttl,fn_si,txt_fn_si,fn_no,txt_fn_no,ancho,alto);
			
		},
		//timeout: 10000,
		success: function(data){
			
			//Ocultamos el mensaje de carga
			$('.background_progressbar').hide();
			
			var contenido  = '<center>';
				contenido += '  <table id="tabla_nueva_sucursal" border="0">';
				contenido += '    <tr>';
				contenido += '      <td colspan="2">';
				contenido += '        <input id="nombre_sucursal" class="validar validate[required,custom[onlyLetterNumber],minSize[3]] campo_mayuscula" type="text" data-prompt-position="bottomLeft" placeholder="NOMBRE DE LA SUCURSAL">';
				contenido += '      </td>';     
				contenido += '    </tr>';
				contenido += '    <tr>';
				contenido += '      <td rowspan="7" width="400">';
				contenido += '        <div class="capa_foto_nueva_sucursal" data-prompt-position="bottomLeft:0,0">';
				contenido += '          <input type="file" class="foto_nueva_sucursal"/>';
				contenido += '        </div>';
				contenido += '      </td>';
				contenido += '      <td>';
				contenido += '        <div class="capa_sectores capa_combo" data-prompt-position="bottomLeft">';
				contenido += '           <select id="sectores" multiple class="validar validate[required]" title="SECTORES">';
				contenido += '            '+$.fn.combo_sectores(data['SECTORES'],null)+'';
				contenido += '           </select>';
				contenido += '        </div>';
				contenido += '      </td>';
				contenido += '    </tr>';
				contenido += '    <tr>';
				contenido += '      <td>';
				contenido += '        <div class="capa_centros capa_combo" data-prompt-position="bottomLeft">';
				contenido += '          <select id="centros" multiple class="validar validate[required]" title="CENTROS DE ABASTECIMIENTO" disabled></select>';
				contenido += '        </div>';
				contenido += '      </td>';
				contenido += '    </tr>';
				contenido += '    <tr>';
				contenido += '      <td>';
				contenido += '        <div class="capa_tipo_suc capa_combo" data-prompt-position="bottomLeft">';
				contenido += '          <select id="tipo_sucursal" multiple class="validar validate[required]" title="TIPOS DE SUCURSALES" disabled></select>';
				contenido += '        </div>';
				contenido += '      </td>';
				contenido += '    </tr>';
				contenido += '    <tr>';
				contenido += '      <td>';
				contenido += '        <div class="capa_localidad_1 capa_combo" data-prompt-position="bottomLeft">';
				contenido += '          <select id="localidad_1" multiple class="validar validate[required]" title="MUNICIPIOS">';
				contenido += '            '+$.fn.combo_localidades(data['LOCALIDAD_1'],1,null)+'';
				contenido += '          </select>';
				contenido += '        </div>';
				contenido += '      </td>';
				contenido += '    </tr>';
				contenido += '    <tr>';
				contenido += '      <td>';
				contenido += '        <div class="capa_localidad_2 capa_combo" data-prompt-position="bottomLeft">';
				contenido += '          <select id="localidad_2" multiple class="validar validate[required]" title="CIRCUITOS" disabled></select>';
				contenido += '        </div>';
				contenido += '      </td>';
				contenido += '    </tr>';
				contenido += '    <tr>';
				contenido += '      <td>';
				contenido += '        <div class="capa_localidad_3 capa_combo" data-prompt-position="bottomLeft">';
				contenido += '          <select id="localidad_3" multiple class="validar validate[required]" title="PARROQUIAS" disabled></select>';
				contenido += '        </div>';
				contenido += '      </td>';
				contenido += '    </tr>';				
				contenido += '    <tr>'; 
				contenido += '      <td>';
				contenido += '        <div class="capa_estatus capa_combo" data-prompt-position="bottomLeft">';
				contenido += '          <select id="estatus" multiple title="ESTATUS" class="validar">';
				contenido += '            '+$.fn.combo_estatus_sucursal(data['ESTATUS_SUCURSAL'],null)+'';
				contenido += '          </select>';
				contenido += '        </div>'
				contenido += '      </td>';
				contenido += '    </tr>';
				contenido += '    <tr>';
				contenido += '      <td colspan="2">';
				contenido += '        <textarea id="direccion_sucursal" maxlength="250" placeholder="M&aacute;x. 250 caracteres"></textarea>';
				contenido += '      </td>';  
				contenido += '    </tr>';
				contenido += '    <tr>';
				contenido += '      <td colspan="2">';
				contenido += '        <strong>N° caracteres: <span id="numLetras">0</span></strong>&nbsp;<strong>Límite de caracteres: <span id="limLetras">(250)</span></strong>';
				contenido += '      </td>';  
				contenido += '    </tr>';
				contenido += '    <tr height="20">';
				contenido += '      <td colspan="2"></td>';      
				contenido += '    </tr>';
				contenido += '  </table>';
				contenido += '</center>';
		   
		    //Ventana de confirmación
			$('#dialogo').dialog({
					   title: 'Nueva Sucursal',
					   resizable: false,
					   height:460,
					   width: 750,
					   modal: true,
					   buttons: {
								 "Crear sucursal": function() {
									
									//Llamamos a la función         
									$.fn.crear_sucursal();
									
								 },
								 "Cerrar": function(){
									 
									 $(this).dialog("close");
									 
								 }
					   },
					   show: {
						 effect: "explode",
						 duration: 500
					   },
					   hide: {
						 effect: "explode",
						 duration: 500
					   },
					   open: function(){
						  
						  //Mensaje del dialogo
						  $(this).append(contenido);
						  
						  //Recorro cada filtro y le asigno el método multiselect
						  $('#tabla_nueva_sucursal select').each(function(index, elemento){
								
								$(this).multiselect({
							   
									minWidth: 300,
									multiple: false,
									noneSelectedText: $(this).attr('title'),
									height: 100,
									header:  $(this).attr('title'),
									selectedList: 1

								/*}).multiselectfilter({
								   
									label: 'Filtro:',
									placeholder: '',
									width: 210
								   */
								});
								
						  });//Fin del each
						  
						  $.fn.eventos();
						  
					   },
					   close: function(){
					 
						  $(this).dialog("destroy");
						 
					   },
					   beforeClose: function(){
				  
						  $(this).html('');
				  
					   } 
			});
			
			//Le asignamos un indice superior al del colorbox para hacerlo visible
			$('.ui-front').css('z-index','9000');
		   
		}//Fin del success
			
   });//Fin del ajax
	
}//Fin de la función
/******************/

/***************************************/
/* Función que crea una nueva sucursal */
/***************************************/
$.fn.crear_sucursal = function(){
	
	//Valido los campos
	var validador = $.fn.validar_crear_sucursal();
	
	//Evaluo el validador
	if(validador == true){
		
		// Armo la data del formulario
        var formData = new FormData();
		
		//Creo la variable que contendrá los valores de los filtros
	    var valores = new Object();
		var imagen  = ($('.foto_nueva_sucursal').val() == '' || $('.foto_nueva_sucursal').val() == null) ? imagen = []: $('.foto_nueva_sucursal')[0].files[0];

		formData.append("imagen", imagen);
		formData.append("direccion_sucursal", $('#direccion_sucursal').val());
		formData.append("latitud",marca_admin.getPosition().lat());
		formData.append("longitud",marca_admin.getPosition().lng());
		formData.append("nombre",$('#nombre_sucursal').val());
		formData.append("sector",$('#sectores').val());
		formData.append("centro",$('#centros').val());
		formData.append("tipo_sucursal",$('#tipo_sucursal').val());
		formData.append("localidad_1",$('#localidad_1').val());
		formData.append("localidad_2",$('#localidad_2').val());
		formData.append("localidad_3",$('#localidad_3').val());
		formData.append("direccion",$('#direccion_sucursal').val());
		formData.append("estatus",$('#estatus').val());
		
		//Ajax
		$.ajax({
			
			url: 'c_mapa/crear_sucursal',
			type: 'POST',
			data: formData,
			dataType: 'json',
			beforeSend: function(objeto){
				
				//Msj de carga
				$('.background_progressbar').show();
					  
			},
			error: function(objeto, quepaso, otroobj){
				
				//Cerramos la ventana del dialogo
				$('#dialogo').dialog("close");
				
				//Ocultamos el mensaje de carga
				$('.background_progressbar').hide();
				
				//Evaluo el error
				if(quepaso == 'timeout'){
					
					var msj   = 'Timeout!';
					
				}else{
					
					var msj   = 'Ocurrio un error al crear la sucursal.<p>Por favor intente de nuevo!.</p>';
					
				}//Fin del if
				
				var tipo      = 2;
				var ttl       = 'Error';
				var fn_si     = '$.fn.formulario_nueva_sucursal()';
				var txt_fn_si = 'Reintentar';
				var fn_no     = '';
				var txt_fn_no = 'Ok';
				var ancho     = 380;
				var alto      = 200;
				
				//Llamamos a la función que genera el dilogo
				$.fn.dialogo(tipo,msj,ttl,fn_si,txt_fn_si,fn_no,txt_fn_no,ancho,alto);
				
			},
			success: function(data){
				
				//Ocultamos el mensaje de carga
				$('.background_progressbar').hide();
				
				// Evaluo la respuesta
				if(data['CREAR_SUCURSAL']['CODIGO'] == '1'){
					
					$.fn.menu();
					
					// Cierro el dialogo
					$('#dialogo').dialog("close");
					
					var msj       = data['CREAR_SUCURSAL']['MSJ']+'<p>&iquest;Desea agregar contactos a la sucursal?</p>';
					var tipo      = 2;
					var ttl       = 'Sucursal creada';
					var fn_si     = '$.fn.agregar_contacto_sucursal('+data['CREAR_SUCURSAL']['ID']+')';
					var txt_fn_si = 'Agregar';
					var fn_no     = '$.fn.pestanas_informativas('+data['CREAR_SUCURSAL']['ID']+')';
					var txt_fn_no = 'Despu\u00e9s';
					var ancho     = 380;
					var alto      = 200;
				
				//Llamamos a la función que genera el dilogo
				$.fn.dialogo(tipo,msj,ttl,fn_si,txt_fn_si,fn_no,txt_fn_no,ancho,alto);
					
				}else{
					
					//Muestro el mensaje
					$('.ui-dialog-buttonset button').eq(0).attr('data-prompt-position','topLeft');
					$('.ui-dialog-buttonset button').eq(0).validationEngine('showPrompt', data['CREAR_SUCURSAL']['MSJ'], 'topLeft','',true);
					
				}//FIn del if
				
				$.fn.eventos();
				  
			},//Fin del success
			cache: false,
			contentType: false,
			processData: false
	
		})//Fin del ajax
		
	}else{
		
		$.fn.eventos();
		
	}//Fin del if
	
};//Fin de la función
/*******************/

/**********************************/
/* Función que edita una sucursal */
/**********************************/
$.fn.editar_sucursal = function(){
	
	//Valido los campos
	var validador = $.fn.validar_crear_sucursal();
	
	//Evaluo el validador
	if(validador == true){
		
		// Armo la data del formulario
        var formData = new FormData();
		
		//Creo la variable que contendrá los valores de los filtros
	    var valores = new Object();
		var imagen  = ($('.foto_nueva_sucursal').val() == '' || $('.foto_nueva_sucursal').val() == null) ? imagen = []: $('.foto_nueva_sucursal')[0].files[0];

		formData.append("imagen", imagen);
		formData.append("direccion_sucursal", $('#direccion_sucursal').val());
		formData.append("nombre",$('#nombre_sucursal').val());
		formData.append("sector",$('#sectores').val());
		formData.append("centro",$('#centros').val());
		formData.append("tipo_sucursal",$('#tipo_sucursal').val());
		formData.append("localidad_1",$('#localidad_1').val());
		formData.append("localidad_2",$('#localidad_2').val());
		formData.append("localidad_3",$('#localidad_3').val());
		formData.append("direccion",$('#direccion_sucursal').val());
		formData.append("estatus",$('#estatus').val());
		
		//Ajax
		$.ajax({
			
			url: 'c_mapa/editar_sucursal',
			type: 'POST',
			data: formData,
			dataType: 'json',
			beforeSend: function(objeto){
				
				//Msj de carga
				$('.background_progressbar').show();
					  
			},
			error: function(objeto, quepaso, otroobj){
				
				//Cerramos la ventana del dialogo
				$('#dialogo').dialog("close");
				
				//Ocultamos el mensaje de carga
				$('.background_progressbar').hide();
				
				//Evaluo el error
				if(quepaso == 'timeout'){
					
					var msj   = 'Timeout!';
					
				}else{
					
					var msj   = 'Ocurrio un error al crear la sucursal.<p>Por favor intente de nuevo!.</p>';
					
				}//Fin del if
				
				var tipo      = 2;
				var ttl       = 'Error';
				var fn_si     = '$.fn.editar_info_sucursal()';
				var txt_fn_si = 'Reintentar';
				var fn_no     = '';
				var txt_fn_no = 'Ok';
				var ancho     = 380;
				var alto      = 200;
				
				//Llamamos a la función que genera el dilogo
				$.fn.dialogo(tipo,msj,ttl,fn_si,txt_fn_si,fn_no,txt_fn_no,ancho,alto);
				
			},
			success: function(data){
				
				//Ocultamos el mensaje de carga
				$('.background_progressbar').hide();
				
				// Evaluo la respuesta
				if(data['EDITAR_SUCURSAL']['CODIGO'] == '1'){
					
					$.fn.menu();
					
					// Cierro el dialogo
					$('#dialogo').dialog("close");
					
					var msj       = data['EDITAR_SUCURSAL']['MSJ']+'';
					var tipo      = 1;
					var ttl       = 'Sucursal actualizada';
					var fn_si     = '';
					var txt_fn_si = 'Ok';
					var fn_no     = '';
					var txt_fn_no = '';
					var ancho     = 380;
					var alto      = 200;
				
				//Llamamos a la función que genera el dilogo
				$.fn.dialogo(tipo,msj,ttl,fn_si,txt_fn_si,fn_no,txt_fn_no,ancho,alto);
					
				}else{
					
					//Muestro el mensaje
					$('.ui-dialog-buttonset button').eq(0).attr('data-prompt-position','topLeft');
					$('.ui-dialog-buttonset button').eq(0).validationEngine('showPrompt', data['EDITAR_SUCURSAL']['MSJ'], 'topLeft','',true);
					
				}//FIn del if
				
				$.fn.eventos();
				  
			},//Fin del success
			cache: false,
			contentType: false,
			processData: false
	
		})//Fin del ajax
		
	}else{
		
		$.fn.eventos();
		
	}//Fin del if
	
};//Fin de la función
/*******************/

/******************************************************************/
/* función que valida el formulario para crear una nueva sucursal */
/******************************************************************/
$.fn.validar_crear_sucursal = function(){
	
	validador = true;
	
	$('#tabla_nueva_sucursal .validar, #tabla_editar_sucursal .validar').each(function(){
		
		//Evaluamos si es un div
		if($(this).is("select")){
			
			//Obtengo el valor
			var valor = $(this).val();
			
			//Evaluo
			if(valor == null){
				
				$(this).parent().validationEngine('showPrompt', 'Debe seleccionar una opci&oacute;n', 'bottomLeft','',true);
				
				validador = false;
				
				return validador;
				
			}//Fin del if
			
		}else{
		
			//Validamos el campo actual
			var validar = $(this).validationEngine('validate');
		    
			//Evaluamos
			if(validar == true){
				
				validador = false;
				
				return validador;
				
			}//Fin del if
			
		}//Fin dle if
		
	})//Fin del each
	
	return validador;
	
};//Fin de la función
/*******************/

/**********************************************/
/* Función que agrega contactos a la sucursal */
/**********************************************/
$.fn.agregar_contacto_sucursal = function(id_sucursal){
	
	var contenido  = '<center>';
		contenido += '  <table id="tabla_contacto_sucursal" border="0">';
		
		for(var i = 1; i <= 5; i++){
		
			contenido += '    <tr>';
			contenido += '      <td>';
			contenido += '        <input class="cedula_contacto validar" type="text" data-prompt-position="bottomLeft" placeholder="C&eacute;dula" size="10">';
			contenido += '      </td>';
			contenido += '      <td>';
			contenido += '        <input class="nombre_contacto validar campo_mayuscula" type="text" data-prompt-position="bottomLeft" placeholder="Nombre" size="25" disabled>';
			contenido += '      </td>';
			contenido += '      <td>';
			contenido += '        <input class="tlf1_contacto validar" type="text" data-prompt-position="bottomLeft" placeholder="Tel&eacute;fono" size="10" disabled>';
			contenido += '      </td>'; 
			contenido += '      <td>';
			contenido += '        <input class="tlf2_contacto validar" type="text" data-prompt-position="bottomLeft" placeholder="Otro tel&eacute;fono" size="10" disabled>';
			contenido += '      </td>';
			contenido += '      <td>';
			contenido += '        <input class="correo_contacto validar" type="text" data-prompt-position="bottomLeft" placeholder="Correo" size="30" disabled>';
			contenido += '      </td>';
			contenido += '    </tr>';
			contenido += '    <tr height="3">';
			contenido += '      <td colspan="5"></td>';      
			contenido += '    </tr>';
		
		}
		
		contenido += '  </table>';
		contenido += '</center>';
   
	//Ventana de confirmación
	$('#dialogo').dialog({
			   title: 'Contactos Sucursal',
			   resizable: false,
			   height:300,
			   width: 900,
			   modal: true,
			   buttons: {
						 "Agregar contactos": function() {
							
							 //Llamamos a la función         
							 $.fn.asociar_contactos(id_sucursal);
							 
						 },
						 "Cancelar": function(){
							 
							 //Llamamos a la función         
							 $.fn.pestanas_informativas(id_sucursal);
							 
						 }
			   },
			   show: {
				 effect: "explode",
				 duration: 500
			   },
			   hide: {
				 effect: "explode",
				 duration: 500
			   },
			   open: function(){
				  
				  //Mensaje del dialogo
				  $(this).append(contenido);
				  
				  // Asigno el mètodo autonumeric
				  $('.cedula_contacto').autoNumeric({aSep:'', aDec: ' ', mDec:0, vMax: 99999999});
				  $('.tlf1_contacto, .tlf2_contacto').autoNumeric({aSep:'', aDec: ' ', mDec:0, vMax: 9999999999, lZero: 'keep'});
				  
				  $.fn.eventos();
				  
			   },
			   close: function(){
			 
				  $(this).dialog("destroy");
				 
			   },
			   beforeClose: function(){
		  
				  $(this).html('');
		  
			   } 
	});
	
	//Le asignamos un indice superior al del colorbox para hacerlo visible
	$('.ui-front').css('z-index','9000');
	
};//Fin de la función
/*******************/

/**************************************************/
/* Funciòn que asocia los contactos a la sucursal */
/**************************************************/
$.fn.asociar_contactos = function(id_sucursal){
	
	var validador = $.fn.validar_contactos_sucursal();
	
	//Evaluo el validador
	if(validador == true){
		
		//Array de datos
		var contactos = new Array();
		var i         = 0;
		
		//Recorremos los contactos
		$('.cedula_contacto').each(function(index, element) {
            
			//Evaluo si posee valor
			if($(this).val() != '' && $(this).val() != null){
				
				//Obtengo valores
				var cedula = $(this).val();
				var nombre = $(this).parents('tr').find('.nombre_contacto').val();
				var tlf    = $(this).parents('tr').find('.tlf1_contacto').val();
				var tlf2   = $(this).parents('tr').find('.tlf2_contacto').val();
				var correo = $(this).parents('tr').find('.correo_contacto').val();
				
				contactos[i] = [cedula,nombre,tlf,tlf2,correo];
				
				i++;
				
			}//Fin del if
			
        });//Fin del each
		
		//Evaluo el nº de registros
		if(i > 0){
			
		   //Ajax
		   $.ajax({
					
				url: 'c_mapa/asociar_contactos',
				type: 'POST',
				dataType: 'json',
				data: {
						contactos:contactos,
						id_sucursal:id_sucursal
					  },
				beforeSend: function(objeto){
					
					//Msj de carga
					$('.background_progressbar').show();
						
				},
				error: function(objeto, quepaso, otroobj){
					
					//Ocultamos el mensaje de carga
					$('.background_progressbar').hide();
					
					//Muestro el mensaje
					$('.ui-dialog-buttonset button').eq(0).attr('data-prompt-position','topLeft');
					$('.ui-dialog-buttonset button').eq(0).validationEngine('showPrompt', 'Ocurrio un error.', 'topLeft','',true);
					
				},
				//timeout: 10000,
				success: function(data){
					
					//Ocultamos el mensaje de carga
					$('.background_progressbar').hide();
				
					// Evaluo la respuesta
					if(data['RESPUESTA']['CODIGO'] == '1'){
						
						// Cierro el dialogo
						$('#dialogo').dialog("close");
						
						var msj       = data['RESPUESTA']['MSJ']+'<p>&iquest;Desea agregar las pesta&ntilde;as informativas a esta sucursal?</p>';
						var tipo      = 2;
						var ttl       = 'Contactos asociados';
						var fn_si     = '$.fn.pestanas_informativas('+id_sucursal+')';
						var txt_fn_si = 'Agregar';
						var fn_no     = '';
						var txt_fn_no = 'Despu\u00e9s';
						var ancho     = 380;
						var alto      = 200;
					
					//Llamamos a la función que genera el dilogo
					$.fn.dialogo(tipo,msj,ttl,fn_si,txt_fn_si,fn_no,txt_fn_no,ancho,alto);
						
					}else{
						
						//Muestro el mensaje
						$('.ui-dialog-buttonset button').eq(0).attr('data-prompt-position','topLeft');
						$('.ui-dialog-buttonset button').eq(0).validationEngine('showPrompt', data['RESPUESTA']['MSJ'], 'topLeft','',true);
						
					}//FIn del if
					
					$.fn.eventos();
				   
				}//Fin del success
					
		   });//Fin del ajax
			
		}else{
			
			//Muestro el mensaje
			$('.ui-dialog-buttonset button').eq(0).attr('data-prompt-position','topLeft');
			$('.ui-dialog-buttonset button').eq(0).validationEngine('showPrompt', 'Debe de especificar al menos un contacto.', 'topLeft','',true);
			
		}//Fin del if
		
	}else{
		
		$.fn.eventos();
		
	}//Fin del if
	
};//Fin de la función
/*******************/

/*****************************************************************************/
/* función que valida el formulario para asociar los contactos a la sucursal */
/*****************************************************************************/
$.fn.validar_contactos_sucursal = function(){
	
	validador = true;
	
	$('#tabla_contacto_sucursal .validar').each(function(){
	
		//Validamos el campo actual
		var validar = $(this).validationEngine('validate');
		
		//Evaluamos
		if(validar == true){
			
			validador = false;
			
			return validador;
			
		}//Fin del if
		
	})//Fin del each
	
	return validador;
	
};//Fin de la función
/*******************/

/**************************************************************************/
/* Función que muestra las pestañas informativas las cuales puede agregar */
/**************************************************************************/
$.fn.pestanas_informativas = function(id_sucursal){
	
	//Cerramos el dialogo
	$('#dialogo').dialog('close');
	
	//Ajax
    $.ajax({
			
		url: 'c_mapa/secciones_disponibles',
		type: 'POST',
		dataType: 'json',
		data: {
				id_sucursal:id_sucursal
			  },
		beforeSend: function(objeto){
			
			//Msj de carga
			$('.background_progressbar').show();
				
		},
		error: function(objeto, quepaso, otroobj){
			
			//Ocultamos el mensaje de carga
			$('.background_progressbar').hide();
			
			//Evaluo el error
			if(quepaso == 'timeout'){
				
				var msj   = 'Timeout!';
				
			}else{
				
				var msj   = 'Ocurrio un error al mostrar las pesta&ntilde;as informativas.';
				
			}//Fin del if
			
			var tipo      = 2;
			var ttl       = 'Error';
			var fn_si     = '';
			var txt_fn_si = '';
			var fn_no     = '';
			var txt_fn_no = '';
			var ancho     = 380;
			var alto      = 200;
			
			//Llamamos a la función que genera el dilogo
			$.fn.dialogo(tipo,msj,ttl,fn_si,txt_fn_si,fn_no,txt_fn_no,ancho,alto);
			
		},
		//timeout: 10000,
		success: function(data){
			
			//Ocultamos el mensaje de carga
			$('.background_progressbar').hide();
		    
			//Obtengo el nº de registros
			var numReg = data['SECCIONES'].length;
		
			var contenido  = '<center>';
				contenido += ' <select id="secciones" multiple>';
				
			for(var i = 0; i <numReg; i++){
			
				contenido += ' <option value="'+data['SECCIONES'][i]['id_seccion']+'">'+data['SECCIONES'][i]['nombre_seccion']+'</option>';
			
			}//Fin del for
			
			contenido += ' </select>';
			contenido += '</center>';
		   
			//Ventana de confirmación
			$('#dialogo').dialog({
					   title: 'Pesta\u00f1as informativas',
					   resizable: false,
					   height:120,
					   width: 350,
					   modal: true,
					   buttons: {
								 "Agregar pesta\u00f1as": function() {
									
									//Llamamos a la función         
									$.fn.asociar_pestanas(id_sucursal);
									
								 },
								 "Cancelar": function(){
									 
									 $(this).dialog("close");
									 
								 }
					   },
					   show: {
						 effect: "explode",
						 duration: 500
					   },
					   hide: {
						 effect: "explode",
						 duration: 500
					   },
					   open: function(){
						  
						  //Mensaje del dialogo
						  $(this).append(contenido);
						  
						  //Método multiselect
						  $('#secciones').each(function(index, elemento){
								
								$(this).multiselect({
							   
									minWidth: 300,
									multiple: true,
									noneSelectedText: 'PESTA\u00d1AS',
									height: 100,
									header:  'PESTA\u00d1AS',
									checkAllText: 'Seleccionar todos',
									uncheckAllText: 'Deseleccionar todos',
									selectedText: '# PESTA\u00d1AS'
									
								});
								
						  });//Fin del each
						  
						  $.fn.eventos();
						  
					   },
					   close: function(){
					 
						  $(this).dialog("destroy");
						 
					   },
					   beforeClose: function(){
				  
						  $(this).html('');
				  
					   } 
			});
			
			//Le asignamos un indice superior al del colorbox para hacerlo visible
			$('.ui-front').css('z-index','9000');
		   
		}//Fin del success
			
   });//Fin del ajax
	
};//Fin de la función
/*******************/

/*************************************************************/
/* Función que asocia las pestañas informativas ala sucursal */
/*************************************************************/
$.fn.asociar_pestanas = function(id_sucursal){
	
	//Obtengo los seleccionados
	var i             = 0;
	var seleccionados = $('#secciones').multiselect("getChecked").map(function(){
			                   i++    
		 				}).get();
	
	//Evaluo los seleccionados
	if(i > 0){
		
		//Ajax
		$.ajax({
				
			url: 'c_mapa/asociar_secciones',
			type: 'POST',
			dataType: 'json',
			data: {
					id_sucursal:id_sucursal,
					id_secciones:$('#secciones').val()
				  },
			beforeSend: function(objeto){
				
				//Msj de carga
				$('.background_progressbar').show();
					
			},
			error: function(objeto, quepaso, otroobj){
				
				//Ocultamos el mensaje de carga
				$('.background_progressbar').hide();
				
				//Muestro el mensaje
				$('.ui-dialog-buttonset button').eq(0).attr('data-prompt-position','topLeft');
				$('.ui-dialog-buttonset button').eq(0).validationEngine('showPrompt', 'Ocurrio un error.', 'topLeft','',true);
				
			},
			//timeout: 10000,
			success: function(data){
				
				//Ocultamos el mensaje de carga
				$('.background_progressbar').hide();
				
				// Evaluo la respuesta
				if(data['RESPUESTA']['CODIGO'] == '1'){
					
					// Cierro el dialogo
					$('#dialogo').dialog("close");
					
					var msj       = data['RESPUESTA']['MSJ']+'';
					var tipo      = 1;
					var ttl       = 'Pesta\u00f1as asociadas';
					var fn_si     = '';
					var txt_fn_si = '';
					var fn_no     = '';
					var txt_fn_no = '';
					var ancho     = 380;
					var alto      = 150;
				
				//Llamamos a la función que genera el dilogo
				$.fn.dialogo(tipo,msj,ttl,fn_si,txt_fn_si,fn_no,txt_fn_no,ancho,alto);
					
				}else{
					
					//Muestro el mensaje
					$('.ui-dialog-buttonset button').eq(0).attr('data-prompt-position','topLeft');
					$('.ui-dialog-buttonset button').eq(0).validationEngine('showPrompt', data['RESPUESTA']['MSJ'], 'topLeft','',true);
					
				}//FIn del if
				
				$.fn.eventos();
			   
			}//Fin del success
				
	   });//Fin del ajax
		
	}else{
		
		//Muestro el mensaje
		$('.ui-dialog-buttonset button').eq(0).attr('data-prompt-position','topLeft');
		$('.ui-dialog-buttonset button').eq(0).validationEngine('showPrompt', 'Debe de especificar al menos uno.', 'topLeft','',true);
		
		$.fn.eventos();
		
	}//Fin del if
	
};//Fin de la función
/*******************/

/*****************************************************************/
/* Funcion de dialogo para mostrar los mensajes de exito o error */
/*****************************************************************/
$.fn.dialogo = function(tipo,mensaje,titulo,fn_si,txt_fn_si,fn_no,txt_fn_no,ancho,alto){
	
	//Evaluamos los texto
	txt_fn_si = (txt_fn_si == '' || txt_fn_si == null) ? 'Ok' : txt_fn_si;
	txt_fn_no = (txt_fn_no == '' || txt_fn_no == null) ? 'Cerrar' : txt_fn_no;
	
	if(tipo == 1){//Dialogo
		
		if(titulo == ''){ 
	   
	      titulo = 'Informaci\u00f3n';	
	   
	    }
		
		//Ventana de dialogo
		$('#dialogo').dialog({
					 modal: true,
					 resizable: false,
					 title: titulo,
					 height:alto,
				     width: ancho,
					 buttons: [{
								  text: txt_fn_si,
								  "id": "btnOk",
								  click: function () {
									
									  $(this).dialog("close");
								
									  eval(fn_si);
									
									  $.fn.eventos();
									
								  }
							   }],
					 show: {
						 effect: "explode",
						 duration: 500
					 },
					 hide: {
						 effect: "explode",
						 duration: 500
					 },
					 open: function(){
						  
						  //Mensaje del dialogo
						  $(this).append(mensaje);
						  
					 },
					 close: function(){
					     
						 $(this).dialog("destroy");
						 	 
				     },
					 beforeClose: function(){
					  
					     $(this).html('');
					  
					 } 
		});
        
		//Le asignamos un indice superior al del colorbox para hacerlo visible
		$('.ui-front').css('z-index','10000');
		
	}else if(tipo == 2){
		
		if(titulo == ''){
	   
	      titulo = 'Confirmar';	
	   
	    }
		
		//Ventana de confirmación
	    $('#dialogo').dialog({
						   title: titulo,
						   resizable: false,
						   height:alto,
						   width: ancho,
						   modal: true,
						   buttons: [{
										text: txt_fn_si,
										"id": "btnOk",
										click: function () {
											
											  $(this).dialog("close");
										
											  eval(fn_si);
											
											  $.fn.eventos();
											
										}
								
									}, {
										text: txt_fn_no,
										click: function () {
											
											eval(fn_no);
										 
									        $(this).dialog("close");
											
										},
									}],
						   show: {
							 effect: "explode",
							 duration: 500
						   },
						   hide: {
							 effect: "explode",
							 duration: 500
						   },
						   open: function(){
							  
							  //Mensaje del dialogo
							  $(this).append(mensaje);
							  
						   },
					 	   close: function(){

					     
						      $(this).dialog("destroy");
						 	 
				           },
					       beforeClose: function(){
					  
					  		  $(this).html('');
					  
					       } 
	    });
		
		//Le asignamos un indice superior al del colorbox para hacerlo visible
		$('.ui-front').css('z-index','10000');
		
	}//Fin del if
   	
}//Fin de la función dialogo
/**************************/

/***********************************/
/* Función que asigna los tooltips */
/***********************************/
$.fn.toolTips = function(elemento){
    
	 //Agregamos tooltips
     $(elemento).tooltip({
		  show: null,
		  position: {
			my: "center bottom-20",
			at: "center top",
			using: function( position, feedback ) {
			  $( this ).css( position );
			  $( "<div>" )
				.addClass( "arrow" )
				.addClass( feedback.vertical )
				.addClass( feedback.horizontal )
				.appendTo( this );
			}
		  },
		  open: function( event, ui ) {
			ui.tooltip.animate({ top: ui.tooltip.position().top + 5 }, "fast" );
		  }
     });
		
}/*Fin de la función*/
/********************/

/*************************************************/
/* Función que verifica si la data viene en null */
/*************************************************/
$.fn.campo_vacio = function(data)
{
	
	//Evaluo
	if(data == null || data == 'null')
	{
		
		data = '';
		
	}//Fin dle if
	
	return data;
	
}//Fin de la función
/******************/