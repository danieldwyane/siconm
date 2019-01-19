<?php
/*
	NOMBRE				: M_calendario.php
	PARÁMETROS			: (none)
	DESCRIPCIÓN			: Modelo para el módulo de la intranet Calendario
	AUTOR				: David Molina
	FECHA DE CREACIÓN 	: 06/09/2016
*/

/*
	Descripción: Clase principal. 
*/
class m_calendario extends CI_Model
{
    
	/*
		Descripción: Constructor de la clase
	*/
	public function __construct(){
		
		parent::__construct();
		
        //Url del Data Services Server
        $this->url_dss_rest = "http://".$_SERVER['SERVER_NAME']."/webservices/dataservices/intranet/c_wds_intranet/";
		
		//Url del Data Services Server SIGEFIRRHH
		$this->dss_sigefirrhh = "http://".$_SERVER['SERVER_NAME']."/webservices/dataservices/sigefirrhh/c_wds_sigefirrhh/";
		
	}//Fin del constructor de la clase
	/*------------------------------*/
	
	/*
		Descripción: Método que invoca un servicio web
		Parametros : Url del servicios web y los parametros
		Retorna    : Un array de datos. 
	*/
	private function servicio_rest($url, $parametros = NULL, $metodo_curl, $funcion, $puerto = 80)
	{
		
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
    	Descripción           : Método que obtiene los eventos de cumpleaños.
        Parametros de entrada : Ninguno.
        Retorna               : UN array con las fechas de cumpleaños.
    */		
	public function fechas_cumpleanos(){
            
		//Obtengo la cédula del empleado
		$cedula               = $this->cedula_empleado();
		$parametros['cedula'] = $cedula['CEDULA'];
                
                
		//Obtenemos el array con las fechas de cumpleaños
		$datos = $this->servicio_rest($this->dss_sigefirrhh, $parametros, 'POST', 'cumpleanos', NULL);
		
		return $datos;
		
	}//Fin del método validar_cuenta
	/******************************/
        
         /*
      Descripción: Método que obtiene la cedula del usuario logueado
      Parametros : Ninguno
      Retorna    : Un array con la cedula del usuario.
        */
        private function cedula_empleado(){
        
                //Captura el id del usuario a traves de la cookie
                $id_usuario               = array($_COOKIE['ID_USUARIO']);
                $parametros['id_usuario'] = $id_usuario[0];
                
                //Obtenemos el array de datos de los tipos de establecimientos
                $resultado = $this->servicio_rest($this->url_dss_rest, $parametros, 'GET', 'cedula_empleado', NULL);
                return $resultado;
		
        }//Fin del método cedula_empleado
	/******************************/
	
}//Fin de la clase principal
/**************************/