/* O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

4! = 4 x 3 x 2 x 1 = 24

Com base nessas informações, crie um algoritmo que retorne o fatorial de 10. */

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
 fatorial *= index
}

console.log(fatorial)
