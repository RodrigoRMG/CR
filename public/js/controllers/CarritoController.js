var myapp = angular.module('myApp', []);
myapp.controller('CarritoController', ['$rootScope', '$scope', 'Productos', 'URLS', '$stateParams', 'Marcas', function($rootScope, $scope, Productos, URLS, $stateParams, Marcas) {
  $scope.urlapi = URLS.api;
  $scope.detalleMarca = [];
  $scope.logos = $rootScope.getBordado();

  $scope.carritolocal = $rootScope.getItemsCarrito();

  $scope.removeProducto = function(index) {
    $rootScope.deleteItemCarrito(index);
    $scope.carritolocal = $rootScope.getItemsCarrito();
  }

  $scope.updatecarrito = function() {
    $rootScope.modificaCarrito($scope.carritolocal);
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

  $scope.setBordado = function() {

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

  $scope.getSoloPesos = function() {
    var total = 0;
    var productos = $rootScope.getItemsCarrito();

    angular.forEach(productos, function(producto, key) {

      if (producto.producto.promocion == 1) {
        total += producto.cantidad * producto.producto.precio_promo;
      } else {
        total += producto.cantidad * producto.producto.precio;
      }


    });

    return total;

  }

  $scope.getTotalDolar = function() {
    var total = 0;
    var productos = $rootScope.getItemsCarrito();

    angular.forEach(productos, function(producto, key) {
      console.log(producto);
      if (producto.producto.promocion == 1) {
        total += producto.cantidad * producto.producto.precio_promo_dolar;
      } else {
        total += producto.cantidad * producto.producto.precio_dolar;
      }


    });

    return total;

  }

  $scope.getSoloDolar = function() {
    var total = 0;
    var productos = $rootScope.getItemsCarrito();

    angular.forEach(productos, function(producto, key) {
      console.log(producto);
      if (producto.producto.promocion == 1) {
        total += producto.cantidad * producto.producto.precio_promo_dolar;
      } else {
        total += producto.cantidad * producto.producto.precio_dolar;
      }


    });

    return total;

  }

  $scope.getTotalEuro = function() {
    var total = 0;
    var productos = $rootScope.getItemsCarrito();

    angular.forEach(productos, function(producto, key) {
      console.log(producto);
      if (producto.producto.promocion == 1) {
        total += producto.cantidad * producto.producto.precio_promo_euro;
      } else {
        total += producto.cantidad * producto.producto.precio_euro;
      }


    });

    return total;

  }

  $scope.getSoloEuro = function() {
    var total = 0;
    var productos = $rootScope.getItemsCarrito();

    angular.forEach(productos, function(producto, key) {
      console.log(producto);
      if (producto.producto.promocion == 1) {
        total += producto.cantidad * producto.producto.precio_promo_euro;
      } else {
        total += producto.cantidad * producto.producto.precio_euro;
      }


    });

    return total;

  }



}]);