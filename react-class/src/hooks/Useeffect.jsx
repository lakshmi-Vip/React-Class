import React, { useState, useEffect, useContext } from 'react';
import { Username } from './Context';

const Useeffect = () =>{
   const[count,setCount] = useState(0)
 const name  = useContext(Username)
 useEffect(() =>{
  setTimeout(()=>{
    setCount(count + 1)
    console.log('useEffect')

  },1000)
    
    return()=> {
        console.log('clean up')
    }
 })

    return(
        <>
        <p>UseEffect: {count}</p>
        <p>This value getting from context {name}</p>
        </>
    )
}

 export default Useeffect;

//import React, { useState, useEffect } from "react";
export function UsersList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []); // Empty dependency array means the effect runs once after the component mounts.
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
//export default UsersList;