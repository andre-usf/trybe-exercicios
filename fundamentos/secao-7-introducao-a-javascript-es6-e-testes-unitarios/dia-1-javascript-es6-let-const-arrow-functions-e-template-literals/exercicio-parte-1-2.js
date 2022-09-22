/* Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;

Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números. */

const array = [13, 3, 4, 10, 7, 2];

const ordenaArray = () => {

  for (let index = 1; index < array.length; index += 1) {
    for (let indexDois = 0; indexDois < array.length; indexDois += 1) {
      if (array[index] < array[indexDois]) {
        let comparador = array[index];
        array[index] = array[indexDois];
        array[indexDois] = comparador;
      }
    }
  }
  return array;
};

console.log(`Os números ${ordenaArray()} se encontram ordenados de forma crescente!`);

// BÔNUS

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {

  const compareFn = (a, b) => a - b;
  return oddsAndEvens.sort(compareFn);

};

console.log(`Os números ${sortOddsAndEvens()} se encontram ordenados de forma crescente!`);
