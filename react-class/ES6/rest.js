//Function with Variable Arguments:
// const sumlAll = (...argument) => {
//     console.log(argument);
// }

// sumlAll(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);

// let arrayOne = [1,2,3,4,5,6,7,8,9,10];
// let[,,,,,,...rest] = arrayOne;
// console.log(rest);

// let Coding = {firstLanguage: 'C', secondLanguage: 'C++', thirdLanguage: 'Java'};
// let {firstLanguage, ...remaining} = Coding;
// console.log(remaining);

// const names = ( ...remaining) =>{
//     // console.log(`Hello ${firstperson} how are you?`)
//     // console.log(`Hello ${secondPerson} how are you?`)
//     // console.log(`Hello ${remaining} how are you?`)
//     return (remaining);
// }

// console.log(names('rahul','vinod','kiran','lakshmi'));

function sum(...numbers) {
   return  numbers.reduce((a,b) => a+b);
}
  
  
  
  console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
  

//rest operator with function arguments
// const sum = (...argument) => { //rest operator
//     let sum = 0;
//     for(let i of argument){
//         sum += i;
//     }
//     return sum;
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10));

