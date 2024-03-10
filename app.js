const fs = require('fs');

const genders = ['M', 'F']
const maleNames = ['Steven', 'David', 'Chris', 'John', 'Matthew']
const femaleNames = ['Amanda', 'Julia', 'Lucy', 'Suzanne', 'Megan']
const lastNames = ['Pitt', 'Stallone', 'Brown', 'Reeves', 'Fishburne', 'Washington']
const people = [];

const randChoice = arr => arr[Math.floor(Math.random() * arr.length)];

for (let i = 1; i < 20; i++) {
  const person = {
    gender: '',
    firstName: '',
    lastName: '',
    age: '',
  }

  const drawGender = randChoice(genders);
  person.gender = drawGender;

  if (person.gender === 'M') {
    const drawFirstName = randChoice(maleNames)
    person.firstName = drawFirstName;
  } else {
    const drawFirstName = randChoice(femaleNames);
    person.firstName = drawFirstName;
  }

  const drawLastName = randChoice(lastNames)
  person.lastName = drawLastName;

  person.age = Math.floor(Math.random() * 78 + 1)

  people.push(person);
}

let peopleJson = JSON.parse(JSON.stringify(people));
console.log(peopleJson);

const jsonString = JSON.stringify(peopleJson);
fs.writeFile('./people.json', jsonString, err => {
  if (err) {
    console.log('Error writing file', err)
  } else {
    console.log('File created successfully')
  }
});