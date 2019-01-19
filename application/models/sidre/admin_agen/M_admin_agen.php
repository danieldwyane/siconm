
<?php

/*
  NOMBRE		: M_
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Modelo
  @author               :
  FECHA DE CREACIÓN 	:
 */

/*
  Descripción: Clase principal.
 */

class M_admin_agen extends CI_Model {
    /*
      Descripción: Contructor de la clase principal.
     */

    public function __construct() {

        parent::__construct();

        //Cargamos la libreria PHPMailer
//        $this->load->library('PHPMail');
//        $this->load->helper('cookie');

        /* Cargar modelos de microservicios */
        $this->load->library('my_curl');
    }

    /*
      Descripción : Método que consulta los datos iniciales.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function estado() {
        
     
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'estado', array("", "accept:application/json"));
     
        return $resultado;
    }

    public function municipios($datos) {

       $resultado = array();
       $parametros['id_estado'] = $datos['estado'];
       
        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), $parametros, 'GET', 'municipio', array("", "accept:application/json"));

        return $resultado;
    }

    public function parroquias($datos) {
   

        $resultado = array();
        $parametros['id_municipio'] = $datos['municipio'];

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), $parametros, 'GET', 'parroquia', array("", "accept:application/json"));
           

        return $resultado;
    }

    public function registrar_agencia($datos) {
      
        $resultado = array();
        $parametros = array(
            "id_parroquia" => "" . $datos['parroquia'],
//            "id_banco" => "" . $_COOKIE['id_banco'],
            "agencia" => "" . $datos['agencia'],
            "codigo_agencia" => "" . $datos['codigo_agencia']
        );

        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'registrarAgencia', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );  

        return $resultado;
    } 

    
        public function agencias() {

       
        $resultado = array();
        
        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'agencias', array("", "accept:application/json"));

        return array('data' => $resultado);
    }
    

    
    public function desactivar_agencia($datos) {
        
        $resultado = array();
        $parametros = array(
            "id_agencia" => "" . $datos['id_agencia'],
          
        );

        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'desactivarAgencia', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );  

        return $resultado;
    }
    
     public function activar_agencia($datos) {
        
        $resultado = array();
        $parametros = array(
            "id_agencia" => "" . $datos['id_agencia'],
          
        );

        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'activarAgencia', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );  

        return $resultado;
    }
}
