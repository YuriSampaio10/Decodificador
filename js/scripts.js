//faz a foto que está dentro do retangulo sair do display
function myFunction() {
  document.getElementById("foto").style.display = "none";

  }

  var capturaTexto = document.querySelector("#criptografar"); // obtem o botão do html
  capturaTexto.addEventListener("click", function(){
  	var textoDigitado = obtemTextoDigitado();
  	alert(textoDigitado);

 
	


  })

  function obtemTextoDigitado(){
  	caixaTexto = document.getElementById("caixa-teste").value;
  	return caixaTexto
  }
