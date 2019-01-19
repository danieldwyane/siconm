<?php

/*
  NOMBRE		: M_rpt_eventos
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Modelo
  @author               : Kairus Voz
  FECHA DE CREACIÓN 	: 14-04-2018
 */

/*
  Descripción: Clase principal.
 */

class M_rpt_eventos extends CI_Model {
    /*
      Descripción: Contructor de la clase principal.
     */

    public function __construct() {

        parent::__construct();

        /* Cargar modelos de microservicios */
        $this->load->library('my_curl');
    }

    /*
      Descripción : Método que consulta los datos iniciales.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function consultar_actividades() {

        //Obtenemos el id facilitador con una funcion privada
        $id_facilitador = $this->obtener_facilitador();

        $resultado = array();
        $parametros['id_facilitador'] = $id_facilitador[0]['id_facilitador'];

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), $parametros, 'GET', 'consultar_actividades', array("", "accept:application/json"));

        return array('data' => $resultado);
    }

    /*
      Descripción : Método que consulta los datos iniciales.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function actualizar_plan_difusion($datos) {

        $resultado = array();
        $parametros = array(
            "id_plan" => "" . $datos['id_plan'],
            "hora_inicio_real" => "" . $datos['hora_inicio'],
            "hora_fin_real" => "" . $datos['hora_fin'],
            "cant_f" => "" . $datos['cant_f'],
            "cant_m" => "" . $datos['cant_m'],
            "preguntas" => "" . $datos['preguntas'],
            "observaciones" => "" . $datos['observaciones'],
            "estatus" => "" . $datos['id_estatus']
        );

        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'actualizar_plan_difusion', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );

        return $resultado;
    }

    /*
      Descripción : Método que consulta los datos de plan de difusion.
      Parametros  :
      Retorna     : Nada.
     */

    public function detalle_plan_difusion($datos) {

        $resultado = array();
        $parametros['id_plan'] = $datos['id_plan'];

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), $parametros, 'GET', 'detalle_plan_difusion', array("", "accept:application/json"));

        return $resultado;
    }

    /*
      Descripción : Método que consulta los datos de plan de difusion.
      Parametros  :
      Retorna     : Nada.
     */

    private function obtener_facilitador() {
        
        $resultado = array();
        $parametros['id_usuario'] = $_COOKIE['ID_USUARIO'];

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), $parametros, 'GET', 'obtener_facilitador', array("", "accept:application/json"));

        return $resultado;
    }

    
     /*
      Descripción : Método que consulta los datos de plan de difusion.
      Parametros  :
      Retorna     : Nada.
     */

    public function consultar_estatus() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'consultar_estatus', array("", "accept:application/json"));

        return $resultado;
    }
    
    
    
    
    
    
    
    
}

//fin del M_rpt_eventos


