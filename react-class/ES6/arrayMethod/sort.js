const numbers = [1,5,7,2,5,3,6,8,9,4];
numbers.sort();
console.log(numbers);

//array.sort([compareFunction])

numbers.sort((a,b) => b -a)
console.log(numbers)

//when you want to reverse the order of the array
const fruits = ['banana', 'apple', 'mango', 'orange', 'papaya'];
fruits.sort((a, b) => b.localeCompare(a));
console.log(fruits); 

//onject sorting
const students = [
    {id: 1, name: 'John', age: 25},
    {id: 2, name: 'Jane', age: 20},
    {id: 3, name: 'Doe', age: 30},
    {id: 4, name: 'Smith', age: 22}
];
students.sort((a, b) => b.id - a.id);
console.log(students);