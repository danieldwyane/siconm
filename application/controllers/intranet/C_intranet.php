<?php
/*
	NOMBRE				: C_intranet.php
	PARÁMETROS			: (none)
	DESCRIPCIÓN			: Controlodor para la intranet de MINPAL
	FECHA DE CREACIÓN 	: 28/04/2016
*/

/*
	Descripción: Clase principal. 
*/
class c_intranet extends CI_Controller
{
    
    /*
      Descripción: Constructor de la clase
     */

    function __construct() {

        parent::__construct();
        
        /* Cargar librerias estandar */
        $this->load->helper('url');
        $this->load->helper('cookie');
        
        //Cargamos el modelo
        $this->load->model('intranet/m_intranet');
        
        $this->CI = & get_instance(); //-> Para obtener una instancia de la variable de sesión
    }

    //Fin del contructor de la clase
    /*     * **************************** */

    /*
    	Descripción           : Método que muestra el indice de la aplicación.
        Parametros de entrada : Ninguno.
        Retorna               : Una vista.
    */
    public function index()
	{
      
		//Cargamos la vista
        $this->load->view("intranet/v_index", NULL); 
		
    }//Fin del método index
    /*********************/

    /*
    	Descripción           : Método que valida la cuenta del usuario.
        Parametros de entrada : Ninguno.
		Retorna               : Un array con el código de respuesta de usuario válido o inválido.
    */	
//	public function validar_cuenta()
//	{
//
//        echo json_encode($this->m_intranet->validar_cuenta($_POST));
//		
//    }
    public function validar_cuenta() {



        // validate the ReCaptcha, if something is wrong, we throw an Exception, 
        // i.e. code stops executing and goes to catch() block
//        if (empty($_POST['g_recaptcha_response'])) {
//            echo json_encode(array('CODIGO_RESPUESTA' => FALSE, 'RESPUESTA' => 'Debe validar el captcha'));
//        } else {
//
//            $recaptcha = $_POST['g_recaptcha_response'];
//            $response = $this->recaptcha->verifyResponse($recaptcha);
//
//            if ($response['success'] === true) {

                echo json_encode($this->m_intranet->validar_cuenta($_POST));
//            }
//        }
    }

    //Fin del método validar_cuenta
	/******************************/
	
    /*
    	Descripción           : Método que valida la contraseña del usuario.
        Parametros de entrada : Ninguno.
    */	
    public function validar_clave(){
		
        echo json_encode($this->m_intranet->validar_clave($_POST));

    }//Fin del método validar_clave
    /*****************************/
	
    
    /*
    	Descripción           : Método que valida la contraseña del usuario.
        Parametros de entrada : Ninguno.
    */	
    public function verificar_session(){
//echo 'hola';
//exit(0);
        echo json_encode($this->validar_session());

    }//Fin del método validar_clave
	/*****************************/
    
    
    /*
      Descripción           : Método que valida la contraseña del usuario.
      Parametros de entrada : Ninguno.
     */

    public function validar_session() {
        $nombre_usuario = array();
                
        //Verificamos si las cookies existen
//        $cookies = $this->valor_cookie('ID_USUARIO');
        $cookies = $this->valor_cookie('CODIGO_USUARIO');
//        print_r($cookies);
//        exit(0);
        //Evaluamos el código
        if ($cookies['CODIGO']) {

            //Obtengo el nombre del usuario
//            $nombre_usuario = $this->m_intranet->nombre_usuario($cookies['VALOR']);

            //Obtengo los menus asociados
            $menu_usuario = $this->m_intranet->menu_usuario($cookies['VALOR'], 3);
//            print_r($menu_usuario);
            return array('CODIGO' => TRUE, 'NOMBRE_USUARIO' => 1, 'PERMISOS' => $menu_usuario);
        } else {

            return array('CODIGO' => FALSE);
        }//Fin del if
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
    
    
    /*
      Descripción           : Método que obtiene el nombre del usuario.
      Parametros de entrada : El id del usuario y el id del tipo de usuario.
      Retorna               : El nombre del usuario.
     */

    private function nombre_usuario($id_usuario) {

        $data = array('ID_USUARIO' => $id_usuario);

        //Obtenemos el array que nos indica si la cuenta es válida o no
        $datos = $this->servicio_rest($this->url_dss_rest, $data, 'POST', 'nombre_usuario', NULL);

        return $datos;
    }

//Fin del método nombre_usuario
    /*     * *************************** */
	
    
    /*
            Descripción           : Método que cierra la sesión del usuario.
    Parametros de entrada : Ninguno.
    */
    public function cerrar_session(){

            echo json_encode($this->m_intranet->cerrar_session());

    }//Fin del método cerrar_session
    /******************************/

    
    /*
            Descripción           : Método que obtiene el listado de los usuario por desactivar.
    Parametros de entrada : Ninguno.
            Retorna               : Un array con el listao de usuario por desactivar.
    */
    public function usuario_por_desactivar(){

            echo json_encode($this->m_intranet->usuario_por_desactivar());

    }//Fin del método usuario_por_desactivar
    /**************************************/
        
    
    /*
        Descripción           : Método que obtiene el listado de los usuarios nuevos.
        Parametros de entrada : Ninguno.
        Retorna               : Un array con el listado de usuario nuevos.
    */
    public function nuevos_usuarios(){

            echo json_encode($this->m_intranet->nuevos_usuarios());

    }//Fin del método nuevos_usuarios
    /*******************************/

}//Fin de la clase principal
/*************************/
?>