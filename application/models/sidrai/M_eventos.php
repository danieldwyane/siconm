<?php

/*
  NOMBRE		: M_eventos
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Modelo
  @author               : Alexander Guilarte & Kairus Voz
  FECHA DE CREACIÓN 	: 14-04-2018
 */

/*
  Descripción: Clase principal.
 */

class M_eventos extends CI_Model {
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

    public function programar_evento($datos) {

        //Obtenemos el id facilitador con una funcion privada
        $id_facilitador = $this->obtener_facilitador($datos['facilitador']);

        $resultado = array();
        $parametros = array(
            "id_pob_objetivo" => "" . $datos['poblacion_objetivo'],
            "cod_estado" => "" . $datos['estado'],
            "cod_municipio" => "" . $datos['municipio'],
            "cod_parroquia" => "" . $datos['parroquia'],
            "id_tipo_actividad" => "" . $datos['tipo_actividad'],
            "nombre_actividad" => "" . $datos['nombre_actividad'],
            "fecha" => "" . $datos['fecha'],
            "hora_inicio" => "" . $datos['hora_inicio'],
            "hora_fin" => "" . $datos['hora_fin'],
            "ciudad" => "" . $datos['ciudad'],
            "lugar" => "" . $datos['lugar'],
            "institucion_atendida" => "" . $datos['institucion_atendida'],
            "id_usuario" => "" . $_COOKIE['ID_USUARIO'],
            "id_facilitador" => "" . $id_facilitador[0]['id_facilitador']
        );

        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'ins_programar_eventos', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );

        return $resultado;
    }

    /*
      Descripción : Método que consulta los datos iniciales.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function registrar_evento($datos) {

        //Obtenemos el id facilitador con una funcion privada
        $id_facilitador = $this->obtener_facilitador($_COOKIE['ID_USUARIO']);

        $resultado = array();
        $parametros = array(
            "id_pob_objetivo" => "" . $datos['poblacion_objetivo'],
            "cod_estado" => "" . $datos['estado'],
            "cod_municipio" => "" . $datos['municipio'],
            "cod_parroquia" => "" . $datos['parroquia'],
            "id_tipo_actividad" => "" . $datos['tipo_actividad'],
            "nombre_actividad" => "" . $datos['nombre_actividad'],
            "fecha" => "" . $datos['fecha'],
            "hora_inicio" => "" . $datos['hora_inicio'],
            "hora_fin" => "" . $datos['hora_fin'],
            "lugar" => "" . $datos['lugar'],
            "ciudad" => "" . $datos['ciudad'],
            "institucion_atendida" => "" . $datos['institucion_atendida'],
            "cant_f" => "" . $datos['cant_f'],
            "cant_m" => "" . $datos['cant_m'],
            "preguntas" => "" . $datos['preguntas'],
            "observaciones" => "" . $datos['observaciones'],
            "id_usuario" => "" . $_COOKIE['ID_USUARIO'],
            "id_facilitador" => "" . $id_facilitador[0]['id_facilitador'],
        );

        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'registrar_evento_dir', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );

        return $resultado;
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

    /*
      Descripción : Método que consulta los datos iniciales.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function tipo_actividad() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'tipo_actividad', array("", "accept:application/json"));

        return $resultado;
    }

    /*
      Descripción : Método que consulta los datos iniciales.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function poblacion_objetivo() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'poblacion_objetivo', array("", "accept:application/json"));

        return $resultado;
    }

    /*
      Descripción : Método que consulta los datos iniciales.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function consultar_facilitadores() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'consultar_facilitadores', array("", "accept:application/json"));

        return $resultado;
    }

    /*
      Descripción : Método que consulta los datos iniciales.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function consultar_actividades_programadas() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'consultar_actividades_programadas', array("", "accept:application/json"));

        return array('data' => $resultado);
    }

    /*
      Descripción : Método que consulta los datos de plan de difusion.
      Parametros  :
      Retorna     : Nada.
     */

    private function obtener_facilitador($id_usuario) {

        $resultado = array();
        $parametros['id_usuario'] = $id_usuario;

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), $parametros, 'GET', 'obtener_facilitador', array("", "accept:application/json"));

        return $resultado;
    }

}

//fin del M_eventos

