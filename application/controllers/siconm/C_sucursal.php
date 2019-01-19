
<?php

/*
  NOMBRE		: C_sucursal
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Controlodor
  @author               :Kairus Gabriela Voz
  FECHA DE CREACIÓN 	:22/06/2018
 */

/*
  Descripción: Clase principal
 */

class C_sucursal extends CI_Controller {
    /*
      Descripción: Constructor de la clase principal
     */

    public function __construct() {

        parent::__construct();
        $this->load->helper('cookie');
        $this->load->model('siconm/m_sucursal');

        $this->CI = & get_instance(); //-> Para obtener una instancia de la variable de sesión
    }

    /*
      Descripción : Método que consulta los datos iniciales.
      Parametros  : Nada.
      Retorna     : Nada.
     */

    public function data_inicial() {

        $data['empresas'] = $this->m_sucursal->empresas();
        $data['pais'] = $this->m_sucursal->pais();

        echo json_encode($data);
    }

    /*
      Descripción : Método que consulta los datos del datatables.
      Parametros  : Nada.
      Retorna     : Nada.
     */

    public function bandeja_sucursal() {

        //print_r($_POST);
        echo json_encode($this->m_sucursal->bandeja_sucursal($_POST));
    }

}
