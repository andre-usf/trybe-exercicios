window.onload = preventEnviar(), apagarCampos(), habilitaEnviar();

function preventEnviar () {
  const botao = document.querySelector('#botao-enviar');
  botao.addEventListener('click', (event) => {
    event.preventDefault();
    
    const validacao = validaCampos();
      if (validacao === false) {
        alert('Dados inválidos!')
      } else {
        alert('Dados enviados!')
      }
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

  const nome = document.getElementById('nome-usuario').value.length;
  const nomeInvalido = nome < 10 || nome > 40;

  const email = document.getElementById('email-usuario').value.length;
  const emailInvalido = email < 10 || email > 50;

  const porque = document.getElementById('porque').value.length;
  const porqueInvalido = porque > 500;

  if (nomeInvalido || emailInvalido || porqueInvalido) {
    return false;
  } else {
    return true;
  }

};
