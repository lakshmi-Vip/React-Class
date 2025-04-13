// import React, { useState, useEffect, useRef } from 'react';

// const Useref = () => {
//     const reference = useRef(null);
//     return(
//         <>
//         <form>
//             <input type='text' ref={reference} placeholder='Enter your name' />
//             <button onClick={(e) => {
//                 e.preventDefault(); 
//                 alert(reference.current.value);
//             }}>Submit</button>
//             </form>
//         <h5>This is useRef Hook</h5>
//         </>
//     )
// }

// export default Useref;

//give focuse to input field when the component is mounted
// import React, { useState, useEffect, useRef } from 'react';
// const Useref = () => {   
//     const reference = useRef(null);
//     useEffect(() => {
//         reference.current.focus();
//     }, [])
//     return(
//         <>
//         <form>
//             <input type='text' ref={reference} placeholder='Enter your name' />
//             <button onClick={(e) => {
//                 e.preventDefault();
//                 alert(reference.current.value);

//             }}>Submit</button>
//             </form>
//         <h5>This is useRef Hook</h5>
//         </>  
//     )
// }
// export default Useref;

// import React, { useRef } from 'react';

// const Useref = () => {
//   const divRef = useRef(null);

//   const changeColor = () => {
//     divRef.current.style.backgroundColor = 'lightblue'; // Change background color
//   };

//   return (
//     <div>
//       <div ref={divRef} style={{ width: '500px', height: '500px', border: '5px solid black' }}>
//         Click the button to change my color!
//       </div>
//       <button onClick={changeColor}>Change Color</button>
//     </div>
//   );
// };

// export default Useref;

// import React, { useState, useRef, useEffect } from 'react';

// const Useref = () => {
//   const [count, setCount] = useState(0);
//   const prevCountRef = useRef();

//   useEffect(() => {
//     prevCountRef.current = count; // Update the previous count
//   });
// console.log(prevCountRef.current, 'prevCountRef')
//   const prevCount = prevCountRef.current;

//   return (
//     <div>
//       <h1>Current Count: {count}</h1>
//       <h2>Previous Count: {prevCount}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// export default Useref;

import React, { useRef, useState } from 'react';

const Useref = () => {
  const inputRef = useRef('');
  //const [value, setValue] = useState('');

  const handleChange = (e) => {
    inputRef.current = e.target.value; // Store the value in the ref
  };

  const showValue = () => {
    alert(`Current value: ${inputRef.current}`);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Type something..." />
      <button onClick={showValue}>Show Value</button>
    </div>
  );
};

export default Useref;