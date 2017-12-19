var myapp = angular.module('myApp', []);

myapp.filter('range', function() {
  var filter =
    function(arr, lower, upper) {
      for (var i = lower; i <= upper; i++) arr.push(i)
      return arr
    }
  return filter
})

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

myapp.service('fileUpload', ['$http', '$rootScope', 'URLS', function($http, $rootScope, URLS) {
  $rootScope.logos = [];

  this.uploadFileToUrl = function(file, uploadUrl, carro) {
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
        carro.logos.push(res.id)
        angular.element(document.querySelector('.myfile')).val(null);
        //$rootScope.galeriaColores.push(res.id);
      })
      .error(function() {
        console.log("Error");
      });
  };
}]);

myapp.controller('PagarController', ['$rootScope', '$scope', 'Pagos', 'URLS', '$stateParams', 'Marcas', '$state', 'fileUpload', 'Logos', function($rootScope, $scope, Pagos, URLS, $stateParams, Marcas, $state, fileUpload, Logos) {
  $scope.urlapi = URLS.api;
  $scope.urlapi2 = 'http://localhost/apicottonrepublic/public/';
  $scope.detalleMarca = [];
  $scope.currentYear = new Date().getFullYear();
  $scope.card = [];
  $scope.errorTarjeta = null;
  $scope.usuario = $rootScope.getUsuario();
  console.log($scope.usuario);
  $scope.logos = $rootScope.getBordado();

  $scope.tipoBordado = [{
      id: '0',
      name: 'Bordado en Pecho'
    },
    {
      id: '1',
      name: 'Bordado en Espalda - Caballero'
    },
    {
      id: '2',
      name: 'Bordado en Espalda - Dama'
    },
    {
      id: '3',
      name: 'Bordado en Manga Derecho'
    },
    {
      id: '4',
      name: 'Bordado en Manga Izquierda'
    },
  ];

  $scope.mostrarBordado = function(id) {
    $('#bordado' + id).toggle()
  }

  $scope.getEnvio = function() {

  }

  $scope.getPrecioBordado = function(precio) {
    var total = 0;
    var productos = $rootScope.getItemsCarrito();
    angular.forEach(productos, function(producto, key) {
      console.log(producto);
      if (producto.setbordado == 1) {
        total += precio * producto.cantidad;
      }
    });
    return total;
  }

  $scope.getCantidadBordado = function() {
    var total = 0;
    var productos = $rootScope.getItemsCarrito();
    angular.forEach(productos, function(producto, key) {
      console.log(producto);
      if (producto.setbordado == 1) {
        total += producto.cantidad;
      }
    });
    return total;
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



  /*$scope.mostrarMedidasBordado = function(){
      console.log($scope.medidaTipoBordado[$scope.selTipoBordado].image);
      $scope.medidaTipoBordado[$scope.selTipoBordado];
      console.log($scope.tipoBordado);
      console.log($scope.medidaTipoBordado[$scope.selTipoBordado]);
  }*/

  /*$scope.halloo = function(){
      console.log($scope.medidaTipoBordado[$scope.selTipoBordado][$scope.selMedidaBordado].image);
  }*/

  $scope.uploadFile = function(carro) {
    if ($rootScope.imagenActual) {
      carro.logos = [];

      console.log('file is ');
      console.log($rootScope.imagenActual);
      var uploadUrl = "http://localhost/apicottonrepublic/public/logo";
      //var uploadUrl =  URLS.api + "logo";
      fileUpload.uploadFileToUrl($rootScope.imagenActual, uploadUrl, carro).then(function(res) {
        console.log(res);
        $scope.updateCarrito();
      }, function(err) {
        console.log('Error');
      }); /**/
    } else {
      alert("Falta Imagen");
    }
  };

  $scope.eliminarImagen = function(id, carro) {
    carro.logos = null;
    $scope.updateCarrito();
    /*if(confirm('Estas seguro?')){
        Logos.delete(id).then(function(res){
            console.log(res.data.msg);
            carro.logos=[];
      });*/

  }
  $scope.resetimagenes = function() {
    $rootScope.logos = [];
  };


  if ($scope.usuario == null) {
    $state.go('login');
  }


  $scope.updateCarrito = function() {
    $rootScope.modificaCarrito($scope.carritolocal);
  }


  $scope.carritolocal = $rootScope.getItemsCarrito();
  console.log($scope.carritolocal);

  if (!$scope.carritolocal) {
    $state.go('carrito');
  }


  $scope.removeProducto = function(index) {
    $rootScope.deleteItemCarrito(index);
    $scope.carritolocal = $rootScope.getItemsCarrito();
  }


  $scope.getTotalPesos = function() {
    var total = 0;
    var totalbordado = 0;
    var productos = $rootScope.getItemsCarrito();

    angular.forEach(productos, function(producto, key) {

      if (producto.producto.promocion == 1) {
        total += producto.cantidad * producto.producto.precio_promo;
      } else {
        total += producto.cantidad * producto.producto.precio;
      }

      if (producto.setbordado == 1) {
        if ($scope.logos[0]) {
          totalbordado += producto.cantidad * 30;
        }
        if ($scope.logos[1]) {
          totalbordado += producto.cantidad * 30;
        }
        if ($scope.logos[2]) {
          totalbordado += producto.cantidad * 30;
        }
        if ($scope.logos[3]) {
          totalbordado += producto.cantidad * 30;
        }
        if ($scope.logos[4]) {
          totalbordado += producto.cantidad * 60;
        }
      }


    });

    return total + totalbordado;

  }

  $scope.getTotalDolar = function() {
    var total = 0;
    var productos = $rootScope.getItemsCarrito();

    angular.forEach(productos, function(producto, key) {

      if (producto.producto.promocion == 1) {
        total += producto.cantidad * producto.producto.precio_promo_dolar;
      } else {
        total += producto.cantidad * producto.producto.precio_dolar;
      }


    });

    return total;

  }

  $scope.crearBotonPaypal = function() {
    paypal.Button.render({

      env: 'sandbox', // sandbox | production

      // PayPal Client IDs - replace with your own
      // Create a PayPal app: https://developer.paypal.com/developer/applications/create
      client: {
        sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
        production: '<insert production client id>'
      },

      // Show the buyer a 'Pay Now' button in the checkout flow
      commit: true,
      locale: 'es_MX',

      style: {
        size: 'medium',
        color: 'blue',
        shape: 'rect',
        label: 'checkout'
      },

      // payment() is called when the button is clicked
      payment: function(data, actions) {

        // Make a call to the REST api to create the payment
        return actions.payment.create({
          payment: {
            transactions: [{
              amount: {
                total: '0.01',
                currency: 'USD'
              }
            }]
          }
        });
      },

      // onAuthorize() is called when the buyer approves the payment
      onAuthorize: function(data, actions) {

        // Make a call to the REST api to execute the payment
        return actions.payment.execute().then(function() {
          window.alert('Payment Complete!');
        });
      }

    }, '#paypal-button-container');
  }

  $scope.tokenizarTarjeta = function() {
    $scope.isDisabled = true;
    var loading = document.getElementById("loadingcap");
    loading.style.visibility = "visible";

    Conekta.setLanguage("es");
    Conekta.setPublishableKey("key_Gs5SZZCpZgUHyLyfHnj6KjA");



    var tokenParams = {
      "card": {
        "number": $scope.card.number,
        "name": "Rodrigo Mendez",
        "exp_year": $scope.card.exp_year,
        "exp_month": $scope.card.exp_month,
        "cvc": $scope.card.cvc
      }
    };

    console.log($scope.card);

    var successHandler = function(token) {
      /* token keys: id, livemode, used, object */

      var tokenId = token.id;
      $scope.cobrar(tokenId);
      console.log(token);
    };

    var errorHandler = function(err) {
      /* err keys: object, type, message, message_to_purchaser, param, code */
      console.log(err);
      $scope.errorTarjeta = err.message_to_purchaser;
      console.log($scope.errorTarjeta);
      $scope.isDisabled = false;
      loading.style.visibility = "hidden";
      window.scrollTo(0, 0);
      $scope.$apply();
    };

    Conekta.Token.create(tokenParams, successHandler, errorHandler);
  }

  $scope.cobrar = function(token) {

    Pagos.cobrar(token, $scope.carritolocal, $scope.usuario, $scope.usuario.direccion[0], $scope.comentarioPedido).then(function(res) {
      var loading = document.getElementById("loadingcap");
      console.log(res);
      loading.style.visibility = "hidden";
      $rootScope.vaciarCarrito();
      $state.go('idpedido', {
        id: res.data.orden.id
      });

      console.log(res.data.orden.id);

    }, function(err) {
      console.log(err.msg);
      loading.style.visibility = "hidden";
    });
  }

  $scope.finalizarCompra = function() {
    if ($scope.metodoPago == 'tarjeta') {
      if ($scope.validarTarjeta()) {
        $scope.tokenizarTarjeta();
      }

    } else if ($scope.metodoPago == 'oxxo') {

    } else if ($scope.metodoPago == 'paypal') {

    } else {
      alert('Debes seleccionar un metodo de pago');
    }
  }

  $scope.validarTarjeta = function() {
    if (!Conekta.card.validateNumber($scope.card.number)) {
      alert('Numero de tarjeta incorrecto');
      return Conekta.card.validateNumber($scope.card.number);
    }

    if (!Conekta.card.validateExpirationDate($scope.card.exp_month, $scope.card.exp_year)) {
      alert('Fecha de expiracion invalido');
      return Conekta.card.validateExpirationDate($scope.card.exp_month, $scope.card.exp_year);
    }

    if (!Conekta.card.validateCVC($scope.card.cvc)) {
      console.log($scope.card.cvc);
      alert('CVC invalido');
      return Conekta.card.validateCVC($scope.card.cvc);
    }

    return true;

  }






}]);