/* Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda. */

function maiorPalavraCaracteres(array) {
  let nomeMaior = array[0];
  for (let index in array) {
    if (array[index].length > nomeMaior.length) {
      nomeMaior = array[index]
    }
  }
  return nomeMaior;
}

console.log(maiorPalavraCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
