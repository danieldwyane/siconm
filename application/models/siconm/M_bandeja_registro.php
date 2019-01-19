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

class M_bandeja_registro extends CI_Model {
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

    /* INICIO DE EJEMPLOS DE SERVICIOS */

    public function reporte_registro() {

//        $parametros = null;
        // $parametros['id_sede'] = $_COOKIE['ID_SEDE'];
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'bandeja_registro', array("", "accept:application/json"));

//        return array('data' => $resultado);
        return array('data' => array('0' => array('cod_inventario' => '100', 'fecha_registro' => '1', 'nb_propietario' => '1', 'nu_anaquel' => '1')));
    }

    public function finalidad() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'finalidad', array("", "accept:application/json"));

        return $resultado;
    }

    public function tipo_boveda() {


        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'tipo_boveda', array("", "accept:application/json"));

        return $resultado;
    }

    public function recaudos() {

        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'tipo_boveda', array("", "accept:application/json"));

//        return $resultado;
        return array('0' => array('documento' => 'Acta', 'id_documento' => '1'),
            '1' => array('documento' => 'Recibo', 'id_documento' => '2'),
            '2' => array('documento' => 'Nota', 'id_documento' => '3'),
            '3' => array('documento' => 'Foto', 'id_documento' => '4'));
    }

    public function upd_registro($datos) {

        $resultado = array();
        $parametros = array(
            "cod_inventario" => "" . $datos['cod_inventario'],
            "anaquel" => "" . $datos['anaquel'],
            "cod_tipo_boveda" => "" . $datos['tipo_boveda'],
            "cod_finalidad" => "" . $datos['finalidad'],
            "id_usuario" => "" . $_COOKIE['ID_USUARIO']
        );


        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'actualizar_registro', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );

        return $resultado;
    }

    public function actualizar_datos($documentos) {

        $ids = $documentos['recaudo']['name'];
//        print_r($documentos['recaudo']['name']);
        foreach ($ids as $id) {
            if ($id) {

                //Obtengo los ids de los recaudos
                $ids = array_keys($documentos['recaudo']['name']);
                $string_recaudos = '';
                $numRecaudos = count($ids);
                $archivos = [];

                //Recorremos los ids
                foreach ($ids as $id) {
                    $nombre_archivo1 = $documentos['recaudo']['name'][$id];
                    $nombre_archivo = $documentos['recaudo']['name'][$id];
                    $nombre_archivo = explode('.', $nombre_archivo);
                    $extension = end($nombre_archivo);
                    $string_recaudos .= $id . '*' . $nombre_archivo1 . '*';

                    //Creo un array con los archivos
                    array_push($archivos, array(
                        'ARCHIVO' => $documentos['recaudo']['tmp_name'][$id],
                        'ID_RECAUDO' => $id,
                        'EXTENSION' => $extension
                            )
                    );
                }//Fin del foreach
//        $resultado = array();
//        $parametros = array(
//            "id_usuario" => "" . $_COOKIE['ID_USUARIO'],
//            "num_parametros" => "" . $numRecaudos,
//            "parametros" => "" . $string_recaudos,
//        );
//
//        //Obtenemos el array que nos indica si la cuenta es válida o no
//        $resultado = $this->my_curl->clienteRest(
//                $this->config->item('url_api'), //-> EndPoint
//                $parametros, //-> Parametros petición
//                'POST', //-> Metodo Petición
//                'ins_inventario', //-> Recurso del API
//                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
//        );

                $this->archivos_recaudos('prueba', $archivos);

                return array('codigo_respuesta' => '1', 'mensaje_respuesta' => 'Recaudos Actualizados');
            } else {
                return array('codigo_respuesta' => '3', 'mensaje_respuesta' => 'Sin Efecto');
            }
        }
    }

    private function archivos_recaudos($id_solicitud, $recaudos) {

        //Directorio base
        $directorio_base = './assets/siconm/files/documentos';

        //Evaluamos si el directorio existe
        if (!is_dir($directorio_base)) {

            mkdir($directorio_base, 0777);
            chmod($directorio_base, 0777);
        }//Fin del if
        //Directorio de la solicitud
        $directorio_solicitud = $directorio_base . '/' . $id_solicitud;

        //Evaluamos si el directorio existe
        if (!is_dir($directorio_solicitud)) {
            //Creamos el directorio de la solicitud
            mkdir($directorio_solicitud, 0777);
            chmod($directorio_solicitud, 0777);
        }//Fin del if
        //Recorremos los recaudos
        foreach ($recaudos as $recaudo) {

            //Nombre del archivo
            $archivo = $id_solicitud . '-' . $recaudo['ID_RECAUDO'] . '.' . $recaudo['EXTENSION'];

            //Movemos el recaudo al directorio
            if (isset($recaudo['ARCHIVO']) && $recaudo['ARCHIVO'] != "" && $recaudo['ARCHIVO'] != null) {
                if (copy($recaudo['ARCHIVO'], $directorio_solicitud . '/' . $archivo)) {

                    //Damos permiso al archivo
                    chmod($directorio_solicitud . '/' . $archivo, 0777);
                } else {
                    //Removemos el directorio
                    //rmdir($directorio_solicitud);

                    return array('codigo_respuesta' => 0, 'mensaje_respuesta' => 'Error al copiar el archivo.');
                }//Fin del if
            }
        }//Fin del foreach

        return array('codigo_respuesta' => 1, 'mensaje_respuesta' => 'Archivo copiado con éxito.');
    }

}
