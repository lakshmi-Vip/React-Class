import { useState, useMemo } from "react";

// const expensiveComputation = (count) => {
//   console.log("Running expensive computation...");
//   let result = 0;
//   for (let i = 0; i < 1000000000; i++) {
//     result += i;
//   }
//   return result + count;
// };

// const Usememo = () => {
//   const [count, setCount] = useState(0);

//   // Use useMemo to memoize the result of the expensive computation
//   const memoizedValue = useMemo(() => expensiveComputation(count), [count]);

//   console.log(memoizedValue, "memoizedValue");

//   return (
//     <>
//       <p>This is useMemo Hook</p>
//       <p>Count: {count}</p>
//       <p>Memoized Value: {memoizedValue}</p>
//       <button onClick={() => setCount(count + 1)}>Add</button>
//     </>
//   );
// };

// export default Usememo;

//import React, { useState } from "react";

 function Usememo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // ❗ This runs on every render — slow!
  const expensiveValue = (() => {
    console.log("Calculating expensive value...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += 1;
    }
    return result + count;
  })();
  //const memoizedValue = useMemo(() => expensiveValue(), []);

  return (
    <>
      <h2>Count: {count}</h2>
      <input
        type="text"
        placeholder="Type here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </>
  );
}

export default Usememo;
