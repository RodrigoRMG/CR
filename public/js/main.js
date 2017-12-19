var app = angular.module('myApp', [
  'ngCookies',
  'ui.router',
  'pascalprecht.translate',
  'oc.lazyLoad',
  'LocalStorageModule',
  'myApp.services',
  'ngSanitize',
  'LocalStorageModule'
]);

var translationsEN = {

  //menu principal
  terminos2: 'Terms and Conditions',
  politicas: 'Privacy policies',
  bordados: 'Logo',
  precio: 'Price',
  cambio: 'Currency',
  cambioDolar: 'USD Dollar',
  cambioPeso: 'Mexican peso',
  cambioEuro: 'Euro',
  logout: 'Logout',
  register: 'Register',
  myaccount: 'My account!',
  cart: 'Shopping Cart',
  callus: 'CALLL US',
  sigin: 'Sig in',
  items: 'items',
  spanish: 'Spanish',
  english: 'English',
  es: 'EN',
  searchplace: 'Are you looking for something?',
  datosUser: 'My data',
  pedidos: 'Orders',
  guardar: 'Save',

  //Footer
  mail: 'E-mail',
  suscribe: 'SUSCRIBE',
  followus: 'FOLLOW US',
  categories: 'CATEGORIES',
  information: 'INFORMATION',
  findus: 'FIND US',
  copyright: 'All rights reserved',
  uppage: 'Go top',


  //contacto
  phone: 'Phone',
  visit: 'Visit us',
  contact: 'Contact',
  cancontact: 'You can contact us',
  contactform: 'Contact Form',
  urname: 'Your name',
  uremail: 'Your email',
  urmessage: 'Your message',
  senmessage: 'Send message',

  //Inicio
  texttech: 'Textile technology',
  ourbrands: 'OUR BRANDS',
  featproductos: 'FEATURED PRODUCTS',

  //Productos
  order: 'Order by',
  filter: 'Filter',
  filtername: 'Name',
  filtersize: 'Size',
  model: 'MODEL',
  comp: 'Composition',
  comments: 'Comments',
  relatedprod: 'Related products',
  technology: 'Technologies',
  recfabric: 'Recommended  fabric',
  colordisp: 'Available Colours',

  //Iniciar sesion
  newuser: 'New user',
  txtnewuser: 'creating an account, you will be able to shop faster, stay current on order status, and track orders you have previously made.',
  imclient: 'I am client',
  password: 'Password',

  //Registro
  txtregistro: 'If you have a registered account, please log in from the following link.',
  whatim: 'I am',
  txtcliente: 'Person',
  txtempresa: 'Company',
  companydata: 'Company data',
  razsoc: 'Business name',
  typecomp: 'Type',
  rfc: 'RFC',
  personaldata: 'Personal Data',
  contactinfo: 'Contact info',
  urlastname: 'Last Name',
  addresss: 'Address',
  street: 'Street',
  outnumber: 'Outdoor Number',
  intnumber: 'Inner Number ',
  zipcode: 'Zip code',
  colonia: 'Neighborhood',
  refer: 'Reference',
  state: 'State',
  municipio: 'City',
  country: 'Country',
  confirmpassword: 'Password confirmation',


  //Carrito
  image: 'Image',
  cantidad: 'Quantity',
  pagar: 'Checkout',
  paymethod: 'payment method',
  paymethodtxt: 'Please select the payment method you prefer',
  paycard: 'Card payment',
  resumen: 'Summary of your purchase',
  addcomment: 'Add comments to your purchase order',
  terminos: 'I have read and agree to the Terms and Conditions',
  confirm: 'Finish',
  carddetail: 'Card details',
  cardnumber: 'Card number',
  carddate: 'Date',
  cardmonth: 'Month',
  cardyear: 'Year',
  embroidery: 'Edit Logo',

  //Cuenta
  cuenta: 'My account',
  idOrder: 'Order ID',
  status: 'Status',
  dateOrder: 'Date Added',
  orderinfo: 'Order Information',
  orderdetail: 'Order Details',
  description: 'Description',


  flag: 'images/usa.png',
  home: 'Home',
  lineas: 'Collections',
  shop: 'Shop',
  quienes: 'About us',
  infra: 'Infrastructure',
  search: 'Search',
  sub1: 'SUBSCRIBE to our newsletters',
  sub2: 'Be the First to know about our Fresh Arrivals and much more!',
  sub3: 'Enter your Email id',
  sub4: 'Subscribe',

  texttechtext: 'descripcion de tecnologías en inglés',

  /*EDITAR BORDADO */
  customizeorder: 'Customize Your order',



  upward: 'UPWARD',
  falling: 'FALLING',
  filterDate: 'DATE',

};

var translationsES = {

  //Menu principal
  terminos2: 'Términos y condiciones',
  politicas: 'Políticas de privacidad',
  bordados: 'Bordado',
  precio: 'Precio',
  cambio: 'Moneda',
  cambioDolar: 'Dólares',
  cambioPeso: 'Pesos',
  cambioEuro: 'Euro',
  logout: 'Salir',
  register: 'registrarse',
  myaccount: 'Mi cuenta',
  cart: 'Carrito',
  callus: 'LLÁMANOS',
  sigin: 'Iniciar sesión',
  spanish: 'Español',
  english: 'Inglés',
  searchplace: '¿Estás buscando algo?',
  tems: 'Productos',
  datosUser: 'Mis datos',
  pedidos: 'Pedidos',
  guardar: 'Guardar',

  //Footer
  mail: 'Correo',
  suscribe: 'SUSCRÍBETE',
  followus: 'SÍGUENOS',
  categories: 'CATEGORÍAS',
  information: 'INFORMACIÓN',
  findus: 'UBÍCANOS',
  copyright: 'Todos los derechos reservados',
  uppage: 'Subir',


  //contacto
  phone: 'Teléfono',
  visit: 'Visítanos',
  contact: 'Contacto',
  cancontact: 'Puedes contactarnos',
  contactform: 'Formulario de contacto',
  urname: 'Tu nombre',
  uremail: 'Tu email',
  urmessage: 'Tu mensaje',
  senmessage: 'Enviar mensaje',

  //INICIO
  texttech: 'TECNOLOGÍA TEXTIL',
  ourbrands: 'NUESTRAS MARCAS',
  featproductos: 'PRODUCTOS DESTACADOS',

  //Productos
  order: 'Ordenar',
  filter: 'Filtro',
  filtername: 'NOMBRE',
  filtersize: 'TALLAS',
  model: 'MODELO',
  comp: 'Composición',
  comments: 'Comentarios',
  relatedprod: 'Productos relacionados',
  technology: 'Tecnologías',
  recfabric: 'Telas recomendadas',
  colordisp: 'Colores disponibles',

  //iniciarsesion
  newuser: 'Nuevo usuario',
  txtnewuser: 'Al crear una cuenta, podrá realizar compras más rápido, estar al día en el estado de la orden y realizar un seguimiento de las órdenes que ha realizado anteriormente.',
  imclient: 'Soy un cliente',
  password: 'Contraseña',

  //Registro
  txtregistro: 'Si usted tiene alguna cuenta registrada, por favor acceda desde el siguiente link .',
  whatim: 'Soy un',
  txtcliente: 'Persona',
  txtempresa: 'Empresa',
  companydata: 'Datos de la empresa',
  razsoc: 'Business name',
  typecomp: 'Type',
  rfc: 'RFC',
  personaldata: 'Información personal',
  contactinfo: 'Información de contacto',
  urlastname: 'Apellidos',
  addresss: 'Dirección',
  street: 'Calle',
  outnumber: 'Número exterior',
  intnumber: 'Número interior ',
  zipcode: 'Código postal',
  colonia: 'Colonia',
  refer: 'Referencia',
  state: 'Estado',
  municipio: 'Municipio / Ciudad',
  country: 'País',
  confirmpassword: 'Confirmar contraseña',

  //Carrito
  image: 'Imagen',
  cantidad: 'Cantidad',
  pagar: 'Pagar',
  paymethod: 'Método de pago',
  paymethodtxt: 'Por favor selecciona el método de pago que prefieras',
  paycard: 'Pago con tarjeta',
  resumen: 'Resumen de tu compra',
  addcomment: 'Agrega comentarios a tu orden de compra',
  terminos: 'He leído y estoy de acuerdo a los Términos y condiciones',
  confirm: 'Confirmar orden',
  carddetail: 'Detalles de la tarjeta',
  cardnumber: 'Número de la tarjeta',
  carddate: 'Fecha de expiración',
  cardmonth: 'Mes',
  cardyear: 'Año',
  embroidery: 'Editar Bordado',


  //Cuenta
  cuenta: 'Mi cuenta',
  idOrder: 'ID de orden',
  status: 'Estatus',
  dateOrder: 'Fecha de la orden',
  orderinfo: 'Informacion de pedido',
  orderdetail: 'Detalles del pedido',
  description: 'Descripción',








  es: 'ES',
  flag: 'images/mexico.png',
  home: 'Inicio',
  lineas: 'Línea de productos',
  shop: 'Productos',
  quienes: 'Quienes somos',
  infra: 'Infraestructura',
  search: 'Buscar',
  sub1: 'Suscríbete a nuestro boletín de noticias',
  sub2: 'Sé el primero en enterarte de nuestros nuevos productos y mucho más',
  sub3: 'Ingresa tu correo electronico',
  sub4: 'Suscribirse',

  /*EDITAR BORDADO */
  customizeorder: 'Personaliza tu Pedido',

  upward: 'ASCENDENTE',
  falling: 'DESCENDENTE',
  filterDate: 'FECHA',


};

app.config(['$translateProvider', function($translateProvider) {
  // add translation tables
  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('es', translationsES);
  $translateProvider.preferredLanguage('es');
  $translateProvider.fallbackLanguage('en');
  // remember language
  $translateProvider.useLocalStorage();
}]);



app.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
  $ocLazyLoadProvider.config({});
}]);

app.config(['$controllerProvider', function($controllerProvider) {
  $controllerProvider.allowGlobals();

}]);



app.constant('URLS', {
  api: "http://indexceed.com/apicottonrepublic/public/"
});






app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    $urlRouterProvider.otherwise("/");



    $stateProvider
      .state("start", {
        url: "/",
        templateUrl: "views/index.html",
        data: {
          pageTitle: 'Inicio'
        },
        controller: "HomeController",
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'MetronicApp',
              files: [
                'js/controllers/HomeController.js'
              ]
            });
          }]
        }
      })

      .state("quienes", {
        url: "/quienes",
        templateUrl: "views/quienes.html",
        data: {
          pageTitle: '¿Quienes somos?'
        },
        controller: "HomeController",
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'MetronicApp',
              files: [
                'js/controllers/HomeController.js'
              ]
            });
          }]
        }
      })

      .state("politicas", {
        url: "/politicas",
        templateUrl: "views/politicas.html",
        data: {
          pageTitle: 'Políticas de privacidad'
        },
        controller: "HomeController",
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'MetronicApp',
              files: [
                'js/controllers/HomeController.js'
              ]
            });
          }]
        }
      })

      .state("terminos", {
        url: "/terminos",
        templateUrl: "views/terminos.html",
        data: {
          pageTitle: 'Términos y condiciones'
        },
        controller: "HomeController",
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'MetronicApp',
              files: [
                'js/controllers/HomeController.js'
              ]
            });
          }]
        }
      })



      .state("contacto", {
        url: "/contacto",
        templateUrl: "views/contacto.html",
        data: {
          pageTitle: 'Contacto'
        },
        controller: 'ContactoController',
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('js/controllers/ContactoController.js');
          }],

        }

      })

      .state("productos", {
        url: "/productos",
        templateUrl: "views/productos.html",
        data: {
          pageTitle: 'Productos'
        },
        controller: 'ProductosController',
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('js/controllers/ProductosController.js');
          }],

        }

      })

      .state("detalleProducto", {
        url: "/detalleProducto/:id",
        templateUrl: "views/detalleProducto.html",
        data: {
          pageTitle: 'Detalle del producto'
        },
        controller: 'DetalleProductosController',
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('js/controllers/DetalleProductosController.js');

          }],

        }

      })

      .state("carrito", {
        url: "/carrito",
        templateUrl: "views/carrito.html",
        data: {
          pageTitle: 'Carrito de compras'
        },
        controller: 'CarritoController',
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('js/controllers/CarritoController.js');
          }],

        }

      })

      .state("micuenta", {
        url: "/micuenta",
        templateUrl: "views/cuenta.html",
        data: {
          pageTitle: 'Carrito de compras'
        },
        controller: 'CuentaController',
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('js/controllers/CuentaController.js');
          }],

        }

      })

      .state("pagar", {
        url: "/pagar",
        templateUrl: "views/pagar.html",
        data: {
          pageTitle: 'Pagar'
        },
        controller: 'PagarController',
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('js/controllers/PagarController.js');
          }],

        }

      })

      .state("marcas", {
        url: "/marcas/:id",
        templateUrl: "views/productos.html",
        data: {
          pageTitle: 'Marcas'
        },
        controller: 'MarcasController',
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('js/controllers/MarcasController.js');
          }],

        }

      })

      .state("buscar", {
        url: "/buscar/:buscar",
        templateUrl: "views/productos.html",
        controller: 'BusquedaProductosController',
        params: {
          buscar: {
            value: 'camisa'
          },
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('js/controllers/busquedaProductosController.js');
          }],

        }

      })

      .state("idpedido", {
        url: "/pedido/:id",
        templateUrl: "views/detallePedido.html",
        controller: 'DetallePedidoController',
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('js/controllers/CuentaController.js');
          }],

        }

      })

      .state("misdatos", {
        url: "/misdatos",
        templateUrl: "views/misdatos.html",
        controller: 'MisDatosController',
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('js/controllers/CuentaController.js');
          }],

        }

      })

      .state("bordado", {
        url: "/bordado",
        templateUrl: "views/bordado.html",
        controller: 'BordadoController',
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('js/controllers/BordadoController.js');
          }],

        }

      })


      .state("registrarse", {
        url: "/registrarse",
        templateUrl: "views/registro.html",
        data: {
          pageTitle: 'Registro'
        },
        controller: 'RegistroController',
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('js/controllers/RegistroController.js');
          }],
        }
      })



      .state("login", {
        url: "/login",
        templateUrl: "views/login.html",
        data: {
          pageTitle: 'Login'
        },
        controller: 'RegistroController',
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('js/controllers/RegistroController.js');
          }],
        }
      })

      .state("forgot", {
        url: "/forgot",
        templateUrl: "views/forgot.html",
        data: {
          pageTitle: 'Password reset'
        },
        controller: 'RegistroController',
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('js/controllers/RegistroController.js');
          }],
        }
      })

      .state("resetPassword", {
        url: "/resetPassword/:id",
        templateUrl: "views/cambiarPassword.html",
        data: {
          pageTitle: 'Password reset'
        },
        controller: 'RegistroController',
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('js/controllers/RegistroController.js');
          }],
        }
      })




    $locationProvider.html5Mode(true);


    $httpProvider.interceptors.push(['$q', 'localStorageService', '$injector', '$rootScope', function($q, localStorageService, $rootScope) {

      return {
        'request': function(config) {
          config.headers = config.headers || {};
          if (localStorageService.get('token')) {
            config.headers.Authorization = 'Bearer ' + localStorageService.get('token');
          } else {
            //console.log("no token");
          }
          return config;
        },
        'response': function(response) {
          return response;
        },
        'responseError': function(response) {
          response.step = 0;

          if (response.status === 403) {
            localStorageService.remove('token');
            response.step = 0;
            $rootScope.logged = false;
          } else if (response.status === 401) {
            if (response.data.error != undefined) {
              if (response.data.error == "token_expired") {
                localStorageService.remove('token');
                response.step = 0;
                $rootScope.logged = false;
              }

            }
          } else {
            response.step = 0;
          }
          return $q.reject(response);
        }
      };
    }]);

  }
]);


app.run(function($rootScope, localStorageService, $location, $state, $translate, $http, URLS) {

  $rootScope.carrito = [];

  $rootScope.changeLanguage = function(langKey) {
    $translate.use(langKey);
    $rootScope.idiomaSeleccionado = langKey;

    if (langKey == "es") {
      $rootScope.changeMoneda('peso');
    }

    if (langKey == "en") {
      $rootScope.changeMoneda('dolar');
    }


  };

  $rootScope.getLanguage = function() {
    return $translate.use();

  };



  $rootScope.changeMoneda = function(moneda) {
    localStorage.setItem('tipoCambio', moneda);
  };

  $rootScope.getMoneda = function() {
    return localStorage.getItem('tipoCambio');
  };





  $rootScope.$state = $state;


  $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams) {
      //console.log(toState.name);
      if (toState.name == 'login') {
        $rootScope.wall = true;
      } else {
        $rootScope.wall = false;
      }
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    if (!$rootScope.getToken()) {
      //$location.url('/login');
    } else {

    }
  });

  $rootScope.getToken = function() {
    return localStorageService.get('token');
  };

  $rootScope.getRole = function() {
    return localStorageService.get('rol');
  };

  $rootScope.getFromStorage = function(key) {
    return localStorageService.get(key);
  };

  $rootScope.getMarcas = function() {
    return $http({
      method: 'GET',
      url: URLS.api + "marcas",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });

  };

  $rootScope.empresa = function() {
    return $http({
      method: 'GET',
      url: URLS.api + "empresa",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });

  };

  $rootScope.processMarcas = function() {
    $rootScope.getMarcas().then(function(res) {
      $rootScope.marcas = res.data;

    });
  }

  $rootScope.getEmpresa = function() {
    $rootScope.empresa().then(function(res) {
      $rootScope.empresa = res.data;

    });
  }

  $rootScope.processMarcas();
  $rootScope.getEmpresa();

  $rootScope.getToken = function() {
    return localStorageService.get('token');
  };

  $rootScope.getUsuario = function() {
    return localStorageService.get('usuarioIniciado');
  };

  $rootScope.getIDUsuario = function() {
    return localStorageService.get('idUsuario');
  };


  $rootScope.logout = function() {
    localStorageService.clearAll();
    $location.url('/');
    $state.reload();
    console.log('salio');
    console.log($rootScope.getToken());
  }



  $rootScope.agregarAlcarrito = function(item) {
    if (localStorage.getItem("carrito") != null) {
      var objetocarrito = localStorage.getItem('carrito');
      $rootScope.carrito = JSON.parse(objetocarrito);
    } else {
      $rootScope.carrito = [];
    }

    $rootScope.carrito.push(item);
    localStorage.setItem('carrito', JSON.stringify($rootScope.carrito));
  }

  $rootScope.modificaCarrito = function(item) {
    localStorage.setItem('carrito', JSON.stringify(item));
  }

  $rootScope.setBordado = function(item) {
    localStorage.setItem('bordado', JSON.stringify(item));
  }

  $rootScope.getBordado = function() {
    var objetocarrito = localStorage.getItem('bordado');
    var borado = JSON.parse(objetocarrito);
    return borado;
  }




  $rootScope.getItemsCarrito = function() {
    var objetocarrito = localStorage.getItem('carrito');
    var carrito = JSON.parse(objetocarrito);
    return carrito;
  }

  $rootScope.getcarritolocal = function() {
    return $rootScope.getItemsCarrito();
  }


  $rootScope.getTotalItems = function() {
    var objetocarrito = localStorage.getItem('carrito');

    $rootScope.carrito = JSON.parse(objetocarrito);
    var totalitems = 0;
    angular.forEach($rootScope.carrito, function(value, key) {
      totalitems += value.cantidad / 1;
    });
    return totalitems;
  }

  $rootScope.vaciarCarrito = function() {
    localStorage.removeItem('carrito');
  }

  $rootScope.deleteItemCarrito = function(index) {
    var objetocarrito = localStorage.getItem('carrito');
    var carrito = JSON.parse(objetocarrito);
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));

  }

  $rootScope.showcarrito = function() {
    $(".shopping-cart").fadeToggle("fast");
  }
  $rootScope.search = function(buscar) {

    $state.go('buscar', {
      buscar: buscar
    });
  }

  if (localStorage.getItem("tipoCambio") == null) {
    localStorage.setItem('tipoCambio', 'peso');
    console.log(localStorage.getItem("tipoCambio"));
  }

  $rootScope.showmegamenu = function() {
    console.log('ok');
    $('.header-bottom').removeClass('hidden-xs');

    if ($('.megamenu-wrapper').hasClass('so-megamenu-active')) {
      $('.megamenu-wrapper').removeClass('so-megamenu-active');
      $('.header-bottom').addClass('hidden-xs');
    } else {
      $('.megamenu-wrapper').addClass('so-megamenu-active');
    }

  }

  $rootScope.hidemegamenu = function() {
    $('.megamenu-wrapper').removeClass('so-megamenu-active');
  }


});