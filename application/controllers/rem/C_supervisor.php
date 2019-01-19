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

class C_supervisor extends CI_Controller {
    /*
      Descripción: Constructor de la clase principal
     */

    public function __construct() {

        parent::__construct();
        $this->load->helper('cookie');
        $this->load->model('rem/m_supervisor');

        $this->CI = & get_instance(); //-> Para obtener una instancia de la variable de sesión
    }

    /*
      Descripción : función que inserta el formulario de establecimiento.
      Parametros  : 2 Parametros.
      Retorna     : array y envie un correo al usuario.
     */

    public function control_carga() {

        echo json_encode($this->m_supervisor->control_carga($_POST));
    }

    public function existe_operativo() {

        echo json_encode($this->m_supervisor->existe_operativo($_POST));
    }

    public function iniciar_operativo() {

        echo json_encode($this->m_supervisor->iniciar_operativo($_POST));
    }

    public function subir_archivo() {

        $respuesta['archivo'] = $this->m_supervisor->subir_archivo($_FILES);

        echo json_encode($respuesta);
    }

    public function carga_masiva() {

        echo json_encode($this->m_supervisor->carga_masiva($_POST));
    }

    public function total_encuesta() {

        echo json_encode($this->m_supervisor->total_encuesta($_POST));
    }

    public function total_operador() {

        $data['operador'] = $this->m_supervisor->total_operador($_POST);
        
        echo json_encode($data);
    }

}
