<?php

/*
  NOMBRE		: M_intranet.php
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Modelo para la intranet de MINPAL
  AUTOR			: David Molina
  FECHA DE CREACIÓN 	: 28/04/2016
 */

/*
  Descripción: Clase principal.
 */

class m_intranet extends CI_Model {
    /*
      Descripción: Constructor de la clase
     */

    public function __construct() {

        parent::__construct();

        /* Cargar modelos de microservicios */
//        $this->load->library('my_curl');
        $this->vuce = $this->load->database('vuce', TRUE);

        //Cargamos el helper de la cookie
//        $this->load->helper('cookie');
        //Url del Data Services Server
//        $this->load->model('webservices/ruleservices/intranet/m_wrs_intranet'); //Cargamos el modelo
//        $this->load->model('webservices/dataservices/intranet/m_wds_intranet'); //Cargamos el modelo
    }

    /*
      Descripción: Método que invoca un servicio web
      Parametros : Url del servicios web y los parametros
      Retorna    : Un array de datos.
     */

    private function servicio_rest($url, $parametros = NULL, $metodo_curl, $funcion, $puerto = 80) {

        //Inicializamos el curl
        $recurso = curl_init();

        //Evaluamos el método de consumo
        if (strtoupper($metodo_curl) == 'POST') {

            $met = CURLOPT_POST;

            //Opciones del curl
            curl_setopt($recurso, CURLOPT_URL, $url . '/' . $funcion);
            curl_setopt($recurso, CURLOPT_POSTFIELDS, json_encode($parametros));
        } elseif (strtoupper($metodo_curl) == 'PUT') {

            $met = CURLOPT_PUT;
        } elseif (strtoupper($metodo_curl) == 'GET') {

            //Evaluamos si existen parametros
            if ($parametros != NULL) {

                $parametros = '?' . http_build_query($parametros);
            }//Fin del if

            $met = CURLOPT_CUSTOMREQUEST;

            //Opciones del curl
            curl_setopt($recurso, CURLOPT_URL, $url . '/' . $funcion . $parametros);
        } elseif (strtoupper($metodo_curl) == 'DELETE') {

            $met = CURLOPT_CUSTOMREQUEST;
        } else {

            return "error con el metodo";
        }//Fin del if
        //Opciones del curl
        curl_setopt($recurso, CURLOPT_HEADER, false);
        curl_setopt($recurso, CURLOPT_HTTPHEADER, array("Content-Type:application/json", "accept:application/json"));
        curl_setopt($recurso, CURLOPT_PORT, $puerto);
        curl_setopt($recurso, $met, true);
        curl_setopt($recurso, CURLOPT_RETURNTRANSFER, true);

        //Ejecutamos el curl
        $data = curl_exec($recurso);

        //Cerramos el recurso
        curl_close($recurso);

        //Retornamos la data 
        return json_decode($data, true);
    }

    /*
      Funcion que devuelve un array con los valores:
      os => sistema operativo
      browser => navegador
      version => version del navegador
     */

    private function obtener_navegador() {

        $browser = array("IE", "OPERA", "MOZILLA", "NETSCAPE", "FIREFOX", "SAFARI", "CHROME");

        $os = array("WIN", "MAC", "LINUX");

        # definimos unos valores por defecto para el navegador y el sistema operativo
        $info['browser'] = "OTHER";

        $info['os'] = "OTHER";

        # buscamos el navegador con su sistema operativo
        foreach ($browser as $parent) {
            $s = strpos(strtoupper($_SERVER['HTTP_USER_AGENT']), $parent);

            $f = $s + strlen($parent);

            $version = substr($_SERVER['HTTP_USER_AGENT'], $f, 15);

            $version = preg_replace('/[^0-9,.]/', '', $version);

            if ($s) {
                $info['browser'] = $parent;

                $info['version'] = $version;
            }
        }

        # obtenemos el sistema operativo
        foreach ($os as $val) {
            if (strpos(strtoupper($_SERVER['HTTP_USER_AGENT']), $val) !== false)
                $info['os'] = $val;
        }
        # devolvemos el array de valores

        return $info;
    }

    /*
      Obtenemos la ip del usuario que se loguea
     */

    private function obtener_ip_usuario() {

        if (isset($_SERVER["HTTP_CLIENT_IP"])) {
            return $_SERVER["HTTP_CLIENT_IP"];
        } elseif (isset($_SERVER["HTTP_X_FORWARDED_FOR"])) {
            return $_SERVER["HTTP_X_FORWARDED_FOR"];
        } elseif (isset($_SERVER["HTTP_X_FORWARDED"])) {
            return $_SERVER["HTTP_X_FORWARDED"];
        } elseif (isset($_SERVER["HTTP_FORWARDED_FOR"])) {
            return $_SERVER["HTTP_FORWARDED_FOR"];
        } elseif (isset($_SERVER["HTTP_FORWARDED"])) {
            return $_SERVER["HTTP_FORWARDED"];
        } else {
            return $_SERVER["REMOTE_ADDR"];
        }
    }

    /*
      Descripción           : Método que valida la cuenta del usuario.
      Parametros de entrada : La cuenta del usuario.
      Retorna               : Un array con el código de respuesta de usuario válido o inválido.
     */

    public function validar_cuenta($cuenta) {

        //Desgloso la $cuenta para poder obtener una cuenta válida para el ldap
        $cuenta_ldap = explode("@", $cuenta['cuenta']);
        $cuenta_ldap = array('cuenta' => $cuenta_ldap[0]);

        //Obtenemos el array que nos indica si la cuenta es válida o no en el LDAP
        $respuesta = $this->servicio_rest($this->rss_ldap, $cuenta_ldap, 'POST', 'validar_cuenta', NULL);

        //Evaluo si no existe en el LDAP
        if (!$respuesta['CODIGO_RESPUESTA']) {
            //Obtenemos el array que nos indica si la cuenta es válida o no en la intranet
            $respuesta = $this->m_wrs_intranet->validar_cuenta($cuenta['cuenta']);
            //Indico que es un usuario que no está en el LDAP
            $respuesta['USUARIO_LDAP'] = 0;

            return $respuesta;
        } else {

            //Indico que es un usuario en el LDAP
            $respuesta['USUARIO_LDAP'] = 1;

            return $respuesta;
        }//Fin del if !$respuesta['CODIGO']
    }

    /*
      Descripción           : Método que valida la clave del usuario.
      Parametros de entrada : La cuenta del usuario, contraseña usuario.
      Retorna               : Un array con el código de respuesta de la clave.
     */

    public function validar_clave($parametros) {

        $sql = "SELECT u.clave clave_usuario,
                       u.id_usuario id_usuario,
                       u.codigo_usuario codigo_usuario
                    FROM usuario.usuario u 
                    WHERE u.codigo_usuario = '" . $parametros['usuario'] . "'";

        //Ejecutamos la consulta
        $recurso = $this->vuce->query($sql);

        //Obtenemos los resultados
        $data = $recurso->row_array();

//        $clave = base64_encode($parametros['clave']);
//
//        //Validamos la clave
//        $validar_clave = $this->verificar_clave_usuario($data['clave_usuario'], $clave);
//
//        //Evaluamos
//        if ($validar_clave['CODIGO_RESPUESTA']) {
//
//            $validar_clave['ID_USUARIO'] = $data['id_usuario'];
//            $validar_clave['CODIGO_USUARIO'] = $data['codigo_usuario'];
//        }//Fin del if
//        return $validar_clave;
        return $data;

//        $resultado = array();
//        $parametros = array();
//
//        $parametros['usuario'] = $param['usuario'];
//
//        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), $parametros, 'GET', 'validarClave', array("", "accept:application/json"));
//
//        return $resultado;
    }

    //Fin del método validar_clave
    /*     * ************************** */


    /*
      Descripción           : Método que obtiene el nombre del usuario.
      Parametros de entrada : El id del usuario y el id del tipo de usuario.
      Retorna               : El nombre del usuario.
     */

    public function nombre_usuario($id_usuario) {

        $resultado = array();
        $parametros = array('id_usuario' => $id_usuario);

        //Obtenemos el array que nos indica si la cuenta es válida o no
        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), $parametros, 'GET', 'getUsuarioById', array("", "accept:application/json"));

        return $resultado;
    }

    /*
      Descripción           : Método que verifica la clave del usuario.
      Parametros de entrada : La contraseña proveniente de la base de datos, contraseña proveniente
      del formulario.
      Retorna               : Array con un booleano.
     */

    private function verificar_clave_usuario($clave_bd, $clave_form) {

        //Le damos tratamiento a la contraseña de la BD
        $salt = substr(base64_decode(substr($clave_bd, 6)), 20);

        //Encripto la clave del formulario
        $clave_encriptada = base64_encode(sha1(base64_decode($clave_form) . $salt, TRUE) . $salt);

        //Evaluamos el tipo de encriptación
        if (strpos($clave_bd, 'SSHA')) {

            $clave_encriptada = '{SSHA}' . $clave_encriptada;
        } else if (strpos($clave_bd, 'SHA')) {

            $clave_encriptada = '{SHA}' . $clave_encriptada;
        } else if (strpos($clave_bd, 'MD5')) {

            $clave_encriptada = '{MD5}' . $clave_encriptada;
        } else {

            $clave_encriptada = md5(base64_decode($clave_form));
        }//Fin del if
        //Evaluo las contraseñas
        if ($clave_bd === $clave_encriptada) {

            return array('CODIGO_RESPUESTA' => true, 'MENSAJE_RESPUESTA' => 'Clave correcta');
        } else {

            return array('CODIGO_RESPUESTA' => false, 'MENSAJE_RESPUESTA' => 'Clave incorrecta');
        }//Fin del if
    }

    /*
      Descripción           : Método que obtiene los menus asociados al usuario.
      Parametros de entrada : El id del usuario y el id del sistema.
      Retorna               : Un array con los modulos y menus.
     */

    public function menu_usuario($id_usuario, $id_sistema) {

        //Consulta
        $sql = "SELECT DISTINCT(me.descripcion) nombre_menu,
					   mo.descripcion nombre_modulo,
					   mo.id_modulo id_modulo,
					   me.id_menu id_menu,
					   me.path ruta_menu,
					   mo.icono icono_modulo,
                       si.id_sistema id_sistema,
                       si.descripcion nombre_sistema,
					   si.icono icono_sistema,
                       mo.pronto pronto,
					   mo.nuevo nuevo,
                       si.orden, mo.orden, me.orden
                        FROM  usuario.usuario_rol ur
                        INNER JOIN usuario.rol_menu rm
                        ON ur.id_rol = rm.id_rol
                        INNER JOIN usuario.menu me 
                        ON rm.id_menu = me.id_menu
                        INNER JOIN usuario.modulo mo 
                        ON me.id_modulo = mo.id_modulo
                        INNER JOIN usuario.sistema si 
                        ON mo.id_sistema = si.id_sistema
                        WHERE ur.codigo_usuario = '" . $id_usuario . "'
                        AND me.id_estatus = '1'
                        AND mo.id_estatus = '1' 
                        ORDER BY si.orden, mo.orden, me.orden ASC";

        //Ejecutamos la consulta
        $recurso = $this->vuce->query($sql);

        //Obtenemos los resultados
        $data = $recurso->result_array();

        return $data;

//        $resultado = array();
//        $parametros = array('id_usuario' => $id_usuario, 'id_sistema' => $id_sistema);
//
//        //Obtenemos el array que nos indica si la cuenta es válida o no
//        $resultado = $this->my_curl->clienteRest($this->config->item('url_api'), $parametros, 'POST', 'cargarMenu', array("Content-Type:application/json", "accept:application/json"));
//
//        return $resultado;
    }

    /*
      Descripción           : Método que valida la cuenta del usuario.
      Parametros de entrada : Ninguno.
      Retorna               : Un array con el código de respuesta de usuario válido o inválido.
     */

    public function usuario_por_desactivar() {

        //Obtenemos el array con los usuario egresados del sigefirrhh
        $egresos = $this->servicio_rest($this->dss_sigefirrhh, NULL, 'GET', 'egresos', NULL);

        //Obtenemos los usuarios activos del LDAP
        $usuarios_activos = $this->servicio_rest($this->dss_ldap, NULL, 'GET', 'usuarios_activos', NULL);

        //Variable que contendrá los usuarios por desactivar
        $usuarios_por_egresar = NULL;
        $i = 0;

        //Recorremos los egresos
        foreach ($egresos as $egreso) {

            //Recorremos los usuarios activos
            foreach ($usuarios_activos as $usuario_activo) {

                //Evaluamos si existe un egreso activo en el LDAP
                if ($egreso['cedula'] == $usuario_activo['NUM_IDENTIFICACION']) {

                    $usuarios_por_egresar[$i] = array('CEDULA' => $egreso['cedula'],
                        'USUARIO' => $usuario_activo['CODIGO'],
                        'CORREO' => $usuario_activo['CORREO'],
                        'DEPENDENCIA' => $egreso['dependencia'],
                        'NOMBRE' => $egreso['apellidos_nombres'],
                        'FECHA_EGRESO' => $egreso['fecha_egreso']
                    );

                    $i++;
                }//Fin del if
            }//Fin del foreach $usuarios_activos
        }//Fin del foreach $egresos
        //Evaluo si existe al menos uno
        if (count($usuarios_por_egresar) > 0) {

            //Armamos el contenido del correo
            $tabla = '<table border="1">';
            $tabla .= ' <thead>';
            $tabla .= ' 	<th align="center">Cédula</th>';
            $tabla .= ' 	<th>Usuario</th>';
            $tabla .= ' 	<th>Nombre</th>';
            $tabla .= ' 	<th>Correo</th>';
            $tabla .= ' 	<th>Dependencia</th>';
            $tabla .= ' 	<th>Fecha de Egreso</th>';
            $tabla .= ' </thead>';

            //Recorremos los usuario por egresar
            foreach ($usuarios_por_egresar as $usuario) {

                $tabla .= '<tr>';
                $tabla .= '	<td>' . $usuario['CEDULA'] . '</td>';
                $tabla .= '	<td>' . $usuario['USUARIO'] . '</td>';
                $tabla .= '	<td>' . $usuario['NOMBRE'] . '</td>';
                $tabla .= '	<td>' . $usuario['CORREO'] . '</td>';
                $tabla .= '	<td>' . $usuario['DEPENDENCIA'] . '</td>';
                $tabla .= '	<td>' . $usuario['FECHA_EGRESO'] . '</td>';
                $tabla .= '</tr>';
            }//Fin del foreach

            $tabla .= '</table>';

            $mensaje = '<p>A continuación se le indica los usuarios que están egresados en el <b>SIGEFIRRHH</b> pero siguen activos en el <b>LDAP</b>:</p>';
            $mensaje .= $tabla;

            $destinatarios = array(array('correo' => 'carlos.rondon@minpal.gob.ve', 'nombre' => 'Carlos Rondon'));

            $con_copia = array(array('correo' => 'david.molina@minpal.gob.ve', 'nombre' => 'David Molina'), array('correo' => 'yuroska.uzcategui@minpal.gob.ve', 'nombre' => 'Yuroska Uzcategui'), array('correo' => 'carolina.coronel@minpal.gob.ve', 'nombre' => 'Emilia Coronel'));

            //Parametros para el envio del correo
            $parametros = array('asunto' => 'Usuarios por desactivar', 'cuerpo' => htmlentities($mensaje, ENT_QUOTES), 'destinatarios' => $destinatarios, 'con_copia' => $con_copia);

            //Enviamos un nuevo correo
            $enviar_correo = $this->servicio_rest($this->dss_correo, $parametros, 'POST', 'enviar_correo', NULL);

            return $enviar_correo;
        } else {

            return array('No existen usuario por desactivar');
        }//Fin del count
    }

    /*
      Descripción           : Método que valida la cuenta del usuario.
      Parametros de entrada : Ninguno.
      Retorna               : Un array con el código de respuesta de usuario válido o inválido.
     */

    public function nuevos_usuarios() {

        //enviamos fecha de ingreso
        $parametros['fecha_ingreso'] = '06/04/2015';

        //Obtenemos el array con los usuario egresados del sigefirrhh
        $ingresos = $this->servicio_rest($this->dss_sigefirrhh, $parametros, 'GET', 'ingresos', NULL);


        //Variable que contendrá los usuarios por desactivar
        $usuarios_nuevos = NULL;
        $i = 0;

        //Recorremos los egresos
        foreach ($ingresos as $ingreso) {

            $usuarios_nuevos[$i] = array('CEDULA' => $ingreso['cedula'],
                'NOMBRE' => $ingreso['apellidos_nombres'],
                'PRIMER_NOMBRE' => $ingreso['primer_nombre'],
                'PRIMER_APELLIDO' => $ingreso['primer_apellido'],
                'SEGUNDO_NOMBRE' => $ingreso['segundo_nombre'],
                'SEGUNDO_APELLIDO' => $ingreso['segundo_apellido'],
                'DEPENDENCIA' => $ingreso['dependencia'],
                'FECHA_INGRESO' => $ingreso['fecha_ingreso']
            );

            $i++;
        }//Fin del foreach $ingresos
        //Evaluo si existe al menos uno
        if (count($usuarios_nuevos) > 0) {

            //Armamos el contenido del correo
            $tabla = '<table border="1">';
            $tabla .= ' <thead>';
            $tabla .= ' 	<th align="center">Cédula</th>';
            $tabla .= ' 	<th>Nombre</th>';
            $tabla .= ' 	<th>Primer Nombre</th>';
            $tabla .= ' 	<th>Primer Apellido</th>';
            $tabla .= ' 	<th>Segundo Nombre</th>';
            $tabla .= ' 	<th>Segundo Apellido</th>';
            $tabla .= ' 	<th>Dependencia</th>';
            $tabla .= ' 	<th>Fecha de Ingreso</th>';
            $tabla .= ' </thead>';

            //Recorremos los usuario por egresar
            foreach ($usuarios_nuevos as $usuario) {

                $tabla .= '<tr>';
                $tabla .= '	<td>' . $usuario['CEDULA'] . '</td>';
                $tabla .= '	<td>' . $usuario['NOMBRE'] . '</td>';
                $tabla .= '	<td>' . $usuario['PRIMER_NOMBRE'] . '</td>';
                $tabla .= '	<td>' . $usuario['PRIMER_APELLIDO'] . '</td>';
                $tabla .= '	<td>' . $usuario['SEGUNDO_NOMBRE'] . '</td>';
                $tabla .= '	<td>' . $usuario['SEGUNDO_APELLIDO'] . '</td>';
                $tabla .= '	<td>' . $usuario['DEPENDENCIA'] . '</td>';
                $tabla .= '	<td>' . $usuario['FECHA_INGRESO'] . '</td>';
                $tabla .= '</tr>';
            }//Fin del foreach

            $tabla .= '</table>';

            $mensaje = '<p>A continuación se le indica el personal de nuevo ingreso registrado en <b>SIGEFIRRHH</b> para que se activen en el <b>LDAP</b> y demas sistemas:</p>';
            $mensaje .= $tabla;

            $destinatarios = array(array('correo' => 'david.molina@minpal.gob.ve', 'nombre' => 'David Molina'));

            $con_copia = array(array('correo' => 'yuroska.uzcategui@minpal.gob.ve', 'nombre' => 'Yuroska Uzcategui'));

            //Parametros para el envio del correo
            $parametros = array('asunto' => 'Personal de nuevo ingreso', 'cuerpo' => htmlentities($mensaje, ENT_QUOTES), 'destinatarios' => $destinatarios, 'con_copia' => $con_copia);

            //Enviamos un nuevo correo
            $enviar_correo = $this->servicio_rest($this->dss_correo, $parametros, 'POST', 'enviar_correo', NULL);

            return $enviar_correo;
        } else {

            return array('No existen usuario nuevos');
        }//Fin del count
    }

    /*
      Descripción           : Método que valida la cuenta del usuario.
      Parametros de entrada : Ninguno.
      Retorna               : Un array con el código de respuesta de usuario válido o inválido.
     */

    public function nuevo_usuario_interno() {
        //enviamos fecha de ingreso

        $parametros['fecha_ingreso'] = '06/04/2015';

        //Obtenemos el array con los usuario egresados del sigefirrhh
        $ingresos['nuevos'] = $this->servicio_rest($this->dss_sigefirrhh, $parametros, 'GET', 'ingresos', NULL);

        //Obtenemos la Disponilidad de Usuario del LDAP
        $usuarios_activos = $this->servicio_rest($this->dss_ldap, $ingresos, 'GET', 'disponibilidad_usuario', NULL);
    }

}

//Fin de la clase principal
/**************************/