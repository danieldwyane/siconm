<?php
class M_reporte extends CI_Model{
    
    
    public function __construct(){
         parent::__construct();
        //$this->load->library('rest');
	//$this->output->set_header("'Content-Type' content='text/html; charset=iso-8859-1'");//Setear el charset a español
        //$this->configServiceRest = array('server' => 'http://10.17.2.123:9764/minpalReport_1.0.0/services/reporte_service_impl/report/');
    }      
    //put your code here
    
    public function generarReportePdf($metodo, $rutaJRXML, $rutaPDF, $nombreJRXML, $nombreReporte, $params, $base, $ftp,$rutaVirtual){
       
        $lista = array(
            "rutaJRXML"     => $rutaJRXML,
            "rutaPDF"       => $rutaPDF,
            "nombreJRXML"   => $nombreJRXML,
            "nombreReporte" => $nombreReporte,
	    "rutaVirtual"   => $rutaVirtual,
            "params"        => $params,
            "Base"          => $base,
            "Ftp"           => $ftp
        );
        
        
//        $request = array(
//            "ListaParametros" => $lista
//        );
             
             $ch = curl_init();  
             //curl_setopt($ch, CURLOPT_URL, "http://10.17.2.123/minpalReport_1.0.0/services/reporte_service_impl/report/".$metodo); 
             curl_setopt($ch, CURLOPT_URL, "http://172.24.70.143/minpalReport_1.0.0/reporte/".$metodo);
             curl_setopt($ch, CURLOPT_HEADER, false);
             curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type:application/json"));
             //curl_setopt($ch, CURLOPT_PORT, '9763');
             curl_setopt($ch, CURLOPT_PORT, '9443');
             curl_setopt($ch, CURLOPT_POST, true);  
             curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($request));  
             curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);  
             $data = curl_exec($ch); 
             //curl_error($ch);
             print_r($data);  
             exit();
             curl_close($ch);

             return $data;
             
    }
    
   
     function cliente(){
            $this->rest->initialize($this->configServiceRest);

		$resultado = $this->rest->get('lista',array(''));
	    
                //echo '?autenticar?usuario='.$usuario.'&clave='.$clave;
                //exit();
		print_r($resultado);
        }
    
}

