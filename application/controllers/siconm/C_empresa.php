
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

class C_empresa extends CI_Controller {
    /*
      Descripción: Constructor de la clase principal
     */

    public function __construct() {

        parent::__construct();
        $this->load->helper('cookie');
        $this->load->model('siconm/m_empresa');

        $this->CI = & get_instance(); //-> Para obtener una instancia de la variable de sesión
    }

    /*
      Descripción : Método que consulta los datos iniciales.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function data_inicial() {

        $data['pais'] = $this->m_empresa->pais();

        echo json_encode($data);
    }

//
//    public function municipios() {
//        $data['municipios'] = $this->m_empresa->municipios($_POST);
//
//        echo json_encode($data);
//    }
//
//    public function parroquias() {
//        $data['parroquias'] = $this->m_empresa->parroquias($_POST);
//
//        echo json_encode($data);
//    }

    public function registrar_empresa() {

        echo json_encode($this->m_empresa->registrar_empresa($_POST));
    }

    public function bandeja_empresa() {

        echo json_encode($this->m_empresa->bandeja_empresa($_POST));
    }

    public function actualizar_empresa() {

        $data['datos_empresa'] = $this->m_empresa->actualizar_empresa($_POST);
        $data['pais'] = $this->m_empresa->pais();
        
        echo json_encode($data);
    }

//    
      public function upd_empresa() {

//        print_r($_POST); 
      echo json_encode($this->m_empresa->upd_empresa($_POST));
   }
//    
     public function desactivar_empresa() {

        //print_r($_POST); exit(0);
            
      
        // print_r($data);
        echo json_encode($this->m_empresa->desactivar_empresa($_POST));
    }
}
