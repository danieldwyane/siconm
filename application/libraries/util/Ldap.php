<?php
/**
 * LDAP class file.
 *
 * @package App_Code
 */

/**
 * Clase LDAP
 *
 * Esta clase se encarga de manejar los datos que se encuentran en un servidor LDAP.
 * 
 * @package App_Code
 * 
 */
	class Ldap
	{
		/**
		 * Direcci�n del servidor LDAP
		 *
		 * @var string
		 */
		private $_serverAddress;
		
		/**
		 * Recurso de la conexi�n.
		 *
		 * @var resource
		 */
		private $_result;
		
		/**
		 * Nombre distinguido del servidor LDAP.
		 *
		 * @var string
		 */
                private $_dnBase;
                
                private $_ldappass;


		/**
		 * Constructor de la clase	
		 */
		public function __construct()
		{	
			//$this->CI = & get_instance();
			$this->_serverAddress = '10.17.2.202';
			$this->_dnBase = "cn=lector.sistemas,ou=Users,dc=minpal,dc=gob,dc=ve";
                        $this->_ldappass = 'Syst3m$l!miTad0';
		}
		
		/**
		 * Realiza la conexion con le servidor LDAP
		 * @return boolean Verdadero o falso, como resultado de la conexi�n. 
		 */
		public function connect()
		{
			$this->_result=ldap_connect($this->_serverAddress);
			ldap_set_option($this->_result, LDAP_OPT_PROTOCOL_VERSION, 3);
			if($this->_result){
                            
                            
                                $bind = ldap_bind($this->_result, $this->_dnBase, $this->_ldappass);

				//$bind=ldap_bind($this->_result);
				if($bind){
					return true;
                                }
				return false;
			}
			else {
				return false;
                        }
		}
		
		/**
		 * Consulta al servidor LDAP por la existencia de un usuario en la base de datos.
		 * 
		 * @param integer $uid Identificador del usuario. 
		 * @return boolean Verdadero o falso, como resultado de la busqueda.
		 */
		public function searchForUser($uid)
		{
			$found = false;
			$sr = ldap_search($this->_result, "ou=Users,dc=minpal,dc=gob,dc=ve", '(&(uid='.$uid.')(objectclass=inetOrgPerson))');
			$numEntries = ldap_count_entries($this->_result, $sr);
			if($numEntries > 0)
			{
				$entries = ldap_get_entries($this->_result, $sr);
				//print_r($entries);
				
				if($entries["count"] > 0)
					$found = true;
			}

			return $found;
		}
		
		/**
		 * Verifica la veracidad de un usuario con su contrase�a.	
		 * 
		 * @param string $user Nombre del usuario.
		 * @param string $password Contrase�a del usuario.
		 * @return boolean Verdadero o falso, como resultado de la busqueda.
		 */
		public function validateUser($user, $password)
		{
			$match = false;
			//$sr = ldap_search($this->_result, $this->_dnBase, '(&(uid='.$user.')(objectclass=inetOrgPerson))');
			//$numEntries = ldap_count_entries($this->_result, $sr);
                        $sr = ldap_search($this->_result, "ou=Users,dc=minpal,dc=gob,dc=ve", '(&(uid='.$user.')(objectclass=inetOrgPerson))');
			$numEntries = ldap_count_entries($this->_result, $sr);

			if($numEntries > 0)
			{
				$entries = ldap_get_entries($this->_result, $sr);
				
				if($entries["count"] > 0)
				{
					$validate = @ldap_bind($this->_result, $entries[0]["dn"], $password);
					if($validate)
					{
						$match = true;
					}
				}
			}
			
			return $match;
		}
		
		/**
		 * Obtiene el nombre completo de un usuario.
		 *
		 * @param string $user Nombre del usuario.
		 * @return string Nombre completo del usuario.
		 */
		public function queryForName($user)
		{
			$name = NULL;
			$sr = ldap_search($this->_result, $this->_dnBase, '(&(uid='.$user.')(objectclass=inetOrgPerson))');
			$numEntries = ldap_count_entries($this->_result, $sr);
			if($numEntries > 0)
			{
				$entries = ldap_get_entries($this->_result, $sr);
				if($entries["count"] > 0)
					$name = $entries[0]['cn'][0];
					//$name = $entries[0]['dn'];
			}
			return $name;
		}
		
		/**
		 * Obtiene la direccion de email de un usuario.
		 *
		 * @param string $user Nombre de usuario.
		 * @return string Direccion de email del usuario.
		 */
		public function queryForEmail($user)
		{
			$name = NULL;
			$sr = ldap_search($this->_result, $this->_dnBase, '(&(uid='.$user.')(objectclass=inetOrgPerson))');
			$numEntries = ldap_count_entries($this->_result, $sr);
			if($numEntries > 0)
			{
				$entries = ldap_get_entries($this->_result, $sr);
				if($entries["count"] > 0)
					$name = $entries[0]['mail'][0];
			}
			return $name;
		}
		
		
		public function queryForCedula($user)
		{
			$ced = NULL;
			$sr = ldap_search($this->_result, $this->_dnBase, '(&(uid='.$user.')(objectclass=inetOrgPerson))');
			$numEntries = ldap_count_entries($this->_result, $sr);
			if($numEntries > 0)
			{
				$entries = ldap_get_entries($this->_result, $sr);
				if($entries["count"] > 0)
					$ced = $entries[0]['carlicense'][0];
			}
			return $ced;
		}
		
		

		/**
		 * Obtiene los nombres completos de los usuarios del directorio.
		 *
		 * @return array Unua lista con los nombres completos de todos los usuarios del directorio.
		 */
		public function queryForAllName()
		{
			$name = NULL;
			$sr = ldap_search($this->_result, $this->_dnBase, '(&(objectclass=inetOrgPerson))');
			$numEntries = ldap_count_entries($this->_result, $sr);
			if($numEntries > 0)
			{
				$entries = ldap_get_entries($this->_result, $sr);
				if($entries["count"] > 0)
				{
					for($i=0;$i<$entries["count"];$i++)
					{
						$name[$i] = $entries[$i]['cn'][0];
					}
				}
			}
			return $name;
		}
		
		/**
		 * Obtiene las direcciones de email de los todos usuarios del directorio.
		 *
		 * @return array Unua lista con las direcciones de email de todos los usuarios del directorio.
		 */
		public function queryForAllEmail()
		{
			$name = NULL;
			$sr = ldap_search($this->_result, $this->_dnBase, '(&(objectclass=inetOrgPerson))');
			$numEntries = ldap_count_entries($this->_result, $sr);
			if($numEntries > 0)
			{
				$entries = ldap_get_entries($this->_result, $sr);
				if($entries["count"] > 0)
				{
					for($i=0;$i<$entries["count"];$i++)
					{
						$name[$i] = $entries[$i]['mail'][0];
					}	
				}
					
			}
                        //print_r($name);
			return $name;
		}
		
		/**
		 * Obtiene los nombres de todos los grupos del directorio.
		 *
		 * @return array Unua lista con los nombres de todos los grupos del directorio.
		 */
		public function queryForAllGroup()
		{
			$name = NULL;
			$sr = ldap_search($this->_result, $this->_dnBase, '(&(objectclass=inetOrgPerson))');
			$numEntries = ldap_count_entries($this->_result, $sr);
			if($numEntries > 0)
			{
				$entries = ldap_get_entries($this->_result, $sr);
				if($entries["count"] > 0)
				{
					for($i=0;$i<$entries["count"];$i++)
					{
						$trozo = explode (',', $entries[$i]['dn']);
						$otro = explode('=', $trozo[1]);
						$name[$i] = $otro[1];
					}	
				}
					
			}
			return $name;
		}		
		
		/**
		 * Obtiene los nombres de todos los usuarios del directorio.
		 *
		 * @return array Unua lista con los nombres de todos los usuarios del directorio.
		 */
		public function queryForAllUsers()
		{
			$users = NULL;
			$sr = ldap_search($this->_result, $this->_dnBase, '(&(objectclass=inetOrgPerson))');
			$numEntries = ldap_count_entries($this->_result, $sr);
			if($numEntries > 0)
			{
				$entries = ldap_get_entries($this->_result, $sr);
				if($entries["count"] > 0)
				{
					for($i=0;$i<$entries["count"];$i++)
					{
						$users[$i] =  $entries[$i]['uid'][0];
					}	
				}
					
			}
			return $users;
		}
				
		/**
		 * Cierra la conexi�n entre el servidor LDAP.
		 *
		 */
		public function disconnect()
		{
			ldap_close($this->_result);
		}


                /**
		 * Obtiene los telefonos de los todos usuarios del directorio.
		 *Jose Osorio
		 * @return array Unua lista con los telefonos de todos los usuarios del directorio.
		 */
		public function queryForAllPhone()
		{
			$name = NULL;
			$sr = ldap_search($this->_result, $this->_dnBase, '(&(objectclass=inetOrgPerson))');
			//print_r($sr);
                        $numEntries = ldap_count_entries($this->_result, $sr);
			if($numEntries > 0)
			{
				$entries = ldap_get_entries($this->_result, $sr);
                                //print_r($entries);
				if($entries["count"] > 0)
				{
					for($i=0;$i<$entries["count"];$i++)
					{
						$name[$i] = $entries[$i]['telephonenumber'][0];
					}
				}

			}
                        //print_r($name);
			return $name;
		}
	}



?>
