//faz a foto que está dentro do retangulo e o texto sair do display
function myFunction() {
  document.getElementById("foto").style.display = "none";
  }

//criptografar
  var capturaTexto = document.querySelector("#criptografar"); // obtem o botão do html
  capturaTexto.addEventListener("click", function(){ // escuta o click e aplica a função
  	var textoDigitado = obtemTextoDigitado();
  	var paragrafo = criaParagrafo();
  	var adiciona = adicionaAoRetangulo(paragrafo, textoDigitado);
  	var reseta = resetaTexto();
  	

  	
console.log(textoDigitado);
console.log(paragrafo);
console.log(adiciona);

  })

  function obtemTextoDigitado(){
  	caixaTexto = document.getElementById("caixa-teste").value;
  	return caixaTexto;
  }

  function resetaTexto(){
  	var reseta = document.getElementById("caixa-teste").value = ""; 
  	return reseta;
  }

  function criaParagrafo(){
  	var textoP = document.createElement("p"); 
  	return textoP
  }

  function adicionaAoRetangulo(paragrafo, textoDigitado){
  	var adicionaParagrafo = document.querySelector("#retangulo");
  	paragrafo.textContent = textoDigitado;
  	adicionaParagrafo.appendChild(paragrafo);
  	return adicionaParagrafo;
  }
