<?php

/*
  NOMBRE		: C_distribucion
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Controlador
  @author               : José Buitrago
  FECHA DE CREACIÓN 	: 11/04/2018
 */

/*
  Descripción: Clase principal
 */

class C_distribucion extends CI_Controller {
    /*
      Descripción: Constructor de la clase principal
     */

    public function __construct() {

        parent::__construct();
        $this->load->helper('cookie');
        $this->load->model('sidre/distribucion/m_distribucion');

        $this->CI = & get_instance(); //-> Para obtener una instancia de la variable de sesión
    }

    /*
      Descripción : función que retorna las distribuciones realizadas (datatables).
      Parametros  : ninguno.
      Retorna     : distribuciones realizadas.
     */

    public function distribuciones_realizadas() {

        $id_usuario = $_COOKIE['ID_USUARIO'];

        $resultado = $this->m_distribucion->distribuciones_realizadas($id_usuario);

        echo json_encode($resultado);
    }

    /*
      Descripción : función que retorna la data inicial.
      Parametros  : ninguno.
      Retorna     : instituciones bancarias y tipo moneda.
     */

    public function data_inicial() {

        $resultado['banco_destino'] = $this->m_distribucion->instituciones_bancarias();
        $resultado['tipo_moneda'] = $this->m_distribucion->tipo_moneda();

        echo json_encode($resultado);
    }

    /*
      Descripción : función que guarda la distribuci'n.
      Parametros  : ninguno.
      Retorna     : mensaje exitoso o fallido.
     */

    public function crear_distribucion() {
        print_r($_POST);
        $id_usuario = $_COOKIE['ID_USUARIO'];

        $resultado = $this->m_distribucion->distribuciones_realizadas($_POST);

        echo json_encode($resultado);
    }

}

//fin del C_distribucion
