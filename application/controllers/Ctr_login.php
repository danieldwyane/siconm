<?php

defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Clase Controladora de plantilla para Proyectos CodeIgniter
 *
 * @author Yubrazka Rondon y Alexander Guilarte
 */
class Ctr_login extends CI_Controller {

    public function __construct() {
        parent::__construct();

        //Cargamos el modelo
        $this->load->helper("url");
        $this->load->helper('cookie');

        $this->load->model('intranet/m_intranet');
        $this->CI = & get_instance();
    }

    public function index() {
        $this->initApp();
    }

    public function initApp() {

        if (isset($_GET['t']) && trim($_GET['t']) != '' && $_GET['t'] != null) {
            $rolUsuario = "Comunidad";

            $token = str_replace(' ', '', $_GET['t']);

            $this->CI->session->set_userdata(
                    array(
                        'logged_in' => true,
                        'login' => '',
                        'token' => $token,
                        'rol_user' => $rolUsuario
                    )
            );

            redirect('ctr_template');
        } else { //-> Token no enviado por url. (Se requiere autenticar Supervisor)
            $this->cargarVistaLogin(true);
        }
    }

    public function cargarVistaLogin($flagError) {
        $data['error'] = $flagError;
        $this->load->view("v_login", $data);
    }

    public function logonBd() {

        $respuesta = $this->validar_clave($_POST);
//        print_r($respuesta);
//        exit(0);

        if ($respuesta['CODIGO_RESPUESTA']) {
//            echo 'hola';
//            exit(0);
            $this->CI->session->set_userdata(
                    array(
                        'logged_in' => true,
                        'login' => $this->usuarioss['nombre'],
                        'idLogin' => $this->usuarioss['id_usuario'],
                        'token' => ''
                    )
            );

            /* Aqui hago u redirect */
            redirect('ctr_template');
        } else {
//            echo 'mal';
//            exit(0);
            redirect('ctr_login/cargarVistaLogin/true');
        }
    }

    public function cerrar() {
        $this->autenticacion->logout();
    }

    public function registrarse() {

        /* desmontar el template */
        $this->output->unset_template();

        $data = array();

        /* Cargar vista en la plantilla */
        $output = $this->load->view('vuce/registros/v_form_empresa', $data, true);

        $this->output->set_output($output);
    }

    /*
      Descripción           : Método que valida la clave del usuario.
      Parametros de entrada : La cuenta del usuario, contraseña usuario.
      Retorna               : Usuario validado.
     */

    private function validar_clave($parametros) {

        //Obtenemos el array que nos indica si la cuenta es válida o no
        $respuesta = $this->m_intranet->validar_clave($parametros);

        $clave_bd = $this->desencriptarClaveUsuario($respuesta['clave_usuario']);

        $validar_clave = array();

        //Evaluo las contraseñas
        if ($clave_bd === $parametros['clave']) {

            $validar_clave = array('CODIGO_RESPUESTA' => true, 'MENSAJE_RESPUESTA' => 'Clave correcta');
        } else {

            $validar_clave = array('CODIGO_RESPUESTA' => false, 'MENSAJE_RESPUESTA' => 'Clave incorrecta');
        }//Fin del if
        //Evaluamos
        if ($validar_clave['CODIGO_RESPUESTA']) {

            $validar_clave['ID_USUARIO'] = $respuesta['id_usuario'];
            $validar_clave['CODIGO_USUARIO'] = $respuesta['codigo_usuario'];
        }//Fin del if
        //Mandamos a crear la cookie
        $this->crear_cookie('ID_USUARIO', $validar_clave['ID_USUARIO'], 82000);
        $this->crear_cookie('CODIGO_USUARIO', $validar_clave['CODIGO_USUARIO'], 82000);
//        print_r($validar_clave);
//        exit(0);
        return $validar_clave;
    }

    /*
      Descripción           : Método que crea las cookies.
      Parametros de entrada : Nombre de cookie, el valor de la cookie y el tiempo de expiracion.
      Retorna               : Nada
     */

    private function crear_cookie($nombre, $valor, $time) {

        //Los datos de la cookie
        $cookie = array(
            'name' => $nombre,
            'value' => $valor,
            'expire' => $time
        );

        //Creamos la cookie			
        $this->input->set_cookie($cookie);
    }

    /*
      Descripción           : Método que borra una cookies creada.
      Parametros de entrada : Nombre de cookie, el valor de la cookie.
      Retorna               : Nada
     */

    private function borrar_cookie($nombre) {

        //Borramos la cookie	
        delete_cookie($nombre);
    }

    /*
      Descripción           : Método que obtiene el valor de una cookies creada.
      Parametros de entrada : El nombres de las cookies.
      Retorna               : El valor de la cookie
     */

    private function valor_cookie($nombre_cookie) {

        //Evaluo si existe la cookie
        if ($this->input->cookie($nombre_cookie)) {

            return array('CODIGO' => TRUE, 'VALOR' => get_cookie($nombre_cookie));
        } else {

            return array('CODIGO' => FALSE, 'MENSAJE' => 'La Cookie no existe');
        }//Fin del if
    }

    /*
      Descripción           : Método que valida la contraseña del usuario.
      Parametros de entrada : Ninguno.
     */

    public function validar_session() {

        //Verificamos si las cookies existen
        $cookies = $this->valor_cookie('ID_USUARIO');

        //Evaluamos el código
        if ($cookies['CODIGO']) {

            //Obtengo el nombre del usuario
            $nombre_usuario = $this->nombre_usuario($cookies['VALOR']);

            //Obtengo los menus asociados
            $menu_usuario = $this->m_wds_intranet->menu_usuario(1);

            return array('CODIGO' => TRUE, 'NOMBRE_USUARIO' => $nombre_usuario['nombre'], 'PERMISOS' => $menu_usuario, 'FOTO_USUARIO' => $nombre_usuario['foto']);
        } else {

            return array('CODIGO' => FALSE);
        }//Fin del if
    }

    /*
      Descripción           : Método que cierra la sesión del usuario.
      Parametros de entrada : Ninguno.
     */

    public function cerrar_session() {

        //Verificamos si las cookies existen
        $this->borrar_cookie('ID_USUARIO');
        $this->borrar_cookie('CODIGO_USUARIO');

        return array(TRUE);
    }

    public function generarClaveUsuario() {
        $key = $this->config->item('encryption_key');
        $clave = "sedem*2018";
        $encryptClave = $this->encrypt->encode($clave, $key);
        echo "CLAVE ENCRIPTADA: " . $clave . " -> " . $encryptClave;
    }

    private function desencriptarClaveUsuario($enc_word = null) {
        $dec_word = null;
        $key = $this->config->item('encryption_key');

        $dec_word = $this->encrypt->decode($enc_word, $key);

        return $dec_word;
    }

    private function encriptarClaveUsuario($dec_word = null) {
        $enc_word = null;
        $key = $this->config->item('encryption_key');

        $enc_word = $this->encrypt->encode($dec_word, $key);

        return $enc_word;
    }

}
