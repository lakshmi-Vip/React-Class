 //simple 
 let age = 10;

let mes = age >= 18 ? 'You are eligible to vote' : 'You are not eligible to vote';
console.log(mes);

//nested ternary
let score = 80;
let result = score >= 80 ? 'A' : score >= 60 ? 'B' : score >= 40 ? 'C' : 'D';
console.log(result);

if(score >= 80) {
    result = 'A';
} else if(score >= 60) {
    result = 'B';
}
else if(score >= 40) {
    result = 'C';
}
else {
    result = 'D';
}