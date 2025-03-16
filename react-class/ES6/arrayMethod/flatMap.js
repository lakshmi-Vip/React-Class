//array.flatmap(callBack(curentValue,index,array), thisValue)

const data = [1,2,3];

const result = data.flatMap(num => [num, num *2]);

console.log(result);