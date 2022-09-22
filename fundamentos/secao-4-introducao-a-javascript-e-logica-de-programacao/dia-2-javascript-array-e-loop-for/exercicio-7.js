// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [10, 9, 3, 19, 70, 8, 100, 1, 35, 150];
let menorNumero = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menorNumero) {
    menorNumero = numbers[index]
  }
}

console.log(menorNumero);
