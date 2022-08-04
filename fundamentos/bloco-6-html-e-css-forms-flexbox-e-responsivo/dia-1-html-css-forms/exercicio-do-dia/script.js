function preventEnviar(event) {
  event.preventDefault();
}

window.onload = function() {
  const botao = document.querySelector('#botao-enviar');
  botao.addEventListener('click', preventEnviar);
}
