window.onload = preventEnviar(), apagarCampos(), habilitaEnviar();

function preventEnviar () {
  const botao = document.querySelector('#botao-enviar');
  botao.addEventListener('click', (event) => {
    event.preventDefault();
  });
};

function apagarCampos() {
  const botaoApagar = document.querySelector('#botao-apagar');
  
  botaoApagar.addEventListener('click', () => {
    const inputs = document.querySelectorAll('input');
    const areaTexto = document.querySelector('#porque');
    
    for (let index = 0; index < inputs.length; index += 1) {
      inputs[index].value = '';
    }

    areaTexto.value = '';

  })
};

function habilitaEnviar () {
  const botaoEnviar = document.querySelector('#botao-enviar');
  const concordancia = document.querySelector('#concordo');

  concordancia.addEventListener('change', () => {
      botaoEnviar.disabled = !concordancia.checked;

  });
}

function validaCampos() {



};