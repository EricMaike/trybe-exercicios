const button = document.getElementById('enviar');
button.addEventListener('click', function(event) {
    event.preventDefault();
    const validation = textInputValidation();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
});

let criaButton = document.createElement('button');
const buttons = document.getElementById('buttons');
criaButton.innerText = 'Limpar'
criaButton.id = 'limpar';
criaButton.classList = "btn btn-info"
buttons.appendChild(criaButton);

criaButton.addEventListener('click', function() {
    const body = document.getElementsByTagName('body');
    body.innerText = ''
})

function textInputValidation() {
  const email = document.querySelector('#email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#name').value.length;
  const invalidName = name < 10 || name > 40;

  const explicacao = document.querySelector('#explicacao').value.length;
  const invalidExplicacao = explicacao > 500;

  if (invalidEmail || invalidName || invalidExplicacao) {
    return false;
  }
  else {
    return true;
  }
}
