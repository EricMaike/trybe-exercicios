function soma(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function mod(a, b) {
    return a % b;
}


function maiorNum(a, b) {
    if (a > b) {
        return a + " é maior que " + b;
    } else if (a < b) {
        return b + " é maior que " + a;
    } else {
        return "Os números são iguais";
    }
}

function maiorNumber(a, b, c) {
    if (a > b && a > c) {
        return a + " é maior que " + b + " e " + c;
    } else if (a < b && b > c) {
        return b + " é maior que " + a + " e " + c;
    } else if (a < c && b < c) {
        return c + " é maior que " + a + " e " + b;
    } else {
        return "Os números são iguais";
    }
}

function positiveNegative(a) {
    if (a > 0) {
        console.log("positive");
    }
    else if (a < 0) {
        console.log("negative");
    }
    else if (a === 0) {
        console.log("zero");
    }
}

function triangle(anguloA, anguloB, anguloC) {
    if (anguloA + anguloB + anguloC === 180) {
        console.log(true);
    }
    else if (anguloA + anguloB + anguloC > 180 || anguloA + anguloB + anguloC < 180 ) {
        console.log(false);
    }
    else {
        console.log("inválido");
    }
}
