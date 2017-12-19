<!doctype html>
<html lang=" app()->getLocale() }}">
<head>

  <title>Cotton Republic | Uniformes y calzado de trabajo</title>

  <meta name="author" content="Indexceed">
  <meta name="robots" content="index, follow" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

  <link rel="shortcut icon" href="ico/favicon.png">

  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,300' rel='stylesheet' type='text/css'>

  <link rel="stylesheet" href="css/bootstrap/css/bootstrap.min.css">
  <link href="css/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="js/datetimepicker/bootstrap-datetimepicker.min.css" rel="stylesheet">
  <link href="js/owl-carousel/owl.carousel.css" rel="stylesheet">
  <link href="css/themecss/lib.css" rel="stylesheet">
  <link href="js/jquery-ui/jquery-ui.min.css" rel="stylesheet">
  <link href="js/lightslider/lightslider.css" rel="stylesheet">
  <link href="css/themecss/so_megamenu.css" rel="stylesheet">
  <link href="css/themecss/so-categories.css" rel="stylesheet">
  <link href="css/themecss/so-listing-tabs.css" rel="stylesheet">
  <link href="css/themecss/so-newletter-popup.css" rel="stylesheet">
  <link href="css/header8.css" rel="stylesheet">
  <link href="css/footer5.css" rel="stylesheet">
  <link href="css/home8.css" rel="stylesheet">
  <link href="css/theme.css" rel="stylesheet">
  <link href="css/responsive.css" rel="stylesheet">

</head>
<body>

  <header id="header" class="variantleft type_8 menufixed">

    <!-- Header Top -->

    <!-- //Header Top -->

    <div class="bebemenu2">
      <div class="header-top compact-hidden ">
        <div class="container">
          <div class="row">

            <div class="header-top-left form-inline col-sm-5 col-xs-12 compact-hidden ">
              <div class="form-group languages-block ">
                <form action="http://demo.smartaddons.com/templates/html/market/index.html" method="post" enctype="multipart/form-data" id="bt-language">
                  <a class="btn btn-xs dropdown-toggle" data-toggle="dropdown">
                    @if(App::isLocale('en'))
                    <img ng-if="getLanguage()=='en'" width="20" src="image/usa.png" alt="English" title="English">
                    <span ng-if="getLanguage()=='en'" class="">English</span>
                    @endif

                    @if(App::isLocale('es'))
                    <img ng-if="getLanguage()=='es'" width="20" src="image/mexico.png" alt="Español" title="Español">
                    <span ng-if="getLanguage()=='es'" class="">Español</span>
                    @endif
                    <span class="fa fa-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu" style="z-index:9999">
                    <li><a ng-click="changeLanguage('en')"><img width="20" class="image_flag" src="image/usa.png" alt="English" title="English" /> English </a></li>
                    <li> <a ng-click="changeLanguage('es')"> <img width="20" class="image_flag" src="image/mexico.png" alt="Español" title="Español" /> Español </a> </li>
                  </ul>
                </form>
              </div>

              <div class="form-group languages-block ">
                <form action="http://demo.smartaddons.com/templates/html/market/index.html" method="post" enctype="multipart/form-data" id="bt-language">

                  <a class="btn btn-xs dropdown-toggle" data-toggle="dropdown">
                    <span ng-if="getMoneda()=='peso'" class="">@lang('front.cambioPeso')</span>

                    <span ng-if="getMoneda()=='dolar'" class="">@lang('front.cambioDolar')</span>
                    <span ng-if="getMoneda()=='euro'" class="">@lang('front.cambioEuro')</span>





                    <span class="fa fa-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a ng-click="changeMoneda('peso')"> @lang('front.cambioPeso') </a></li>
                    <li> <a ng-click="changeMoneda('dolar')"> @lang('front.cambioDolar') </a> </li>
                    <li> <a ng-click="changeMoneda('euro')"> @lang('front.cambioEuro')</a> </li>
                  </ul>
                </form>
              </div>

            </div>
            <div class="header-top-left form-inline col-sm-5 col-xs-3 compact-hidden hidden-sm hidden-md hidden-lg">
              <!--cart-->
              <div id="cart" class="form-group languages-block btn-group btn-shopping-cart" style="z-index:1">
                <a href="carrito" class="top_cart dropdown-toggle">
                  <div class="shopcart" style="margin-left:20px;z-index:1">
                    <i class="fa fa-shopping-cart fa-2x"></i> getTotalItems()
                  </div>
                </a>
              </div>
              <!--//cart-->
            </div>
            <div class="header-top-right collapsed-block text-right  col-sm-7 col-xs-9 compact-hidden ">
              <!--<button type="button" class="btn btn-xs btn-info hidden-md hidden-lg" data-toggle="collapse" data-target="#TabBlock-1">Simple</button>
              <button type="button" class="btn btn-xs btn-info hidden-md hidden-lg" data-toggle="collapse" data-target="#TabBlock-1">Simple</button>-->
              <div class="form-group languages-block  hidden-md hidden-lg" style="margin-right:10%;">
                <a class="btn btn-xs dropdown-toggle" href="login" ng-if="getToken()==null">
                  <i class="fa fa-user fa-2x" ></i>
                  <span class=""></span>
                </a>

                <a class="btn btn-xs dropdown-toggle" data-toggle="dropdown" ng-if="getToken()!=null">
                  <i class="fa fa-user fa-2x" ></i>
                  <span class=""></span>
                </a>
                <ul class="dropdown-menu">
                  <li ng-if="getToken()!=null">
                    <a href="" ng-click="logout()" title="" class="btn btn-xs dropdown-toggle"> <i class="fa fa-unlock" ></i> @lang('front.logout')</a>
                  </li>

                  <li ng-if="getToken()!=null"><a ui-sref="misdatos"> @lang('front.datosUser')</a></li>
                  <li ng-if="getToken()!=null"> <a ui-sref="micuenta"> @lang('front.pedidos') </a> </li>
                  <li ng-if="getToken()!=null"> <a ui-sref="bordado"> @lang('front.bordados') </a> </li>

                  <div ng-if="getToken()!=null" class="form-group languages-block hidden-xs">
                    <a class="btn btn-xs dropdown-toggle" data-toggle="dropdown">
                      <i class="fa fa-user" ></i>
                      @lang('front.myaccount')

                      <span class="fa fa-angle-down"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a ui-sref="misdatos"> @lang('front.datosUser') </a></li>
                      <li> <a ui-sref="micuenta"> @lang('front.pedidos') </a> </li>
                      <li> <a ui-sref="bordado"> @lang('front.bordados') </a> </li>
                    </ul>
                  </div>




                </ul>

              </div>
              <div class="form-group languages-block hidden-md hidden-lg" style="margin-right:5%;">
                <a class="btn btn-xs show-megamenu" data-toggle="collapse" class="navbar-toggle" ng-click="showmegamenu()">
                  <i class="fa fa-bars fa-2x" ></i>
                  <span class=""></span>
                </a>

              </div>
              <div class="tabBlock hidden-sm" id="TabBlock-1">
                <ul class="top-link list-inline">
                  <li ng-if="getToken()!=null" class="account"><a href="" ng-click="logout()" title="" class="btn btn-xs dropdown-toggle"> <i class="fa fa-unlock" ></i> @lang('front.logout')</a></li>

                  <div class="form-group languages-block " ng-if="getToken()!=null">
                    <a class="btn btn-xs dropdown-toggle" data-toggle="dropdown">
                      <i class="fa fa-user" ></i>
                      @lang('front.myaccount')





                      <span class="fa fa-angle-down"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a ui-sref="misdatos"> @lang('front.datosUser') </a></li>
                      <li> <a ui-sref="micuenta"> @lang('front.pedidos') </a> </li>
                      <li> <a ui-sref="bordado"> @lang('front.bordados') </a> </li>
                    </ul>
                  </div>
                  <li ng-if="getToken()==null" class="account" id="my_account"><a href="" ui-sref="registrarse" title="My Account" class="btn btn-xs dropdown-toggle"> <i class="fa fa-user" ></i> @lang('front.register')</a></li>
                  <li ng-if="getToken()==null" class="signin"><a ui-sref="login" class="top-link-checkout" title="login"><i class="fa fa-lock" ></i> @lang('front.sigin')</a></li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bebemenu">

      <!-- Header center -->
      <div class="header-center">
        <div class="container">
          <div class="row">
            <!-- Logo -->
            <div class="navbar-logo col-md-3 col-sm-12 col-xs-12">
              <a ui-sref="start"><img src="image/logo.png" width="60%" class="img-responsive" title="Your Store" alt="Your Store"></a>
            </div>
            <!-- //end Logo -->

            <!-- Search -->

            <div id="sosearchpro" class="col-md-5 col-sm-7 search-pro">
              <form ng-submit="search(txtbuscar)">
                <div id="search0" class="search input-group">


                  <input class="autosearch-input form-control" type="text" value="" size="50" ng-model="txtbuscar" autocomplete="off" placeholder="@lang('front.searchplace')" name="search">
                  <span class="input-group-btn">
                    <button type="submit" class="button-search btn btn-primary" name="submit_search"><i class="fa fa-search"></i></button>
                  </span>
                </div>
                <input type="hidden" name="route" value="product/search">
              </form>
            </div>



            <!-- //Search -->

            <!-- Main Menu -->
            <div class="phone-contact col-md-2  hidden-md hidden-sm hidden-xs">
              <div class="inner-info">
                <strong>@lang('front.callus'):</strong><br>
                <p>
                  +52 (33) 36.12. 27.27 / +52 (33) 36.12. 28.28
                </p>
              </div>
            </div>
            <!-- //Main Menu -->

            <!-- Shopping Cart -->
            <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12 shopping_cart pull-right">

              <!--cart-->
              <div id="cart" class="btn-group btn-shopping-cart hidden-xs">
                <a href="carrito" class="top_cart dropdown-toggle">
                  <div class="shopcart">
                    <span class="handle pull-left"></span>
                    <span class="title">@lang('front.cart')</span>
                    <p class="text-shopping-cart cart-total-full">(0) @lang('front.items')</p>
                  </div>
                </a>

              </div>
              <!--//cart-->
            </div>
            <!-- //Shopping Cart -->
          </div>

        </div>
      </div>
      <!-- //Header center -->

      <!-- Header Bottom -->
      <div class="header-bottom hidden-xs  hidden-md hidden-lg">
        <div class="container">
          <div class="row">

            <!-- Main menu -->
            <div class="megamenu-hori  col-xs-12 ">
              <div class="responsive so-megamenu ">
                <nav class="navbar-default">
                  <div class=" container-megamenu  horizontal">
                    <div class="navbar-header hidden-xs hidden-sm">
                      <button type="button" class="show-megamenu" class="navbar-toggle" ng-click="showmegamenu()">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button> Navigation
                    </div>

                    <div class="megamenu-wrapper ">
                      <span ng-click="showmegamenu()" class="fa fa-times hidden-md hidden-lg"></span>
                      <div class="megamenu-pattern">
                        <div class="container">
                          <ul class="megamenu " data-transition="slide" data-animationtime="250">
                            <li class="hover" ui-sref-active="home">
                              <a ui-sref="start" ng-click="showmegamenu()"><strong>@lang('front.home')</strong> </a>
                            </li>
                            <li class="hover" ui-sref-active="home">
                              <a ui-sref="quienes" ng-click="showmegamenu()" class="clearfix">
                                <strong>@lang('front.quienes')</strong>
                              </a>
                            </li>
                            <li class="with-sub-menu hover" ui-sref-active="home">
                              <p class="close-menu"></p>
                              <a href="#" class="clearfix">
                                <strong>@lang('front.lineas')</strong>
                              </a>
                              <div class="sub-menu" style="width: 40%; ">
                                <div class="content">
                                  <div class="row">
                                    <div class="col-md-6">
                                      <ul class="row-list">
                                        <li ng-repeat="(key, marca) in marcas" ng-if="marca.submenu_es!=''">
                                          <a ng-if="getLanguage()=='es'" class="subcategory_item" href="marcas/" ng-click="showmegamenu()">marca es</a>
                                          <a ng-if="getLanguage()=='en'" class="subcategory_item" href="marcas/" ng-click="showmegamenu()">marca en</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="hover" ui-sref-active="home">
                              <a ui-sref="contacto" class="clearfix" ng-click="showmegamenu()">
                                <strong>@lang('front.contact')</strong>
                              </a>

                            </li>


                          </ul>

                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <!-- //end Main menu -->

          </div>
        </div>

      </div>


      <div class="header-bottom hidden-xs">
        <div class="container">
          <div class="row">

            <!-- Main menu -->
            <div class="megamenu-hori  col-xs-12 ">
              <div class="responsive so-megamenu ">
                <nav class="navbar-default">
                  <div class=" container-megamenu  horizontal">
                    <div class="navbar-header hidden-xs hidden-sm">
                      <button type="button" class="show-megamenu" class="navbar-toggle" ng-click="showmegamenu()">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button> Navigation
                    </div>

                    <div class="megamenu-wrapper ">
                      <span id="remove-megamenu" ng-click="showmegamenu()" class="fa fa-times hidden-md hidden-lg"></span>
                      <div class="megamenu-pattern">
                        <div class="container">
                          <ul class="megamenu " data-transition="slide" data-animationtime="250">
                            <li class="hover" ui-sref-active="home">
                              <a ui-sref="start" ng-click="showmegamenu()" class="hidden-md hidden-lg"><strong>@lang('front.home')</strong> </a>
                              <a ui-sref="start" class="hidden-xs"><strong>@lang('front.home')</strong> </a>
                            </li>
                            <li class="hover" ui-sref-active="home">
                              <a ui-sref="quienes" class="clearfix  hidden-md hidden-lg" ng-click="showmegamenu()">
                                <strong>@lang('front.quienes')</strong>
                              </a>
                              <a ui-sref="quienes" class="clearfix hidden-xs">
                                <strong>@lang('front.quienes')</strong>
                              </a>
                            </li>
                            <li class="with-sub-menu hover" ui-sref-active="home">
                              <p class="close-menu"></p>
                              <a href="#" class="clearfix ">
                                <strong>@lang('front.lineas')</strong>
                              </a>
                              <div class="sub-menu" style="width: 40%; z-index:9999">
                                <div class="content">
                                  <div class="row">
                                    <div class="col-md-6">
                                      <ul class="row-list">
                                        <li ng-repeat="(key, marca) in marcas" ng-if="marca.submenu_es!=''">
                                          <a style="text-transform: uppercase" ng-if="getLanguage()=='es'" class="subcategory_item" href="marcas/" ng-click="hidemegamenu()">marca.submenu_es</a>
                                          <a style="text-transform: uppercase" ng-if="getLanguage()=='en'" class="subcategory_item" href="marcas/" ng-click="hidemegamenu()">marca.submenu_en</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="hover" ui-sref-active="home ">
                              <a ui-sref="contacto" class="clearfix hidden-md hidden-lg" ng-click="showmegamenu()">
                                <strong>@lang('front.contact')</strong>
                              </a>

                              <a ui-sref="contacto" class="clearfix hidden-xs">
                                <strong>@lang('front.contact')</strong>
                              </a>

                            </li>


                          </ul>

                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <!-- //end Main menu -->

          </div>
        </div>

      </div>

    </div>

    <!-- Navbar switcher -->
    <!-- //end Navbar switcher -->
  </header>

  @yield('content')

  <section class="looking-wrapper alert  clearfix" style="background-color: #e7e5e8!important;color:#232f3e;">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 ">

          <div class="col-lg-3 col-md-3 hidden-xs">
            <div class="indurial-solution-text2" style="text-align:center;margin-bottom:50px;">
              <h4 style="text-align:center;font-weight:bold;">ATENCIÓN A CLIENTES</h4>
              <img src="image/4.png" width="40%">
              <p class="textnew">De lunes a viernes 8 am - 5:30 pm</p>
              <p class="textnew">Con gusto te atenderemos</p>

            </div>
          </div>

          <div class="col-lg-3 col-md-3 hidden-xs">
            <div class="indurial-solution-text2" style="text-align:center;margin-bottom:50px;">
              <h4 style="text-align:center;font-weight:bold;">CALIDAD</h4>
              <img src="image/1.png" width="40%">
              <p class="textnew">Uniformes de seguridad industrial,</p>
              <p class="textnew">que garantizan confortabilidad,</p>
              <p class="textnew">durabilidad y seguridad</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-3 hidden-xs">
            <div class="indurial-solution-text2" style="text-align:center;margin-bottom:50px;">
              <h4 style="text-align:center;font-weight:bold;">ENVÍOS</h4>
              <img src="image/2.png" width="40%">
              <p class="textnew">Realizamos envíos</p>
              <p class="textnew">nacionales e internacionales</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-3 hidden-xs">
            <div class="indurial-solution-text2" style="text-align:center;margin-bottom:50px;">
              <h4 style="text-align:center;font-weight:bold;">SEGURIDAD</h4>
              <img src="image/3.png" width="40%">
              <p class="textnew">Transacciones seguras,</p>
              <p class="textnew">protección y privacidad,</p>
              <p class="textnew">de tu información y tus datos</p>
            </div>
          </div>


          <div class="visible-xs col-sm-12 col-xs-12">
            <div class="indurial-solution-text2" style="text-align:center;margin-bottom:50px;">

              <img src="image/4.png" width="40%">
              <h4 style="text-align:center;font-weight:bold;">ATENCIÓN A CLIENTES</h4>
              <p class="textnew">De lunes a viernes 8 am - 5:30 pm</p>
              <p class="textnew">Con gusto te atenderemos</p>

            </div>
          </div>

          <div class="visible-xs col-sm-12 col-xs-12">
            <div class="indurial-solution-text2" style="text-align:center;margin-bottom:50px;">

              <img src="image/1.png" width="40%">
              <h4 style="text-align:center;font-weight:bold;">CALIDAD</h4>
              <p class="textnew">Uniformes de seguridad industrial,</p>
              <p class="textnew">que garantizan confortabilidad,</p>
              <p class="textnew">durabilidad y seguridad</p>
            </div>
          </div>

          <div class="visible-xs col-sm-12 col-xs-12">
            <div class="indurial-solution-text2" style="text-align:center;margin-bottom:50px;">

              <img src="image/2.png" width="40%">
              <h4 style="text-align:center;font-weight:bold;">ENVÍOS</h4>
              <p class="textnew">Realizamos envios</p>
              <p class="textnew">nacionales e internacionales</p>
            </div>
          </div>

          <div class="visible-xs col-sm-12 col-xs-12">
            <div class="indurial-solution-text2" style="text-align:center;margin-bottom:50px;">

              <img src="image/3.png" width="40%">
              <h4 style="text-align:center;font-weight:bold;">SEGURIDAD</h4>
              <p class="textnew">Transacciones seguras,</p>
              <p class="textnew">proteccion y privacidad,</p>
              <p class="textnew">de tu informacion y tus datos</p>
            </div>
          </div>



        </div>
      </div>
    </div>
  </section>




  <footer class="footer-container type_footer5">

    <!-- Footer Top Container -->

    <!-- /Footer Top Container -->

    <section class="footer-center">
      <div class=" container">
        <div class="row">

          <div class="col-md-8 col-sm-12 col-xs-12">
            <div class="module clearfix ">
              <h3 class="modtitle">@lang('front.suscribe')</h3>
              <div class="modcontent">
                <div class="subscribe-home">
                  <form action="//cottonrepublic.us16.list-manage.com/subscribe/post?u=8e4f13f6070e97b6be2e8b915&id=05cf0e9579" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <input type="hidden" name="u" value="8e4f13f6070e97b6be2e8b915">
                    <input type="hidden" name="id" value="05cf0e9579">

                    <div class="search input-group">
                      <input name="MERGE0" type="email" class="autosearch-input form-control" placeholder="@lang('front.uremail')" data-validate="{required:true, 'validate-email':true}">
                      <span class="input-group-btn">
                        <button type="submit" class="button-search btn btn-primary" name="submit_search">@lang('front.suscribe')</button>
                      </span>
                    </div>

                  </form>
                </div>

              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
            <div class="module clearfix icons-social">
              <h3 class="modtitle">@lang('front.followus')</h3>
              <div class="modcontent">
                <div class="list-inline">
                  <a title="Facebook" href="http://www.facebook.com/MagenTech" target="_blank">
                    <span class="fa fa-facebook icon-circled icon-color"></span>
                  </a>

                  <a title="Twitter" href="https://twitter.com/magentech" target="_blank">
                    <span class="fa fa-twitter icon-circled icon-color"></span>
                  </a>

                  <a title="Google+" href="https://plus.google.com/u/0/+Smartaddons" target="_blank">
                    <span class="fa fa-google-plus icon-circled icon-color"></span>
                  </a>


                  <a title="Pinterest" href="#" target="_blank">
                    <span class="fa fa-instagram icon-circled icon-color"></span>
                  </a>


                </div>

              </div>
            </div>
          </div>
          <hr class="footer-lines ">
          <div class="col-sm-6 col-md-3 collapsed-block ">
            <div class="module clearfix">
              <h3 class="modtitle">@lang('front.contact')</h3>
              <div class="modcontent">
                <ul class="contact-address">
                  <li><span class="fa fa-map-marker"></span>empresa.direccion</li>
                  <li><a href="mailto: empresa.correo"><span class="fa fa-envelope-o"></span></a> @lang('front.mail'): <a href="mailto:empresa.correo"> empresa.correo</a></li>
                  <li><span class="fa fa-phone">&nbsp;</span> @lang('front.phone'):
                    <p ng-bind-html="empresa.telefono"></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-3 box-information">
            <div class="module clearfix">
              <h3 class="modtitle">@lang('front.categories')</h3>
              <div class="modcontent">
                <ul class="menu">
                  <li ng-repeat="(key, marca) in marcas" ng-if="marca.submenu_es!=''">
                    <a style="text-transform: uppercase" class="subcategory_item" href="marcas/marca.id}}" ng-if="getLanguage()=='es' && marca.nombre_es">marca.nombre_es}}</a>
                    <a style="text-transform: uppercase" class="subcategory_item" href="marcas/marca.id}}" ng-if="getLanguage()=='en' && marca.nombre_en">marca.nombre_en}}</a>

                    <a style="text-transform: uppercase" class="subcategory_item" href="marcas/marca.id}}" ng-if="getLanguage()=='es' && !marca.nombre_es">marca.submenu_es}}</a>
                    <a style="text-transform: uppercase" class="subcategory_item" href="marcas/marca.id}}" ng-if="getLanguage()=='en' && !marca.nombre_en">marca.submenu_en}}</a>

                  </li>

                </ul>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-3 box-service">
            <div class="module clearfix">
              <h3 class="modtitle">@lang('front.information')</h3>
              <div class="modcontent">
                <ul class="menu">
                  <li><a href="politicas">@lang('front.politicas')</a></li>
                  <li><a href="terminos">@lang('front.terminos2')</a></li>
                  <li><a href="quienes">@lang('front.quienes')</a></li>
                  <li><a ui-sref="contacto">@lang('front.contact')</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-3 box-account">
            <div class="module clearfix">
              <h3 class="modtitle">@lang('front.findus')</h3>
              <div class="modcontent">
                <ul class="menu">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.6670514388625!2d-103.43892126307638!3d20.591993877470085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ac9713b43553%3A0xea350b9c31ef0378!2sCotton+Republic%2C+Grupo+Confecciones+Allen!5e0!3m2!1ses!2smx!4v1501072982588"
                  width="100%" height="250" frameborder="0" style="border:0" allowfullscreen=""></iframe>
                </ul>
              </div>
            </div>
          </div>



          <hr class="footer-lines no-margin-bottom">
        </div>
      </div>
    </section>

    <!-- Footer Bottom Container -->
    <div class="footer-bottom-block ">
      <div class=" container">
        <div class="row">
          <div class="col-sm-5 copyright-text"> © 2017 Grupo Allen - @lang('front.copyright')</div>
          <div class="col-sm-7">
            <div class="block-payment text-right"><img src="image/demo/content/payment.png" alt="payment" title="payment"></div>
          </div>
          <!--Back To Top-->
          <div class="back-to-top"><i class="fa fa-angle-up"></i><span> @lang('front.uppage') </span></div>

        </div>
      </div>
    </div>
    <!-- /Footer Bottom Container -->


  </footer>

  <style>
  .header-bottom{
    background-color: #FFF!important;
  }
  .alert {
    padding-bottom: 20px!important;
    margin-bottom: 0px!important;
  }

  .looking-wrapper {
    position: relative;
    background: #2f3649;
    padding-top: 3em;
    padding-bottom: 3em;
  }

  .clearfix {
    clear: both;
  }
  </style>

  <section class="looking-wrapper alert  clearfix" style="background-color: #e7e5e8!important;color:#232f3e;">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="indurial-solution-text2">
            <center>
              <div ng-if="getLanguage()=='es'" ng-bind-html="empresa.footer"></div>
              <div ng-if="getLanguage()=='en'" ng-bind-html="empresa.footer_en"></div>
            </center>
          </div>
        </div>

      </div>
    </div>
  </section>

</div>


</body>


<link rel='stylesheet' property='stylesheet' href='css/themecss/cpanel.css' type='text/css' media='all' />
<!-- Include Libs & Plugins
============================================ -->
<!-- Placed at the end of the document so the pages load faster -->
<script type="text/javascript" src="js/jquery-2.2.4.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/owl-carousel/owl.carousel.js"></script>
<script type="text/javascript" src="js/themejs/libs.js"></script>
<script type="text/javascript" src="js/unveil/jquery.unveil.js"></script>
<script type="text/javascript" src="js/countdown/jquery.countdown.min.js"></script>
<script type="text/javascript" src="js/dcjqaccordion/jquery.dcjqaccordion.2.8.min.js"></script>
<script type="text/javascript" src="js/datetimepicker/moment.js"></script>
<script type="text/javascript" src="js/datetimepicker/bootstrap-datetimepicker.min.js"></script>
<script type="text/javascript" src="js/jquery-ui/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/modernizr/modernizr-2.6.2.min.js"></script>




<!-- Theme files
============================================ -->
<script type="text/javascript" src="js/themejs/application.js"></script>
<script type="text/javascript" src="js/themejs/homepage.js"></script>
<script type="text/javascript" src="js/themejs/so_megamenu.js"></script>
<script type="text/javascript" src="js/themejs/addtocart.js"></script>
<!--<script type="text/javascript" src="js/themejs/toppanel.js"></script>-->
<script type="text/javascript" src="js/minicolors/jquery.miniColors.min.js"></script>



<script src="https://www.paypalobjects.com/api/checkout.js" data-version-4></script>
<script type="text/javascript" src="https://cdn.conekta.io/js/latest/conekta.js"></script>



<script>
$('.bebemenu2').addClass('originalll').clone().insertAfter('.bebemenu2').addClass('cloneddd').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').removeClass('originalll').hide();

scrollIntervalID = setInterval(stickIt2, 100);


function stickIt2() {


  var orgElementPos = $('.originalll').offset();
  orgElementTop = orgElementPos.top;

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.
    orgElement = $('.originalll');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;
    widthOrgElement = orgElement.css('width');
    $('.cloneddd').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();

  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloneddd').hide();
  }
}



$('.bebemenu').addClass('originall').clone().insertAfter('.bebemenu').addClass('clonedd').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').removeClass('originall').hide();
$('.clonedd').addClass('hidden-xs');
scrollIntervalID = setInterval(stickIt, 100);


function stickIt() {

  var orgElementPos = $('.originall').offset();
  orgElementTop = orgElementPos.top;

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.
    orgElement = $('.originall');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;
    widthOrgElement = orgElement.css('width');
    $('.clonedd').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();

  } else {
    // not scrolled past the menu; only show the original menu.
    $('.clonedd').hide();
  }
}
</script>
<!--Start of Tawk.to Script-->
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API = Tawk_API || {},
Tawk_LoadStart = new Date();
(function() {
  var s1 = document.createElement("script"),
  s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/59c2dcaac28eca75e462146e/default';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();
</script>
</html>
