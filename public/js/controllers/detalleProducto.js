
angular.module('myApp').controller('DetalleProductosController', ['$rootScope', '$scope','Productos','URLS', function($rootScope, $scope,Productos,URLS) {
$scope.urlapi=URLS.api;

$scope.data=[];
$scope.tallasDisponibles=[];
$scope.coloresDisponibles=[];

$scope.getProductos=function()
{

  Productos.getAll().then(function (res) {
   $scope.data = res.data;
  });
  console.log($scope.data);
}

$scope.init = function () {
    $scope.getProductos();
    lightbox.option({
      'albumLabel': 'Imagen %1 de %2'
    });
   
  }

  $scope.init();

  

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

  $scope.updatecarrito=function()
  {
    $scope.carritolocal=$rootScope.getItemsCarrito();
    console.log( $scope.carritolocal);
  }

  

}]);