// 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, word) => acc + word.split('').reduce((acc2, letter) => 
  (letter.toLowerCase() === 'a') ? acc2 + 1 : acc2, 0), 0);
}

console.log(containsA());