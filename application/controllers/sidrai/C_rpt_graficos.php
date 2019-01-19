<?php

/*
  NOMBRE		: C_rpt_graficos
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Controlodor
  @author               : Alexander Guilarte
  FECHA DE CREACIÓN 	: 14-04-2018
 */

/*
  Descripción: Clase principal
 */

class C_rpt_graficos extends CI_Controller {
    /*
      Descripción: Constructor de la clase principal
     */

    public function __construct() {

        parent::__construct();
        $this->load->helper('cookie');
        $this->load->model('sidrai/m_rpt_graficos');

        $this->CI = & get_instance(); //-> Para obtener una instancia de la variable de sesión
    }

    /*
      Descripción : función que obtiene las personas atendidas.
      Parametros  : 2 Parametros.
      Retorna     : array y envie un correo al usuario.
     */

    public function total_personas_atendidas() {

        echo json_encode($this->m_rpt_graficos->total_personas_atendidas($_POST));
    }

    /*
      Descripción : función que inserta el formulario de establecimiento.
      Parametros  : 2 Parametros.
      Retorna     : array y envie un correo al usuario.
     */

    public function total_avance_difusion() {

        echo json_encode($this->m_rpt_graficos->total_avance_difusion($_POST));
    }

    /*
      Descripción : función que inserta el formulario de establecimiento.
      Parametros  : 2 Parametros.
      Retorna     : array y envie un correo al usuario.
     */

    public function reporte_actividades() {

        $data['nombre_actividades'] = $this->m_rpt_graficos->nombre_actividades($_POST);
        $data['planif_actividades'] = $this->m_rpt_graficos->consultar_planif_actividades($_POST);
        $data['pers_actividades'] = $this->m_rpt_graficos->cantidad_personas_actividades($_POST);

        echo json_encode($data);
    }

    /*
      Descripción : función que obtiene los grupos atendidos.
      Parametros  : 2 Parametros.
      Retorna     : array y envie un correo al usuario.
     */

    public function reporte_grupos() {

        $data['planif_grupos'] = $this->m_rpt_graficos->consultar_planif_grupos($_POST);
        $data['pers_grupos'] = $this->m_rpt_graficos->cantidad_personas_grupos($_POST);

        echo json_encode($data);
    }

    /*
      Descripción : función que inserta el formulario de establecimiento.
      Parametros  : 2 Parametros.
      Retorna     : array y envie un correo al usuario.
     */

    public function reporte_zonas() {

        $data['planif_zonas'] = $this->m_rpt_graficos->consultar_planif_zonas($_POST);
        $data['pers_zonas'] = $this->m_rpt_graficos->cantidad_personas_zonas($_POST);

        echo json_encode($data);
    }

    /*
      Descripción : función que inserta el formulario de establecimiento.
      Parametros  : 2 Parametros.
      Retorna     : array y envie un correo al usuario.
     */

    public function reporte_estados() {

        $data['planif_estados'] = $this->m_rpt_graficos->consultar_planif_estados($_POST);
        $data['pers_estados'] = $this->m_rpt_graficos->cantidad_personas_estados($_POST);

        echo json_encode($data);
    }

}
