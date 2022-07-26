/* 
Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2.
*/

function inteiroQueMaisRepete (array) {
let contadorVezesRepete = 0; // Conta quantas vezes o número se repete.
let numMaisSeRepete = 0; // Guarda o número que mais se repete.
let indexNumMaisSeRepete = 0; // Guarda o index do número que mais se repete.

  for (let indexUm in array) {
    
    
    for (let indexDois in array) {
      if (array[indexUm] === array[indexDois]) {
        contadorVezesRepete += 1;
      }
    }
  
  if (contadorVezesRepete > numMaisSeRepete) {
    numMaisSeRepete = contadorVezesRepete
    indexNumMaisSeRepete = indexUm
  }
  
  contadorVezesRepete = 0;
  }
  return array[indexNumMaisSeRepete]
}

console.log(inteiroQueMaisRepete([2, 3, 2, 5, 8, 2, 3]));
