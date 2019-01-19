<?php

/*
  NOMBRE				: C_aplicaciones.php
  PARÁMETROS			: (none)
  DESCRIPCIÓN			: Controlodor para las aplicaciones de la intranet
  FECHA DE CREACIÓN 	: 13/05/2016
 */

/*
  Descripción: Clase principal.
 */

class c_aplicaciones extends CI_Controller {
    /*
      Descripción: Constructor de la clase
     */

    function __construct() {

        parent::__construct();

        //Cargamos el modelo
        $this->load->model('intranet/M_aplicaciones');

        $this->load->model('webservices/dataservices/intranet/m_wds_aplicaciones'); //Cargamos el modelo
    }

//Fin del contructor de la clase
    /*     * **************************** */

    /*
      Descripción           : Método que muestra los sistemas asociados.
      Parametros de entrada : Ninguno.
      Retorna               : Una vista.
      Autor                 : Maylin Sojo.
     */

    public function form_sistemas() {

        $this->load->view("intranet/aplicaciones/v_sistemas", NULL);
    }

//Fin de la función
    /*     * *************** */

    /*
      Descripción           : Método que obtiene los sistemas asociados del usuario.
      Parametros de entrada : Ninguno.
      Retorna               : Un array con los datos de los sistemas.
      Autor                 : Maylin Sojo y Jose Daniel Buitragos
     */

    public function sistemas_asociados() {

        echo json_encode($this->M_aplicaciones->sistemas_asociados($_POST));
    }

//Fin del método sistemas_asociados
    /*     * ****************************** */


    /*
      Descripción           : Método que muestra el sistema seleccionado por el usuario.
      Parametros de entrada : El id del sistema path.
      Retorna               : Un array con la data del sistema seleccionado.
     */

    public function abrir_sistema() {

        echo json_encode($this->M_aplicaciones->abrir_sistemas($_POST['id_sistema']));
    }

//Fin del método abrir_sistema
    /*     * ************************** */

    /*
      Descripción           : Método que muestra una vista para dar permisos a los usuarios sobre
      los sistemas existentes y activos.
      Parametros de entrada : Ninguno.
      Retorna               : Una vista.
      Autor                 : David Molina y Alexander Guilarte.
     */

    public function form_permiso_sistema() {

        $this->load->view("intranet/aplicaciones/v_permiso_sistema", NULL);
    }

//Fin del método form_permiso_sistema
    /*     * ********************************* */

    /*
      Descripción           : Método que obtiene todos los usuarios activos.
      Parametros de entrada : Ninguno.
      Retorna               : Un array con el ID y el CÓDIGO del usuario.
      Autor                 : David Molina y Alexander Guilarte.
     */

    public function usuarios_activos() {

        echo json_encode($this->M_aplicaciones->usuarios_activos());
    }

//Fin del método usuarios_activos
    /*     * ***************************** */

    /*
      Descripción           : Método que obtiene los sistemas_asociados por usuarios.
      Parametros de entrada : Ninguno.
      Retorna               : Un array con el ID y el CÓDIGO del usuario.
      Autor                 : David Molina y Alexander Guilarte.
     */

    public function sistemasAsociados() {

        echo json_encode($this->M_aplicaciones->sistemasAsociados($_POST['id_usuario']));
    }

//Fin del método sistemas_asociados
    /*     * ******************************* */

    /*
      Descripción           : Método que obtiene los sistemas por asociar de cada usuario.
      Parametros de entrada : Ninguno.
      Retorna               : Un array con el ID y el CÓDIGO del usuario.
      Autor                 : David Molina y Alexander Guilarte.
     */

    public function sistemas_por_asociar() {

        echo json_encode($this->M_aplicaciones->sistemas_por_asociar($_POST['id_usuario']));
    }

//Fin del método sistemas por asociar
    /*     * ********************************* */

    /*
      Descripción: Método que asocia los menus seleccionados a los usuarios
      Parametros : Los ids de los menus seleccionados
      Retorna    : array de datos con el código de respuesta
     */

    public function asociar_menu() {

        echo json_encode($this->m_wds_aplicaciones->asociar_menu($_POST));
    }

//Fin del método asociar_menu
    /*     * ************************* */

    /*
      Descripción: Método que elimina un menu seleccionado
      Parametros : Dos parametros por POST id_usuario y id_menu
      Retorna    : CODIGO_RESPUESTA:1 exitoso
     */

    public function desasociar_menu() {

        echo json_encode($this->m_wds_aplicaciones->desasociar_menu($_POST));
    }

//Fin del método desasociar menu
    /*     * **************************** */

    /*
      Descripción: Método que muestra la leyenda asociada al sistema proximo a ser liberado
      Parametros : El id del sisstema
      Retorna    : Array con el la leyenda del sistema
     */

    public function leyenda_sistema() {

        echo json_encode($this->M_aplicaciones->leyenda_sistema($_POST));
    }

//Fin del método leyenda_sistema
    /*     * **************************** */
}

//Fin de la clase principal
/* * *********************** */
?>