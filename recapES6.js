const number = [89, 35, 98, 12];
const person = {
    name: 'abul',
    father: 'kabul',
    son: 'babul',
    grantFather: 'Mokbul',
    age: 39
}

// 1. template string

const about = `My name is ${person.name}, my father's name is ${person['father']}, my age is ${person.age}, my grantfather's is ${number[0]}`;

console.log(about);

// 2. arrow function

const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const multiLine = (num1, num2) => {
    const add = num1 + num2;
    return add;
}

// 3. spread operator


const newNumber = [...number];
number.push(99);
number.push(99);
number.push(99);
console.log(newNumber);

