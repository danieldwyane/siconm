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

class C_registro_oro extends CI_Controller {
    /*
      Descripción: Constructor de la clase principal
     */

    public function __construct() {

        parent::__construct();
        $this->load->helper('cookie');
        $this->load->model('siconm/m_registro_oro');

        $this->CI = & get_instance(); //-> Para obtener una instancia de la variable de sesión
    }

    /*
      Descripción : Método que consulta los datos iniciales.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function data_inicial() {

        $data['tipo_oro'] = $this->m_registro_oro->tipo_oro();
        $data['propietario'] = $this->m_registro_oro->propietario();
        $data['tipo_producto'] = $this->m_registro_oro->tipo_producto();
        $data['unidad_medida'] = $this->m_registro_oro->unidad_medida();
        $data['finalidad'] = $this->m_registro_oro->finalidad();
        $data['tipo_documento'] = $this->m_registro_oro->tipo_documento();
        $data['tipo_boveda'] = $this->m_registro_oro->tipo_boveda();
        $data['empresa'] = $this->m_registro_oro->empresa();

        echo json_encode($data);
    }

    /*
      Descripción : Método que consulta los datos iniciales.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function registro_datos_basicos() {
        
        $codigo = $this->generarCodigo();

        echo json_encode($this->m_registro_oro->registro_datos_basicos($_POST, $_FILES, $codigo));
    }

    /*
      Descripción : Método que consulta los datos iniciales.
      Parametros  : parroquia.
      Retorna     : Nada.
     */

    public function existe_serial() {

        $data['existe'] = $this->m_registro_oro->existe_serial($_POST);

        echo json_encode($data);
    }

    private function generarCodigo() {

        //longitud del codigo aleatorio
        $longitud = 15;
//        substr(md5(microtime()),1,20);
        $key = '';
        $pattern = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $max = strlen($pattern) - 1;
        for ($i = 0; $i < $longitud; $i++) {
            $key .= $pattern{mt_rand(0, $max)};
        }
        return $key;
    }

}
