// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'morango', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['ovomaltine', 'amendoim', 'leite condensado'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));