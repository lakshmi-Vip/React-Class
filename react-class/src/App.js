import './App.css';
import Greet, {Welcome} from './component/Greetmessage'
import Greerting from './component/Class';
import App1 from './component/Props';
import EventHandelser,{SyntheticEvent, EventPoolingExample} from './component/Eventhandle'
import BubbleApp from './component/Eventhandle';
import EventDeligationApp from './component/Eventhandle';
import Todo, {Counter} from './hooks/Usestate';
import Useeffect,{UsersList} from './hooks/Useeffect';
import Context from './hooks/Context';
import Useref from './hooks/Useref';
import Reducer from './hooks/Reducer';
import Usememo from './hooks/Usememo';
import WithUseCallback,{WithoutUseCallback} from './hooks/Usecallback';
import LayoutEffectExample from './hooks/Layout';
function App() {
  return (
    <>
    <p>Redux</p>
    {/* <Greet name='laki' /> 
    <Welcome place='Karnataka' capital='Bengaluru'/>
    <Greerting />
    <App1 /> */}
    {/* <EventHandelser />
    <SyntheticEvent />
    <EventPoolingExample /> */}
    {/* <BubbleApp /> */}
    {/* <EventDeligationApp /> */}
    {/* <Todo /> */}
    
    {/* <Useeffect /> */}
    {/* <UsersList /> */}
    {/* <Context />
     */}
     {/* <Useref /> */}
{/* 
     <Reducer />
     <Usememo /> */}
     <WithUseCallback />
      <WithoutUseCallback />
      <LayoutEffectExample />
    {/* <Counter /> */}
    </>
  );
}

// export default App;
//import React, { useState, useEffect } from 'react';
// import AddTodo from './Redux/src/components/AddTodo' // Import AddTodo component
// import TodoList from './Redux/src/components/TodoList'; // Import TodoList component

// function App() {
//   const [count, setCount] = useState(0);
//   const [cars, setCars] = useState([]);
//   const [newCar, setNewCar] = useState("");

//   // Increase count every second
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup interval
//   }, []);

//   // Fetch car data after 5 seconds
//   useEffect(() => {
//     setTimeout(() => {
//       fetchData();
//     }, 5000);
//   }, []);

//   // ✅ Free working API for car data
//   const fetchData = async () => {
//     try {
//       console.log("Fetching car data...");
//       const response = await fetch("https://myfakeapi.com/api/cars/");
//       const data = await response.json();
//       setCars(data.cars.slice(0,10)); // Update state with fetched data
//       console.log(data.cars);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // Function to add a new car from input
//   const addCar = () => {
//      if (newCar.trim() === "") return;
//     setCars([...cars, newCar]);
//     setNewCar(""); // Clear input after adding
//   };

//   return (
//     <div className="App">
//       <h1>Count: {count}</h1>

//       <h2>Cars List:</h2>
//       <ul>
//         {cars.length > 0 ? (
//           cars.map((car, index) => (
//             <li key={index}>
//               {car.make} {car.model} - {car.year}
//             </li>
//           ))
//         ) : (
//           <p>Loading cars...</p>
//         )}
//       </ul>

//       <input
//         type="text"
//         value={newCar}
//         onChange={(e) => setNewCar(e.target.value)}
//         placeholder="Enter new car model"
//       />
//       <button onClick={addCar}>Add Car</button>
//     </div>
//   );
// }
// function App() {
//   const [count, setCount] = useState(0);
//   const [car, setCar] = useState([]);
//   const [newCar, setnewCar] = useState("");

//   useEffect(() => {
//    const interval =  setInterval(() => {
//       setCount(count => count + 1);
//     }, 1000);

//     return () => clearInterval(interval)
//   }, []);

//   useEffect(() => {
//     setTimeout(() =>{
//       fetchData()
//     },5000)
//   },[])

//  const fetchData = async () => {
//   try{
//     console.log('getdata')
//     const response = await fetch('https://myfakeapi.com/api/cars/')
//     const data = await response.json()
//     setCar(data.cars.slice(0,10))
//   } catch (error) {
//       console.log(error)
//   }
//  }

//  const addCar = () => {
//   if(newCar.trim() === "") return;
//     setCar([...car, newCar])
//     setnewCar('')
//  }

//   return (
//     <div className='App'>
//       <h1>Count: {count}</h1>
//       <h2>Cars list
//         <ul>
//           {car.length > 0 ? (car.map((c,i) => {
//            return  <li key={i}>
//               {c.make} {c.model} - {c.year}
//             </li>
//           })) : 'loading .....'}
//         </ul>
//         </h2>
//       <input 
//        type='text'
//        value={newCar}
//        onChange={e => setnewCar(e.target.value)}/** */
//       ></input>
//       <button onClick={addCar} className={{color: 'blue'}}>Submit</button>
//       {/* <h1>Todo App</h1> 
//             <AddTodo /> 
//             <TodoList /> */}

//     </div>
//   );
// }

// // Log to console
// console.log('Hello console');

export default App;