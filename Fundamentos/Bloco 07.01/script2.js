// 1 - Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Com base nessas informações:
// Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).
// Dentro da função crie uma variável result.
// Crie a lógica para retornar o fatorial de N!.
// Imprima no terminal "Esse é o fatorial resultado da função" (Lembre-se de utilizar template literals nesse momento).
// Dica: Armazene a chamada da função em uma varíavel para imprimir no terminal seu resultado.

const fatorial = (numero) => {
    let result = 1;
    for (let index = 2; index <= numero; index += 1) {
        result *= index;
    } 
    return result;
}

const print = fatorial(4);

console.log(`Esse é o fatorial ${print}`)

// Bonus 1 - tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

const fatorial2 = numero => numero > 1 ? numero * fatorial(numero - 1) : 1;
console.log(fatorial(4));