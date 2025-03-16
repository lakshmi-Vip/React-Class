// import './App.css';

// function App() {
//   return (
//     <>
//     <p>Redux</p>
//     </>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';

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
function App() {
  const [count, setCount] = useState(0);
  const [car, setCar] = useState([]);
  const [newCar, setnewCar] = useState("");

  useEffect(() => {
   const interval =  setInterval(() => {
      setCount(count => count + 1);
    }, 1000);

    return () => clearInterval(interval)
  }, []);

  useEffect(() => {
    setTimeout(() =>{
      fetchData()
    },5000)
  },[])

 const fetchData = async () => {
  try{
    console.log('getdata')
    const response = await fetch('https://myfakeapi.com/api/cars/')
    const data = await response.json()
    setCar(data.cars.slice(0,10))
  } catch (error) {
      console.log(error)
  }
 }

 const addCar = () => {
  if(newCar.trim() === "") return;
    setCar([...car, newCar])
    setnewCar('')
 }

  return (
    <div className='App'>
      <h1>Count: {count}</h1>
      <h2>Cars list
        <ul>
          {car.length > 0 ? (car.map((c,i) => {
           return  <li key={i}>
              {c.make} {c.model} - {c.year}
            </li>
          })) : 'loading .....'}
        </ul>
        </h2>
      <input 
       type='text'
       value={newCar}
       onChange={e => setnewCar(e.target.value)}
      ></input>
      <button onClick={addCar}>Submit</button>
    </div>
  );
}

// Log to console
console.log('Hello console');

export default App;