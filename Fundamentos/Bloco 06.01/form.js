const button = document.getElementById('enviar');
button.addEventListener('click', function(event) {
    event.preventDefault();
});

let criaButton = document.createElement('button');
const buttons = document.getElementById('buttons');
criaButton.innerText = 'Limpar'
criaButton.id = 'limpar';
buttons.appendChild(criaButton);

criaButton.addEventListener('click', function() {
    const body = document.getElementsByTagName('body');
    body.innerText = ''
})



function enable() {
const enviar = document.querySelector('#enviar');
const imagens = document.querySelector('#divulgacao');
enviar.disable = !imagens.checked;
}

window.onload = function() {
    const imagens = document.querySelector('#divulgacao');
    imagens.addEventListener('change', enable);
}

function textInputValidation() {
    const email = document.querySelector('#email').value.length;
    const invalidEmail = email < 10 || email > 50;
  
    const name = document.querySelector('#name').value.length;
    const invalidName = name < 10 || name > 40;
  
    const explication = document.querySelector('#explication').value.length;
    const invalidExplication = explication > 500;
  
    if (invalidEmail || invalidName || invalidExplication) {
      return false;
    }
    else {
      return true;
    }
  }

  const validation = textInputValidation();
    if (validation === false) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }