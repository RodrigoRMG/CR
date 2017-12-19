
angular.module('myApp').controller('HomeController', ['$rootScope', '$scope','Tecnologias','URLS','Galeria','Empresa','Productos', function($rootScope, $scope,Tecnologias,URLS,Galeria,Empresa,Productos) {
  $scope.urlapi=URLS.api;
    $scope.tecnologias=[];
    $scope.quienes=[];
    $scope.empresa=[];

    $scope.data=[];
    $scope.tallasDisponibles=[];
    $scope.coloresDisponibles=[];

    $scope.quienes=function(id){
      console.log(id);
    }

    $scope.getQuienes=function()
    {
  
      Empresa.getQuienes().then(function (res) {
       $scope.quienes = res.data;
       console.log('what');
      },function (err) {
        try{
          Notification.error(err.data);
        }catch(e){
          Notification.error(e);
        }
      });
  
    }

    $scope.getEmpresa=function()
    {
  
      Empresa.getEmpresa().then(function (res) {
       $scope.empresa = res.data;
       console.log('what');
      },function (err) {
        try{
          Notification.error(err.data);
        }catch(e){
          Notification.error(e);
        }
      });
  
    }
    


$scope.modalAgregarCarrito =  function(producto){
  $('#modalproducto').css('opacity','1');
  $('#modalproducto').css('visibility','visible');
  console.log('wut');
  Productos.find(producto.id).then(function (res) {
    $scope.data = res.data;
    $scope.data.descripcion_es.replace(/\n/g, '<br/>');
    $scope.tallasDisponibles=res.data.talla.split(',');
    console.log(res.data);
   });
}

$scope.showColor=function(composicion)
{
  console.log(composicion.colores);
  $scope.coloresDisponibles=composicion.colores;
}

$scope.agregarAlcarro=function(producto,comp,color,talla,cantidad)
{
  if(producto && comp && color && talla && cantidad){
    console.log(producto.id);
    console.log("Agregando");
    var item={producto:{id:producto.id,modelo:producto.modelo,nombre_es:producto.nombre_es,nombre_en:producto.nombre_en,imagenes:producto.imagenes},
    compocision:{id:comp.id,codigo:comp.codigo,nombre_es:comp.descripcion_es,nombre_en:comp.descripcion_en},
    color:{id:color.id,nombre_es:color.descripcion_es,nombre_en:color.descripcion_en},talla:talla,cantidad:cantidad};
    console.log(item);
    $rootScope.agregarAlcarrito(item);
    $('#modalproducto').css('opacity','0');
    $('#modalproducto').css('visibility','hidden');
    $scope.updatecarrito();
  }else{
    alert("Faltan campos");
  }
 

}

$scope.getTecnologias=function()
  {

    Tecnologias.getAll().then(function (res) {
     $scope.tecnologias = res.data;
    },function (err) {
      try{
        Notification.error(err.data);
      }catch(e){
        Notification.error(e);
      }
    });

  }

  $scope.getGaleria=function()
  {

    Galeria.getAll().then(function (res) {
     $scope.galeria = res.data;
    },function (err) {
      console.log(err);
    });

  }

  $scope.updatecarrito=function()
  {
    $scope.carritolocal=$rootScope.getItemsCarrito();
    console.log( $scope.carritolocal);
  }

  $scope.destacados=function()
  {

    Productos.destacados().then(function (res) {
     $scope.destacados = res.data;
     console.log($scope.destacados);
    },function (err) {
      try{
        Notification.error(err.data);
      }catch(e){
        Notification.error(e);
      }
    });

  }

  $scope.fixtabs=function(){
    console.log('xdd');

    setTimeout(function() {
    $('.so-extraslider').each(function () {
      var $slider = $(this),
        $panels = $slider.children('div'),
        data = $slider.data();
      // Remove unwanted br's
      //$slider.children(':not(.yt-content-slide)').remove();
      // Apply Owl Carousel
      $slider.owlCarousel2({
        responsiveClass: true,
        mouseDrag: true,
        video:true,
        
          lazyLoad: (data.lazyload == 'yes') ? true : false,
        autoplay: (data.autoplay == 'yes') ? true : false,
        autoHeight: (data.autoheight == 'yes') ? true : false,
        autoplayTimeout: data.delay * 1000,
        smartSpeed: data.speed * 1000,
        autoplayHoverPause: (data.hoverpause == 'yes') ? true : false,
        center: (data.center == 'yes') ? true : false,
        loop: (data.loop == 'yes') ? true : false,
              dots: (data.pagination == 'yes') ? true : false,
              nav: (data.arrows == 'yes') ? true : false,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
              margin: data.margin,
              navText: ['',''],
        responsive: {
          0: {
            items: data.items_column4 
            },
          480: {
            items: data.items_column3
            },
          768: {
            items: data.items_column2
            },
          992: { 
            items: data.items_column1
            },
          1200: {
            items: data.items_column0 
            }
        }
      });
      
    });
  }, 1000);
  }

  $scope.init = function () {
    $scope.getQuienes();
    $scope.updatecarrito();
    $scope.getGaleria();
    $scope.getTecnologias();
    $scope.destacados();
    $scope.getEmpresa();
    


    setTimeout(function() {

      $scope.fixtabs();



      $('.slideshow--home8').owlCarousel2({
        center: false,
        startPosition: 0,
        margin: 0,
        responsive: {
          0: {items:1	},
          768: {items:1	}
        },
        nav: true,
        loop: true,
        dots: false,
        dotsSpeed: 1000,
      
        slideBy: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        
        navSpeed: 1000,
        mouseDrag: true,
        
        responsiveRefreshRate: 100,
      });

      var owlBanner =  $('.owl-banner__slider');
      owlBanner.owlCarousel2({
        loop:true,
        margin:0,
        autoWidth: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        dots: false,
        responsive:{
          0:{
            items:1,
          },
          480:{
            items:1,
          },
          768:{
            items:2
          },
          1024:{
            items:2
          },
          1200:{
            items:3
          }
        }
      });


      $('.yt-content-slider').each(function () {
        var $slider = $(this),
          $panels = $slider.children('div'),
          data = $slider.data();
        // Remove unwanted br's
        //$slider.children(':not(.yt-content-slide)').remove();
        // Apply Owl Carousel
        $slider.owlCarousel2({
          responsiveClass: true,
          mouseDrag: true,
          video:true,
          
            lazyLoad: (data.lazyload == 'yes') ? true : false,
          autoplay: (data.autoplay == 'yes') ? true : false,
          autoHeight: (data.autoheight == 'yes') ? true : false,
          autoplayTimeout: data.delay * 1000,
          smartSpeed: data.speed * 1000,
          autoplayHoverPause: (data.hoverpause == 'yes') ? true : false,
          center: (data.center == 'yes') ? true : false,
          loop: (data.loop == 'yes') ? true : false,
                dots: (data.pagination == 'yes') ? true : false,
                nav: (data.arrows == 'yes') ? true : false,
          dotClass: "owl-dot",
          dotsClass: "owl-dots",
                margin: data.margin,
                navText: ['',''],
          
          responsive: {
            0: {
              items: data.items_column4 
              },
            480: {
              items: data.items_column3
              },
            768: {
              items: data.items_column2
              },
            992: { 
              items: data.items_column1
              },
            1200: {
              items: data.items_column0 
              }
          }
        });
        
      });




      $("ul.yt-accordion li").each(function() {
        if($(this).index() > 0) {
          $(this).children(".accordion-inner").css('display', 'none');
        }
        else {
          $(this).find(".accordion-heading").addClass('active');
        }
        
        var ua = navigator.userAgent,
        event = (ua.match(/iPad/i)) ? "touchstart" : "click";
        $(this).children(".accordion-heading").bind(event, function() {
          $(this).addClass(function() {
            if($(this).hasClass("active")) return "";
            return "active";
          });
      
          $(this).siblings(".accordion-inner").slideDown(350);
          $(this).parent().siblings("li").children(".accordion-inner").slideUp(350);
          $(this).parent().siblings("li").find(".active").removeClass("active");
        });
      });



      

  }, 1000);

    

  }

  $scope.init();

  $scope.cerrarModal=function()
  {
    $('#modalproducto').css('opacity','0');
    $('#modalproducto').css('visibility','hidden');
    console.log('ok');
  }

}]);