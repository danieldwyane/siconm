
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

class C_rpt_cierre extends CI_Controller {
    /*
      Descripción: Constructor de la clase principal
     */

    public function __construct() {

        parent::__construct();
        $this->load->helper('cookie');
        $this->load->model('rem/m_rpt_cierre');

        $this->CI = & get_instance(); //-> Para obtener una instancia de la variable de sesión
    }

    /*
      Descripción : función que inserta el formulario de establecimiento.
      Parametros  : 2 Parametros.
      Retorna     : array y envie un correo al usuario.
     */

    public function listado_cierre() {

        echo json_encode($this->m_rpt_cierre->listado_cierre($_POST));
    }

    public function listado_cierre_cajero() {

        echo json_encode($this->m_rpt_cierre->listado_cierre_cajero($_POST));
    }

    public function generar_archivo() {

        echo json_encode($this->m_rpt_cierre->generar_archivo($_POST));
    }
    
    public function cerrar_operativo() {
        
        $resp = $this->m_rpt_cierre->cerrar_operativo();
//        print_r($resp); exit(0);

        echo json_encode($resp);
    }

}
