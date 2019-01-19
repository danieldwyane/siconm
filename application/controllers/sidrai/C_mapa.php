<?php

/*
  NOMBRE		: C_procura.php
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Controlodor para el módulo de registro de la empresa
  AUTOR			: Alexander Guilarte
  FECHA DE CREACIÓN 	: 10/01/2018
 */

/*
  Descripción: Clase principal
 */

class C_mapa extends CI_Controller {
    /*
      Descripción: Constructor de la clase principal
     */

    public function __construct() {

        parent::__construct();
        $this->load->helper('cookie');
        $this->load->model('sidrai/m_mapa');

        $this->CI = & get_instance(); //-> Para obtener una instancia de la variable de sesión
    }
   
    
//    public function __construct() {
//
//        parent::__construct();
//
//        //Cargamos el modelo
//        $this->load->model('empresa_distribucion/mapa_buque/m_mapa_buque');
//    }

    /*
      Descripción : Método que muestra el formulario de solicitud de Fideicomiso.
      Parametros  : Ninguno.
      Retorna     : Llama a una vista.
     */

//    public function form_mapa() {
//
//        $this->load->view("empresa_distribucion/mapa_buque/v_mapa_buque", NULL);
//    }

    public function data_inicial() {

        echo json_encode($this->m_mapa->data_inicial());
    }

//Fin del método data_inicial
    /*     * ************************* */

    /*
      Descripción: Método que obtiene los Municipios del Estado
      Parametros :
      Retorna    : Un array con ID y Nombre de los Municipios
     */

//    public function municipios() {
//
//        echo json_encode($this->m_mapa_panaderia->municipios($_POST['estados']));
//    }
//
////Fin del método municipios
//    /*     * *********************** */
//
//    /*
//      Descripción: Método que obtiene las Parroquias de los Municipios
//      Parametros :
//      Retorna    : Un array con ID y Nombre de las Parroquias
//     */
//
//    public function parroquias() {
//
//        echo json_encode($this->m_mapa_panaderia->parroquias($_POST));
//    }

//Fin del método parroquias
    /*     * *********************** */

    /*
      Descripción: Método que obtiene la data para los filtros de busqueda.
      Parametros : Valores por el método POST de los filtros de busqueda.
      Retorna    : Un array de datos para los combos de los filtros.
     */

    public function filtros() {

        echo json_encode($this->m_mapa_buque->filtros($_POST));
    }

//Fin del método filtros
    /* --------------------- */

    /*
      Descripción: Método que obtiene las marcas de las sucursales para mostrar
      en el mapa.
      Parametros : Los ids asociados a los establecimientos
      Retorna    : Un array con ID, Nombre, Latitud, Longitud y el Icono asociado al
      establecimiento.
     */

    public function marca_sucursales() {

        echo json_encode($this->m_mapa_buque->marca_sucursales($_POST));
    }
    
    public function sucursal() {
//        print_r($_POST);
        $datos['DETALLE_BUQUE'] = $this->m_wds_mapa_buque->sucursal($_POST);
        
        echo json_encode($datos);

    }

//Fin del método establecimientos
    /* ------------------------------- */













    /* ---------------------------------------------------------- */
    /* - Método que lista la información asociada a la sucursal - */
    /* ---------------------------------------------------------- */

    public function info_sucursal() {

        echo $this->m_mapa_panaderia->info_sucursal($_COOKIE);
    }

//Fin del método info_sucursal
    /* --------------------------- */

    /* --------------------------------------------------- */
    /* - Método que muestra el inventario de la sucursal - */
    /* --------------------------------------------------- */

    public function inventario_sucursal() {

        echo $this->m_mapa_panaderia->inventario_sucursal($_COOKIE);
    }

//Fin del método inventario_sucursal
    /* --------------------------------- */

    /* ---------------------------------------------- */
    /* - Método que muestra los filtros de busqueda - */
    /* ---------------------------------------------- */

    public function filtros_busqueda() {

        echo $this->m_mapa_panaderia->filtros_busqueda($_POST);
    }

//Fin del método filtros_busqueda
    /* ------------------------------ */

    /* ------------------------------------------------------- */
    /* - Método que lista las pestañas asociadas al sucursal - */
    /* ------------------------------------------------------- */

    public function pestanas_sucursal() {

        echo $this->m_mapa_panaderia->pestanas_sucursal($_COOKIE);
    }

//Fin del método pestanas_sucursal
    /* ------------------------------- */

    /* ----------------------------------------------------------- */
    /* - Método que lista las zonas activas para los brigadistas - */
    /* ----------------------------------------------------------- */

    public function zonas_activas() {

        echo $this->m_mapa_panaderia->zonas_activas();
    }

//Fin del método zonas_activas
    /* --------------------------- */

    /* -------------------------------------------------------- */
    /* - Método que lista los brigadistas asociados a la zona - */
    /* -------------------------------------------------------- */

    public function zonas_brigadistas() {

        echo $this->m_mapa_panaderia->zonas_brigadistas($_POST);
    }

//Fin del método zonas_brigadistas
    /* ------------------------------- */

    /* --------------------------------------------- */
    /* - Método que lista las zonas a inspeccionar - */
    /* --------------------------------------------- */

    public function ver_zonas() {

        echo $this->m_mapa_panaderia->ver_zonas($_POST);
    }

//Fin del método ver_zonas
    /* ----------------------- */

    /* ----------------------------------- */
    /* - Método que autentica el usuario - */
    /* ----------------------------------- */

    public function autenticar_usuario() {

        echo $this->m_mapa_panaderia->autenticar_usuario($_POST);
    }

//Fin del método autenticar_usuario
    /* -------------------------------- */

    /* ------------------------------------------------------------------------- */
    /* - Método que muestra los datos necesarios para crear una nueva sucursal - */
    /* ------------------------------------------------------------------------- */

    public function datos_crear_sucursal() {

        echo $this->m_mapa_panaderia->datos_crear_sucursal($_POST);
    }

//Fin del método datos_crear_sucursal
    /* ---------------------------------- */

    /* -------------------------------------- */
    /* - Método que crea una nueva sucursal - */
    /* -------------------------------------- */

    public function crear_sucursal() {

        // Evaluo si existe la imagen
        if (isset($_FILES['imagen'])) {

            $imagen = $_FILES['imagen'];
        } else {

            $imagen = array();
        }//Fin del if

        echo $this->m_mapa_panaderia->crear_sucursal($_POST, $imagen);
    }

//Fin del método crear_sucursal
    /* ---------------------------- */

    /* ----------------------------------------------------- */
    /* - Método que lista la información de las votaciones - */
    /* ----------------------------------------------------- */

    public function info_votacion() {

        echo $this->m_mapa_panaderia->info_votacion($_COOKIE);
    }

//Fin del método info_votacion
    /* --------------------------- */

    /* --------------------------------------------------------------------- */
    /* - Método que lista la información de los operativos a cielo abierto - */
    /* --------------------------------------------------------------------- */

    public function info_operativo_cielo_abierto() {

        echo $this->m_mapa_panaderia->info_operativo_cielo_abierto($_COOKIE);
    }

//Fin del método info_operativo_cielo_abierto
    /* ------------------------------------------ */

    /* ---------------------------------------------- */
    /* - Método que lista el detalle de la sucursal - */
    /* ---------------------------------------------- */

    public function detalle_sucursal() {

        echo $this->m_mapa_panaderia->detalle_sucursal($_COOKIE);
    }

//Fin del método detalle_sucursal
    /* ------------------------------ */

    /* --------------------------------------------------------- */
    /* - Método que lista los centros asociados a los sectores - */
    /* --------------------------------------------------------- */

    public function centros_sector() {

        echo $this->m_mapa_panaderia->centros_sector($_POST);
    }

//Fin del método centros_sector
    /* ---------------------------- */

    /* -------------------------------------------------------------------- */
    /* - Método que lista los tipos de sucursales asociadas a los centros - */
    /* -------------------------------------------------------------------- */

    public function tipo_sucursal_centro() {

        echo $this->m_mapa_panaderia->tipo_sucursal_centro($_POST);
    }

//Fin del método tipo_sucursal_centro
    /* ---------------------------------- */

    /* -------------------------------------- */
    /* - Método que lista las localidades 2 - */
    /* -------------------------------------- */

    public function localidades_2() {

        echo $this->m_mapa_panaderia->localidades_2($_POST);
    }

//Fin del método localidades_2
    /* --------------------------- */

    /* -------------------------------------- */
    /* - Método que lista las localidades 3 - */
    /* -------------------------------------- */

    public function localidades_3() {

        echo $this->m_mapa_panaderia->localidades_3($_POST);
    }

//Fin del método localidades_3
    /* --------------------------- */

    /* ------------------------------------------------- */
    /* - Método que asocia los contactos a la sucursal - */
    /* ------------------------------------------------- */

    public function asociar_contactos() {

        echo $this->m_mapa_panaderia->asociar_contactos($_POST);
    }

//Fin del método asociar_contactos
    /* ------------------------------- */

    /* ---------------------------------------------------------------------- */
    /* - Método para que muestra las secciones disponibles para la sucursal - */
    /* ---------------------------------------------------------------------- */

    public function secciones_disponibles() {

        echo $this->m_mapa_panaderia->secciones_disponibles($_POST);
    }

//Fin del método secciones_disponibles
    /* ----------------------------------- */

    /* ------------------------------------------------ */
    /* - Método que asocia las pestañas a la sucursal - */
    /* ------------------------------------------------ */

    public function asociar_secciones() {

        echo $this->m_mapa_panaderia->asociar_secciones($_POST);
    }

//Fin del método asociar_secciones
    /* ------------------------------- */

    /* ---------------------------------------------------- */
    /* - Método que asocia las nueva posición de la marca - */
    /* ---------------------------------------------------- */

    public function guardar_latlng() {

        echo $this->m_mapa_panaderia->guardar_latlng($_POST);
    }

//Fin del método guardar_latlng
    /* ---------------------------- */

    /* ---------------------------------------------------------------------- */
    /* - Método que lista la información asociada a la sucursal para editar - */
    /* ---------------------------------------------------------------------- */

    public function info_editar_sucursal() {

        echo $this->m_mapa_panaderia->info_editar_sucursal($_COOKIE);
    }

//Fin del método info_editar_sucursal
    /* ---------------------------------- */

    /* -------------------------------------------------- */
    /* - Método que edita la información de la sucursal - */
    /* -------------------------------------------------- */

    public function editar_sucursal() {

        // Evaluo si existe la imagen
        if (isset($_FILES['imagen'])) {

            $imagen = $_FILES['imagen'];
        } else {

            $imagen = array();
        }//Fin del if

        echo $this->m_mapa_panaderia->editar_sucursal($_POST, $imagen);
    }

//Fin del método editar_sucursal
    /* ----------------------------- */
}

//Fin de la clase principal
/* ------------------------ */
?>