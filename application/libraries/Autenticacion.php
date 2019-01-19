<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Autenticacion
{

    public function __construct(){
        $this->CI = & get_instance();
    }

        
    public function login($usuario,$clave){			
        $ldap = new LDAP();
        $ldap->connect();

        $a = $ldap->validateUser($usuario,$clave);
        return $a;               
    }
        
	
    public function logout(){
            $this->CI->session->sess_destroy();
            redirect(base_url());
    }
    
}
