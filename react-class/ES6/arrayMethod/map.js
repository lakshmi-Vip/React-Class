
//syntax for map
//array.map(callback(currentValue, index, array), thisArg)

//array.arryMethod()

// const numbers = [1, 2, 3, 4, 5];
// const double = numbers.map((n) => n * 2);
// console.log(double);
// console.log(numbers);

// const Names = [{
//     Fname: 'john',
//     Lname: 'Doe',
//     age: 25
// }]
// //console.log('Name',Names)
// const fullName = Names.map((name) => `full name: ${name.Fname} ${name.Lname}`);
// console.log(fullName);

// const user = [{name: 'john', age: 25}, {name: 'Doe', age: 30}, {name: 'Smith', age: 22}];
// const userNames = user.map((user) => user.age);
// console.log(userNames);

const num = [10, 20, 30, 40, 50]
const data = num.map((nu,i) => {
 return (`Index: ${i} value: ${nu}`)
})

console.log(data);