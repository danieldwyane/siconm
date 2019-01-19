<?php

/*
  NOMBRE				: m_mapa.php
  PARÁMETROS			: (none)
  DESCRIPCIÓN			: Modelo para el mapa georeferencial
  AUTOR				: 
  FECHA DE CREACIÓN 	: 11/05/2016
 */

/*
  Descripción: Clase principal.
 */

class m_mapa_buque extends CI_Model {
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

//Fin del constructor de la clase
    /*     * ***************************** */

   
    public function data_inicial() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'estado', array("", "accept:application/json"));
        
        //Recorremos el array de datos
        foreach ($resultado as $dato) {
            //Armamos el array
            $data['filtro_1'][] = array('value' => $dato['id_estado'], 'label' => $dato['estado']);
        }//Fin del foreach

        return $data;
    }
        

//Fin del método data_inicial
    /*     * ************************* */

    /*
      Descripción: Método que obtiene la data para los filtros de busqueda.
      Parametros : Valores por el método POST de los filtros de busqueda.
      Retorna    : Un array de datos para los combos de los filtros.
     */

    public function filtros($parametros) {

        $buque = $parametros['buque'];


        //Obtenemos el array de datos de los tipos de establecimientos
        $datos = $this->servicio_rest($this->url_dss_rest, $buque, 'GET', 'buque', NULL);
//        print_r($datos);
        //Recorremos el array de datos
        foreach ($datos as $dato) {
            //Armamos el array
            $data['filtro_1'][] = array('value' => $dato['EDPR_BUQUE'], 'label' => $dato['EDPR_BUQUE']);
        }//Fin del foreach
        //Obtenemos el array de datos de los estados
//        $datos = $this->servicio_rest($this->url_dss_rest, $parametros, 'GET', 'estados', NULL);
//
//        //Recorremos el array de datos
//        foreach ($datos as $dato) {
//
//            //Armamos el array
//            $data['filtro_2'][] = array('value' => $dato['CODIGO_ESTADO'], 'label' => $dato['ESTADO']);
//        }//Fin del foreach
//        //Obtenemos el array de datos de los Municipios
//        $datos = $this->servicio_rest($this->url_dss_rest, $parametros, 'GET', 'municipios', NULL);
//        //print_r($datos);	
//        //Recorremos el array de datos
//        foreach ($datos as $dato) {
//
//            //Armamos el array
//            $data['filtro_3'][] = array('value' => $dato['CODIGO_MINICIPIO'], 'label' => $dato['MUNICIPIO']);
//        }//Fin del foreach
//        //Obtenemos el array de datos de las parroquias
//        $datos = $this->servicio_rest($this->url_dss_rest, $parametros, 'GET', 'parroquias', NULL);
//        //print_r($datos);	
//        //Recorremos el array de datos
//        foreach ($datos as $dato) {
//
//            //Armamos el array
//            $data['filtro_4'][] = array('value' => $dato['CODIGO_PARROQUIA'], 'label' => $dato['PARROQUIA']);
//        }//Fin del foreach

        return $data;
    }

//Fin del método filtros
    /* --------------------- */

    /*
      Descripción: Método que obtiene las marcas de las sucursales para mostrar
      en el mapa.
      Parametros : Los ids asociados a los establecimientos
      Retorna    : Un array con ID, Nombre, Latitud, Longitud y el Icono asociado al
      establecimiento.
     */

    public function marca_sucursales($parametros) {
        
        //Obtenemos el array de datos de los puntos geograficos de las sucursales
        $datos = $this->servicio_rest($this->url_dss_rest, $parametros['buque'], 'GET', 'marca_sucursales', NULL);
        $datos = ($this->m_wds_mapa_buque->marca_sucursales($_POST));

        //Recorremos el array de datos
        foreach ($datos as $dato) {

            //Armamos el array
            $data['marcas'][] = array('ID' => $dato['EDCG_EDPR_ID'], 'NOMBRE' => $dato['EDPR_BUQUE'], 'LATITUD' => $dato['EDCG_LATITUD'], 'LONGITUD' => $dato['EDCG_LONGITUD'], 'ICONO' => 'ejemplo.png');
        }//Fin del foreach

        return $data;
    }

//Fin del método establecimientos
    /* ------------------------------- */

    /*
      Descripción: Método que retorna los datos de sol. sin acta.
      Parametros : Ninguno.
      Retorna    : Una vista.
     */
    public function sucursal($datos) {
        //Obtenemos el array de datos de los tipos de establecimientos
        $respuesta = $this->servicio_rest($this->url_dss_rest, $datos, 'GET', 'sucursal', NULL);

        return $respuesta;
    }

//Fin del método actas
}

//Fin de la clase
/*--------------*/
