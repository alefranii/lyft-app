
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



$(document).ready(function(){
	
	var name = localStorage.getItem("name");
	var music = localStorage.getItem("music");
	var places = localStorage.getItem("places");
	var photo = localStorage.getItem("photo-profile");
 
	$("#name").append(name);
	$("#music").append(music);
	$("#places").append(places);
	$("#photo-profile").append(photo);

});



