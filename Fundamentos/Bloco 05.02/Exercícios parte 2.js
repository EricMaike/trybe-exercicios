const pai = document.getElementById('pai');
const irmaoElementoOndeVoceEsta = document.createElement('section');
pai.appendChild('irmaoElementoOndeVoceEsta');

const elementoOndeVoceEsta  = document.getElementById('elementoOndeVoceEsta');
const filhoElementoOndeVoceEsta = document.createElement('section');
elementoOndeVoceEsta.appendChild('filhoElementoOndeVoceEsta');

const primeiroFilhoDoFilho  = document.getElementById('primeiroFilhoDoFilho');
const filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
filhoDoPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild('filhoDoPrimeiroFilhoDoFilho');

const terceiroFilho = getElementById('filhoDoPrimeiroFilhoDoFilho').parentElement.parentElement.nextElementSibling;


