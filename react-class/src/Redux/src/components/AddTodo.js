import React, { useState } from 'react'; // Import React and useState hook
import { useDispatch } from 'react-redux'; // Import useDispatch hook from react-redux
import { addTodoRequest } from '../redux/actions/todoActions'; // Import action creator

const AddTodo = () => {
    const [task, setTask] = useState(''); // State to hold the input value
    const dispatch = useDispatch(); // Get dispatch function from Redux

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (task.trim()) { // Check if the input is not empty
            dispatch(addTodoRequest(task)); // Dispatch the addTodoRequest action
            setTask(''); // Clear the input field
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Add a new task" 
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodo; // Export the component