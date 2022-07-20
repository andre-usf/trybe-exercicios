/*

Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)

*/

const pecaXadrez = 'rei';

switch (pecaXadrez.toUpperCase()) {
  case 'REI':
    console.log('Rei: Anda uma casa para qualquer direção.');
    break;
  case 'BISPO':
    console.log('Bispo: Anda na diagonal.');
    break;
  case 'RAINHA':
    console.log('Rainha: Anda em qualquer direção.');
    break;
  case 'CAVALO':
    console.log('Cavalo: Anda em "L" e pode pular sobre as peças.');
    break;
  case 'TORRE':
    console.log('Torre: Anda na horizontal e  navertical.');
    break;
  case 'PEÃO':
    console.log("Peão: Anda apenas uma casa para frente, mas no primeiro movimento  da peça na partida pode andar duas casas.");
    break;
  default:
    console.log('Erro! Você não escolheu uma peça válida.');
    break;
};
