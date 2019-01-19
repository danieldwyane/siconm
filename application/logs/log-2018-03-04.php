<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>

ERROR - 2018-03-04 15:32:53 --> 404 Page Not Found: Ctr_login/assets
ERROR - 2018-03-04 15:32:55 --> 404 Page Not Found: Ctr_login/assets
ERROR - 2018-03-04 15:32:56 --> 404 Page Not Found: Ctr_login/assets
ERROR - 2018-03-04 16:02:34 --> Severity: Warning --> pg_query(): Query failed: ERROR:  no existe la relación «spce_cliente_establecimiento»
LINE 5:                     FROM spce_cliente_establecimiento ce 
                                 ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-04 16:02:34 --> Query error: ERROR:  no existe la relación «spce_cliente_establecimiento»
LINE 5:                     FROM spce_cliente_establecimiento ce 
                                 ^ - Invalid query: SELECT cl.spcl_nombre nombre, 
                       es.spes_establecimiento establecimiento,
                       es.spes_descripcion descripcion, 
                       ce.spce_cupon cupon
                    FROM spce_cliente_establecimiento ce 
                    INNER JOIN spcl_cliente cl ON cl.spcl_id = ce.spce_spcl_id 
                    INNER JOIN spes_establecimiento es ON es.spes_id = ce.spce_spes_id
ERROR - 2018-03-04 16:10:33 --> 404 Page Not Found: Ctr_template/validar_empresa
ERROR - 2018-03-04 16:59:40 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «password»
LINE 5:                         spcl_password password
                                              ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-04 16:59:40 --> Query error: ERROR:  error de sintaxis en o cerca de «password»
LINE 5:                         spcl_password password
                                              ^ - Invalid query: SELECT spcl_id id_usuario, 
                        spcl_nombre nombre, 
                        spcl_telefono telefono, 
                        spcl_correo_electronico correo, 
                        spcl_password password
               FROM spcl_cliente
               WHERE spcl_password = 'd' AND spcl_telefono = 'd'
ERROR - 2018-03-04 16:59:54 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «password»
LINE 5:                         spcl_password password
                                              ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-04 16:59:54 --> Query error: ERROR:  error de sintaxis en o cerca de «password»
LINE 5:                         spcl_password password
                                              ^ - Invalid query: SELECT spcl_id id_usuario, 
                        spcl_nombre nombre, 
                        spcl_telefono telefono, 
                        spcl_correo_electronico correo, 
                        spcl_password password
               FROM spcl_cliente
               WHERE spcl_password = 'f' AND spcl_telefono = 'g'
ERROR - 2018-03-04 17:01:08 --> 404 Page Not Found: Ctr_template/reporteCupon
ERROR - 2018-03-04 17:01:26 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «password»
LINE 5:                         spcl_password password
                                              ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-04 17:01:26 --> Query error: ERROR:  error de sintaxis en o cerca de «password»
LINE 5:                         spcl_password password
                                              ^ - Invalid query: SELECT spcl_id id_usuario, 
                        spcl_nombre nombre, 
                        spcl_telefono telefono, 
                        spcl_correo_electronico correo, 
                        spcl_password password
               FROM spcl_cliente
               WHERE spcl_password = 'fg' AND spcl_telefono = 'dgf'
ERROR - 2018-03-04 17:02:28 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:02:28 --> Unable to connect to the database
ERROR - 2018-03-04 17:02:30 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:02:30 --> Unable to connect to the database
ERROR - 2018-03-04 17:02:31 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:02:31 --> Unable to connect to the database
ERROR - 2018-03-04 17:02:35 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:02:35 --> Unable to connect to the database
ERROR - 2018-03-04 17:02:36 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:02:36 --> Unable to connect to the database
ERROR - 2018-03-04 17:02:36 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:02:36 --> Unable to connect to the database
ERROR - 2018-03-04 17:03:18 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:03:18 --> Unable to connect to the database
ERROR - 2018-03-04 17:03:19 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:03:19 --> Unable to connect to the database
ERROR - 2018-03-04 17:03:19 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:03:19 --> Unable to connect to the database
ERROR - 2018-03-04 17:03:19 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:03:19 --> Unable to connect to the database
ERROR - 2018-03-04 17:03:19 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:03:19 --> Unable to connect to the database
ERROR - 2018-03-04 17:03:20 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:03:20 --> Unable to connect to the database
ERROR - 2018-03-04 17:03:20 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:03:20 --> Unable to connect to the database
ERROR - 2018-03-04 17:03:20 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:03:20 --> Unable to connect to the database
ERROR - 2018-03-04 17:03:20 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:03:20 --> Unable to connect to the database
ERROR - 2018-03-04 17:03:20 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:03:20 --> Unable to connect to the database
ERROR - 2018-03-04 17:03:20 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:03:20 --> Unable to connect to the database
ERROR - 2018-03-04 17:03:21 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:03:21 --> Unable to connect to the database
ERROR - 2018-03-04 17:10:09 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:10:09 --> Unable to connect to the database
ERROR - 2018-03-04 17:11:15 --> Severity: Warning --> mysqli::real_connect(): (42000/1049): Unknown database 'sistema_prueba' /web/vuce/system/database/drivers/mysqli/mysqli_driver.php 135
ERROR - 2018-03-04 17:11:15 --> Unable to connect to the database
ERROR - 2018-03-04 17:12:03 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «password»
LINE 5:                         spcl_password password
                                              ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-04 17:12:03 --> Query error: ERROR:  error de sintaxis en o cerca de «password»
LINE 5:                         spcl_password password
                                              ^ - Invalid query: SELECT spcl_id id_usuario, 
                        spcl_nombre nombre, 
                        spcl_telefono telefono, 
                        spcl_correo_electronico correo, 
                        spcl_password password
               FROM spcl_cliente
               WHERE spcl_password = 'df' AND spcl_telefono = 'dfg'
ERROR - 2018-03-04 17:12:48 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «password»
LINE 5:                         spcl_password password
                                              ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-04 17:12:49 --> Query error: ERROR:  error de sintaxis en o cerca de «password»
LINE 5:                         spcl_password password
                                              ^ - Invalid query: SELECT spcl_id id_usuario, 
                        spcl_nombre nombre, 
                        spcl_telefono telefono, 
                        spcl_correo_electronico correo, 
                        spcl_password password
               FROM spcl_cliente
               WHERE spcl_password = 'g' AND spcl_telefono = 'g'
ERROR - 2018-03-04 17:29:33 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «password»
LINE 5:                         spcl_password password
                                              ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-04 17:29:33 --> Query error: ERROR:  error de sintaxis en o cerca de «password»
LINE 5:                         spcl_password password
                                              ^ - Invalid query: SELECT spcl_id id_usuario, 
                        spcl_nombre nombre, 
                        spcl_telefono telefono, 
                        spcl_correo_electronico correo, 
                        spcl_password password
               FROM spcl_cliente
               WHERE spcl_password = 'r' AND spcl_telefono = 'rt'
ERROR - 2018-03-04 17:32:12 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «password»
LINE 5:                         spcl_password password
                                              ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-04 17:32:12 --> Query error: ERROR:  error de sintaxis en o cerca de «password»
LINE 5:                         spcl_password password
                                              ^ - Invalid query: SELECT spcl_id id_usuario, 
                        spcl_nombre nombre, 
                        spcl_telefono telefono, 
                        spcl_correo_electronico correo, 
                        spcl_password password
               FROM spcl_cliente
               WHERE spcl_password = 'dfgdfg' AND spcl_telefono = 'sadad'
ERROR - 2018-03-04 17:32:56 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «password»
LINE 5:                         spcl_password password
                                              ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-04 17:32:56 --> Query error: ERROR:  error de sintaxis en o cerca de «password»
LINE 5:                         spcl_password password
                                              ^ - Invalid query: SELECT spcl_id id_usuario, 
                        spcl_nombre nombre, 
                        spcl_telefono telefono, 
                        spcl_correo_electronico correo, 
                        spcl_password password
               FROM spcl_cliente
               WHERE spcl_password = 'dfgdfg' AND spcl_telefono = 'sadad'
ERROR - 2018-03-04 17:33:11 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «password»
LINE 5:                         spcl_password password
                                              ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-04 17:33:11 --> Query error: ERROR:  error de sintaxis en o cerca de «password»
LINE 5:                         spcl_password password
                                              ^ - Invalid query: SELECT spcl_id id_usuario, 
                        spcl_nombre nombre, 
                        spcl_telefono telefono, 
                        spcl_correo_electronico correo, 
                        spcl_password password
               FROM spcl_cliente
               WHERE spcl_password = 'fdgdfg' AND spcl_telefono = 'dgfgdfg'
ERROR - 2018-03-04 18:07:56 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 18:07:59 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 18:08:03 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 18:08:04 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 18:08:04 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 18:08:05 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 18:08:05 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 18:08:05 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 18:08:05 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 18:08:05 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 18:08:06 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 18:08:06 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 18:08:07 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 18:08:07 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 18:08:07 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 18:08:07 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 18:08:07 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 18:08:07 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 20:50:26 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 20:50:31 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 20:50:32 --> 404 Page Not Found: Ctr_login/index
ERROR - 2018-03-04 21:05:09 --> Severity: Notice --> Undefined property: Ctr_login::$load /web/vuce/application/controllers/Ctr_login.php 15
ERROR - 2018-03-04 21:05:09 --> Severity: Error --> Call to a member function model() on null /web/vuce/application/controllers/Ctr_login.php 15
ERROR - 2018-03-04 21:14:40 --> Severity: Error --> Call to undefined method Ctr_login::initApp() /web/vuce/application/controllers/Ctr_login.php 19
ERROR - 2018-03-04 22:06:21 --> 404 Page Not Found: Ctr_login/logonBd
ERROR - 2018-03-04 22:30:33 --> Severity: Compile Error --> Cannot re-assign auto-global variable _POST /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-04 22:31:19 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/intranet/M_intranet.php 185
ERROR - 2018-03-04 22:31:19 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/intranet/M_intranet.php 194
ERROR - 2018-03-04 22:31:41 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/intranet/M_intranet.php 185
ERROR - 2018-03-04 22:31:41 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/intranet/M_intranet.php 194
ERROR - 2018-03-04 22:35:18 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/intranet/M_intranet.php 185
ERROR - 2018-03-04 22:35:18 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/intranet/M_intranet.php 194
ERROR - 2018-03-04 23:22:10 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
ERROR - 2018-03-04 23:22:35 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
ERROR - 2018-03-04 23:30:18 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
ERROR - 2018-03-04 23:32:44 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
ERROR - 2018-03-04 23:33:52 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
ERROR - 2018-03-04 23:34:00 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
ERROR - 2018-03-04 23:34:26 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
ERROR - 2018-03-04 23:34:35 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
ERROR - 2018-03-04 23:40:40 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
ERROR - 2018-03-04 23:40:49 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
ERROR - 2018-03-04 23:41:53 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
ERROR - 2018-03-04 23:41:53 --> Severity: Notice --> Array to string conversion /web/vuce/application/controllers/Ctr_login.php 53
ERROR - 2018-03-04 23:43:11 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
ERROR - 2018-03-04 23:43:38 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
ERROR - 2018-03-04 23:47:46 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
ERROR - 2018-03-04 23:49:00 --> 404 Page Not Found: Ctr_login/cerrar
ERROR - 2018-03-04 23:51:03 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
ERROR - 2018-03-04 23:51:25 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
ERROR - 2018-03-04 23:58:24 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
ERROR - 2018-03-04 23:59:55 --> Severity: Notice --> Undefined index: cuenta /web/vuce/application/models/webservices/ruleservices/intranet/M_wrs_intranet.php 96
