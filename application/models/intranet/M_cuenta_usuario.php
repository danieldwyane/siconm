<?php
/*
	NOMBRE				: M_cuenta_usuario.php
	PARÁMETROS			: (none)
	DESCRIPCIÓN			:  
	AUTOR				: Maylin Sojo
	FECHA DE CREACIÓN 	: 05/09/2016
*/

/*
	Descripción: Clase principal. 
*/
class m_cuenta_usuario extends CI_Model
{
    
	/*
		Descripción: Constructor de la clase
	*/
	public function __construct(){
		
		parent::__construct();
		
		//Cargamos el helper de la cookie
		$this->load->helper('cookie');
		$this->db = $this->load->database('intranet',TRUE);
		
		//Url del Data Services Server
		$this->url_dss_ldap = "http://".$_SERVER['SERVER_NAME']."/eventos/aplicaciones/index.php/webservices/dataservices/ldap/c_wds_ldap/";				
		$this->url_dss_ctus = "http://".$_SERVER['SERVER_NAME']."/eventos/aplicaciones/index.php/webservices/dataservices/intranet/c_wds_cuenta_usuario/";		
		$this->dss_correo   = "http://".$_SERVER['SERVER_NAME']."/eventos/aplicaciones/index.php/webservices/dataservices/correo/c_wds_correo/";
		
		//Url del Rule Services Server
		$this->url_rss_ctus = "http://".$_SERVER['SERVER_NAME']."/eventos/aplicaciones/index.php/webservices/ruleservices/intranet/c_wrs_cuenta_usuario/";				
		$this->rss_ldap     = "http://".$_SERVER['SERVER_NAME']."/eventos/aplicaciones/index.php/webservices/ruleservices/ldap/c_wrs_ldap/";
                
                $this->load->model('webservices/dataservices/intranet/m_wds_cuenta_usuario');//Cargamos el modelo
		
	}//Fin del constructor de la clase
	/********************************/
	
	/*
		Descripción: Método que invoca un servicio web
		Parametros : Url del servicios web y los parametros
		Retorna    : Un array de datos. 
	*/
	private function servicio_rest($url, $parametros = NULL, $metodo_curl, $funcion, $puerto = 80){
		
		//Inicializamos el curl
		$recurso = curl_init();
		
		//Evaluamos el método de consumo
		if(strtoupper($metodo_curl) == 'POST'){
			
			$met = CURLOPT_POST;
			
			//Opciones del curl
			curl_setopt($recurso, CURLOPT_URL, $url.'/'.$funcion);
			curl_setopt($recurso, CURLOPT_POSTFIELDS, json_encode($parametros));
			
		}elseif(strtoupper($metodo_curl) == 'PUT'){
			
			$met = CURLOPT_PUT;
			
		}elseif(strtoupper($metodo_curl) == 'GET'){
			
			//Evaluamos si existen parametros
			if($parametros != NULL){
				
				$parametros = '?'.http_build_query($parametros);
				
			}//Fin del if
			
			$met = CURLOPT_CUSTOMREQUEST;
		    
			//Opciones del curl
			curl_setopt($recurso, CURLOPT_URL, $url.'/'.$funcion.$parametros);
			
		}elseif(strtoupper($metodo_curl) == 'DELETE'){
			
			$met = CURLOPT_CUSTOMREQUEST;
			
		}else{
			
			return "error con el metodo";
			
		}//Fin del if

		//Opciones del curl
		curl_setopt($recurso, CURLOPT_HEADER, false);
		curl_setopt($recurso, CURLOPT_HTTPHEADER, array("Content-Type:application/json","accept:application/json"));
		curl_setopt($recurso, CURLOPT_PORT, $puerto);
		curl_setopt($recurso, $met, true);
		curl_setopt($recurso, CURLOPT_RETURNTRANSFER, true);
        
		//Ejecutamos el curl
		$data = curl_exec($recurso);
		
		//Cerramos el recurso
		curl_close($recurso);
		
		//Retornamos la data 
		return json_decode($data,true);

	}//Fin del método servicio_rest
	/*****************************/	

	/*
		Método para obtener el historial de acceso de un usuario
	*/
	public function log_acceso($fecha){
	    
		$data = array('FECHA' => $fecha, 'ID_USUARIO' => $_COOKIE['ID_USUARIO']);
		
		$datos = $this->servicio_rest($this->url_dss_ctus, $data, 'POST', 'log_acceso', NULL);
		
		return $datos;			

	}//Fin método log_acceso
	/**********************/
	
	/*
		Metodo que obtiene los datos de aquien se le va a enviar el correo
	*/
	public function datos_destino_correo()
	{
		
		$parametros   = array('ID_USUARIO' => $_COOKIE['ID_USUARIO']);
		
		$datosU = $this->servicio_rest($this->url_dss_ctus, $parametros, 'POST', 'datos_usuario', NULL);
		
		return $datosU;
					
	}//Fin del método datos_usuario
	/******************************/
	
	/*
		Metodo que obtiene los detalles del mensaje a enviar "Cuerpo, emisor entre otros"
	*/	
	public function mensaje_correo($id_sistema, $num_mensaje)
	{

		$parametros = array('ID_SISTEMA' => $id_sistema, 'NUM_MENSAJE' => $num_mensaje);
		
		$datosC = $this->servicio_rest($this->dss_correo, $parametros, 'POST', 'mensaje_sistema', NULL);
		
		return $datosC;
		
	}//Fin del método mensaje_correo
	/******************************/

	/*
		Método para obtener la contraseña actual del usuario logueado
	*/	
	public function obtener_actual_contrasena($datos){
		
		//Eveluamos el tipo de usuario
		$cuenta_ldap = array('cuenta' => $_COOKIE['CODIGO_USUARIO']);
		
		//Obtenemos el array que nos indica si la cuenta es válida o no en el LDAP
		$respuesta = $this->servicio_rest($this->rss_ldap, $cuenta_ldap, 'POST', 'validar_cuenta', NULL);
		
		//Evaluo si no existe en el LDAP
		if(!$respuesta['CODIGO_RESPUESTA']){
		     
			$data = array('CONTRASENA_ACTUAL' => $datos['actual_contasena'], 'ID_USUARIO' => $_COOKIE['ID_USUARIO']);
		
		    $respuesta = $this->servicio_rest($this->url_dss_ctus, $data, 'POST', 'obtener_actual_contrasena', NULL);
		    
		}else{
			
			$parametros_ldap = array('cuenta' => $_COOKIE['CODIGO_USUARIO'], 'clave' => $datos['actual_contasena'], 'correo' => 'jose.buitrago@minpal.gob.ve');
			
			//Evaluamos la contraseña en el LDAP
			$respuesta = $this->servicio_rest($this->rss_ldap, $parametros_ldap, 'POST', 'validar_clave', NULL);
			
			//Evaluamos
		    if($respuesta['CODIGO_RESPUESTA']){
				
				$respuesta = TRUE;
				
			}else{
				
				$respuesta = FALSE;
				
			}//Fin del if
			
		}//Fin del if
		
		return $respuesta;			
		
	}//Fin del método obtener_actual_contrasena
	/******************************************/
	
	/*
		Descripción           : Método para guardar la nueva clave del usuario.
      	Parametros de entrada : Ninguno.
	*/
	public function cambiar_contrasena($nueva_clave)
	{
		
		$data = array('NUEVA_CLAVE' => $nueva_clave, 'CODIGO_USUARIO' => $_COOKIE['CODIGO_USUARIO'], 'ID_USUARIO' => $_COOKIE['ID_USUARIO']);
		
		//verificamos que la contraseña no sea de las últimas 5 utilizadas anteriormente
//		$respt = $this->servicio_rest($this->url_rss_ctus, $data, 'POST', 'validar_clave', NULL);
		
		//Evaluamos si puede usar la contraseña
//		if($respt['CODIGO']){
//			
//			$cuenta_ldap = array('cuenta' => $_COOKIE['CODIGO_USUARIO']);
//			
//			//Eveluamos si es una cuenta en el LDAP
//		    $respuesta = $this->servicio_rest($this->rss_ldap, $cuenta_ldap, 'POST', 'validar_cuenta', NULL);
//			
//			//Evaluo si no existe en el LDAP
//		    if($respuesta['CODIGO_RESPUESTA']){
//			
//				$datos = $this->servicio_rest($this->url_dss_ldap, $data, 'POST', 'cambiar_contrasena', NULL);
//           
//			    if(!$datos['CODIGO_RESPUESTA']){
//				
//					return array('CODIGO_RESPUESTA' => FALSE, 'MENSAJE_RESPUESTA' => 'Error al tratar de cambiar la contrase&ntilde;a');
//						
//				}//Fin del if
//				
//				$clave = $datos['HASH'];
//				
//			}else{
				
				$clave = md5(base64_decode($nueva_clave));

//			}//Fin del if
			
			//obtengo el Hash o contraseña del usuario y mando a 
			$datos = array('NUEVA_CLAVE' => $clave, 'ID_USUARIO' => $_COOKIE['ID_USUARIO']);
			
                        $respuesta = $this->m_wds_cuenta_usuario->cambiar_contrasena($datos);
//			$respuesta = $this->servicio_rest($this->url_dss_ctus, $datos, 'POST', 'cambiar_contrasena', NULL);

			//Evaluo la respuesta para enviar el correo de cambio de clave
//			if($respuesta['CODIGO_RESPUESTA'])
//			{
//				
//				$datosUsu  = $this->datos_destino_correo();	
//				$datosCorr = $this->mensaje_correo(1,1);
//				 
//				//Reemplazamos las palabras reservadas por los datos reales
//				$cuerpo = str_replace('#USUARIO', $datosUsu['NOMBRE'], $datosCorr['CUERPO']);
//				$cuerpo = str_replace('#FECHA', date('d/m/Y'), $cuerpo);
//				
//				$destinatarios = array(array('correo' => $datosUsu['CORREO'],'nombre' => $datosUsu['NOMBRE']));
//				
//				$this->envio_correo($destinatarios, $datosCorr['ASUNTO'], $datosCorr['EMISOR'], $cuerpo, $datosCorr['CORREO_EMISOR']);
//
//			}else{
//				
//				$respuesta = array('CODIGO_RESPUESTA' => FALSE, 'MENSAJE_RESPUESTA' => $respuesta['MENSAJE_RESPUESTA']);
//				
//			}//Fin del if
			
//		}else{
//			
//			$respuesta = array('CODIGO_RESPUESTA' => FALSE, 'MENSAJE_RESPUESTA' => $respt['MENSAJE']);
//			
//		}
		
		return $respuesta;				
		
	}//Fin del método cambiar_contrasena
	/**********************************/
	
	/*
		Función que realiza el envío de correo al momento de actualizar la contraseña
	*/
	function envio_correo($destinatarios, $asunto, $emisor, $cuerpo, $correoemisor)
	{
		
		//Parametros para el envio del correo
		$parametros = array('asunto' => $asunto,'cuerpo' => htmlentities($cuerpo, ENT_QUOTES),'destinatarios' => $destinatarios, 'con_copia' => NULL,'correo_emisor' => $correoemisor, 'nombre_emisor' => $emisor);
		
		//Enviamos un nuevo correo
		$enviar_correo = $this->servicio_rest($this->dss_correo, $parametros, 'POST', 'enviar_correo', NULL);
		
	}//Fin del método envio_correo
	/****************************/
        
}//Fin de la clase principal
/**************************/