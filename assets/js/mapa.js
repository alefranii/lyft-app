  var center;
  var latitud;
  var longitud;
  var map;
  var ubicacion;

  /*Control del redimensionamiento de la ventana*/
  window.onresize = function(){
    document.getElementById("contenedor_mapa");
  }

  /* Creo el mapa, y lo centro en las coordenadas de la ubicacion del usuario*/
  function initMap(){
    var mapdivMap = document.getElementById("contenedor_mapa");
      mapdivMap.style.width = (window.innerWidth);
      mapdivMap.style.height = (window.innerHeight) + "px";
      
      center = new google.maps.LatLng(-33.41949, -70.642);
      var myOptions = {
      zoom: 7,/*zoom del mapa y otras cosas*/
      center: center,/* Definimos la posición del mapa con el punto */
      zoomControl : false, //esto quita los controladores del zoom que aparecen por defecto en la parte inferior derecha 
      disableDefaultUI: true, //esto deshabilita los controladores de mapa y satellite de la esquina superior izq
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("contenedor_mapa"),myOptions);
    /*solicitud de geolocalización y ver si el navegador la soporta*/

    function findme(){/* Si el navegador tiene geolocalizacion */
      if(navigator.geolocation){
          //alert ("Obteniendo posición...");
          navigator.geolocation.getCurrentPosition(centrarMapa,errorPosicionar);
        }else{
          alert('Oops! Tu navegador no soporta geolocalización');
        }   
      }

      /*alerts en caso de errores*/
      function errorPosicionar(error) {
        /*alert en caso de error*/
        alert("Oops! Algo ha salido mal");
      }  

      /* Esta función se ejecuta si getCurrentPosition tiene éxito. La latitud y la longitud vienen dentro del objeto coords*/
      function centrarMapa(pos){
        latitud = pos.coords.latitude;
        longitud = pos.coords.longitude;      
        ubicacion = new google.maps.Marker({
          position: { lat: latitud, lng: longitud },
          title:"Usted está aquí",
          map: map,
          draggable: true,
          icon: {
            path: google.maps.SymbolPath.CIRCLE, //cambiamos el marcador por defecto por uno de círculo
            scale: 10
          }
        });
        map.setZoom(10);
        //map.setCenter ({ lat: latitud, lng: longitud });
          //setMap : map,
        }

        /* autocompletado de los input origen (userlocation) y destino (ruta)*/
        function initialize(){
          var destination = document.getElementById("destino");
          var autocompletar = new google.maps.places.Autocomplete(destination);      
        }

        google.maps.event.addDomListener(window, 'load', initialize);
        findme();

      };

    //autocompletar.bindTo("bounds", map);
    /*DirectionsService y DirectionsDisplay se desprenden de google, son objetos de google*/
    document.getElementById("pickup").addEventListener("click", function(e) {
      e.preventDefault();
          var ds = new google.maps.DirectionsService();//obtiene las coordenadas
          var dr = new google.maps.DirectionsRenderer();//traduce esas coordenadas a la ruta visible (ruta en azul en el mapa)
          
          rutaVisible(ds, dr); 

        });
          //location??

          function rutaVisible(ds, dr) {
            console.log("prueba");
            ds.route({
              origin: { lat: latitud, lng: longitud },
              destination: document.getElementById("destino").value,
              travelMode: "DRIVING"
            },

            function(response, status) {
              if (status === "OK") {
                dr.setDirections(response);
                dr.setMap(map);
              } else {
                window.alert("Lyft is not available here");
              }
            });
          }

  /*onChangeHandler = Agrega una propiedad de seguimiento a una definición de lenguaje específico de dominio
  dr.setMap(contenedor_mapa);
  var onChangeHandler = function(){
              //Servicio de indicaciones
              rutaVisible(ds, dr);
            }; 

            document.getElementById("pickup").addEventListener("click",onChangeHandler);*/




