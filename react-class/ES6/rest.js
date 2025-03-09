//Function with Variable Arguments:
// const sumlAll = (...argument) => {
//     console.log(argument);
// }

// sumlAll(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);

// let arrayOne = [1,2,3,4,5,6,7,8,9,10];
// let[a,b, ...remaing] = arrayOne;
// console.log(remaing);

// let Coding = {firstLanguage: 'C', secondLanguage: 'C++', thirdLanguage: 'Java'};
// let {firstLanguage, ...remaining} = Coding;
// console.log(remaining);

const names = (firstperson, secondPerson, ...remaining) =>{
    console.log(`Hello ${firstperson} how are you?`)
    console.log(`Hello ${secondPerson} how are you?`)
    console.log(`Hello ${remaining} how are you?`)
}

names('rahul','vinod','kiran');