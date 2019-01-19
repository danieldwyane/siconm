<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class My_curl {

    public function __construct(){
        $this->CI = & get_instance();
    }


    public function clienteRest($url, $parametros, $metodo_curl, $funcion, $httpheader) {

        //Inicializamos el curl
        $recurso = curl_init();

        $default_opt = array(   
                                CURLOPT_HEADER         => false,
                                CURLOPT_RETURNTRANSFER => true,
                                CURLOPT_TIMEOUT        => 2,
                                CURLOPT_HTTPHEADER     => $httpheader
                            ); 
 
        switch ( strtoupper($metodo_curl) ) {
            case "POST":

                $options  = array(
                            CURLOPT_URL            => $url . '/' . $funcion,
                            CURLOPT_POST           => true,
                            CURLOPT_POSTFIELDS     => json_encode($parametros)
                        ); 
                break;

            case "GET":

                //Evaluamos si existen parametros
                if ($parametros != NULL) { 
                    $parametros  = '?' . http_build_query($parametros);
                }//Fin

                $options  = array(
                            CURLOPT_URL            => $url . '/' . $funcion . $parametros,
                            CURLOPT_CUSTOMREQUEST  => strtoupper($metodo_curl)
                        );
                break;                                 
        }

        curl_setopt_array($recurso,($options + $default_opt)); 


        //Ejecutamos el curl
        $data = curl_exec($recurso);

        //Cerramos el recurso
        curl_close($recurso);

        if ($httpheader[1] == 'accept:application/json'){
            $data = json_decode($data, true);     
        }
 
        //Retornamos la data  
        return $data;
    }

}
