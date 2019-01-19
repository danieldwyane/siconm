<?php

defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Clase Controladora de plantilla para Proyectos CodeIgniter
 *
 * @author Yubrazka Rondon y Alexander Guilarte
 */
class Ctr_login extends CI_Controller {
    
    private $usuarioss = null;

    public function __construct() {
        parent::__construct();
        $this->load->helper("url");
        $this->load->model('sistemas_prueba/m_registro');
        $this->CI = & get_instance();
    }

    public function index() {
        $this->initApp();
    }

//    public function initApp($user=null){
//        if($user != null){
//            $idUsuario   = 1; // $u->getIdUsuario();
//            $rolUsuario  = "admin"; // $u->getRolUsuario();
//
//            $login = $this->desencriptarClaveUsuario($user);
//
//            $this->CI->session->set_userdata(
//                array(
//                    'logged_in' => true,
//                    'login' => $login,
//                    'idUsuario' => $idUsuario,
//                    'rolUsuario' => $rolUsuario
//                )
//            );
//        }
//        redirect('ctr_template');
//    }


    public function initApp() {
        //$this->session->sess_destroy();
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

//            print_r($this->CI->session->get_userdata());
//            exit(0);

            redirect('ctr_template');
        } else { //-> Token no enviado por url. (Se requiere autenticar Supervisor Mercal)
            $this->cargarVistaLogin(true);
        }
//        if($user != null){
//            $idUsuario   = 1; // $u->getIdUsuario();
//            $rolUsuario  = "admin"; // $u->getRolUsuario();
//
//            $login = $this->desencriptarClaveUsuario($user);
//
//            $this->CI->session->set_userdata(
//                array(
//                    'logged_in' => true,
//                    'login' => $login,
//                    'idUsuario' => $idUsuario,
//                    'rolUsuario' => $rolUsuario
//                )
//            );
//        }
    }

    public function cargarVistaLogin($flagError) {
        $data['error'] = $flagError;
        $this->load->view("v_login", $data);
    }

    public function logonLdap() {

        if ($this->autenticacion->login($_POST["usuario"], $_POST["clave"])) {

            //$this->session->sess_destroy();

            $this->session->set_userdata(
                    array(
                        'logged_in' => true,
                        'id_usuario' => $_POST["usuario"]
                    )
            );

            //$this->load->view("plantilla_vista");
            /* Aqui hago un redirect */
            redirect('ctr_template');
        } else {
            redirect('ctr_login/cargarVistaLogin/true');
        }
    }

    public function logonBd() {
        if ($this->_login($_POST["usuario"], $_POST["clave"])) {
            //$u = $this->dao_usuario->getUsuarioByLogin($_POST["usuario"]);//Obtengo el usuario por login

//            $login = $_POST["usuario"]; // $u->getLogin();
            //$idUsuario   = 1; // $u->getIdUsuario();
//            $rolUsuario  = "Mercal"; // $u->getRolUsuario();
            //$this->CI->session->sess_destroy();

            $this->CI->session->set_userdata(
                    array(
                        'logged_in' => true,
                        'login' => $this->usuarioss['nombre'],
                        'idLogin' => $this->usuarioss['id_usuario'],
                        'token' => ''
//                    'rol_user' => $rolUsuario
                    )
            );

            //$this->load->view("v_aplicacion");
            /* Aqui hago un redirect */
            redirect('ctr_template');
        } else {
            redirect('ctr_login/cargarVistaLogin/true');
        }
    }

    private function _login($usuario,$clave){
        $key = $this->config->item('encryption_key');
        $u = $this->m_registro->validar_clave($usuario,$clave);//Obtengo el usuario por login
        
        $this->usuarioss = $u;
        
        if($u != null){
//            $psw = $u['password'];
            
            $clave_usuario = $u['password'];

            if(($clave == $clave_usuario)){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        } 
//        --> Descomentar para autenticar por BD.
        return false;
//        return true;
    }

    public function cerrar() {
        $this->autenticacion->logout();
    }

    public function generarClaveUsuario() {
        //$key = $this->config->item('encryption_key');
        $key = 'm1np4l';
        $clave = '18493883';
        $encryptClave = $this->encrypt->encode($clave, $key);
        echo "CLAVE ENCRIPTADA: " . $encryptClave;
    }

    public function desencriptarClaveUsuario($a = null) {
        //$key = $this->config->item('encryption_key');
        //$a = 'CzFUPFNhXjpSZQJpVjxaMw==';
        $key = 'm1np4l';
        //$clave_encriptada = $a;
        $desencryptClave = $this->encrypt->decode($a, $key);
        return $desencryptClave;
        //echo "CLAVE DESENCRIPTADA: ".$desencryptClave;
    }

    /*
      Descripción           : Método que valida la contraseña del usuario.
      Parametros de entrada : Ninguno.
     */

    public function validar_clave() {

        echo json_encode($this->m_login->validar_clave($usuario, $clave));
    }

    public function registrarse() {

//        if ($this->CI->session->userdata('logged_in') == true) {
        /* desmontar el template */
        $this->output->unset_template();

        /* Cargar hojas de estilo css */
//          $this->load->css('assets/themes/blitzer/jquery-ui/jquery-ui.css');
//          $this->load->css('assets/themes/blitzer/jquery-ui/jquery-ui.structure.css');
//          $this->load->css('assets/themes/blitzer/jquery-ui/jquery-ui.theme.css');
//          $this->load->css('assets/themes/blitzer/jquery-ui-multiselect/jquery.multiselect.css');
//          $this->load->css('assets/themes/blitzer/jquery-ui-multiselect/jquery.multiselect.filter.css');
//            $this->load->css('application/libraries/DataTables/DataTables-1.10.12/css/jquery.dataTables.min.css');
//            $this->load->css('application/libraries/DataTables/Responsive-2.1.0/css/responsive.dataTables.min.css');

        /* Cargar librerias javascript */
//          $this->load->js('assets/themes/default/js/jquery-2.1.4.min.js');
//          $this->load->js('assets/themes/blitzer/jquery-ui/jquery-ui.js');
//          $this->load->js('assets/themes/default/js/jquery.maskedinput.js');
//          $this->load->js('assets/themes/blitzer/jquery-ui-multiselect/src/jquery.multiselect.js');
//          $this->load->js('assets/themes/blitzer/jquery-ui-multiselect/src/jquery.multiselect.filter.js');
//            $this->load->js('application/libraries/DataTables/DataTables-1.10.12/js/jquery.dataTables.min.js');
//            $this->load->js('application/libraries/DataTables/Responsive-2.1.0/js/dataTables.responsive.min.js');

        /* Cargar el título del módulo */
//            $this->output->set_title('Registrarse');

        /* Montar plantilla */
        //$this->output->set_template('default');

        $data = array();

        /* Cargar vista en la plantilla */
        $output = $this->load->view('vuce/registros/v_form_empresa', $data, true);
        $this->output->set_output($output);
//        } else {
        /* desmontar el template */
//            $this->output->unset_template();

        /* montar el template */
//            $this->output->set_template('default');
//            $output = $this->load->view('v_errorSesion', null, true);
//            $this->output->set_output($output);
    }

}
