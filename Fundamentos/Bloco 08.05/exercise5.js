// 5 - Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando somente 1 linha. O retorno da função utilizando o array myList deve ser [3, 2, 5].
const myList = [5, 2, 3];

// escreva swap abaixo
const swap = ([x, y, z]) => [z, y, x];

console.log(swap(myList));