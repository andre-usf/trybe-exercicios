/* Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

const numeroUm = 300;
const numeroDois = 250;
const numeroTres = 500;

if (numeroUm > numeroDois && numeroUm > numeroTres) {
  console.log(numeroUm);
}
else if (numeroDois > numeroUm && numeroTres) {
  console.log(numeroDois);
}
else {
  console.log(numeroTres);
}
