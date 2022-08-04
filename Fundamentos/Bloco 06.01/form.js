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

