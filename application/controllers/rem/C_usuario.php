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

class C_usuario extends CI_Controller {
    /*
      Descripción: Constructor de la clase principal
     */

    public function __construct() {

        parent::__construct();
        $this->load->helper('cookie');
        $this->load->model('rem/m_usuario');

        $this->CI = & get_instance(); //-> Para obtener una instancia de la variable de sesión
    }

    /*
      Descripción : función que retorna datos.
      Parametros  : .
      Retorna     : array.
     */

    public function data_inicial() {

        $resultado['com_fis'] = $this->m_usuario->data_inicial();

        echo json_encode($resultado);
    }

    /*
      Descripción : función que guarda el usuario.
      Parametros  : datos usuarios.
      Retorna     : array.
     */

    public function crear_usuario() {
        
        $cookies = $this->valor_cookie('ID_USUARIO');

        $_POST['id_usuario'] = $cookies['VALOR'];

        $resultado = $this->m_usuario->crear_usuario($_POST);

        echo json_encode($resultado);
    }

    /*
      Descripción           : Método que obtiene el valor de una cookies creada.
      Parametros de entrada : El nombres de las cookies.
      Retorna               : El valor de la cookie
     */

    private function valor_cookie($nombre_cookie) {

        //Evaluo si existe la cookie
        if ($this->input->cookie($nombre_cookie)) {

            return array('CODIGO' => TRUE, 'VALOR' => get_cookie($nombre_cookie));
        } else {

            return array('CODIGO' => FALSE, 'MENSAJE' => 'La Cookie no existe');
        }//Fin del if
    }

}
