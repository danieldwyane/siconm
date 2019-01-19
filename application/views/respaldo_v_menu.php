<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
            
          <img src="<?php echo base_url()?>application/images/1474669785_user.png" class="img-circle" alt="User Image">
          <!--<img src="<?php //echo base_url()?>assets/themes/default/images/img-clap.png" class="img-circle" alt="User Image">-->
        </div>
        <div class="pull-left info">
          <p><?php echo $this->CI->session->userdata('login')==''?'Administrador':$this->CI->session->userdata('login');?></p>
          <a href="#"><i class="fa fa-circle text-green"></i> En Linea</a>
        </div>
      </div>
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="header">MENU</li>
<!--        <li class="treeview">
            <a href="#">
                <i class="fa fa-binoculars"></i><span>Register</span>
                <span class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                </span>
            </a>
            <ul class="treeview-menu">
                <li class="active"><a href="<?php echo site_url('ctr_template/establecimiento'); ?>"><i class="fa fa-circle-o"></i> Establishment</a></li>
            </ul>
        </li>-->
        <li class="treeview">
            <a href="#">
                <i class="fa fa-file-text"></i><span>Validar</span>
                <span class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                </span>
            </a>
            <ul class="treeview-menu">
                <li class="active"><a href="<?php echo site_url('ctr_template/validar_empresa'); ?>"><i class="fa fa-circle-o"></i> Empresa</a></li>
            </ul>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>