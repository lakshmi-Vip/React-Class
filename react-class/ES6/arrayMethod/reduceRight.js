const words = ["Hello", "World"];
const sentence = words.reduceRight((acc, word) => acc + " " + word);
console.log(sentence); 
// Output: "World Hello"
