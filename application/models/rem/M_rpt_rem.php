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

class M_rpt_rem extends CI_Model {
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

    public function listado_efectivo() {

//        $parametros = null;
        $parametros['id_sede'] = $_COOKIE['ID_SEDE'];
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_sede'), $parametros, 'GET', 'getEncuesta', array("", "accept:application/json"));

        return array('data' => $resultado);
    }

    public function aprobar_efectivo($datos) {

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
                'aprobarEntregaUsuario', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );

        if ($resultado['codigo_respuesta'] == 1) {

            //Obtenemos los datos del destinatario
            $destinatario = $this->destinatario_correo($datos['id_enc_ent_efec']);

            //Obtenemos el mensaje a enviar
            $datosCorreo = $this->mensaje_correo(1);

            //Reemplazamos las palabras reservadas por los datos reales
            $cuerpo = str_replace('#nombre_apellido', $destinatario[0]['nombre_apellido'], $datosCorreo[0]['cuerpo']);
            $cuerpo = str_replace('#cedula', $destinatario[0]['cedula'], $cuerpo);
            $cuerpo = str_replace('#monto', $destinatario[0]['monto'], $cuerpo);
            
            $resultado2 = array();
            $parametros2 = array(
                'to' => $destinatario[0]['correo'],
                'subject' => $datosCorreo[0]['emisor'],
                'cc' => "",
                'body' => $cuerpo
            );

            //Obtenemos el array que nos indica si la cuenta es válida o no
            $resultado2 = $this->my_curl->clienteRest(
                    $this->config->item('url_api_sede'), //-> EndPoint
                    $parametros2, //-> Parametros petición
                    'POST', //-> Metodo Petición
                    'sendDelivery', //-> Recurso del API
                    array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
            );
        }

        return $resultado;
    }

    public function reversar_efectivo($datos) {

        $resultado = array();
        $parametros = array(
            'id_enc_ent_efec' => $datos['id_enc_ent_efec'],
            'id_supervisor' => $datos['id_supervisor']
        );

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_sede'), $parametros, 'GET', 'reversarEntregaUsuario', array("", "accept:application/json"));

        return $resultado;
    }

    public function validar_reverso($datos) {

        $resultado = array();
        $parametros = array(
            'usuario' => $datos['usuario']
        );

        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api_sede'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'validarReverso', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );

        return $resultado;
    }

    /*     * ****************************************************************************************************************************************** */

    public function listado_efectivo_ejec() {

//        $parametros = null;
        $parametros['id_sede'] = $_COOKIE['ID_SEDE'];
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_sede'), $parametros, 'GET', 'getEncuestaEjecutivo', array("", "accept:application/json"));

        return array('data' => $resultado);
    }

    public function aprobar_efectivo_ejecutivo($datos) {
        //print_r($datos);
        $resultado = array();
        $parametros = array(
            'id_enc_ent_efec' => $datos['id_enc_ent_efec'],
            'id_usuario_taquilla' => $datos['id_usuario_taquilla']
        );

        //Llamamos al mismo servicio porque el proceso es igual, pero con otra funcion
        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api_sede'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'aprobarEntregaUsuario', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );

        return $resultado;
    }

    public function reversar_efectivo_ejecutivo($datos) {

        $resultado = array();
        $parametros = array(
            'id_enc_ent_efec' => $datos['id_enc_ent_efec'],
            'id_supervisor' => $datos['id_supervisor']
        );

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_sede'), $parametros, 'GET', 'reversarEntregaUsuario', array("", "accept:application/json"));

        return $resultado;
    }

    public function validar_reverso_ejecutivo($datos) {

        $resultado = array();
        $parametros = array(
            'usuario' => $datos['usuario']
        );

        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api_sede'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'validarReverso', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );

        return $resultado;
    }

    private function mensaje_correo($id_mensaje) {

        $parametros['id_mensaje'] = $id_mensaje;
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_sede'), $parametros, 'GET', 'getMensajeCorreo', array("", "accept:application/json"));

        return $resultado;
    }

    /*
      Descripción : Método que obtiene los datos del destinatario
      Parametros  : El id del usuario.
      Retorna     : Retorna un array con los datos del destinatario.
     */

    private function destinatario_correo($id_enc_ent_efec) {

        $parametros['id_enc_ent_efec'] = $id_enc_ent_efec;
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_sede'), $parametros, 'GET', 'getDestinatario', array("", "accept:application/json"));

        return $resultado;
    }
    
    
    
    
    /***********************************************************************************************************/
    
    
    public function usuario() {

//        $parametros = null;
        $parametros['id_sede'] = $_COOKIE['ID_SEDE'];
        $resultado = array();

        $resultado = $this->my_curl->clienteRest($this->config->item('url_api_sede'), $parametros, 'GET', 'getUsuariosEmergentes', array("", "accept:application/json"));

        return array('data' => $resultado);
    }
    
 
    public function aprobar_usuario($datos) {
        //print_r($datos);
        $resultado = array();
        $parametros = array(
            'id_enc_ent_efec' => $datos['id_enc_ent_efec'],
            'id_aprobar_usuario' => $datos['id_aprobar_usuario']
        );

        //Llamamos al mismo servicio porque el proceso es igual, pero con otra funcion
        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api_sede'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'aprobarUsuarioEmergente', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );

        return $resultado;
    }
    
    public function rechazar_usuario($datos) {
        //print_r($datos);
        $resultado = array();
        $parametros = array(
            'id_enc_ent_efec' => $datos['id_enc_ent_efec'],
            'id_usuario_rechazo' => $datos['id_usuario_rechazo']
        );

        //Llamamos al mismo servicio porque el proceso es igual, pero con otra funcion
        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest(
                $this->config->item('url_api_sede'), //-> EndPoint
                $parametros, //-> Parametros petición
                'POST', //-> Metodo Petición
                'rechazarUsuarioEmergente', //-> Recurso del API
                array("Content-Type:application/json", "accept:application/json") //-> Cabeceras de Petición
        );

        return $resultado;
    }

}

//fin del M_login