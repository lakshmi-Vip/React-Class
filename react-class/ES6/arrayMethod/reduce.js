const data = [[1,2],[3,4],[5,6,7]]

// const sum = data.reduce((acc, init) => acc + init)
// console.log('Count:',sum)

// const array = data.reduce((acc,init) => acc.concat(init),[])
// console.log(array)

// const newArry = data.flat()
// console.log(newArry)

const arrayOne = [1,2,2,2,4,5,6,3,5,3,4,1,4]
const dup = [...new Set(arrayOne)]
console.log(dup)