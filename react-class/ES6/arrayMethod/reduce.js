//array.reduce(callback(accumulator, initialvalue, currentIndex,array),[])

const data = [[1,2],[3,4],[5,6,7]]

// const sum = data.reduce((acc, init) => acc + init)
// console.log('Count:',sum)

// const array = data.reduce((acc,init) => acc.concat(init),[])
// console.log(array)

// const newArry = data.flat()
// console.log(newArry)

//remove duplicates
const arrayOne = [1,2,2,2,4,5,6,3,5,3,4,1,4]
// const dup = [...new Set(arrayOne)]
// console.log(dup)
const dup = arrayOne.reduce((acc, num) => {
 if(!acc.includes(num))  acc.push(num) 
     return acc
},[]) //initial value should be provided here
console.log(dup)

//Find maximum number
const big = [10,20,40,50,90,100,60];

const findmax = big.reduce((acc, m) => {
  return   acc < m ? m : acc
})
console.log('max',findmax)

//min
const findMin = big.reduce((acc,m, i) => {
    return acc > m ? m : acc
})
console.log('min',findMin)

const findIndex = big.indexOf(Math.min(...big))
console.log(findIndex)

//counting occarence of elements
const fruits = ['apple', 'orange', 'apple','orange', 'banna','graps']
const count = fruits.reduce((acc,fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1
    return acc
},{})
console.log(count)

//flaten array
const flat = [1,2,[3,4],[5,6]]
const doFlat = flat.reduce((acc, flt) => {
   return  acc.concat(flt)
},[])
console.log(doFlat)