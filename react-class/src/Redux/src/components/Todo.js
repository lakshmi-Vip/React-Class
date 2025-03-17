import React from 'react'; // Import React

const Todo = ({ todo }) => { // Destructure the todo prop
    return (
        <li>
            {todo.task} 
        </li>
    );
};

export default Todo; // Export the component