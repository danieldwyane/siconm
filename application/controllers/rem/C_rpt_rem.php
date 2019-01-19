<?php

/*
  NOMBRE		: C_
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Controlodor
  @author               :
  FECHA DE CREACIÓN 	:
 */

/*
  Descripción: Clase principal
 */

class C_rpt_rem extends CI_Controller {
    /*
      Descripción: Constructor de la clase principal
     */

    public function __construct() {

        parent::__construct();
        $this->load->helper('cookie');
        $this->load->model('rem/m_rpt_rem');

        $this->CI = & get_instance(); //-> Para obtener una instancia de la variable de sesión
    }

    /*
      Descripción : función que inserta el formulario de establecimiento.
      Parametros  : 2 Parametros.
      Retorna     : array y envie un correo al usuario.
     */

    public function listado_efectivo() {

        echo json_encode($this->m_rpt_rem->listado_efectivo($_POST));
    }

    public function aprobar_efectivo() {

        //print_r($_POST); exit(0);

        $cookies = $this->valor_cookie('ID_USUARIO');

        $data['id_enc_ent_efec'] = $_POST['id_enc_ent_efec'];
        $data['id_usuario_taquilla'] = $cookies['VALOR'];


        // print_r($data);
        echo json_encode($this->m_rpt_rem->aprobar_efectivo($data));
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

    public function reversar_efectivo() {

        $data['id_enc_ent_efec'] = $_POST['id_enc_ent_efec'];
        $data['id_supervisor'] = $_POST['id_supervisor'];

        $resp = $this->m_rpt_rem->reversar_efectivo($data);

        //print_r($resp); exit(0);

        echo json_encode($resp);
    }

    public function validar_reverso() {

        $data['usuario'] = $_POST['usuario'];

        $resp = $this->m_rpt_rem->validar_reverso($data);

        $validar_clave = array();

        if (!empty($resp)) {
            $clave_bd = $this->desencriptarClaveUsuario($resp[0]['clave']);

            //Evaluo las contraseñas
            if ($clave_bd === $_POST['contrasena']) {

                $data['id_enc_ent_efec'] = $_POST['id_enc_ent_efec']; //Id usuario que recibe efectivo
                $data['id_supervisor'] = $resp[0]['id_usuario']; //Id Supervisor

                $validar_clave = $this->m_rpt_rem->reversar_efectivo($data);
            } else {
                $validar_clave = array('codigo_respuesta' => false, 'mensaje_respuesta' => 'Usuario/Clave incorrecta');
            }//Fin del if
        } else {
            $validar_clave = array('codigo_respuesta' => false, 'mensaje_respuesta' => 'Usuario/Clave incorrecta');
        }

        echo json_encode($validar_clave);
    }

    private function desencriptarClaveUsuario($enc_word = null) {
        $dec_word = null;
        $key = $this->config->item('encryption_key');

        $dec_word = $this->encrypt->decode($enc_word, $key);

        return $dec_word;
    }

    /*     * ******************************************************************************************************************************************* */

    public function listado_efectivo_ejec() {

        echo json_encode($this->m_rpt_rem->listado_efectivo_ejec($_POST));
    }

    public function aprobar_efectivo_ejecutivo() {

        //print_r($_POST); exit(0);

        $cookies = $this->valor_cookie('ID_USUARIO');

        $data['id_enc_ent_efec'] = $_POST['id_enc_ent_efec'];
        $data['id_usuario_taquilla'] = $cookies['VALOR'];


        // print_r($data);
        echo json_encode($this->m_rpt_rem->aprobar_efectivo_ejecutivo($data));
    }

    public function reversar_efectivo_ejecutivo() {

        $data['id_enc_ent_efec'] = $_POST['id_enc_ent_efec'];
        $data['id_supervisor'] = $_POST['id_supervisor'];

        $resp = $this->m_rpt_rem->reversar_efectivo_ejecutivo($data);

        //print_r($resp); exit(0);

        echo json_encode($resp);
    }

    public function validar_reverso_ejecutivo() {

        $data['usuario'] = $_POST['usuario'];

        $resp = $this->m_rpt_rem->validar_reverso_ejecutivo($data);

        $clave_bd = $this->desencriptarClaveUsuario($resp[0]['clave']);

        $validar_clave = array();

        //Evaluo las contraseñas
        if ($clave_bd === $_POST['contrasena']) {

            $data['id_enc_ent_efec'] = $_POST['id_enc_ent_efec']; //Id usuario que recibe efectivo
            $data['id_supervisor'] = $resp[0]['id_usuario']; //Id Supervisor

            $validar_clave = $this->m_rpt_rem->reversar_efectivo($data);
        } else {

            $validar_clave = array('codigo_respuesta' => false, 'mensaje_respuesta' => 'Usuario/Clave incorrecta');
        }//Fin del if

        echo json_encode($validar_clave);
    }
    
   /**************************************************************************************************************************/ 
    
    public function usuario() {

        echo json_encode($this->m_rpt_rem->usuario($_POST));
    }
    
    public function aprobar_usuario() {

        //print_r($_POST); exit(0);

        $cookies = $this->valor_cookie('ID_USUARIO');

        $data['id_enc_ent_efec'] = $_POST['id_enc_ent_efec'];
        $data['id_aprobar_usuario'] = $cookies['VALOR'];


        // print_r($data);
        echo json_encode($this->m_rpt_rem->aprobar_usuario($data));
    }
    
    public function rechazar_usuario() {

        //print_r($_POST); exit(0);

        $cookies = $this->valor_cookie('ID_USUARIO');

        $data['id_enc_ent_efec'] = $_POST['id_enc_ent_efec'];
        $data['id_usuario_rechazo'] = $cookies['VALOR'];


        // print_r($data);
        echo json_encode($this->m_rpt_rem->rechazar_usuario($data));
    }

}
