
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

class M_empresa extends CI_Model {
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
      Descripción : Método que consulta los paises.
      Parametros  : Nada.
      Retorna     : Nada.
     */

    public function pais() {

        $resultado = array();

//        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'pais', array("", "accept:application/json"));
        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_corp'), null, 'GET', 'getListaPais', array("", "accept:application/json"));

        return $resultado;
    }

    /*
      Descripción : Método que consulta los estados.
      Parametros  : Nada.
      Retorna     : Nada.
     */

    public function estados() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_corp'), null, 'GET', 'getListaEstado', array("", "accept:application/json"));

        return $resultado;
    }

    /*
      Descripción : Método que consulta las ciudades.
      Parametros  : Id pais.
      Retorna     : Nada.
     */

    public function ciudades($datos) {

        $parametros['co_pais'] = $datos['id_pais'];
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_corp'), $parametros, 'GET', 'getListaCiudad', array("", "accept:application/json"));

        return $resultado;
    }

    /*
      Descripción : Método que consulta las ciudades.
      Parametros  : Id pais.
      Retorna     : Nada.
     */

    public function ciudades_venezuela($datos) {

        $parametros['co_pais'] = $datos['id_pais'];
        $parametros['co_estado'] = $datos['id_estado'];
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_corp'), $parametros, 'GET', 'getListaCiudadVzla', array("", "accept:application/json"));

        return $resultado;
    }

    public function registrar_empresa($datos) {

        if ($datos['estado']) {

            $estado = $datos['estado'];
        }

        if ($datos['estado1']) {

            $estado = $datos['estado1'];
        }

        $resultado = array();
        $parametros = array(
            "rif" => "" . $datos['rif'],
            "razon_social" => "" . $datos['razon_social'],
            "cod_pais" => "" . $datos['pais'],
            "estado" => "" . $estado,
            "direccion" => "" . $datos['direccion'],
            "tlf_1" => "" . $datos['tlf_1'],
            "tlf_2" => "" . $datos['tlf_2'],
            "pag_web" => "" . $datos['pag_web'],
            "correo_1" => "" . $datos['correo_1'],
            "correo_2" => "" . $datos['correo_2'],
            "anio_fundacion" => "" . $datos['anio_fundacion'],
            "id_usuario" => "" . $_COOKIE['ID_USUARIO'],
            "ciudad" => "" . $datos['ciudad']
        );

        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'insert_empresa', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );

        return $resultado;
    }

    public function bandeja_empresa() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'bandeja_empresa', array("", "accept:application/json"));

//        return array('data' => $resultado);
        
        return array('data' => array('0' => array('cod_empresa' => '1','cod_pais' => '1','razon_social' => 'Fundición Pacífico','tlf_1' => '1','pag_web' => '1','correo_1' => '1')));
    }

    public function actualizar_empresa($datos) {

        $resultado = array();
        $parametros['id_empresa'] = $datos['cod_empresa'];

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), $parametros, 'GET', 'datos_empresa', array("", "accept:application/json"));

        return $resultado;
    }

    public function upd_empresa($datos) {

        $resultado = array();
        $parametros = array(
            "id_empresa" => "" . $datos['cod_empresa'],
            "cod_pais" => "" . $datos['cod_pais'],
            "estado" => "" . $datos['estado'],
            "direccion" => "" . $datos['direccion'],
            "tlf_1" => "" . $datos['tlf_1'],
            "tlf_2" => "" . $datos['tlf_2'],
            "id_usuario" => "" . $_COOKIE['ID_USUARIO'],
            "ciudad" => "" . $datos['ciudad']
        );


        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'actualizar_empresa', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );

        return $resultado;
    }

    public function desactivar_empresa($datos) {

        $resultado = array();
        $parametros = array(
            "cod_empresa" => "" . $datos['cod_empresa'],
            "observacion" => "" . $datos['observacion'],
            "id_usuario" => "" . $_COOKIE['ID_USUARIO']
        );

        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'desactivar_empresa', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );

        return $resultado;
    }

}
