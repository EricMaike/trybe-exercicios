let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for (let message in names) { 
    console.log('Olá ' + names[message]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let keyValue in car) {
    console.log(keyValue, car[keyValue])
  }