
/* Esta función guarda el nombre y apellidos del usuario en la base de datos */
$(document).ready(function(){
    $("#submit").on("click", function(){
    	var nombre = $("#name").val();
        localStorage.setItem("name", nombre);
        var musica = $("#music").val();
        localStorage.setItem("music", musica).val();
        var usuario = $("#places").val();
		localStorage.setItem("places", usuario).val();
		var photo = $("#photo-profile").val();
		localStorage.setItem("photo-profile", photo).val();

    });

});


/* Esta función muestra los datos guardados en la base de datos */
$(document).ready(function(){
	// Leemos los valores de las variables del navegador y las ponemos en una variable para posteriormente mostrarlo en el navegador
	var name = localStorage.getItem("name");
	var music = localStorage.getItem("music");
	var places = localStorage.getItem("places");
	var photo = localStorage.getItem("photo-profile");
 
	$("#name").append(name);
	$("#music").append(music);
	$("#places").append(places);
	$("#photo-profile").append(photo);

});

//window.onload=function(){
	// Cada vez que se inicia el navegador, mostramos los datos de la base de datos.
	//mostrarDatos();
 
	// Cuando cargamos la pagina, si las variables tienen valor, lo ponemos en el formulario
	//if(localStorage.getItem("name-user")!=null)
		//document.getElementById("name-user").value=localStorage.getItem("name-user");
	//if(localStorage.getItem("music")!=null)
		//document.getElementById("music").value=localStorage.getItem("music");
	//if(localStorage.getItem("user")!=null)
		//document.getElementById("user").value=localStorage.getItem("user");
	//if(localStorage.getItem("photo-profile")!=null)
		//document.getElementById("photo-profile").value=localStorage.getItem("photo-profile");
//}

