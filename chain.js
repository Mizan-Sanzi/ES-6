// data access
const data = [{id: 10, name: 'Abul', Address: 'Arambag'}];
console.log(typeof data);
// console.log(data.Address); //undefined because data is not an array it is an object
console.log (data[0].Address);

const products = {
    count: 5000,
    data: [
        {ID: 10, Name: 'Lenovo', Price: 65000},
        {ID: 15, Name: 'Dell', Price: 55000},
    ]
}
console.log(products.data[0].Name);