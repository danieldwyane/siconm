<?php

/*
  NOMBRE		: C_eventos
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Controlodor
  @author               : Alexander Guilarte
  FECHA DE CREACIÓN 	: 14-04-2018
 */

/*
  Descripción: Clase principal
 */

class C_eventos extends CI_Controller {
    /*
      Descripción: Constructor de la clase principal
     */

    public function __construct() {

        parent::__construct();
        $this->load->helper('cookie');
        $this->load->model('sidrai/m_eventos');

        $this->CI = & get_instance(); //-> Para obtener una instancia de la variable de sesión
    }

    /*
      Descripción : Método que consulta los datos iniciales.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function data_inicial() {

        $data['estado'] = $this->m_eventos->estado();
        $data['tipo_actividad'] = $this->m_eventos->tipo_actividad();
        $data['poblacion_objetivo'] = $this->m_eventos->poblacion_objetivo();
        $data['facilitador'] = $this->m_eventos->consultar_facilitadores($_POST);

        echo json_encode($data);
    }

    public function municipios() {
        $data['municipios'] = $this->m_eventos->municipios($_POST);

        echo json_encode($data);
    }

    public function parroquias() {
        $data['parroquias'] = $this->m_eventos->parroquias($_POST);

        echo json_encode($data);
    }

    /*
      Descripción : función que inserta el formulario de establecimiento.
      Parametros  : 2 Parametros.
      Retorna     : array y envie un correo al usuario.
     */

    public function programar_evento() {

        echo json_encode($this->m_eventos->programar_evento($_POST));
    }

    /*
      Descripción : función que inserta el formulario de establecimiento.
      Parametros  : 2 Parametros.
      Retorna     : array y envie un correo al usuario.
     */

    public function registrar_evento() {

        echo json_encode($this->m_eventos->registrar_evento($_POST));
    }

    /*
      Descripción : función que inserta el formulario de establecimiento.
      Parametros  : 2 Parametros.
      Retorna     : array y envie un correo al usuario.
     */

    public function consultar_actividades_programadas() {

        echo json_encode($this->m_eventos->consultar_actividades_programadas($_POST));
    }

    
}
