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

class M_registro_oro extends CI_Model {
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

    public function tipo_oro() {


        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'tipo_oro', array("", "accept:application/json"));

        return $resultado;
    }

    public function propietario() {


        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'propietario', array("", "accept:application/json"));

        return $resultado;
    }

    public function tipo_producto() {


        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'tipo_producto', array("", "accept:application/json"));

        return $resultado;
    }

    public function unidad_medida() {


        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'unidad_medida', array("", "accept:application/json"));

        return $resultado;
    }

    public function finalidad() {


        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'finalidad', array("", "accept:application/json"));

        return $resultado;
    }

    public function tipo_documento() {


        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'tipo_documento', array("", "accept:application/json"));

        return $resultado;
    }

    public function tipo_boveda() {


        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'tipo_boveda', array("", "accept:application/json"));

        return $resultado;
    }

    public function empresa() {


        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), null, 'GET', 'empresa', array("", "accept:application/json"));

        return $resultado;
    }

    /*
      Descripción : Método que consulta los datos iniciales.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function registro_datos_basicos($datos, $documentos, $codigo) {

        if ($datos['anaquel']) {

            $anaquel = $datos['anaquel'];
        }

        if ($datos['cubiculo']) {

            $anaquel = $datos['cubiculo'];
        }
        
        $ancho = str_replace(",", ".", str_replace(".", "", $datos['ancho']));
        $largo = str_replace(",", ".", str_replace(".", "", $datos['largo']));
        $diametro = str_replace(",", ".", str_replace(".", "", $datos['diametro']));
        $altura = str_replace(",", ".", str_replace(".", "", $datos['altura']));
        $peso_fino = str_replace(",", ".", str_replace(".", "", $datos['peso_fino']));
        $ley_pureza = str_replace(",", ".", str_replace(".", "", $datos['ley_pureza']));
        $va_hist_bs = str_replace(",", ".", str_replace(".", "", $datos['va_hist_bs']));
        $va_hist_dolar = str_replace(",", ".", str_replace(".", "", $datos['va_hist_dolar']));
        $peso_unitario = str_replace(",", ".", str_replace(".", "", $datos['peso_unitario']));
      
      
        $cod_pieza = $codigo;

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

        $resultado = array();
        $parametros = array(
            "cod_propiertario" => "" . $datos['propietario'],
            "cod_tipo_producto" => "" . $datos['tipo_producto'],
//            "cod_uni_medida" => "" . $datos['unidad_medida'],
            "cod_finalidad" => "" . $datos['finalidad'],
            "cod_pieza" => "" . $cod_pieza,
            "peso_unitario" => "" . $peso_unitario,
            "anaquel" => "" . $anaquel,
            "id_usuario" => "" . $_COOKIE['ID_USUARIO'],
            "num_parametros" => "" . $numRecaudos,
            "parametros" => "" . $string_recaudos,
            "ancho" => "" . $ancho,
            "largo" => "" . $largo,
            "diametro" => "" . $diametro,
            "altura" => "" . $altura,
            "serial_pieza" => "" . $datos['serial'],
            "md_peso_fino_gramos" => "" . $peso_fino,
            "cod_tipo_mineral" => "" . $datos['tipo_oro'],
            "cod_empresa" => "" . $datos['empresa'],
            "ano" => "" . $datos['ano'],
            "cod_tipo_boveda" => "" . $datos['tipo_boveda'],
            "ley_pureza" => "" . $ley_pureza,
            "va_hist_bs" => "" . $va_hist_bs,
            "va_hist_dolar" => "" . $va_hist_dolar,
            "fecha_recepcion_bcv" => "" . $datos['fecha_recepcion_bcv']
        );
        
      // print_r($parametros);
        

        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'ins_inventario', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );

//        if (empty($archivos)) {
//            
//            print_r(''),
//
//            //el primer campo id que inserta en inventario
//            $this->archivos_recaudos($resultado['id_inventario'], $archivos);
//        }

        $this->archivos_recaudos($resultado['id_inventario'], $archivos);

        return $resultado;
    }

    /*
      Descripción : Método que crear el directorio con los recaudos asociados
      Parametros  : EL id de la solicitud
      Retorna     : Un array con el código de respuesta.
     */

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

        //Creamos el directorio de la solicitud
        mkdir($directorio_solicitud, 0777);
        chmod($directorio_solicitud, 0777);

        //Recorremos los recaudos
        foreach ($recaudos as $recaudo) {

            //Nombre del archivo
            $archivo = $id_solicitud . '-' . $recaudo['ID_RECAUDO'] . '.' . $recaudo['EXTENSION'];

            //Movemos el recaudo al directorio
            if(isset($recaudo['ARCHIVO']) && $recaudo['ARCHIVO']!="" && $recaudo['ARCHIVO']!=null){
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

    /*
      Descripción : Método que consulta los datos iniciales.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function existe_serial($datos) {

        $resultado = array();
        $parametros['cod_tipo_producto'] = $datos['tipo_producto'];

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), $parametros, 'GET', 'existe_serial', array("", "accept:application/json"));

        return $resultado;
    }

}
