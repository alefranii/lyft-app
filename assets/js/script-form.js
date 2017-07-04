$(document).ready(function(){
	
	var music = localStorage.getItem("music");
	var places = localStorage.getItem("place");
	var descrip = localStorage.getItem("description");
	var photo = localStorage.getItem("photo-profile");
	$("#description").val(descrip);
	$("#music").val(music);
	$("#place").val(places);

    $("#submit").on("click", function(){
    	var descrip = $("#description").val();
        localStorage.setItem("description", descrip);
        var musica = $("#music").val();
        localStorage.setItem("music", musica);
        var usuario = $("#place").val();
		localStorage.setItem("place", usuario);
		var photo = $("#photo-profile").val();
		localStorage.setItem("photo-profile", photo);

    });

});
