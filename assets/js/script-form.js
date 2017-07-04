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
    $("#profileImage").on("change", previewFile);

});
function previewFile() {
    // Where you will display your image
    var preview = document.querySelector('#photo-profile');
    // The button where the user chooses the local image to display
    var file = document.querySelector('input[type=file]').files[0];
    // FileReader instance
    var reader  = new FileReader();

    // When the image is loaded we will set it as source of
    // our img tag
    reader.onloadend = function () {
      preview.src = reader.result;
    }

    
    if (file) {
      // Load image as a base64 encoded URI
      reader.readAsDataURL(file);
      console.log(file);
    } else {
      preview.src = "";
    }
  }
