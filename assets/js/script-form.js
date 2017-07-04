$(document).ready(function(){
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
