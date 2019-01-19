<?php

/*
  NOMBRE		: C_recepcion
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Controlodor
  @author               : Leonel rivas
  FECHA DE CREACIÓN 	: 11/04/2018
 */

/*
  Descripción: Clase principal
 */

class C_recepcion extends CI_Controller {
    /*
      Descripción: Constructor de la clase principal
     */

    public function __construct() {

        parent::__construct();
        $this->load->helper('cookie');
        $this->load->model('sidre/m_recepcion');

        $this->CI = & get_instance(); //-> Para obtener una instancia de la variable de sesión
    }

    /*
      Descripción : función que inserta el formulario de establecimiento.
      Parametros  : 2 Parametros.
      Retorna     : array y envie un correo al usuario.
     */

    public function datos_distribucion() {

        echo json_encode($this->m_recepcion->datos_distribucion($_POST));
    }

     /*
      Descripción : función que inserta el formulario de establecimiento.
      Parametros  : 2 Parametros.
      Retorna     : array y envie un correo al usuario.
     */
     public function montos_recibidos() {

        echo json_encode($this->m_recepcion->montos_recibidos($_POST));
    }


}
