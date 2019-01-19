<?php
/*
	NOMBRE				: C_calendario.php
	PARÁMETROS			: (none)
	DESCRIPCIÓN			: Controlodor para el módulo de la intranet Calendario
	FECHA DE CREACIÓN 	: 06/09/2016
*/

/*
	Descripción: Clase principal. 
*/
class c_calendario extends CI_Controller
{
    
	/*
    	Descripción: Constructor de la clase
    */
    function __construct()
	{

        parent::__construct();
		
		//Cargamos el modelo
        $this->load->model('intranet/m_calendario');
		
    }//Fin del contructor de la clase
    /*******************************/

    /*
    	Descripción           : Método que muestra el calendario de los cumpleañeros.
        Parametros de entrada : Ninguno.
        Retorna               : Una vista.
    */
    public function cumpleaneros()
	{
      
		//Cargamos la vista
        $this->load->view("intranet/calendario/v_cumpleaneros", NULL); 
		
    }//Fin del método index
    /*********************/
	
	/*
    	Descripción           : Método que obtiene los eventos de cumpleaños.
        Parametros de entrada : Ninguno.
        Retorna               : UN array con las fechas de cumpleaños.
    */
	public function fechas_cumpleanos()
	{
		
		echo json_encode($this->m_calendario->fechas_cumpleanos());
		
	}//Fin del método fechas_cumpleanos
	/*********************************/

}//Fin de la clase principal
/*************************/
?>