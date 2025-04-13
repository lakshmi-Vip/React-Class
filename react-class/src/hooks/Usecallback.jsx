// import React, { useState, useCallback } from "react";

// function WithUseCallback() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   const sayHello = useCallback(() => {
//     alert("Hello!");
//     console.log("Hello!");
//   }, [count]); // 👈 function changes only when count changes

//   return (
//     <>
//       <h2>Count: {count}</h2>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something"
//       />
//       <br />
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//       <br />
//       <button onClick={sayHello}>Say Hello</button>
//     </>
//   );
// }

// export default WithUseCallback;


// export function WithoutUseCallback() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   // ❗ This function is recreated on EVERY re-render
//   const sayHello = () => {
//     alert("Hello!");
//     console.log("Hello!");
//   };

//   return (
//     <>
//       <h2>Count: {count}</h2>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something"
//       />
//       <br />
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//       <br />
//       <button onClick={sayHello}>Say Hello</button>
//     </>
//   );
// }

// //export default With UseCallback;
import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("👶 Child rendered");
  return <button onClick={onClick}>Say Hello (Child)</button>;
});

export default function WithUseCallback() {
  const [count, setCount] = useState(0);

  // 🧠 Memoized callback: only changes if dependencies change
  const sayHello = useCallback(() => {
    console.log("👋 Hello!");
  }, []);

  return (
    <div style={{ border: "2px solid green", padding: "10px", marginBottom: "30px" }}>
      <h2>With useCallback ✅</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Child onClick={sayHello} />
    </div>
  );
}

const Child1 = React.memo(({ onClick }) => {
  console.log("👶 Child rendered");
  return <button onClick={onClick}>Say Hello (Child)</button>;
});

export function WithoutUseCallback() {
  const [count, setCount] = useState(0);

  // ❌ New function created on every render
  const sayHello = () => {
    console.log("👋 Hello!");
  };

  return (
    <div style={{ border: "2px solid red", padding: "10px" }}>
      <h2>Without useCallback ❌</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Child1 onClick={sayHello} />
    </div>
  );
}
