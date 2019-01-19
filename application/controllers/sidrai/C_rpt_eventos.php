<?php

/*
  NOMBRE		: C_rpt_eventos
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Controlador
  @author               : Kairus Voz
  FECHA DE CREACIÓN 	: 14-04-2018
 */

/*
  Descripción: Clase principal
 */

class C_rpt_eventos extends CI_Controller {
    /*
      Descripción: Constructor de la clase principal
     */

    public function __construct() {

        parent::__construct();
        $this->load->helper('cookie');
        $this->load->model('sidrai/m_rpt_eventos');

        $this->CI = & get_instance(); //-> Para obtener una instancia de la variable de sesión
    }

    /*
      Descripción : función que inserta el formulario de establecimiento.
      Parametros  : 2 Parametros.
      Retorna     : array y envie un correo al usuario.
     */

    public function consultar_actividades() {

        echo json_encode($this->m_rpt_eventos->consultar_actividades($_POST));
    }

    /*
      Descripción : función que actualiza la data en la modal.
      Parametros  : 2 Parametros.
      Retorna     : array y envie un correo al usuario.
     */

    public function actualizar_plan_difusion() {
        //print_r($_POST); 
        echo json_encode($this->m_rpt_eventos->actualizar_plan_difusion($_POST));
    }

    /*
      Descripción : Método que muestra los detalles de las solicitudes en la bandeja del analista.
      Parametros  : id_solicitud, id_usuario.
      Retorna     : Nada
     */

    public function detalle_plan_difusion() {

        //Consulta el catalago del los datos de la solicitud
        $data['detalle'] = $this->m_rpt_eventos->detalle_plan_difusion($_POST);

        echo json_encode($data);
    }

    
   /*
      Descripción : Método que muestra los estatus en el select
      Parametros  : id_estatus
      Retorna     : 
     */

    public function consultar_estatus() {

        //Consulta el catalago del los datos de la solicitud
        $data['estatus'] = $this->m_rpt_eventos->consultar_estatus();

        echo json_encode($data);
    }
    
    
    
    
    
    
}
