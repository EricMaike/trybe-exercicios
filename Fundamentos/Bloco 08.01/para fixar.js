// 1 - Crie uma função que retorne a string 'Acordando!!';
const wakeUp = () => 'Acordando!!';

// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
const coffe = () => 'Bora tomar café!!';

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
const sleep = () => 'Partiu dormir!!';

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.
const doingThings = (func) => func();

console.log(doingThings(wakeUp));
console.log(doingThings(coffe));
console.log(doingThings(sleep));
