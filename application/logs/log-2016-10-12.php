<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>

ERROR - 2016-10-12 16:22:59 --> Severity: Warning --> date() expects at least 1 parameter, 0 given /web/contraloriaclap/application/views/themes/default.php 197
ERROR - 2016-10-12 17:08:55 --> Query error: Table 'smsd.proveedores' doesn't exist - Invalid query:   SELECT p.id, e.nombre AS estado, p.nombre, p.direccion, p.telefono, p.tipo, p.rif, p.afiliada, p.estatus, p.sucursal
                    FROM proveedores p, estado e
                    WHERE p.codigoestado = e.codigoestado
                    ORDER BY id ASC
ERROR - 2016-10-12 18:40:36 --> Query error: Table 'smsd.proveedores' doesn't exist - Invalid query:   SELECT p.id, e.nombre AS estado, p.nombre, p.direccion, p.telefono, p.tipo, p.rif, p.afiliada, p.estatus, p.sucursal
                    FROM proveedores p, estado e
                    WHERE p.codigoestado = e.codigoestado
                    ORDER BY id ASC
