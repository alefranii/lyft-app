var map;   /*inicializo el mapa*/
var latitud;
var longitud;

$(document).ready(function() {
    initMap(); /* cargamos el mapa*/   
});

function initMap() {
    map = new google.maps.LatLng(latitud, longitud); /* Creamos un punto con nuestras coordenadas */
    var myOptions = {
        zoom: 17,
        center: map, /* Definimos la posicion del mapa con el punto */
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }/*zoom del mapa y otras cosas*/

    function findme() {
        if (navigator.geolocation) { /* Si el navegador tiene geolocalizacion */
            navigator.geolocation.getCurrentPosition(found, notFound);
        }else{
            alert('Oops! Tu navegador no soporta geolocalización. Bájate Chrome, que es gratis!');
        }
    }

    window.addEventListener("load", findme); 

    function found(position) {
        latitud = position.coords.latitude; /*Guardamos la latitud*/
        longitud = position.coords.longitude; /*Guardamos la longitud*/
        initMap();
        
    };
        //map.setZoom(17);
       // map.setCenter({lat:latitud, lng:longitud});
   
    function notFound(err) {
    /*alert en caso de error*/
    alert("Oops! Algo ha salido mal");
    }

    /*Esta funcion se ejecuta si la llamada a  navigator.geolocation.getCurrentPosition
    tiene exito. La latitud y la longitud vienen dentro del objeto coords*/
    function centrarMapa(pos, z){
        map.setZoom(16);
        map.setCenter(new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude));
        var miUbicacion = new google.maps.Marker({/*Creamos un marcador*/
            position: new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude),
            animation: google.maps.Animation.DROP,
            map: map, /* Lo vinculamos a nuestro mapa */
            title:"Dónde estoy?"
        });

    }
}