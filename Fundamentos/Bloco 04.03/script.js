// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.


let fatorial = 1;

for (index = 1; index <= 10; index += 1) {
    fatorial *= index;
}

console.log(fatorial);

// 2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'trybe';
let reverseWord = "";

for (index2 = 0; index2 < word.length; index2 += 1) {
    reverseWord += word[word.length -1 - index2];
}

console.log(reverseWord); 

// 3- Considere o array de strings abaixo:
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = [""];
let menorPalavra = [""];

for (let index3 = 0; index3 < array.length; index3 += 1) {
    if (array[index3].length > maiorPalavra.length) {
        maiorPalavra = array[index3];
    }
}

console.log(maiorPalavra);

for (let index4 = 0; index4 < array.length; index4 += 1) {
    if (array[index4].length < menorPalavra.length) {
      menorPalavra = array[index4];
    }
}

console.log(menorPalavra);

// 4 - Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);