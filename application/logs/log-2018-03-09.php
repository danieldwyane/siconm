<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>

ERROR - 2018-03-09 09:16:26 --> Severity: Notice --> Undefined index: ID_USUARIO /web/vuce/application/models/intranet/M_intranet.php 244
ERROR - 2018-03-09 09:16:26 --> Severity: Notice --> Undefined index: CODIGO_USUARIO /web/vuce/application/models/intranet/M_intranet.php 245
ERROR - 2018-03-09 09:16:35 --> Severity: Notice --> Undefined index: ID_USUARIO /web/vuce/application/models/intranet/M_intranet.php 244
ERROR - 2018-03-09 09:16:35 --> Severity: Notice --> Undefined index: CODIGO_USUARIO /web/vuce/application/models/intranet/M_intranet.php 245
ERROR - 2018-03-09 09:17:34 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 09:17:34 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 09:19:05 --> Severity: Warning --> pg_query(): Query failed: ERROR:  llave duplicada viola restricción de unicidad «producto_empresa_rif_cod_arancel_id_presentacion_valor_pres_key»
DETAIL:  Ya existe la llave (rif, cod_arancel, id_presentacion, valor_presentacion, id_unidad_medida)=(j-0000000000, 0000000002, 8, 3, 7).
CONTEXT:  sentencia SQL: «INSERT INTO producto.producto_empresa (  id_prod_empresa,
                                                         rif,
                                                         cod_arancel,
                                                         id_presentacion,
                                                         valor_presentacion,
                                                         id_unidad_medida
                                                  )VALUES(
                                                         v_id_producto_empresa,
                                                         p_rif,
                                                         p_cod_arancel,
                                                         p_id_presentacion,
                                                         p_valor_presentacion,
                                                         p_id_unidad_medida
                                                      )»
función PL/pgSQL producto.insertar_producto_empresa(character varying,character varying,integer,integer,integer) en la línea 13 en sentencia SQL /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-09 09:19:05 --> Query error: ERROR:  llave duplicada viola restricción de unicidad «producto_empresa_rif_cod_arancel_id_presentacion_valor_pres_key»
DETAIL:  Ya existe la llave (rif, cod_arancel, id_presentacion, valor_presentacion, id_unidad_medida)=(j-0000000000, 0000000002, 8, 3, 7).
CONTEXT:  sentencia SQL: «INSERT INTO producto.producto_empresa (  id_prod_empresa,
                                                         rif,
                                                         cod_arancel,
                                                         id_presentacion,
                                                         valor_presentacion,
                                                         id_unidad_medida
                                                  )VALUES(
                                                         v_id_producto_empresa,
                                                         p_rif,
                                                         p_cod_arancel,
                                                         p_id_presentacion,
                                                         p_valor_presentacion,
                                                         p_id_unidad_medida
                                                      )»
función PL/pgSQL producto.insertar_producto_empresa(character varying,character varying,integer,integer,integer) en la línea 13 en sentencia SQL - Invalid query: SELECT * FROM producto.insertar_producto_empresa('j-0000000000',
                                                                                    '0000000002', 
                                                                                    8, 
                                                                                    3,
                                                                                    7)
ERROR - 2018-03-09 09:19:15 --> Severity: Warning --> pg_query(): Query failed: ERROR:  llave duplicada viola restricción de unicidad «producto_empresa_rif_cod_arancel_id_presentacion_valor_pres_key»
DETAIL:  Ya existe la llave (rif, cod_arancel, id_presentacion, valor_presentacion, id_unidad_medida)=(j-0000000000, 0000000002, 8, 3, 7).
CONTEXT:  sentencia SQL: «INSERT INTO producto.producto_empresa (  id_prod_empresa,
                                                         rif,
                                                         cod_arancel,
                                                         id_presentacion,
                                                         valor_presentacion,
                                                         id_unidad_medida
                                                  )VALUES(
                                                         v_id_producto_empresa,
                                                         p_rif,
                                                         p_cod_arancel,
                                                         p_id_presentacion,
                                                         p_valor_presentacion,
                                                         p_id_unidad_medida
                                                      )»
función PL/pgSQL producto.insertar_producto_empresa(character varying,character varying,integer,integer,integer) en la línea 13 en sentencia SQL /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-09 09:19:15 --> Query error: ERROR:  llave duplicada viola restricción de unicidad «producto_empresa_rif_cod_arancel_id_presentacion_valor_pres_key»
DETAIL:  Ya existe la llave (rif, cod_arancel, id_presentacion, valor_presentacion, id_unidad_medida)=(j-0000000000, 0000000002, 8, 3, 7).
CONTEXT:  sentencia SQL: «INSERT INTO producto.producto_empresa (  id_prod_empresa,
                                                         rif,
                                                         cod_arancel,
                                                         id_presentacion,
                                                         valor_presentacion,
                                                         id_unidad_medida
                                                  )VALUES(
                                                         v_id_producto_empresa,
                                                         p_rif,
                                                         p_cod_arancel,
                                                         p_id_presentacion,
                                                         p_valor_presentacion,
                                                         p_id_unidad_medida
                                                      )»
función PL/pgSQL producto.insertar_producto_empresa(character varying,character varying,integer,integer,integer) en la línea 13 en sentencia SQL - Invalid query: SELECT * FROM producto.insertar_producto_empresa('j-0000000000',
                                                                                    '0000000002', 
                                                                                    8, 
                                                                                    3,
                                                                                    7)
ERROR - 2018-03-09 09:26:10 --> Severity: Warning --> pg_query(): Query failed: ERROR:  llave duplicada viola restricción de unicidad «producto_empresa_rif_cod_arancel_id_presentacion_valor_pres_key»
DETAIL:  Ya existe la llave (rif, cod_arancel, id_presentacion, valor_presentacion, id_unidad_medida)=(j-0000000000, 0000000002, 8, 3, 7).
CONTEXT:  sentencia SQL: «INSERT INTO producto.producto_empresa (  id_prod_empresa,
                                                         rif,
                                                         cod_arancel,
                                                         id_presentacion,
                                                         valor_presentacion,
                                                         id_unidad_medida
                                                  )VALUES(
                                                         v_id_producto_empresa,
                                                         p_rif,
                                                         p_cod_arancel,
                                                         p_id_presentacion,
                                                         p_valor_presentacion,
                                                         p_id_unidad_medida
                                                      )»
función PL/pgSQL producto.insertar_producto_empresa(character varying,character varying,integer,integer,integer) en la línea 13 en sentencia SQL /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-09 09:26:10 --> Query error: ERROR:  llave duplicada viola restricción de unicidad «producto_empresa_rif_cod_arancel_id_presentacion_valor_pres_key»
DETAIL:  Ya existe la llave (rif, cod_arancel, id_presentacion, valor_presentacion, id_unidad_medida)=(j-0000000000, 0000000002, 8, 3, 7).
CONTEXT:  sentencia SQL: «INSERT INTO producto.producto_empresa (  id_prod_empresa,
                                                         rif,
                                                         cod_arancel,
                                                         id_presentacion,
                                                         valor_presentacion,
                                                         id_unidad_medida
                                                  )VALUES(
                                                         v_id_producto_empresa,
                                                         p_rif,
                                                         p_cod_arancel,
                                                         p_id_presentacion,
                                                         p_valor_presentacion,
                                                         p_id_unidad_medida
                                                      )»
función PL/pgSQL producto.insertar_producto_empresa(character varying,character varying,integer,integer,integer) en la línea 13 en sentencia SQL - Invalid query: SELECT * FROM producto.insertar_producto_empresa('j-0000000000',
                                                                                    '0000000002', 
                                                                                    8, 
                                                                                    3,
                                                                                    7)
ERROR - 2018-03-09 10:28:29 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 10:28:29 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 10:33:09 --> 404 Page Not Found: Null/index
ERROR - 2018-03-09 10:46:39 --> Severity: Compile Error --> Cannot redeclare Ctr_template::form_asociar_producto() /web/vuce/application/controllers/Ctr_template.php 218
ERROR - 2018-03-09 10:47:01 --> Severity: Compile Error --> Cannot redeclare Ctr_template::form_asociar_producto() /web/vuce/application/controllers/Ctr_template.php 218
ERROR - 2018-03-09 10:47:02 --> Severity: Compile Error --> Cannot redeclare Ctr_template::form_asociar_producto() /web/vuce/application/controllers/Ctr_template.php 218
ERROR - 2018-03-09 10:47:05 --> Severity: Compile Error --> Cannot redeclare Ctr_template::form_asociar_producto() /web/vuce/application/controllers/Ctr_template.php 218
ERROR - 2018-03-09 10:49:52 --> 404 Page Not Found: Null/index
ERROR - 2018-03-09 10:50:05 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 10:50:05 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 10:51:16 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 10:51:16 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 10:57:23 --> 404 Page Not Found: Null/index
ERROR - 2018-03-09 11:02:41 --> Severity: Notice --> Undefined index: ID_USUARIO /web/vuce/application/models/intranet/M_intranet.php 244
ERROR - 2018-03-09 11:02:41 --> Severity: Notice --> Undefined index: CODIGO_USUARIO /web/vuce/application/models/intranet/M_intranet.php 245
ERROR - 2018-03-09 11:02:51 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 11:02:51 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 11:16:02 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 11:16:02 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 11:18:46 --> Severity: Notice --> Undefined index: ID_USUARIO /web/vuce/application/models/intranet/M_intranet.php 244
ERROR - 2018-03-09 11:18:46 --> Severity: Notice --> Undefined index: CODIGO_USUARIO /web/vuce/application/models/intranet/M_intranet.php 245
ERROR - 2018-03-09 11:19:01 --> Severity: Notice --> Undefined index: ID_USUARIO /web/vuce/application/models/intranet/M_intranet.php 244
ERROR - 2018-03-09 11:19:01 --> Severity: Notice --> Undefined index: CODIGO_USUARIO /web/vuce/application/models/intranet/M_intranet.php 245
ERROR - 2018-03-09 11:19:26 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 11:19:26 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 11:44:29 --> Severity: Notice --> Undefined index: ID_USUARIO /web/vuce/application/models/intranet/M_intranet.php 244
ERROR - 2018-03-09 11:44:29 --> Severity: Notice --> Undefined index: CODIGO_USUARIO /web/vuce/application/models/intranet/M_intranet.php 245
ERROR - 2018-03-09 11:44:40 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 11:44:40 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 11:45:13 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 11:45:13 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 11:48:41 --> 404 Page Not Found: Null/index
ERROR - 2018-03-09 12:06:22 --> 404 Page Not Found: Ctr_template/form_unidad_medida
ERROR - 2018-03-09 12:06:45 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 12:06:45 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 12:13:42 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 12:13:42 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 12:34:52 --> 404 Page Not Found: Ctr_vista_empresa/form_validar_empresa
ERROR - 2018-03-09 12:36:04 --> 404 Page Not Found: Ctr_vista_empresa/form_validar_empresa
ERROR - 2018-03-09 12:36:05 --> 404 Page Not Found: Ctr_vista_empresa/form_validar_empresa
ERROR - 2018-03-09 12:36:05 --> 404 Page Not Found: Ctr_vista_empresa/form_validar_empresa
ERROR - 2018-03-09 12:36:05 --> 404 Page Not Found: Ctr_vista_empresa/form_validar_empresa
ERROR - 2018-03-09 12:36:07 --> 404 Page Not Found: Ctr_vista_catalagos/form_unidad_medida
ERROR - 2018-03-09 12:36:12 --> 404 Page Not Found: Ctr_vista_empresa/form_actualizar_empresa
ERROR - 2018-03-09 12:36:36 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 12:36:36 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 12:37:24 --> 404 Page Not Found: Ctr_vista_empresa/form_actualizar_empresa
ERROR - 2018-03-09 12:37:29 --> 404 Page Not Found: Vistas/ctr_vista_empresa
ERROR - 2018-03-09 12:37:34 --> 404 Page Not Found: Vistas/ctr_vista_empresa
ERROR - 2018-03-09 12:37:35 --> 404 Page Not Found: Vistas/ctr_vista_empresa
ERROR - 2018-03-09 13:10:50 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «'NO EXISTE'»
LINE 2: ...                                                  'NO EXISTE...
                                                             ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-09 13:10:50 --> Query error: ERROR:  error de sintaxis en o cerca de «'NO EXISTE'»
LINE 2: ...                                                  'NO EXISTE...
                                                             ^ - Invalid query: SELECT * FROM empresa.rechazar_empresa(52
                                                                         'NO EXISTE')
ERROR - 2018-03-09 13:13:27 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «'PASO'»
LINE 2: ...                                                     'PASO')
                                                                ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-09 13:13:27 --> Query error: ERROR:  error de sintaxis en o cerca de «'PASO'»
LINE 2: ...                                                     'PASO')
                                                                ^ - Invalid query: SELECT * FROM empresa.rechazar_empresa(52
                                                                         'PASO')
ERROR - 2018-03-09 13:15:00 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «'NO PASO'»
LINE 2: ...                                                  'NO PASO')
                                                             ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-09 13:15:00 --> Query error: ERROR:  error de sintaxis en o cerca de «'NO PASO'»
LINE 2: ...                                                  'NO PASO')
                                                             ^ - Invalid query: SELECT * FROM empresa.rechazar_empresa(52
                                                                         'NO PASO')
ERROR - 2018-03-09 13:50:13 --> Severity: Warning --> include_once(assets/vuce/js/reportes/v_form_validar_empresa.js): failed to open stream: No such file or directory /web/vuce/application/views/vuce/empresa/v_form_validar_empresa.php 6
ERROR - 2018-03-09 13:50:13 --> Severity: Warning --> include_once(): Failed opening 'assets/vuce/js/reportes/v_form_validar_empresa.js' for inclusion (include_path='.:/usr/share/php:/usr/share/pear') /web/vuce/application/views/vuce/empresa/v_form_validar_empresa.php 6
ERROR - 2018-03-09 13:50:20 --> Severity: Warning --> include_once(assets/vuce/js/reportes/v_form_validar_empresa.js): failed to open stream: No such file or directory /web/vuce/application/views/vuce/empresa/v_form_validar_empresa.php 6
ERROR - 2018-03-09 13:50:20 --> Severity: Warning --> include_once(): Failed opening 'assets/vuce/js/reportes/v_form_validar_empresa.js' for inclusion (include_path='.:/usr/share/php:/usr/share/pear') /web/vuce/application/views/vuce/empresa/v_form_validar_empresa.php 6
ERROR - 2018-03-09 13:51:34 --> Severity: Warning --> include_once(assets/vuce/js/reportes/v_form_validar_empresa.js): failed to open stream: No such file or directory /web/vuce/application/views/vuce/empresa/v_form_validar_empresa.php 6
ERROR - 2018-03-09 13:51:34 --> Severity: Warning --> include_once(): Failed opening 'assets/vuce/js/reportes/v_form_validar_empresa.js' for inclusion (include_path='.:/usr/share/php:/usr/share/pear') /web/vuce/application/views/vuce/empresa/v_form_validar_empresa.php 6
ERROR - 2018-03-09 13:51:41 --> Severity: Warning --> include_once(assets/vuce/js/reportes/v_form_validar_empresa.js): failed to open stream: No such file or directory /web/vuce/application/views/vuce/empresa/v_form_validar_empresa.php 6
ERROR - 2018-03-09 13:51:41 --> Severity: Warning --> include_once(): Failed opening 'assets/vuce/js/reportes/v_form_validar_empresa.js' for inclusion (include_path='.:/usr/share/php:/usr/share/pear') /web/vuce/application/views/vuce/empresa/v_form_validar_empresa.php 6
ERROR - 2018-03-09 14:05:28 --> Severity: Notice --> Undefined index: ID_USUARIO /web/vuce/application/models/intranet/M_intranet.php 244
ERROR - 2018-03-09 14:05:28 --> Severity: Notice --> Undefined index: CODIGO_USUARIO /web/vuce/application/models/intranet/M_intranet.php 245
ERROR - 2018-03-09 14:05:39 --> Severity: Notice --> Undefined index: ID_USUARIO /web/vuce/application/models/intranet/M_intranet.php 244
ERROR - 2018-03-09 14:05:39 --> Severity: Notice --> Undefined index: CODIGO_USUARIO /web/vuce/application/models/intranet/M_intranet.php 245
ERROR - 2018-03-09 14:05:52 --> Severity: Notice --> Undefined index: ID_USUARIO /web/vuce/application/models/intranet/M_intranet.php 244
ERROR - 2018-03-09 14:05:52 --> Severity: Notice --> Undefined index: CODIGO_USUARIO /web/vuce/application/models/intranet/M_intranet.php 245
ERROR - 2018-03-09 14:06:16 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 14:06:16 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 14:57:40 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 14:57:40 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 15:01:03 --> 404 Page Not Found: Ctr_template/form_unidad_medida
ERROR - 2018-03-09 15:01:30 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 15:01:30 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 15:21:43 --> Severity: Warning --> include_once(assets/vuce/js/reportes/v_form_unidad_medida.js): failed to open stream: No such file or directory /web/vuce/application/views/vuce/catalogos/v_form_unidad_medida.php 6
ERROR - 2018-03-09 15:21:43 --> Severity: Warning --> include_once(): Failed opening 'assets/vuce/js/reportes/v_form_unidad_medida.js' for inclusion (include_path='.:/usr/share/php:/usr/share/pear') /web/vuce/application/views/vuce/catalogos/v_form_unidad_medida.php 6
ERROR - 2018-03-09 15:22:02 --> Severity: Warning --> include_once(assets/vuce/js/reportes/v_form_unidad_medida.js): failed to open stream: No such file or directory /web/vuce/application/views/vuce/catalogos/v_form_unidad_medida.php 6
ERROR - 2018-03-09 15:22:02 --> Severity: Warning --> include_once(): Failed opening 'assets/vuce/js/reportes/v_form_unidad_medida.js' for inclusion (include_path='.:/usr/share/php:/usr/share/pear') /web/vuce/application/views/vuce/catalogos/v_form_unidad_medida.php 6
ERROR - 2018-03-09 15:22:31 --> Severity: Warning --> include_once(assets/vuce/js/reportes/v_form_unidad_medida.js): failed to open stream: No such file or directory /web/vuce/application/views/vuce/catalogos/v_form_unidad_medida.php 6
ERROR - 2018-03-09 15:22:31 --> Severity: Warning --> include_once(): Failed opening 'assets/vuce/js/reportes/v_form_unidad_medida.js' for inclusion (include_path='.:/usr/share/php:/usr/share/pear') /web/vuce/application/views/vuce/catalogos/v_form_unidad_medida.php 6
ERROR - 2018-03-09 16:02:26 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 16:02:26 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 16:02:33 --> 404 Page Not Found: Null/index
ERROR - 2018-03-09 16:11:08 --> 404 Page Not Found: Null/index
ERROR - 2018-03-09 16:11:17 --> 404 Page Not Found: vuce/vistas/Ctr_vista_administrador/form_permiso_sistema
ERROR - 2018-03-09 16:12:21 --> 404 Page Not Found: vuce/vistas/Ctr_vista_administrador/form_permiso_sistema
ERROR - 2018-03-09 16:12:24 --> 404 Page Not Found: vuce/vistas/Ctr_vista_administrador/form_permiso_sistema
ERROR - 2018-03-09 16:12:25 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 16:12:25 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 16:18:25 --> 404 Page Not Found: Null/index
ERROR - 2018-03-09 16:19:42 --> 404 Page Not Found: vuce/vistas/Ctr_vista_administrador/form_permiso_sistema
ERROR - 2018-03-09 16:23:26 --> 404 Page Not Found: vuce/vistas/Ctr_vista_administrador/index
ERROR - 2018-03-09 16:36:44 --> 404 Page Not Found: vuce/vistas/Ctr_vista_administrador/index
ERROR - 2018-03-09 16:59:03 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 16:59:03 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 17:00:29 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 17:00:29 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 17:01:04 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 17:01:04 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 17:02:34 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 17:02:34 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 17:06:08 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 17:06:08 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-09 17:07:27 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-09 17:07:27 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
