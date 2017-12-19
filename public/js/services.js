/**
 * Created by Daniel on 10/08/2016.
 */
var services = angular.module('myApp.services',[]);


services.service('Users',function ($http,URLS) {

    var url = URLS.api;

    this.login = function(email,password) {
        return $http({
            method:'POST',
            url:url+'login',
            data:{
                usuario:email,
                password:password
            }
        });
    };

});

services.service('Productos',function($http,URLS){


    this.getAll = function(id){
        return $http({
            method:'GET',
            url:URLS.api + "productos"
        });
    };
    this.find = function(id){
        return $http({
            method:'GET',
            url:URLS.api + "producto/"+id
        });
    };

    this.byMarca = function(id){
        return $http({
            method:'GET',
            url:URLS.api + "productomarca/"+id
        });
    };

    this.destacados=function()
    {
        return $http({
            method:'GET',
            url:URLS.api + "productosdestacados"
        });
    }

    this.buscarProducto=function(q)
    {
        return $http({
            method:'GET',
            url:URLS.api + "buscarProducto/"+q
        });
    }

    this.comentarProducto=function(item)
    {
        return $http({
            method:'POST',
            data:{
               comentario:item.comentario,
               calidad:item.calidad,
               precio:item.precio,
               servicio:item.servicio,
               tiempo_entrega:item.tiempo_entrega,
               id_producto:item.id_producto,
               id_usuario:item.id_usuario
            },
            url: URLS.api + "comentario"
        });

    }



   

});


services.service('Composiciones',function($http,URLS){


    this.getAll = function(id){
        return $http({
            method:'GET',
            url:URLS.api + "composiciones"
        });
    };

    this.find = function(id){
        return $http({
            method:'GET',
            url:URLS.api + "composicion/"+id
        });
    };


    this.add = function(item,colores,tecnologias){
        console.log(item);
        return $http({
            method:'POST',
            data:{
               codigo:item.codigo,
               descripcion_es:item.descripcion_es,
               descripcion_en:item.descripcion_en,
               colores:colores,
               tecnologias:tecnologias
            },
            url: URLS.api + "composicion"
        });
    };

    this.edit = function(item,coloress,tecnologiass){
        console.log(item);
        return $http({
            method:'PUT',
            data:{
            codigo:item.codigo,
               descripcion_es:item.descripcion_es,
               descripcion_en:item.descripcion_en,
               colores:coloress,
               tecnologias:tecnologiass
            },
            url: URLS.api + "composicion/"+item.id
        });
    };

    this.delete = function(item){
        console.log(item);
        return $http({
            method:'DELETE',
            url: URLS.api + "composicion/"+item.id
        });
    };

   

});

services.service('Colores',function($http,URLS){

    this.getAll = function(id){
        return $http({
            method:'GET',
            url:URLS.api + "colores",
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
    };

    this.find = function(id){
        return $http({
            method:'GET',
            url:URLS.api + "color/"+id,
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
    };

    this.add = function(item,imagenes){
        console.log(imagenes);
        return $http({
            method:'POST',
            data:{
               codigo:item.codigo,
               descripcion_es:item.descripcion_es,
               descripcion_en:item.descripcion_en,
               imagenes: imagenes
            },
            url: URLS.api + "color"
        });
    };

    this.edit = function(item,imagenes){
        console.log(item);
        return $http({
            method:'PUT',
            data:{
               codigo:item.codigo,
               descripcion_es:item.descripcion_es,
               descripcion_en:item.descripcion_en,
                imagenes: imagenes
            },
            url: URLS.api + "color/"+item.id
        });
    };

    this.delete = function(item){
        console.log(item);
        return $http({
            method:'DELETE',
            url: URLS.api + "color/"+item.id
        });
    };
});


services.service('Tecnologias',function($http,URLS){

    this.getAll = function(id){
        return $http({
            method:'GET',
            url:URLS.api + "tecnologias",
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
    };
    this.add = function(item,imagenes){
        console.log(item);
        return $http({
            method:'POST',
            data:{
               codigo:item.codigo,
               descripcion_es:item.descripcion_es,
               descripcion_en:item.descripcion_en,
               imagenes: imagenes
            },
            url: URLS.api + "tecnologia"
        });
    };

    this.edit = function(item,imagenes){
        console.log(item);
        return $http({
            method:'PUT',
            data:{
               codigo:item.codigo,
               descripcion_es:item.descripcion_es,
               descripcion_en:item.descripcion_en,
               imagenes: imagenes
            },
            url: URLS.api + "tecnologia/"+item.id
        });
    };

    this.delete = function(item){
        console.log(item);
        return $http({
            method:'DELETE',
            url: URLS.api + "tecnologia/"+item.id
        });
    };

   

});


services.service('Marcas',function($http,URLS){
    
    this.getAll = function(id){
        return $http({
            method:'GET',
            url:URLS.api + "marcas",
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
    };

    this.find = function(id){
        return $http({
            method:'GET',
            url:URLS.api + "marca/"+id
        });
    };
});



services.service('Imagenes',function($http,URLS){
    this.delete = function(item){
        console.log(item);
        return $http({
            method:'DELETE',
            url: URLS.api + "imagenes/"+item
        });
    };
});

services.service('Galeria',function($http,URLS){
    
    this.getAll = function(id){
        return $http({
            method:'GET',
            url:URLS.api + "galeria"

        });
    };

});

services.service('Registro',function($http,URLS){
    
    this.add = function(item){
        console.log(item);
        return $http({
            method:'POST',
            data:{
                nombre:item.nombre,
                tipo:item.tipo,
                razonsocial:item.razonsocial,
                rfc:item.rfc,
                giro:item.giro,
               apellidos:item.apellido,
               usuario:item.usuario,
               password:item.password,
               email:item.email,
               telefono:item.telefono,
               calle:item.calle,
               num_ext:item.num_ext,
               num_int:item.num_int+'',
               cp:item.cp,
               colonia:item.colonia,
               referencia:item.referencia+'',
               estado:item.estado,
               ciudad:item.ciudad,
               pais:item.pais
            },
            url: URLS.api  + "usuario"
        });
    };

    this.login = function(email,password){
        
               return $http({
                   method:'POST',
                   data: {
                       email:email,
                       password:password
                   },
                   url:URLS.api +"login"
               });
           };

           this.forgot=function(email)
           {
            return $http({
                method:'POST',
                data: {
                    email:email
                },
                url:URLS.api +"getResetPassword"
            });
           }

});


services.service('Otros',function($http,URLS){
    
    this.getCodigoPostal = function(cp){
 
        return $http({
            method:'GET',
            url:URLS.api +"getcodigo/"+cp
        });
    };

});

services.service('Empresa',function($http,URLS){
    
        this.getEmpresa = function(id){
            return $http({
                method:'GET',
                url:URLS.api + "empresa"
    
            });
        };
    
        this.getQuienes = function(id){
            return $http({
                method:'GET',
                url:URLS.api + "quienes"
    
            });
        };
    
    });

services.service('Pagos',function($http,URLS){

this.cobrar = function(token,carrito,usuario,direccion,comentarioPedido){

    return $http({
        method:'POST',
        data: {
        token:token,
        carrito:carrito,
        usuario:usuario,
        direccion:direccion,
        comentario:comentarioPedido
        },
        url:URLS.api +"procesarPago"
    });
};


});


services.service('Pedidos',function($http,URLS){

    this.getAll = function(idUsuario){
        return $http({
            method:'GET',
            url:URLS.api + "pedidos/"+idUsuario

        });

            };

    this.getPedido = function(idPedido){
        return $http({
            method:'GET',
            url:URLS.api + "pedido/"+idPedido

        });

    };

    
    });

services.service('Logos',function($http,URLS){

    this.delete = function(item){
        console.log(item);
        return $http({
            method:'DELETE',
            url: 'http://localhost/apicottonrepublic/public/' + "logo/"+item
        });
    };
});

