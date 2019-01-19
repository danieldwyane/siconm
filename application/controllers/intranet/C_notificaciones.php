<?php
/*
	NOMBRE				: C_notificaciones.php
	PARÁMETROS			: (none)
	DESCRIPCIÓN			: Controlodor para la intranet de MINPAL
	FECHA DE CREACIÓN 	: 02/11/2016
*/

/*
	Descripción: Clase principal. 
*/
class c_notificaciones extends CI_Controller
{
    
	/*
    	Descripción: Constructor de la clase
    */
    function __construct()
	{

        parent::__construct();
		
		//Cargamos el modelo
        $this->load->model('intranet/m_notificaciones');
		
    }//Fin del contructor de la clase
    /*******************************/
	
    /*
    	Descripción           : Método que carga la vista de las notificaciones del usuario.
        Parametros de entrada : Ninguno.
        Retorna               : Una vista.
    */
    public function notificaciones()
	{
      
		//Cargamos la vista
        $this->load->view("intranet/notificaciones/v_notificaciones", NULL); 
		
    }//Fin del método index
    /*********************/		
	
    /*
    	Descripción           : Método que .
        Parametros de entrada : Ninguno.
		Retorna               : Un array .
    */	
	public function listanotificaciones()
	{

		$notificaciones = $this->m_notificaciones->listarNotificacionesUsuario();
		
		echo json_encode($notificaciones);
		
    }//Fin del método listanotificaciones
	/*************************************/	
	
	
	public function actualizaEstatus()
	{

		$actualizaEstatus = $this->m_notificaciones->actualizaEstatus($_POST['id']);
		
		echo json_encode($actualizaEstatus);
		
	}//Fin del método actualizaEstatus
	/*********************************/	

}//Fin de la clase principal
/*************************/
?>