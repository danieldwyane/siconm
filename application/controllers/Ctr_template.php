<?php

defined('BASEPATH') OR exit('No direct script access allowed');

//if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
 * Clase para administrar Templates
 *
 * @author Yubrazka Rondon y Alexander Guilarte
 */
class Ctr_template extends CI_Controller {

    function __construct() {
        parent::__construct();

        /* Cargar librerias estandar */
        $this->load->helper('url');
        $this->load->helper('file');

        /* Cargar los tbl */
        //$this->load->model('tablas/smsd/tbl_despacho');

        /* Cargar los Daos */
        //$this->load->model('daos/smsd/dao_despacho');
        $this->CI = & get_instance(); //-> Para obtener una instancia de la variable de sesión
//        echo 'hola';
//        exit(0);
        $this->cargaHome();
    }

    function index() {
        
    }

    public function cargaHome() {

        /* desmontar el template */
        $this->output->unset_template();

        /* Cargar el título del módulo */
        $this->output->set_title('SICA');

        /* Montar plantilla */
        $this->output->set_template('default');

        /* Cargar vista en la plantilla */
        $output = "<div style='-moz-opacity:.10; opacity:0.10; filter:alpha(opacity=10);'>"
                . "</div>";

        $this->output->set_output($output);
    }

    public function form_produccion() {

        if ($this->CI->session->userdata('logged_in') == true) {
            /* desmontar el template */
            $this->output->unset_template();

            /* Cargar hojas de estilo css */
            $this->load->css('assets/plugins/select2/select2.min.css');
            $this->load->css('assets/plugins/datetimepicker/css/bootstrap-datetimepicker.min.css');
            $this->load->css('assets/plugins/datepicker/datepicker3.css');
            $this->load->css('application/libraries/DataTables/Responsive-2.1.0/css/responsive.dataTables.min.css');
            $this->load->css('application/libraries/DataTables-1.10.12/media/css/dataTables.bootstrap.min.css'); //Necesario para los botones de excel, pdf
            $this->load->css('application/libraries/DataTables-1.10.12/extensions/Buttons/css/buttons.bootstrap.min.css'); //Necesario para los botones de excel, pdf
            $this->load->css('application/libraries/DataTables-1.10.12/media/css/jquery.dataTables.min.css');
            $this->load->css('application/libraries/Select-1.2.5/css/select.dataTables.min.css');

            /* Cargar librerias javascript */
            $this->load->js('assets/plugins/select2/select2.min.js');
            $this->load->js('application/libraries/moment/min/moment.min.js');
            $this->load->js('assets/plugins/datetimepicker/js/bootstrap-datetimepicker.min.js');
            $this->load->js('assets/plugins/datepicker/bootstrap-datepicker.js');
            $this->load->js('application/libraries/DataTables/DataTables-1.10.12/js/jquery.dataTables.min.js');
            $this->load->js('application/libraries/DataTables/Responsive-2.1.0/js/dataTables.responsive.min.js');
            $this->load->js('application/libraries/DataTables-1.10.12/media/js/dataTables.bootstrap.min.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/extensions/Buttons/js/dataTables.buttons.min.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/extensions/Buttons/js/buttons.bootstrap.min.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/extensions/Buttons/js/buttons.flash.min.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/media/js/jszip.min.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/media/js/pdfmake.min.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/media/js/vfs_fonts.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/extensions/Buttons/js/buttons.html5.min.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/extensions/Buttons/js/buttons.print.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/extensions/Buttons/js/buttons.colVis.min.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/extensions/rowGroup/js/dataTables.rowsGroup.js');
            $this->load->js('application/libraries/Select-1.2.5/js/dataTables.select.js');
            $this->load->js('application/libraries/DataTables-1.10.12/api/sum().js');

            /* Cargar el título del módulo */
            $this->output->set_title('Crear Producción');

            /* Montar plantilla */
            $this->output->set_template('default');

            $data = array();

            /* Cargar vista en la plantilla */
            $output = $this->load->view('sica/registro/v_registrar_produccion', $data, true);
            $this->output->set_output($output);
        } else {
            /* desmontar el template */
            $this->output->unset_template();

            /* montar el template */
            $this->output->set_template('default');
            $output = $this->load->view('v_errorSesion', null, true);
            $this->output->set_output($output);
        }
    }

    public function form_inac_empaque() {

        if ($this->CI->session->userdata('logged_in') == true) {
            /* desmontar el template */
            $this->output->unset_template();

            /* Cargar hojas de estilo css */
            $this->load->css('assets/plugins/select2/select2.min.css');
            $this->load->css('application/libraries/DataTables/DataTables-1.10.12/css/jquery.dataTables.min.css');
            $this->load->css('application/libraries/DataTables/Responsive-2.1.0/css/responsive.dataTables.min.css');
            $this->load->css('application/libraries/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css');

            /* Cargar librerias javascript */
            $this->load->js('assets/plugins/select2/select2.min.js');
            $this->load->js('assets/plugins/autoNumeric/js/autoNumeric-min.js');
            $this->load->js('application/libraries/DataTables/DataTables-1.10.12/js/jquery.dataTables.min.js');
            $this->load->js('application/libraries/DataTables/Responsive-2.1.0/js/dataTables.responsive.min.js');
            $this->load->js('application/libraries/moment/min/moment.min.js');
            $this->load->js('application/libraries/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js');

            /* Cargar el título del módulo */
            $this->output->set_title('Bóveda');

            /* Montar plantilla */
            $this->output->set_template('default');

            $data = array();

            /* Cargar vista en la plantilla */
            $output = $this->load->view('sidre/admin_agen/v_inac_empaque', $data, true);
            $this->output->set_output($output);
        } else {
            /* desmontar el template */
            $this->output->unset_template();

            /* montar el template */
            $this->output->set_template('default');
            $output = $this->load->view('v_errorSesion', null, true);
            $this->output->set_output($output);
        }
    }

    public function bandeja_registro() {

        if ($this->CI->session->userdata('logged_in') == true) {
            /* desmontar el template */
            $this->output->unset_template();

            /* Cargar hojas de estilo css */
            $this->load->css('assets/plugins/select2/select2.min.css');
            $this->load->css('assets/plugins/datetimepicker/css/bootstrap-datetimepicker.min.css');
            $this->load->css('application/libraries/bootstrap-fileinput/css/fileinput.min.css');
            $this->load->css('application/libraries/DataTables/Responsive-2.1.0/css/responsive.dataTables.min.css');
            $this->load->css('application/libraries/DataTables-1.10.12/media/css/dataTables.bootstrap.min.css'); //Necesario para los botones de excel, pdf
            $this->load->css('application/libraries/DataTables-1.10.12/extensions/Buttons/css/buttons.bootstrap.min.css'); //Necesario para los botones de excel, pdf

            /* Cargar librerias javascript */
            $this->load->js('assets/plugins/select2/select2.min.js');
            $this->load->js('application/libraries/moment/min/moment.min.js');
            $this->load->js('assets/plugins/datetimepicker/js/bootstrap-datetimepicker.min.js');
            $this->load->js('application/libraries/bootstrap-fileinput/js/fileinput.min.js');
            $this->load->js('application/libraries/DataTables/DataTables-1.10.12/js/jquery.dataTables.min.js');
            $this->load->js('application/libraries/DataTables/Responsive-2.1.0/js/dataTables.responsive.min.js');
            $this->load->js('application/libraries/DataTables-1.10.12/media/js/dataTables.bootstrap.min.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/extensions/Buttons/js/dataTables.buttons.min.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/extensions/Buttons/js/buttons.bootstrap.min.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/extensions/Buttons/js/buttons.flash.min.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/media/js/jszip.min.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/media/js/pdfmake.min.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/media/js/vfs_fonts.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/extensions/Buttons/js/buttons.html5.min.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/extensions/Buttons/js/buttons.print.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/extensions/Buttons/js/buttons.colVis.min.js'); //Necesario para los botones de excel, pdf
            $this->load->js('application/libraries/DataTables-1.10.12/extensions/rowGroup/js/dataTables.rowsGroup.js');

            /* Cargar el título del módulo */
            $this->output->set_title('Bandeja Registro');

            /* Montar plantilla */
            $this->output->set_template('default');

            $data = array();

            /* Cargar vista en la plantilla */
            $output = $this->load->view('siconm/v_bandeja_registro', $data, true);
            $this->output->set_output($output);
        } else {
            /* desmontar el template */
            $this->output->unset_template();

            /* montar el template */
            $this->output->set_template('default');
            $output = $this->load->view('v_errorSesion', null, true);
            $this->output->set_output($output);
        }
    }

    public function form_empresa() {

        if ($this->CI->session->userdata('logged_in') == true) {
            /* desmontar el template */
            $this->output->unset_template();

            /* Cargar hojas de estilo css */
            $this->load->css('assets/plugins/select2/select2.min.css');
            $this->load->css('assets/plugins/datetimepicker/css/bootstrap-datetimepicker.min.css');
            $this->load->css('application/libraries/DataTables/DataTables-1.10.12/css/jquery.dataTables.min.css');
            $this->load->css('application/libraries/DataTables/Responsive-2.1.0/css/responsive.dataTables.min.css');

            /* Cargar librerias javascript */
            $this->load->js('assets/plugins/select2/select2.min.js');
            $this->load->js('assets/plugins/jQuery/jquery.mask.js');
            $this->load->js('application/libraries/moment/min/moment.min.js');
            $this->load->js('assets/plugins/datetimepicker/js/bootstrap-datetimepicker.min.js');
            $this->load->js('application/libraries/DataTables/DataTables-1.10.12/js/jquery.dataTables.min.js');
            $this->load->js('application/libraries/DataTables/Responsive-2.1.0/js/dataTables.responsive.min.js');

            /* Cargar el título del módulo */
            $this->output->set_title('Agregar Empresas');

            /* Montar plantilla */
            $this->output->set_template('default');

            $data = array();

            /* Cargar vista en la plantilla */
            $output = $this->load->view('siconm/v_empresa', $data, true);
            $this->output->set_output($output);
        } else {
            /* desmontar el template */
            $this->output->unset_template();

            /* montar el template */
            $this->output->set_template('default');
            $output = $this->load->view('v_errorSesion', null, true);
            $this->output->set_output($output);
        }
    }

    public function form_sucursal() {

        if ($this->CI->session->userdata('logged_in') == true) {
            /* desmontar el template */
            $this->output->unset_template();

            /* Cargar hojas de estilo css */
            $this->load->css('assets/plugins/select2/select2.min.css');
            $this->load->css('assets/plugins/datetimepicker/css/bootstrap-datetimepicker.min.css');
            $this->load->css('application/libraries/DataTables/DataTables-1.10.12/css/jquery.dataTables.min.css');
            $this->load->css('application/libraries/DataTables/Responsive-2.1.0/css/responsive.dataTables.min.css');

            /* Cargar librerias javascript */
            $this->load->js('assets/plugins/select2/select2.min.js');
            $this->load->js('assets/plugins/jQuery/jquery.mask.js');
            $this->load->js('application/libraries/moment/min/moment.min.js');
            $this->load->js('assets/plugins/datetimepicker/js/bootstrap-datetimepicker.min.js');
            $this->load->js('application/libraries/DataTables/DataTables-1.10.12/js/jquery.dataTables.min.js');
            $this->load->js('application/libraries/DataTables/Responsive-2.1.0/js/dataTables.responsive.min.js');

            /* Cargar el título del módulo */
            $this->output->set_title('Agregar Sucursal');

            /* Montar plantilla */
            $this->output->set_template('default');

            $data = array();

            /* Cargar vista en la plantilla */
            $output = $this->load->view('siconm/v_sucursal', $data, true);
            $this->output->set_output($output);
        } else {
            /* desmontar el template */
            $this->output->unset_template();

            /* montar el template */
            $this->output->set_template('default');
            $output = $this->load->view('v_errorSesion', null, true);
            $this->output->set_output($output);
        }
    }

}

?>
