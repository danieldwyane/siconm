
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

class M_rpt_cierre extends CI_Model {
    /*
      Descripción: Contructor de la clase principal.
     */

    public function __construct() {

        parent::__construct();

        /* Cargar modelos de microservicios */
        $this->load->library('my_curl');
    }

    /* INICIO DE EJEMPLOS DE SERVICIOS */

    public function listado_cierre($data) {

        $parametros['opcion'] = $data['opcion'];
        $parametros['id_sede'] = $_COOKIE['ID_SEDE'];
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_sede'), $parametros, 'GET', 'getCierre', array("", "accept:application/json"));

        return array('data' => $resultado);
    }

    public function listado_cierre_cajero() {

        $parametros['id_usuario'] = $_COOKIE['ID_USUARIO'];
        $parametros['id_sede'] = $_COOKIE['ID_SEDE'];
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_sede'), $parametros, 'GET', 'getCierreCajero', array("", "accept:application/json"));

        return array('data' => $resultado);
    }

    public function generar_archivo($datos) {

        $parametros['id_usuario'] = $_COOKIE['ID_USUARIO'];
        $parametros['id_sede'] = $_COOKIE['ID_SEDE'];
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_sede'), $parametros, 'GET', 'getDescuentoNomina', array("", "accept:application/json"));

        //Evaluo si hay algun registro 
        if (count($resultado) > 0) {

            //Creamos el archivo 
            $nombre_archivo = 'Cierre.Dat';

            $archivo = fopen("./assets/rem/files/txt_cierre/" . $nombre_archivo, "w");

            //Evaluamos si el archivo se creo 
            if ($archivo) {

                //Recorremos los resultados 
                foreach ($resultado as $solicitud) {

                    //Evaluamos si se puede escribir 
                    if (!fwrite($archivo, $solicitud['registro'] . "\r\n")) {


                        return array('CODIGO_RESPUESTA' => 0, 'MENSAJE_RESPUESTA' => 'Error en la solicitud N° ' . $solicitud['registro']);
                    } else {

                        $record = 'osa';
                    }//Fin del if 
                }//Fin del foreach 

                fclose($archivo);

                $resultado = array('CODIGO_RESPUESTA' => 1, 'MENSAJE_RESPUESTA' => 'Archivo generado con éxito.', 'ARCHIVO' => $nombre_archivo);
            } else {

                $resultado = array('CODIGO_RESPUESTA' => 0, 'MENSAJE_RESPUESTA' => 'Error al tratar de crear el archivo.');
            }//Fin del if 
        } else {

            $resultado = array('CODIGO_RESPUESTA' => 0, 'MENSAJE_RESPUESTA' => 'No existen solicitudes pendientes por generar.');
        }//Fin del if 

        return $resultado;
    }

    public function cerrar_operativo() {

//        $parametros = null;
        $parametros['id_sede'] = $_COOKIE['ID_SEDE'];
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_sede'), $parametros, 'GET', 'cerrarOperativo', array("", "accept:application/json"));

        return $resultado;
    }

}
