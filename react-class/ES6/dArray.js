const data = [1,2,3,4]
const [,,,d] = data

console.log(d)

//object
const person = {
    name: 'John',
    age: 20
}
    
const {name,age} = person
console.log(name)

//nested object
const person1 = {
    name: 'John',
    age: 20,
    address: {
        city: 'New York',
        country: 'USA'
    }
}
const{address:{city}} = person1
console.log(city)