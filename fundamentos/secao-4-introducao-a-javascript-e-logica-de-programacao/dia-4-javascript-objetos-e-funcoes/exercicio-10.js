/* Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4. */

function maiorValor (array) {
  let maior = 0;
  for (let index in array) {
    if (array[index] > maior) {
      maior = index
    }
  }
  return maior
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]));
