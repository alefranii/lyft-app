//solo deja que escriba letras en el input
$(document).ready(function(){

$(document).on('keypress', '#datos-nombre', function (event) {
    var regex = new RegExp("^[a-zA-Z ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//solo acepta letras numeros @ y .
$(document).on('keypress', '#datos-email', function (event) {
    var regex = new RegExp("^[a-z0-9@.]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#malo1").hide();
$("#malo2").hide();
$("#malo3").hide();
$(".boton-datos").on("click", function(e){
    var nombre = $("#datos-nombre").val();
    var email = $("#datos-email").val();
    if(nombre == ""){
        $("#malo1").show();
    }else{
        $("#malo1").hide();
    }
    if(email.indexOf('@') == -1){
        $("#malo2").show();
    }else{
        $("#malo2").hide();
    }
    
    if($("#check-datos").prop('checked') == false){
        $("#malo3").show();
    }else{
        $("#malo3").hide();
    }

    if(nombre != "" && email.indexOf('@') != -1 && $('#check-datos').is(':checked')){
        alert("verdad");
        localStorage.setItem("nombre apellido", nombre);
        localStorage.setItem("email", email);
    }else{
        e.preventDefault();
    }
});
});