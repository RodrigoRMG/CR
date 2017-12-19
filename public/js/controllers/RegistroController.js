var myapp=angular.module('myApp', ['validation','LocalStorageModule']);

myapp.config(['$validationProvider', function ($validationProvider) {
    var expression = {
        required: function(value) {
          return !!value;
        },
        url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
        email: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
        number: /^\d+$/,
        minlength: function(value, scope, element, attrs, param) {
          return value && value.length >= param;
        },
        maxlength: function(value, scope, element, attrs, param) {
          return !value || value.length <= param;
        },
        compass: function(value, scope, element, attrs, param) {
            return !value || value == param;
        }
      };

      var defaultMsg = {
        required: {
          error: 'Este campo es requerido',
          success: ''
        },
        url: {
          error: 'This should be Url',
          success: ''
        },
        email: {
          error: 'Debes ingresar un email valido',
          success: ''
        },
        number: {
          error: 'Debes ingresar solo numeros',
          success: ''
        },
        minlength: {
          error: 'Este campo debe tener mas caracteres',
          success: ''
        },
        maxlength: {
          error: 'Este campo debe tener menos caracteres',
          success: ''
        },
        compass: {
          error: 'Las contrasenas deben coincidir',
          success: ''
        }
      };
      $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);


}]);


myapp.controller('RegistroController', ['$rootScope','$stateParams', '$scope','Registro','URLS','Otros','$window', '$injector','localStorageService','$location', function($rootScope, $stateParams,$scope,Registro,URLS,Otros,$window, $injector,localStorageService,$location) {
 $scope.urlapi=URLS.api;
 console.log($scope.urlapi);
 $scope.tituloPagina="Iniciar sesion";
 $scope.item={num_int:'',referencia:''};
 $scope.item.pais="MEX";
 console.log($scope.item);

 $scope.item.tipo='1';

 $scope.listaColonias=[];

 $scope.errores="";

 $scope.validationOptions = {
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 6
        }
    }
}
 

 $scope.formularios=function()
 {
    var ModTab = document.querySelectorAll(".buttons > a"),
    rgLink = document.querySelector("span + a"),
    showModal = document.getElementsByClassName("session"),
    Modal = document.querySelector(".modalogin"),
    submitbtn = document.querySelectorAll(".ui_submitbtn");
    

 function ShowfunctionDawud(e) {
     e.preventDefault();
     
     /*Función que se ejecuta al terminar la transicion*/
     function myEndFunction(e) {
         var thisDiv = this.parentNode,
         formheight = this.parentNode.parentNode;	 			

         /* Comprueba si contiene la clase active el elemento div inicio de sesión el cual si no muestra el sesión rápida*/
         if(this.classList.contains('active')){
            

             //Oculta el modulo de inicio de sesión y muestra el sesion rápido
             this.classList.remove('active');					
             this.classList.add('hide');
            thisDiv = thisDiv.children[2];	
            thisDiv.classList.remove('hide');
            formheight.style.minHeight="361px";            // establece el ancho del elemento form 
                            
            setTimeout( () => { thisDiv.classList.add('visible','active'); },200); 
         
         } else {
            

             //Oculta el modulo de sesión rápida y muestra el inicio de sesión
             this.classList.remove('active');
            this.classList.add('hide');
             thisDiv = thisDiv.children[0];
             thisDiv.classList.remove('hide');	 			
             formheight.style.minHeight="261px"; 				// Establece el ancho del elemento form
             // formheight.style.backgroundColor="yellow";		// Solo para definir que fue seleccionado
             
             setTimeout(() => { thisDiv.classList.add('visible',"active");	},200);
            
         }// Endelse 

         /*Eliminamos el eventos para no generar conflictos del transition*/
         this.removeEventListener("transitionend", myEndFunction  ); 
        this.removeEventListener("webkitTransitionEnd", myEndFunction);	
    }// End fuction myEndFunction
    
    var tabform = this.parentNode.parentNode.children[1];

     if(this.getAttribute( "data-sesion" ) === "2"  || this.dataset.sesion === "2"){
         
         tabform = tabform.children[0]; 				// Se define a la variable el primer hijo[0] de la clase formContent
                      
         //Evita el llamado del evento comprobando si contiene la clase
         if(tabform.classList.contains('active')){
            
            $('#titulo').html("Registrarse");
            $('#boton2').toggleClass("bottonactivo");
            $('#boton1').toggleClass("bottonactivo");
             tabform.classList.remove('visible');
            tabform.addEventListener("transitionend", myEndFunction  );	// Función transition. Espera que termine el objeto en transition 
             tabform.addEventListener("webkitTransitionEnd", myEndFunction);	// para ejecutar la función continua;
        } else {
           

                 /*En caso contrario de no contener la clase se asigna la nueva ruta a la variable tabform  y se comprueba si existe la clase active */

                 tabform = tabform.parentNode.children[2];

                 if(!tabform.classList.contains("active")){
                     // alert("Sesion rápida "+tabform.getAttribute("class"));

                     tabform = tabform.previousElementSibling; 						// Definimos la variable estableciendo el anterior elemnto hermano
                     tabform.classList.remove('visible',"active");

                     var formheight = tabform.parentNode.parentNode;	  		  		// Retorna al elemento form

                     setTimeout(function() {											//Esperamo que termine la transition .3s = 300	

                         tabform.classList.add('hide');  							// oculta el tabIndex 1
                        formheight.style.minHeight="261px"; 						// Establece el ancho al elemento form	 			
                        tabform.parentNode.children[2].classList.remove('hide');	// Remueve la clase del segundo elemento de la clase formContent

                        setTimeout(function() {
                            tabform.parentNode.children[2].classList.add('visible','active');  	
                        },200);	// se espera un 200ms, posteriormente se agrega las clases 
                    },300); 
                }

             }//end else
     }else{
         

         tabform = tabform.lastElementChild;   		// Selecciona el ultimo hijo
         // tabform = tabform.children[2];			// Realiza igual a la línea anterior solo que definiendo el hijo
         
         
         // Evita el llamado del evento comprobando si conttiene la clase
         if(tabform.classList.contains('active')){ 
            $('#titulo').html("Iniciar sesion");
            $('#boton1').toggleClass("bottonactivo");
            $('#boton2').toggleClass("bottonactivo");

             tabform.classList.remove('visible',"active");
             tabform.addEventListener("transitionend", myEndFunction);
             tabform.addEventListener("webkitTransitionEnd", myEndFunction); }
             
             else{
                 /*En caso contrario de no contener la clase se asigna la nueva ruta a la variable tabform  y se comprueba
                 si existe la clase active */
                 tabform = tabform.parentNode.children[0];
                 if(!tabform.classList.contains("active")){
                     // alert("Inicio por correo "+tabform.getAttribute("class"));

                     tabform = tabform.nextElementSibling; 							// Definimos la variable estableciendo el siguiente elemnto hermano
                     tabform.classList.remove('visible',"active");

                     var formheight = tabform.parentNode.parentNode;	  		  		// Retorna al elemento form

                     setTimeout(function() {											//Esperamo que termine la transition .3s = 300	

                         tabform.classList.add('hide');  							// oculta el tabIndex 1
                        // formheight.style.backgroundColor="green";					// Para observar el cambio efectivo
                        formheight.style.minHeight="261px"; 						// Establece el ancho al elemento form	 			
                        tabform.parentNode.children[0].classList.remove('hide');	// Remueve la clase del segundo elemento de la clase formContent

                        setTimeout(function() {
                            tabform.parentNode.children[0].classList.add('visible','active');  	
                        },200);	// se espera un 200ms, posteriormente se agrega las clases 
                    },300); 
                 }
             } 				
     }// Endelse_main 		
 }//end ShowfunctionDawud


 function ShowfunctionDawud02(e) {

     if(e.target.dataset.login === "registrarse"){
         $scope.tituloPagina="Registrarse";
         
         tabform = e.target.parentNode.parentNode.children[1].children[1].children.item(0); // seleccionamos el primer hijo de la clase formContent
         var formheight = tabform.parentNode.parentNode;	  		  					// Retorna al elemento form
         tabform.classList.remove('visible','active'); 								// Remueve las clases para el elemento 1
         tabform.parentNode.lastElementChild.classList.remove('visible','active'); 	// Remueve las clases para el elemento 3

        setTimeout(function (argument) {								//Esperamo que termine la transition .3s = 300

             tabform.classList.add('hide');  							// oculta el tabIndex 1
             tabform.parentNode.lastElementChild.classList.add("hide");	// oculta el tabIndex 3
            formheight.style.minHeight="360px"; 						// Establece el ancho al elemento form	 			
            tabform.nextElementSibling.classList.remove('hide');	 	//Remueve la clase del segundo elemento de la clase formContent

            setTimeout(function() {
                tabform.nextElementSibling.classList.add('visible','active');  	
            },200);	// se espera un 200ms, posteriormente se agrega las clases 
        },300); 

     }//end if 		
 }



 for (var i = 0; i < ModTab.length; i++) {
     ModTab[i].addEventListener("click", ShowfunctionDawud);
 }

 for (var i = 0; i < showModal.length; i++) {
     showModal[i].addEventListener("click", ShowModalDAwud);
 }
 

 }
 var $validationProvider = $injector.get('$validation');
 $scope.form3 = {
    checkValid: $validationProvider.checkValid,
    submit: function(form) {
      $validationProvider.validate(form)
        .success(function(){
            $scope.registro($scope.item);
        })
        .error($scope.error);
    },
    reset: function(form) {
      $validationProvider.reset(form);
    }
  };

 $scope.registro = function(item){
        $scope.isDisabled=true;
        console.log(item);
        if(item){
            Registro.add(item).then(function(res){
                $scope.emaillogin=item.email;
                $scope.passwordlogin=item.password;
                $scope.iniciarsesion();
            },function (err){
                $scope.errores=err.data;
                $scope.errormsg=err.data.msg;
                console.log($scope.errores);
                $scope.isDisabled=false;
                $window.scrollTo(0, 0);
            });
        }else{
            console.log("Item Vacio");
        }
    
    
 };

 $scope.getdatospostal=function()
 {
     if($scope.item.pais=="MEX" && $scope.item.cp.length==5)
        {
            Otros.getCodigoPostal($scope.item.cp).then(function(res){
               $scope.item.estado=res.data.estado;
               $scope.item.ciudad=res.data.municipio;
               $scope.listaColonias=res.data.colonias;
               $scope.item.colonia=res.data.colonias[0];
               console.log(res);

            },function (err){
                console.log(err);
            });


        }else{

        }
 }

 $scope.iniciarsesion = function(){
    $scope.errorLogin=null;    
        Registro.login($scope.emaillogin,$scope.passwordlogin).then(function (res) {
            $rootScope.user = res.data;
            console.log(res);
                
            localStorageService.set('token',res.data.token);
            localStorageService.set('usuarioIniciado',JSON.stringify(res.data.usuario));
            localStorageService.set('idUsuario',res.data.usuario.id);
            console.log(res.data.usuario.id);

            console.log(res.data.token);
            $location.url('/');

            },function (err) {
                $scope.errorLogin='Usuario o contraseña incorrecta';
            });
                            
        };


        $scope.enviarforgot=function()
        {
            Registro.forgot($scope.emailforgot).then(function (res) {
                $scope.forgotenviado=true;
            },function (err) {
                $scope.forgoterror=true;
            });
        }

        $scope.cambiarPassword=function(pass,repeat)
        {
            $scope.nocoincide=false;
            console.log(pass);
            if(pass==repeat)
            {
                Registro.changePassword($stateParams.id).then(function (res) {
                    
                                    $location.url('/');
                                    
                                },function (err) {
                                    $scope.cambioError=true;
                                });
            }else{
                $scope.nocoincide=true;
            }

            
        }
        



 $scope.formularios();

}]);