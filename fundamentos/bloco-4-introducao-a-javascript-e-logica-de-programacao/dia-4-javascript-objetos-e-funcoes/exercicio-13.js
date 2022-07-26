/* 
Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2.
*/

function inteiroMaisRepete (array) {
let contadorIfNumeroIgual = 0; // Conta quantas vezes o número do index 1 é igual ao do index 2.

  for (let indexUm in array) {
    
    
    for (let indexDois in array) {
      
      
      if (array[indexUm] === array[indexDois]) {
        contadorIfNumeroIgual += 1;
        
      }

    }

    

  }

}

console.log(inteiroMaisRepete([2, 3, 2, 5, 8, 2, 3]));
