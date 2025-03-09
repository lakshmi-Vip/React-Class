// //merging array
// let arrOne = [1,2,3];
// let arrTwo = [4,5,6];

// let arrThree =[...arrOne, ...arrTwo];

// console.log(arrThree);

// //copying array
// let originalArray = [1,2,3,4,'5',6,7,8,9,10];
// let copyArray = [...originalArray];
// console.log(copyArray);
// //combind object
// let objOne = {name: 'John'};
// let objTwo = {age: 25};
// let objThree = {...objOne, ...objTwo};
// console.log(objThree);

// //passing array Elements as Function Arguments
function sum(a,b,c) {
    return a + b + c;
}

function multiply(a,b,c) {
    return a * b * c;
}

const numbers = [1,2,3];
console.log(sum(...numbers));
console.log(multiply(...numbers));