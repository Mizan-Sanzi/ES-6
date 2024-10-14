function showInfo(){
    return "Hello, How can I help you?"
}
const result = showInfo();
console.log(result);

// think like variable declaration
const showInfo2 = () => "Hello, this is arrow function";

const result2 = showInfo2();
console.log(result2);

// 

const double = (x) => x*2; //if parameter is only one... we can avoid first bracket

const result3 = double(5);
console.log(result3);

const age = [32, 45, 67, 87];
const person = {
    Name: 'Abul',
    Age: 67,
    District: 'Dhaka',
    isRetired: true
}
console.log(typeof age, age[1]);
console.log(person.Age);
