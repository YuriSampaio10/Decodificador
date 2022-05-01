//faz a foto que está dentro do retangulo e o texto sair do display
function myFunction() {
  document.getElementById("foto").style.display = "none";
  }

//criptografar
  var capturaTexto = document.querySelector("#criptografar"); // obtem o botão do html
  capturaTexto.addEventListener("click", function(){ // escuta o click e aplica a função
  	var textoDigitado = obtemTextoDigitado();
  	console.log(textoDigitado);
  	var reseta = resetaTexto();
  	


  })

  function obtemTextoDigitado(){
  	caixaTexto = document.getElementById("caixa-teste").value;
  	return caixaTexto;
  }

  function resetaTexto(){
  	var reseta = document.getElementById("caixa-teste").value = "";
  	return reseta;
  }
