import { ADD_TODO_SUCCESS } from '../actions/todoActions'; // Import action type

const initialState = []; // Initial state is an empty array

// Reducer function to handle todo actions
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO_SUCCESS:
            return [...state, action.payload]; // Add the new todo to the state
        default:
            return state; // Return the current state for other actions
    }
};

export default todoReducer; // Export the reducer