var myapp=angular.module('myApp',['']);
myapp.controller('MarcasController', ['$rootScope', '$scope','Productos','URLS','$stateParams','Marcas','$state', function($rootScope, $scope,Productos,URLS,$stateParams,Marcas,$state) {
    $scope.urlapi=URLS.api;
    $scope.detalleMarca=[];

    $scope.selectorder='created_at'; 

    $scope.metodoOrdenar='created_at'; 

    $scope.cambiarOrden=function(val)
    {
      console.log(val);
      $scope.metodoOrdenar=val;
    }

    $scope.data=[];
    $scope.tallasDisponibles=[];
    $scope.coloresDisponibles=[];

    $scope.detalleProducto=function(id)
    {
      console.log('xd');
      $state.go('detalleProducto', {id:id}, {reload: true});
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

    $scope.showColor=function(composicion)
    {
      console.log(composicion.colores);
      $scope.coloresDisponibles=composicion.colores;
    }

    $scope.updatecarrito=function()
    {
      $scope.carritolocal=$rootScope.getItemsCarrito();
      console.log( $scope.carritolocal);
    }

    $scope.setview=function(view)
    {
      $('.products-list').removeClass('list grid').addClass(view);
      $('.list-view .btn').removeClass('active');
      if(view == 'list') {
        $('.products-list .product-layout').addClass('col-lg-12');
        $('.products-list .product-layout .left-block').addClass('col-md-4');
        $('.products-list .product-layout .right-block').addClass('col-md-8');
        $('.products-list .product-layout .item-desc').removeClass('hidden')
        $('.list-view .' + view).addClass('active');
        $.cookie('display', 'list'); 
      }else{
        $('.products-list .product-layout').removeClass('col-lg-12');
        $('.products-list .product-layout .left-block').removeClass('col-md-4');
        $('.products-list .product-layout .right-block').removeClass('col-md-8');
        $('.products-list .product-layout .item-desc').addClass('hidden');
        $('.list-view .' + view).addClass('active');
        $.cookie('display', 'grid');
      }
    }
    
   

    
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
    

        $scope.getProductos();
        console.log('data');
 

}]);
