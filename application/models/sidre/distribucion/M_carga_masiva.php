<?php

/*
  NOMBRE		: M_carga_masiva
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Modelo
  @author               :Kairus Voz
  FECHA DE CREACIÓN 	:31/05/2018
 */

/*
  Descripción: Clase principal.
 */

class M_carga_masiva extends CI_Model {
    /*
      Descripción: Contructor de la clase principal.
     */

    public function __construct() {

        parent::__construct();

        /* Cargar modelos de microservicios */
        $this->load->library('my_curl');
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
            "pos1" => "" . $directorio_base,
            "pos2" => "" . $id_sede[0]['id_sede'],
            "pos3" => "" . $_COOKIE['ID_USUARIO']
            "pos4" => "" . $directorio_base,
            "pos5" => "" . $directorio_base,
            "pos6" => "" . $directorio_base,
            "pos7" => "" . $directorio_base,
            "pos8" => "" . $directorio_base,
            
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


    
}