const a = 10;
const b = 20;
const c = 30;

let adicao = a + b;
console.log(adicao);

let subtracao = a - b;
console.log(subtracao);

let multiplicacao = a * b;
console.log(multiplicacao);

let divisao = a / b;
console.log(divisao)

let modulo = a % b;
console.log(modulo)


if (a > b) {
    console.log("a é maior");
} 
else if (a < b) {
    console.log("b é maior");
}


if (a > b && a > c) {
    console.log("a é maior");
} 
else if (a < b && b > c) {
    console.log("b é maior");
}
else if (a < c && b < c) {
    console.log("c é maior");
}


if (a > 0) {
    console.log("positive");
}
else if (a < 0) {
    console.log("negative");
}
else if (a === 0) {
    console.log("zero");
}

const anguloA = 90;
const anguloB = 45;
const anguloC = 45;

if (anguloA + anguloB + anguloC === 180) {
    console.log(true);
}
else if (anguloA + anguloB + anguloC > 180 || anguloA + anguloB + anguloC < 180 ) {
    console.log(false);
}
else {
    console.log("invalido");
}

let pecaXadrez = "Rei"

switch(pecaXadrez.toLocaleLowerCase()) {
    case "rei": console.log("Rei -> qualquer direção, uma casa por vez");
        break;
    case "rainha": console.log("Rainha -> qualquer direção, quantas casas quiser");
        break;
    case "torre": console.log("Torre -> linha reta, horizontal ou vertical");
        break;
    case "bispo": console.log("Bispo -> apenas na diagonal");
        break;
    case "cavalo": console.log("Cavalo -> movimento em L, apenas 3 casas");
        break;
    case "peao": console.log("Peão -> apenas uma casa para frente");
        break;
    default: console.log("Inválida");
}

let nota = "95";

if (nota < 0 || nota > 100) {
    console.log("Nota inválida");
}
else if (nota >= 90) {
    console.log("A");
}
else if (nota >= 80) {
    console.log("B");
}
else if (nota >= 70) {
    console.log("C");
}
else if (nota >= 60) {
    console.log("D");
}
else if (nota >= 50) {
    console.log("E");
}
else if (nota < 50) {
    console.log("F");
}


if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    console.log("true");
}
else {
    console.log("false");
}

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    console.log("true");
}
else {
    console.log("false");
}

const custo = 10;
const valorVenda = 20;

let custoTotal = 10 * 1.2;
let lucro = valorVenda - custoTotal; 

if (custo > 0 && valorVenda > 0) {
    console.log(lucro * 1000);
} 
else if (custo <= 0 && valorVenda <= 0) {
    console.log("Valores inválidos");
}

let salario = 2492.63;
let inss;
let ir;

if (salario <= 1556.94) {
    inss = salario * 0.08;
} else if (salario <= 2594.92) {
    inss = salario * 0.09;
}  else if (salario <= 5189.82) {
    inss = salario * 0.11;
} else {
    inss = 570.88;
}

let salarioBase = salario - inss;

if (salarioBase <= 1903.98) {
    ir = 0;
} else if (salarioBase <= 2826.65) {
    ir = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
    ir = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
    ir = (salarioBase * 0.225) - 636.13
} else {
    ir = (salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - ir;

console.log("Salario ->" + salario);
console.log("INSS ->" + inss);
console.log("Salario Base ->" + salarioBase);
console.log("IR ->" + ir);
console.log("Salario liquido ->" + salarioLiquido);
