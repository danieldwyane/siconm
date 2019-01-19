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

class M_recepcion extends CI_Model {
    /*
      Descripción: Contructor de la clase principal.
     */

    public function __construct() {

        parent::__construct();

        /* Cargar modelos de microservicios */
        $this->load->library('my_curl');
    }

    public function datos_distribucion() {

        $resultado = array();
        //$parametros['id_sede'] = $_COOKIE['ID_SEDE'];

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'recepciones', array("", "accept:application/json"));

        //return $resultado;
        return array('data' => $resultado);
    }

     public function montos_recibidos() {

        $resultado = array();
        //$parametros['id_sede'] = $_COOKIE['ID_SEDE'];

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'recepciones', array("", "accept:application/json"));

        //return $resultado;
        return array('data' => $resultado);
    }
    
    
    
    
    public function registrar_recepcion($datos) {

        $resultado = array();
        $parametros = array(
            "nomarch" => "" . 123,
            "id_sede" => "" . 238,
            "id_usuario_carga" => "" . $_COOKIE['ID_USUARIO']
        );

        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api_sede'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'cargaMasiva', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );

        return $resultado;
    }


}

//fin del M_login
