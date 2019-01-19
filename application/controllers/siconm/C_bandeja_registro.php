<?php

/*
  NOMBRE		: C_bandeja_registro
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Controlodor
  @author               :
  FECHA DE CREACIÓN 	:
 */

/*
  Descripción: Clase para editar los registros de inventario
 */

class C_bandeja_registro extends CI_Controller {
    /*
      Descripción: Constructor
     */

    public function __construct() {

        parent::__construct();
        $this->load->helper('cookie');
        $this->load->model('siconm/m_bandeja_registro');

        $this->CI = & get_instance(); //-> Para obtener una instancia de la variable de sesión
    }

    /*
      Descripción : Método que consulta los datos iniciales.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function reporte_registro() {

        echo json_encode($this->m_bandeja_registro->reporte_registro($_POST));
    }

    public function finalidad() {

        $data['finalidad'] = $this->m_bandeja_registro->finalidad();
        $data['tipo_boveda'] = $this->m_bandeja_registro->tipo_boveda();

        echo json_encode($data);
    }

    public function upd_registro() {

        echo json_encode($this->m_bandeja_registro->upd_registro($_POST));
    }

    public function recaudos() {

        $resultado['tipo_documento'] = $this->m_bandeja_registro->recaudos();

        echo json_encode($resultado);
    }

    public function actualizar_datos() {
//        print_r($_POST);
//        print_r($_FILES);
//        exit(0);
        $resultado = $this->m_bandeja_registro->actualizar_datos($_FILES);

        echo json_encode($resultado);
    }

}
