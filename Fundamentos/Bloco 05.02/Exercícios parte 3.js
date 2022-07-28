let pai = document.getElementById('pai');
let filhos = pai.childNodes;

for (let index = filhos.length - 1; index >= 0; index -= 1) {
    let filhoAtual = filhos[index];
    if (filhoAtual.id != 'elementoOndeVoceEsta' && filhoAtual.id != 'primeiroFilhoDoFilho') {
        filhoAtual.remove();
    }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho'); 
    segundoEUltimoFilhoDoFilho.remove();