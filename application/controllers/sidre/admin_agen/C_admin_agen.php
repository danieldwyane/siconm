
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

class C_admin_agen extends CI_Controller {
    /*
      Descripción: Constructor de la clase principal
     */

    public function __construct() {

        parent::__construct();
        $this->load->helper('cookie');
        $this->load->model('sidre/admin_agen/m_admin_agen');

        $this->CI = & get_instance(); //-> Para obtener una instancia de la variable de sesión
    }
    
        /*
      Descripción : Método que consulta los datos iniciales.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function data_inicial() {

        $data['estado'] = $this->m_admin_agen->estado();

        echo json_encode($data);
    }

    public function municipios() {
        $data['municipios'] = $this->m_admin_agen->municipios($_POST);

        echo json_encode($data);
    }

    public function parroquias() {
        $data['parroquias'] = $this->m_admin_agen->parroquias($_POST);

        echo json_encode($data);
    }
    
    public function registrar_agencia() {

        echo json_encode($this->m_admin_agen->registrar_agencia($_POST));
    }

    
    public function agencias() {

        echo json_encode($this->m_admin_agen->agencias($_POST));
    }
    
        public function desactivar_agencia() {

        //print_r($_POST); exit(0);
            
      
        $data['id_agencia'] = $_POST['id_agencia'];
       
        // print_r($data);
        echo json_encode($this->m_admin_agen->desactivar_agencia($data));
    }
    
     public function activar_agencia() {

        //print_r($_POST); exit(0);
            
      
        $data['id_agencia'] = $_POST['id_agencia'];
       
        // print_r($data);
        echo json_encode($this->m_admin_agen->activar_agencia($data));
    }
}