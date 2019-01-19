<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Eventos</title>

    <?php
		//CSS principal de Bootstrap
		echo css_asset('bootstrap.min.css','bootstrap-3.3.7');
		//CSS para el tipo de fuentes e iconos
		echo css_asset('font-awesome.min.css','font-awesome-4.7.0');
		//CSS propio de la vista
		echo css_asset('v_index.css','intranet');
	
		//JS principal de Jquery
		echo js_asset('jquery-2.2.4.min.js','jquery');
		//JS principal de Jquery UI
		echo js_asset('jquery-ui.min.js','jquery-ui-1.11.4');
		//JS principal de Bootstrap
		echo js_asset('bootstrap.min.js','bootstrap-3.3.7');
		//JS para customizar los scrollbars
		echo js_asset('enscroll-0.6.2.min.js','jquery');
		//JS del Socket.io
		echo js_asset('socket.io-1.4.5.js','socket.io');
		//JS propio de la vista
		echo js_asset('v_index.js','intranet');
    ?>

</head>
    
    <body>
        
        <!-- Capa que contiene el cintillo gubernamental -->
        <div id="capa_cintillo">
            <div></div>
            <div></div>
        </div>
        
        <!-- Capa que contiene las capas del formulario de autenticación y contenido intranet -->
        <div>
            
            <!-- Capa que funciona como riel deslizador de la intranet -->
            <div>
                
                <!-- Capa que contiene el formulario de autenticación -->
                <div id="capa_autenticacion">
                    <div>
                      <div>Inicia sesión para acceder a las aplicaciones</div>
                      <div>
                         <div>
                             <div class="fa fa-arrow-left"></div>
                             <div></div>
                         </div>
                         <div>
                            <form>
                                <table>
                                    <tr>
                                        <td>
                                            <div></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>
                                                <div>
                                                    <input type="email" name="email" size="30" maxlength="30" placeholder="Tu correo ó Cuenta de usuario">
                                                    <input type="password" name="psw" placeholder="Contraseña" value="">
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div></div>
                                        </td>
                                    </tr>                       
                                    <tr>
                                        <td>
                                            <div>  
                                                <div>
                                                    <input type="button" size="30" maxlength="30" value="Siguiente">
                                                    <input type="button" size="30" maxlength="30" hidden="hidden" value="Iniciar Sesión">
                                                 </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <!-- <a href="">Olvidé mis datos</a> -->
                                            <a href="<?php echo site_url('index.php/clap/registro/c_empresa_clap/form_empresa_clap') ?>">Registrarse</a> 
                                        </td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                      </div>
                    </div>
                </div>
                <!-- Fin de la capa que contiene el formulario de autenticación -->
                        
                <!-- Contenedor de la página -->
                <div id="capa_intranet" class="container-fluid">
                     
                    <!-- Capa donde se mostrara el menú izquierdo -->
                    <div id="menu_izquierda" class="container-fluid">
                                   
                        <div class="usuario">
                            <div></div> 
                            <div class="capa_nomb_usuario">
                                <div>Bienvenido,</div>
                                <div class="nombre_usuario"></div>
                            </div>
                        </div>
                        
                        <div class="titulo_menu">
                            <div class="nombre_sistema"></div>
                        </div>
                        
                        <div class="capa_items_menus">
                        	<ul id="menu"></ul>
                        </div>
                        
                        <!--<div id="footer_menu"></div>-->
                        
                    </div>
            
                    <!-- Capa donde se mostrara el menú arriba -->
                    <div id="menu_arriba" class="container-fluid">
                        
                        <div>
                        	<i id="minimizar_menu" class="fa fa-bars" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Ocultar Menú"></i>
                        </div>
                        
                        <div class="dropdown">
                            <div class="dropdown-toggle opcion_usuario" data-toggle="dropdown">
                               <img src="../../assets/modules/intranet/images/user_default.png">
                          	   <span class="nombre_usuario"></span>
                               <span class=" fa fa-angle-down"></span>
                            </div>
                            <ul id="menu_opc_usuario" class="dropdown-menu">
                               <li id="1">
                                   Cerrar sesión
                                   <i class="fa fa-sign-out" aria-hidden="true"></i>
                               </li>
 								<li id="2" class="opc_cta_usuario">
                                   Opciones de cuenta
                                   <i class="fa fa-cog" aria-hidden="true"></i>
                                </li>                              
                            </ul>
                        </div>
  
                        <!-- Notificaciones-->
<!--                        <div data-toggle="tooltip" title="Notificaciones" data-placement="bottom" id="notificaciones">
                        	<i class="fa fa-bell" aria-hidden="true"></i>
                            <span id="num_mensaje"></span>
                        </div> -->
 
                    </div>
            
                    <!-- Capa donde se mostrara el contenido del ménu -->
                    <div id="capa_contenido" class="container-fluid">
            
                        <iframe></iframe>
            
                    </div>
            
                </div>
                <!-- Fin del contenedor de la página -->
            
            </div>
            <!-- Fin de la capa del riel de la intranet -->
            
        </div>
        <!-- Fin de la capa que contiene las capas del formulario de autenticación y contenido intranet -->
        
    </body>
    
</html>
