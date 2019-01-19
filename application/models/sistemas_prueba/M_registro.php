<?php

/*
  NOMBRE		: M_registro.php
  PARÁMETROS		: (none)
  DESCRIPCIÓN		: Controlodor para el módulo de registro Test
  @author               : Yubrazka Rondon y Alexander Guilarte
  FECHA DE CREACIÓN 	: 05/01/2018
 */

/*
  Descripción: Clase principal.
 */

class M_registro extends CI_Model {
    /*
      Descripción: Contructor de la clase principal.
     */

    public function __construct() {

        parent::__construct();
        //Cargamos el grupo de conexión
        $this->db = $this->load->database('vuce', TRUE);

        //Cargamos la libreria PHPMailer
        $this->load->library('PHPMail');
        $this->load->helper('cookie');
    }

    /*
      Descripción : Método que inserta en la base de datos
      Parametros  : Ninguno.
      Retorna     : Retorna un array.
     */

    public function insertUsuario($datos) {

        //'Campo de la base de datos' => $id del campo en la vista
        $data = array(
            'spcl_nombre' => $datos['nombre'],
            'spcl_telefono' => $datos['telefono'],
            'spcl_correo_electronico' => $datos['email'],
            'spcl_password' => $datos['password']
        );

        //Iniciamos la transacción
        $this->db->trans_begin();

        if ($this->db->insert('spcl_cliente', $data)) {

            $this->db->trans_commit();

            return array('CODIGO_RESPUESTA' => 1, 'MENSAJE_RESPUESTA' => 'Created Successfully');
        } else {

            $this->db->trans_rollback();

            return array('CODIGO_RESPUESTA' => 0, 'MENSAJE_RESPUESTA' => 'ERROR IN DATABASE !');
        }//fin if
    }

    /*
      Descripción : Método que inserta en la base de datos
      Parametros  : Ninguno.
      Retorna     : Retorna un array.
     */

    public function insertEstablecimiento($establecimiento, $descripcion, $codigo_alea) {

        //Iniciamos la transacción
        $this->db->trans_begin();

        //'Campo de la base de datos' => $id del campo en la vista
        $data = array(
            'spce_spcl_id' => $this->CI->session->userdata('idLogin'),
            'spce_spes_id' => $establecimiento,
            'spce_cupon' => $codigo_alea,
            'spce_estatus_id' => 1
        );

        if ($this->db->insert('spce_cliente_establecimiento', $data)) {

            //Obtenemos los datos del destinatario
            $destinatario = $this->destinatario_correo($this->CI->session->userdata('idLogin'));

            //Obtenemos el mensaje a enviar
            $datosCorreo = $this->mensaje_correo(1, 1);

            //Reemplazamos las palabras reservadas por los datos reales
            $cuerpo = str_replace('#USUARIO', $destinatario['nombre'], $datosCorreo['cuerpo']);
            $cuerpo = str_replace('#CUPON', $codigo_alea, $cuerpo);

            $destinatarios = array(array('correo' => $destinatario['correo'], 'nombre' => $destinatario['nombre']));

            //Enviamos el correo		
            $this->envio_correo($destinatarios, $datosCorreo['asunto'], $datosCorreo['emisor'], $cuerpo, $datosCorreo['correo_emisor']);

            $resultado = array('CODIGO_RESPUESTA' => 1, 'MENSAJE_RESPUESTA' => $codigo_alea);

            $this->db->trans_commit();
        } else {

            $this->db->trans_rollback();

            $resultado = array('CODIGO_RESPUESTA' => 0, 'MENSAJE_RESPUESTA' => 'ERROR IN DATABASE !');
        }//fin if   

        return $resultado;
    }

    /*
      Descripción: Método que obtiene los datos del establecimiento
      Parametros :
      Retorna    : Un array.
     */

    public function establecimiento() {

        $query = "SELECT spes_id id_establecimiento, 
                         spes_establecimiento desc_establecimiento
                         FROM spes_establecimiento";

        //Ejecutamos el query
        $consulta = $this->db->query($query);
        //Obtenemos el array de datos
        $datos = $consulta->result_array();

        return $datos;
    }

    /*
      Descripción: Método que obtiene el tipo de establecimiento
      Parametros : id_establecimiento
      Retorna    : Un array.
     */

    public function tipo_establecimiento($id_establecimiento) {

        $query = "SELECT spes_descripcion descripcion
                    FROM spes_establecimiento
                    WHERE spes_id =" . $id_establecimiento;

        //Ejecutamos el query
        $consulta = $this->db->query($query);
        //Obtenemos el array de datos
        $datos = $consulta->row_array();

        return $datos;
    }

    /*
      Descripción : Método que lista los cupones creados.
      Parametros  : Ninguno.
      Retorna     : Retorna un array.
     */

    public function reporte_cupon() {

        //Consulta
        $sql = "SELECT cl.spcl_nombre nombre, 
                       es.spes_establecimiento establecimiento,
                       es.spes_descripcion descripcion, 
                       ce.spce_cupon cupon
                    FROM spce_cliente_establecimiento ce 
                    INNER JOIN spcl_cliente cl ON cl.spcl_id = ce.spce_spcl_id 
                    INNER JOIN spes_establecimiento es ON es.spes_id = ce.spce_spes_id";

        //Ejecutamos la consulta
        $recurso = $this->db->query($sql);

        //Obtenemos los resultados
        $resultado = $recurso->result_array();

        return array('data' => $resultado);
    }

    public function validar_clave($usuario, $clave) {

        if (substr_count($usuario, "@") === 1) {

            $login = "AND spcl_correo_electronico = '" . $usuario . "'";
        } else {

            $login = "AND spcl_telefono = '" . $usuario . "'";
        }

        $sql = "SELECT spcl_id id_usuario, 
                        spcl_nombre nombre, 
                        spcl_telefono telefono, 
                        spcl_correo_electronico correo, 
                        spcl_password password
               FROM spcl_cliente
               WHERE spcl_password = '" . $clave . "' $login";

        //Ejecutamos la consulta
        $recurso = $this->db->query($sql);
        $resultado = $recurso->row_array();

        return $resultado;
    }

    private function mensaje_correo($id_sistema, $num_mensaje) {

        //Consulta
        $sql = "SELECT ms.comc_cuerpo AS cuerpo, 
                       ms.comc_asusnto AS asunto, 
                       ms.comc_emisor AS emisor, 
                       ms.comc_correo_emisor AS correo_emisor  
                    FROM comc_mensaje_correo ms
                    WHERE ms.comc_id_mensaje = " . $num_mensaje . " 
                      AND ms.comc_ussi_id = " . $id_sistema;

        //Ejecutamos la consulta 
        $recurso = $this->db->query($sql);

        //Obtenemos el resultado
        $respuesta = $recurso->row_array();

        return $respuesta;
    }

    /*
      Descripción : Método que obtiene los datos del destinatario
      Parametros  : El id del usuario.
      Retorna     : Retorna un array con los datos del destinatario.
     */

    private function destinatario_correo($id_usuario) {

        //Consulta
        $sql = "SELECT spcl_id id_usuario,
                       spcl_nombre nombre,
                       spcl_correo_electronico correo
                    FROM spcl_cliente 
                    WHERE spcl_id =" . $id_usuario;

        //Ejecutamos la consulta
        $recurso = $this->db->query($sql);

        //Obtenemos el resultado
        $respuesta = $recurso->row_array();

        return $respuesta;
    }

    private function envio_correo($destinatarios, $asunto, $nombre_emisor, $cuerpo, $correoemisor) {

        $mail = new PHPMailer;

        //$mail->SMTPDebug = 3;// Enable verbose debug output
        //Obtenemos los datos para la configuración del correo
        $sql = "SELECT cocc_id,
                       cocc_charset,
                       cocc_host,
                       cocc_smtpauth,
                       cocc_username,
                       cocc_password,
                       cocc_smtpsecure,
                       cocc_port
                    FROM cocc_configuracion_correo
                    WHERE cocc_id = 1";

        //Ejecutamos la consulta 
        $recurso = $this->db->query($sql);
        //Obtenemos el resultado
        $respuesta = $recurso->row_array();

        $mail->isSMTP();
        $mail->CharSet = $respuesta['cocc_charset']; //'UTF-8';    //"UTF-8";
        $mail->Host = $respuesta['cocc_host']; //'ssl://smtp.gmail.com'; //'ssl://10.17.3.12';
        $mail->SMTPAuth = $respuesta['cocc_smtpauth']; //true; //true;                            
        $mail->Username = $respuesta['cocc_username']; //'correo.sistemaspro@gmail.com'; //'sistemas.oti@minpal.gob.ve';
        $mail->Password = $respuesta['cocc_password']; //'c0rr30.s4st3m4s@act'; //'123456';                          
        $mail->SMTPSecure = $respuesta['cocc_smtpsecure']; //'tls'; //'tls';                            
        $mail->Port = $respuesta['cocc_port']; //465; //465; 
        //$mail->Encoding   = "quoted­printable";

        $mail->setFrom($correoemisor, $nombre_emisor);

        //Recorremos los destinatarios
        foreach ($destinatarios as $destinatario) {

            $mail->addAddress($destinatario['correo'], $destinatario['nombre']);
//            $mail->addCC($destinatario['correo'], $destinatario['nombre']);
        }//Fin del foreach
//        $con_copia = NULL;
        //Recorremos los que recibiran una copia
//        foreach ($con_copia as $copia) {
//        }//Fin del foreach 
        //$mail->addReplyTo('info@example.com', 'Information');
        //$mail->addBCC('bcc@example.com');
        //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
        $mail->isHTML(true);                                  // Set email format to HTML

        $mail->Subject = $asunto;
        $mail->Body = html_entity_decode($cuerpo, ENT_HTML5, 'ISO-8859-1');
        //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
        //Evaluamos si se envia el mensaje
        if (!$mail->send()) {

            return array('CODIGO' => 0, 'MENSAJE' => $mail->ErrorInfo);
        } else {

            return array('CODIGO' => 1, 'MENSAJE' => 'Correo enviado con éxito.');
        }//Fin del if
    }

}

//fin del M_login
