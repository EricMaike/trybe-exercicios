const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addTurno = (objeto, chave, valor) => {
  objeto[chave] = valor;
};

addTurno(lesson2, "turno", "noite");
console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const keys = (objeto) => Object.keys(objeto);
console.log(keys(lesson3));

// Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
const tamanho = (objeto) => Object.keys(objeto).length;
console.log(tamanho(lesson2));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const values = (objeto) => Object.values(objeto);
console.log(values(lesson1));

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const students = (objeto) => {
  let total = 0;

  const array = Object.keys(objeto);
    
  for (index in array) {
    total += objeto[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(students(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto.
const valueKey = (objeto, numero) => Object.values(objeto)[numero];
console.log(valueKey(lesson2, 3));
