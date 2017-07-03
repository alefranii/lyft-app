
$(document).ready(function(){
	$('.next-number').attr('disabled', 'disabled');
	$('.next-number').addClass('disabled');
	
//comienza on Chile selecionado, y según el cambio a otro pais se pone el código que corresponda
$('select[name=selValue]').val(56);
$('.selectpicker').selectpicker('refresh');
console.log($(".selectpicker").val());
var valor = $(".selectpicker").val();
$(".paises").val("+" + valor);

$(".selectpicker").on("change", function(){
	var valor = $(".selectpicker").val();
	$(".paises").val("+" + valor);
	$('.selectpicker').selectpicker('refresh');
	$(".number").val("");
});

//Numero máximo para Argentina
$('.number').on("focus", function(){
	if($('.paises').val() == "+54"){
		$('.number').unbind('keyup change input paste').bind('keyup change input paste',function(e){
		    var $this = $(this);
		    var val = $this.val();
		    var valLength = val.length;
		    var maxCount = 6;
		    if(valLength>maxCount){
		        $this.val($this.val().substring(0,maxCount));
		        $('.next-number').removeAttr('disabled');
		        $('.next-number').removeClass('disabled');
		        $(".next-number").focus();
		    }
		});
	}
});
//Numero máximo para Brasil
$('.number').on("focus", function(){
	if($('.paises').val() == "+55"){
		$('.number').unbind('keyup change input paste').bind('keyup change input paste',function(e){
		    var $this = $(this);
		    var val = $this.val();
		    var valLength = val.length;
		    var maxCount = 7;
		    if(valLength>maxCount){
		        $this.val($this.val().substring(0,maxCount));
		        $('.next-number').removeAttr('disabled');
		        $('.next-number').removeClass('disabled');
		        $(".next-number").focus();
		    }
		});
	}
});
//Numero máximo para Chile
$('.number').on("focus", function(){
	if($('.paises').val() == "+56"){
		$('.number').unbind('keyup change input paste').bind('keyup change input paste',function(e){
		    var $this = $(this);
		    var val = $this.val();
		    var valLength = val.length;
		    var maxCount = 9;
		    if(valLength>maxCount){
		        $this.val($this.val().substring(0,maxCount));
		        $('.next-number').removeAttr('disabled');
		        $('.next-number').removeClass('disabled');
		        $(".next-number").focus();
		    }
		});
	}
});
//Numero máximo para México
$('.number').on("focus", function(){
	if($('.paises').val() == "+52"){
		$('.number').unbind('keyup change input paste').bind('keyup change input paste',function(e){
		    var $this = $(this);
		    var val = $this.val();
		    var valLength = val.length;
		    var maxCount = 10;
		    if(valLength>maxCount){
		        $this.val($this.val().substring(0,maxCount));
		        $('.next-number').removeAttr('disabled');
		        $('.next-number').removeClass('disabled');
		        $(".next-number").focus();
		    }
		});
	}
});
//Numero máximo para Perú
$('.number').on("focus", function(){
	if($('.paises').val() == "+51"){
		$('.number').unbind('keyup change input paste').bind('keyup change input paste',function(e){
		    var $this = $(this);
		    var val = $this.val();
		    var valLength = val.length;
		    var maxCount = 8;
		    var tel;
		    if(valLength>maxCount){
		        $this.val($this.val().substring(0,maxCount));
		        $('.next-number').removeAttr('disabled');
		        $('.next-number').removeClass('disabled');
		        $(".next-number").focus();
		    }
		});
	}
});

//Botón Next guarda el numero de telefono en localstorage
$(".next-number").on("click", function(e){
	var tele = $('.paises').val() + $('.number').val();
	localStorage.setItem("telefono", tele);
});



});

