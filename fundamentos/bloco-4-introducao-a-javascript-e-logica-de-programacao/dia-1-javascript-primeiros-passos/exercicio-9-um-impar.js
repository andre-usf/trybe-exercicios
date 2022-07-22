/*
Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if.
*/

const numeroUm = 4;
const numeroDois = 2;
const numeroTres = 8;

if (numeroUm % 2 != 0 || numeroDois % 2 != 0 || numeroTres % 2 != 0){
  console.log("True")
}
else {
  console.log("False")
}
