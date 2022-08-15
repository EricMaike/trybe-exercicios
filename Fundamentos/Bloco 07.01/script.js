// 1- Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.
// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.

const testingScope = escopo => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

// 2 - Crie uma função que retorne um array em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

    const sortOddsAndEvens = (array) => {
        for (let index = 1; index < array.length; index += 1) {
           for (let index2 = 0; index2 < index; index2 += 1) {
            if (array[index] < array[index2]) {
                let position = array[index];
                array[index] = array[index2];
                array[index2] = position;
            }
           }
        }
        return array;
    };

console.log(sortOddsAndEvens([13, 3, 4, 10, 7, 2]));