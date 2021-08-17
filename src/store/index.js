import {createStore, applyMiddleware} from 'redux';
import Reducers from './Reducers';
import thunk from 'redux-thunk';
let middleWares = [thunk];
const initialState = {};
/*import {createLogger} from 'redux-logger';
if (__DEV__) {
  middleWares.push(createLogger());
}*/
const store = createStore(
  Reducers,
  initialState,
  applyMiddleware(...middleWares),
);

export default store;
