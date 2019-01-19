<?php
/*
	NOMBRE				: M_notificaciones.php
	PARÁMETROS			: (none)
	DESCRIPCIÓN			:  
	AUTOR				: Maylin Sojo
	FECHA DE CREACIÓN 	: 02/11/2016
*/

/*
	Descripción: Clase principal. 
*/
class m_notificaciones extends CI_Model
{
    
	/*
		Descripción: Constructor de la clase
	*/
	public function __construct(){
		
		parent::__construct();
		
		//Cargamos el helper de la cookie
		$this->load->helper('cookie');
		$this->db = $this->load->database('intranet',TRUE);
		
		//Url del dATA Services Server
		$this->url_dss_ldap = "http://".$_SERVER['SERVER_NAME']."/webservices/dataservices/ldap/c_wds_ldap/";
				
		$this->url_dss_ctus = "http://".$_SERVER['SERVER_NAME']."/webservices/dataservices/intranet/c_wds_cuenta_usuario/";
		
		$this->dss_correo     = "http://".$_SERVER['SERVER_NAME']."/webservices/dataservices/correo/c_wds_correo/";
		
		//Url del Rule Services Server
		$this->url_rss_ctus = "http://".$_SERVER['SERVER_NAME']."/webservices/ruleservices/intranet/c_wrs_cuenta_usuario/";				
		
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
		Método para obtener las notificaciones activas o no del usuario 
	*/
	public function listarNotificacionesUsuario(){
	    
		$id_usuario = get_cookie('ID_USUARIO');
		
		$sql = "SELECT usno_id id,
                       usno_asunto asunto,
                       usno_notificacion notificacion,
                       TO_CHAR(usno_fecha, 'DD/MM/YYYY') AS fecha,
                       usno_estatus estatus,
                       usno_usus_id id_usuario
                FROM usno_notificaciones n 
                WHERE n.usno_estatus IN (1,2)
                AND n.usno_usus_id = '".$id_usuario."' 
                ORDER BY usno_fecha DESC";
		
		//Ejecutamos la consulta
		$recurso = $this->db->query($sql);	
	
		//Obtenemos el resultado
		$respuesta = $recurso->result_array();	
		
		//Evaluamos si arrojo resultados
		if($recurso->num_rows() > 0){
			
			return array('CODIGO_RESPUESTA' => 1, 'NOTIFICACIONES' => $respuesta);
			
		}else{
			
			return array('CODIGO_RESPUESTA' => 0, 'MENSAJE_RESPUESTA' => 'No posee notificaciones.');
			
		}//Fin del if

	}//Fin método log_acceso
	/**********************/
	
	public function actualizaEstatus(){
		
		//Parametros para actualizar el estatus de la notificacion
		$data = array(
					  //array('name'=>':p_id_notificacion' , 'value' => $_POST['id']),
					   array('name'=>':p_id_usuario' , 'value' => get_cookie('ID_USUARIO')),
					  array('name'=>':p_respuesta'   , 'value' => NULL)
					 );	
             
        $recurso   = $this->db->stored_procedure('uspkg_usuario', 'ussp_upd_notificacion', $data);
        $respuesta = json_decode($this->db->result_sp(1), true);

        return $respuesta;	
	
	}
	
	
        
}//Fin de la clase principal
/**************************/