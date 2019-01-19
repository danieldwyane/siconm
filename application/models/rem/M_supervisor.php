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

class M_supervisor extends CI_Model {
    /*
      Descripción: Contructor de la clase principal.
     */

    public function __construct() {

        parent::__construct();

        /* Cargar modelos de microservicios */
        $this->load->library('my_curl');
    }

    public function control_carga() {

//        $parametros = null;
        $parametros['id_sede'] = $_COOKIE['ID_SEDE'];
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_sede'), $parametros, 'GET', 'getControlCarga', array("", "accept:application/json"));

        return array('data' => $resultado);
    }

    public function existe_operativo() {

//        $parametros = null;
        $parametros['id_sede'] = $_COOKIE['ID_SEDE'];
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_sede'), $parametros, 'GET', 'existeOperativoActivo', array("", "accept:application/json"));

        return $resultado;
    }

    public function iniciar_operativo() {

        $parametros = null;
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_sede'), $parametros, 'GET', 'iniciarOperativo', array("", "accept:application/json"));

        return $resultado;
    }

    private function obtener_sede() {

        $parametros['id_usuario'] = $_COOKIE['ID_USUARIO'];
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_sede'), $parametros, 'GET', 'getIdSede', array("", "accept:application/json"));

        return $resultado;
    }

    public function subir_archivo($archivo) {

        //Directorio base
        $directorio_base = './application/files/';

        //Evaluamos si el directorio existe
        if (!is_dir($directorio_base)) {

            // mkdir($directorio_base, 0777);
            chmod($directorio_base, 0777);
        }//Fin del if
        //Evaluamos si se copio el archivo
        if (copy($archivo['carga_masiva']['tmp_name'], $directorio_base . $archivo['carga_masiva']['name'])) {

            $archivo = $archivo['carga_masiva']['name'];
        }

        return $archivo;
    }

    public function carga_masiva($datos) {

        //Obtenemos el nombre del archivo
        $directorio_base = "/opt/mule-standalone-3.9.0/files/" . $datos['nombre_archivo'];

        //Obtenemos el id de la sede
        $id_sede = $this->obtener_sede();

        $resultado = array();
        $parametros = array(
            "nomarch" => "" . $directorio_base,
            "id_sede" => "" . $id_sede[0]['id_sede'],
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

    public function total_encuesta() {

//        $parametros = null;
        $parametros['id_sede'] = $_COOKIE['ID_SEDE'];
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_sede'), $parametros, 'GET', 'getTotalEncuesta', array("", "accept:application/json"));

        return $resultado;
    }

    public function total_operador() {

//        $parametros = null;
        $parametros['id_sede'] = $_COOKIE['ID_SEDE'];
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_sede'), $parametros, 'GET', 'getTotalOperador', array("", "accept:application/json"));

        return $resultado;
    }

}

//fin del M_login