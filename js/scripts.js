//faz a foto que está dentro do retangulo e o texto sair do display
function myFunction() {
  document.getElementById("foto").style.display = "none";
  }

//criptografar
  var encriptar = document.querySelector("#criptografar"); // obtem o botão do html
  encriptar.addEventListener("click", function(){ // escuta o click e aplica a função
  	var encriptado = obtemTextoDigitadoECriptografa();
  	var paragrafo = criaParagrafo();
  	var adiciona = adicionaAoRetangulo(paragrafo, encriptado);
  	
  	var reseta = resetaTexto();
  })

  function obtemTextoDigitadoECriptografa(){
  	caixaTexto = document.getElementById("caixa-teste").value;
  	novaCaixa = caixaTexto.replaceAll("a", "ai");
  	novaCaixa2 = novaCaixa.replaceAll("e", "enter");
  	novaCaixa3 = novaCaixa2.replaceAll("o", "ober");
  	novaCaixa4 = novaCaixa3.replaceAll("u", "ufat");
  	return novaCaixa4;
  }

  function resetaTexto(){
  	var reseta = document.getElementById("caixa-teste").value = ""; 
  	return reseta;
  }

  function criaParagrafo(){
  	var textoP = document.createElement("p"); 
  	return textoP
  }

  function adicionaAoRetangulo(paragrafo, encriptado){
  	var adicionaParagrafo = document.querySelector("#retangulo");
  	paragrafo.textContent = encriptado;
  	adicionaParagrafo.appendChild(paragrafo);
  	return adicionaParagrafo;
  }