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

class M_usuario extends CI_Model {
    /*
      Descripción: Contructor de la clase principal.
     */

    public function __construct() {

        parent::__construct();

        /* Cargar modelos de microservicios */
        $this->load->library('my_curl');
    }

    public function data_inicial() {

        $parametros = null;
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_sede'), $parametros, 'GET', 'getListaSede', array("", "accept:application/json"));

        return $resultado;
    }

    public function crear_usuario($datos) {

        $resultado = array();
        $parametros = array(
            'screenname' => $datos['screenname'],
            'cedula' => $datos['cedula'],
            'nombre_apellido' => $datos['nombre_apellido'],
            'tipo_empleado' => $datos['tipo_empleado'],
            'nomina' => $datos['nomina'],
            'com_fis' => $datos['com_fis'],
            'departamento' => $datos['departamento'],
            'correo' => $datos['correo'],
            'telefono' => $datos['telefono'],
            'id_usuario' => $datos['id_usuario'],
            'id_sede' => $_COOKIE['ID_SEDE']
        );

        //Llamamos al mismo servicio porque el proceso es igual, pero con otra funcion
        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api_sede'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'crearUsuario', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );

        return $resultado;
    }

}

//fin del M_usuario