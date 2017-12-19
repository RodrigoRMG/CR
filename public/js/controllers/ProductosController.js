var myapp=angular.module('myApp',['angular-elevate-zoom']);
myapp.controller('ProductosController', ['$rootScope', '$scope','Productos','URLS', function($rootScope, $scope,Productos,URLS) {
$scope.urlapi=URLS.api;






$scope.getProductos=function()
{

  Productos.getAll().then(function (res) {
   $scope.data = res.data;
  });
  console.log($scope.data);
}

$scope.init = function () {
    $scope.getProductos();
    console.log('khe');
   
  }

  $scope.init();

}]);



myapp.controller('DetalleProductosController', ['$rootScope', '$scope','Productos','URLS','$stateParams', function($rootScope, $scope,Productos,URLS,$stateParams) {
  $scope.urlapi=URLS.api;
  
  $scope.carritolocal=[];
  $scope.data=[];
  $scope.tallasDisponibles=[];
  $scope.coloresDisponibles=[];
  $scope.getProductos=function()
  {
  
    Productos.find($stateParams.id).then(function (res) {
     $scope.data = res.data;
     $scope.data.descripcion_es.replace(/\n/g, '<br/>');
     $scope.tallasDisponibles=res.data.talla.split(',');
     console.log(res.data);
    });

    
  
  }

  

  
  $scope.init = function () {
      $scope.getProductos();
      $scope.updatecarrito();
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

    $scope.agregarAlcarro=function(producto,comp,color,talla,cantidad)
    {
      var item={producto:{id:producto.id,modelo:producto.modelo,nombre_es:producto.nombre_es,nombre_en:producto.nombre_en,imagenes:producto.imagenes},
      compocision:{id:comp.id,codigo:comp.codigo,nombre_es:comp.descripcion_es,nombre_en:comp.descripcion_en},
      color:{id:color.id,nombre_es:color.descripcion_es,nombre_en:color.descripcion_en},talla:talla,cantidad:cantidad};
      console.log(item);
      $rootScope.agregarAlcarrito(item);
      $('#modalproducto').css('opacity','0');
      $('#modalproducto').css('visibility','hidden');
      $scope.updatecarrito();

    }
  
  
    $scope.init();

    $scope.modalAgregarProducto=function()
    {
      $('#modalproducto').css('opacity','1');
      $('#modalproducto').css('visibility','visible');
      console.log('wut');
    }
  
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


myapp.controller('BusquedaProductosController', ['$rootScope', '$scope','Productos','URLS','$stateParams', function($rootScope, $scope,Productos,URLS,$stateParams) {
  $scope.urlapi=URLS.api;
  $scope.data=[];
  $scope.busqueda="";

  $scope.carritolocal=[];

  $scope.getProductos=function()
  {
  
    Productos.buscarProducto($stateParams.buscar).then(function (res) {
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
    $scope.busqueda='Resultados de la busqueda para "'+$stateParams.buscar+'"';
    $scope.getProductos();
    $scope.updatecarrito();
    console.log( 'what');
  }

  console.log($scope.busqueda);
  $scope.init();


}]);



myapp.controller('MarcasController', ['$rootScope', '$scope','Productos','URLS','$stateParams','Marcas', function($rootScope, $scope,Productos,URLS,$stateParams,Marcas) {
        $scope.urlapi=URLS.api;
        $scope.detalleMarca=[];


       

        
        $scope.getProductos=function()
        {
        
          Productos.byMarca($stateParams.id).then(function (res) {
          $scope.data = res.data;
          console.log(res.data);
          });

          Marcas.find($stateParams.id).then(function (res) {
            $scope.detalleMarca = res.data;
            console.log(res.data);
            });
        }
        

            //$scope.getProductos();
            console.log('data');

            
     

  }]);


  myapp.controller('CarritoController', ['$rootScope', '$scope','Productos','URLS','$stateParams','Marcas', function($rootScope, $scope,Productos,URLS,$stateParams,Marcas) {
    $scope.urlapi=URLS.api;
    $scope.detalleMarca=[];

    $scope.carritolocal=$rootScope.getItemsCarrito();

    $scope.removeProducto=function(index)
    {
      $rootScope.deleteItemCarrito(index);
      $scope.carritolocal=$rootScope.getItemsCarrito();
    }

    
   

}]);
  