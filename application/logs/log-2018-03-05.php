<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>

ERROR - 2018-03-05 00:00:09 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
ERROR - 2018-03-05 00:01:11 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
ERROR - 2018-03-05 19:50:40 --> Severity: Notice --> Undefined property: Ctr_login::$CI /web/vuce/application/controllers/Ctr_login.php 56
ERROR - 2018-03-05 19:50:40 --> Severity: Notice --> Trying to get property of non-object /web/vuce/application/controllers/Ctr_login.php 56
ERROR - 2018-03-05 19:50:40 --> Severity: Error --> Call to a member function set_userdata() on null /web/vuce/application/controllers/Ctr_login.php 56
ERROR - 2018-03-05 19:52:19 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-05 19:52:19 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-05 23:00:51 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-05 23:00:51 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-05 23:18:43 --> Severity: Warning --> pg_query(): Query failed: ERROR:  no existe la relación «spce_cliente_establecimiento»
LINE 5:                     FROM spce_cliente_establecimiento ce 
                                 ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-05 23:18:43 --> Query error: ERROR:  no existe la relación «spce_cliente_establecimiento»
LINE 5:                     FROM spce_cliente_establecimiento ce 
                                 ^ - Invalid query: SELECT cl.spcl_nombre nombre, 
                       es.spes_establecimiento establecimiento,
                       es.spes_descripcion descripcion, 
                       ce.spce_cupon cupon
                    FROM spce_cliente_establecimiento ce 
                    INNER JOIN spcl_cliente cl ON cl.spcl_id = ce.spce_spcl_id 
                    INNER JOIN spes_establecimiento es ON es.spes_id = ce.spce_spes_id
