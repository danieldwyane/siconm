<?php
class Ctr_rep_registrado extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('rem/lista/M_rpt_lista');
        //$this->load->model('reportes/m_rep_registrado');
    }

    public function Index() {
        $this->load->view('reportes/v_rep_registrados');
    }

    public function estadoReporte() {

        $atributos['id'] = $this->m_rep_registrado->registrados($_POST['id']);

//        $metodo        = "pdf"; //metodo del servicio a consultar
//        $rutaJRXML     = "/web/plantillas/"; //ruta del servicio donde esta el jrxml 
//        $rutaPDF       = "/web/reportes/"; //ruta donde deseas crear el pdf en el servidor del servicio
//        $nombreJRXML   = "planillaDenuncia.jasper"; //nombre del .jasper o de jrxml q genera el pdf
//        $nombreReporte = $_POST['id'].".pdf"; //$_POST;
        
        $metodo        = "pdf"; //metodo del servicio a consultar
        $rutaJRXML     = "/web/lista/"; //ruta del servicio donde esta el jrxml 
        $rutaPDF       = "/web/rem/application/images/listas/"; //ruta donde deseas crear el pdf en el servidor del servicio
        $nombreJRXML   = "pruebaA4.jasper"; //nombre del .jasper o de jrxml q genera el pdf
        $nombreReporte = ".pdf"; //$_POST;
        
       // $rutaVirtual   = "http://" . $_SERVER['HTTP_HOST'] . "/SACMA/application/libraries/reclamos/reportes/registrados/" . $nombreReporte;
        $rutaVirtual   = "/rem/applicatio  n/images/listas/" . $nombreReporte;
        $params = array(
            //array("campo" => "id_solicitud", "valor" => $_POST['id'])
        ); //$_POST;
        
        $base = array(
            "driver" => "org.postgresql.Driver",
            "connectString" => "jdbc:postgresql://172.24.70.138:5432/p_recursos_humanos",
            "user" => "rec_hum",
            "password" => "esp4rt4n0s"
        ); //tipo de base de datos        
        $ftp = array(
            //"servidorFtp" => $_SERVER['HTTP_HOST'],
            "servidorFtp" => $_SERVER['HTTP_HOST'],
            "userFtp" => "leonel",
            "PassFtp" => "leoubv",
//            "userFtp" => "desarrollominpal",
//            "PassFtp" => "M1np4l",
            //"rutaFtp" => "/var/www/SACMA/application/libraries/reclamos/reportes/registrados/" //ruta donde se colocar el archivo en la carpeta file
        ); //conexion ftp

        $r = $this->M_reporte->generarReportePdf($metodo, $rutaJRXML, $rutaPDF, $nombreJRXML, $nombreReporte, $params, $base, $ftp, $rutaVirtual);

        echo $r;
    
    }

}



