/************************************
 * IMPORTS
 ************************************/
import { createStore, applyMiddleware } from 'redux';
import mainReducer from '../reducers/mainReducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../sagas/sagas';

/************************************
 * Create STORE
 ************************************/
//const sagaMiddleware = createSagaMiddleware();
//const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));
const store = createStore(mainReducer);
// then run the saga
//sagaMiddleware.run(mySaga);

export default store;
/************************************
 * STORE TEST
 ************************************/
/*

showState();
addToMessageQueueDispatch('Learn about actions');
showState();
getMessageDispatch('Learn about actions');
showState();
removeFromMessageQueueDispatch('Learn about actions');
showState();
*/
