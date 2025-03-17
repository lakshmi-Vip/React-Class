import { all } from 'redux-saga/effects'; // Import all effect from redux-saga
import todoSaga from './todoSaga'; // Import todoSaga

// Root saga to combine all sagas
export default function* rootSaga() {
    yield all([
        todoSaga(),
    ]);
}