var myapp=angular.module('myApp',['']);
myapp.controller('BusquedaProductosController', ['$rootScope', '$scope','Productos','URLS','$stateParams','Marcas','$state', function($rootScope, $scope,Productos,URLS,$stateParams,Marcas,$state) {
    $scope.urlapi=URLS.api;
    $scope.textoBuscado=$stateParams.buscar;
    console.log($stateParams);
    $scope.busquedatxt='Resultados de la busqueda para "'+ $scope.textoBuscado+'"';

    $scope.selectorder='nombre_es'; 
    
        $scope.metodoOrdenar='nombre_es'; 
    
        $scope.cambiarOrden=function(val)
        {
          console.log(val);
          $scope.metodoOrdenar=val;
        }
  
    $scope.carritolocal=[];
  
    $scope.getProductos=function()
    {
    
      Productos.buscarProducto( $scope.textoBuscado).then(function (res) {
       $scope.data = res.data;
       console.log(res.data);
      });
  
      
    
    }
  
    $scope.updatecarrito=function()
    {
      $scope.carritolocal=$rootScope.getItemsCarrito();
      console.log( $scope.carritolocal);
    }
  
  
    $scope.init = function () {
      $scope.getProductos();
  
      console.log( 'what');
    }

    $scope.init();
  
 

}]);
