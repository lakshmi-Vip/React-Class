//A Higher-Order Component (HOC) is a pattern in React.js where a function takes a component as an argument and returns a new enhanced component. 
// HOCs allow you to reuse logic across multiple components without modifying their structure.
//Why Use Higher-Order Components?
//Code Reusability: Helps avoid repeating logic in multiple components.
//Separation of Concerns: Keeps logic separate from UI components.
//Enhancing Components: Adds extra functionalities like authentication, logging, or API handling.

function withLogging(fn) {
 return function(...args) {
    consol.log(`Hi this is HOC ${args}`)
    return fn(...args)
 }
}

function  add(a,b) {
  return a+b
}

const withAddLogin = withLogging(add)

console.log(withAddLogin(1,2))


