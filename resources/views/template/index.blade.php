@extends('layout.master')

@section('content')

<section class="so-slideshow ">
  <div id="so-slideshow">
    <div class="module slideshow no-margin">
      <div class="yt-content-slider yt-content-slider--arrow1" data-autoplay="yes" data-autoheight="no" data-delay="4" data-speed="0.6" data-margin="0" data-items_column0="1" data-items_column1="1" data-items_column2="1" data-items_column3="1" data-items_column4="1"
        data-arrows="yes" data-pagination="no" data-lazyload="yes" data-loop="no" data-hoverpause="yes">
        <div class="yt-content-slide" ng-repeat="imagen in galeria">
          <a href="imagen.url}}"><img src="urlapi}}galeria/imagen.id}}" alt="slider1" class="img-responsive"></a>
        </div>

      </div>
      <div class="loadeding"></div>
    </div>


  </div>



  <div class="main-container ">
    <div class="container">
      <div class="row">
        <style>
          .textdescripcion {
            display: block;
            /* Fallback for non-webkit */
            display: -webkit-box;
            max-width: 400px;
            height: 109.2px;
            /* Fallback for non-webkit */
            margin: 0 auto;
            font-size: 1.2em;
            line-height: 1.4;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        </style>

        <div id="content" class="clearfix">
          <div class="col-xs-12 clearfix" style="margin-top:7vw;">
            <div class="related titleLine products-list grid module " style="margin-bottom:3vw;">
              <h3 class="modtitle" style="font-size:2em!important;font-weight: bold;">@lang('front.texttech')</h3>
            </div>

            <style>
              .hoverinfo p {

                top: 15px;
                left: 15px;
                font-size: 1.2em;
                color: #ffffff;
              }

              .hoverinfo p {
                display: none;
                color: #555555;
              }

              .hoverinfo:hover p {
                background-color: rgba(255, 255, 255, 0.7);
                display: block;
              }

              .hoverinfo:hover span {
                display: none;
              }
            </style>

            <div class="module" style="margin-top:2vw;margin-bottom: 7vw;">
              <div class="yt-content-slider yt-content-slider--arrow2" data-autoplay="yes" data-dots="no" data-autoheight="no" data-delay="4" data-speed="0.8" data-margin="35" data-items_column0="5" data-items_column1="4" data-items_column2="3" data-items_column3="2"
                data-items_column4="1" data-arrows="yes" data-pagination="no" data-lazyload="yes" data-loop="yes" data-hoverpause="yes">
                <div class="item hoverinfo" ng-repeat="tecnologia in tecnologias">
                  <a title="Brand" href="#">
                    <div style="margin-bottom: 1.6vw;">
                      <img class="img-responsive" ng-src="urlapi}}getarchivo/tecnologia.imagenes[0].id_imagenes}}" alt="Brand">
                    </div>

                  </a>
                  <span class="textdescripcion" ng-if="getLanguage()=='es'">tecnologia.descripcion_es}}</span>
                  <span class="textdescripcion" ng-if="getLanguage()=='en'">tecnologia.descripcion_en}}</span>
                  <p class="" ng-if="getLanguage()=='es'">tecnologia.descripcion_es}}</p>
                  <p class="" ng-if="getLanguage()=='en'">tecnologia.descripcion_en}}</p>
                </div>
              </div>

            </div>

            <style>
              .onhover {
                display: none;
              }

              .surround:hover img[class="initial"] {
                display: none;
              }

              .surround:hover img[class="onhover"] {
                display: block;
              }
            </style>
            <div class="module  home8--banner3">
              <div class="related titleLine products-list grid module ">
                <h3 class="modtitle" style="font-size:2em!important;font-weight: bold;">@lang('front.ourbrands')</h3>
              </div>
              <div class="row">
                <div class="banner__item col-md-4" ng-repeat="marca in marcas" ng-if="marca.nombre_es" style="margin-top:2vw">
                  <div class="banners banner__img">
                    <a title="Static Image" href="marcas/marca.id}}">
                      <div class="surround">

                        <img ng-src="urlapi}}getarchivo/marca.imagenes[0].id_imagenes}}" class="initial">
                        <img ng-src="urlapi}}getarchivo/marca.imagenes[1].id_imagenes}}" class="onhover">


                      </div>
                    </a>
                  </div>
                  <div class="banner__info">
                    <h3 ng-if="getLanguage()=='es'" style="height: 55px">marca.nombre_es}}</h3>
                    <p ng-if="getLanguage()=='es'" style="height: 86px">marca.descripcion_es}}</p>

                    <h3 ng-if="getLanguage()=='en'" style="height: 55px">marca.nombre_en}}</h3>
                    <p ng-if="getLanguage()=='en'" style="height: 86px">marca.descripcion_en}}</p>

                  </div>
                </div>
              </div>

            </div>



            <!-- <div class="module  home8--banner3">
                                <center><h1 style="font-weight: bold;">NUESTRAS MARCAS</h1></center>
                                <div class="owl-banner__slider">
                                    <div class="banner__item" ng-repeat="marca in marcas" style="margin-top:2vw">
                                        <div class="banners banner__img">
                                            <div>
                                            <a title="Static Image" href="#"><img ng-src="urlapi}}getarchivo/marca.imagenes[0].id_imagenes}}" alt="Static Image"></a>
                                            </div>
                                        </div>
                                        <div class="banner__info">
                                                <h3>marca.nombre_es}}</h3>
                                            <p>marca.descripcion_es}}</p>

                                        </div>
                                    </div>
                                </div>

                        </div>-->

            <div class="related titleLine products-list grid module " style="margin-bottom:3vw;margin-top:4ew">
              <h3 class="modtitle" style="font-size:2em!important;font-weight: bold;">@lang('front.featproductos')</h3>
            </div>



            <div id="exTab2" class="container">
              <ul class="nav nav-tabs">
                <li class="active">

                  <a ng-if="getLanguage()=='es'" data-target="#1" data-toggle="tab">HOMBRE</a>
                  <a ng-if="getLanguage()=='en'" data-target="#1" data-toggle="tab">MAN</a>
                </li>
                <li>
                  <a ng-if="getLanguage()=='es'" data-target="#2" data-toggle="tab" ng-click="fixtabs()">MUJER</a>
                  <a ng-if="getLanguage()=='en'" data-target="#2" data-toggle="tab" ng-click="fixtabs()">WOMAN</a>
                </li>
                <li>
                  <a ng-if="getLanguage()=='es'" data-target="#3" data-toggle="tab" ng-click="fixtabs()">CALZADO</a>
                  <a ng-if="getLanguage()=='en'" data-target="#3" data-toggle="tab" ng-click="fixtabs()">SHOES</a>
                </li>
              </ul>

              <div class="tab-content ">
                <div class="tab-pane active" id="1">

                  <div class="module tab-slider titleLine hidden-xs">
                    <div class="so-listing-tabs first-load module">
                      <div class="loadeding"></div>
                      <div class="ltabs-wrap">



                        <div class="ltabs-items-container">
                          <!--Begin Items-->
                          <div class="ltabs-items ltabs-items-selected items-category-20 grid" data-total="10">
                            <div class="ltabs-items-inner ltabs-slider  owl2-carousel owl2-theme owl2-loaded">

                              <div class="owl2-stage-outer">
                                <div class="owl2-stage" style="transform: translate3d(0px, 0px, 0px); transition: 0s;">
                                  <div class="active" style=" margin-right: 30px;">
                                    <div class="ltabs-item product-layout">
                                      <div class="col-md-4 product-item-container" ng-repeat="destacado in destacados" ng-if="destacado.categoria_destacado==1">

                                        <div class="left-block">
                                          <div class="product-image-container second_img ">
                                            <a href="detalleProducto/destacado.id}}"><img  ng-src="urlapi}}getarchivo/destacado.imagenes[0].id_imagenes}}" alt="Apple Cinema 30&quot;" class="img-responsive"></a>
                                          </div>

                                          <a class="quickview iframe-link  visible-xs visible-lg" data-fancybox-type="iframe" href="detalleProducto/destacado.id}}">Comprar</a>
                                        </div>
                                        <div class="right-block">
                                          <div class="caption">
                                            <h4 ng-bind-html="destacado.nombre_es"></h4>
                                            <div class="ratings">
                                              <div class="rating-box">

                                              </div>
                                            </div>

                                            <div class="price">
                                              <span class="price-new" ng-if="destacado.promocion==0 && getMoneda()=='peso'">$destacado.precio|number:2}}</span>
                                              <span class="price-new" ng-if="destacado.promocion==0 && getMoneda()=='dolar'">US$destacado.precio_dolar|number:2}}</span>
                                              <span class="price-new" ng-if="destacado.promocion==0 && getMoneda()=='euro'">€destacado.precio_euro|number:2}}</span>


                                              <span class="price-new" ng-if="destacado.promocion==1 && getMoneda()=='peso'">$destacado.precio_promo|number:2}}</span>
                                              <span class="price-old" ng-if="datdestacadoa.promocion==1 && getMoneda()=='peso'">$destacado.precio|number:2}}</span>

                                              <span class="price-new" ng-if="destacado.promocion==1 && getMoneda()=='dolar'">US$destacado.precio_promo_dolar|number:2}}</span>
                                              <span class="price-old" ng-if="destacado.promocion==1 && getMoneda()=='dolar'">US$destacado.precio_dolar|number:2}}</span>

                                              <span class="price-new" ng-if="destacado.promocion==1 && getMoneda()=='euro'">€destacado.precio_promo_euro|number:2}}</span>
                                              <span class="price-old" ng-if="destacado.promocion==1 && getMoneda()=='euro'">€destacado.precio_euro|number:2}}</span>
                                            </div>
                                          </div>

                                          <div class="button-group">
                                            <button class="addToCart" type="button" data-toggle="tooltip" title="" ng-click="modalAgregarCarrito(destacado)" data-original-title="Add to Cart"><i class="fa fa-shopping-cart"></i> <span class="">Agregar al Carrito</span></button>
                                          </div>
                                        </div>
                                        <!-- right block -->
                                      </div>
                                    </div>
                                  </div>




                                </div>
                              </div>



                            </div>

                          </div>

                        </div>
                        <!--End Items-->


                      </div>

                    </div>
                  </div>



                  <div class="so-extraslider products-list grid visible-xs" data-autoplay="no" data-autoheight="no" data-delay="4" data-speed="0.6" data-margin="25" data-items_column0="5" data-items_column1="4" data-items_column2="3" data-items_column3="2" data-items_column4="1"
                    data-arrows="yes" data-pagination="yes" data-lazyload="yes" data-loop="no" data-hoverpause="yes">
                    <div class="ltabs-item product-layout" ng-repeat="destacado in destacados" ng-if="destacado.categoria_destacado==1">
                      <div class="col-md-4 product-item-container">

                        <div class="left-block">
                          <div class="product-image-container second_img ">
                            <a href="detalleProducto/destacado.id}}"><img  ng-src="urlapi}}getarchivo/destacado.imagenes[0].id_imagenes}}" alt="Apple Cinema 30&quot;" class="img-responsive"></a>
                          </div>

                          <a class="quickview iframe-link  visible-xs visible-lg" data-fancybox-type="iframe" href="detalleProducto/destacado.id}}">Comprar</a>
                        </div>
                        <div class="right-block">
                          <div class="caption">
                            <h4 ng-bind-html="destacado.nombre_es"></h4>
                            <div class="ratings">
                              <div class="rating-box">

                              </div>
                            </div>

                            <div class="price">
                              <span class="price-new" ng-if="destacado.promocion==0 && getMoneda()=='peso'">$destacado.precio|number:2}}</span>
                              <span class="price-new" ng-if="destacado.promocion==0 && getMoneda()=='dolar'">US$destacado.precio_dolar|number:2}}</span>
                              <span class="price-new" ng-if="destacado.promocion==0 && getMoneda()=='euro'">€destacado.precio_euro|number:2}}</span>


                              <span class="price-new" ng-if="destacado.promocion==1 && getMoneda()=='peso'">$destacado.precio_promo|number:2}}</span>
                              <span class="price-old" ng-if="datdestacadoa.promocion==1 && getMoneda()=='peso'">$destacado.precio|number:2}}</span>

                              <span class="price-new" ng-if="destacado.promocion==1 && getMoneda()=='dolar'">US$destacado.precio_promo_dolar|number:2}}</span>
                              <span class="price-old" ng-if="destacado.promocion==1 && getMoneda()=='dolar'">US$destacado.precio_dolar|number:2}}</span>

                              <span class="price-new" ng-if="destacado.promocion==1 && getMoneda()=='euro'">€destacado.precio_promo_euro|number:2}}</span>
                              <span class="price-old" ng-if="destacado.promocion==1 && getMoneda()=='euro'">€destacado.precio_euro|number:2}}</span>
                            </div>
                          </div>

                          <div class="button-group">
                            <button class="addToCart" type="button" data-toggle="tooltip" title="" ng-click="modalAgregarCarrito(destacado)" data-original-title="Add to Cart"><i class="fa fa-shopping-cart"></i> <span class="">Agregar al Carrito</span></button>
                          </div>
                        </div>
                        <!-- right block -->
                      </div>
                    </div>


                  </div>
                </div>
                <div class="tab-pane" id="2">

                  <div class="so-extraslider products-list grid visible-xs" data-autoplay="no" data-autoheight="no" data-delay="4" data-speed="0.6" data-margin="25" data-items_column0="5" data-items_column1="4" data-items_column2="3" data-items_column3="2" data-items_column4="1"
                    data-arrows="yes" data-pagination="yes" data-lazyload="yes" data-loop="no" data-hoverpause="yes">
                    <div class="ltabs-item product-layout" ng-repeat="destacado in destacados" ng-if="destacado.categoria_destacado==2">
                      <div class="col-md-4 product-item-container">

                        <div class="left-block">
                          <div class="product-image-container second_img ">
                            <a href="detalleProducto/destacado.id}}"><img  ng-src="urlapi}}getarchivo/destacado.imagenes[0].id_imagenes}}" alt="Apple Cinema 30&quot;" class="img-responsive"></a>
                          </div>

                          <a class="quickview iframe-link  visible-xs visible-lg" data-fancybox-type="iframe" href="detalleProducto/destacado.id}}">Comprar</a>
                        </div>
                        <div class="right-block">
                          <div class="caption">
                            <h4 ng-bind-html="destacado.nombre_es"></h4>
                            <div class="ratings">
                              <div class="rating-box">

                              </div>
                            </div>

                            <div class="price">
                              <span class="price-new" ng-if="destacado.promocion==0 && getMoneda()=='peso'">$destacado.precio|number:2}}</span>
                              <span class="price-new" ng-if="destacado.promocion==0 && getMoneda()=='dolar'">US$destacado.precio_dolar|number:2}}</span>
                              <span class="price-new" ng-if="destacado.promocion==0 && getMoneda()=='euro'">€destacado.precio_euro|number:2}}</span>


                              <span class="price-new" ng-if="destacado.promocion==1 && getMoneda()=='peso'">$destacado.precio_promo|number:2}}</span>
                              <span class="price-old" ng-if="datdestacadoa.promocion==1 && getMoneda()=='peso'">$destacado.precio|number:2}}</span>

                              <span class="price-new" ng-if="destacado.promocion==1 && getMoneda()=='dolar'">US$destacado.precio_promo_dolar|number:2}}</span>
                              <span class="price-old" ng-if="destacado.promocion==1 && getMoneda()=='dolar'">US$destacado.precio_dolar|number:2}}</span>

                              <span class="price-new" ng-if="destacado.promocion==1 && getMoneda()=='euro'">€destacado.precio_promo_euro|number:2}}</span>
                              <span class="price-old" ng-if="destacado.promocion==1 && getMoneda()=='euro'">€destacado.precio_euro|number:2}}</span>
                            </div>
                          </div>

                          <div class="button-group">
                            <button class="addToCart" type="button" data-toggle="tooltip" title="" ng-click="modalAgregarCarrito(destacado)" data-original-title="Add to Cart"><i class="fa fa-shopping-cart"></i> <span class="">Agregar al Carrito</span></button>
                          </div>
                        </div>
                        <!-- right block -->
                      </div>
                    </div>


                  </div>

                  <div class="module tab-slider titleLine hidden-xs">
                    <div class="so-listing-tabs first-load module">
                      <div class="loadeding"></div>
                      <div class="ltabs-wrap">



                        <div class="ltabs-items-container">
                          <!--Begin Items-->
                          <div class="ltabs-items ltabs-items-selected items-category-20 grid" data-total="10">
                            <div class="ltabs-items-inner ltabs-slider  owl2-carousel owl2-theme owl2-loaded">

                              <div class="owl2-stage-outer">
                                <div class="owl2-stage" style="transform: translate3d(0px, 0px, 0px); transition: 0s;">
                                  <div class="active" style=" margin-right: 30px;">
                                    <div class="ltabs-item product-layout">
                                      <div class="col-md-4 product-item-container" ng-repeat="destacado in destacados" ng-if="destacado.categoria_destacado==2">

                                        <div class="left-block">
                                          <div class="product-image-container second_img ">
                                            <a href="detalleProducto/destacado.id}}"><img  ng-src="urlapi}}getarchivo/destacado.imagenes[0].id_imagenes}}" alt="Apple Cinema 30&quot;" class="img-responsive"></a>
                                          </div>

                                          <a class="quickview iframe-link  visible-xs visible-lg" data-fancybox-type="iframe" href="detalleProducto/destacado.id}}">Comprar</a>
                                        </div>
                                        <div class="right-block">
                                          <div class="caption">
                                            <h4 ng-bind-html="destacado.nombre_es"></h4>
                                            <div class="ratings">
                                              <div class="rating-box">

                                              </div>
                                            </div>

                                            <div class="price">
                                              <span class="price-new" ng-if="destacado.promocion==0 && getMoneda()=='peso'">$destacado.precio|number:2}}</span>
                                              <span class="price-new" ng-if="destacado.promocion==0 && getMoneda()=='dolar'">US$destacado.precio_dolar|number:2}}</span>
                                              <span class="price-new" ng-if="destacado.promocion==0 && getMoneda()=='euro'">€destacado.precio_euro|number:2}}</span>


                                              <span class="price-new" ng-if="destacado.promocion==1 && getMoneda()=='peso'">$destacado.precio_promo|number:2}}</span>
                                              <span class="price-old" ng-if="datdestacadoa.promocion==1 && getMoneda()=='peso'">$destacado.precio|number:2}}</span>

                                              <span class="price-new" ng-if="destacado.promocion==1 && getMoneda()=='dolar'">US$destacado.precio_promo_dolar|number:2}}</span>
                                              <span class="price-old" ng-if="destacado.promocion==1 && getMoneda()=='dolar'">US$destacado.precio_dolar|number:2}}</span>

                                              <span class="price-new" ng-if="destacado.promocion==1 && getMoneda()=='euro'">€destacado.precio_promo_euro|number:2}}</span>
                                              <span class="price-old" ng-if="destacado.promocion==1 && getMoneda()=='euro'">€destacado.precio_euro|number:2}}</span>
                                            </div>
                                          </div>

                                          <div class="button-group">
                                            <button class="addToCart" type="button" data-toggle="tooltip" title="" ng-click="modalAgregarCarrito(destacado)" data-original-title="Add to Cart"><i class="fa fa-shopping-cart"></i> <span class="">Agregar al Carrito</span></button>
                                          </div>
                                        </div>
                                        <!-- right block -->
                                      </div>
                                    </div>
                                  </div>




                                </div>
                              </div>



                            </div>

                          </div>

                        </div>
                        <!--End Items-->


                      </div>

                    </div>
                  </div>


                </div>
                <div class="tab-pane" id="3">

                  <div class="so-extraslider products-list grid visible-xs" data-autoplay="no" data-autoheight="no" data-delay="4" data-speed="0.6" data-margin="25" data-items_column0="5" data-items_column1="4" data-items_column2="3" data-items_column3="2" data-items_column4="1"
                    data-arrows="yes" data-pagination="yes" data-lazyload="yes" data-loop="no" data-hoverpause="yes">
                    <div class="ltabs-item product-layout" ng-repeat="destacado in destacados" ng-if="destacado.categoria_destacado==3">
                      <div class="col-md-4 product-item-container">

                        <div class="left-block">
                          <div class="product-image-container second_img ">
                            <a href="detalleProducto/destacado.id}}"><img  ng-src="urlapi}}getarchivo/destacado.imagenes[0].id_imagenes}}" alt="Apple Cinema 30&quot;" class="img-responsive"></a>
                          </div>

                          <a class="quickview iframe-link  visible-xs visible-lg" data-fancybox-type="iframe" href="detalleProducto/destacado.id}}">Comprar</a>
                        </div>
                        <div class="right-block">
                          <div class="caption">
                            <h4 ng-bind-html="destacado.nombre_es"></h4>
                            <div class="ratings">
                              <div class="rating-box">

                              </div>
                            </div>

                            <div class="price">
                              <span class="price-new" ng-if="destacado.promocion==0 && getMoneda()=='peso'">$destacado.precio|number:2}}</span>
                              <span class="price-new" ng-if="destacado.promocion==0 && getMoneda()=='dolar'">US$destacado.precio_dolar|number:2}}</span>
                              <span class="price-new" ng-if="destacado.promocion==0 && getMoneda()=='euro'">€destacado.precio_euro|number:2}}</span>


                              <span class="price-new" ng-if="destacado.promocion==1 && getMoneda()=='peso'">$destacado.precio_promo|number:2}}</span>
                              <span class="price-old" ng-if="datdestacadoa.promocion==1 && getMoneda()=='peso'">$destacado.precio|number:2}}</span>

                              <span class="price-new" ng-if="destacado.promocion==1 && getMoneda()=='dolar'">US$destacado.precio_promo_dolar|number:2}}</span>
                              <span class="price-old" ng-if="destacado.promocion==1 && getMoneda()=='dolar'">US$destacado.precio_dolar|number:2}}</span>

                              <span class="price-new" ng-if="destacado.promocion==1 && getMoneda()=='euro'">€destacado.precio_promo_euro|number:2}}</span>
                              <span class="price-old" ng-if="destacado.promocion==1 && getMoneda()=='euro'">€destacado.precio_euro|number:2}}</span>
                            </div>
                          </div>

                          <div class="button-group">
                            <button class="addToCart" type="button" data-toggle="tooltip" title="" ng-click="modalAgregarCarrito(destacado)" data-original-title="Add to Cart"><i class="fa fa-shopping-cart"></i> <span class="">Agregar al Carrito</span></button>
                          </div>
                        </div>
                        <!-- right block -->
                      </div>
                    </div>


                  </div>


                  <div class="module tab-slider titleLine hidden-xs">
                    <div class="so-listing-tabs first-load module">
                      <div class="loadeding"></div>
                      <div class="ltabs-wrap">



                        <div class="ltabs-items-container">
                          <!--Begin Items-->
                          <div class="ltabs-items ltabs-items-selected items-category-20 grid" data-total="10">
                            <div class="ltabs-items-inner ltabs-slider  owl2-carousel owl2-theme owl2-loaded">

                              <div class="owl2-stage-outer">
                                <div class="owl2-stage" style="transform: translate3d(0px, 0px, 0px); transition: 0s;">
                                  <div class="active" style=" margin-right: 30px;">
                                    <div class="ltabs-item product-layout">
                                      <div class="col-md-4 product-item-container" ng-repeat="destacado in destacados" ng-if="destacado.categoria_destacado==3">

                                        <div class="left-block">
                                          <div class="product-image-container second_img ">
                                            <a href="detalleProducto/destacado.id}}"><img  ng-src="urlapi}}getarchivo/destacado.imagenes[0].id_imagenes}}" alt="Apple Cinema 30&quot;" class="img-responsive"></a>
                                          </div>
                                          <a class="quickview iframe-link visible-lg" data-fancybox-type="iframe" href="detalleProducto/destacado.id}}">Comprar</a>
                                        </div>
                                        <div class="right-block">
                                          <div class="caption">
                                            <h4 ng-bind-html="destacado.nombre_es"></h4>
                                            <div class="ratings">
                                              <div class="rating-box">

                                              </div>
                                            </div>

                                            <div class="price">
                                              <span class="price-new" ng-if="destacado.promocion==0 && getMoneda()=='peso'">$destacado.precio|number:2}}</span>
                                              <span class="price-new" ng-if="destacado.promocion==0 && getMoneda()=='dolar'">US$destacado.precio_dolar|number:2}}</span>
                                              <span class="price-new" ng-if="destacado.promocion==0 && getMoneda()=='euro'">€destacado.precio_euro|number:2}}</span>


                                              <span class="price-new" ng-if="destacado.promocion==1 && getMoneda()=='peso'">$destacado.precio_promo|number:2}}</span>
                                              <span class="price-old" ng-if="datdestacadoa.promocion==1 && getMoneda()=='peso'">$destacado.precio|number:2}}</span>

                                              <span class="price-new" ng-if="destacado.promocion==1 && getMoneda()=='dolar'">US$destacado.precio_promo_dolar|number:2}}</span>
                                              <span class="price-old" ng-if="destacado.promocion==1 && getMoneda()=='dolar'">US$destacado.precio_dolar|number:2}}</span>

                                              <span class="price-new" ng-if="destacado.promocion==1 && getMoneda()=='euro'">€destacado.precio_promo_euro|number:2}}</span>
                                              <span class="price-old" ng-if="destacado.promocion==1 && getMoneda()=='euro'">€destacado.precio_euro|number:2}}</span>
                                            </div>
                                          </div>


                                        </div>
                                        <!-- right block -->
                                      </div>
                                    </div>
                                  </div>




                                </div>
                              </div>



                            </div>

                          </div>

                        </div>
                        <!--End Items-->


                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>








          </div>
        </div>
      </div>
    </div>
  </div>



  </div>



  <style>
    .overlay {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.7);
      transition: opacity 500ms;
      visibility: hidden;
      opacity: 0;
      z-index: 9999;
    }

    .overlay:target {
      visibility: visible;
      opacity: 1;
    }

    .popup {
      margin: 15% auto;
      padding: 20px;
      background: #fff;
      border-radius: 5px;
      width: 50%;
      position: relative;
      transition: all 5s ease-in-out;
    }

    .popup h2 {
      margin-top: 0;
      color: #333;
      font-family: Tahoma, Arial, sans-serif;
    }

    .popup .close {
      position: absolute;
      top: 20px;
      right: 30px;
      transition: all 200ms;
      font-size: 30px;
      font-weight: bold;
      text-decoration: none;
      color: #333;
    }

    .popup .close:hover {
      color: #06D85F;
    }

    .popup .content {
      max-height: 50%;
      overflow: hidden;
    }

    @media screen and (max-width: 700px) {
      .box {
        width: 70%;
      }
      .popup {
        width: 70%;
      }
    }
  </style>

@endsection
