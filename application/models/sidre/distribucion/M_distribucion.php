<?php

/*
  NOMBRE		: M_distribucion
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Modelo
  @author               : José Buitrago
  FECHA DE CREACIÓN 	: 11/04/2018
 */

/*
  Descripción: Clase principal.
 */

class M_distribucion extends CI_Model {
    /*
      Descripción: Contructor de la clase principal.
     */

    public function __construct() {

        parent::__construct();

        /* Cargar modelos de microservicios */
        $this->load->library('my_curl');
    }

    /*
      Descripción : función que retorna las distribuciones realizadas (datatables).
      Parametros  : ninguno.
      Retorna     : distribuciones realizadas.
     */

    public function distribuciones_realizadas($id_usuario) {

        $resultado = array();
        $parametros['id_sede'] = $id_usuario;

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), $parametros, 'GET', 'getDistribucionesRealizadas', array("", "accept:application/json"));

        return array('data' => $resultado);
//        return array('data' => array ('id_planificacion' => '1', 'banco_destino' => 'Banesco', 'fecha_creacion' => '11/04/2018', 'fecha_real_llegada' => '12/04/2018', 'monto' => '500.000.000'));
    }

    /*
      Descripción : función que retorna la data inicial.
      Parametros  : ninguno.
      Retorna     : instituciones bancarias.
     */

    public function instituciones_bancarias() {

        $resultado = array();
        $parametros = null;

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), $parametros, 'GET', 'institucionesBancarias', array("", "accept:application/json"));

        return $resultado;
    }

    /*
      Descripción : función que retorna la data inicial.
      Parametros  : ninguno.
      Retorna     : tipo moneda.
     */

    public function tipo_moneda() {

        $resultado = array();
        $parametros = null;

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), $parametros, 'GET', 'tipoMoneda', array("", "accept:application/json"));

        return $resultado;
    }

    /*
      Descripción : función que guarda la distribucion.
      Parametros  : ninguno.
      Retorna     : tipo moneda.
     */

    public function crear_distribucion() {

        $resultado = array();
        $parametros = array(
            'id_enc_ent_efec' => $datos['id_enc_ent_efec'],
            'id_usuario_taquilla' => $datos['id_usuario_taquilla']
        );

        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api_sede'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'crearDistribucion', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );
        return $resultado;
    }

}

//fin del M_distribucion
