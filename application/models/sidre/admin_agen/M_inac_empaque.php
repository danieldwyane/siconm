
<?php

/*
  NOMBRE		: M_inac_empaque
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Modelo
  @author               : Kairus Gabriela Voz
  FECHA DE CREACIÓN 	: 13/06/2018
 */

/*
  Descripción: Clase principal.
 */

class M_inac_empaque extends CI_Model {
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
      Descripción : Método que consulta los datos iniciales.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function lista_empaques() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'lista_empaque', array("", "accept:application/json")
        );
        
//         return array('data' => $resultado);
           return array('data' => array('0' => array('serial_caja' => '1','literal_desde' => '1', 'literal_hasta' => '1','anio_caja' => '1','serial_caja' => '1','descripcion' => '1')));
    }

    public function inac_empaque($datos) {
        
        print_r($datos);
        
        $resultado = array();
        $parametros = array(
            "serial_caja" => "" . $datos['serial_caja'],
            "observacion" => "" . $datos['observacion'],
           );

        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'inactivar_empaque', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );

        return $resultado;
//          return array('codigo_respuesta' => $resultado);
    }

}
