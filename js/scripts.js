var input = document.querySelector("#textoOutput");
caixaTexto = document.getElementById("caixa-teste");

//inicia com o cursor no campo de digitação
caixaTexto.focus();

//esta regex aceita somente letras minúsculas e sem acento, inclusive escritos em múltiplas linhas.
var regex = /^[a-z\s]+$/;

//faz a foto que está dentro do retangulo e o texto sair do display
function myFunction() {
  caixaTexto = document.getElementById("caixa-teste").value;
  if (regex.test(caixaTexto)) {
    document.getElementById("foto").style.display = "none";
}};

//criptografar
var encriptar = document.querySelector("#criptografar"); // obtem o botão do html
encriptar.addEventListener("click", function(){ // escuta o click e aplica a função
    var encriptado = obtemTextoDigitadoECriptografa();
    var adiciona = adicionaAoRetangulo(input, encriptado);
    var reseta = resetaTexto();
    caixaTexto.focus();
    
});

//desencriptografar
var desencriptar = document.querySelector("#desencriptografar");
desencriptar.addEventListener("click", function(){
  var desencriptado = obtemTextoDigitadoEDesencriptografa();
  var adiciona = adicionaAoRetangulo(input, desencriptado);
  var reseta = resetaTexto();
  caixaTexto.focus();
});

//copiar
var copiar = document.querySelector("#copiar");
copiar.addEventListener('click', function(){ 
  navigator.clipboard.writeText(input.value);
  var reseta = resetaTexto();
  alert('Mensagem copiada para a área de transferência.')
  caixaTexto.focus();
});

//funções
function copiaInput() {
  var copiaTexto = document.getElementById("input")
  adicionaValor.textContent = copiaTexto;
  return adicionaValor;
};

function obtemTextoDigitadoECriptografa(){
  caixaTexto = document.getElementById("caixa-teste");
  if (!caixaTexto.value) {
    alert("Digite uma mensagem para ser criptografada.");
    caixaTexto.focus(); 
  }
  else if(!regex.test(caixaTexto.value)){
    alert('Utilize somente letras minúsculas e sem acentos.');
    caixaTexto.focus();
  }
  else{
     mensagem = caixaTexto.value.replaceAll('e', 'enter');
     mensagem = mensagem.replaceAll('i', 'imes');
     mensagem = mensagem.replaceAll('a', 'ai');
     mensagem = mensagem.replaceAll('o', 'ober');
     mensagem = mensagem.replaceAll('u', 'ufat');
     return mensagem;
}};


function adicionaAoRetangulo(input, encriptado){
  var adicionaInput = document.querySelector("#retangulo");
  input.textContent = encriptado;
  adicionaInput.appendChild(input);
  return adicionaInput;
};

function resetaTexto(){
  var reseta = document.getElementById("caixa-teste").value = ""; 
  return reseta;
};

function obtemTextoDigitadoEDesencriptografa(){
  caixaTexto = document.getElementById("caixa-teste");
  if (!caixaTexto.value) {
    alert("Digite uma mensagem para ser descriptografada.");
    caixaTexto.focus();   
  }
  else{
    mensagemSaida = caixaTexto.value.replaceAll('enter', 'e');
    mensagemSaida = mensagemSaida.replaceAll('imes', 'i');
    mensagemSaida = mensagemSaida.replaceAll('ai', 'a');
    mensagemSaida = mensagemSaida.replaceAll('ober', 'o');
    mensagemSaida = mensagemSaida.replaceAll('ufat', 'u');
    return mensagemSaida;
}};
