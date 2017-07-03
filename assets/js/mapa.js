var center;
var latitud;
var longitud;
var map = null;

/*Control del redimensionamiento de la ventana*/
window.onresize = function(){
  document.getElementById("contenedor_mapa").style.height = (window.innerHeight) + "px";
}

/* Creo el mapa, y lo centro en las coordenadas de la ubicacion del usuario*/
function initMap(){
  var mapdivMap = document.getElementById("contenedor_mapa");
  mapdivMap.style.width = (window.innerWidth);
  mapdivMap.style.height = (window.innerHeight) + "px";

  center = new google.maps.LatLng(latitud, longitud);
  var myOptions = {
    zoom: 17,
    zoomControl: false,
    disableDefaultUI: true,/*inhabilita controles del mapa*/
    center: center,/* Definimos la posicion del mapa con el punto */
    mapTypeId: google.maps.MapTypeId.ROADMAP
  } /*zoom del mapa y otras cosas*/
  map = new google.maps.Map(document.getElementById("contenedor_mapa"), myOptions);
  findme();
}

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

    function centrarMapa(pos, z){
      map.setZoom(15);
      map.setCenter(new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude));
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude),
        title:"Usted está aquí",
        icon: {
          path: google.maps.SymbolPath.CIRCLE, //cambiamos el marcador por defecto por uno de círculo
          scale: 10
        },
        draggable: true,
        map: map
      });
    }


/*DirectionsService y DirectionsDisplay se desprenden de google, son objetos de google
        var ds = new google.maps.DirectionsService();//obtiene las coordenadas
        var dr = new google.maps.DirectionsRenderer();//traduce esas coordenadas a la ruta visible (ruta en azul en el mapa)
        //document.getElementById("origen").addEventListener("change", onChangeHandler);
        document.getElementById("destino").addEventListener("change", onChangeHandler);
        
        function rutaVisible (ds, dr) {
          ds.route({
            origin: center,
            destination: document.getElementById("pickup").value,
            travelMode: "DRIVING"
          },
          function(response, status) {
            if (status === "OK") {
              dr.setDirections(response);
            } else {
              window.alert("Ruta "+ status);
            }
          });
        }
        
//onChangeHandler = Agrega una propiedad de seguimiento a una definición de lenguaje específico de dominio
        dr.setMap(contenedor_mapa);
        var onChangeHandler = function(){
            //Servicio de indicaciones
            rutaVisible(ds, dr);
        }; 
        document.getElementById("pickup").addEventListener("click",onChangeHandler);
        */
