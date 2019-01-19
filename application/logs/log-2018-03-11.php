<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>

ERROR - 2018-03-11 12:19:55 --> 404 Page Not Found: Null/index
ERROR - 2018-03-11 13:14:54 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-11 13:14:54 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-11 13:55:41 --> 404 Page Not Found: vuce/vistas/Ctr_vista_empresa/data_inicial
ERROR - 2018-03-11 14:05:53 --> 404 Page Not Found: vuce/vistas/Ctr_vista_empresa/data_inicial
ERROR - 2018-03-11 14:12:08 --> 404 Page Not Found: vuce/vistas/Ctr_vista_empresa/estado
ERROR - 2018-03-11 14:12:59 --> 404 Page Not Found: vuce/vistas/Ctr_vista_empresa/estado
ERROR - 2018-03-11 14:15:29 --> Severity: Warning --> pg_query(): Query failed: ERROR:  no existe la columna «ven»
LINE 8:                     WHERE cod_pais = VEN
                                             ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 14:15:29 --> Query error: ERROR:  no existe la columna «ven»
LINE 8:                     WHERE cod_pais = VEN
                                             ^ - Invalid query: SELECT DISTINCT 
                         id_estado, 
                         cod_pais,
                         cod_estado,
                         descripcion,
                         estatus
                    FROM regiones.estado
                    WHERE cod_pais = VEN
                    ORDER BY descripcion ASC
ERROR - 2018-03-11 14:18:49 --> Severity: Warning --> pg_query(): Query failed: ERROR:  no existe la columna «ven»
LINE 9:                     WHERE cod_pais = VEN
                                             ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 14:18:49 --> Query error: ERROR:  no existe la columna «ven»
LINE 9:                     WHERE cod_pais = VEN
                                             ^ - Invalid query: SELECT DISTINCT 
                         id_municipio, 
                         cod_pais,
                         cod_estado,
                         cod_municipio,
                         descripcion,
                         estatus
                    FROM regiones.municipio
                    WHERE cod_pais = VEN
                    AND cod_estado = 03
                    ORDER BY descripcion ASC
ERROR - 2018-03-11 15:22:01 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis al final de la entrada
LINE 17:                     AND id_empresa = 
                                              ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 15:22:01 --> Query error: ERROR:  error de sintaxis al final de la entrada
LINE 17:                     AND id_empresa = 
                                              ^ - Invalid query: SELECT rif,
                         nombre_razon_social razon_social,
                         correo,
                         telf1,
                         telf2,
                         telf3,
                         id_sector sector,
                         cod_pais pais,
                         cod_estado estado,
                         cod_municipio municipio,
                         ciudad,
                         direccion,
                         latitud,
                         longitud
                    FROM empresa.empresa
                    WHERE id_estatus_empresa = 2
                    AND id_empresa = 
ERROR - 2018-03-11 15:22:57 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis al final de la entrada
LINE 17:                     AND id_empresa = 
                                              ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 15:22:57 --> Query error: ERROR:  error de sintaxis al final de la entrada
LINE 17:                     AND id_empresa = 
                                              ^ - Invalid query: SELECT rif,
                         nombre_razon_social razon_social,
                         correo,
                         telf1,
                         telf2,
                         telf3,
                         id_sector sector,
                         cod_pais pais,
                         cod_estado estado,
                         cod_municipio municipio,
                         ciudad,
                         direccion,
                         latitud,
                         longitud
                    FROM empresa.empresa
                    WHERE id_estatus_empresa = 2
                    AND id_empresa = 
ERROR - 2018-03-11 15:23:01 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis al final de la entrada
LINE 17:                     AND id_empresa = 
                                              ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 15:23:01 --> Query error: ERROR:  error de sintaxis al final de la entrada
LINE 17:                     AND id_empresa = 
                                              ^ - Invalid query: SELECT rif,
                         nombre_razon_social razon_social,
                         correo,
                         telf1,
                         telf2,
                         telf3,
                         id_sector sector,
                         cod_pais pais,
                         cod_estado estado,
                         cod_municipio municipio,
                         ciudad,
                         direccion,
                         latitud,
                         longitud
                    FROM empresa.empresa
                    WHERE id_estatus_empresa = 2
                    AND id_empresa = 
ERROR - 2018-03-11 15:23:43 --> Severity: Warning --> pg_query(): Query failed: ERROR:  el operador no existe: character varying = integer
LINE 4:                     WHERE us.identificacion = 1
                                                    ^
HINT:  Ningún operador coincide con el nombre y el tipo de los argumentos. Puede ser necesario agregar conversiones explícitas de tipos. /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 15:23:43 --> Query error: ERROR:  el operador no existe: character varying = integer
LINE 4:                     WHERE us.identificacion = 1
                                                    ^
HINT:  Ningún operador coincide con el nombre y el tipo de los argumentos. Puede ser necesario agregar conversiones explícitas de tipos. - Invalid query: SELECT emp.id_empresa id_empresa
                    FROM usuario.usuario us
                    INNER JOIN empresa.empresa emp ON emp.rif = us.identificacion 
                    WHERE us.identificacion = 1
ERROR - 2018-03-11 15:55:01 --> Severity: Notice --> Undefined index: sector /web/vuce/application/models/vuce/registros/M_empresa.php 71
ERROR - 2018-03-11 15:55:01 --> Severity: Notice --> Undefined index: pais /web/vuce/application/models/vuce/registros/M_empresa.php 72
ERROR - 2018-03-11 15:55:01 --> Severity: Notice --> Undefined index: estado /web/vuce/application/models/vuce/registros/M_empresa.php 73
ERROR - 2018-03-11 15:55:01 --> Severity: Notice --> Undefined index: municipio /web/vuce/application/models/vuce/registros/M_empresa.php 74
ERROR - 2018-03-11 15:55:01 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «,»
LINE 4: ...                                                           ,
                                                                      ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 15:55:01 --> Query error: ERROR:  error de sintaxis en o cerca de «,»
LINE 4: ...                                                           ,
                                                                      ^ - Invalid query: SELECT * FROM empresa.actualizar_datos_basicos('1',
                                                                                  4248798789,
                                                                                  2124654564,
                                                                                  ,
                                                                                  '',
                                                                                  ,
                                                                                  ,
                                                                                  'caracas',
                                                                                  'propatria',
                                                                                   123,
                                                                                   212)
ERROR - 2018-03-11 15:57:48 --> Severity: Notice --> Undefined index: sector /web/vuce/application/models/vuce/registros/M_empresa.php 73
ERROR - 2018-03-11 15:57:48 --> Severity: Notice --> Undefined index: pais /web/vuce/application/models/vuce/registros/M_empresa.php 74
ERROR - 2018-03-11 15:57:48 --> Severity: Notice --> Undefined index: estado /web/vuce/application/models/vuce/registros/M_empresa.php 75
ERROR - 2018-03-11 15:57:48 --> Severity: Notice --> Undefined index: municipio /web/vuce/application/models/vuce/registros/M_empresa.php 76
ERROR - 2018-03-11 15:57:48 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «,»
LINE 4: ...                                                           ,
                                                                      ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 15:57:48 --> Query error: ERROR:  error de sintaxis en o cerca de «,»
LINE 4: ...                                                           ,
                                                                      ^ - Invalid query: SELECT * FROM empresa.actualizar_datos_basicos('22',
                                                                                  4143129716,
                                                                                  5478978978,
                                                                                  ,
                                                                                  '',
                                                                                  ,
                                                                                  ,
                                                                                  'caracas',
                                                                                  'propatria',
                                                                                   123,
                                                                                   3456)
ERROR - 2018-03-11 16:00:17 --> Severity: Notice --> Undefined index: sector /web/vuce/application/models/vuce/registros/M_empresa.php 73
ERROR - 2018-03-11 16:00:17 --> Severity: Notice --> Undefined index: pais /web/vuce/application/models/vuce/registros/M_empresa.php 74
ERROR - 2018-03-11 16:00:17 --> Severity: Notice --> Undefined index: estado /web/vuce/application/models/vuce/registros/M_empresa.php 75
ERROR - 2018-03-11 16:00:17 --> Severity: Notice --> Undefined index: municipio /web/vuce/application/models/vuce/registros/M_empresa.php 76
ERROR - 2018-03-11 16:00:17 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «,»
LINE 4: ...                                                           ,
                                                                      ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 16:00:17 --> Query error: ERROR:  error de sintaxis en o cerca de «,»
LINE 4: ...                                                           ,
                                                                      ^ - Invalid query: SELECT * FROM empresa.actualizar_datos_basicos('22',
                                                                                  4143129716,
                                                                                  5478978978,
                                                                                  ,
                                                                                  '',
                                                                                  ,
                                                                                  ,
                                                                                  'caracas',
                                                                                  'propatria',
                                                                                   123,
                                                                                   3456)
ERROR - 2018-03-11 16:03:56 --> Severity: Warning --> pg_query(): Query failed: ERROR:  no existe la función empresa.actualizar_datos_basicos(unknown, bigint, integer, integer, unknown, integer, integer, unknown, unknown, integer, integer)
LINE 1: SELECT * FROM empresa.actualizar_datos_basicos('22',
                      ^
HINT:  Ninguna función coincide en el nombre y tipos de argumentos. Puede ser necesario agregar conversión explícita de tipos. /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 16:03:56 --> Query error: ERROR:  no existe la función empresa.actualizar_datos_basicos(unknown, bigint, integer, integer, unknown, integer, integer, unknown, unknown, integer, integer)
LINE 1: SELECT * FROM empresa.actualizar_datos_basicos('22',
                      ^
HINT:  Ninguna función coincide en el nombre y tipos de argumentos. Puede ser necesario agregar conversión explícita de tipos. - Invalid query: SELECT * FROM empresa.actualizar_datos_basicos('22',
                                                                                  4245456456,
                                                                                  2124564564,
                                                                                  1,
                                                                                  'VEN',
                                                                                  01,
                                                                                  01,
                                                                                  'caracas',
                                                                                  'propatria',
                                                                                   212,
                                                                                   2345)
ERROR - 2018-03-11 16:06:06 --> Severity: Warning --> pg_query(): Query failed: ERROR:  no existe la función empresa.actualizar_datos_basicos(integer, unknown, unknown, integer, unknown, integer, integer, unknown, unknown, integer, integer)
LINE 1: SELECT * FROM empresa.actualizar_datos_basicos(22,
                      ^
HINT:  Ninguna función coincide en el nombre y tipos de argumentos. Puede ser necesario agregar conversión explícita de tipos. /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 16:06:06 --> Query error: ERROR:  no existe la función empresa.actualizar_datos_basicos(integer, unknown, unknown, integer, unknown, integer, integer, unknown, unknown, integer, integer)
LINE 1: SELECT * FROM empresa.actualizar_datos_basicos(22,
                      ^
HINT:  Ninguna función coincide en el nombre y tipos de argumentos. Puede ser necesario agregar conversión explícita de tipos. - Invalid query: SELECT * FROM empresa.actualizar_datos_basicos(22,
                                                                                '2124564789',
                                                                                '2655789789',
                                                                                 1,
                                                                                'VEN',
                                                                                 01,
                                                                                 01,
                                                                                'caracas',
                                                                                'pro',
                                                                                 2133,
                                                                                 2145)
ERROR - 2018-03-11 17:01:16 --> Severity: Notice --> Undefined index: reg_mercantil /web/vuce/application/models/vuce/registros/M_empresa.php 110
ERROR - 2018-03-11 17:01:16 --> Severity: Notice --> Undefined index: num_reg /web/vuce/application/models/vuce/registros/M_empresa.php 111
ERROR - 2018-03-11 17:01:16 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «,»
LINE 2: ...                                                          , 
                                                                     ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 17:01:16 --> Query error: ERROR:  error de sintaxis en o cerca de «,»
LINE 2: ...                                                          , 
                                                                     ^ - Invalid query: SELECT * FROM empresa.insertar_reg_mercantil('j-0000000222',
                                                                                , 
                                                                                , 
                                                                                'v2354',
                                                                                '222',
                                                                                123123)
ERROR - 2018-03-11 17:02:03 --> Severity: Notice --> Undefined index: reg_mercantil /web/vuce/application/models/vuce/registros/M_empresa.php 110
ERROR - 2018-03-11 17:02:03 --> Severity: Notice --> Undefined index: num_reg /web/vuce/application/models/vuce/registros/M_empresa.php 111
ERROR - 2018-03-11 17:02:03 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «,»
LINE 2: ...                                                          , 
                                                                     ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 17:02:03 --> Query error: ERROR:  error de sintaxis en o cerca de «,»
LINE 2: ...                                                          , 
                                                                     ^ - Invalid query: SELECT * FROM empresa.insertar_reg_mercantil('j-0000000222',
                                                                                , 
                                                                                , 
                                                                               'v2354',
                                                                               '222',
                                                                                22/04/1994,
                                                                                123123)
ERROR - 2018-03-11 17:02:24 --> Severity: Notice --> Undefined index: reg_mercantil /web/vuce/application/models/vuce/registros/M_empresa.php 110
ERROR - 2018-03-11 17:02:24 --> Severity: Notice --> Undefined index: num_reg /web/vuce/application/models/vuce/registros/M_empresa.php 111
ERROR - 2018-03-11 17:02:24 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «,»
LINE 2: ...                                                          , 
                                                                     ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 17:02:24 --> Query error: ERROR:  error de sintaxis en o cerca de «,»
LINE 2: ...                                                          , 
                                                                     ^ - Invalid query: SELECT * FROM empresa.insertar_reg_mercantil('j-0000000222',
                                                                                , 
                                                                                , 
                                                                               'v2354',
                                                                               '222',
                                                                                22/04/1994,
                                                                                123123)
ERROR - 2018-03-11 17:14:20 --> Severity: Notice --> Undefined index: reg_mercantil /web/vuce/application/models/vuce/registros/M_empresa.php 110
ERROR - 2018-03-11 17:14:20 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «,»
LINE 2: ...                                                          , 
                                                                     ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 17:14:20 --> Query error: ERROR:  error de sintaxis en o cerca de «,»
LINE 2: ...                                                          , 
                                                                     ^ - Invalid query: SELECT * FROM empresa.insertar_reg_mercantil('j-0000000000',
                                                                                , 
                                                                                2131, 
                                                                               '23123',
                                                                               '23123',
                                                                                4564)
ERROR - 2018-03-11 17:14:59 --> Severity: Notice --> Undefined index: reg_mercantil /web/vuce/application/models/vuce/registros/M_empresa.php 110
ERROR - 2018-03-11 17:14:59 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «,»
LINE 2: ...                                                          , 
                                                                     ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 17:14:59 --> Query error: ERROR:  error de sintaxis en o cerca de «,»
LINE 2: ...                                                          , 
                                                                     ^ - Invalid query: SELECT * FROM empresa.insertar_reg_mercantil('j-0000000000',
                                                                                , 
                                                                                123, 
                                                                               'v123',
                                                                               '144',
                                                                                4564)
ERROR - 2018-03-11 17:16:34 --> Severity: Notice --> Undefined index: reg_mercantil /web/vuce/application/models/vuce/registros/M_empresa.php 110
ERROR - 2018-03-11 17:16:34 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «,»
LINE 2: ...                                                          , 
                                                                     ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 17:16:34 --> Query error: ERROR:  error de sintaxis en o cerca de «,»
LINE 2: ...                                                          , 
                                                                     ^ - Invalid query: SELECT * FROM empresa.insertar_reg_mercantil('j-0000000000',
                                                                                , 
                                                                                123, 
                                                                               'v123',
                                                                               '144',
                                                                                4564)
ERROR - 2018-03-11 17:17:15 --> Severity: Notice --> Undefined index: reg_mercantil /web/vuce/application/models/vuce/registros/M_empresa.php 110
ERROR - 2018-03-11 17:17:15 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «,»
LINE 2: ...                                                          , 
                                                                     ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 17:17:15 --> Query error: ERROR:  error de sintaxis en o cerca de «,»
LINE 2: ...                                                          , 
                                                                     ^ - Invalid query: SELECT * FROM empresa.insertar_reg_mercantil('j-0000000000',
                                                                                , 
                                                                                123, 
                                                                               'v123',
                                                                               '144',
                                                                                4564)
ERROR - 2018-03-11 17:34:23 --> Severity: Notice --> Undefined index: tlf1 /web/vuce/application/models/vuce/registros/M_empresa.php 144
ERROR - 2018-03-11 17:34:23 --> Severity: Notice --> Undefined index: tlf2 /web/vuce/application/models/vuce/registros/M_empresa.php 145
ERROR - 2018-03-11 17:34:23 --> Severity: Notice --> Undefined index: tlf3 /web/vuce/application/models/vuce/registros/M_empresa.php 146
ERROR - 2018-03-11 17:34:23 --> Severity: Warning --> pg_query(): Query failed: ERROR:  una cadena de caracteres entre comillas está inconclusa en o cerca de «'alex@gmail.com
                                                                               '',
                                                                               '',
                                                                               '',)»
LINE 5: ...                                                  'alex@gmai...
                                                             ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 17:34:23 --> Query error: ERROR:  una cadena de caracteres entre comillas está inconclusa en o cerca de «'alex@gmail.com
                                                                               '',
                                                                               '',
                                                                               '',)»
LINE 5: ...                                                  'alex@gmai...
                                                             ^ - Invalid query: SELECT * FROM empresa.insertar_reg_mercantil('j-0000000000',
                                                                                23617598, 
                                                                               'alex',
                                                                               'guilarte',
                                                                               'alex@gmail.com
                                                                               '',
                                                                               '',
                                                                               '',)
ERROR - 2018-03-11 17:37:19 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «(»
LINE 6: ...                                                 '(414) 554-...
                                                             ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 17:37:19 --> Query error: ERROR:  error de sintaxis en o cerca de «(»
LINE 6: ...                                                 '(414) 554-...
                                                             ^ - Invalid query: SELECT * FROM empresa.insertar_reg_mercantil('j-2323232323',
                                                                                23617598, 
                                                                               'alex',
                                                                               'guilarte',
                                                                               'alex@gmail.com
                                                                               '(414) 554-6545',
                                                                               '(426) 546-4878',
                                                                               '(212) 546-8478',)
ERROR - 2018-03-11 17:38:36 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «4142123123»
LINE 6: ...                                                 '4142123123...
                                                             ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 17:38:36 --> Query error: ERROR:  error de sintaxis en o cerca de «4142123123»
LINE 6: ...                                                 '4142123123...
                                                             ^ - Invalid query: SELECT * FROM empresa.insertar_reg_mercantil('j-0000000000',
                                                                                23617598, 
                                                                               'alex',
                                                                               'guilarte',
                                                                               'alex@gmail.com
                                                                               '4142123123',
                                                                               '4125464564',
                                                                               '2121584847',)
ERROR - 2018-03-11 17:38:58 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «4142123123»
LINE 6: ...                                                 '4142123123...
                                                             ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 17:38:58 --> Query error: ERROR:  error de sintaxis en o cerca de «4142123123»
LINE 6: ...                                                 '4142123123...
                                                             ^ - Invalid query: SELECT * FROM empresa.insertar_reg_mercantil('j-0000000000',
                                                                                23617598, 
                                                                               'alex',
                                                                               'guilarte',
                                                                               'alex@gmail.com,
                                                                               '4142123123',
                                                                               '4125464564',
                                                                               '2121584847',)
ERROR - 2018-03-11 17:39:52 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «4142123123»
LINE 6: ...                                                 '4142123123...
                                                             ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 17:39:52 --> Query error: ERROR:  error de sintaxis en o cerca de «4142123123»
LINE 6: ...                                                 '4142123123...
                                                             ^ - Invalid query: SELECT * FROM empresa.insertar_reg_mercantil('j-0000000000',
                                                                                23617598, 
                                                                               'alex',
                                                                               'guilarte',
                                                                               'alex@gmail.com,
                                                                               '4142123123',
                                                                               '4125464564',
                                                                               '2121584847')
ERROR - 2018-03-11 17:40:55 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «4142123123»
LINE 6: ...                                                 '4142123123...
                                                             ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 17:40:55 --> Query error: ERROR:  error de sintaxis en o cerca de «4142123123»
LINE 6: ...                                                 '4142123123...
                                                             ^ - Invalid query: SELECT * FROM empresa.insertar_rep_legal('j-0000000000',
                                                                                23617598, 
                                                                               'alex',
                                                                               'guilarte',
                                                                               'alex@gmail.com,
                                                                               '4142123123',
                                                                               '4125464564',
                                                                               '2121584847')
ERROR - 2018-03-11 17:41:10 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «414212312»
LINE 6: ...                                                 '414212312'...
                                                             ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 17:41:10 --> Query error: ERROR:  error de sintaxis en o cerca de «414212312»
LINE 6: ...                                                 '414212312'...
                                                             ^ - Invalid query: SELECT * FROM empresa.insertar_rep_legal('j-0000000000',
                                                                                23617598, 
                                                                               'alex',
                                                                               'guilarte',
                                                                               'alex@gmail.com,
                                                                               '414212312',
                                                                               '4125464564',
                                                                               '2121584847')
ERROR - 2018-03-11 17:47:53 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-11 17:47:53 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-11 17:48:21 --> 404 Page Not Found: Null/index
ERROR - 2018-03-11 17:50:33 --> Severity: Warning --> pg_query(): Query failed: ERROR:  inserción o actualización en la tabla «rep_legal» viola la llave foránea «fk_empresa_rep_legal»
DETAIL:  La llave (rif)=(j-1231231231) no está presente en la tabla «empresa».
CONTEXT:  sentencia SQL: «INSERT INTO empresa.rep_legal ( 
                                                    id_rep_legal,
                                                    rif,
                                                    ci,
                                                    nombre,
                                                    apellido,
                                                    correo,
                                                    telf1,
                                                    telf2,
                                                    telf3,
                                                    estatus
                                                  )VALUES(
                                                         v_id_rep_legal,
                                                         p_rif,
                                                         p_ci,
                                                         p_nombre,
                                                         p_apellido,
                                                         p_correo,
                                                         p_telf1,
                                                         p_telf2,
                                                         p_telf3,
                                                         1
                                                         )»
función PL/pgSQL empresa.insertar_rep_legal(character varying,integer,character varying,character varying,character varying,character varying,character varying,character varying) en la línea 19 en sentencia SQL /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 17:50:33 --> Query error: ERROR:  inserción o actualización en la tabla «rep_legal» viola la llave foránea «fk_empresa_rep_legal»
DETAIL:  La llave (rif)=(j-1231231231) no está presente en la tabla «empresa».
CONTEXT:  sentencia SQL: «INSERT INTO empresa.rep_legal ( 
                                                    id_rep_legal,
                                                    rif,
                                                    ci,
                                                    nombre,
                                                    apellido,
                                                    correo,
                                                    telf1,
                                                    telf2,
                                                    telf3,
                                                    estatus
                                                  )VALUES(
                                                         v_id_rep_legal,
                                                         p_rif,
                                                         p_ci,
                                                         p_nombre,
                                                         p_apellido,
                                                         p_correo,
                                                         p_telf1,
                                                         p_telf2,
                                                         p_telf3,
                                                         1
                                                         )»
función PL/pgSQL empresa.insertar_rep_legal(character varying,integer,character varying,character varying,character varying,character varying,character varying,character varying) en la línea 19 en sentencia SQL - Invalid query: SELECT * FROM empresa.insertar_rep_legal('j-1231231231',
                                                                            23617598, 
                                                                           'alex',
                                                                           'guilarte',
                                                                           'alex@gmail.com',
                                                                           '4140296288',
                                                                           '0',
                                                                           '0')
ERROR - 2018-03-11 18:06:09 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 60
ERROR - 2018-03-11 18:06:09 --> Severity: Notice --> Undefined property: Ctr_login::$usuarioss /web/vuce/application/controllers/Ctr_login.php 61
ERROR - 2018-03-11 18:06:14 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis al final de la entrada
LINE 23:                     AND id_empresa = 
                                              ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 18:06:14 --> Query error: ERROR:  error de sintaxis al final de la entrada
LINE 23:                     AND id_empresa = 
                                              ^ - Invalid query: SELECT emp.rif,
                        emp.nombre_razon_social razon_social,
                        emp.correo,
                        emp.telf1,
                        emp.telf2,
                        emp.telf3,
                        emp.id_sector sector,
                        emp.cod_pais id_pais,
                        pa.descripcion desc_pais,
                        emp.cod_estado id_estado,
                        est.descripcion desc_estado,
                        emp.cod_municipio id_municipio,
                        mun.descripcion desc_municipio,
                        emp.ciudad,
                        emp.direccion,
                        emp.latitud,
                        emp.longitud
                    FROM empresa.empresa emp
                    INNER JOIN regiones.pais pa ON pa.cod_pais = emp.cod_pais
                    INNER JOIN regiones.estado est ON est.cod_estado = emp.cod_estado
                    INNER JOIN regiones.municipio mun ON mun.cod_municipio = emp.cod_municipio
                    WHERE id_estatus_empresa = 2
                    AND id_empresa = 
ERROR - 2018-03-11 18:07:20 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis al final de la entrada
LINE 23:                     AND id_empresa = 
                                              ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 18:07:20 --> Query error: ERROR:  error de sintaxis al final de la entrada
LINE 23:                     AND id_empresa = 
                                              ^ - Invalid query: SELECT emp.rif,
                        emp.nombre_razon_social razon_social,
                        emp.correo,
                        emp.telf1,
                        emp.telf2,
                        emp.telf3,
                        emp.id_sector sector,
                        emp.cod_pais id_pais,
                        pa.descripcion desc_pais,
                        emp.cod_estado id_estado,
                        est.descripcion desc_estado,
                        emp.cod_municipio id_municipio,
                        mun.descripcion desc_municipio,
                        emp.ciudad,
                        emp.direccion,
                        emp.latitud,
                        emp.longitud
                    FROM empresa.empresa emp
                    INNER JOIN regiones.pais pa ON pa.cod_pais = emp.cod_pais
                    INNER JOIN regiones.estado est ON est.cod_estado = emp.cod_estado
                    INNER JOIN regiones.municipio mun ON mun.cod_municipio = emp.cod_municipio
                    WHERE id_estatus_empresa = 2
                    AND id_empresa = 
ERROR - 2018-03-11 18:13:11 --> Severity: Compile Error --> Cannot redeclare Ctr_vista_administrador::form_permiso_sistema() /web/vuce/application/controllers/vuce/vistas/Ctr_vista_administrador.php 103
ERROR - 2018-03-11 18:22:42 --> Severity: Warning --> pg_query(): Query failed: ERROR:  invalid input syntax for integer: &quot;G-0000000000&quot;
LINE 10:                     WHERE emp.id_empresa = 'G-0000000000'
                                                    ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 18:22:42 --> Query error: ERROR:  invalid input syntax for integer: "G-0000000000"
LINE 10:                     WHERE emp.id_empresa = 'G-0000000000'
                                                    ^ - Invalid query: SELECT emp.rif rif_empresa,
                         reg.rif,
                         reg_mercantil,
                         num_reg,
                         tomo,
                         folio,
                         capital
                    FROM empresa.reg_mercantil reg
                    RIGHT JOIN empresa.empresa emp ON emp.rif = reg.rif
                    WHERE emp.id_empresa = 'G-0000000000'
ERROR - 2018-03-11 18:26:47 --> Severity: Notice --> Undefined index: rif_merc /web/vuce/application/models/vuce/registros/M_empresa.php 109
ERROR - 2018-03-11 18:26:47 --> Severity: Warning --> pg_query(): Query failed: ERROR:  inserción o actualización en la tabla «reg_mercantil» viola la llave foránea «fk_empresa_reg_merc»
DETAIL:  La llave (rif)=() no está presente en la tabla «empresa».
CONTEXT:  sentencia SQL: «INSERT INTO empresa.reg_mercantil ( 
                                                    id_reg_mercantil,
                                                    rif,
                                                    reg_mercantil,
                                                    num_reg,
                                                    tomo,
                                                    folio,
                                                    fecha_registro,
                                                    capital,
                                                    estatus
                                                  )VALUES(
                                                         v_id_reg_mercantil,
                                                         p_rif,
                                                         p_reg_mercantil,
                                                         p_num_reg,
                                                         p_tomo,
                                                         p_folio,
                                                         current_date,
                                                         p_capital,
                                                         1
                                                         )»
función PL/pgSQL empresa.insertar_reg_mercantil(character varying,integer,integer,character varying,character varying,numeric) en la línea 19 en sentencia SQL /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 18:26:47 --> Query error: ERROR:  inserción o actualización en la tabla «reg_mercantil» viola la llave foránea «fk_empresa_reg_merc»
DETAIL:  La llave (rif)=() no está presente en la tabla «empresa».
CONTEXT:  sentencia SQL: «INSERT INTO empresa.reg_mercantil ( 
                                                    id_reg_mercantil,
                                                    rif,
                                                    reg_mercantil,
                                                    num_reg,
                                                    tomo,
                                                    folio,
                                                    fecha_registro,
                                                    capital,
                                                    estatus
                                                  )VALUES(
                                                         v_id_reg_mercantil,
                                                         p_rif,
                                                         p_reg_mercantil,
                                                         p_num_reg,
                                                         p_tomo,
                                                         p_folio,
                                                         current_date,
                                                         p_capital,
                                                         1
                                                         )»
función PL/pgSQL empresa.insertar_reg_mercantil(character varying,integer,integer,character varying,character varying,numeric) en la línea 19 en sentencia SQL - Invalid query: SELECT * FROM empresa.insertar_reg_mercantil('',
                                                                                123456, 
                                                                                123, 
                                                                               'v1213',
                                                                               'g465456',
                                                                                89555)
ERROR - 2018-03-11 18:38:30 --> 404 Page Not Found: vuce/registros/C_empresa/data_inicial_rep_legal
ERROR - 2018-03-11 18:39:28 --> 404 Page Not Found: vuce/registros/C_empresa/data_inicial_rep_legal
ERROR - 2018-03-11 18:40:05 --> 404 Page Not Found: vuce/registros/C_empresa/data_inicial_rep_legal
ERROR - 2018-03-11 18:41:25 --> 404 Page Not Found: vuce/registros/C_empresa/data_inicial_rep_legal
ERROR - 2018-03-11 18:42:37 --> 404 Page Not Found: vuce/registros/C_empresa/data_inicial_rep_legal
ERROR - 2018-03-11 18:57:09 --> Severity: Warning --> pg_query(): Query failed: ERROR:  error de sintaxis en o cerca de «JOIN»
LINE 10:                     RIGHT JOIN empresa.empresa emp ON emp.ri...
                                   ^ /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 18:57:09 --> Query error: ERROR:  error de sintaxis en o cerca de «JOIN»
LINE 10:                     RIGHT JOIN empresa.empresa emp ON emp.ri...
                                   ^ - Invalid query: SELECT emp.rif,
                         rep.ci,
                         rep.nombre,
                         rep.apellido,
                         rep.correo,
                         rep.telf1,
                         rep.telf2,
                         rep.telf3
                    FROM empresa.rep_legal rep,
                    RIGHT JOIN empresa.empresa emp ON emp.rif = rep.rif
                    WHERE emp.id_empresa = 52
ERROR - 2018-03-11 19:00:44 --> Severity: Notice --> Undefined index: rif /web/vuce/application/models/vuce/registros/M_empresa.php 141
ERROR - 2018-03-11 19:00:44 --> Severity: Notice --> Undefined index: correo /web/vuce/application/models/vuce/registros/M_empresa.php 145
ERROR - 2018-03-11 19:00:44 --> Severity: Warning --> pg_query(): Query failed: ERROR:  inserción o actualización en la tabla «rep_legal» viola la llave foránea «fk_empresa_rep_legal»
DETAIL:  La llave (rif)=() no está presente en la tabla «empresa».
CONTEXT:  sentencia SQL: «INSERT INTO empresa.rep_legal ( 
                                                    id_rep_legal,
                                                    rif,
                                                    ci,
                                                    nombre,
                                                    apellido,
                                                    correo,
                                                    telf1,
                                                    telf2,
                                                    telf3,
                                                    estatus
                                                  )VALUES(
                                                         v_id_rep_legal,
                                                         p_rif,
                                                         p_ci,
                                                         p_nombre,
                                                         p_apellido,
                                                         p_correo,
                                                         p_telf1,
                                                         p_telf2,
                                                         p_telf3,
                                                         1
                                                         )»
función PL/pgSQL empresa.insertar_rep_legal(character varying,integer,character varying,character varying,character varying,character varying,character varying,character varying) en la línea 19 en sentencia SQL /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 19:00:44 --> Query error: ERROR:  inserción o actualización en la tabla «rep_legal» viola la llave foránea «fk_empresa_rep_legal»
DETAIL:  La llave (rif)=() no está presente en la tabla «empresa».
CONTEXT:  sentencia SQL: «INSERT INTO empresa.rep_legal ( 
                                                    id_rep_legal,
                                                    rif,
                                                    ci,
                                                    nombre,
                                                    apellido,
                                                    correo,
                                                    telf1,
                                                    telf2,
                                                    telf3,
                                                    estatus
                                                  )VALUES(
                                                         v_id_rep_legal,
                                                         p_rif,
                                                         p_ci,
                                                         p_nombre,
                                                         p_apellido,
                                                         p_correo,
                                                         p_telf1,
                                                         p_telf2,
                                                         p_telf3,
                                                         1
                                                         )»
función PL/pgSQL empresa.insertar_rep_legal(character varying,integer,character varying,character varying,character varying,character varying,character varying,character varying) en la línea 19 en sentencia SQL - Invalid query: SELECT * FROM empresa.insertar_rep_legal('',
                                                                            23617598, 
                                                                           'alex',
                                                                           'guilarte',
                                                                           '',
                                                                           '4456456456',
                                                                           '8798789789',
                                                                           '5465456456')
ERROR - 2018-03-11 19:00:44 --> Severity: Warning --> Cannot modify header information - headers already sent by (output started at /web/vuce/system/core/Exceptions.php:272) /web/vuce/system/core/Common.php 569
ERROR - 2018-03-11 19:02:08 --> Severity: Notice --> Undefined index: rif /web/vuce/application/models/vuce/registros/M_empresa.php 141
ERROR - 2018-03-11 19:02:08 --> Severity: Warning --> pg_query(): Query failed: ERROR:  inserción o actualización en la tabla «rep_legal» viola la llave foránea «fk_empresa_rep_legal»
DETAIL:  La llave (rif)=() no está presente en la tabla «empresa».
CONTEXT:  sentencia SQL: «INSERT INTO empresa.rep_legal ( 
                                                    id_rep_legal,
                                                    rif,
                                                    ci,
                                                    nombre,
                                                    apellido,
                                                    correo,
                                                    telf1,
                                                    telf2,
                                                    telf3,
                                                    estatus
                                                  )VALUES(
                                                         v_id_rep_legal,
                                                         p_rif,
                                                         p_ci,
                                                         p_nombre,
                                                         p_apellido,
                                                         p_correo,
                                                         p_telf1,
                                                         p_telf2,
                                                         p_telf3,
                                                         1
                                                         )»
función PL/pgSQL empresa.insertar_rep_legal(character varying,integer,character varying,character varying,character varying,character varying,character varying,character varying) en la línea 19 en sentencia SQL /web/vuce/system/database/drivers/postgre/postgre_driver.php 242
ERROR - 2018-03-11 19:02:08 --> Query error: ERROR:  inserción o actualización en la tabla «rep_legal» viola la llave foránea «fk_empresa_rep_legal»
DETAIL:  La llave (rif)=() no está presente en la tabla «empresa».
CONTEXT:  sentencia SQL: «INSERT INTO empresa.rep_legal ( 
                                                    id_rep_legal,
                                                    rif,
                                                    ci,
                                                    nombre,
                                                    apellido,
                                                    correo,
                                                    telf1,
                                                    telf2,
                                                    telf3,
                                                    estatus
                                                  )VALUES(
                                                         v_id_rep_legal,
                                                         p_rif,
                                                         p_ci,
                                                         p_nombre,
                                                         p_apellido,
                                                         p_correo,
                                                         p_telf1,
                                                         p_telf2,
                                                         p_telf3,
                                                         1
                                                         )»
función PL/pgSQL empresa.insertar_rep_legal(character varying,integer,character varying,character varying,character varying,character varying,character varying,character varying) en la línea 19 en sentencia SQL - Invalid query: SELECT * FROM empresa.insertar_rep_legal('',
                                                                            23617598, 
                                                                           'alex',
                                                                           'guilarte',
                                                                           'alex@gmail.com',
                                                                           '4145646545',
                                                                           '2222564564',
                                                                           '2366465456')
ERROR - 2018-03-11 19:37:53 --> 404 Page Not Found: vuce/administrador/C_administrador/data_inicial_datos_basicos
ERROR - 2018-03-11 20:13:50 --> 404 Page Not Found: vuce/Dist/img
