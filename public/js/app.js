var app = angular.module('myApp', ['ngCookies','pascalprecht.translate','angularUtils.directives.dirDisqus']);

var translationsEN = {
  register: 'register',
  myaccount: 'my account!',
  cart: 'cart',
  sigin: 'sig in',
  items: 'items',
  spanish:'Spanish',
  english:'English',
  es:'EN',
  home:'Home',
  lineas:'Product line',
  shop:'Shop',
  contact:'Contact',
  quienes:'About us',
  infra:'Infrastructure',
  search:'Search',
  sub1:'SUBSCRIBE to our newsletters',
  sub2:'Be the First to know about our Fresh Arrivals and much more!',
  sub3:'Enter your Email id',
  sub4:'Subscribe',
  texttech:'Textile technology',
  texttechtext:'descripcion de tecnologías en inglés'
};
 
var translationsES= {
  register: 'registrarse',
  myaccount: 'mi cuenta',
  cart: 'carrito',
  sigin: 'entar',
  items: '',
  spanish:'Español',
  english:'Inglés',
  es:'ES',
  home:'Inicio',
  lineas:'Linea de productos',
  shop:'Productos',
  contact:'Contacto',
  quienes:'Quienes somos',
  infra:'Infraestructura',
  search:'Buscar',
  sub1:'Suscríbete a nuestro boletín de noticias',
  sub2:'Sé el primero en enterarte de nuestros nuevos productos y mucho más',
  sub3:'Ingresa tu correo electronico',
  sub4:'Suscribirse',
  texttech:'tecnología textil',
  texttechtext:'descripcion de tecnologías en español'
};
 
app.config(['$translateProvider', function ($translateProvider) {
  // add translation tables
  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('es', translationsES);
  $translateProvider.preferredLanguage('es');
  $translateProvider.fallbackLanguage('en');
  // remember language
  $translateProvider.useLocalStorage();
}]);
 
app.controller('inicio', ['$translate', '$scope', function ($translate, $scope) {
 
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
}]);