// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindromo (palavra) {
  let ehPalindromo = false;
  if (palavra === palavra.split('').reverse().join('')) {
    ehPalindromo = true
  }
  return ehPalindromo
}

console.log(verificaPalindromo('arara'))
