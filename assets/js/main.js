
/* Esta función guarda el nombre y apellidos del usuario en la base de datos */
$(document).ready(function(){
	var name = localStorage.getItem("nombre apellido");
	var music = localStorage.getItem("music");
	var places = localStorage.getItem("place");
	var descrip = localStorage.getItem("description");
	var photo = localStorage.getItem("photo-profile");
 
	$("#name").text(name);
	$("#description").text(descrip);
	$("#music").text(music);
	$("#place").text(places);
	$("#photo-profile").append(photo);

});


