
$(document).ready(function(){

	var random = Math.floor(Math.random()*900) + 100;
	var randomCod = "LAB-" + random;
	alert("Tu código es: LAB-" + random);
	$("#codigo").append("LAB-" + random);
	
	$(".boton-codigo").on("click", function(e){
	    var valor = $("#codigo-input").val();
	    if(randomCod == valor){
	        localStorage.setItem("codigo", randomCod);
	    }else{
	        alert("No está bueno el código");
	        e.preventDefault();
	    }
	});
	$("#codig").hide();
	$("#codig").append("LAB-" + random);
	$("#hint").on("click", function(){
		$("#codig").show();
	});
});  