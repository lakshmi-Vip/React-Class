//array.flat(depth)
const data = [1,[2,3,[6,[7,[10,[11,12,[13]]]]]], [4,5]]
//const data = [1,2,[3,4,[5,6,[7,8,[9,10]]]]]
const flatdata = data.flat(Infinity)
//console.log(flatdata)
const flatdata1=flatdata.sort((a,b) => {
    return b-a
})
console.log(flatdata1)