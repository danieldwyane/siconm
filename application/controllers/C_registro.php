<?php

/*
  NOMBRE		: C_registro.php
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Controlodor para el módulo de registro Test
  @author               : Yubrazka Rondon y Alexander Guilarte
  FECHA DE CREACIÓN 	: 05/01/2018
 */

/*
  Descripción: Clase principal
 */

class C_registro extends CI_Controller {
    /*
      Descripción: Constructor de la clase principal
     */

    public function __construct() {

        parent::__construct();
        $this->load->helper("url");
        $this->load->model('sistemas_prueba/m_registro');
        $this->CI = & get_instance();
    }

    /*
      Descripción : Método select para hacer una consulta
      Parametros  : Ninguno.
      Retorna     : Datos de la consulta
     */

    public function establecimiento() {

        echo json_encode($this->m_registro->establecimiento());
    }

    /*
      Descripción : Método select para hacer una consulta
      Parametros  : id_establecimiento.
      Retorna     : Datos de la consulta
     */

    public function tipo_establecimiento() {

        echo json_encode($this->m_registro->tipo_establecimiento($_POST['id_establecimiento']));
    }

    /*
      Descripción : función que inserta el formulario de registrar usuario.
      Parametros  : 4 parametros.
      Retorna     : array.
     */

    public function insertUsuario() {

        //id del campo de la vista = id del campo de la vista
//        $nombre = $this->input->post('nombre');
//        $telefono = $this->input->post('telefono');
//        $email = $this->input->post('email');
//        $password = $this->input->post('password');

        echo json_encode($this->m_registro->insertUsuario($_POST));
    }

    /*
      Descripción : función que inserta el formulario de establecimiento.
      Parametros  : 2 Parametros.
      Retorna     : array y envie un correo al usuario.
     */

    public function insertEstablecimiento() {

        //Genera el codigo aleatorio por php
        $codigo_alea = $this->generarCodigo();
        //id del campo de la vista = id del campo de la vista
        $establecimiento = $this->input->post('establecimiento');
        $descripcion = $this->input->post('descripcion');

        echo json_encode($this->m_registro->insertEstablecimiento($establecimiento, $descripcion, $codigo_alea));
    }

    /*
      Descripción : función que muestra un reporte de los cupones en un datatables.
      Parametros  : Ninguno.
      Retorna     : Datos.
     */

    public function reporte_cupon() {

        echo json_encode($this->m_registro->reporte_cupon());
    }

    private function generarCodigo() {

        //longitud del codigo aleatorio
        $longitud = 7;

        $key = '';
        $pattern = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $max = strlen($pattern) - 1;
        for ($i = 0; $i < $longitud; $i++) {
            $key .= $pattern{mt_rand(0, $max)};
        }
        return $key;
    }

}
