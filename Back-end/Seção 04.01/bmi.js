const readline = require('readline-sync');

const weigth = readline.questionFloat('What\'s your weight? (kg)');
const height = readline.questionInt('What\'s your height? (m)');

const imc = () => (weigth / (height^2)).toFixed(2); 

console.log(imc(65, 1,75));

const catIMC = () => {
  switch (imc()) {
    case 18,5:
      
      break;
  
    default:
      break;
  }
} 