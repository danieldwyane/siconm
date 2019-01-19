<?php
/*
	NOMBRE				: C_cuenta_usuario.php
	PARÁMETROS			: (none)
	DESCRIPCIÓN			: Controlodor 
	FECHA DE CREACIÓN 	: 05/09/2016
*/

/*
	Descripción: Clase principal. 
*/
class c_cuenta_usuario extends CI_Controller {
    
	/*
      Descripción: Constructor de la clase
    */
    function __construct() {

        parent::__construct();
		
		//Cargamos el modelo
		$this->load->model('intranet/m_cuenta_usuario'); 
		
    }//Fin del contructor de la clase
    /*******************************/
 
    /*
    	Descripción           : Método que muestra la vista de las opciones de cuenta de usuario.
        Parametros de entrada : Ninguno.
        Retorna               : Una vista.
    */
    public function opciones_usuario()
	{
      
		//Cargamos la vista
        $this->load->view("intranet/cuenta_usuario/v_cuenta_usuario", NULL); 
		
    }//Fin del método index
    /*********************/	
	
	/*
		Descripción           : Método que muestra las opciones de la cuenta del usuario.
      	Parametros de entrada : Ninguno.
	*/
	public function log_acceso()
	{

		echo json_encode($this->m_cuenta_usuario->log_acceso($_POST));
		
	}//Fin del método log_acceso
	/**************************/ 
	
	public function datos_usuario()
	{

		echo json_encode($this->m_cuenta_usuario->datos_usuario($_POST));
		
	}//Fin del método log_acceso
	/**************************/ 
	
	public function datos_correo()
	{

		echo json_encode($this->m_cuenta_usuario->datos_correo($_POST));
		
	}//Fin del método log_acceso
	/**************************/ 	
	
	/*
		Descripción           : Método que muestra las opciones de la cuenta del usuario.
      	Parametros de entrada : Ninguno.
	*/
	public function obtener_actual_contrasena()
	{

		echo json_encode($this->m_cuenta_usuario->obtener_actual_contrasena($_POST));
		
	}//Fin del método log_acceso
	/**************************/ 
	
	/*
		Descripción           : Método para guardar la nueva clave del usuario.
      	Parametros de entrada : Ninguno.
	*/	
	public function cambiar_contrasena()
	{
		
		echo json_encode($this->m_cuenta_usuario->cambiar_contrasena($_POST['clave']));
		
	}//Fin del método cambiar_contrasena
	/***********************************/
	     
}//Fin de la clase principal
/**************************/
?>