import { call, put, takeLatest } from 'redux-saga/effects'; // Import saga effects
import { ADD_TODO_REQUEST, addTodoSuccess, addTodoFailure } from '../actions/todoActions'; // Import actions

// Generator function to handle adding a todo
function* addTodoSaga(action) {
    try {
        // Simulate an API call
        const todo = { id: Date.now(), task: action.payload }; // Create a new todo object
        yield put(addTodoSuccess(todo)); // Dispatch success action with the new todo
    } catch (error) {
        yield put(addTodoFailure(error.message)); // Dispatch failure action with the error message
    }
}

// Watcher saga to watch for ADD_TODO_REQUEST actions
function* todoSaga() {
    yield takeLatest(ADD_TODO_REQUEST, addTodoSaga); // Call addTodoSaga when ADD_TODO_REQUEST is dispatched
}

export default todoSaga; // Export the saga