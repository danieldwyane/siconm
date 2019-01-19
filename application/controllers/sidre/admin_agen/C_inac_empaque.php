
<?php

/*
  NOMBRE		: C_inac_empaque
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Controlador
  @author               : Kairus Gabriela Voz
  FECHA DE CREACIÓN 	: 13/06/2018
 */

/*
  Descripción: Clase principal
 */

class C_inac_empaque extends CI_Controller {
    /*
      Descripción: Constructor de la clase principal
     */

    public function __construct() {

        parent::__construct();
        $this->load->helper('cookie');
        $this->load->model('sidre/admin_agen/m_inac_empaque');

        $this->CI = & get_instance(); //-> Para obtener una instancia de la variable de sesión
    }

    /*
      Descripción : Método que consulta los datos del datatables.
      Parametros  : Nada.
      Retorna     : Lista de los empaques activos.
     */

    public function lista_empaques() {

        echo json_encode($this->m_inac_empaque->lista_empaques());
    }

    public function inac_empaque() {

//        print_r($_POST); 
        echo json_encode($this->m_inac_empaque->inac_empaque($_POST));
    }

}
