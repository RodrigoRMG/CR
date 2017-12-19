
angular.module('myApp').controller('CuentaController', ['$rootScope','$state', '$scope','Pedidos','URLS', function($rootScope,$state, $scope,Pedidos,URLS) {
$scope.urlapi=URLS.api;

$scope.item=$rootScope.getUsuario();

$scope.getPedidos=function()
{

  Pedidos.getAll($scope.usuario.id).then(function (res) {
   $scope.pedidos = res.data;
   console.log(res.data);
  });
  console.log($scope.pedidos);
}

    if($scope.usuario==null)
    {
        $state.go('login');
    }else{
        $scope.getPedidos();
    }
    



}]);

angular.module('myApp').controller('MisDatosController', ['$rootScope','$state', '$scope','Pedidos','URLS','Otros', function($rootScope,$state, $scope,Pedidos,URLS,Otros) {

$scope.item=$rootScope.getUsuario();
 $scope.listaColonias=[];

console.log($scope.item);

$scope.getdatospostal=function()
 {
     console.log($scope.item.direccion[0]);
     if($scope.item.direccion[0].pais=="MEX" && $scope.item.direccion[0].cp.length==5)
        {
            Otros.getCodigoPostal($scope.item.direccion[0].cp).then(function(res){
               $scope.item.direccion[0].estado=res.data.estado;
               $scope.item.direccion[0].ciudad=res.data.municipio;
               $scope.listaColonias=res.data.colonias;
               $scope.item.direccion[0].colonia=res.data.colonias[0];
               console.log(res);

            },function (err){
                console.log(err);
            });


        }else{

        }
 }

 $scope.getdatospostal();

}]);

angular.module('myApp').controller('DetallePedidoController', ['$rootScope','$state', '$scope','Pedidos','URLS','$stateParams','Productos','Composiciones','Colores', function($rootScope,$state, $scope,Pedidos,URLS,$stateParams,Productos,Composiciones,Colores) {
    $scope.urlapi=URLS.api;
    

    $scope.tipoBordado = [
        {id:'0', name: 'Bordado en Pecho'},        
        {id:'1', name: 'Bordado en Espalda - Caballero'},
        {id:'2', name: 'Bordado en Espalda - Dama'},        
        {id:'3', name:'Bordado en Manga Derecho'},
        {id:'4', name: 'Bordado en Manga Izquierda'},
    ];


    $scope.medidaTipoBordado = [
        [
            {id:'0', image:'./image/bordado/bordado-1-6.jpg', name: 'Bordado Pecho Izquierdo Tipo rectangular: 8cm x 3cm'},
            {id:'1', image:'./image/bordado/bordado-1-1.jpg', name: 'Bordado Pecho Derecho Tipo rectangular: 8cm x 3cm'},
            {id:'2', image:'./image/bordado/bordado-1-5.jpg', name: 'Bordado Pecho Izquierdo Tipo cuadrado: 10cm x 10cm'},
            {id:'3', image:'./image/bordado/bordado-1-2.jpg', name: 'Bordado Pecho Derecho Tipo cuadrado: 10cm x 10cm'},
        ],
        [
            {id:'0', image:'./image/bordado/bordado-2-1.jpg', name: 'Medida Espalda, Tipo 1: 27cm x 5cm'},
            {id:'1', image:'./image/bordado/bordado-2-2.jpg', name: 'Medida Espalda, Tipo 2: 27cm x 10cm'},
        ],
        [
            {id:'0', image:'./image/bordado/bordado-2-2-dama.jpg', name: 'Medida Espalda, Tipo 1: 23cm x 5cm'},
            {id:'1', image:'./image/bordado/bordado-2-1-dama.jpg', name: 'Medida Espalda, Tipo 2: 23cm x 10cm'},
        ],
        [
            {id:'0', image:'./image/bordado/bordado-3-1.jpg', name: 'Bordado Manga Derecha Tipo rectangular: 8cm x 3cm'},
            {id:'1', image:'./image/bordado/bordado-3-2.jpg', name: 'Bordado Manga Derecha Tipo cuadrado: 10cm x 10cm'},
        ],
        [
            {id:'0', image:'./image/bordado/bordado-4-1.jpg', name: 'Bordado Manga Izquierda Tipo rectangular: 8cm x 3cm'},
            {id:'1', image:'./image/bordado/bordado-4-2.jpg', name: 'Bordado Manga Izquierda Tipo cuadrado: 10cm x 10cm'},
        ],
    ];
    
    $scope.usuario=$rootScope.getUsuario();
    
    $scope.getPedido=function()
    {
    
      Pedidos.getPedido($stateParams.id).then(function (res) {
       $scope.pedido = res.data[0];
       console.log(res.data);
      });
      console.log($scope.pedidos);
    }
    
        if($scope.usuario==null)
        {
            $state.go('login');
        }else{
            $scope.getPedido();
        }

    
    
    
    }]);