<?php
/*
	NOMBRE				: M_aplicaciones.php
	PARÁMETROS			: (none)
	DESCRIPCIÓN			: Controlodor para las aplicaciones de la intranet
	AUTOR				: Maylin Sojo
	FECHA DE CREACIÓN 	: 25/05/2016
*/

/*
	Descripción: Clase principal. 
*/
class m_aplicaciones extends CI_Model
{
    
	/*
		Descripción: Constructor de la clase
	*/
	public function __construct(){
		
		parent::__construct();
		
		//Cargamos el helper de la cookie
		$this->load->helper('cookie');
		
		//Url del dATA Services Server
		$this->url_dss_rest = "http://".$_SERVER['SERVER_NAME']."/eventos/aplicaciones/index.php/webservices/dataservices/intranet/c_wds_aplicaciones/";
		
		//Url del Rule Services Server
		$this->url_rss_rest = "http://".$_SERVER['SERVER_NAME']."/eventos/aplicaciones/index.php/webservices/ruleservices/intranet/c_wrs_aplicaciones/";
		
		
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
		Obtenemos la ip del usuario que se loguea
	*/
	public function obtener_ip_usuario(){
		
		if(isset($_SERVER["HTTP_CLIENT_IP"]))
		{
			return $_SERVER["HTTP_CLIENT_IP"];
		}
		elseif(isset($_SERVER["HTTP_X_FORWARDED_FOR"]))
		{
			return $_SERVER["HTTP_X_FORWARDED_FOR"];
		}
		elseif(isset($_SERVER["HTTP_X_FORWARDED"]))
		{
			return $_SERVER["HTTP_X_FORWARDED"];
		}
		elseif(isset($_SERVER["HTTP_FORWARDED_FOR"]))
		{
			return $_SERVER["HTTP_FORWARDED_FOR"];
		}
		elseif(isset($_SERVER["HTTP_FORWARDED"]))
		{
			return $_SERVER["HTTP_FORWARDED"];
		}
		else
		{
			return $_SERVER["REMOTE_ADDR"];
		}

	}//Fin del método obtener_ip_usuario
	/**********************************/
	

    /*
		Descripción           : Método que obtiene los sistemas asociados al usuario.
	  	Parametros de entrada : El id del usuario.
	  	Retorna               : los sistemas.
	*/	
	public function sistemas_asociados($datos){   
	
		$ip_usuario = array('IP_USUARIO' => $this->obtener_ip_usuario());
		$interna    = $this->servicio_rest($this->url_rss_rest, $ip_usuario, 'POST', 'ip_usuario_interna', NULL);

		$data  = array('ID_USUARIO' => get_cookie('ID_USUARIO'), 'IP_INTERNA' => $interna);
		
		//Obtenemos el array que nos indica si la cuenta es válida o no
		$datos = $this->servicio_rest($this->url_dss_rest, $data, 'POST', 'sistemas_asociados', NULL);
		
		return $datos;			
		
	}//Fin del método sistemas_asociados
	/**********************************/
	
    /*
		Descripción           : Método que muestra el sistema seleccionado por el usuario.
		Parametros de entrada : El id del sistema path.
		Retorna               : Un array con la data del sistema seleccionado.
	*/	
	public function abrir_sistemas($id_sistema){   
            
                $ip_usuario = array('IP_USUARIO' => $this->obtener_ip_usuario());
                
		$interna    = $this->servicio_rest($this->url_rss_rest, $ip_usuario, 'POST', 'ip_usuario_interna', NULL);

		$data = array('ID_SISTEMA' => $id_sistema, 'ID_USUARIO' => get_cookie('ID_USUARIO'), 'IP_INTERNA' => $interna['INTERNO']);
		
		//Obtenemos el array que nos indica si la cuenta es válida o no
		$datos = $this->servicio_rest($this->url_dss_rest, $data, 'POST', 'abrir_sistemas', NULL);
		
		return $datos;			

	}//Fin del método abrir_sistemas
	/******************************/
    
	/*
		Descripción           : Método que obtiene todos los usuarios activos.
      	Parametros de entrada : Ninguno.
      	Retorna               : Un array con el ID y el CÓDIGO del usuario.
		Autor                 : David Molina y Alexander Guilarte.
    */
	public function usuarios_activos(){
		
		//Obtenemos el array que nos indica si la cuenta es válida o no
		$datos = $this->servicio_rest($this->url_dss_rest, '', 'POST', 'usuarios_activos', NULL);
		
		return $datos;			
		
	}//Fin del método usuarios_activos
	/********************************/
        
	/*
		Descripción           : Método que obtiene todos los sistemas asociados.
		Parametros de entrada : Ninguno.
		Retorna               : Un array con los sistemas asociados al usuario.
		Autor                 : David Molina y Alexander Guilarte.
    */
	public function sistemasAsociados($id_usuario){
		
            $data = array('ID_USUARIO' => $id_usuario);
            
			$datos = $this->servicio_rest($this->url_dss_rest, $data, 'POST', 'sistemasAsociados', NULL);

			return $datos;
			
	}//Fin del método sistemasAsociados
	/*********************************/
   
	/*
		Descripción           : Método que obtiene todos los sistemas por asociar.
      	Parametros de entrada : El ID del usuario.
      	Retorna               : Un array con los sistemas por asociar.
		Autor                 : David Molina y Alexander Guilarte.
    */
	public function sistemas_por_asociar($id_usuario){
		
			$data = array('ID_USUARIO' => $id_usuario);
			
			$datos = $this->servicio_rest($this->url_dss_rest, $data, 'POST', 'sistemas_por_asociar', NULL);
			
			return $datos;		
		
	}//Fin del método sistemas por asociar
	/************************************/
        
    /*
		Descripción : Método que asocia los menus seleccionados a los usuarios
		Parametros  : Un array con los ids seleccionados
		Retorna     : Un array de datos con el código de respuesta
		Autor       : David Molina y Alexander Guilarte.
	*/	
    public function asociar_menu($datos){
		
		
		$datos = $this->servicio_rest($this->url_dss_rest, $datos, 'POST', 'asociar_menu', NULL);
		
		return $datos;		

     }//Fin del método asociar_menu
	 /****************************/
        
     /*
		Descripción : Método que desvincula el menú a los usuarios
		Parametros  : Un array con los ids seleccionados
		Retorna     : Un array de datos con el código de respuesta
		Autor       : David Molina y Alexander Guilarte.
	*/	
     public function desasociar_menu($datos){
		 
		$datos = $this->servicio_rest($this->url_dss_rest, $datos, 'POST', 'desasociar_menu', NULL);
		
		return $datos;	
		 
	 }//Fin del método desasociar_menu
	 /*******************************/
	 
	 /*
		Descripción: Método que muestra la leyenda asociada al sistema proximo a ser liberado
		Parametros : El id del sisstema
		Retorna    : Array con el la leyenda del sistema
	*/	
     public function leyenda_sistema($datos){
		
		$datos = $this->servicio_rest($this->url_dss_rest, $datos, 'POST', 'leyenda_sistema', NULL);
		
		return $datos;			
		
	 }//Fin del método leyenda_sistema
	 /*******************************/
        
}//Fin de la clase principal
/**************************/