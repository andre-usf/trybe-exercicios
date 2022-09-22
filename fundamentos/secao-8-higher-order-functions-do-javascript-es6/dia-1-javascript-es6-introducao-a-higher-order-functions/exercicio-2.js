/* Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */


// Retorna o resultado de um sorteio
// Gera número aleatório 1 a 5
// Recebe de parâmetros o número apostado e uma função que checa se o número sorteado é igual o apostado.
// Retorno deve ser uma string

const resultadoSorteio = (numeroApostado, checaNumeros) => {
  const numeroSorteado = Math.floor(Math.random() * (6 - 0) + 0);
  return checaNumeros(numeroApostado, numeroSorteado) ? 'Parabéns você ganhou' : "Tenta novamente";
  };


// Função que checa se o número sorteado é igual o apostado

const checaNumeros = (numeroApostado, numeroSorteado) => numeroApostado === numeroSorteado;

console.log(resultadoSorteio(3, checaNumeros));