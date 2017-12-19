var myapp=angular.module('myApp',['angularUtils.directives.dirDisqus']);


myapp.controller('DetalleProductosController', ['$rootScope', '$scope','Productos','URLS','$stateParams','$state', function($rootScope, $scope,Productos,URLS,$stateParams,$state) {
  $scope.urlapi=URLS.api;


  
  $scope.carritolocal=[];
  $scope.data=[];
  $scope.tallasDisponibles=[];
  $scope.coloresDisponibles=[];
  $scope.related=[];
  $scope.comentario=[];
  $scope.agregado=false;

  $scope.getBordado=function()
  {
    $scope.errorbordado=false;
    if($rootScope.getTotalItems()>0)
    {
      $state.go('bordado');
    }else{
      $scope.errorbordado=true;
    }
    
  }



  $scope.checkIkmage=function(id)
  {

    if($scope.imagenActual==id)
    {
      return false;
    }else{
      return true;
    }

    
    //$('#lb2img').removeAttr("data-lightbox");
  }

  $scope.modalAgregarCarrito =  function(producto){



    $('#modalproducto').css('opacity','1');
    $('#modalproducto').css('display','block');
   
  }



  $scope.cerrarModal=function()
  {
    $('#modalproducto').css('opacity','0');
    $('#modalproducto').css('display','none');
  }
  
  $scope.showColor=function(composicion)
  {
    console.log(composicion.colores);
    $scope.coloresDisponibles=composicion.colores;
  }
  
  $scope.agregarAlcarro=function(producto,comp,color,talla,cantidad)
  {
    $scope.agregado=false;
    if(producto && comp && color && talla && cantidad){
      console.log(producto.id);
      console.log("Agregando");
      var item={producto:{id:producto.id,promocion:producto.promocion,precio:producto.precio,precio_dolar:producto.precio_dolar,precio_promo:producto.precio_promo,precio_promo_dolar:producto.precio_promo_dolar,modelo:producto.modelo,nombre_es:producto.nombre_es,nombre_en:producto.nombre_en,imagenes:producto.imagenes,precio_euro:producto.precio_euro,precio_promo_euro:producto.precio_promo_euro},
      compocision:{id:comp.id,codigo:comp.codigo,nombre_es:comp.descripcion_es,nombre_en:comp.descripcion_en},
      color:{id:color.id,nombre_es:color.descripcion_es,nombre_en:color.descripcion_en},
      talla:talla,
      cantidad:cantidad,
      tipoMoneda:$rootScope.getMoneda(),setbordado:0};
      console.log(item);
      $rootScope.agregarAlcarrito(item);
      $scope.updatecarrito();
      $scope.agregado=true;
      $scope.selectedtalla="";
      $scope.cantidadproducto="";
    }else{
      alert("Faltan campos");
    }
  }

 
  

  $scope.updatecarrito=function()
  {
    $scope.carritolocal=$rootScope.getItemsCarrito();
    console.log( $scope.carritolocal);
  }


  $scope.getProductos=function()
  {
  
    Productos.find($stateParams.id).then(function (res) {
     $scope.data = res.data;
     $scope.data.descripcion_es.replace(/\n/g, '<br/>');
     $scope.tallasDisponibles=res.data.talla.split(',');
     $scope.buscarRelacionados(res.data.marca.id);
     console.log(res.data);
    });

    
  
  }

  $scope.buscarRelacionados=function(idmarca)
  {
    Productos.byMarca(idmarca).then(function (res) {
      $scope.related = res.data;
      console.log(res.data);
      });

  }
  
  $scope.init = function () {
      $scope.getProductos();

      setTimeout(function() {

        $('.releate-products').owlCarousel2({
          pagination: false,
          center: false,
          nav: true,
          dots: false,
          loop: true,
          margin: 25,
          navText: [ 'prev', 'next' ],
          slideBy: 1,
          autoplay: false,
          autoplayTimeout: 2500,
          autoplayHoverPause: true,
          autoplaySpeed: 800,
          startPosition: 0, 
          responsive:{
            0:{
              items:1
            },
            480:{
              items:1
            },
            768:{
              items:2
            },
            1024:{
              items:3
            },
            1200:{
              items:4
            }
          }
        });



        
        $(".thumb-vertical-outer .next-thumb").click(function () {
          $( ".thumb-vertical-outer .lSNext" ).trigger( "click" );
        });

        $(".thumb-vertical-outer .prev-thumb").click(function () {
          $( ".thumb-vertical-outer .lSPrev" ).trigger( "click" );
        });

        $(".thumb-vertical-outer .thumb-vertical").lightSlider({
          item: 3,
          autoWidth: false,
          vertical:true,
          slideMargin: 15,
          verticalHeight:340,
                pager: false,
          controls: true,
                prevHtml: '<i class="fa fa-angle-up"></i>',
                nextHtml: '<i class="fa fa-angle-down"></i>',
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                verticalHeight: 330,
                item: 3,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                verticalHeight: 235,
                item: 3,
                slideMargin: 5,
              }
            },
            {
              breakpoint: 768,
              settings: {
                verticalHeight: 340,
                item: 3,
              }
            }
            ,
            {
              breakpoint: 480,
              settings: {
                verticalHeight: 300,
                item: 3,
              }
            }
    
          ]
          
            });




    }, 1500);


      
      //$scope.updatecarrito();

    }

    $scope.comentarProducto=function(comentario)
    {
      comentario.id_usuario= $rootScope.getIDUsuario();
      comentario.id_producto=$scope.data.id;
      
      
      Productos.comentarProducto(comentario).then(function (res) {
        $scope.getProductos();
        $scope.cleanComment();
       });
    }

    $scope.cleanComment=function()
    {
      $scope.comentario.comentario="";
      $scope.comentario.calidad=1;
      $scope.comentario.precio=1;
      $scope.comentario.servicio=1;
      $scope.comentario.tiempo_entrega=1;
    }

    $scope.quitarmodelo=function(text)
    {
      return text.split("-")[0];
    }

    $scope.kappa=function(url)
    {
      $scope.imagenActual=url;
      $('#lb2img').attr("href",$scope.urlapi+'getarchivo/'+url);
      $('#imagenprincipalproducto').attr("src",$scope.urlapi+'getarchivo/'+url);
    }

    $scope.kappa2=function(url)
    {
      if(!$scope.imagenActual)
      {
        $scope.imagenActual=url;
      }
      
    }

    $scope.updatecarrito=function()
    {
      $scope.carritolocal=$rootScope.getItemsCarrito();
      console.log( $scope.carritolocal);
    }
    $scope.getcarritolocal=function()
    {
      return $rootScope.getItemsCarrito();
    }

    $scope.showColor=function(composicion)
    {
      console.log(composicion.colores);
      $scope.coloresDisponibles=composicion.colores;
    }

    
  
  
    $scope.init();
    $scope.cleanComment();

    
  
  }]);

  myapp.filter('newlines', function () {
    return function(text) {
        return text.replace(/\n/g, '\n');
    }

    
});

myapp.directive('elevateZoom', [function() {
    function link($scope, $element){
    	$element.elevateZoom({
        zoomType: "inner",
    cursor: "crosshair",
    zoomWindowFadeIn: 500,
    zoomWindowFadeOut: 750
       }); 
    }
    return {
       restrict: 'AE',
       link: link
    }
}]);
  