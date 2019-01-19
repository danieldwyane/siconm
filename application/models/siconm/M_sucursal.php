
<?php

/*
  NOMBRE		: M_sucursal
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Modelo
  @author               :Kairus Gabriela Voz
  FECHA DE CREACIÓN 	:22/06/2018
 */

/*
  Descripción: Clase principal.
 */

class M_sucursal extends CI_Model {
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
      Descripción : Método que consulta los datos del datatables.
      Parametros  : Nada.
      Retorna     : Nada.
     */

    public function bandeja_sucursal($datos) {

        print_r($datos);
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'bandeja_sucursal', array("", "accept:application/json"));

        return array('data' => $resultado);
    }

    /*
      Descripción : Método que consulta los paises.
      Parametros  : Nada.
      Retorna     : Nada.
     */

    public function pais() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_corp'), null, 'GET', 'getListaPais', array("", "accept:application/json"));
     
        return $resultado;
    }
    
     /*
      Descripción : Método que consulta las empresas. 
      Parametros  : Nada.
      Retorna     : Nada.
     */
    
    public function empresas() {
      
       
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'bandeja_empresa', array("", "accept:application/json"));
     
        return $resultado;
    }
}
