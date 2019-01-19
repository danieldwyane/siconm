<?php

/*
  NOMBRE		: M_rpt_graficos
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Modelo
  @author               : Alexander Guilarte
  FECHA DE CREACIÓN 	: 14-04-2018
 */

/*
  Descripción: Clase principal.
 */

class M_rpt_graficos extends CI_Model {
    /*
      Descripción: Contructor de la clase principal.
     */

    public function __construct() {

        parent::__construct();

        /* Cargar modelos de microservicios */
        $this->load->library('my_curl');
    }

    /*
      Descripción : Método que obtiene las personas atendidas.
      Parametros  : fecha.
      Retorna     : Nada.
     */

    public function total_personas_atendidas() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'total_personas_atendidas', array("", "accept:application/json"));

        return $resultado;
    }

    /*
      Descripción : Método que obtiene el total del avance de la difusion.
      Parametros  : fecha.
      Retorna     : Nada.
     */

    public function total_avance_difusion() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'total_avance_difusion', array("", "accept:application/json"));

        return $resultado;
    }

    /*
      Descripción : Método que obtiene los datos para el reporte de las actividades.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function nombre_actividades() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'nombre_actividades', array("", "accept:application/json"));

        return $resultado;
    }

    public function consultar_planif_actividades() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'consultar_planif_actividades', array("", "accept:application/json"));

        return $resultado;
    }

    public function cantidad_personas_actividades() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'cantidad_personas_actividades', array("", "accept:application/json"));

        return $resultado;
    }

    /*
      Descripción : Método que obtiene los datos para el reporte de los grupos.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function consultar_planif_grupos() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'consultar_planif_grupos', array("", "accept:application/json"));

        return $resultado;
    }

    public function cantidad_personas_grupos() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'cantidad_personas_grupos', array("", "accept:application/json"));

        return $resultado;
    }

    /*
      Descripción : Método que obtiene los datos para el reporte de las actividades.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function consultar_planif_zonas() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'consultar_planif_zonas', array("", "accept:application/json"));

        return $resultado;
    }

    public function cantidad_personas_zonas() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'cantidad_personas_zonas', array("", "accept:application/json"));

        return $resultado;
    }

    /*
      Descripción : Método que obtiene los datos para el reporte de las actividades.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function consultar_planif_estados() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'consultar_planif_estados', array("", "accept:application/json"));

        return $resultado;
    }

    public function cantidad_personas_estados() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'cantidad_personas_estados', array("", "accept:application/json"));

        return $resultado;
    }

}//fin del M_rpt_graficos



