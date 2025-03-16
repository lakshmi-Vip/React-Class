//revese
const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);

function reverse(str) {
 str.split('').reverse().join('');
}
console.log(reverse('hello'));

const value = 'hello';
console.log(value.split(''))