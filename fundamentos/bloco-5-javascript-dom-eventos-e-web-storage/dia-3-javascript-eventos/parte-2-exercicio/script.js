function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

/* 
Exercício 1:

1. Crie um calendário dinamicamente.

O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.

2. A tag <ul> deve conter o id 'days';

3. Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>

4. Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>

5. Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li> */


let diasDeDezembro = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let diasLista = document.getElementById('days');

function criaOsDiasdoMes () {

  for (let index = 0; index < diasDeDezembro.length; index += 1) {
    const dias = document.createElement('li');
    dias.innerHTML = diasDeDezembro[index];

    if (diasDeDezembro[index] == 24 || diasDeDezembro[index] == 31) {
      dias.className = 'day holiday';
      diasLista.appendChild(dias);
    } else if (diasDeDezembro[index] == 25) {
      dias.className = 'day friday holiday';
      diasLista.appendChild(dias);
    } else if (diasDeDezembro[index] == 4 || diasDeDezembro[index] == 11 || diasDeDezembro[index] == 18) {
      dias.className = 'day friday';
      diasLista.appendChild(dias);
    } else {
      dias.className = 'day';
      diasLista.appendChild(dias);
    }
  }
}

criaOsDiasdoMes();

/* Exercício 2:
Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
Sua função deve receber um parâmetro com a string 'Feriados'
Adicione a este botão a ID "btn-holiday"
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" */

function criaBotaoFeriados (string) { 
  const divPai = document.getElementsByClassName('buttons-container')[0];
  const botao = document.createElement('button');
  botao.id = 'btn-holiday';
  botao.innerHTML = string;
  divPai.appendChild(botao);
}

criaBotaoFeriados('Feriados');

/* Exercício 3:
Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)". */

const feriados = document.getElementsByClassName('holiday');
const acessaBotaoFeriados = document.getElementById('btn-holiday');
const novaCorFeriados = 'rgb(82, 182, 154)';
const corPadraoFeriados = 'rgb(238,238,238)';

function alteraCorFeriados () {

  for (let index = 0; index < feriados.length; index += 1) {
    
    if (feriados[index].style.backgroundColor === novaCorFeriados) {
      feriados[index].style.backgroundColor = corPadraoFeriados;
    } else {
      feriados[index].style.backgroundColor = novaCorFeriados;
    }
    
  }
}

acessaBotaoFeriados.addEventListener('click', alteraCorFeriados);

/* Exercício 4:
Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
Adicione a esse botão o ID "btn-friday";
Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".
 */

function criaBotaoSexta (string) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const botaoSexta = document.createElement('button')
  botaoSexta.id = 'btn-friday';
  botaoSexta.innerHTML = string
  buttonsContainer.appendChild(botaoSexta);
}

criaBotaoSexta('Sexta-feira');

/* Exercício 5:
Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias. */

const sextasFeiras = document.getElementsByClassName('friday');
const acessaBotaoSexta = document.querySelector('#btn-friday');
const sextasPadrao = [4, 11, 18, 25];
const sextou = 'SEXTOU!';

function modificaTextoSexta() {

  for (let index = 0; index < sextasFeiras.length; index += 1) {
    if (sextasFeiras[index].innerHTML === sextou) {
      sextasFeiras[index].innerHTML = sextasPadrao[index];
    } else {
      sextasFeiras[index].innerHTML = sextou;
    }
  }
}

acessaBotaoSexta.addEventListener('click', modificaTextoSexta);

/* Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original. */

