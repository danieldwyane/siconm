<?php

/*
  NOMBRE		: C_carga_masiva
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Controlador
  @author               : Kairus Voz
  FECHA DE CREACIÓN 	: 31/05/2018
 */

/*
  Descripción: Clase principal
 */

class C_carga_masiva extends CI_Controller {
    /*
      Descripción: Constructor de la clase principal
     */

    public function __construct() {

        parent::__construct();
        $this->load->helper('cookie');
        $this->load->model('sidre/distribucion/m_carga_masiva');

        $this->CI = & get_instance(); //-> Para obtener una instancia de la variable de sesión
    }

    /*
      Descripción : función para carga masiva
      Parametros  : .
      Retorna     : 
     */

    public function carga_masiva() {

        echo json_encode($this->m_carga_masiva->carga_masiva($_POST));
    }
    
    public function subir_archivo() {

        $respuesta['archivo'] = $this->m_carga_masiva->subir_archivo($_FILES);

        echo json_encode($respuesta);
    }
    
   
 
    
}
