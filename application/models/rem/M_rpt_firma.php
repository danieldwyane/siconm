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

class M_rpt_firma extends CI_Model {
    /*
      Descripción: Contructor de la clase principal.
     */

    public function __construct() {

        parent::__construct();

        /* Cargar modelos de microservicios */
        $this->load->library('my_curl');
    }

    /* INICIO DE EJEMPLOS DE SERVICIOS */

    public function listado_firma() {

//        $parametros = null;
        $parametros['id_sede'] = $_COOKIE['ID_SEDE'];
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_sede'), $parametros, 'GET', 'getEncuesta', array("", "accept:application/json"));

        return array('data' => $resultado);
    }
}
