var myapp = angular.module('myApp', []);

myapp.service('fileUpload', ['$http', '$rootScope', 'URLS', function($http, $rootScope, URLS) {

  $rootScope.bordados = ['', '', '', ''];

  this.uploadFileToUrl = function(file, uploadUrl, pos) {
    var fd = new FormData();
    fd.append('file', file);

    return $http.post(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: {
          'Content-Type': undefined
        }
      })
      .success(function(res) {
        console.log(res);
        //$rootScope.logos.push(URLS.api + "getarchivo/"+ res.id);
        $rootScope.bordados[pos] = res.id;
        angular.element(document.querySelector('.myfile')).val(null);

        $rootScope.setBordado($rootScope.bordados);
        //$rootScope.galeriaColores.push(res.id);
      })
      .error(function() {
        console.log("Error");
      });
  };
}]);

myapp.directive('fileModel', ['$parse', '$rootScope', function($parse, $rootScope) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var model = $parse(attrs.fileModel);
      var modelSetter = model.assign;

      element.bind('change', function() {
        scope.$apply(function() {
          modelSetter(scope, element[0].files[0]);
        });
        $rootScope.imagenActual = element[0].files[0];
      });
    }
  };
}]);


myapp.controller('BordadoController', ['$rootScope', '$scope', 'Productos', 'URLS', '$stateParams', 'Marcas', 'fileUpload', 'Imagenes', function($rootScope, $scope, Productos, URLS, $stateParams, Marcas, fileUpload, Imagenes) {
  $scope.urlapi = URLS.api;
  $scope.detalleMarca = [];
  $scope.logos = $rootScope.getBordado();
  $scope.carro = [];

  $scope.carritolocal = $rootScope.getItemsCarrito();

  $scope.carro.selTipoBordado1 = 0;
  $scope.carro.selTipoBordado2 = 1;
  $scope.carro.selTipoBordado3 = 3;
  $scope.carro.selTipoBordado4 = 4;


  $scope.eliminarImagen = function(imagen, posicion) {

    if (confirm('Estas seguro?')) {
      Imagenes.delete(imagen).then(function(res) {
        $scope.logos[posicion] = "";
        $rootScope.setBordado($scope.logos);
      });

    }



  }

  $scope.medidaTipoBordado = [
    [{
        id: '0',
        image: './image/bordado/bordado-1-6.jpg',
        name: 'Bordado Pecho Izquierdo Tipo rectangular: 8cm x 3cm'
      },
      {
        id: '1',
        image: './image/bordado/bordado-1-1.jpg',
        name: 'Bordado Pecho Derecho Tipo rectangular: 8cm x 3cm'
      },
      {
        id: '2',
        image: './image/bordado/bordado-1-5.jpg',
        name: 'Bordado Pecho Izquierdo Tipo cuadrado: 10cm x 10cm'
      },
      {
        id: '3',
        image: './image/bordado/bordado-1-2.jpg',
        name: 'Bordado Pecho Derecho Tipo cuadrado: 10cm x 10cm'
      },
    ],
    [{
        id: '0',
        image: './image/bordado/bordado-2-1.jpg',
        name: 'Medida Espalda, Tipo 1: 27cm x 5cm'
      },
      {
        id: '1',
        image: './image/bordado/bordado-2-2.jpg',
        name: 'Medida Espalda, Tipo 2: 27cm x 10cm'
      },
    ],
    [{
        id: '0',
        image: './image/bordado/bordado-2-2-dama.jpg',
        name: 'Medida Espalda, Tipo 1: 23cm x 5cm'
      },
      {
        id: '1',
        image: './image/bordado/bordado-2-1-dama.jpg',
        name: 'Medida Espalda, Tipo 2: 23cm x 10cm'
      },
    ],
    [{
        id: '0',
        image: './image/bordado/bordado-3-1.jpg',
        name: 'Bordado Manga Derecha Tipo rectangular: 8cm x 3cm'
      },
      {
        id: '1',
        image: './image/bordado/bordado-3-2.jpg',
        name: 'Bordado Manga Derecha Tipo cuadrado: 10cm x 10cm'
      },
    ],
    [{
        id: '0',
        image: './image/bordado/bordado-4-1.jpg',
        name: 'Bordado Manga Izquierda Tipo rectangular: 8cm x 3cm'
      },
      {
        id: '1',
        image: './image/bordado/bordado-4-2.jpg',
        name: 'Bordado Manga Izquierda Tipo cuadrado: 10cm x 10cm'
      },
    ],
  ];

  $scope.uploadFile = function(posicion) {
    if ($rootScope.imagenActual) {

      console.log('file is ');
      console.log($rootScope.imagenActual);
      //var uploadUrl = "http://localhost/apicottonrepublic/public/subirArchivo";
      var uploadUrl = URLS.api + "subirArchivo";
      fileUpload.uploadFileToUrl($rootScope.imagenActual, uploadUrl, posicion).then(function(res) {
        $scope.logos = $rootScope.getBordado();

      }, function(err) {
        console.log('Error');
      }); /**/
    } else {
      alert("Falta Imagen");
    }
  };

  setTimeout(function() {
    var $nav = $("#thumb-slider");
    $nav.each(function() {
      $(this).owlCarousel2({
        nav: true,
        dots: false,
        slideBy: 1,
        margin: 10,
        responsive: {
          0: {
            items: 2
          },
          600: {
            items: 3
          },
          1000: {
            items: 3
          }
        }
      });
    });

    var zoomCollection = '.large-image img';
    $(zoomCollection).elevateZoom({
      zoomType: "inner",
      lensSize: "200",
      easing: true,
      gallery: 'thumb-slider',
      cursor: 'pointer',
      loadingIcon: '../html/image/theme/lazy-loader.gif',
      galleryActiveClass: "active"
    });
    $('.large-image').magnificPopup({
      items: [{
          src: 'image/bordado/0.jpg'
        },
        {
          src: 'image/bordado/1.jpg'
        },
        {
          src: 'image/bordado/2.jpg'
        },
        {
          src: 'image/bordado/3.jpg'
        },
        {
          src: 'image/bordado/4.jpg'
        },
        {
          src: 'image/bordado/5.jpg'
        },
        {
          src: 'image/bordado/6.jpg'
        },
        {
          src: 'image/bordado/7.jpg'
        },
        {
          src: 'image/bordado/9.jpg'
        },
        {
          src: 'image/bordado/10.jpg'
        }
      ],
      gallery: {
        enabled: true,
        preload: [0, 2]
      },
      type: 'image',
      mainClass: 'mfp-fade',
      callbacks: {
        open: function() {

          var activeIndex = parseInt($('#thumb-slider .img.active').attr('data-index'));
          var magnificPopup = $.magnificPopup.instance;
          magnificPopup.goTo(activeIndex);
        }
      }
    });

    $("#thumb-slider .owl2-item").each(function() {
      $(this).find("[data-index='0']").addClass('active');
    });
  }, 1500);




}]);