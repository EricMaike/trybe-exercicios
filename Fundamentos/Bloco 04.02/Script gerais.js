let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    // soma += numbers[index]
    console.log(soma += numbers[index]);
}

let media = soma / numbers.length

console.log(media)

if (media > 20) {
    console.log("valor maior que 20");
}
else {
    console.log("valor menor ou igual a 20")
}

let maiorValor = numbers[0];

for (let index2 = 1; index2 < numbers.length; index2 += 1) {
    if (numbers[index2] > maiorValor) {
        maiorValor = numbers[index2];
    }
}

console.log(maiorValor);

let valoresImpares = 0;

for (index3 = 0; index3 < numbers.length; index3 += 1) {
    if (numbers[index3] % 2 !== 0) {
        valoresImpares += 1;
    }
    else if (valoresImpares === 0) {
        console.log("nenhum valor ímpar encontrado");
    }
}

console.log(valoresImpares);

let menorValor = numbers[5];

for (let index4 = 1; index4 < numbers.length; index4 += 1) {
    if (numbers[index4] < menorValor) {
        menorValor = numbers[index4];
    }
}

console.log(menorValor);

let vinteCinco = [];

for (let index5 = 1; index5 <= 25; index5 += 1) {
    vinteCinco.push(index5);
}

console.log(vinteCinco);


for (let index6 = 0; index6 < vinteCinco.length; index6 += 1) {
    console.log(vinteCinco[index6] / 2);
}

