/* Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 

Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.*/

const anguloUm = -10;
const anguloDois = 100;
const anguloTres = 30;

const somaAngulos = anguloUm + anguloDois + anguloTres;

if (anguloUm > 0 && anguloDois > 0 && anguloTres > 0){
  if (somaAngulos === 180) {
    console.log("Positive")
  }
  else {
    console.log("False")
  }
}
else {
  console.log("Os ângulos devem possuir valores positivos.")
}
