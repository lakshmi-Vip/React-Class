let fruits = ["apple", "banana", "cherry", "date"]
let selectedFruits = fruits.slice(1,-1)
console.log(selectedFruits)

//closure
function Outer() {
    const a=1;
    const b=1;
    return function Inner() {
        return a + b;
    }
}
const fun = Outer()
console.log(fun())