import React,{useState} from 'react'
import Conditionrender,{Message} from './Condition'

//Event Deligation
function EventDeligationApp() {
  const [items, setItems] = useState([]);
  const handleItemClick = (event) => {
    // Check if the clicked target is a <li> element
    if (event.target.tagName === 'LI') {
      console.log(`Item Clicked: ${event.target.textContent}`);
    }
  };
  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };
  return (
    <div>
      <h2>Event Delegation Example</h2>
      <button onClick={addItem}>Add Item</button>
      <ul onClick={handleItemClick}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Conditionrender isLoggedIn={true} />
      <Message hasUnreadMessages={true} />
    </div>
  );
}
export default EventDeligationApp;


//bubling example

// function BubbleApp() {
//   const handleParentClick = () => {
//     console.log('Parent Clicked!');
//   };
//   const handleChildClick = (event) => {
//     console.log('Child Clicked!');
//     // Uncomment the next line to stop the event from bubbling to the parent
//     // event.stopPropagation();
//   };
//   return (
//     <div onClick={handleParentClick} style={{ padding: '50px', backgroundColor: 'lightblue' }}>
//       <div
//         onClick={handleChildClick}
//         style={{
//           padding: '20px',
//           backgroundColor: 'lightgreen',
//           marginTop: '20px',
//         }}
//       >
//         Click Me (Child Element)
//       </div>
//     </div>
//   );
// }
// export default BubbleApp;


// const hello = () => {
//     console.log('This is event handeler');
// }

// const EventHandelser = (event)  => {
//     console.log('event argument', event)
//     console.log('Button clicked!');

//     return (
//         <div>
//         <h3> Hey Event</h3>
//         <button onClick={hello}>Submit Event</button>
//         </div>
//     )
// }

// export function SyntheticEvent() {
//   const [name, setName] = useState();
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent form submission
//     console.log('Form submitted with name:', name)
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// //event pooling deprecated v17
// export function EventPoolingExample() {
//     const [inputValue, setInputValue] = useState("");

//     const handleChange = (event) => {
//         event.persist(); // Prevent event pooling (removes event from the pool)

//         console.log("Initial Input Value:", event.target.value); // Access event normally

//         setTimeout(() => {
//             console.log("Asynchronous Access:", event.target.value); // Still accessible due to event.persist()
//         }, 1000);
//     };

//     return (
//         <div>
//             <h2>React Event Pooling Example</h2>
//             <input
//                 type="text"
//                 onChange={handleChange}
//                 placeholder="Type something..."
//             />
//             <p>Input Value: {inputValue}</p>
//         </div>
//     );
// }

// export default EventHandelser