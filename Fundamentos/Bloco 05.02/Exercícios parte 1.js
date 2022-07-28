const elementoOndeVoceEsta =  document.getElementById('elementoOndeVoceEsta');

const paiElementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta').parentNode;
paiElementoOndeVoceEsta.style.color = 'blue';

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho').innerText;
primeiroFilhoDoFilho = 'Bloco 05.02 - Turma 25 B!'


const primeiroFilho = document.getElementById('pai').firstChild;

const primeiroFilho2 = document.getElementById('elementoOndeVoceEsta').previousElementSibling;

const atencao = document.getElementById('elementoOndeVoceEsta').nextSibling;

const terceiroFilho = document.getElementById('elementoOndeVoceEsta').nextElementSibling;

const terceiroFilho2 = document.getElementById('pai').lastElementChild.previousElementSibling;