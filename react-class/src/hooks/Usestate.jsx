import React,{useState} from 'react';

export const Counter = () =>{
    const [count,setCount] = useState(0);
    const add = () =>{
        setCount(count + 1);
    }
    return (
        <>
        <p>Hi I am Counter {count}</p>
        <button onClick={add}>Add</button>
        <button onClick={() =>setCount(count - 1)}>Sub</button>
        <button onClick={() =>setCount(0)}>Reset</button>
        </>
    )
}
//export default Counter;





// import React, { useState } from 'react';

// const Todo = () => {
//     const [todo, setTodo] = useState(''); // State for the input value
//     const [todoList, setTodoList] = useState([]); // State for the list of todos
//     const [editIndex, setEditIndex] = useState(null); // State to track the index of the item being edited

//     const addTodo = () => {
//         if (todo.trim() !== '') {
//             if (editIndex !== null) {
//                 // Update the existing item in the list
//                 const updatedList = [...todoList];
//                 updatedList[editIndex] = todo;
//                 setTodoList(updatedList);
//                 setEditIndex(null); // Reset editIndex after editing
//             } else {
//                 // Add a new item to the list
//                 setTodoList([...todoList, todo]);
//             }
//             setTodo(''); // Clear the input field
//         }
//     };

//     const deleteTodo = (index) => {
//         const newTodolist = [...todoList];
//         newTodolist.splice(index, 1);
//         setTodoList(newTodolist);
//     };

//     const editTodo = (index) => {
//         setTodo(todoList[index]); // Set the input field to the value of the item being edited
//         setEditIndex(index); // Track the index of the item being edited
//     };

//     return (
//         <>
//             <p>Todo App</p>
//             <input 
//                 type="text"
//                 value={todo}
//                 onChange={(e) => setTodo(e.target.value)}
//             />
//             <button onClick={addTodo}>
//                 {editIndex !== null ? 'Update Activity' : 'Add Activity'}
//             </button>
//             <ol>
//                 {todoList.map((item, index) => (
//                     <li key={index}>
//                         {item}
//                         <button onClick={() => deleteTodo(index)}>Delete</button>
//                         <button onClick={() => editTodo(index)}>Edit</button>
//                     </li>
//                 ))}
//             </ol>
//         </>
//     );
// };

// export default Todo;