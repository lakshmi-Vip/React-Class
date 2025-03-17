import React from 'react'; // Import React
import { useSelector } from 'react-redux'; // Import useSelector hook from react-redux
import Todo from './Todo'; // Import Todo component

const TodoList = () => {
    const todos = useSelector((state) => state.todos); // Get todos from Redux state

    return (
        <ul>
            {todos.map((todo) => ( // Loop through todos array
                <Todo key={todo.id} todo={todo} /> // Render Todo component for each todo
            ))}
        </ul>
    );
};

export default TodoList; // Export the component