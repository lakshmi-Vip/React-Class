import { createStore, applyMiddleware } from 'redux'; // Import createStore and applyMiddleware from redux
import createSagaMiddleware from 'redux-saga'; // Import createSagaMiddleware from redux-saga
import rootReducer from './reducers'; // Import rootReducer
import rootSaga from './sagas'; // Import rootSaga

const sagaMiddleware = createSagaMiddleware(); // Create a saga middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); // Create the Redux store with saga middleware

sagaMiddleware.run(rootSaga); // Run the root saga

export default store; // Export the store