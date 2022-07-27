function palindromo(reviver) {
    for (let index in reviver) {
        if (reviver[index] == reviver[(reviver.length - 1) - index]) {
            return true;
        }
    }
    return false;
}

console.log(palindromo('reviver'));

function indiceDoMaior(numbers) {
    let indiceMaior = 0;
    for (let indice in numbers) {
        if (numbers[indiceMaior] < numbers[indice]) {
            indiceMaior = indice;
        }
    }
    return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

function indiceDoMenor(numbers) {
    let indiceMenor = 0;
    for (let indice in numbers) {
        if (numbers[indiceMenor] > numbers[indice]) {
            indiceMenor = indice;
        }
    }
    return indiceMenor;
}
console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));

function nomeMaior(nomes) {
    let nomeMaior = nomes[0];
    for (let indice in nomes) {
        if (nomeMaior.length < nomes[indice].length) {
            nomeMaior = nomes[indice]
        }
    }
    return nomeMaior;
}

console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function numMaisRep(numbers) {
    let vezesNumMaisRep = 0;
    let indexNumRep = 0;
    let numAtualRep = 0;
    for (let index in numbers) {
        let verificaNumero = numbers[index];
        for (let index2 in numbers) {
          if (verificaNumero === numbers[index2]) {
            numAtualRep += 1;
          }  
        }
        if (numAtualRep > vezesNumMaisRep) {
            vezesNumMaisRep = numAtualRep;
            indexNumRep = index;
        }
        numAtualRep = 0;
    }
    return numbers[indexNumRep];
}

console.log(numMaisRep([2, 3, 2, 5, 8, 2, 3]));

function soma(numbers) {
    let soma = 0;
    for (index = 0; index <= numbers; index += 1) {
        soma = soma + index;
    }
    return soma;
}
console.log(soma(5));

function verificaPalavra(word, ending) {
    word = word.split('');
    ending = ending.split('');
    let verifica = true;

    for (let index = 0; index < ending.length; index += 1) {
        if (word[word.length - ending.length + index] != ending[index]) {
            verifica = false;
        }
    }
    return verifica;
}
console.log(verificaPalavra('joaofernando', 'fernan'));