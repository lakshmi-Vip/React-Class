const words = ["Hello", "World"];
console.log(words.join(" ")); 
// Output: "Hello World"

const obj = { name: "Alice", age: 25 };
for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
