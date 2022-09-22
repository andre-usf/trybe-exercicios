// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavraMaior = array[0];
let palavraMenor = array[0]

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length > palavraMaior.length) {
    palavraMaior = array[index]
  }
  if (array[index].length < palavraMenor.length) {
    palavraMenor = array[index]
  }
}

console.log(palavraMaior);
console.log(palavraMenor);
