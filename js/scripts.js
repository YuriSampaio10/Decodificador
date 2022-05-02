var input = document.querySelector("#textoOutput");

//faz a foto que está dentro do retangulo e o texto sair do display
function myFunction() {
  document.getElementById("foto").style.display = "none";
}

//criptografar
var encriptar = document.querySelector("#criptografar"); // obtem o botão do html
encriptar.addEventListener("click", function(){ // escuta o click e aplica a função
  var encriptado = obtemTextoDigitadoECriptografa();
  var adiciona = adicionaAoRetangulo(input, encriptado);
  var reseta = resetaTexto();
})

//desencriptografar
var desencriptar = document.querySelector("#desencriptografar");
desencriptar.addEventListener("click", function(){
  var desencriptado = obtemTextoDigitadoEDesencriptografa();
  var adiciona = adicionaAoRetangulo(input, desencriptado);
  var reseta = resetaTexto();
})



function copiaInput() {
  var copiaTexto = document.getElementById("input")
  adicionaValor.textContent = copiaTexto;
  return adicionaValor;
}

function obtemTextoDigitadoECriptografa(){
  caixaTexto = document.getElementById("caixa-teste").value;
  novaCaixa = caixaTexto.replaceAll("a", "ai");
  novaCaixa2 = novaCaixa.replaceAll("e", "enter");
  novaCaixa3 = novaCaixa2.replaceAll("o", "ober");
  novaCaixa4 = novaCaixa3.replaceAll("u", "ufat");
  return novaCaixa4;
}


function adicionaAoRetangulo(input, encriptado){
  var adicionaInput = document.querySelector("#retangulo");
  input.textContent = encriptado;
  adicionaInput.appendChild(input);
  return adicionaInput;
}

function resetaTexto(){
  var reseta = document.getElementById("caixa-teste").value = ""; 
  return reseta;
}

function obtemTextoDigitadoEDesencriptografa(){
  caixaTexto = document.getElementById("caixa-teste").value;
  novaCaixa = caixaTexto.replaceAll("ai", "a");
  novaCaixa2 = novaCaixa.replaceAll("enter", "e");
  novaCaixa3 = novaCaixa2.replaceAll("ober", "o");
  novaCaixa4 = novaCaixa3.replaceAll("ufat", "u");
  return novaCaixa4;
}